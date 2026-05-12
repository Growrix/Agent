# Component Spec: TextArea

**Group:** Forms  
**Type:** Atom  
**Route scope:** ContactForm, Free Assessment message step

---

## Purpose

Multi-line text input with label, character counter, and validation state. Resizable or fixed height.

---

## States

| State | Behavior |
|-------|----------|
| `idle` | Neutral border |
| `focused` | Amber border |
| `filled` | Character counter visible |
| `near-limit` | Counter turns amber at 80% of max chars |
| `at-limit` | Counter turns red; input stops accepting characters |
| `invalid` | Red border + error message |
| `disabled` | Grayed out |
| `dark-theme` | Background `var(--color-surface-dark-800)` |

---

## ARIA / Keyboard / Focus

- `<label>` paired with `<textarea>`
- `aria-required`, `aria-invalid`, `aria-describedby` pattern same as TextInput
- Character counter: `aria-live="polite"` to announce count on change

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| All | Full width; min-height 120px; max-height 400px |

---

## Motion Declarations

Same pattern as TextInput (border transition, error fade-in).

---

## Content Keys

- Label, placeholder, max chars, error text passed via props
