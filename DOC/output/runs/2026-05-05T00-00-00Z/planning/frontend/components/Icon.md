---
document_type: component-spec
component: Icon
component_class: atom
file_path: src/components/ui/Icon.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# Icon

## 1. Purpose
Consistent icon rendering wrapper (size, stroke, color tokens) used in navigation, badges, and feature lists.

## 2. Variants
- outline (default)
- filled (exceptions: trust badges and status)

## 3. Props (zod-style schema)
```ts
{
  name: string,
  size: 'xs' | 'sm' | 'md' | 'lg',
  tone: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'info' | 'destructive',
  decorative?: boolean,
  ariaLabel?: string,
}
```

## 4. States
Not interactive in isolation.

## 5. Accessibility
- Decorative icons: `aria-hidden=true`.
- Semantic icons: provide `aria-label` or adjacent text.

## 6. Responsive Behavior
- Uses tokenized sizes only.

## 7. Motion
- None required.

## 8. Composition examples
- Contact rows: phone icon + click-to-call link.

## 9. Forbidden uses
- Do not use icons as icon-only buttons without a Button wrapper and `aria-label`.

## 10. Test plan
- Unit: decorative vs semantic aria behavior.

## 11. Related
- [Button](Button.md)
- [Header](Header.md)
