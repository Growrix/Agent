# Component Spec: Skeleton

**Group:** Layout  
**Type:** Atom  
**Route scope:** All pages — loading states for cards, images, text blocks

---

## Purpose

Animated shimmer placeholder rendered while content is loading. Matches the shape and dimensions of the component it replaces.

---

## Variants

| Variant | Description |
|---------|-------------|
| `text` | Single line of text height |
| `text-block` | Multiple stacked text lines |
| `card` | Full card shape with image area + text lines |
| `avatar` | Circle avatar placeholder |
| `image` | Rectangular image placeholder |

---

## States

| State | Behavior |
|-------|----------|
| `loading` | Shimmer animation (linear gradient sweep) |
| `done` | Component removes itself (parent swaps in real content) |

---

## ARIA / Keyboard / Focus

- `aria-hidden="true"` — skeleton is decorative
- Parent container: `aria-busy="true"` during loading, `aria-busy="false"` when content arrives

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Continuous | background | Shimmer gradient sweep `keyframe` | 1500ms infinite | Static neutral bg |
