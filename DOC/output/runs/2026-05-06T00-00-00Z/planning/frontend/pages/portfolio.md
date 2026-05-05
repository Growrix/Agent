---
document_type: page-spec
page_id: portfolio
route: /portfolio
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [portfolio.hero.title, portfolio.grid.title, portfolio.cta.title]
---

## 1. Page Definition
- Purpose: showcase completed installations and route to case-study detail.
- Target user intent: validate installer credibility through outcomes.
- Primary CTA: content_key cta.get_quote -> /quote
- Secondary CTA: content_key nav.contact -> /contact
- KPI: portfolio_to_quote_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Purpose: navigation continuity
- Content keys: nav.*
- Components: HeaderShell
- Data source: static
- Interactions: nav links
- States: success
- Responsive: standard
- Motion: macro motion.page.enter.fade-slide purpose hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Portfolio Hero
- Purpose: frame project library
- Content keys: portfolio.hero.*
- Components: HeroMediaStack
- Data source: cms.portfolio.hero()
- Interactions: jump to filter rail
- States: loading, success
- Responsive: split desktop, stacked mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion direct render
- Accessibility: h1 and media alt text
- Visual contract: large project media with overlayed performance badges

### C. Filter Rail
- Purpose: narrow projects by location and system type
- Content keys: portfolio.filters.region, portfolio.filters.system_type
- Components: FilterChip
- Data source: cms.portfolio.filterOptions()
- Interactions: chip select and clear
- States: loading, success
- Responsive: horizontal rail desktop, wrap chips mobile
- Motion: micro motion.button.press purpose feedback; reduced_motion no transform
- Accessibility: chip selection uses aria-pressed

### D. Project Grid
- Purpose: browse visual case cards
- Content keys: portfolio.grid.title
- Components: CmsCardGrid
- Data source: cms.portfolio.list(filters)
- Interactions: open case detail
- States: loading, empty, error, success
- Responsive: dense desktop grid, stacked mobile
- Motion: micro motion.card.hover-lift purpose clarity; reduced_motion border emphasis
- Accessibility: each card has keyboard-openable link

### E. Outcome Highlights
- Purpose: summarize impact trends
- Content keys: case_study.outcome.title
- Components: StatusBadge, CmsCardGrid
- Data source: cms.portfolio.metricsSummary()
- Interactions: open related projects
- States: loading, empty, success
- Responsive: row desktop, stack mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion static
- Accessibility: includes text equivalents for all metrics

### F. Testimonial Bridge
- Purpose: connect project outcomes with customer voice
- Content keys: testimonials.list.title
- Components: TestimonialRail
- Data source: cms.testimonials.portfolioLinked()
- Interactions: slide controls
- States: loading, empty, success
- Responsive: rail desktop, swipe cards mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion static
- Accessibility: controls have labels and keyboard parity

### G. CTA and Footer
- Purpose: convert and provide trust details
- Content keys: portfolio.cta.title, footer.*
- Components: CtaBand, FooterTrust
- Data source: cms.site.footer()
- Interactions: quote and contact actions
- States: success
- Responsive: horizontal desktop, stacked mobile
- Motion: micro motion.button.press purpose feedback; reduced_motion no transform
- Accessibility: footer landmark

## 3. Page-Level State Requirements
- empty results state with clear filter reset affordance.
- error state with retry action.

## 4. Responsive Adaptation Summary
Desktop highlights media density; mobile shifts to progressive reveal cards.

## 5. SEO and Metadata
- title_key: portfolio.hero.title
- description_key: portfolio.hero.subtitle
- canonical_pattern: /portfolio
- schema_org: CollectionPage + ItemList

## 6. Conversion Path
- primary_path: Grid -> Case Study -> Quote
- secondary_path: Testimonial Bridge -> Contact
- exit_points: Services, Blog

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content

## 8. Performance Plan
- media strategy uses responsive image sources and lazy policy below fold.

## 9. Data Fetching Plan
- server fetch filter options and project lists with url-synced filter params.

## 10. Analytics Plan
- page_view: frontend.portfolio.view
- events: frontend.portfolio.filter, frontend.portfolio.case_click, frontend.portfolio.quote_click

## 11. Open Questions
- Confirm mandatory filters for launch set.

## 12. Asset Brief
- required slots: portfolio-hero, project-grid-thumbs, outcomes-strip
