# Fantaisa plugin for Claude Code

Drive the [Fantaisa](https://github.com/jeanc18rlos/fanta-docs) design canvas from Claude Code. The plugin connects to the editor's live MCP server and ships the skills + command agents need to design well.

## What's inside

- **`mcpServers.fantaisa`** — the `fantaisa` MCP server over Streamable HTTP at `http://127.0.0.1:3846/mcp` (the running editor).
- **Skills** (`skills/`):
  - `fantaisa-design` — the full build loop and hard rules.
  - `fantaisa-verify` — screenshots, compare, and `review_design`.
  - `fantaisa-components` — components, variants, and design tokens.
- **Command** (`commands/design.md`) — `/design <description>` kicks off a build.

## Install

```bash
# The Fantaisa editor must be running: cargo run -p fanta-app
claude plugin marketplace add jeanc18rlos/fanta-docs
claude plugin install fantaisa@fantaisa-docs
```

Or wire up just the MCP server:

```bash
claude mcp add fantaisa --transport http http://127.0.0.1:3846/mcp
```

## Usage

```text
/design a sign-in card with email, password, and a primary button
```

See the full docs at the [Claude Plugin & Skills](https://github.com/jeanc18rlos/fanta-docs) section.
