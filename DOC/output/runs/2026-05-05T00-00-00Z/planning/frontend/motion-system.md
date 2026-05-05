---
document_type: motion-system
project_name: local-plumbing-marketing-site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 2-design-foundation
depends_on:
  - design-system.md
  - component-system.md
recommended_next_reads:
  - pages/
---

# Motion System — local-plumbing-marketing-site

## 1. Motion Posture
- Archetype posture: reassuring and never flashy (local-business-trust).
- Duration bands (token-only):
  - Macro: `--motion-duration-slow` for section reveals.
  - Micro: `--motion-duration-fast` / `--motion-duration-base` for hover/press/focus/accordion.
- Easing curves:
  - Default: `--motion-easing-standard`
  - Entering/reveals: `--motion-easing-decel`
  - Exiting/closes: `--motion-easing-accel`
- Macro vs micro vs streaming policy:
  - Macro: limited to drawer open/close and optional section reveals.
  - Micro: used for clarity (accordion), feedback (press/validation), and hierarchy (hover lift).
  - Streaming: not applicable for this marketing site.
- Reduced-motion stance:
  - All effects must switch to `--motion-duration-instant`.
  - Remove transforms that create perceived motion; preserve final visual state.

## 2. Macro Motion Catalog
- Section reveal:
  - duration: `--motion-duration-slow`
  - easing: `--motion-easing-decel`
  - effect: opacity 0→1 + translateY 12→0
  - trigger: IntersectionObserver, threshold 0.15
  - stagger: 90ms between siblings, max 5
  - reduced: instant fade-in

- Drawer open/close:
  - duration: `--motion-duration-base`
  - easing: enter `--motion-easing-decel`, exit `--motion-easing-accel`
  - effect: backdrop fade + panel translateX (off-canvas → 0)
  - trigger: hamburger button
  - reduced: instant open/close (no translate)

## 3. Micro Motion Catalog
- Hover lift:
  - duration: `--motion-duration-fast`
  - easing: `--motion-easing-standard`
  - effect: subtle scale (≤1.01) + shadow shift to `--shadow-2`
  - reduced: shadow shift only, no scale
  - purpose: hierarchy

- Press feedback:
  - duration: `--motion-duration-fast`
  - easing: `--motion-easing-decel`
  - effect: scale to ~0.98 on active
  - reduced: none (instant)
  - purpose: feedback

- Focus ring:
  - duration: `--motion-duration-fast`
  - easing: `--motion-easing-standard`
  - effect: apply `--color-focus-ring` + `--shadow-focus`
  - reduced: instant
  - purpose: clarity

- Accordion reveal:
  - duration: `--motion-duration-base`
  - easing: `--motion-easing-standard`
  - effect: content fade + height expand/collapse
  - reduced: instant expand/collapse
  - purpose: clarity

- Inline validation appear:
  - duration: `--motion-duration-fast`
  - easing: `--motion-easing-standard`
  - effect: fade + translateY 4→0
  - reduced: instant
  - purpose: clarity

- Count-up:
  - duration: `--motion-duration-cinematic`
  - easing: `--motion-easing-decel`
  - effect: number animates 0→target once
  - reduced: render static final value
  - purpose: hierarchy

## 4. Streaming Motion Catalog (not applicable)
- None.

## 5. Component-by-Component Motion Declarations
- Button: press feedback + focus ring; when `loading`, Spinner is shown and button is disabled.
- Card: hover lift (desktop) + focus-within ring when interactive.
- AccordionItem: accordion reveal on open/close.
- Spinner: rotates only when not reduced-motion; reduced-motion shows a static indicator.
- FormRow: inline validation appear; focus-within highlights.
- AlertMessage: appear/disappear for server or validation feedback.
- MediaBlock: optional fade-in when media resolves; preserves final dimensions at all times.
- StatBlock: optional count-up on first reveal only.
- Header: drawer open/close on mobile; scrolled compression uses tokenized transitions.
- ActionBar: optional expand/collapse for tertiary actions.
- HeroSection / FeatureSection / GridSection / DetailSection / TestimonialSection / FAQSection / CTASection / FormSection:
  - optional section reveal (only where it improves comprehension).

## 6. Performance Budget
- Target: 60fps on mid-range mobile.
- Allowed properties: `transform`, `opacity`.
- `will-change` policy: use only during active animation; remove after.

## 7. Forbidden in this Project
- Decorative parallax outside hero.
- Auto-playing video with sound.
- Looping/pulsing CTAs.
- Scroll-jacking carousels.

## 8. Reduced-Motion Plan
| Effect | Default | Reduced-Motion Fallback |
|---|---|---|
| Section reveal | fade + translateY | instant fade |
| Drawer open/close | translate + backdrop fade | instant open/close |
| Hover lift | scale + shadow shift | shadow shift only |
| Press feedback | scale down | instant/no scale |
| Focus ring | animated ring | instant ring |
| Accordion reveal | expand/collapse + fade | instant expand/collapse |
| Inline validation appear | fade + translateY | instant |
| Count-up | 0→target | static target |
| Spinner rotation | rotate | static indicator |
