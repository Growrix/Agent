---
document_type: component-spec
component: AlertMessage
component_class: molecule
file_path: src/components/shared/AlertMessage.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - errors.network.title
  - errors.network.body
  - errors.network.retry
---

# AlertMessage

## 1. Purpose
Inline feedback surface for recoverable errors and confirmations (form errors, network issues).

## 2. Variants
- info
- success
- warning
- error

## 3. Props (zod-style schema)
```ts
{
  variant: 'info' | 'success' | 'warning' | 'error',
  titleKey: string,
  bodyKey?: string,
  action?: { labelKey: string; onClick: () => void },
  dismissible?: boolean,
}
```

## 4. States
Required states: `default`, `dismissed`.

- default: visible with tone tokens
- dismissed: removed from layout

## 5. Accessibility
- `role=status` for info/success/warning.
- `role=alert` for error only.
- Dismiss button is keyboard accessible and labeled.

## 6. Responsive Behavior
- full-width block on mobile.

## 7. Motion
- Micro: appear/disappear (purpose: clarity) using motion tokens.
- Reduced-motion: instant.

## 8. Composition examples
- Quote form server-error shows AlertMessage(error).

## 9. Forbidden uses
- Do not use for non-recoverable failures without an alternate path.

## 10. Test plan
- Unit: correct ARIA role per variant; dismiss behavior.

## 11. Related
- [FormSection](FormSection.md)
- Pages: `pages/quote.md`
