---
document_type: component-spec
component: QuoteFormCard
component_class: organism
file_path: src/components/marketing/sections/quote-form-card.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - quote.form.heading
  - quote.form.name_label
  - quote.form.phone_label
  - quote.form.service_label
  - quote.form.postcode_label
  - quote.form.message_label
  - quote.form.submit
  - trust.privacy
---

# QuoteFormCard

## 1. Purpose
Capture short quote requests with visible privacy reassurance and Turnstile protection.

## 2. Variants
- inline
- standalone

## 3. Props (zod-style schema)
```ts
{
  variant: 'inline' | 'standalone',
  submitEndpoint: '/api/leads',
  source: 'home' | 'service' | 'quote' | 'contact'
}
```

## 4. States
- default
- focus
- validation-error
- submitting
- success
- server-error

## 5. Accessibility
- All fields labeled.
- Error summary tied with aria-describedby.
- Submit button exposes aria-busy in submitting state.

## 6. Responsive Behavior
- mobile: single-column, full-width fields.
- desktop: two-column where possible with message full-width.

## 7. Motion
- inline validation appear.
- success state fade-in.
- reduced-motion fallback: instant.

## 8. Composition examples
- Home sidebar quote card.
- Quote page primary conversion module.

## 9. Forbidden uses
- No multi-step funnel in v1.

## 10. Test plan
- Validation errors.
- Success state.
- Turnstile token requirement.

## 11. Related
- ../components/InputField.md
- ../../data-flows/lead-capture-flow.md