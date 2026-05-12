# Component Spec: Stack

**Group:** Layout  
**Type:** Atom  
**Route scope:** All pages — vertical flex layout

---

## Purpose

Vertical flex stack layout primitive. Wraps children in a column flex layout with configurable gap. Optional divider between children.

---

## Props

| Prop | Description |
|------|-------------|
| `gap` | Token spacing (2, 4, 6, 8, 10…) |
| `align` | `start \| center \| end \| stretch` |
| `divider` | `boolean` — thin rule between children |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static flex column |

---

## ARIA / Keyboard / Focus

Transparent layout container. Semantic role depends on context.
