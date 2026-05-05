# Component Spec: CaseStudyTimeline

- Class: organism
- Variants: vertical_story, step_cards
- Content keys: case_study.*
- Data source: cms.caseStudy.bySlug(slug)
- ARIA: ordered list semantics with heading hierarchy
- Responsive: side timeline desktop, linear cards mobile
- Motion: motion.section.reveal.stagger; reduced_motion immediate reveal
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
