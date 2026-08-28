# 1. The unprefixed URL is canonical for Dutch

Date: 2026-08-28

## Status

Accepted

## Context

`@herob191/gatsby-plugin-react-i18next` runs with
`generateDefaultLanguagePage: true`, so every page is built three times:

- `/code/` — Dutch, no prefix
- `/nl/code/` — the same Dutch page under its language prefix
- `/en/code/` — the English page

The first two are identical content on two URLs. Nothing told a crawler which
one to index, and both were listed in the sitemap.

The plugin has a `siteUrl` option for exactly this, used to build language meta
tags, but it was still set to the `http://localhost:8000/` default from the
plugin's README, and nothing in `src/` rendered those tags anyway.

## Decision

The **unprefixed** URL is canonical for the default language. It is what
visitors land on, what the navigation links to, and what was already indexed.

`src/components/Head.tsx` derives, from the i18n page context:

- a canonical link — unprefixed for the default language, `/<lang>` otherwise;
- `hreflang` alternates for every language plus `x-default` pointing at the
  default language's unprefixed URL.

`src/components/Seo.tsx` renders them. `/nl/...` therefore canonicalises away
from itself, and `gatsby-plugin-sitemap` excludes `/nl/**` so the sitemap and
the canonical tags agree. The plugin's `siteUrl` was corrected to
`https://flovan.be`.

The plugin types its page context as `PageContext` but does not re-export it
from the package entry point, so `Head.tsx` restates the three fields it needs
as `I18nPageContext` rather than deep-importing `dist/types`.

## Consequences

- One indexable URL per page per language.
- A new page picks this up automatically; it only has to pass `pageContext`
  through to `FlovanHead`, like the other pages in `src/pages/`.
- Adding a language means adding it to the plugin's `languages` option and
  nothing else: the alternates are generated from that list.
- The 404 pages get a canonical too. Harmless, they are excluded from the
  sitemap and are not linked.
