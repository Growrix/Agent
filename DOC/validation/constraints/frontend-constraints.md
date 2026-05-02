# Frontend Constraints

Hard rules for any frontend plan produced by this OS. Each constraint has an id, rule, detection method, and failure code. The `reviewer` evaluates F1..F12 in order; any failure halts the pipeline.

## F1 — No raw values in components
**Rule:** Components MUST NOT contain raw color (`#hex`, `rgb()`, `hsl()`), spacing (`px`, `rem`, `em`), radius, shadow, duration (`ms`), or z-index literals. Tailwind utility classes that map to declared tokens are allowed; raw arbitrary values are not.
**Detection:** Lint emitted JSX/TSX for forbidden literal patterns; verify `tailwind.config.ts` only uses tokens from `design-system.tokens.json`.
**Failure:** `BLOCK F1: raw value <value> at <file>:<loc>`.

## F2 — Minimum sections per public page
**Rule:** Every public page MUST declare ≥7 sections (header, hero, value, proof, conversion, supporting, footer). Pages explicitly marked `min_sections_exempt: true` (404, legal, narrow utility) are allowed to omit, with the reason recorded.
**Detection:** Count sections in each page spec.
**Failure:** `BLOCK F2: page <route> has <n> sections without exempt flag`.

## F3 — Component states declared
**Rule:** Every component spec MUST declare every state required by `knowledge/frontend-rules/component-state-matrix.md` for its component class.
**Detection:** Cross-check component spec states against the matrix.
**Failure:** `BLOCK F3: component <name> missing state <state>`.

## F4 — Interactive element states
**Rule:** Every interactive element (button, link with action, input, control) MUST declare hover, `focus-visible`, active, disabled, loading where applicable, with visual treatment + ARIA + motion tokens.
**Detection:** Walk component specs and page specs for interactive elements.
**Failure:** `BLOCK F4: <element> at <ref> missing <state>`.

## F5 — No inline copy
**Rule:** Every visible string in a component or page MUST resolve to a key in `docs/frontend/content-library.md`. No hardcoded English strings in JSX/TSX, except documented third-party labels with explicit exception.
**Detection:** Scan for inline strings; verify referenced keys exist.
**Failure:** `BLOCK F5: inline string "<text>" at <file>:<loc>`.

## F6 — Reduced-motion fallback
**Rule:** Every animation declared in any component or page spec MUST declare a `reduced_motion` fallback that preserves the final visual state without layout shift.
**Detection:** Walk motion declarations.
**Failure:** `BLOCK F6: motion <id> at <ref> missing reduced_motion fallback`.

## F7 — Page spec completeness
**Rule:** Every page spec MUST contain: page definition, sections in visual order, page-level state requirements, responsive adaptation, SEO+metadata, conversion path, accessibility plan, performance plan, data fetching plan.
**Detection:** Schema-check each page spec frontmatter + required sections.
**Failure:** `BLOCK F7: page <route> missing section <section>`.

## F8 — Data source declared
**Rule:** Every dynamic section in a page spec MUST declare `data_source` (one of: `static`, `cms`, `database`, `integration`) AND the exact query/call. Static sections must declare `static`.
**Detection:** Walk sections in page specs.
**Failure:** `BLOCK F8: section <name> in <route> missing data_source`.

## F9 — Micro-animation purpose
**Rule:** Every micro-animation declaration MUST cite one of: `clarity`, `feedback`, `hierarchy`. Decorative motion is forbidden.
**Detection:** Walk motion declarations; reject any micro-animation without a `purpose` field or with a value outside the allowed set.
**Failure:** `BLOCK F9: micro-animation <id> at <ref> missing or invalid purpose`.

## F10 — Form completeness
**Rule:** Every form spec MUST declare: field list with content keys, validation rules (zod), submitting state, success state, server-error state, validation-error state, recovery affordance, privacy notice content key.
**Detection:** Walk form plans inside page specs.
**Failure:** `BLOCK F10: form at <route> missing <field>`.

## F11 — Single visual archetype
**Rule:** A project MUST select exactly one visual archetype from `knowledge/frontend-rules/visual-archetypes/`. Per-case-study or per-collection accent overrides are allowed only when the archetype explicitly permits them (`portfolio-craft`, `bold-consumer`).
**Detection:** Inspect `brief.brand.visual_archetype` and per-page accent declarations.
**Failure:** `BLOCK F11: multiple archetypes detected or unauthorized accent override`.

## F12 — Mobile parity (no hover-only discovery)
**Rule:** No information or action may be reachable only via hover. Every interactive disclosure MUST have a tap-equivalent on mobile.
**Detection:** Walk component specs for hover-only behaviors without tap parity.
**Failure:** `BLOCK F12: hover-only behavior at <ref> without mobile parity`.

## Enforcement order
The `reviewer` evaluates F1..F12 in order. Multiple failures may be reported in a single pass; the pipeline halts on any failure.

## Severity mapping
- F1, F5, F11: critical — almost always cause hardcoding or visual drift.
- F2, F3, F4, F7, F8, F10: critical — incomplete plan = improvising codegen.
- F6, F9, F12: critical — accessibility or quality risk.

All F-constraints are critical. There are no warnings; the gate is binary.

## Output
The reviewer adds a `frontend` block to `validation_report.json`:

```json
{
  "frontend": {
    "status": "passed|failed",
    "checks": [
      { "id": "F1", "status": "passed|failed", "evidence": "..." },
      { "id": "F2", "status": "passed|failed", "evidence": "..." },
      { "id": "F3", "status": "passed|failed", "evidence": "..." },
      { "id": "F4", "status": "passed|failed", "evidence": "..." },
      { "id": "F5", "status": "passed|failed", "evidence": "..." },
      { "id": "F6", "status": "passed|failed", "evidence": "..." },
      { "id": "F7", "status": "passed|failed", "evidence": "..." },
      { "id": "F8", "status": "passed|failed", "evidence": "..." },
      { "id": "F9", "status": "passed|failed", "evidence": "..." },
      { "id": "F10","status": "passed|failed", "evidence": "..." },
      { "id": "F11","status": "passed|failed", "evidence": "..." },
      { "id": "F12","status": "passed|failed", "evidence": "..." }
    ]
  }
}
```
