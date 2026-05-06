---
document_type: component-spec
component: Input
component_class: atom
file_path: src/components/ui/Input.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - component.form.required_indicator
  - component.form.optional_indicator
---

# Input

## 1. Purpose
Single-line text input used for quote request fields (name, phone, email, postcode/zip) and optional search fields.

## 2. Variants
- default (standard)

## 3. Props (zod-style schema)
```ts
{
  id: string,
  name: string,
  type: 'text' | 'email' | 'tel' | 'number' | 'search',
  labelKey: string,
  helperKey?: string,
  placeholderKey?: string,
  required?: boolean,
  disabled?: boolean,
  readOnly?: boolean,
  value?: string,
  defaultValue?: string,
  errorKey?: string,
  successKey?: string,
}
```

## 4. States
Required states: `default`, `focus-visible`, `filled`, `error`, `success`, `disabled`, `read-only`.

- default:
  - surface: `--color-input`
  - border: `--color-border`
  - text: `--color-text`
- focus-visible:
  - `--shadow-focus` + ring color `--color-focus-ring`
- filled:
  - same as default; label remains visible (no placeholder-only labeling)
- error:
  - border uses destructive token (`--color-destructive`); helper slot shows `errorKey`
  - aria: `aria-invalid=true` and `aria-describedby` references helper/error
- success:
  - border uses success token (`--color-success`); helper slot may show `successKey`
- disabled:
  - muted text `--color-text-muted`; `aria-disabled=true`
- read-only:
  - no focus styling beyond standard outline; cursor indicates non-editable

## 5. Accessibility
- Label: rendered via `<label htmlFor>` using `labelKey`.
- Helper + errors: always reserve a helper slot; hook to input with `aria-describedby`.
- Keyboard: standard input interactions.

## 6. Responsive Behavior
- mobile: full-width, large tap targets.
- tablet/desktop: full-width within form column; multi-column layout handled by the page section.

## 7. Motion
- Micro: focus ring reveal only (purpose: clarity).
- Reduced-motion: unchanged (no transform motion).

## 8. Composition examples
- Quote form: `FormRow(label + Input)`
- Inline search: `Input(type=search)`

## 9. Forbidden uses
- Do not hide labels in placeholders.
- Do not use for multi-line text (use Textarea).

## 10. Test plan
- Unit: required indicator rendering, error aria attributes, disabled/readOnly behavior.
- Visual: focus-visible ring, error/success border states.

## 11. Related
- [FormRow](FormRow.md)
- [Textarea](Textarea.md)
- Pages: `pages/quote.md`
