---
document_type: component-spec
component: TestimonialSection
component_class: organism
file_path: src/components/sections/TestimonialSection.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# TestimonialSection

## 1. Purpose
Trust-building reviews strip or grid with optional aggregate rating and a link to the full reviews page.

## 2. Variants
- strip
- grid

## 3. Props (zod-style schema)
```ts
{
  variant: 'strip' | 'grid',
  headingKey?: string,
  headingFromData?: string,
  testimonials: Array<{
    quoteFromData: string,
    authorFromData: string,
    locationFromData?: string,
    ratingFromData?: number,
  }>,
  aggregateFromData?: { rating: number; count: number; source: string },
  loading?: boolean,
  empty?: boolean,
}
```

## 4. States
Required states: `default`, `loading`, `empty`.

- loading: skeleton testimonial cards
- empty: hide the section entirely or show alternate trust proof (per page spec)

## 5. Accessibility
- Maintains heading outline.

## 6. Responsive Behavior
- strip: horizontal scroll on mobile.
- grid: 1/2/3 column responsive.

## 7. Motion
- Macro: reveal (purpose: hierarchy) optional.
- Reduced-motion: instant.

## 8. Composition examples
- Home: short strip.
- Reviews page: full grid.

## 9. Forbidden uses
- Do not fake reviews.

## 10. Test plan
- Unit: empty branch hides content.

## 11. Related
- [TestimonialCard](TestimonialCard.md)
- [GridSection](GridSection.md)
- Pages: `pages/home.md`, `pages/reviews.md`
