---
name: fanta-components
description: Create and reuse components and instances on the live Fanta canvas.
---

# Components in Fanta

Build and inspect the intended master first. Use `batch_design` with `create_component` to turn a supported node into a component and `create_instance` to place a linked copy. Reuse returned IDs and verify with `batch_get` and `get_screenshot`.

Read `get_design_system` before creating a new master or token. `batch_design` supports `combine_variants`, `create_component_property`, `bind_component_property`, `set_instance_property`, variable collections and modes, variable bindings, `set_auto_layout`, and child sizing. The old standalone tool names `define_component_set`, `set_variables`, and `set_instance_override` are not MCP tools; these actions are operations inside `batch_design`.
