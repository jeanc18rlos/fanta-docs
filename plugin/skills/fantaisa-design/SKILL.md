---
name: fantaisa-design
description: Design on the live Fantaisa canvas over its MCP server. Use when the user asks to design, build, lay out, or mock up any UI, screen, page, card, panel, or component in Fantaisa (the native creative canvas exposed as an MCP server on http://127.0.0.1:3846/mcp). Covers the full build loop and the hard rules for auto-layout, nesting, components, and verification.
---

# Designing on the Fantaisa canvas

Fantaisa's editor is a live MCP server. You build on the **real** document and every change is an undoable operation. Follow this loop and these rules — they prevent the most common failures.

## Prerequisites
- The editor must be running and reachable at `http://127.0.0.1:3846/mcp` (the `fantaisa` MCP server). If tools aren't available, ask the user to launch it: `cargo run -p fanta-app`.

## The build loop (always, in order)
1. **Orient** — call `agent_playbook` (the official workflow + tool groups) and `get_guidelines` (load a guide and a style pack, e.g. category `"guide"` name `"web-app"`, category `"style"` name `"Fanta Futurist"`).
2. **Inspect before editing** — `get_editor_state`, then `get_document` / `snapshot_layout` to see what exists. Capture node ids at creation time; don't re-query across pages.
3. **Build bottom-up** — create leaves, assemble into rows/cards, rows into sections, sections into the page. Prefer `batch_design` for multi-step edits (use `bind` to reference an op's created node id in a later op).
4. **Verify** — `export_png {node}` or `get_screenshot {node}` (chrome-free), then `review_design` and fix what it flags.
5. **Save** — `save_document` (in-memory state is NOT auto-persisted).

## Hard rules (these are non-obvious and cause silent failures)
- **Nesting is explicit.** `create_*` and `insert_instance` drop nodes on the active page, not inside a frame by geometry. Reparent each child with `reorder {into: <frame_id>, to: "front"}` (front = last child = flow order), then call `set_auto_layout` on the container.
- **Auto-layout, not absolute placement.** Build panels/cards/rows as real auto-layout stacks (`set_auto_layout` with `direction`, `spacing` gap, `padding`), not flat absolutely-positioned children.
- **Fill-to-width = hug + stretch.** A child fills the parent's cross axis only when its own `set_auto_layout primary_sizing` is `hug` (a `fixed` primary sizing overrides stretch) AND you call `set_layout_child align_self:"stretch"` AFTER the parent is an auto-layout frame. Main-axis growth uses `fill_container`/`grow`.
- **No resize tool.** A text/shape box keeps its created size. Size text boxes for the LONGEST label they will hold (overridden text that's longer will clip).
- **Nested instance overrides need a PATH.** `set_instance_override` / `insert_instance` overrides resolve the root or a DIRECT child by id; a deeper descendant needs the full `target` PATH array `[subgroup, …, leaf]` or the override silently no-ops.
- **Icons & SVG.** `create_icon` = curated built-in set; `create_svg` = any SVG (path `d` or full `<svg>`, honors `viewBox`). Use `mode:"fill"` for solid/multi-contour art (holes need `fill_rule:"evenodd"`), `mode:"outline"` for line icons (bakes stroke into a filled path, crisp at any size).
- **Compact canvas, one disjoint world region per page.** `export_png` composites EVERY page overlapping the export rect, so each page must occupy a separate world region; within a page, pack frames tightly with small gutters.
- **Tokens & components.** Reuse: define a component once, insert instances; bind fills/radii to variables (`set_variables` / `bind_variable`) for theme-aware designs. See the `fantaisa-components` skill.

## Verification rule (critical)
Always pass a frame `node` to `export_png` / `get_screenshot` and keep frames ≤ 1920×1080. With no `node` these default to the whole document (every page across world space) and **time out** ("visible editor timed out"). Never screenshot a page or the canvas. See the `fantaisa-verify` skill for the review workflow.

## Prompting yourself well
Be specific and verifiable. Prefer "increase button padding to 16px" over "make it nicer". Iterate broad → refine, and verify each major section with a screenshot before moving on.
