---
name: fantaisa-components
description: Build components, variants, and design tokens on the Fantaisa canvas. Use when the user asks to create a component, add variants, set up design tokens/variables, theme a design (light/dark), or reuse an element across a Fantaisa design (the MCP canvas on :3846). Covers define_component, define_component_set, insert_instance, PATH overrides, set_variables, and bind_variable.
---

# Components, variants & tokens in Fantaisa

Reusable, tokenized designs are the goal — not hardcoded duplicates. `review_design` scores you on component reuse and token coverage.

## Components & instances
1. Build the master as a real auto-layout frame.
2. `define_component { root: <frame_id>, name }` — mark it a component master.
3. `insert_instance { component, x, y, name?, overrides?: [{prop, value}] }` — place instances.
4. `set_instance_override { id, target, prop, value }` — override per instance.

**PATH overrides (critical):** `set_instance_override` / `insert_instance` overrides resolve the component root or a DIRECT child by id. To target a descendant inside a sub-frame, pass the full `target` PATH array `[subgroup, …, leaf]`, otherwise the override silently no-ops. After recreating a master child, re-point overrides at the new id.

## Variant sets
- `define_component_set { components: [...] }` (or `nodes`) — combine masters into a variant set with named axes.
- `edit_variant_set { set, rename_axis?, add_value?, remove_value?, set_default?, set_member_value? }` — manage axes and defaults.
- `detach_instance { node }` — convert an instance back to editable frames when needed.

## Design tokens (variables)
- `create_theme_tokens { name }` — a new collection.
- `set_variables { collection?, variables: { name: { type, value | { theme, mode } } } }` — define tokens, including per-mode values for theming.
- `bind_variable { node, prop, index?, variable }` — bind a node property to a token. Bindable props: `fill`, `stroke`, `stroke_width`, `radius`, `opacity`, `visible`, `text`, `clip_width`, `clip_height`. Pass `variable: null` to unbind.
- `list_design_tokens` / `get_variables` — inspect what exists.

Bind backgrounds, borders, and radii to tokens so light/dark (or brand) modes switch by mode rather than by editing each node.

## Reference-grounded creation
When the visual direction is open, gather or generate references first with `create_reference_frame` (each ref carries source, comment, prompt bias, and influence/weight), then build the editable master to match. Verify with the `fantaisa-verify` skill.
