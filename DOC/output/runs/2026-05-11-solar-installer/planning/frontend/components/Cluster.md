# Component Spec: Cluster

**Group:** Layout  
**Type:** Atom  
**Route scope:** Tag chips, trust chips, cert badge rows, action button groups

---

## Purpose

Horizontal wrapping flex cluster. Children wrap naturally when overflow would occur. Used for chip groups, badge rows, and button pairs.

---

## Props

| Prop | Description |
|------|-------------|
| `gap` | Token spacing |
| `justify` | `start \| center \| end` |
| `wrap` | Default: `wrap`; `nowrap` for single-line enforced |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static flex row |

---

## ARIA / Keyboard / Focus

Transparent layout container.
