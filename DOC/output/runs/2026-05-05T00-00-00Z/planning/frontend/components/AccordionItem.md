---
document_type: component-spec
component: AccordionItem
component_class: molecule
file_path: src/components/shared/AccordionItem.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - component.accordion.expand_label
  - component.accordion.collapse_label
---

# AccordionItem

## 1. Purpose
Single FAQ entry with accessible disclosure behavior. Used within FAQ sections on service pages and the FAQ page.

## 2. Variants
- default

## 3. Props (zod-style schema)
```ts
{
  id: string,
  titleKey?: string,
  titleFromData?: string,
  bodyKey?: string,
  bodyFromData?: string,
  open?: boolean,
  defaultOpen?: boolean,
  disabled?: boolean,
}
```

## 4. States
Required states: `closed`, `open`, `hover`, `focus-visible`, `disabled`.

- closed:
  - summary row uses surface tokens; chevron points down
- open:
  - content panel shown; chevron rotates
  - aria: `aria-expanded=true`
- hover:
  - subtle background highlight (purpose: hierarchy)
- focus-visible:
  - focus ring on the trigger row (`--shadow-focus`)
- disabled:
  - muted + no toggle; `aria-disabled=true`

## 5. Accessibility
- Trigger is a `<button>`.
- Uses `aria-controls` linking to content region id.
- Keyboard: Enter/Space toggles; Esc does not close by default (accordion pattern).

## 6. Responsive Behavior
- Same composition across breakpoints; body text wraps.

## 7. Motion
- Micro: accordion reveal (purpose: clarity) using motion tokens.
- Reduced-motion: instant open/close.

## 8. Composition examples
- FAQSection: list of AccordionItem entries.

## 9. Forbidden uses
- Do not place critical conversion CTAs only inside an accordion.

## 10. Test plan
- Unit: aria-expanded toggles; disabled does not toggle.
- Visual: open/closed with focus-visible.

## 11. Related
- [FAQSection](FAQSection.md)
- Pages: `pages/faq.md`, `pages/services-[slug].md`
