---
name: fanta-components
description: Create and reuse components and instances on the live Fanta canvas.
---

# Components in Fanta

Build and inspect the intended master first. Use `batch_design` with `create_component` to turn a supported node into a component and `create_instance` to place a linked copy. Reuse returned IDs and verify with `batch_get` and `get_screenshot`.

`batch_design` also supports `set_auto_layout` and basic property changes. The six-tool local MCP server does not expose the old `define_component_set`, `set_variables`, `bind_variable`, or `set_instance_override` tool names. Use Fanta's component and variables UI for capabilities outside the MCP vocabulary, and describe that distinction to the user.
