---
document_type: design-system
project_name: plumbing-service-website
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 2-design-foundation
depends_on:
  - master-ui-architecture.md
  - ../brief.json
recommended_next_reads:
  - component-system.md
  - motion-system.md
---

# Design System

## 1. Visual Direction
- Visual statement: trustworthy trade-service polish with a cinematic but credible hero.
- Archetype: local-business-trust.
- Theme: light-first.
- Palette seed: #0B5EA8.

## 2. Color Tokens
- background: #F5F7FA
- surface: #FFFFFF
- inset: #E7EEF5
- overlay: rgba(7, 24, 43, 0.68)
- border: #D6E0EA
- text: #0E1E32
- text-muted: #53677D
- primary: #0B5EA8
- primary-hover: #094C87
- primary-foreground: #FFFFFF
- accent: #C98A38
- accent-foreground: #102033
- destructive: #C64536
- destructive-foreground: #FFFFFF
- success: #2F7D4E
- warning: #D79A22
- info: #4E78A8
- focus-ring: #78B8FF
- card: #FFFFFF
- card-foreground: #0E1E32
- popover: #FFFFFF
- popover-foreground: #0E1E32
- input: #EEF3F8
- ring: #78B8FF

## 3. Theme Logic
- Default theme is light-first to preserve trust.
- No default dark mode in v1.
- Accent usage cap: under 12% of visible viewport area.
- High-contrast mode preserves the same structure with stronger border/text separation.

## 4. Typography
- Display: Space Grotesk.
- Body: Plus Jakarta Sans.
- Mono: JetBrains Mono.
- Display scale: 56 / 48 / 40 / 32.
- Heading scale: 32 / 28 / 24 / 20 / 18.
- Body scale: 18 / 16 / 14.
- Weight usage: display 700, headings 700, labels 600, body 500/400 mix.

## 5. Spacing System
- Base unit: 8px.
- Allowed scale: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Section rhythm: 40 mobile, 56 tablet, 80 desktop.
- Card padding: 20 dense, 24 standard, 32 premium hero cards.

## 6. Layout Tokens
- Containers: 640 / 768 / 960 / 1200 / 1440.
- Grid: 4 / 8 / 12 columns by breakpoint.
- Alignment defaults: left-aligned copy, image-led right rails, centred section intros where proof-heavy.

## 7. Surface System
- Page base: warm off-white.
- Elevated: white cards with mild shadow and hairline border.
- Inset: pale blue-grey wells for testimonials, FAQs, and process blocks.
- Overlay: dark transparent overlay for media contrast when needed.
- Interactive surfaces: filled primary, white-outline secondary on hero, blue-outline secondary on white surfaces.

## 8. Radius and Borders
- Radius scale: 0 / 4 / 6 / 8 / 12 / 16 / 24 / 32 / full.
- Buttons and inputs: 12.
- Cards: 16.
- Large shells and hero overlap panel: 32.
- Border weight: 1px default, 2px for emphasis states only.

## 9. Shadow and Depth
- Shadow 1: subtle section lift.
- Shadow 2: interactive lift.
- Shadow 3: overlay depth for drawers and floating CTA.
- Focus shadow: blue halo paired with focus ring.

## 10. Motion Tokens
- instant: 0ms
- fast: 160ms
- base: 220ms
- slow: 260ms
- cinematic: 320ms
- standard easing: cubic-bezier(0.22, 1, 0.36, 1)
- spring easing: cubic-bezier(0.34, 1.56, 0.64, 1)
- decel easing: cubic-bezier(0, 0, 0.2, 1)
- accel easing: cubic-bezier(0.4, 0, 1, 1)

## 11. Breakpoints
- sm: 640
- md: 768
- lg: 1024
- xl: 1280
- 2xl: 1440

## 12. Iconography
- Outline-first icon set.
- Stroke widths: 1.5 / 1.75 / 2.
- Sizes: 16 / 20 / 24 / 32.
- Filled icons allowed for trust badges only.

## 13. Imagery and Media
- Use real staff, vans, tools, and job-site imagery.
- Hero ratio: 16:9 desktop crop, portrait-led subject within it.
- Feature and service imagery: 4:3.
- Testimonial avatars: 1:1.
- Avoid synthetic mockups, abstract 3D, or generic office stock.

## 14. Content Density Rules
- Home: balanced.
- Service and area pages: balanced leaning dense.
- Quote and contact pages: focused, dense forms with generous spacing.
- Legal pages: reading-density.

## 15. Mobile App-Like Rules
- Sticky bottom contact dock is required.
- Use sheets instead of centered modals on mobile.
- Minimum tap target: 44px.

## 16. Accessibility Tokens & Rules
- Focus ring uses --color-focus-ring and --shadow-focus.
- Contrast target: WCAG AA minimum across all text pairs.
- Reduced-motion swaps all durations to instant where motion is not essential.
- Form labels remain visible above inputs.

## 17. Theming and Customization
- Token overrides may adjust accent and photo selection only.
- Layout primitives, section rhythm, and navigation model stay fixed.

## 18. Token Naming and Output
- Kebab-case CSS variable naming.
- Tailwind keys mirror token categories.
- Machine-readable output lives in design-system.tokens.json.

## 19. Forbidden Values
- No raw hex, px, or ms values in components.
- No inline styles for spacing, typography, or color.