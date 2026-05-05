---
document_type: component-spec
component: HeroSection
component_class: organism
file_path: src/components/sections/HeroSection.tsx
build_stage: 3-component-foundation
depends_on:
  - design-system.md
  - motion-system.md
content_keys_consumed:
  - global.cta.call_now
  - global.cta.get_quote
  - trust.licensed_badge
  - trust.insured_badge
  - trust.same_day_badge
---

# HeroSection

## 1. Purpose
Top-of-page intent setter with immediate conversion actions and trust signals.

## 2. Variants
- home-hero
- service-hero
- utility-hero

## 3. Props (zod-style schema)
```ts
{
  variant: 'home-hero' | 'service-hero' | 'utility-hero',
  headlineKey?: string,
  headlineFromData?: string,
  subheadlineKey?: string,
  subheadlineFromData?: string,
  media?: { srcFromData?: string; altFromData: string; aspect: '16:9' | '4:3' },
  trustBadges?: Array<{ labelKey?: string; labelFromData?: string }>,
  primaryCta: { href: string; labelKey: string },
  secondaryCta?: { href: string; labelKey: string },
  loadingMedia?: boolean,
  mediaError?: boolean,
}
```

## 4. States
Required states: `default`, `loading-media`, `error-media`.

- loading-media: media skeleton occupies final space
- error-media: fallback surface keeps layout stable

## 5. Accessibility
- H1 lives in the hero section (page spec defines exact heading outline).
- CTAs are Buttons with clear labels.

## 6. Responsive Behavior
- desktop: split layout (text + media) with CTAs visible.
- tablet: stacked layout, media below CTAs.
- mobile: single column; CTAs appear before media; primary CTA within first viewport.

## 7. Motion
- Macro: optional section reveal (purpose: clarity) on initial load.
- Reduced-motion: instant.

## 8. Composition examples
- Home: hero headline + trust strip + CTAs + media.

## 9. Forbidden uses
- Do not use illustration as primary hero media.

## 10. Test plan
- Visual: split vs stacked composition.
- Unit: loading-media renders skeleton.

## 11. Related
- [MediaBlock](MediaBlock.md)
- Pages: trust-critical pages
