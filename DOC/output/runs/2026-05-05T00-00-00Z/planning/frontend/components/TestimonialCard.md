---
document_type: component-spec
component: TestimonialCard
component_class: molecule
file_path: src/components/shared/TestimonialCard.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - component.testimonial.read_more
  - component.testimonial.read_less
---

# TestimonialCard

## 1. Purpose
Displays a single customer testimonial with consistent typography, optional rating, and expandable full quote.

## 2. Variants
- default

## 3. Props (zod-style schema)
```ts
{
  quoteFromData: string,
  authorFromData: string,
  locationFromData?: string,
  ratingFromData?: number,
  sourceFromData?: string,
  expanded?: boolean,
  defaultExpanded?: boolean,
  loading?: boolean,
}
```

## 4. States
Required states: `default`, `loading`, `expanded`.

- default: truncated quote with a “read more” control if needed
- expanded: full quote visible; control toggles to “read less”
- loading: skeleton card matching the populated layout

## 5. Accessibility
- Expand/collapse control is a Button with `aria-expanded`.
- Quotes are plain text; avoid embedding headings inside.

## 6. Responsive Behavior
- mobile: one column.
- tablet/desktop: used within a 2–3 column grid.

## 7. Motion
- Micro: expand/collapse uses accordion reveal pattern (purpose: clarity).
- Reduced-motion: instant.

## 8. Composition examples
- TestimonialSection grid: list of TestimonialCards.

## 9. Forbidden uses
- Do not use as the only proof mechanism; pair with aggregate proof strip.

## 10. Test plan
- Unit: expand toggle updates aria-expanded.
- Visual: default vs expanded.

## 11. Related
- [TestimonialSection](TestimonialSection.md)
- Pages: `pages/reviews.md`, `pages/home.md`
