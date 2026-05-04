---
document_type: component-spec
component: ContentBand
component_class: organism
file_path: src/components/marketing/sections/content-band.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - home.process.heading
  - home.process.body
  - about.story.heading
  - about.story.body
---

# ContentBand

## 1. Purpose
Provide a flexible text-led section shell for process, story, values, coverage, and legal content blocks.

## 2. Variants
- centered-intro
- two-column-story
- legal-reading

## 3. Props (zod-style schema)
```ts
{
  variant: 'centered-intro' | 'two-column-story' | 'legal-reading',
  headingKey?: string,
  bodyKey?: string,
  richTextSource?: 'cms' | 'content-library',
  ctaKey?: string,
  ctaHref?: string
}
```

## 4. States
- default
- loading
- error

## 5. Accessibility
- Preserves semantic heading order.
- Rich text content stays within main landmark and readable width.

## 6. Responsive Behavior
- mobile: stacked layout.
- tablet: two-column story variants may align image/text vertically.
- desktop: legal-reading max-width constrained.

## 7. Motion
- section reveal only.
- reduced-motion fallback: instant.

## 8. Composition examples
- Home process section.
- About story/value sections.
- Privacy and terms long-form body.

## 9. Forbidden uses
- Do not use for clickable card grids.

## 10. Test plan
- Heading structure.
- Max-width containment.

## 11. Related
- ../components/HeroSplit.md
- ../components/Footer.md