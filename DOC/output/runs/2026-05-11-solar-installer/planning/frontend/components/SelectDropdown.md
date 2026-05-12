# Component Spec: SelectDropdown

**Group:** Forms  
**Type:** Atom  
**Route scope:** ContactForm (service interest), ROI Calculator (state selector)

---

## Purpose

Custom styled select dropdown with label, searchable options (optional), and validation state. Built with Radix UI `Select` for accessibility.

---

## States

| State | Behavior |
|-------|----------|
| `idle` | Shows placeholder label |
| `open` | Dropdown panel visible; chevron rotates 180° |
| `selected` | Selected option shown; amber accent |
| `invalid` | Red border + error message |
| `disabled` | Grayed; cursor not-allowed |
| `dark-theme` | Dropdown panel `var(--color-surface-dark-800)` |

---

## ARIA / Keyboard / Focus

- Built with Radix `Select`: auto-handles `role="combobox"`, `aria-expanded`, `aria-haspopup`, keyboard navigation
- `labelledby` paired with visible `<label>`
- Arrow keys navigate options; Enter selects; Escape closes; Type-ahead search

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Native `<select>` fallback for iOS (avoids custom dropdown on small touch) |
| `sm+` | Radix custom dropdown |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Open | panel | `opacity 0→1 + translateY -4→0` | 150ms | `ease-out` | Instant |
| Close | panel | `opacity 1→0` | 100ms | `ease-in` | Instant |
| Open | chevron | `rotate 0→180deg` | 200ms | `ease-out` | Instant |

---

## Content Keys

- Options array + labels passed via props
