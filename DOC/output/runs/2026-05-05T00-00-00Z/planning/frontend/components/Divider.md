---
document_type: component-spec
component: Divider
component_class: atom
file_path: src/components/ui/Divider.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# Divider

## 1. Purpose
Lightweight separation between dense footer groups, list items, and stacked contact rows.

## 2. Variants
- horizontal
- vertical

## 3. Props (zod-style schema)
```ts
{
  orientation: 'horizontal' | 'vertical',
  tone: 'default' | 'muted',
}
```

## 4. States
Required states: `default`.

## 5. Accessibility
- Decorative element; ensure it does not break semantic grouping.

## 6. Responsive Behavior
- Collapses to horizontal separators on mobile stacks.

## 7. Motion
- None.

## 8. Composition examples
- Footer: divider between Legal and Trust blocks.

## 9. Forbidden uses
- Do not use as a spacer; use spacing tokens.

## 10. Test plan
- Visual: tone variants.

## 11. Related
- [Footer](Footer.md)
