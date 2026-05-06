---
document_type: page-spec
page_id: service-detail
route: /services/[slug]
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [service_detail.hero.title, service_detail.inclusions.title, service_detail.cta.title]
---

## 1. Page Definition
- Purpose: explain one service with enough depth to convert.
- Target user intent: evaluate fit and expected outcomes.
- Primary CTA: content_key cta.get_quote -> /quote
- Secondary CTA: content_key cta.book_call -> /contact
- KPI: service_detail_to_quote_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Purpose: continuity and return to Home
- Content keys: nav.*
- Components: HeaderShell
- Data source: static
- Interactions: navigation
- States: success
- Responsive: standard
- Motion: macro motion.page.enter.fade-slide purpose hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Service Hero
- Purpose: service promise and scope framing
- Content keys: service_detail.hero.*
- Components: HeroMediaStack
- Data source: cms.service.bySlug(slug).hero
- Interactions: quote and contact triggers
- States: loading, error, success
- Responsive: split desktop, stacked mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion no stagger
- Accessibility: h1 + media alt semantics
- Visual contract: trust badge row directly under service headline

### C. Inclusions
- Purpose: define what is included and excluded
- Content keys: service_detail.inclusions.title
- Components: CmsCardGrid
- Data source: cms.service.bySlug(slug).inclusions
- Interactions: expand inclusion cards
- States: loading, empty, success
- Responsive: card grid desktop, accordion mobile
- Motion: micro motion.card.hover-lift purpose clarity; reduced_motion border emphasis
- Accessibility: disclosure controls with aria-expanded

### D. Process and Timeline
- Purpose: set implementation expectations
- Content keys: service_detail.process.title
- Components: CaseStudyTimeline
- Data source: cms.service.bySlug(slug).process
- Interactions: step expansion
- States: loading, success
- Responsive: timeline desktop, stacked steps mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion direct reveal
- Accessibility: ordered process outline

### E. Savings and Financing
- Purpose: show practical economics
- Content keys: service_detail.savings.title
- Components: CmsCardGrid
- Data source: cms.service.bySlug(slug).economics
- Interactions: open financing details
- States: loading, empty, error, success
- Responsive: side-by-side desktop, stacked mobile
- Motion: micro motion.button.press purpose feedback; reduced_motion static
- Accessibility: tables and charts have text equivalents

### F. Proof and FAQ
- Purpose: social validation and objection handling
- Content keys: service_detail.testimonial.title, service_detail.faq.title
- Components: TestimonialRail, AccordionItem
- Data source: cms.service.bySlug(slug).proof, cms.service.bySlug(slug).faq
- Interactions: browse testimonials, toggle faq
- States: loading, empty, success
- Responsive: split desktop, stacked mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion static
- Accessibility: aria-controls for accordion items

### G. Conversion and Footer
- Purpose: finalize intent and provide trust footer
- Content keys: service_detail.cta.title, footer.*
- Components: CtaBand, FooterTrust
- Data source: cms.site.footer()
- Interactions: quote, call, whatsapp
- States: success
- Responsive: horizontal desktop, stacked mobile
- Motion: micro motion.button.press purpose feedback; reduced_motion color-only
- Accessibility: focus-visible on all actions

## 3. Page-Level State Requirements
- slug not-found fallback routes to not-found page spec.
- cms fetch failure fallback with alternate contact CTA.

## 4. Responsive Adaptation Summary
- Desktop emphasizes comparison and visual trust.
- Mobile emphasizes linear comprehension and sticky conversion rail.

## 5. SEO and Metadata
- title_key: service_detail.hero.title
- description_key: service_detail.hero.subtitle
- canonical_pattern: /services/[slug]
- schema_org: Service + FAQPage + BreadcrumbList

## 6. Conversion Path
- primary_path: Hero -> Inclusions -> Conversion
- secondary_path: Proof -> FAQ -> Contact
- exit_points: Services, Portfolio

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content
- heading_outline: h1 service_detail.hero.title, h2 service_detail.inclusions.title

## 8. Performance Plan
- lcp_target: token.performance.lcp_marketing
- defer_below_fold: true

## 9. Data Fetching Plan
- server fetch service payload by slug with cache revalidate profile.
- server fetch footer and related testimonials.

## 10. Analytics Plan
- page_view: frontend.service_detail.view
- events: frontend.service_detail.quote_click, frontend.service_detail.call_click

## 11. Open Questions
- Confirm per-service financing schema in cms contracts.

## 12. Asset Brief
- required slots: service-hero, process-step-media, proof-media
