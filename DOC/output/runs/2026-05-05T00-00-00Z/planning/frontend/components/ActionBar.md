---
document_type: component-spec
component: ActionBar
component_class: molecule
file_path: src/components/shared/ActionBar.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - component.action_bar.aria_label
---

# ActionBar

## 1. Purpose
Sticky mobile bottom action bar that keeps the primary conversion action reachable (Call Now) with a secondary path (Get Quote).

## 2. Variants
- mobile-sticky

## 3. Props (zod-style schema)
```ts
{
  primary: { labelKey: string; href: string },
  secondary: { labelKey: string; href: string },
  tertiary?: { labelKey: string; href: string },
  expanded?: boolean,
}
```

## 4. States
Required states: `default`, `with-secondary-actions-open`.

- default:
  - two actions visible (primary + secondary)
  - aria: `aria-label` present on the nav/region
- with-secondary-actions-open:
  - tertiary actions visible (if configured)
  - tap parity: toggle is a button, not hover-driven

## 5. Accessibility
- Landmark: `role=navigation` or `role=region` with label.
- Links are keyboard focusable; focus order is left→right.

## 6. Responsive Behavior
- mobile only (hidden at `md` and above).
- safe-area padding applied.

## 7. Motion
- Micro: expand/collapse (purpose: clarity) using motion tokens.
- Reduced-motion: instant.

## 8. Composition examples
- Global layout renders ActionBar when route is public and phone is available.

## 9. Forbidden uses
- Do not stack multiple sticky bottoms.

## 10. Test plan
- Unit: hidden at desktop breakpoints; toggle works.
- A11y: focus order and aria-label.

## 11. Related
- [Button](Button.md)
- [Header](Header.md)
- Pages: all public pages
