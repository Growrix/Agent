# Component Spec: RadioGroup

**Group:** Forms  
**Type:** Atom  
**Route scope:** ROI Calculator (property type, financing preference), Free Assessment (roof condition, usage type)

---

## Purpose

Mutually exclusive option selection. Built with Radix UI `RadioGroup` for full keyboard and accessibility support.

---

## Variants

| Variant | Description |
|---------|-------------|
| `radio-list` | Stacked vertical radio options |
| `toggle-buttons` | Horizontal pill-button group (visual toggle, radio semantics) |

---

## States

| State | Behavior |
|-------|----------|
| `unselected` | Empty circle |
| `selected` | Filled amber circle dot |
| `invalid` | Error message below group |
| `disabled` | Grayed |
| `dark-theme` | Adapts |

---

## ARIA / Keyboard / Focus

- `<fieldset>` + `<legend>` for group label
- Radix `RadioGroup`: auto handles `role="radiogroup"`, `role="radio"`, Arrow key navigation between options

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Select | inner dot | Scale `0→1` | 150ms | Instant |
| Toggle button select | background | Color transition | 150ms | Instant |

---

## Content Keys

- Options labels + values passed via props
