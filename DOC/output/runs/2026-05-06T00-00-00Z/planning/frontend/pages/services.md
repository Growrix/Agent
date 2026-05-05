---
document_type: page-spec
page_id: services
route: /services
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [services.hero.title, services.grid.title, services.cta.title]
---

## 1. Page Definition
- Purpose: Present service categories and route users to detail pages or quote.
- Target user intent: compare available services quickly.
- Primary CTA: content_key cta.get_quote -> /quote
- Secondary CTA: content_key nav.contact -> /contact
- KPI: services_to_quote_click_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Purpose: route orientation and support access
- Content keys: nav.*
- Components: HeaderShell
- Data source: static
- Interactions: route nav
- States: success
- Responsive: full nav desktop, compact mobile
- Motion: macro motion.page.enter.fade-slide purpose hierarchy; reduced_motion static
- Accessibility: nav landmark and focus treatment

### B. Services Hero
- Purpose: explain service scope
- Content keys: services.hero.*
- Components: HeroMediaStack
- Data source: cms.services.hero()
- Interactions: jump links to categories
- States: loading, error, success
- Responsive: split desktop, stacked mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion no stagger
- Accessibility: heading order and alt coverage
- Visual contract: media and copy panels with trust chips below fold line

### C. Service Category Grid
- Purpose: list services by category
- Content keys: services.grid.title
- Components: CmsCardGrid
- Data source: cms.services.list()
- Interactions: filter and open detail
- States: loading, empty, error, success
- Responsive: grid desktop, cards mobile
- Motion: micro motion.card.hover-lift purpose clarity; reduced_motion border emphasis
- Accessibility: list semantics and keyboard card activation

### D. Process Overview
- Purpose: set expectation for delivery flow
- Content keys: services.process.title
- Components: CaseStudyTimeline
- Data source: cms.services.process()
- Interactions: step expansion
- States: loading, success
- Responsive: horizontal desktop, vertical mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion immediate reveal
- Accessibility: ordered list semantics

### E. Financing and Warranty
- Purpose: reduce purchase anxiety
- Content keys: services.financing.title, services.warranty.title
- Components: CmsCardGrid
- Data source: cms.services.financingAndWarranty()
- Interactions: open detail cards
- States: loading, empty, success
- Responsive: paired cards desktop, stacked mobile
- Motion: micro motion.button.press purpose feedback; reduced_motion color shift only
- Accessibility: card heading hierarchy

### F. Testimonials Slice
- Purpose: reinforce trust before conversion
- Content keys: testimonials.list.title
- Components: TestimonialRail
- Data source: cms.testimonials.featured()
- Interactions: browse slides
- States: loading, empty, success
- Responsive: rail desktop, swipe cards mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion static
- Accessibility: control labels and swipe parity

### G. Conversion and Footer
- Purpose: capture intent and provide trust details
- Content keys: services.cta.title, footer.*
- Components: CtaBand, FooterTrust
- Data source: cms.site.footer()
- Interactions: quote, call, whatsapp
- States: success
- Responsive: horizontal desktop, stacked mobile
- Motion: micro motion.button.press purpose feedback; reduced_motion no transform
- Accessibility: contentinfo landmark and focus-visible action buttons

## 3. Page-Level State Requirements
- Grid loading and error fallback.
- Empty state with alternate route links.

## 4. Responsive Adaptation Summary
Desktop emphasizes comparison; mobile emphasizes sequential decision-making.

## 5. SEO and Metadata
- title_key: services.hero.title
- description_key: services.hero.subtitle
- canonical_pattern: /services
- schema_org: ItemList + Service

## 6. Conversion Path
- primary_path: Services Grid -> Service Detail -> Quote
- secondary_path: Testimonials Slice -> Contact
- exit_points: Blog, Portfolio

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content
- heading_outline: h1 services.hero.title, h2 services.grid.title

## 8. Performance Plan
- lcp_target: token.performance.lcp_marketing
- route_js_budget: token.performance.route_marketing_budget

## 9. Data Fetching Plan
- server fetch cms.services hero, list, process, financing blocks.
- server fetch testimonials and footer trust data.

## 10. Analytics Plan
- page_view: frontend.services.view
- events: frontend.services.filter_change, frontend.services.detail_click, frontend.services.quote_click

## 11. Open Questions
- Confirm category taxonomy for primary filter chips.

## 12. Asset Brief
- required slots: services-hero, category-cards, financing-support
- banned sources: generic non-solar trade photos
