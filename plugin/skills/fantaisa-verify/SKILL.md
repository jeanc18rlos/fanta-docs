---
name: fantaisa-verify
description: Verify and review designs on the Fantaisa canvas. Use when the user asks to screenshot, export, verify, compare against a reference, or review a design built in Fantaisa (the MCP canvas on :3846). Covers export_png/get_screenshot, compare_screenshot, and the review_design audit — and the rule that you must always screenshot a frame node, never a whole page.
---

# Verifying Fantaisa designs

Visual verification is part of every build. Do it before saving.

## Screenshots & export
- `export_png { node, path, scale?, padding?, background? }` — render a frame to a PNG file at exact world bounds.
- `get_screenshot { node, path? }` — chrome-free capture of a node (no OS permissions needed).
- `export_svg { node }` and `export_jsx { node }` (returns `.fnx` design-as-source) for other formats.

**Rule (critical):** ALWAYS pass a frame `node`, and keep frames ≤ 1920×1080. Without a `node`, these tools default to the entire document — every page across world space — which composites overlapping pages and **times out** ("visible editor timed out"). Never screenshot a page or the whole canvas.

## Compare against a reference
`compare_screenshot { reference_path, node, diff_path?, pixel_threshold?, passing_similarity? }` captures the node and diffs it against a reference image, returning a similarity score and a visual diff. Iterate until the similarity passes.

## Design review
`review_design { page?, min_gutter?=96, annotate_screenshot? }` runs a deterministic audit and returns issues / warnings / passes plus a per-section scorecard. It checks:
- hierarchy (loose page children that should be frames/sections)
- spacing & gutters (default minimum 96)
- pairwise overlap
- component reuse vs hardcoded duplication
- design-token coverage (fills/sizes/radii bound to variables)
- text overflow and contrast
- empty sections

Run `review_design` before `save_document`, fix what it flags, and re-run. Use `annotate_screenshot: true` to get a marked-up image of the issues.

## Failure sense for unattended loops
- `get_errors` / `get_logs` — read captured runtime errors/panics and warnings.
- `golden_save` / `golden_diff` — snapshot a known-good page and detect regressions later.
