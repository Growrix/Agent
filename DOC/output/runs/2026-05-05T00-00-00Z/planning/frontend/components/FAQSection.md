---
document_type: component-spec
component: FAQSection
component_class: organism
file_path: src/components/sections/FAQSection.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# FAQSection

## 1. Purpose
Frequently asked questions section used across trust-critical pages.

## 2. Variants
- default

## 3. Props (zod-style schema)
```ts
{
  headingKey?: string,
  headingFromData?: string,
  items: Array<{ id: string; questionFromData: string; answerFromData: string }>,
}
```

## 4. States
Required states: `default`.

- Interactive states live on AccordionItem.

## 5. Accessibility
- Section has a heading.
- AccordionItem provides disclosure ARIA.

## 6. Responsive Behavior
- Single column.

## 7. Motion
- Accordion motion is handled by AccordionItem.

## 8. Composition examples
- Service detail FAQ.

## 9. Forbidden uses
- Do not hide critical pricing/availability inside FAQ.

## 10. Test plan
- Unit: renders N accordion items.

## 11. Related
- [AccordionItem](AccordionItem.md)
- Pages: `pages/faq.md`, `pages/services-[slug].md`
