---
document_type: component-spec
component: InputField
component_class: molecule
file_path: src/components/marketing/shared/input-field.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - quote.form.name_label
  - quote.form.phone_label
  - quote.form.postcode_label
  - validation.name.required
---

# InputField

## 1. Purpose
Wrap visible labels, helper text, input control, and inline validation for all public lead forms.

## 2. Variants
- text
- tel
- textarea
- select

## 3. Props (zod-style schema)
```ts
{
  id: string,
  labelKey: string,
  helperKey?: string,
  errorKey?: string,
  type: 'text' | 'tel' | 'textarea' | 'select',
  required: boolean,
  placeholderKey?: string,
  options?: Array<{ labelKey: string; value: string }>
}
```

## 4. States
- default
- focus
- filled
- validation-error
- disabled
- success

## 5. Accessibility
- Visible label always rendered.
- aria-required when required.
- aria-describedby binds helper or error text.

## 6. Responsive Behavior
- mobile: full-width stacked label and control.
- tablet: unchanged.
- desktop: unchanged inside two-column form grids.

## 7. Motion
- focus ring and inline validation appear.
- reduced-motion fallback is instant.

## 8. Composition examples
- Quote form fields.
- Contact form fields.

## 9. Forbidden uses
- No placeholder-only labeling.
- No hidden helper text for required inputs.

## 10. Test plan
- Label association.
- aria-describedby updates on error.
- Required marker rendering.

## 11. Related
- ../components/QuoteFormCard.md