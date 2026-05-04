---
document_type: component-spec
component: Button
component_class: atom
file_path: src/components/ui/button.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - component.button.call_now
  - component.button.get_quote
  - component.button.submit_quote
---

# Button

## 1. Purpose
Primary action control for calls, quote requests, form submit, and secondary navigation actions.

## 2. Variants
- primary
- secondary
- ghost
- text-link

## 3. Props (zod-style schema)
```ts
{
  variant: 'primary' | 'secondary' | 'ghost' | 'text-link',
  size: 'sm' | 'md' | 'lg',
  href?: string,
  loading?: boolean,
  disabled?: boolean,
  iconLeft?: ReactNode,
  iconRight?: ReactNode,
  labelKey: string,
  children?: ReactNode
}
```

## 4. States
- default: token-based fill or outline.
- hover: shadow shift and slight lift.
- focus-visible: focus ring + focus shadow.
- active: press scale.
- disabled: muted surface and text.
- loading: aria-busy true and loading label.

## 5. Accessibility
- Semantic element: button or anchor.
- aria-busy when loading.
- aria-disabled when disabled.
- Keyboard: Enter and Space activate buttons.

## 6. Responsive Behavior
- mobile: lg buttons can become full-width.
- tablet: auto-width unless inside sticky dock.
- desktop: content-width with min tap target maintained.

## 7. Motion
- micro: hover lift, press feedback, focus ring.
- reduced-motion fallback: no scale, focus and color changes stay.

## 8. Composition examples
- Hero CTA pair.
- Sticky contact dock action.
- Quote form submit.

## 9. Forbidden uses
- Do not use text-link for the primary hero CTA.
- Do not use ghost on low-contrast imagery without overlay support.

## 10. Test plan
- Variant rendering.
- Loading and disabled state ARIA.
- Focus-visible behavior.

## 11. Related
- ../components/Header.md
- ../components/QuoteFormCard.md