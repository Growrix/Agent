# Component Spec: RatingStars

**Group:** Trust  
**Type:** Atom  
**Route scope:** TestimonialCard, RatingBadge, GoogleBusinessCard

---

## Purpose

Visual star rating display (1–5 scale) with support for fractional values (e.g., 4.8 stars). Reads as an accessible label.

---

## Variants

| Variant | Description |
|---------|-------------|
| `filled` | Solid amber stars |
| `outline` | Outline stars (for empty slots) |

---

## States

| State | Behavior |
|-------|----------|
| `static` | Display-only; no interaction |

---

## ARIA / Keyboard / Focus

- Wrapper: `<span aria-label="4.9 out of 5 stars">` with visual stars hidden from screen readers (`aria-hidden="true"` on each star SVG)

---

## Content Keys

- Rating value via `rating` prop (number, 0–5)
