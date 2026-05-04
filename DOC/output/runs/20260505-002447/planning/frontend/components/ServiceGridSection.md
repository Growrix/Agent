---
document_type: component-spec
component: ServiceGridSection
component_class: organism
file_path: src/components/marketing/sections/service-grid-section.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - services.grid.heading
  - services.grid.body
---

# ServiceGridSection

## 1. Purpose
Wrap a section intro and a grid of ServiceCard components for home and services pages.

## 2. Variants
- home-preview
- full-index

## 3. Props (zod-style schema)
```ts
{
  variant: 'home-preview' | 'full-index',
  items: Array<ServiceCardProps>
}
```

## 4. States
- loading
- loaded
- empty
- error

## 5. Accessibility
- Section has heading and list semantics.

## 6. Responsive Behavior
- mobile: one-column.
- tablet: two-column.
- desktop: three-column.

## 7. Motion
- section reveal + staggered cards.
- reduced-motion fallback: instant.

## 8. Composition examples
- Home services preview.
- Services overview grid.

## 9. Forbidden uses
- No carousel behavior.

## 10. Test plan
- Empty state rendering.
- Loading skeleton.

## 11. Related
- ../components/ServiceCard.md