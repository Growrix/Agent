# Component Spec: HeroMediaStack

- Class: organism
- Variants: home, services, portfolio, quote
- Content keys: route hero keys
- Data source: cms.heroByRoute(route)
- ARIA: single h1 contract, descriptive alt for meaningful imagery
- Responsive: layered split desktop, stacked media-first or text-first by route on mobile
- Motion: motion.section.reveal.stagger; reduced_motion no stagger
- States:
  - default
  - hover (media cards)
  - focus-visible (embedded actions)
  - active
  - disabled
  - loading (hero skeleton)
  - error (fallback hero block)
  - empty (text-only hero)
