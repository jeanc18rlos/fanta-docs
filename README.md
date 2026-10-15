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

## Product overview and visual identity

The home page and docs introduce FNX, Fanta's differences from Figma, Git workflows, and the roadmap. `/docs/brand` contains the existing Fanta mark, app icon, and the docs palette. The site uses Geist and Geist Mono to match the Fanta website.

Fresh native app screenshots for Layers, Variables, the inspector, auto layout, components, Motion, Prototype, and FNX are in `public/screenshots/native-20261013/`. `/docs/screenshots` is the visual tour; matching guides use focused views that link to the unchanged full app capture. `captures.json` records the installed build and capture provenance.

Recorded workflow screenshots come from the owned Launch Card exercise under `public/launch/alpha-1.0.0-20261012/`. `lib/launch-media.ts` records the reviewed build and capture provenance. Keep screenshots and captions aligned with the visible workflow, and distinguish current source features from packaged behavior and future work. The roadmap links its implementation and acceptance evidence; it does not promise delivery dates.

## Keep the docs accurate

The capability map was checked against `fanta-edit` remote `main` commit `44584c26eebb91b1ae97dd07a6715cb22ef289ee` on October 15, 2026. When `fanta-edit` changes, compare the new source with these pages before updating claims. In particular, verify the live MCP tool list, platform support, user-visible controls, generated media flows, format handlers, and alpha limitations. A merged source change is not proof of a public release. Build and typecheck before publishing.

The Claude Code plugin that `content/docs/plugin/` documents lives in [Fanta-JS](https://github.com/jeanc18rlos/Fanta-JS), under `plugin/` and `.claude-plugin/`. Keep those pages aligned with it. Draft platform/API files in a working checkout should be verified against the live backend before publication.

## Deploy

Import this GitHub repository into Vercel as a Next.js project. The `main` branch is the production source. After the initial import, Vercel can build each pushed commit automatically.
