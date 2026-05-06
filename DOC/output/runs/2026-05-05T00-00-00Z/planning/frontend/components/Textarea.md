---
document_type: component-spec
component: Textarea
component_class: atom
file_path: src/components/ui/Textarea.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - component.form.required_indicator
  - component.form.optional_indicator
---

# Textarea

## 1. Purpose
Multi-line input for optional quote details (problem description, access notes).

## 2. Variants
- default (standard)

## 3. Props (zod-style schema)
```ts
{
  id: string,
  name: string,
  labelKey: string,
  helperKey?: string,
  placeholderKey?: string,
  required?: boolean,
  disabled?: boolean,
  readOnly?: boolean,
  value?: string,
  defaultValue?: string,
  errorKey?: string,
}
```

## 4. States
Required states: `default`, `focus-visible`, `filled`, `error`, `success`, `disabled`, `read-only`.

- default: same as Input token posture
- focus-visible: `--shadow-focus` + `--color-focus-ring`
- filled: label remains visible
- error: `aria-invalid=true`, described-by includes error
- success: optional visual success border
- disabled: muted + non-interactive
- read-only: non-editable posture

## 5. Accessibility
- Associated label via `htmlFor`.
- Error uses `aria-describedby` and `aria-invalid`.

## 6. Responsive Behavior
- mobile: full-width, minimum 3 lines visible.
- tablet/desktop: can expand to 4–6 lines.

## 7. Motion
- Micro: focus ring reveal (purpose: clarity).
- Reduced-motion: unchanged.

## 8. Composition examples
- Quote form “details” field: `FormRow + Textarea`

## 9. Forbidden uses
- Do not auto-resize in a way that causes layout shift during typing.

## 10. Test plan
- Unit: error + aria behavior, disabled/readOnly.
- Visual: focus-visible ring.

## 11. Related
- [Input](Input.md)
- [FormRow](FormRow.md)
- Pages: `pages/quote.md`
