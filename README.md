# Fanta docs

The Fumadocs site for [Fanta](https://github.com/jeanc18rlos/fanta-edit), a native design canvas backed by editable project source. The home page introduces the product; `/docs/capabilities` maps the current alpha in detail; the remaining pages cover setup, editor workflows, MCP, formats, and limits.

## Develop

Use Node 22 or later, then run:

```bash
npm install
npm run dev
npm run types:check
npm run build
```

The site is a standard Next.js app. Fumadocs supplies local search, per-page Markdown, `/llms.txt`, and `/llms-full.txt`.

## Keep the docs accurate

The capability map was checked against `fanta-edit` remote `main` commit `d386b9f48557c35302ae8b28c195db453f490141` on October 8, 2026. When `fanta-edit` changes, compare the new source with these pages before updating claims. In particular, verify the live MCP tool list, platform support, user-visible controls, generated media flows, format handlers, and alpha limitations. A merged source change is not proof of a public release. Build and typecheck before publishing.

The repository also contains a Claude Code plugin in `plugin/`. Its local MCP configuration should stay aligned with Fanta's current stdio bridge. Draft platform/API files in a working checkout should be verified against the live backend before publication.

## Deploy

Import this GitHub repository into Vercel as a Next.js project. The `main` branch is the production source. After the initial import, Vercel can build each pushed commit automatically.
