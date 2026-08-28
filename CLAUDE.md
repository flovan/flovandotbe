# flovandotbe

Gatsby site for flovan.be, a one-person web studio. Static, no functions, no
CMS: content lives in the components and in the locale files. Dutch and
English, Dutch is the default.

## Commands

Node 22 (`.nvmrc`). `npm install` — `.npmrc` sets `legacy-peer-deps`, which the
install cannot resolve without.

```sh
npm run dev          # gatsby develop on :8000, GraphiQL on /___graphql
npm run build        # gatsby build, output in public/
npm run lint         # eslint, --max-warnings=0, so warnings fail
npm run typecheck    # tsc --noEmit
npm run build:icons  # rebuilds the SVG sprite from src/icons
npm run i18n:extract # pulls translation keys into src/locales
```

`npm run lint` and `npm run typecheck` must both be clean; there are no tests.
Verify UI work by building and reading the HTML in `public/`, or with
`npm run dev`.

## Layout

- `src/pages/` — one file per route, each exporting a component, a `Head` and a
  page `query`. The query has to pull `locales` for the namespaces the page
  uses, or the translation keys fall through as literals.
- `src/components/Head.tsx` — the `Head` every page exports, working around
  Gatsby Head's lack of i18n support. It also builds the canonical and
  `hreflang` links; `Seo.tsx` renders them.
- `src/icons/` holds raw SVGs, built into `static/svg/sprite.svg`. Do not edit
  the sprite.
- `src/locales/<lang>/<namespace>.json` — translations, one namespace per page.
- `static/` is copied to the site root verbatim.

## Things that will catch you out

- **Every page exists three times**: unprefixed, `/nl/` and `/en/`. The
  unprefixed URL is canonical for Dutch. A new page must pass `pageContext`
  through to `FlovanHead` or it emits no canonical. See
  `docs/adr/0001-canonical-language-urls.md`.
- The build dies on Node 23+ with `RangeError: "length" is outside of buffer
  bounds` if `msgpackr` resolves below 1.11.2. An `overrides` entry holds it
  current; see `docs/adr/0002-node-and-msgpackr-pins.md`.
- Gatsby is in maintenance mode and there is no v6, so stay on the 5.x line.
- `npm audit` reports dozens of vulnerabilities. They are all build-time
  tooling, mostly `sharp`/libvips pinned by `gatsby-plugin-sharp`. Nothing
  ships to the browser: `npm audit --omit=dev` is the number that matters and
  it is 0.
- `netlify.toml` declares `functions = "lambda"`, but no such directory exists
  and the site is fully static. Bot traffic hitting unknown paths costs
  nothing, so it needs no redirect rules.
- React is aliased to Preact by `gatsby-plugin-preact`. Anything relying on
  React internals is a risk.

## Conventions

Follow the surrounding code:

- No semicolons, single quotes, two-space indent, 80 columns; prettier is
  wired into eslint, so formatting drift fails the lint step.
- Components are arrow functions with a default export.
- User-facing strings go through `t()` or `<Trans>`, never inline. Dutch first,
  English in `src/locales/en/`.
- Tailwind for styling, with the project's `flovan-*` font-size and spacing
  scales rather than the defaults.
- Commit messages are Conventional Commits (`feat:`, `fix:`, `chore:`), with a
  body explaining why when it is not obvious. commitlint runs on commit.
