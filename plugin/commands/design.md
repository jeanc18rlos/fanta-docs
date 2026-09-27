---
description: Design on the open Fanta canvas
---

Work on the currently open Fanta design using the `fanta` MCP server.

User request: **$ARGUMENTS**

Call `get_editor_state` and `get_guidelines`, then inspect relevant nodes with `batch_get`. Use `batch_design` with its `ops` array for focused changes. Set `parent` or reparent nodes to create real nesting. Call `get_screenshot`, inspect the result, and fix visible issues. Fanta autosaves project files. Report what changed and any limits.

If tools are unavailable, explain that Fanta must be running with a design open and that this plugin expects `/Applications/Fanta.app/Contents/MacOS/fanta --mcp-stdio`.
