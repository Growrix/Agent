# Component Spec: OutlineButton

**Group:** Buttons  
**Type:** Atom  
**Route scope:** All pages — tertiary action, ghost CTAs on dark backgrounds

---

## Purpose

Outlined button variant for lower-priority actions or ghost CTAs on dark/media backgrounds (e.g., "Learn More" on hero, "See All" filters).

---

## Variants

| Variant | Description |
|---------|-------------|
| `outline-amber` | Amber border + amber text on transparent bg |
| `outline-white` | White border + white text (for dark/media backgrounds) |
| `outline-neutral` | Neutral border + neutral text (for light surfaces) |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Transparent fill; border visible |
| `hover` | Fills with border color at 10–15% opacity; text color deepens |
| `active` | 20% fill |
| `focused` | 2px same-color outline |
| `disabled` | `opacity: 0.4` |

---

## ARIA / Keyboard / Focus

Same pattern as PrimaryButton.

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Reduced-motion |
|---------|--------|----------|----------|----------------|
| Hover | background | Color fill `opacity 0→0.12` | 150ms | Instant |
