---
document_type: component-spec
component: Header
component_class: organism
file_path: src/components/layout/Header.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - global.nav.home
  - global.nav.services
  - global.nav.areas
  - global.nav.reviews
  - global.nav.about
  - global.nav.contact
  - global.cta.call_now
  - global.header.hours_label
---

# Header

## 1. Purpose
Primary site navigation and trust utility strip (hours + click-to-call) with a persistent conversion CTA.

## 2. Variants
- desktop/tablet header with utility strip
- mobile header with drawer navigation

## 3. Props (zod-style schema)
```ts
{
  navItems: Array<{ href: string; labelKey: string }>,
  primaryCta: { href: string; labelKey: string },
  phoneFromData: string,
  hoursFromData: string,
  scrolled?: boolean,
  mobileOpen?: boolean,
}
```

## 4. States
Required states: `default`, `scrolled`, `mobile-open`, `submenu-open`.

- default:
  - utility strip visible at `md+`
  - main bar with brand + nav + CTA
- scrolled:
  - compressed height; subtle shadow `--shadow-1`
  - CTA remains visible
- mobile-open:
  - drawer open; focus trap within drawer
  - aria: hamburger has `aria-expanded=true`
- submenu-open:
  - reserved for future (not required for v1); if used, must have tap parity and keyboard navigation

## 5. Accessibility
- Landmarks: `<header>` with nested `<nav>`.
- Skip link target is `#main-content`.
- Drawer:
  - focus is moved into drawer on open
  - Esc closes
  - closing returns focus to trigger

## 6. Responsive Behavior
- mobile:
  - brand + hamburger
  - CTA is handled primarily by the sticky ActionBar
- tablet/desktop:
  - full nav row and CTA in header

## 7. Motion
- Macro: drawer open/close (purpose: clarity) uses motion tokens.
- Micro: focus ring and press feedback.
- Reduced-motion: instant open/close.

## 8. Composition examples
- Global layout: `Header + main + Footer + ActionBar`.

## 9. Forbidden uses
- Do not hide the phone number behind multiple taps.

## 10. Test plan
- Unit: drawer aria-expanded toggles; Esc closes.
- Visual: scrolled state and focus-visible.

## 11. Related
- [ActionBar](ActionBar.md)
- [Footer](Footer.md)
- Pages: all public pages
