# flovandotbe

## Requirements

- NodeJS and NPM

## Technology

- Gatsby
- React
- Tailwind
- ESLint + Prettier

## Getting started

Run `npm install`

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

## Production

### Building

```npm run build```

### CI/CD

This repository is connected to Netlify and any changes to the `main` branch will result in a new build and deploy to production.
