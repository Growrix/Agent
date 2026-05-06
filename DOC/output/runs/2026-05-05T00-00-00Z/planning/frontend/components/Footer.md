---
document_type: component-spec
component: Footer
component_class: organism
file_path: src/components/layout/Footer.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - global.footer.services
  - global.footer.areas
  - global.footer.company
  - global.footer.legal
  - trust.license_label
  - trust.insured_label
  - trust.hours_label
  - trust.service_areas_label
  - trust.review_aggregate_label
---

# Footer

## 1. Purpose
Dense, locally-rooted footer with navigation groups, contact/trust block, and legal links.

## 2. Variants
- default

## 3. Props (zod-style schema)
```ts
{
  servicesLinksFromData?: Array<{ href: string; labelFromData: string }>,
  areasLinksFromData?: Array<{ href: string; labelFromData: string }>,
  phoneFromData: string,
  hoursFromData: string,
  licenseFromData?: string,
  addressFromData?: string,
  reviewAggregateFromData?: { rating: number; count: number; source: string },
}
```

## 4. States
Required states: `default`.

## 5. Accessibility
- Landmark: `<footer>`.
- Navigation groups use lists.

## 6. Responsive Behavior
- mobile: single-column stacked groups.
- tablet/desktop: 3–4 column layout with a dedicated trust block.

## 7. Motion
- None required.

## 8. Composition examples
- Global layout footer.

## 9. Forbidden uses
- Do not omit required trust slots for this archetype.

## 10. Test plan
- Visual: column layout at desktop, stack at mobile.

## 11. Related
- Pages: all public pages
