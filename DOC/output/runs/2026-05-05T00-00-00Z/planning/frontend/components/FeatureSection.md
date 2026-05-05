---
document_type: component-spec
component: FeatureSection
component_class: organism
file_path: src/components/sections/FeatureSection.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# FeatureSection

## 1. Purpose
Scannable value/differentiator section (3–6 items) used on home, services, and service detail pages.

## 2. Variants
- icon-grid
- checklist

## 3. Props (zod-style schema)
```ts
{
  headingKey?: string,
  headingFromData?: string,
  bodyKey?: string,
  bodyFromData?: string,
  items: Array<{ titleKey?: string; titleFromData?: string; bodyKey?: string; bodyFromData?: string; iconName?: string }>,
}
```

## 4. States
Required states: `default`, `revealed`.

- default: static
- revealed: section reveal applied when it enters the viewport

## 5. Accessibility
- Uses semantic headings and lists.

## 6. Responsive Behavior
- mobile: 1-column stacked items.
- tablet: 2-column grid.
- desktop: 3-column grid.

## 7. Motion
- Macro: section reveal (purpose: hierarchy).
- Reduced-motion: instant.

## 8. Composition examples
- Home value section.

## 9. Forbidden uses
- Do not use for unbounded lists (use GridSection).

## 10. Test plan
- Visual: grid breakpoints.

## 11. Related
- Pages: `pages/home.md`, `pages/services.md`
