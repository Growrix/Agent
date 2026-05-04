---
document_type: component-spec
component: TestimonialCard
component_class: molecule
file_path: src/components/marketing/shared/testimonial-card.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - reviews.cards.0.quote
  - reviews.cards.0.name
  - reviews.cards.0.context
---

# TestimonialCard

## 1. Purpose
Render customer proof in a clean white card with rating stars, quote, and context.

## 2. Variants
- compact
- featured

## 3. Props (zod-style schema)
```ts
{
  quoteKey: string,
  nameKey: string,
  contextKey: string,
  rating: 1 | 2 | 3 | 4 | 5,
  variant: 'compact' | 'featured'
}
```

## 4. States
- default
- hover
- focus-visible when linked to reviews page

## 5. Accessibility
- Rating stars supplemented with text label.
- Quote uses semantic blockquote.

## 6. Responsive Behavior
- mobile: stacked card.
- tablet and desktop: grid or carousel-free row.

## 7. Motion
- subtle hover lift only.
- reduced-motion fallback: no scale.

## 8. Composition examples
- Home rounded testimonial shell.
- Reviews page grid.

## 9. Forbidden uses
- No auto-advancing carousel.

## 10. Test plan
- Blockquote semantics.
- Rating label.

## 11. Related
- ../components/StatCard.md