---
document_type: design-system
project_name: local-plumbing-marketing-site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 2-design-foundation
depends_on:
  - master-ui-architecture.md
  - ../brief.json
recommended_next_reads:
  - component-system.md
  - motion-system.md
---

# Design System — local-plumbing-marketing-site

## 1. Visual Direction
- Visual statement: warm off-white base, credible deep primary, warm accent for conversion.
- Adopted archetype: `local-business-trust`.
- Default theme: light-first.
- Palette seed: none provided.

## 2. Color Tokens
All components reference these tokens (no raw hex in components).

Light tokens:
- `--color-background`: `#F9F8F6`
- `--color-surface`: `#FFFFFF`
- `--color-inset`: `#F2F4F6`
- `--color-overlay`: `rgba(15, 23, 42, 0.64)`
- `--color-border`: `#D7DEE6`
- `--color-text`: `#0F172A`
- `--color-text-muted`: `#475569`
- `--color-primary`: `#0F766E`
- `--color-primary-hover`: `#0B5F59`
- `--color-primary-foreground`: `#FFFFFF`
- `--color-accent`: `#F59E0B`
- `--color-accent-foreground`: `#111827`
- `--color-destructive`: `#DC2626`
- `--color-destructive-foreground`: `#FFFFFF`
- `--color-success`: `#15803D`
- `--color-warning`: `#B45309`
- `--color-info`: `#2563EB`
- `--color-focus-ring`: `#0F766E`

Semantic-tier tokens used by primitives:
- `--color-card`: `#FFFFFF`
- `--color-card-foreground`: `#0F172A`
- `--color-popover`: `#FFFFFF`
- `--color-popover-foreground`: `#0F172A`
- `--color-input`: `#FFFFFF`
- `--color-ring`: `#0F766E`

Dark tokens (optional alternate theme; not default):
- `--color-background-dark`: `#0B1220`
- `--color-surface-dark`: `#0F172A`
- `--color-inset-dark`: `#111C31`
- `--color-overlay-dark`: `rgba(2, 6, 23, 0.72)`
- `--color-border-dark`: `#22314A`
- `--color-text-dark`: `#E2E8F0`
- `--color-text-muted-dark`: `#94A3B8`
- `--color-primary-dark`: `#2DD4BF`
- `--color-primary-hover-dark`: `#14B8A6`
- `--color-primary-foreground-dark`: `#042F2E`
- `--color-accent-dark`: `#FBBF24`
- `--color-accent-foreground-dark`: `#0B1220`
- `--color-destructive-dark`: `#F87171`
- `--color-destructive-foreground-dark`: `#0B1220`
- `--color-success-dark`: `#4ADE80`
- `--color-warning-dark`: `#FDBA74`
- `--color-info-dark`: `#60A5FA`
- `--color-focus-ring-dark`: `#2DD4BF`
- `--color-card-dark`: `#0F172A`
- `--color-card-foreground-dark`: `#E2E8F0`
- `--color-popover-dark`: `#0F172A`
- `--color-popover-foreground-dark`: `#E2E8F0`
- `--color-input-dark`: `#0F172A`
- `--color-ring-dark`: `#2DD4BF`

## 3. Theme Logic
- Default: light.
- Alternate: dark is optional; only enable when required by product preference.
- Accent usage cap: accent should appear primarily on CTAs and small highlights; avoid filling > ~10–15% of a viewport with accent.
- High-contrast: maintain AA contrast; focus ring always visible using `--color-focus-ring` + `--shadow-focus`.

