---
document_type: motion-system
project_name: plumbing-service-website
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 2-design-foundation
depends_on:
  - design-system.md
  - component-system.md
recommended_next_reads:
  - pages/
---

# Motion System

## 1. Motion Posture
- Duration band: reassuring slow-medium.
- Easing: standard for interactive motion, decel for entrances, accel for exits.
- Macro motion supports hierarchy and reading order only.
- Micro motion supports feedback and CTA emphasis.
- Reduced motion preserves visibility while removing travel.

## 2. Macro Motion Catalog
- Section reveal:
  - duration: --motion-duration-slow
  - easing: --motion-easing-decel
  - effect: opacity 0 to 1 plus translateY 12 to 0
  - trigger: IntersectionObserver threshold 0.15
  - stagger: 90ms between siblings, max 5
  - reduced: instant fade
- Page transition:
  - duration: --motion-duration-base
  - easing: --motion-easing-standard
  - effect: cross-fade plus translateY 4 to 0
  - reduced: instant swap
- Drawer open/close:
  - duration: --motion-duration-base
  - easing: decel in, accel out
  - effect: translateX with backdrop fade
  - reduced: instant open/close
- Sheet open/close:
  - duration: --motion-duration-base
  - easing: decel in, accel out
  - effect: translateY 24 to 0 with backdrop fade
  - reduced: instant open/close
- Toast entry/exit:
  - duration: --motion-duration-base
  - easing: --motion-easing-decel
  - effect: translateY 12 and fade
  - reduced: instant appearance

## 3. Micro Motion Catalog
- Hover lift:
  - duration: --motion-duration-fast
  - easing: --motion-easing-standard
  - effect: scale 1 to 1.01 and shadow shift to --shadow-2
  - reduced: shadow only
  - purpose: hierarchy
- Press feedback:
  - duration: --motion-duration-fast
  - easing: --motion-easing-decel
  - effect: scale 1 to 0.98
  - reduced: color change only
  - purpose: feedback
- Focus ring:
  - duration: --motion-duration-fast
  - easing: --motion-easing-standard
  - effect: focus halo appears with shadow-focus
  - reduced: same visual, instant
  - purpose: clarity
- Accordion reveal:
  - duration: --motion-duration-base
  - easing: --motion-easing-decel
  - effect: content fade plus height expansion
  - reduced: instant expand
  - purpose: clarity
- Inline validation appear:
  - duration: --motion-duration-fast
  - easing: --motion-easing-standard
  - effect: opacity 0 to 1 plus translateY 4 to 0
  - reduced: instant
  - purpose: feedback
- Count-up:
  - duration: --motion-duration-cinematic
  - easing: --motion-easing-standard
  - effect: once-only number count on reveal
  - reduced: static final value
  - purpose: hierarchy

## 4. Streaming Motion Catalog
- Not applicable for this marketing site.

## 5. Component-by-Component Motion Declarations
- Button: press feedback, focus ring.
- InputField: focus ring, inline validation appear.
- Header: subtle sticky shadow transition.
- HeroSplit: section reveal for copy and media shells.
- TrustBadgeRow: staggered reveal.
- ServiceCard: hover lift.
- TestimonialCard: hover lift.
- QuoteFormCard: inline validation appear, success-state fade.
- StickyContactDock: sheet rise on first reveal.
- FAQAccordion: accordion reveal.
- Footer: no animation beyond section reveal.

## 6. Performance Budget
- 60fps target on mid-range mobile.
- Animate transform and opacity only.
- will-change used only on hero reveal and sticky dock entry.

## 7. Forbidden in this Project
- No parallax outside the hero.
- No looping CTA pulses.
- No auto-playing video.
- No scroll-jacking carousels.
- No decorative motion that delays reading.

## 8. Reduced-Motion Plan
| Effect | Default | Reduced-Motion Fallback |
|---|---|---|
| Section reveal | fade + translateY | instant fade |
| Hover lift | scale + shadow | shadow only |
| Count-up | animated number | static final number |
| Drawer open | translate + fade | instant |
| Accordion reveal | height + fade | instant expand |