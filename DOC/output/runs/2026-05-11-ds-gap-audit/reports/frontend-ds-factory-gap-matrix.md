# Frontend DS / Factory / DOC — Gap Matrix (10-layer checklist + DS handbook)

Date: 2026-05-11

## Scope
This report compares three systems against the **10-layer frontend visual structure checklist** and the **Frontend DS handbook**:

1. **OS governance + rules**: `DOC/` (constraints, knowledge, planner/reviewer wiring)
2. **Reference Design System**: `Frontend-Master_DS/Frontend-Master_DS/`
3. **Standalone generator**: `ai-product-factory/` (design token engine + generated app outputs)

Baseline checklist: `DOC/knowledge/frontend-rules/frontend-visual-structure-checklist.md`
Handbook: `Frontend-Master_DS/Frontend-Master_DS/DOC/DS BUILDING/HandBook_Frontend/*.md`

## Executive summary (highest-impact gaps)

### Blockers (must resolve for end-to-end consistency)
1. **Factory token model is incomplete vs OS token taxonomy**
   - OS requires 10 mandatory token categories including `breakpoints`, `z_index`, `iconography`, `imagery`.
   - Factory base tokens + schema + engine only cover theme/typography/spacing/radii/shadows/motion.

2. **Breakpoint policy mismatch (OS vs DS vs Tailwind defaults)**
   - OS responsive rule defines `2xl` at **1440px**.
   - DS handbook + DS utilities reference `2xl` at **1536px**.
   - Factory-generated Tailwind config does not define `screens`, so Tailwind defaults apply (2xl=1536).

3. **Factory-generated apps include motion + test tooling but don’t implement the contract**
   - Example generated app declares `framer-motion` and `@playwright/test` but has no imports/usages/tests/config in source.

### Non-blockers (important, but can be staged)
- DS handbook strongly expects Storybook + visual regression discipline; the DS repo currently has no Storybook setup and no visual regression harness.
- OS governance has the checklist now, but **token category completeness** is currently described primarily in knowledge/spec; enforceability depends on planner + reviewer checks being explicit.

---

## Evidence: key deltas

### A) OS token taxonomy (mandatory categories)
- Evidence: `DOC/knowledge/frontend-rules/design-tokens-rules.md`
  - Declares mandatory categories: `color`, `typography`, `spacing`, `radius`, `shadow`, `motion`, `breakpoints`, `z_index`, `iconography`, `imagery`.

### B) Factory token schema + base tokens omit required categories
- Evidence: `ai-product-factory/design-system/contracts/design-token-engine.schema.json`
  - `required`: `["theme","typography","spacing","radii","shadows","motion"]`
  - No `breakpoints`, `z_index`, `iconography`, `imagery`.

- Evidence: `ai-product-factory/design-system/tokens/base.tokens.json`
  - Top-level keys present: `theme`, `typography`, `spacing`, `radii`, `shadows`, `motion`.

- Evidence: `ai-product-factory/design-system/engine/design-token-engine.mjs`
  - Returned object includes: `theme`, `typography`, `spacing`, `radii`, `shadows`, `motion`.

### C) Breakpoint mismatch (OS=1440, DS=1536)
- Evidence: `DOC/knowledge/frontend-rules/responsive-rules.md`
  - Defines `2xl` (1440) = 1440+.

- Evidence: `Frontend-Master_DS/.../HandBook_Frontend/08-RESPONSIVE-BREAKPOINTS.md`
  - Defines `--ds-bp-2xl` as 1536px.

- Evidence: `Frontend-Master_DS/.../src/ds/styles/ds.utilities.css`
  - Comment: `Breakpoints: ... 2xl 1536px`.

### D) Factory-generated app raw Tailwind values + default screens
- Evidence: `ai-product-factory/generated/apps/2026-05-11/sunenergy-pro-website/tailwind.config.ts`
  - Hardcoded hex colors, spacing values, radii, shadows, zIndex, durations.
  - Does **not** define `theme.screens`, so Tailwind defaults apply.

