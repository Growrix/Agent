# Component Spec: RangeSlider

**Group:** Calculator  
**Type:** Atom  
**Route scope:** ROI Calculator (monthly bill input), any continuous-value input

---

## Purpose

Custom range slider with live value label, min/max labels, and tick marks. Built on top of Radix UI `Slider` for full accessibility.

---

## States

| State | Behavior |
|-------|----------|
| `idle` | Track + thumb at default position |
| `dragging` | Thumb moves; value label updates in real-time |
| `focused` | Amber thumb ring |
| `disabled` | Grayed track + thumb |
| `dark-theme` | Track `var(--color-neutral-700)`; thumb `var(--color-primary-500)` |

---

## ARIA / Keyboard / Focus

- Radix `Slider`: `role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext`, `aria-label`
- Keyboard: Arrow Left/Right move by step; Home/End jump to min/max; Page Up/Down move by larger step

---

## Visual Contract

- Track height: 4px
- Track fill (left of thumb): `var(--color-primary-500)` (amber)
- Track empty: `var(--color-neutral-200)`
- Thumb: 20px circle, white fill, amber border 2px, shadow
- Live value label: floats above thumb

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Thumb 28px (larger touch target) |
| `sm+` | Thumb 20px |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Drag | value label | Real-time position update | Continuous | Static label |
| Focus | thumb | `scale(1.2)` | 100ms | No scale |

---

## Content Keys

- `aria-label`, `min`/`max` labels, value format passed via props
