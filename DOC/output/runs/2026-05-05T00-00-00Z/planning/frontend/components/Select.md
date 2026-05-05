---
document_type: component-spec
component: Select
component_class: atom
file_path: src/components/ui/Select.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - component.form.required_indicator
  - component.form.optional_indicator
---

# Select

## 1. Purpose
Controlled dropdown for selecting a service type (when not pre-selected) and preferred contact method.

## 2. Variants
- default

## 3. Props (zod-style schema)
```ts
{
  id: string,
  name: string,
  labelKey: string,
  required?: boolean,
  disabled?: boolean,
  placeholderKey?: string,
  items: Array<{ value: string; labelKey?: string; labelFromData?: string }>,
  value?: string,
  defaultValue?: string,
  errorKey?: string,
}
```

## 4. States
Required states: `default`, `focus-visible`, `open`, `selected`, `error`, `disabled`.

- default: input surface + border tokens
- focus-visible: `--shadow-focus`
- open:
  - popover surface `--color-popover`
  - border `--color-border`
  - menu shadow `--shadow-2`
- selected: selected row uses primary token for indicator; text remains `--color-text`
- error: `aria-invalid=true`, border destructive
- disabled: muted + `aria-disabled=true`

## 5. Accessibility
- Role/semantics: button + listbox pattern.
- Keyboard: Enter/Space opens; arrows navigate; Enter selects; Esc closes.
- `aria-expanded` and `aria-controls` wired.

## 6. Responsive Behavior
- mobile: full-width; menu opens as bottom sheet when the item list is long.
- tablet/desktop: standard popover.

## 7. Motion
- Micro: open/close (purpose: clarity) using motion tokens.
- Reduced-motion: instant open/close; no transform.

## 8. Composition examples
- Quote form “service type” selector.

## 9. Forbidden uses
- Do not hide critical options behind hover-only affordances.

## 10. Test plan
- Unit: keyboard interactions, `aria-expanded`, disabled state.
- Visual: open and selected states.

## 11. Related
- [FormRow](FormRow.md)
- Pages: `pages/quote.md`
