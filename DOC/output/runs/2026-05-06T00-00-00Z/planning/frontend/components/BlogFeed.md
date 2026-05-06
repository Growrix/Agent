# Component Spec: BlogFeed

- Class: organism
- Variants: featured_plus_grid, compact_related
- Content keys: blog.*, blog_detail.*
- Data source: cms.posts.list(query)
- ARIA: article semantics and labelled filters
- Responsive: featured split desktop, stacked feed mobile
- Motion: motion.section.reveal.stagger; reduced_motion static feed rendering
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
