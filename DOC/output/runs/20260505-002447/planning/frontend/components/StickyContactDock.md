---
document_type: component-spec
component: StickyContactDock
component_class: organism
file_path: src/components/marketing/sections/sticky-contact-dock.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - component.sticky.call
  - component.sticky.quote
  - component.sticky.contact
---

# StickyContactDock

## 1. Purpose
Keep the highest-intent actions available at all times on mobile devices.

## 2. Variants
- mobile-only

## 3. Props (zod-style schema)
```ts
{
  callHref: string,
  quoteHref: '/quote',
  contactHref: '/contact'
}
```

## 4. States
- default
- active-route
- focus-visible

## 5. Accessibility
- nav landmark with clear labels.
- 44px minimum targets.

## 6. Responsive Behavior
- hidden at lg and above.
- fixed bottom placement under safe-area inset.

## 7. Motion
- first reveal sheet rise only.
- reduced-motion fallback: instant.

## 8. Composition examples
- All public pages except legal pages.

## 9. Forbidden uses
- No fourth low-value action.

## 10. Test plan
- Visibility rules.
- Tap target size.

## 11. Related
- ../components/Header.md