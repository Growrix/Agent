# Component Spec: TestimonialCard

**Group:** Cards  
**Type:** Molecule  
**Route scope:** Testimonials page, Home social proof, Services page

---

## Purpose

Displays a single customer testimonial with star rating, quote text, customer name, location, and optional project type tag. Multiple sizes for different contexts.

---

## Variants

| Variant | Description |
|---------|-------------|
| `full` | Large card for Testimonials page (featured 3 cards) |
| `compact` | Smaller 3-column card for testimonials grid (12+ cards) |
| `minimal` | Quote + name + stars only (for inline trust strips) |

---

## States

| State | Behavior |
|-------|----------|
| `default` | Static card |
| `hover` | Very subtle lift (2px) + shadow deepen |
| `loading` | Skeleton (3 lines + avatar circle) |
| `dark-theme` | `background: var(--color-surface-dark-800)`, text adapts |

---

## ARIA / Keyboard / Focus

- `<figure>` with `<blockquote>` for quote text
- `<figcaption>` for customer name + location
- `RatingStars` sub-component: `aria-label="[n] out of 5 stars"` (hidden stars, announced value)
- No interactive elements unless card itself is a link

---

## Responsive Declarations

| Breakpoint | Behavior |
|------------|----------|
| `< sm` | Full-width; compact variant default |
| `sm–lg` | 2-column grid |
| `lg+` | `full` variant: 3-column; `compact` variant: 4-column |

---

## Motion Declarations

| Trigger | Target | Approach | Duration | Easing | Reduced-motion |
|---------|--------|----------|----------|--------|----------------|
| Scroll enter | card | `opacity 0→1 + translateY 12→0` (stagger 80ms) | 300ms | `ease-out` | Instant |
| Hover | card | `translateY(-2px)` | 200ms | `ease-out` | Shadow only |

---

## Content Keys

- `testimonials.[id].quote`
- `testimonials.[id].name`
- `testimonials.[id].location`
- `testimonials.[id].rating`
- `testimonials.[id].project_type`
- `testimonials.[id].date`