### E) Factory-generated app declares tooling but doesn’t use it
- Evidence: `ai-product-factory/generated/apps/2026-05-11/sunenergy-pro-website/package.json`
  - Declares `framer-motion`, `@playwright/test`, `@axe-core/playwright`.

- Evidence (repo scan):
  - `grep_search` on `ai-product-factory/generated/apps/2026-05-11/sunenergy-pro-website/src/**/*.tsx` for `framer-motion` returned **no matches**.
  - `file_search` for `playwright.config.*` under the app returned **no files found**.
  - No `tests/` directory exists at the generated app root.

### F) DS coverage: z-index + icon tokens exist; accessibility tests exist
- Evidence: `Frontend-Master_DS/.../src/ds/styles/ds.tokens.css`
  - Has `--ds-z-*` ladder and `--ds-icon-*` tokens.

- Evidence: `Frontend-Master_DS/.../src/ds/components/__tests__/keyboard.a11y.test.tsx`
  - Keyboard/accessibility tests for Modal/Drawer/DropdownMenu focus handling.

### G) DS handbook expects visual regression discipline
- Evidence: `Frontend-Master_DS/.../HandBook_Frontend/20-DOCUMENTATION-TESTING.md`
  - Section **11. Visual Regression Testing** lists tools (Chromatic/Percy/Playwright/etc) and capture matrix.

---

## 10-layer stack — coverage matrix

Legend: ✅ present · 🟡 partial · ❌ missing

| Layer | DOC (OS governance) | Frontend-Master_DS | ai-product-factory (engine + outputs) |
|---|---|---|---|
| 1) Design foundation (tokens + breakpoint/z/z-icon/imagery policy) | ✅ (rules/spec exist; token categories mandated) | 🟡 (tokens exist; breakpoint policy diverges from OS; imagery is mostly policy-doc, not tokenized) | ❌ (schema/engine/base tokens omit required categories) |
| 2) Primitives (buttons/inputs/text/layout + states) | ✅ (state matrix + constraints) | ✅ (components + a11y tests exist) | 🟡 (primitive catalog exists; generated components exist, but tokenization is inconsistent) |
| 3) Components (reusable + APIs) | ✅ (component spec rules + completeness constraints) | ✅ (broad component set, stable DS exports) | 🟡 (generated components exist; consistency varies; no DS-level API governance shown) |
| 4) Layout (shell, sections, hierarchy) | ✅ (page archetypes + per-page spec rules) | ✅ (utilities/shell patterns exist) | ✅ (generated app has PageShell/Header/Footer/MobileBottomNav/ThemeSwitcher) |
| 5) Styling architecture (theme switch, vars, layering) | ✅ (token rules + invariants) | ✅ (CSS layers + token vars) | 🟡 (theme switching exists; Tailwind config uses raw values; token authority not centralized) |
| 6) Responsive design (mobile-first + parity) | ✅ (responsive rules, mobile parity constraint) | 🟡 (handbook is strong; breakpoints differ from OS) | 🟡 (Tailwind defaults; no explicit mapping to OS breakpoints) |
| 7) Motion & interaction (purposeful + reduced motion) | ✅ (motion rules + constraints) | ✅ (motion tokens present; handbook guidance) | ❌ (declares framer-motion but does not use it in generated app example) |
| 8) State-based UI (loading/empty/error/success) | ✅ (empty-state rules + state matrix + constraints) | ✅ (patterns + tests exist) | 🟡 (primitive catalog includes skeleton; app example not audited for route-level states) |
| 9) Quality & consistency (a11y + regression strategy) | ✅ (a11y constraints + QA spec includes visual regression) | 🟡 (a11y tests exist; no visual regression harness present) | 🟡 (deps include Playwright/axe; no tests/config present in example) |
| 10) Documentation (DS docs + component docs) | ✅ (planning artifacts specs + reviewer gate expectation) | 🟡 (handbook exists; no Storybook/docs site setup detected) | 🟡 (factory checklist mentions DS foundation; no doc system detected) |

---

