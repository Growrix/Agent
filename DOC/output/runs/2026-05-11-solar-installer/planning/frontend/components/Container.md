# Component Spec: Container

**Group:** Layout  
**Type:** Atom  
**Route scope:** All pages — outermost content width constraint

---

## Purpose

Max-width content wrapper with symmetric responsive horizontal padding. The foundational layout primitive used to constrain all page content within the design grid.

---

## Variants

| Variant | Description |
|---------|-------------|
| `default` | Max-width `var(--layout-content-max-width)` (1280px) |
| `narrow` | Max-width 768px — for long-form content |
| `wide` | Max-width 1440px — for data-dense sections |
| `full` | No max-width — full-bleed control passed to children |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static layout primitive |

---

## ARIA / Keyboard / Focus

No ARIA role needed. Transparent layout container.

---

## Responsive Declarations

| Breakpoint | Padding |
|------------|---------|
| `default (xs)` | `var(--spacing-4)` (16px) |
| `sm` | `var(--spacing-6)` (24px) |
| `md` | `var(--spacing-8)` (32px) |
| `lg+` | `var(--spacing-10)` (40px) |
