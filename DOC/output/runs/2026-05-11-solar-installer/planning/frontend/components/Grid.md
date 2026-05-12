# Component Spec: Grid

**Group:** Layout  
**Type:** Atom  
**Route scope:** Services grid, Portfolio grid, Blog grid, Team grid, Resources grid

---

## Purpose

Responsive CSS grid layout primitive. Used to arrange cards and content blocks in auto-filling responsive columns.

---

## Variants

| Variant | Description |
|---------|-------------|
| `auto-fill` | `repeat(auto-fill, minmax([min], 1fr))` |
| `2col` | Fixed 2 columns at `md+` |
| `3col` | Fixed 3 columns at `lg+` |
| `4col` | Fixed 4 columns at `xl+` |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static CSS grid |

---

## Responsive Declarations

| Breakpoint | Default auto-fill min |
|------------|-----------------------|
| `xs` | 1 col (full width) |
| `sm` | 2 col |
| `md` | 3 col |
| `lg` | 3–4 col depending on variant |

---

## Token slots

- `gap: var(--spacing-6)` (default)
- `gap-sm: var(--spacing-4)`
