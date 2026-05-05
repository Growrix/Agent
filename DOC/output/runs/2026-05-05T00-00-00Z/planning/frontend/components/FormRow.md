---
document_type: component-spec
component: FormRow
component_class: molecule
file_path: src/components/shared/FormRow.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# FormRow

## 1. Purpose
Standardizes label + field + helper/error layout so every input follows consistent accessibility and spacing rules.

## 2. Variants
- default

## 3. Props (zod-style schema)
```ts
{
  labelKey: string,
  helperKey?: string,
  errorKey?: string,
  successKey?: string,
  required?: boolean,
  disabled?: boolean,
  children: ReactNode,
}
```

## 4. States
Required states: `default`, `focus-within`, `error`, `success`, `disabled`.

- default: label uses `--color-text`, helper uses `--color-text-muted`
- focus-within: emphasizes label via token color shift; field shows `--shadow-focus`
- error: error text uses destructive token; field border is destructive
- success: success text uses success token
- disabled: label + helper muted

## 5. Accessibility
- Label is always present and associated.
- Helper and error live in a reserved region linked via `aria-describedby`.

## 6. Responsive Behavior
- mobile: vertical stack.
- tablet/desktop: vertical stack; multi-column handled at the form layout level.

## 7. Motion
- Micro: helper/error appear (purpose: clarity) using motion tokens.
- Reduced-motion: instant.

## 8. Composition examples
- Quote form field: `FormRow(labelKey) -> Input`

## 9. Forbidden uses
- Do not render fields without a FormRow wrapper.

## 10. Test plan
- Unit: error text renders and connects via described-by.

## 11. Related
- [Input](Input.md)
- [Textarea](Textarea.md)
- [Select](Select.md)
- [FormSection](FormSection.md)
