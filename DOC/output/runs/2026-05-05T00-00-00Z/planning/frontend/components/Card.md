---
document_type: component-spec
component: Card
component_class: molecule
file_path: src/components/shared/Card.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# Card

## 1. Purpose
Flexible card container for service tiles, area tiles, proof/testimonial tiles, and blog tiles.

## 2. Variants
- service-card
- area-card
- testimonial-card
- blog-card
- proof-card

## 3. Props (zod-style schema)
```ts
{
  variant: 'service-card' | 'area-card' | 'testimonial-card' | 'blog-card' | 'proof-card',
  titleKey?: string,
  titleFromData?: string,
  bodyKey?: string,
  bodyFromData?: string,
  href?: string,
  media?: { kind: 'image'; srcFromData: string; altFromData: string; aspect: '4:3' | '1:1' | '16:9' },
  badges?: Array<{ labelKey?: string; labelFromData?: string; tone: 'neutral' | 'primary' | 'success' | 'warning' | 'info' }>,
  selected?: boolean,
  disabled?: boolean,
  loading?: boolean,
}
```

## 4. States
Required states: `default`, `hover`, `focus-within`, `selected`, `loading` (skeleton), `disabled`.

- default:
  - surface `--color-card`, border `--color-border`, shadow `--shadow-1`, radius `--radius-card`
- hover:
  - shadow shifts to `--shadow-2`
  - motion: micro `hover lift` (purpose: hierarchy)
- focus-within:
  - `--shadow-focus` applied to the card container
- selected:
  - border uses `--color-primary`; optional badge appears
- loading:
  - skeleton blocks (static fill under reduced-motion)
- disabled:
  - muted text `--color-text-muted`; no hover lift; `aria-disabled=true` if interactive

## 5. Accessibility
- Use semantic wrappers:
  - listing cards: `<article>`
  - interactive cards: inner link/button is focusable; card uses `focus-within` outline
- Images require alt text from CMS.

## 6. Responsive Behavior
- mobile: single-column list; cards full width.
- tablet: 2-column grid for services/areas.
- desktop: 3-column grid for services/areas; testimonials may be 2–3 column depending on density.

## 7. Motion
- Micro: hover lift (purpose: hierarchy).
- Reduced-motion: no transform; shadow change only.

## 8. Composition examples
- Services grid: `GridSection` renders a grid of `Card(service-card)`.
- Reviews: `TestimonialSection` uses `Card(testimonial-card)`.

## 9. Forbidden uses
- Do not use cards as the only clickable surface without a focusable element inside.

## 10. Test plan
- Visual: hover + focus-within state.
- Unit: loading skeleton rendering; selected styling.

## 11. Related
- [GridSection](GridSection.md)
- [TestimonialCard](TestimonialCard.md)
- Pages: `pages/services.md`, `pages/areas.md`, `pages/reviews.md`
