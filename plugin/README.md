# Fanta plugin for Claude Code

This optional plugin connects Claude Code to the design open in the Fanta desktop app. It configures Fanta's `--mcp-stdio` bridge, provides a `/design` command, and bundles three workflow skills.

Install Fanta at `/Applications/Fanta.app`, launch it, and open a design project. Then run:

```bash
claude plugin marketplace add jeanc18rlos/fanta-docs
claude plugin install fanta@fanta-docs
```

The plugin uses `/Applications/Fanta.app/Contents/MacOS/fanta --mcp-stdio`. For other install paths, configure the MCP command manually. The current server has six tools: `get_editor_state`, `get_guidelines`, `batch_get`, `batch_design`, `get_screenshot`, and `read_fnx_source`. Edits are undoable and Fanta autosaves.

```text
/design Add a 320×180 card with a heading and primary button to the current page.
```

See the [Fanta documentation](https://github.com/jeanc18rlos/fanta-docs) for setup and limits.
