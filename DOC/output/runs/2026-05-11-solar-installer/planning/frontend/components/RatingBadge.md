# Component Spec: RatingBadge

**Group:** Trust  
**Type:** Molecule  
**Route scope:** HeroSection trust chips, Contact page, Testimonials page, GoogleBusinessCard

---

## Purpose

Composite display of rating number + RatingStars + review count + optional source label (Google, BBB). Used wherever aggregate review data is shown.

---

## Variants

| Variant | Description |
|---------|-------------|
| `hero-chip` | Small; fits inside HeroSection trust chip pill |
| `standard` | Medium; used in testimonial section header |
| `large` | Used on Testimonials page hero and Contact page cards |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static display |
| `dark-bg` | Light text on dark/amber backgrounds |

---

## ARIA / Keyboard / Focus

- `<p aria-label="Rated 4.9 out of 5 stars based on 312 Google reviews">`

---

## Content Keys

- `trust.rating.score`
- `trust.rating.count`
- `trust.rating.source` — "Google", "BBB"
- `trust.rating.aria_label`
