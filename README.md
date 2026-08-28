# flovandotbe

## Requirements

- Node 22 (see `.nvmrc`, and `NODE_VERSION` in `netlify.toml` for the build)
- NPM

## Technology

- Gatsby
- ~~React~~ Preact (_much_ better for performance)
- Tailwind
- ESLint + Prettier

## Getting started

Run `npm install`

> Note: `gatsby-plugin-preact` peers on an older `preact-render-to-string` than
> Gatsby 5 needs, so the install fails to resolve on its own. `.npmrc` sets
> `legacy-peer-deps` to get past it, here and on the Netlify build image.

## Development

### Dev server

```npm run dev```

The page will be available on `http://localhost:8000/`
The GraphiQL interface can be found on `http://localhost:8000/___graphql`

### Icons

Icons are stored as raw SVG files inside `src/icons`. These are included in the project as an SVG sprite.

To update the SVG sprite, run

```npm run build:icons```

> Note: Icons should have a `viewBox`, but no `width` or `height` (this makes them scalable through CSS). Also make sure there is no `fill` of `stroke` color defined.

### i18n

This project uses `i18next` (and `react-i18next`) for multi-language support.
The implementation is very bare bones and fragile, but is does the job and I don't mind the tinkering.

Example of how to do translations inside of a component:

```tsx
// src/components/MyComponent.tsx

import { Trans, useTranslation } from '@herob191/gatsby-plugin-react-i18next'

export const MyComponent = () => {
  const {t} = useTranslation('namespace') // this will create a `namespace.json` locale

  return (
    <>
      <h1>{t('This is my title')}</h1>
      <p>
        <Trans>This is a sentence with <strong>nested elements</strong></Trans>
      </p>
    </>
  )
}
```

Note that you will need to query the locales from the page that is using the above component, for example:

```tsx
// src/pages/index.tsx

import { graphql } from 'gatsby'
import { MyComponent } from '../components/MyComponent'

export default function IndexPage() {
  return (
    <MyComponent />
  )
}

export const query = graphql`
  query IndexPage($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["namespace"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
```

If you don't query the language, the key will be used as a fallback.

To extract the translation keys into the various locale files, run

```npm run i18n:extract```

### SEO

Every page is built three times: unprefixed, `/nl/` and `/en/`. The unprefixed
URL is the canonical one for Dutch, so `src/components/Head.tsx` emits a
canonical link and `hreflang` alternates from the i18n page context, and the
sitemap skips the `/nl/` duplicates. See
[ADR 1](docs/adr/0001-canonical-language-urls.md).

`static/robots.txt` and `gatsby-plugin-sitemap` produce `/robots.txt` and
`/sitemap-index.xml`.

## Production

### Building

```npm run build```

The build fails on Node 23 and up unless `msgpackr` resolves to 1.11.2 or
later, which the `overrides` in `package.json` takes care of. See
[ADR 2](docs/adr/0002-node-and-msgpackr-pins.md).

### CI/CD

This repository is connected to Netlify and any changes to the `main` branch will result in a new build and deploy to production.
