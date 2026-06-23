---
description: Design on the live Fantaisa canvas using the agent build loop
---

Design the following on the live Fantaisa canvas (MCP server `fantaisa` at http://127.0.0.1:3846/mcp):

**$ARGUMENTS**

Follow the Fantaisa build loop and hard rules (the `fantaisa-design` skill):

1. Call `agent_playbook`, then `get_guidelines` to load a relevant guide and style pack.
2. Inspect with `get_editor_state` and `get_document` / `snapshot_layout`. Capture node ids as you create them.
3. Build bottom-up with explicit nesting (`reorder {into, to:"front"}`) and real auto-layout (`set_auto_layout`, `set_layout_child`). Reuse components and bind to design tokens where it makes sense. Prefer `batch_design` for multi-step edits.
4. Verify: `export_png {node}` (always pass a frame node, keep it ≤ 1920×1080), then `review_design` and fix what it flags.
5. `save_document`.

If the `fantaisa` tools are unavailable, tell me to launch the editor with `cargo run -p fanta-app` and stop.
