---
name: fanta-design
description: Edit the design open in Fanta using its local MCP tools.
---

# Design on the Fanta canvas

1. Call `get_editor_state`, `get_guidelines`, and `get_design_system` to understand the active page, project brief, components, variables, and canvas conventions.
2. Inspect relevant nodes with `batch_get`; page wide results with `offset` and `limit`.
3. Apply focused `batch_design` calls using its `ops` array. Each batch is one undoable transaction and rolls back if an operation fails. Operations include creation, properties, text style, stroke, shadow, auto-layout, parenting, order, transforms, grouping, components, deletion, selection, and viewport.
4. Capture returned IDs before editing new nodes. Put children under their actual parent; overlap alone does not create nesting.
5. Use `get_screenshot` to verify the result. `read_fnx_source` can inspect bounded source slices and `validate_fnx_source` can check a complete candidate before a file edit. Fanta autosaves; there is no `save_document` tool.

`batch_design` also supports variable collections, modes, bindings, component variants, properties, and instance values. Use `prepare_design_asset` only to open a generation draft for the user's review; it does not submit a generation request.

When the local MCP operations cannot express a change, say so and use the app's inspector or project source where appropriate. Do not invent tools from older docs.
