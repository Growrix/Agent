---
document_type: component-spec
component: Header
component_class: organism
file_path: src/components/marketing/sections/header.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - component.nav.home
  - component.nav.services
  - component.nav.areas
  - component.nav.reviews
  - component.nav.about
  - component.nav.faq
  - component.nav.contact
  - component.nav.cta_call
---

# Header

## 1. Purpose
Provide utility trust information, global navigation, and the primary call CTA across all public pages.

## 2. Variants
- hero-transparent
- page-solid

## 3. Props (zod-style schema)
```ts
{
  variant: 'hero-transparent' | 'page-solid',
  showUtilityStrip: boolean,
  currentPath: string
}
```

## 4. States
- default
- sticky
- mobile-expanded
- focus-visible navigation

## 5. Accessibility
- nav landmark and single toggle button.
- Drawer focus trap with ESC close.

## 6. Responsive Behavior
- mobile: hamburger + sticky dock handles quick actions.
- desktop: horizontal nav and visible CTA.

## 7. Motion
- sticky shadow transition and drawer slide.
- reduced-motion fallback: instant shadow and drawer state.

## 8. Composition examples
- Home over hero.
- Interior page solid shell.

## 9. Forbidden uses
- No hidden home path.
- No CTA hidden behind drawer on desktop.

## 10. Test plan
- Home link visibility.
- Mobile drawer keyboard behavior.

## 11. Related
- ../components/StickyContactDock.md
- ../components/Footer.md