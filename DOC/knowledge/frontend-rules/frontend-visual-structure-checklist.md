# Frontend Visual Structure Checklist (10-layer stack)

This is the **frontend-only** completeness checklist for UI structure and design-system implementation.

It is a condensed, enforceable version of `On Going DOCS/SAAS PLAN/ds.md`, mapped onto the OS’s existing rule files, constraint gates, and required planning artifacts.

Use it for:
- planning coverage checks (planner)
- execution coverage checks (developer)
- enforcement at the gate (reviewer)

---

## 1) Design Foundation Layer

**Must exist:**
- Design tokens (color, typography, spacing, radius, shadow, motion, breakpoints, z-index, iconography, imagery policies)
- Color system (semantic fg/bg/surface/border + status colors)
- Typography system (scale, weights, line-height, letter-spacing)
- Spacing system (scale + section rhythm)
- Grid + container system (columns/gutters, max widths)
- Breakpoint system (mobile-first)

**Primary rule sources:**
- `design-tokens-rules.md`
- `responsive-rules.md`

**Primary enforcement:**
- Frontend constraints: `F1` (no raw values), plus page-spec completeness constraints that require responsive declarations

**Planner artifacts that prove it:**
- `<output_root>/design-system.tokens.json`
- `<output_root>/design-system.md`

---

## 2) Primitive Layer

**Must exist:**
- UI primitives (buttons, inputs, text, labels, icons, avatar, layout primitives)
- Primitive variants (size/variant APIs)
- Interaction states (hover/active/focus-visible/disabled/loading)

**Primary rule sources:**
- `component-state-matrix.md`
- `accessibility-rules.md`

**Primary enforcement:**
- Frontend constraints: `F3` (states declared), `F4` (interactive states declared)

**Planner artifacts that prove it:**
- `<output_root>/component-system.md`
- `<output_root>/components/*.md`

---

## 3) Component Layer

**Must exist:**
- Reusable components (navigation, cards, tables, overlays, forms, feedback)
- Compound components (subparts like Header/Body/Footer patterns)
- Component APIs (stable props, variants, defaults)
- Composition guidance (how components combine)

**Primary rule sources:**
- `per-component-spec.md`
- `component-system-spec.md`

**Primary enforcement:**
- Completeness constraints: `CC1` (planned components implemented)

---

## 4) Layout Layer

**Must exist:**
- App shell(s) (header/nav/footer and, if applicable, app sidebar/shell)
- Layout system rules (containers, rails, splits)
- Section structure (hero, primary, proof, conversion, footer)
- Visual hierarchy (type scale + spacing + contrast)

**Primary rule sources:**
- `master-ui-architecture-spec.md`
- `per-page-spec.md`
- `page-archetype-rules.md`

**Primary enforcement:**
- Frontend constraints: section density rules and page completeness rules (`F2`, `F7`)

---

## 5) Styling Architecture

**Must exist:**
- Clear styling strategy (utility + component styling + token authority)
- Theme system (light/dark and switching strategy)
- CSS variables (tokenized; no raw values in component code)
- Layering system (z-index ladder for overlays)

**Primary rule sources:**
- `design-tokens-rules.md`
- `frontend_planner.agent.md` invariants (theme switcher, mobile nav, modal-first auth)

**Primary enforcement:**
- Frontend constraints: `F1`

---

## 6) Responsive Design Layer

**Must exist:**
- Responsive layouts + mobile-first composition
- Adaptive components (behavior changes by breakpoint)
- Touch-target rules and mobile parity for interactions

**Primary rule sources:**
- `responsive-rules.md`

**Primary enforcement:**
- Frontend constraints: `F12` (no hover-only discovery), plus per-section responsive declarations in page specs

---

## 7) Motion & Interaction Layer

**Must exist:**
- Microinteractions (feedback/hierarchy/clarity)
- Transitions (route/overlay/disclosure)
- Reduced-motion fallback for every animation
- (If applicable) gesture support for touch surfaces

**Primary rule sources:**
- `motion-rules.md`

**Primary enforcement:**
- Frontend constraints: `F6` (reduced-motion), `F9` (motion purpose)
- Quality constraints: `Q1–Q3` (differentiation + quality bar + creative latitude)

---

## 8) State-Based UI Layer

**Must exist:**
- Loading states (skeleton/spinner/progress)
- Empty states
- Error states
- Success/confirmation states

**Primary rule sources:**
- `component-state-matrix.md`
- `empty-state-rules.md`

**Primary enforcement:**
- Frontend rules: dynamic routes have loading/error/not-found where applicable
- Frontend constraints that require state declarations per page/component (`F3`, `F7`, `F10` where forms exist)

---

## 9) Quality & Consistency Layer

**Must exist:**
- Accessibility: keyboard, focus, contrast, screen reader patterns
- Consistent token usage across the UI
- Visual regression coverage strategy for key surfaces (light/dark/mobile/reduced-motion)

**Primary rule sources:**
- `accessibility-rules.md`
- `quality-bar-scoring.md`
- `qa-system-spec.md`

**Primary enforcement:**
- Accessibility constraints: `AC1..AC12`
- Pre-deployment checklist items related to visual regression

---

## 10) Documentation Layer

**Must exist:**
- Component documentation (API + variants + states + a11y)
- Design system documentation (token taxonomy + theming + usage rules)

**Primary rule sources:**
- `design-system-spec.md`
- `component-system-spec.md`
- `content-library-spec.md` (strings as keys)

**Primary enforcement:**
- Reviewer checklist + completeness constraints (missing docs => missing plan => BLOCK)

---

## Handbook coverage notes (DS handbook → OS mapping)

The DS handbook expands beyond the 10-layer checklist with deeper domains (forms anatomy, navigation patterns, overlay patterns, feedback patterns, token/theming/CSS architecture, documentation/testing discipline). In this OS those are expected to be expressed across:
- per-component specs (`components/*.md`) and per-page specs (`pages/*.md`)
- responsive + motion rules (`responsive-rules.md`, `motion-rules.md`)
- accessibility rules/constraints (`accessibility-rules.md`, `accessibility-constraints.md`)

When these domains are missing from planning artifacts, the reviewer must BLOCK for incomplete planning (no improvisation during codegen).
