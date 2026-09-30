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

### SEO

The site is English only. `src/components/Head.tsx` emits a canonical link for
every page, and `netlify.toml` 301s the old `/nl/` and `/en/` URLs to their
unprefixed pages. See [ADR 3](docs/adr/0003-english-only.md).

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

`gatsby-adapter-netlify` handles the Netlify side of the build: it writes
`public/_headers` (immutable caching for the fingerprinted assets, plus a few
security headers) and `public/_redirects`. Both are generated, so put anything
hand-written in `static/` instead.
