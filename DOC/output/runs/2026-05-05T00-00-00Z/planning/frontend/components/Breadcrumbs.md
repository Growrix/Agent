---
document_type: component-spec
component: Breadcrumbs
component_class: molecule
file_path: src/components/shared/Breadcrumbs.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - component.breadcrumbs.aria_label
---

# Breadcrumbs

## 1. Purpose
Provides location context on dynamic detail pages (service detail, area landing) and improves scannability/SEO navigation.

## 2. Variants
- default

## 3. Props (zod-style schema)
```ts
{
  items: Array<{ href: string; labelKey?: string; labelFromData?: string }>,
  currentLabelKey?: string,
  currentLabelFromData?: string,
}
```

## 4. States
Required states: `default`.

## 5. Accessibility
- Nav landmark: `<nav aria-label={component.breadcrumbs.aria_label}>`.
- Last item is current and not a link.

## 6. Responsive Behavior
- mobile: may collapse middle items (with explicit tap parity) if too long.

## 7. Motion
- None required.

## 8. Composition examples
- Service detail: Home → Services → Service Name.

## 9. Forbidden uses
- Do not rely on hover to reveal collapsed crumbs.

## 10. Test plan
- Unit: current item not linked; aria-label present.

## 11. Related
- Pages: `pages/services-[slug].md`, `pages/areas-[slug].md`
