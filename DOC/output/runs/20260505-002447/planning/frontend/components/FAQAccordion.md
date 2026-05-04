---
document_type: component-spec
component: FAQAccordion
component_class: organism
file_path: src/components/marketing/sections/faq-accordion.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - faq.items.0.question
  - faq.items.0.answer
---

# FAQAccordion

## 1. Purpose
Handle objections and common service questions with accessible disclosure rows.

## 2. Variants
- inline
- standalone

## 3. Props (zod-style schema)
```ts
{
  items: Array<{ questionKey: string; answerKey: string }>,
  variant: 'inline' | 'standalone'
}
```

## 4. States
- collapsed
- expanded
- focus-visible

## 5. Accessibility
- Button semantics with aria-expanded and aria-controls.
- Keyboard support for Enter and Space.

## 6. Responsive Behavior
- full-width at all breakpoints.

## 7. Motion
- accordion reveal.
- reduced-motion fallback: instant.

## 8. Composition examples
- Service detail FAQ.
- FAQ page grouped list.

## 9. Forbidden uses
- No hover-only reveals.

## 10. Test plan
- aria-expanded toggling.
- Keyboard interaction.

## 11. Related
- ../interaction-matrix.md