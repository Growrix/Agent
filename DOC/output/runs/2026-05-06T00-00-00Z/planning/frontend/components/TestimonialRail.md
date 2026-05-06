# Component Spec: TestimonialRail

- Class: organism
- Variants: compact_strip, featured_slider
- Content keys: testimonials.*
- Data source: cms.testimonials.byRoute(route)
- ARIA: carousel controls labelled, slide position announced politely
- Responsive: swipe-enabled mobile, arrow and swipe desktop
- Motion: motion.section.reveal.stagger; reduced_motion no transitions between slides
- States:
  - default
  - hover
  - focus-visible
  - active
  - disabled
  - loading
  - empty
  - error
  - success
