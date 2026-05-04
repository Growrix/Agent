---
document_type: component-spec
component: HeroSplit
component_class: organism
file_path: src/components/marketing/sections/hero-split.tsx
build_stage: 3-component-foundation
depends_on:
  - ../design-system.md
  - ../motion-system.md
content_keys_consumed:
  - home.hero.eyebrow
  - home.hero.headline
  - home.hero.subheadline
  - home.hero.cta_primary
  - home.hero.cta_secondary
  - trust.license
  - trust.years
  - trust.areas
---

# HeroSplit

## 1. Purpose
Implement the locked home hero composition based on the supplied reference: left copy shell, right real-service photography, overlapping white panel transition.

## 2. Variants
- home-reference-lock
- interior-compact-split

## 3. Props (zod-style schema)
```ts
{
  variant: 'home-reference-lock' | 'interior-compact-split',
  eyebrowKey: string,
  headlineKey: string,
  subheadlineKey: string,
  primaryCtaKey: string,
  secondaryCtaKey: string,
  mediaAltKey: string
}
```

## 4. States
- default
- reduced-motion reveal

## 5. Accessibility
- Hero image has descriptive alt when meaningful.
- CTA group rendered as semantic button/link list.

## 6. Responsive Behavior
- mobile: copy first, image below, overlap panel reduced in height.
- tablet: diagonal split preserved with stacked bias.
- desktop: 42/58 split with full overlap treatment.

## 7. Motion
- section reveal for copy and media shells.
- reduced-motion fallback: instant appearance.

## 8. Composition examples
- Home hero.
- Service and area compact heroes.

## 9. Forbidden uses
- No illustration replacement.
- No brandless stock photo montage.

## 10. Test plan
- Layout at breakpoints.
- CTA visibility over imagery.

## 11. Related
- ../components/TrustBadgeRow.md
- ../components/Header.md