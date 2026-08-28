# 2. Pin Node 22 and unpin msgpackr

Date: 2026-08-28

## Status

Accepted

## Context

`gatsby build` failed on Node 24 in the lmdb datastore:

```
ERROR #11321  API.NODE.EXECUTION
"internal-data-bridge" threw an error while running the sourceNodes lifecycle:
RangeError: "length" is outside of buffer bounds
```

The cause is neither Gatsby nor lmdb. `msgpackr` 1.11.0 calls
`utf8Write(string, position, 0xffffffff)`. Node 22.7 started bounds-checking
that argument and Node 23 rejects it outright. Upstream fixed it in 1.11.2
(msgpackr#144, gatsbyjs/gatsby#39223).

`lmdb@2.5.3` — which every Gatsby 5 release pins, 5.16.1 included — already
allows `msgpackr@^1.5.4`. Only the lockfile held it at 1.11.0.

Separately, nothing in the repo pinned a Node version. Netlify's build image
uses whatever Node it ships with, currently 24, so the deploy was one image
rollover away from the same failure.

## Decision

- `"overrides": { "msgpackr": "^1.11.2" }` in `package.json`, resolving to
  1.12.1. Not the `"overrides": { "lmdb": "3.5.x" }` that the GitHub thread
  suggests: that swaps the native storage engine under Gatsby's datastore,
  when 2.5.3 works once msgpackr is current.
- Node 22 pinned in `.nvmrc` and as `NODE_VERSION` in `netlify.toml`. Node 20
  went end of life in April 2026; 22 is LTS until April 2027.
- `.npmrc` sets `legacy-peer-deps`. `gatsby-plugin-preact` peers on
  `preact-render-to-string@^5` while Gatsby 5 needs 6, which makes both
  `npm install` and `npm ci` fail to resolve.

## Consequences

- The build works on Node 22 and on 24, verified on both.
- The override can be dropped if Gatsby ever moves to lmdb 3.x, which pulls a
  current msgpackr on its own. There is no sign of that: Gatsby is in
  maintenance mode and there is no v6.
- `legacy-peer-deps` applies to every install in this project, so a genuine
  peer conflict introduced later will not be reported. Read install output when
  adding dependencies.
