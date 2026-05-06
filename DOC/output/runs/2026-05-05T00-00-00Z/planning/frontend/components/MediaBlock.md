---
document_type: component-spec
component: MediaBlock
component_class: molecule
file_path: src/components/shared/MediaBlock.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed: []
---

# MediaBlock

## 1. Purpose
Token-consistent media container for Sanity images with fixed aspect ratio, skeleton loading, and error fallback.

## 2. Variants
- feature-4x3
- hero-16x9
- avatar-1x1

## 3. Props (zod-style schema)
```ts
{
  variant: 'feature-4x3' | 'hero-16x9' | 'avatar-1x1',
  srcFromData?: string,
  altFromData: string,
  priority?: boolean,
  loading?: boolean,
  error?: boolean,
}
```

## 4. States
Required states: `default`, `loading` (image skeleton), `error` (fallback graphic).

- loading: skeleton occupies the final dimensions (no CLS)
- error: fallback surface with icon + alt intent remains available

## 5. Accessibility
- Always supplies `alt`.
- Decorative images use empty alt only when meaning is redundant.

## 6. Responsive Behavior
- Uses `next/image` with `sizes` per section contract.

## 7. Motion
- Micro: fade-in only (purpose: clarity).
- Reduced-motion: instant.

## 8. Composition examples
- Hero: `MediaBlock(hero-16x9, priority)`
- Service card: `MediaBlock(feature-4x3)`

## 9. Forbidden uses
- Do not render raw `<img>`.

## 10. Test plan
- Unit: error state fallback renders.

## 11. Related
- Pages: `pages/home.md`, `pages/services.md`, `pages/services-[slug].md`
