# 3. Serve the site in English only

Date: 2026-09-30

## Status

Accepted. Supersedes [ADR 1](0001-canonical-language-urls.md).

## Context

The site was built in Dutch and English with
`@herob191/gatsby-plugin-react-i18next`, so every page existed three times
(unprefixed, `/nl/` and `/en/`), with canonical and `hreflang` links to
reconcile them. Every string went through `t()` or `<Trans>`, and every page
had to query its locale namespaces or the keys rendered as literals.

For a one-person studio that cost more to maintain than a second language was
worth.

## Decision

Drop i18n and serve English only. Strings are written inline in the
components, the plugin, the i18next packages and `src/locales/` are removed,
and `Head.tsx` takes a title and the pathname instead of the i18n page
context.

The `/nl/` and `/en/` URLs are indexed, so `netlify.toml` redirects them with a
301 to the unprefixed page.

## Consequences

- One URL per page; the canonical is just the page's own pathname, and there
  are no `hreflang` alternates.
- Pages no longer need a `locales` query.
- Adding a language again means reintroducing an i18n setup from scratch.
