---
document_type: component-spec
component: CTASection
component_class: organism
file_path: src/components/sections/CTASection.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - global.cta.call_now
  - global.cta.get_quote
---

# CTASection

## 1. Purpose
High-contrast conversion band that repeats the primary action and reassures with short trust copy.

## 2. Variants
- call-now
- get-quote

## 3. Props (zod-style schema)
```ts
{
  variant: 'call-now' | 'get-quote',
  headingKey?: string,
  headingFromData?: string,
  bodyKey?: string,
  bodyFromData?: string,
  primaryCta: { href: string; labelKey: string },
  secondaryCta?: { href: string; labelKey: string },
  submitting?: boolean,
}
```

## 4. States
Required states: `default`, `submitting`.

- submitting: CTA buttons show loading state (Spinner) and are disabled

## 5. Accessibility
- Buttons have clear labels.

## 6. Responsive Behavior
- mobile: stacked CTAs.
- desktop: inline CTAs.

## 7. Motion
- Micro: press/disabled feedback (purpose: clarity).

## 8. Composition examples
- Pre-footer CTA on all key pages.

## 9. Forbidden uses
- Do not place non-essential forms inside CTASection.

## 10. Test plan
- Unit: submitting disables buttons.

## 11. Related
- [Button](Button.md)
- [Spinner](Spinner.md)
- Pages: trust-critical pages
