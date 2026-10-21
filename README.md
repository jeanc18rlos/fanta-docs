# Fanta docs

The Fumadocs site for [Fanta](https://github.com/jeanc18rlos/fanta-edit), a native design canvas backed by editable project source. The home page introduces the product. `/docs` documents the released Fanta 1.0 Public Alpha, and `/docs/capabilities` maps it in detail; `/docs/v2` previews the unreleased Fanta 2.0. The remaining pages cover setup, editor workflows, MCP, formats, and limits.

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

## Versions

Each Fanta version has its own content folder, which the sidebar shows as a version tab:

| Folder | URL | Documents |
| --- | --- | --- |
| `content/docs/(v1)` | `/docs` | Fanta 1.0.0 Public Alpha (Build45), the signed installer people can download |
| `content/docs/v2` | `/docs/v2` | Fanta 2.0, in development on `fanta-edit` `main` and not released |

`(v1)` describes only what Build45 ships. Its pages start from this repository's `409c3e7`, which tracked `fanta-edit` `9e582bee`, the same app code as Build45's source `57d86330`. They use that build's names: the `.zed` settings folder, `zed::` actions, `zed://` links and the `zed` Cargo package. Don't add unreleased features or later renames to it.

Every `v2` page shows a preview banner that links to the same page in 1.0 when one exists, and links between `v2` pages use `/docs/v2/...`. Search starts in the version being read and can switch to the other. `/llms.txt` and `/llms-full.txt` describe only the released version.

When 2.0 ships:

1. Rename `content/docs/(v1)` to `content/docs/v1` and `content/docs/v2` to `content/docs/(v2)`, so 1.0 moves to `/docs/v1` and 2.0 serves at `/docs`. Update `content/docs/meta.json` and each folder's title.
2. Rewrite internal links: `/docs/v2/...` to `/docs/...` in 2.0, and `/docs/...` to `/docs/v1/...` in 1.0.
3. Make `previewDocsRoute` in `lib/shared.ts`, the banner in `app/docs/[[...slug]]/page.tsx`, and the search tags in `components/search-dialog.tsx` and `app/api/search/route.ts` mark 1.0 as the older version.
4. Build, then check every link and the LLM feeds.

## Keep the docs accurate

The 2.0 preview was checked against `fanta-edit` remote `main` commit `578c12839286b62f2fafabc134a56929ab3ef60e` on October 21, 2026. When `fanta-edit` changes, compare the new source with the `v2` pages before updating claims. In particular, verify the live MCP tool list, platform support, user-visible controls, generated media flows, format handlers, and alpha limitations. A merged source change is not proof of a public release, so it belongs in `v2` until a signed installer ships it. Build and typecheck before publishing.

The Claude Code plugin that the `plugin/` pages document lives in [Fanta-JS](https://github.com/jeanc18rlos/Fanta-JS), under `plugin/` and `.claude-plugin/`. Keep those pages aligned with it. Draft platform/API files in a working checkout should be verified against the live backend before publication.

## Deploy

Import this GitHub repository into Vercel as a Next.js project. The `main` branch is the production source. After the initial import, Vercel can build each pushed commit automatically.
