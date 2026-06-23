# Fantaisa Docs

The documentation site for **Fantaisa** — a native creative canvas whose app is a live MCP server, so AI agents (Claude Code, Codex, GLM) design on the real document in real time.

This repo is two things at once:

1. **A docs site** built with [Fumadocs](https://fumadocs.dev) (Next.js) — LLM-first by default.
2. **A Claude Code plugin marketplace** — the `fantaisa` plugin + skills live in [`/plugin`](./plugin), and the repo root carries the marketplace manifest at [`.claude-plugin/marketplace.json`](./.claude-plugin/marketplace.json).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node 20+. Search is local (Orama); no external services needed.

## LLM-first features

- **`/llms.txt`** — a curated index of the docs.
- **`/llms-full.txt`** — the entire docs as one Markdown file (paste into any LLM).
- **Markdown twin of every page** — via the *Copy Markdown* / *Open in* buttons, or `/llms.mdx/docs/<path>`.
- **OG images** generated per page.

## Structure

```
app/                     Next.js App Router (home, /docs, llms.txt routes, OG images)
content/docs/            All documentation (MDX) + meta.json nav ordering
lib/                     Source loader, site identity (lib/shared.ts), layout
plugin/                  The Fantaisa Claude Code plugin (skills, command, MCP config)
.claude-plugin/          Marketplace manifest (makes this repo installable)
```

## The plugin

```bash
# With the Fantaisa editor running (cargo run -p fanta-app):
claude plugin marketplace add jeanc18rlos/fanta-docs
claude plugin install fantaisa@fantaisa-docs
```

See [`/plugin/README.md`](./plugin/README.md) and the **Claude Plugin & Skills** docs section.

## Deploy

Deploys to [Vercel](https://vercel.com) as a standard Next.js app (zero config).

## License

MIT
