# Component Spec: Drawer

**Group:** Modal  
**Type:** Organism  
**Route scope:** MobileMenu, filter side panel (future), notification panel

---

## Purpose

Slide-in side panel built on Radix Dialog variant. Slides from right (desktop) or bottom (mobile). Used for MobileMenu and any full-panel overlay not suited for centered Modal.

---

## Variants

| Variant | Description |
|---------|-------------|
| `right` | Slides from right edge (desktop menu, filters) |
| `bottom` | Slides from bottom edge (mobile sheets) |

---

## States

| State | Behavior |
|-------|----------|
| `closed` | Not mounted |
| `opening` | Slide-in from edge |
| `open` | Static open |
| `closing` | Slide-out to edge |

---

## ARIA / Keyboard / Focus

- Radix Dialog primitives (same as Modal)
- `aria-label` on the Drawer.Content for its specific purpose

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Open (right) | drawer | `translateX(100%)→translateX(0)` | 300ms `easeOut` | Instant |
| Open (bottom) | drawer | `translateY(100%)→translateY(0)` | 300ms `easeOut` | Instant |
| Close | drawer | Reverse | 250ms | Instant |
| Open | overlay | `opacity 0→0.5` | 200ms | Instant |
