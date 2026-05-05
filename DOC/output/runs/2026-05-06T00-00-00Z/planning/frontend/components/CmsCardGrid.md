# Component Spec: CmsCardGrid

- Class: organism
- Variants: services_grid, portfolio_grid, blog_grid
- Content keys: services.*, portfolio.*, blog.*
- Data source: cms.collection(query, filters, pagination)
- ARIA: list and listitem semantics, filter controls with labels
- Responsive: adaptive columns desktop, single-column stacked mobile
- Motion: motion.section.reveal.stagger and motion.card.hover-lift; reduced_motion static cards
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