## DS handbook domains (beyond the 10-layer checklist)

| Handbook chapter | DOC coverage | DS repo | Factory coverage |
|---|---|---|---|
| 07 Iconography | 🟡 (archetypes + token rules mention iconography) | ✅ (`lucide-react` + icon tokens) | 🟡 (`lucide-react` present in generated app deps; token system missing) |
| 08 Responsive breakpoints | ✅ (responsive rules explicit) | ✅ (explicit, but 2xl differs) | 🟡 (defaults; not aligned to OS) |
| 11 Form anatomy | ✅ (F10 + a11y + patterns exist) | ✅ (DS components/patterns exist) | 🟡 (react-hook-form/zod deps present; enforcement unknown) |
| 13 Navigation patterns | 🟡 (scattered rules; no dedicated handbook-equivalent) | ✅ (handbook chapter exists) | 🟡 (generated app has header/nav/mobile dock) |
| 14 Overlay patterns | 🟡 (state matrix + a11y rules mention modal/drawer/sheet/toast) | ✅ (handbook chapter + modal/drawer tests) | 🟡 (radix deps present; implementation inconsistent) |
| 15 Feedback patterns | 🟡 (content rules include toast; empty-state rules exist) | ✅ (handbook chapter exists) | 🟡 (radix toast dep present; not audited) |
| 16–18 Theming/CSS/Token architecture | ✅ (token rules, constraints) | ✅ (CSS layering + tokens) | ❌ (token schema incomplete; generated config uses raw values) |
| 19 Component API patterns | ✅ (spec rules exist) | ✅ (handbook chapter exists) | 🟡 (primitive catalog lists states/a11y, but not API conventions) |
| 20 Documentation & testing | ✅ (QA spec includes visual regression; pre-deploy checklist requires it) | 🟡 (docs exist; Storybook/visual regression harness not found) | 🟡 (Playwright dep present; no tests/config found) |

---

## Recommendations (DS-first)

### Phase 0 — Governance alignment (DOC-only)
Goal: ensure the checklist is not “documented but unenforced”.

- Add/confirm reviewer checks explicitly validate **token category completeness** (not just “no raw values”).
- Add/confirm reviewer checks validate that any declared tooling (e.g., motion library) is used (already represented in F14, but factory outputs aren’t aligned to the OS gate).

### Phase 1 — Update the DS (Frontend-Master_DS)
Goal: make the DS the strongest reference implementation for the OS.

1. Decide canonical breakpoint policy:
   - Option A: Align DS to OS `2xl=1440`.
   - Option B: Align OS to DS/Tailwind default `2xl=1536`.

2. Implement the handbook’s documentation/testing discipline:
   - Add Storybook (or alternative) and a minimal visual regression harness (Playwright screenshots is the most repo-local option).

3. Ensure reduced-motion + forced-colors guidance is reflected in DS tokens/utilities (handbook already describes it).

### Phase 2 — Update the factory frontend design-system engine
Goal: make factory-generated apps comply with the OS design tokens contract.

- Expand `design-token-engine.schema.json` and `base.tokens.json` to include:
  - breakpoints + containers
  - z-index ladder
  - iconography tokens
  - imagery policy block

- Update `design-token-engine.mjs` to populate those values (using OS defaults or archetype-driven defaults).

- Update generators so `tailwind.config.ts` consumes the token file rather than embedding raw values.

### Phase 3 — Wiring + enforcement
Goal: make DS + factory + DOC converge.

- Decide which token source is canonical for shipped apps:
  - (Recommended) OS tokens file is canonical; DS is the reference; factory emits OS-compatible token JSON.

- Add a factory-level validation step that checks the generated app against the OS constraints that can be statically verified (token usage, breakpoints, motion usage, a11y smoke, presence of visual regression plan).

---

## Open decisions
1. Canonical `2xl` breakpoint: **1440 vs 1536**.
2. Canonical visual regression approach: **Playwright screenshots (local)** vs **Chromatic/Percy (SaaS)**.
3. Whether Storybook is mandatory for the DS, or optional per project.

