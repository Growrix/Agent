---
document_type: component-spec
component: Checkbox
component_class: atom
file_path: src/components/ui/Checkbox.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - quote.form.consent_label
---

# Checkbox

## 1. Purpose
Used for explicit consent/acknowledgement in the quote flow (privacy acknowledgment).

## 2. Variants
- default

## 3. Props (zod-style schema)
```ts
{
  id: string,
  name: string,
  labelKey: string,
  descriptionKey?: string,
  checked?: boolean,
  defaultChecked?: boolean,
  disabled?: boolean,
  indeterminate?: boolean,
}
```

## 4. States
Required states: `default`, `hover`, `focus-visible`, `checked`, `indeterminate`, `disabled`.

- default: border `--color-border`, background `--color-surface`
- hover: subtle surface highlight (purpose: hierarchy)
- focus-visible: `--shadow-focus`
- checked: fill `--color-primary`, checkmark `--color-primary-foreground`
- indeterminate: fill `--color-primary`, indicator bar
- disabled: muted and non-interactive; `aria-disabled=true`

## 5. Accessibility
- Semantic element: `<input type="checkbox">`.
- Label: click/tap activates.
- Indeterminate state announced correctly.

## 6. Responsive Behavior
- mobile: larger tap target; label wraps.
- tablet/desktop: standard.

## 7. Motion
- Micro: checkmark transition (purpose: feedback) using motion tokens.
- Reduced-motion: instant state change.

## 8. Composition examples
- Quote form consent row: `Checkbox + privacy notice`

## 9. Forbidden uses
- Do not use checkbox as a primary navigation control.

## 10. Test plan
- Unit: checked/indeterminate states, disabled prevents toggling.
- A11y: label association.

## 11. Related
- Pages: `pages/quote.md`
