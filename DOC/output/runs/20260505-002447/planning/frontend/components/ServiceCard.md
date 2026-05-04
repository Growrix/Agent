---
document_type: component-spec
component: ServiceCard
component_class: molecule
file_path: src/components/marketing/shared/service-card.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - services.grid.items.0.title
  - services.grid.items.0.body
  - services.grid.items.0.cta
---

# ServiceCard

## 1. Purpose
Present a plumbing service category with a concise summary and next-step CTA.

## 2. Variants
- compact
- featured

## 3. Props (zod-style schema)
```ts
{
  titleKey: string,
  bodyKey: string,
  ctaKey: string,
  href: string,
  icon: string,
  variant: 'compact' | 'featured'
}
```

## 4. States
- default
- hover
- focus-visible
- active

## 5. Accessibility
- Entire card link has visible focus state.
- Icon decorative unless paired with aria-label.

## 6. Responsive Behavior
- mobile: single-column stack.
- tablet: two-column grid.
- desktop: three-column grid.

## 7. Motion
- hover lift and press feedback.
- reduced-motion fallback: border/shadow only.

## 8. Composition examples
- Home service preview.
- Services overview grid.

## 9. Forbidden uses
- Do not hide CTA labels.

## 10. Test plan
- Link semantics.
- Focus ring.
- Grid fit at breakpoints.

## 11. Related
- ../components/ServiceGridSection.md