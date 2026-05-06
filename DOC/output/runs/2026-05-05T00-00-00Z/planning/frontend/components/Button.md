---
document_type: component-spec
component: Button
component_class: atom
file_path: src/components/ui/Button.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - component.button.loading_label
---

# Button

## 1. Purpose
Primary action and navigation trigger across marketing and utility surfaces, including click-to-call CTAs and form submissions.

## 2. Variants
- primary — main conversion actions (Call Now, Get Quote)
- secondary — supporting actions
- ghost — low-emphasis actions in dense areas
- destructive — confirmation-required actions only
- text-link — inline actions that visually read as links

## 3. Props (zod-style schema)
```ts
{
  variant: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'text-link',
  size: 'sm' | 'md' | 'lg',
  iconLeft?: ReactNode,
  iconRight?: ReactNode,
  loading?: boolean,
  disabled?: boolean,
  asChild?: boolean,
  children?: ReactNode,
  // labelKey is the canonical content-library key for the label
  labelKey?: string,
  // required for icon-only buttons
  ariaLabel?: string,
}
```

## 4. States
Required states: `default`, `hover`, `focus-visible`, `active`, `loading`, `disabled`.

- default:
  - primary: background `--color-primary`, text `--color-primary-foreground`, radius `--radius-button`
  - secondary: surface `--color-surface` with border `--color-border`, text `--color-text`
  - text-link: text `--color-primary`, no fill
- hover:
  - primary: background `--color-primary-hover`
  - secondary/ghost: subtle surface highlight (token-based)
  - aria: unchanged
  - motion: micro `press feedback` disabled; hover uses `hover lift` (purpose: hierarchy)
- focus-visible:
  - visual: `--shadow-focus` + ring color `--color-focus-ring`
  - aria: unchanged
- active:
  - visual: compress shadow to `--shadow-1`
  - motion: micro `press feedback` (purpose: feedback)
- loading:
  - visual: spinner + label swap to `component.button.loading_label`
  - aria: `aria-busy=true`
  - behavior: click target preserved; prevent double-submits
- disabled:
  - visual: muted text `--color-text-muted`, border `--color-border`
  - aria: `aria-disabled=true`
  - behavior: no pointer events

## 5. Accessibility
- Semantic element: `<button>` by default; `asChild` supports `<a>` or custom element.
- Icon-only: requires `aria-label`.
- Loading: `aria-busy=true`; keep label available to screen readers.
- Keyboard: Enter/Space activates.

## 6. Responsive Behavior
- mobile: primary CTAs default to `size=lg` and full-width in sections that are form/CTA driven.
- tablet/desktop: auto-width unless the section contract specifies full-width.

## 7. Motion
- Micro:
  - hover lift (purpose: hierarchy)
  - press feedback (purpose: feedback)
  - focus ring reveal (purpose: clarity)
- Reduced-motion: disable transform-based hover/press; keep color + shadow changes.

## 8. Composition examples
- Hero CTA row: `Button(primary)` + `Button(secondary)`
- Sticky mobile action bar: `Button(primary)` (call) + `Button(secondary)` (quote)
- Form submit: `Button(primary, loading)`

## 9. Forbidden uses
- Do not use `destructive` for navigation.
- Do not use `text-link` as the primary CTA.

## 10. Test plan
- Unit: variant rendering, disabled behavior, loading `aria-busy`, icon-only requires aria-label.
- Visual: hover/focus-visible/active states for primary + secondary.
- A11y: focus ring visible on keyboard navigation.

## 11. Related
- [ActionBar](ActionBar.md)
- [FormSection](FormSection.md)
- Pages: `pages/home.md`, `pages/quote.md`
