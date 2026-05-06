---
document_type: component-spec
component: FormSection
component_class: organism
file_path: src/components/sections/FormSection.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - forms.quote.title
  - forms.quote.submit
  - forms.quote.success_title
  - forms.quote.success_body
  - forms.quote.error_title
  - forms.quote.error_body
---

# FormSection

## 1. Purpose
Standard form section wrapper for quote requests/contact forms. Owns layout, submission states, and confirmation messaging.

## 2. Variants
- quote
- contact

## 3. Props (zod-style schema)
```ts
{
  variant: 'quote' | 'contact',
  titleKey: string,
  submitLabelKey: string,
  submitting?: boolean,
  success?: boolean,
  serverError?: boolean,
  validationError?: boolean,
  children: ReactNode,
}
```

## 4. States
Required states: `default`, `submitting`, `success`, `server-error`, `validation-error`.

- submitting: disables fields, shows Spinner on submit
- success: shows confirmation copy and next steps
- server-error: shows AlertMessage(error)
- validation-error: shows field-level errors + summary

## 5. Accessibility
- `aria-busy=true` while submitting.
- Error summary links jump to invalid fields.

## 6. Responsive Behavior
- mobile: stacked fields.
- desktop: can use 2-column grid inside but preserves reading order.

## 7. Motion
- Micro: success transition (purpose: clarity).
- Reduced-motion: instant.

## 8. Composition examples
- Quote page: FormSection(quote) + FormRows.

## 9. Forbidden uses
- Do not send PII to analytics tools.
- Basic tier fallback is allowed: client-side `mailto:` (see `pages/quote.md`) when no backend/email integration is planned.
- If/when adding a backend, prefer a first-party API route for submission handling.

## 10. Test plan
- Unit: submitting sets aria-busy; success renders confirmation.

## 11. Related
- [FormRow](FormRow.md)
- [AlertMessage](AlertMessage.md)
- Pages: `pages/quote.md`, `pages/contact.md`
