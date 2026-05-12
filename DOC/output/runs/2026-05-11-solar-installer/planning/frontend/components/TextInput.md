# Component Spec: TextInput

**Group:** Forms  
**Type:** Atom  
**Route scope:** All forms across the site

---

## Purpose

Standardized single-line text input field with label, optional placeholder, optional helper text, and validation state integration.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Text input |
| `email` | `type="email"` with email icon |
| `phone` | `type="tel"` with phone icon + auto-format |
| `search` | Search icon left; clear button right |

---

## States

| State | Behavior |
|-------|----------|
| `idle` | Neutral border `var(--color-neutral-300)` |
| `focused` | Amber border `var(--color-primary-500)` + outline |
| `filled` | Neutral border; text in field |
| `invalid` | Red border `var(--color-error-500)` + error message below |
| `valid` | Green checkmark icon right |
| `disabled` | Background `var(--color-neutral-100)`; cursor not-allowed |
| `read-only` | Background lighter; no focus ring |
| `dark-theme` | Background `var(--color-surface-dark-800)`, border `var(--color-neutral-600)` |

---

## ARIA / Keyboard / Focus

- `<label>` explicitly paired with `<input>` via `htmlFor`/`id`
- `aria-required="true"` when required
- `aria-invalid="true"` when in error state
- `aria-describedby="[id]-error"` when error present

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| All | Full width of parent container |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Focus | border | Color transition | 150ms | `ease-out` | Instant |
| Error appear | border + helper | `opacity 0→1` | 200ms | `ease-out` | Instant |

---

## Content Keys

- Label, placeholder, helper, error text passed via props from parent form
