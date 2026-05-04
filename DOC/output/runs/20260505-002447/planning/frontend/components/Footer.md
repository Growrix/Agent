---
document_type: component-spec
component: Footer
component_class: organism
file_path: src/components/marketing/sections/footer.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - component.footer.address
  - component.footer.hours
  - component.footer.license
  - component.footer.call_label
---

# Footer

## 1. Purpose
Close every page with full trust, coverage, contact, and legal navigation content.

## 2. Variants
- standard
- minimal-legal

## 3. Props (zod-style schema)
```ts
{
  variant: 'standard' | 'minimal-legal',
  showAreas: boolean,
  showLegalLinks: boolean
}
```

## 4. States
- default
- focus-visible on links

## 5. Accessibility
- footer landmark.
- lists for nav groups and areas.

## 6. Responsive Behavior
- mobile: stacked groups.
- desktop: four-column layout.

## 7. Motion
- section reveal only.
- reduced-motion fallback: instant.

## 8. Composition examples
- Standard footer on all marketing pages.
- Minimal footer on privacy and terms.

## 9. Forbidden uses
- No hidden phone or license details.

## 10. Test plan
- Landmark and link coverage.
- Legal-link presence.

## 11. Related
- ../components/Header.md