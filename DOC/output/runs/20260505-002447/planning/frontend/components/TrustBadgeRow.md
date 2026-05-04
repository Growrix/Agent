---
document_type: component-spec
component: TrustBadgeRow
component_class: molecule
file_path: src/components/marketing/shared/trust-badge-row.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - trust.license
  - trust.years
  - trust.areas
---

# TrustBadgeRow

## 1. Purpose
Surface fast proof points directly under hero copy and inside service detail headers.

## 2. Variants
- hero-light
- surface-dark-text

## 3. Props (zod-style schema)
```ts
{
  items: Array<{ icon: string; labelKey: string }>,
  variant: 'hero-light' | 'surface-dark-text'
}
```

## 4. States
- default
- hover-emphasis for linked variants only
- reduced-motion reveal

## 5. Accessibility
- Render as semantic list.
- Icons decorative unless carrying standalone meaning.

## 6. Responsive Behavior
- mobile: wrap to two rows if needed.
- tablet and desktop: single row.

## 7. Motion
- staggered section reveal only.
- reduced-motion fallback: instant.

## 8. Composition examples
- Home hero trust row.
- Service detail opening proof strip.

## 9. Forbidden uses
- Do not bury critical compliance copy inside hover-only tooltips.

## 10. Test plan
- List semantics.
- Wrap behavior.

## 11. Related
- ../components/HeroSplit.md