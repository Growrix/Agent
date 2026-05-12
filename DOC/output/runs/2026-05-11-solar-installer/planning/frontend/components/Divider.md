# Component Spec: Divider

**Group:** Layout  
**Type:** Atom  
**Route scope:** Section separators, footer column separators, content blocks

---

## Purpose

Horizontal or vertical visual separator. Can be decorative (aria-hidden) or semantic `<hr>`.

---

## Variants

| Variant | Description |
|---------|-------------|
| `horizontal` | Full-width `<hr>` or `<div>` |
| `vertical` | Inline column separator (used in topbar, footer) |
| `dashed` | Dashed border style |
| `gradient` | Fades to transparent on both ends |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static line at `var(--color-neutral-200)` (light) / `var(--color-neutral-700)` (dark) |

---

## ARIA / Keyboard / Focus

- Decorative: `<div aria-hidden="true" role="presentation">`
- Semantic: `<hr>` with optional `aria-label`
