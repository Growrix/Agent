---
document_type: component-spec
component: Spinner
component_class: atom
file_path: src/components/ui/Spinner.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# Spinner

## 1. Purpose
Indicates an in-progress action for short operations (button loading state, small inline waits). Lists/grids use skeletons instead.

## 2. Variants
- inline
- button

## 3. Props (zod-style schema)
```ts
{
  size: 'sm' | 'md' | 'lg',
  tone: 'default' | 'muted' | 'primary',
  running: boolean,
}
```

## 4. States
Required states: `idle`, `running`.

- idle: not rendered
- running:
  - aria: `role=status`, `aria-live=polite`
  - visual: stroke uses token tone

## 5. Accessibility
- `role=status` and `aria-live=polite`.

## 6. Responsive Behavior
- Size via tokens only.

## 7. Motion
- Uses motion tokens for rotation.
- Reduced-motion: replace with static indicator (no spinning) while preserving layout.

## 8. Composition examples
- Button loading: `Button(loading)` renders Spinner.

## 9. Forbidden uses
- Do not use spinner for grid/list loading (use skeleton states in GridSection).

## 10. Test plan
- Unit: running state adds `role=status`.

## 11. Related
- [Button](Button.md)
- [GridSection](GridSection.md)
