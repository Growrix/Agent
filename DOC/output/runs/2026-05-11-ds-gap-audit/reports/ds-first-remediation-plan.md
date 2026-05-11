# DS-first remediation plan (DOC → DS → Factory convergence)

Date: 2026-05-11

## Principles
- **Single source of truth for shipped apps**: `DOC/knowledge/frontend-rules/design-tokens-rules.md` + emitted `design-system.tokens.json`.
- **Reference implementation**: `Frontend-Master_DS` should demonstrate the contract (tokens, a11y behaviors, patterns, testing discipline).
- **Generator compliance**: `ai-product-factory` must emit apps that pass the OS frontend constraints (esp. tokens/breakpoints/motion/a11y + QA plan).

## Phase 0 — Governance hardening (DOC-only, safe)
Goal: make “mandatory token categories” and DS handbook expectations enforceable (not just documented).

1. Add an explicit reviewer check for **token category completeness**
   - Rule: `design-system.tokens.json` must include all mandatory categories from `design-tokens-rules.md`.
   - Where this should live: `DOC/validation/constraints/frontend-constraints.md` (new constraint id) or a dedicated checklist item in reviewer’s workflow.
   - Acceptance: a missing `breakpoints` or `z_index` in tokens yields a deterministic `BLOCK`.

2. Add an explicit reviewer check for **visual regression plan presence**
   - Rule: planning artifacts must include the `visual_regression` block from `DOC/execution/spec-rules/qa-system-spec.md`.
   - Acceptance: missing `visual_regression` section yields a deterministic `BLOCK`.

3. Confirm output-root contract is consistent across agent specs
   - Canonical root: `DOC/output/runs/<timestamp>/...`.
   - Acceptance: no agent spec instructs outputs outside that root.

## Phase 1 — Update the DS (Frontend-Master_DS)
Goal: make DS the strongest reference implementation of the OS frontend contract.

### 1.1 Breakpoint alignment decision (pick one)
- Option A (align DS to OS): set DS `2xl` to **1440px**.
- Option B (align OS to DS/Tailwind defaults): set OS `2xl` to **1536px**.

Acceptance:
- DS handbook `08-RESPONSIVE-BREAKPOINTS.md` and DS utilities comments match the chosen values.
- OS `DOC/knowledge/frontend-rules/responsive-rules.md` matches the chosen values.

### 1.2 Add DS visual regression harness (handbook Chapter 20)
Recommendation: **Playwright screenshots** (local, self-hosted) as the minimal baseline.

Acceptance:
- DS has a script (e.g., `ds:visual`) that captures a small set of component/pattern surfaces in:
  - light/dark
  - mobile/tablet/desktop viewports
  - reduced-motion snapshot
- CI gate exists (even if local-only initially) that compares against baselines.

### 1.3 Add DS documentation surface (Storybook or alternative)
Handbook suggests Storybook patterns; DS repo currently has no Storybook setup.

Acceptance:
- DS can render component variant matrices in a docs runner.
- Docs include at least: Button, Input, Modal/Drawer/Sheet, Toast/Alert, Table.

## Phase 2 — Update the factory frontend DS engine (ai-product-factory)
Goal: factory-generated apps become OS-compliant instead of “template-ish”.

### 2.1 Extend design token schema and base tokens
Files:
- `ai-product-factory/design-system/contracts/design-token-engine.schema.json`
- `ai-product-factory/design-system/tokens/base.tokens.json`

Add mandatory categories:
- `breakpoints` + `containers`
- `z_index`
- `iconography`
- `imagery` (policy object)

Acceptance:
- Schema requires these keys.
- Base tokens include sensible defaults.

### 2.2 Extend token engine output
File:
- `ai-product-factory/design-system/engine/design-token-engine.mjs`

Acceptance:
- `composeDesignTokens(...)` returns the mandatory categories.

### 2.3 Make generators consume tokens instead of raw Tailwind literals
Files (expected):
- builder templates under `ai-product-factory/builders/**` that emit `tailwind.config.ts`

Acceptance:
- Generated `tailwind.config.ts` references token values (or a generated `tokens.css`) instead of embedding hex/spaces/durations.
- `screens` reflect the chosen breakpoint policy.

### 2.4 Stop shipping unused deps (motion/tests)
Acceptance:
- If `framer-motion` is declared, there are ≥3 real usages (hero, card hover, modal/drawer transition) aligning with constraint F14.
- If Playwright is declared, there is at least one smoke test + (optionally) visual snapshot pipeline.

## Phase 3 — End-to-end wiring
Goal: DS + factory + DOC converge and stay converged.

- Decide canonical token mapping between DS naming (`--ds-*`) and OS naming (`--color-*`, `--space-*`, etc.).
  - Either: rename DS tokens to match OS, OR add an adapter layer.

- Add a factory release validator that runs a **subset** of OS checks against a generated app:
  - token categories present
  - breakpoints match
  - no raw values (or raw values limited to token file)
  - motion/tooling usage

---

## Authorization needed
This plan requires edits outside `DOC/` and `.github/agents/` (DS repo + factory code). If you want me to implement Phase 1 and Phase 2, confirm:
- Breakpoint decision (1440 vs 1536)
- Visual regression approach (Playwright local vs Chromatic/Percy)
- Whether Storybook is mandatory for the DS
