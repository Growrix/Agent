---
document_type: page-spec
page_id: testimonials
route: /testimonials
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [testimonials.hero.title, testimonials.list.title, testimonials.cta.title]
---

## 1. Page Definition
- Purpose: consolidate social proof and drive quote intent.
- Target user intent: validate reputation and customer outcomes.
- Primary CTA: cta.get_quote -> /quote
- Secondary CTA: nav.contact -> /contact
- KPI: testimonials_to_quote_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: nav routes
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Hero
- Components: HeroMediaStack
- Data source: cms.testimonials.hero()
- States: loading, error, success
- Interactions: jump to review archive
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion no stagger
- Accessibility: h1 and alt semantics

### C. Rating Summary
- Components: StatusBadge
- Data source: cms.testimonials.aggregate()
- States: loading, empty, success
- Interactions: source filter
- Motion: motion.card.hover-lift clarity; reduced_motion border emphasis
- Accessibility: rating text alternative required

### D. Testimonial Archive
- Components: TestimonialRail, CmsCardGrid
- Data source: cms.testimonials.list(filters)
- States: loading, empty, error, success
- Interactions: filter, pagination, slide controls
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion direct render
- Accessibility: control labels and keyboard parity

### E. Video and Case Links
- Components: CmsCardGrid
- Data source: cms.testimonials.featuredVideoAndCases()
- States: loading, empty, success
- Interactions: open media and case links
- Motion: motion.button.press feedback; reduced_motion static
- Accessibility: transcripts and captions required

### F. Quote Bridge
- Components: CtaBand
- Data source: static
- States: success
- Interactions: open quote
- Motion: motion.button.press feedback; reduced_motion color-only
- Accessibility: button focus-visible

### G. Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: support links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- Empty archive state with services and contact fallback links.

## 4. Responsive Adaptation Summary
Proof first on mobile, richer filtering on desktop.

## 5. SEO and Metadata
- title_key: testimonials.hero.title
- description_key: testimonials.score.title
- canonical_pattern: /testimonials
- schema_org: Review + AggregateRating + LocalBusiness

## 6. Conversion Path
- primary_path: Archive -> Quote Bridge -> Quote
- secondary_path: Video and Case Links -> Contact
- exit_points: Portfolio, Services

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content

## 8. Performance Plan
- media lazy loading for below-fold videos.

## 9. Data Fetching Plan
- server fetch aggregate and list; url-synced filters.

## 10. Analytics Plan
- page_view: frontend.testimonials.view
- events: frontend.testimonials.filter, frontend.testimonials.quote_click

## 11. Open Questions
- Confirm third-party review source contract behavior.

## 12. Asset Brief
- required slots: testimonial-hero, customer-portrait, installation-context