## 4. Typography
- Display: `Manrope` (Google, `next/font/google`) with system fallback.
- Body: `Inter` (Google, `next/font/google`) with system fallback.
- Mono: system mono (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`).

Scale (mobile-first; desktop may step up 1 level for display headings):
- display-1: 56px / 1.15
- display-2: 48px / 1.15
- h1: 40px / 1.2
- h2: 32px / 1.3
- h3: 28px / 1.3
- h4: 24px / 1.35
- h5: 20px / 1.35
- h6: 18px / 1.35
- lead: 18px / 1.6
- body-lg: 16px / 1.65
- body: 16px / 1.65
- body-sm: 14px / 1.65
- label: 14px / 1.4
- caption: 12px / 1.4
- overline: 12px / 1.4 (with positive letter spacing)
- mono: 14px / 1.5

Weights:
- regular 400, medium 500, semibold 600, bold 700, display 800

Letter spacing:
- display: `-0.01em`
- body: `0`
- overline: `0.06em`

## 5. Spacing System
Base: 8px. Allowed scale:
- `--space-0`: 0
- `--space-1`: 4
- `--space-2`: 8
- `--space-3`: 12
- `--space-4`: 16
- `--space-6`: 24
- `--space-8`: 32
- `--space-12`: 48
- `--space-16`: 64
- `--space-24`: 96
- `--space-32`: 128

Section rhythm tokens:
- `--space-section-y-mobile`: 40px
- `--space-section-y-tablet`: 56px
- `--space-section-y-desktop`: 80px

Card/panel padding:
- `--space-card-padding-dense`: 20px
- `--space-card-padding`: 24px
- `--space-card-padding-premium`: 28px

## 6. Layout Tokens
- Containers: 640 / 768 / 960 / 1200 / 1440
- Grid + gutters (see responsive rules): 4 cols / 8 cols / 12 cols with 16 / 20 / 24 gutters
- Defaults: marketing surfaces use centered container with consistent section rhythm.

## 7. Surface System
- Page base: warm off-white background.
- Elevated: white card with hairline border and subtle shadow.
- Inset: light neutral wells for FAQ/testimonials.
- Overlay: translucent dark overlay for dialogs/sheets.
- Interactive: prefer outlined inputs and filled primary buttons.

## 8. Radius and Borders
Radius scale:
- none 0
- xs 4
- sm 6
- md 8
- lg 12
- xl 16
- 2xl 24
- 3xl 32
- full 9999

Component-specific:
- button: 12px
- input: 12px
- card: 12px
- panel: 16px

Border weights:
- default border: 1px
- focus ring: 2px visual, expressed via `--shadow-focus` and `--color-focus-ring`

## 9. Shadow and Depth
Depth ladder:
- `--shadow-1`: subtle separation
- `--shadow-2`: interactive lift
- `--shadow-3`: overlay depth
- `--shadow-focus`: focus ring shadow

Heavy/decorative shadows are forbidden.

## 10. Motion Tokens
Durations:
- `--motion-duration-instant`: 0ms
- `--motion-duration-fast`: 150ms
- `--motion-duration-base`: 200ms
- `--motion-duration-slow`: 260ms
- `--motion-duration-cinematic`: 320ms

Easings:
- `--motion-easing-standard`: `cubic-bezier(0.2, 0, 0, 1)`
- `--motion-easing-spring`: `cubic-bezier(0.16, 1, 0.3, 1)`
- `--motion-easing-decel`: `cubic-bezier(0, 0, 0.2, 1)`
- `--motion-easing-accel`: `cubic-bezier(0.4, 0, 1, 1)`

The full motion catalog lives in `motion-system.md`.

## 11. Breakpoints
- sm 640
- md 768
- lg 1024
- xl 1280
- 2xl 1440

## 12. Iconography
- Outline-first.
- Stroke widths: thin 1.5 / base 1.75 / bold 2.
- Sizes: 16 / 20 / 24 / 32.
- Filled icons allowed only for trust badges and status (success/warning).

## 13. Imagery and Media
- Real-photo direction per archetype; avoid generic stock.
- Allowed formats: AVIF/WebP (content); PNG/SVG for logos/icons.
- `next/image` required; `sizes` required.
- Aspect ratios:
  - feature/service media: 4:3
  - staff portraits: 1:1
  - work-site hero: 16:9 (when wide)

Off-limits:
- Illustrations as the primary hero media.
- Autoplay video with sound.

## 14. Content Density Rules
- Spacious: hero and top-of-page proof.
- Balanced: service grids, about sections.
- Dense: footer trust blocks and legal.

## 15. Mobile App-Like Rules
- Sticky bottom action bar: yes (mobile only).
- Sheet vs modal: use sheets on mobile for navigation and disclosure.
- Tap targets: minimum 44×44.

## 16. Accessibility Tokens & Rules
- Focus ring: `--color-focus-ring` + `--shadow-focus`.
- Contrast: target WCAG AA.
- Reduced motion: swap durations to `--motion-duration-instant` and remove transform-based effects where needed.
- Form labels persist (no placeholder-only labels).

## 17. Theming and Customization
- Token overrides supported via CSS variables.
- No layout primitive changes via theming.

## 18. Token Naming and Output
- Kebab-case token naming with category namespace.
- Tailwind theme keys map to tokens (codegen uses `design-system.tokens.json`).

Outputs:
- `design-system.md`
- `design-system.tokens.json`

## 19. Forbidden Values
- Raw hex / px / ms in components.
- Inline styles for color/spacing/typography.
- Arbitrary Tailwind values (e.g., `bg-[#123456]`, `mt-[13px]`).
