---
document_type: page-spec
page_id: home
route: /
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: mixed
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [home.hero.title, home.hero.subtitle, cta.get_quote, cta.open_whatsapp, assistant.launcher.label]
---

## 1. Page Definition
- Purpose: Introduce services and move visitors to quote or contact channels.
- Target user intent: understand fit and trust quickly.
- Primary CTA: content_key cta.get_quote -> /quote
- Secondary CTA: content_key cta.book_call -> /contact
- KPI: quote_calculator_start_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Purpose: fast wayfinding with Home path visible.
- Content keys: nav.*
- Components: HeaderShell
- Data source: static
- Interactions: route nav, support action shortcuts
- States: success
- Responsive: desktop full nav, mobile compact nav + dock handoff
- Motion: macro motion.page.enter.fade-slide purpose hierarchy; reduced_motion immediate render
- Accessibility: nav landmark and focus-visible links

### B. Hero
- Purpose: establish trust and primary conversion entry.
- Content keys: home.hero.*
- Components: HeroMediaStack, CtaBand
- Data source: cms.home.hero()
- Interactions: open quote and view projects
- States: loading, error, success
- Responsive: split desktop, stacked mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion no stagger
- Accessibility: single h1 and descriptive media alt
- Visual contract: desktop layered copy-media shell; tablet balanced stack; mobile text-first with sticky action rail

### C. Trust Strip
- Purpose: show license, warranty, installations proof.
- Content keys: home.trust.*
- Components: StatusBadge
- Data source: cms.site.trustSignals()
- Interactions: drill into about and testimonials
- States: loading, empty, success
- Responsive: row desktop, scroll chips mobile
- Motion: micro motion.card.hover-lift purpose clarity; reduced_motion border-emphasis only
- Accessibility: list semantics and not color-only status

### D. Services Preview
- Purpose: preview install offerings.
- Content keys: services.grid.title
- Components: CmsCardGrid
- Data source: cms.services.featured()
- Interactions: open service detail
- States: loading, empty, error, success
- Responsive: multi-column desktop, single-column mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion static cards
- Accessibility: card links keyboard reachable

### E. Portfolio and Testimonials
- Purpose: build credibility via outcomes and social proof.
- Content keys: home.projects.title, home.testimonials.title
- Components: CmsCardGrid, TestimonialRail
- Data source: cms.portfolio.featured(), cms.testimonials.featured()
- Interactions: open case study, browse testimonial slides
- States: loading, empty, error, success
- Responsive: two-panel desktop, stacked mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion direct reveal
- Accessibility: carousel has button and swipe parity

### F. Quote Entry
- Purpose: bring users into instant estimate flow.
- Content keys: home.calculator.entry_title
- Components: QuoteCalculatorPanel
- Data source: integration.quote.estimatePreview(payload)
- Interactions: calculator step controls and submit
- States: default, loading, validation_error, server_error, success
- Responsive: side panel desktop, full-width flow mobile
- Motion: micro motion.counter.quote-update purpose feedback; reduced_motion direct value swap
- Accessibility: labelled fields and error association

### G. FAQ and Final CTA
- Purpose: handle objections and close conversion.
- Content keys: home.faq.title, home.final_cta.title
- Components: AccordionItem, CtaBand, FooterTrust
- Data source: cms.faq.home(), cms.site.footer()
- Interactions: accordion toggle, contact actions
- States: loading, empty, success
- Responsive: split desktop, stacked mobile
- Motion: micro motion.button.press purpose feedback; reduced_motion color-only change
- Accessibility: aria-expanded and footer contentinfo landmark

## 3. Page-Level State Requirements
- Loading skeleton on hero, cards, testimonials, and faq.
- Error fallback with retry for cms sections.
- Offline mode banner for calculator actions.

## 4. Responsive Adaptation Summary
- Desktop uses layered hero and dual-panel proof sections.
- Tablet compresses to balanced vertical flow.
- Mobile prioritizes single-column scan and sticky conversion actions.

## 5. SEO and Metadata
- title_key: home.hero.title
- description_key: home.hero.subtitle
- og_title_key: home.hero.title
- og_description_key: home.hero.subtitle
- og_image_key: home.hero.og_image
- canonical_pattern: / 
- schema_org: LocalBusiness + Service + FAQPage

## 6. Conversion Path
- primary_path: Hero CTA -> Quote Entry -> Submit
- secondary_path: Trust Strip -> Testimonials -> Contact
- exit_points: Services, Portfolio, Blog

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content
- heading_outline: h1 home.hero.title, h2 services.grid.title, h2 home.projects.title
- motion_prefers_reduced: all motion entries use reduced fallbacks

## 8. Performance Plan
- lcp_target: token.performance.lcp_marketing
- hero_image_budget: token.performance.hero_media_budget
- route_js_budget: token.performance.route_marketing_budget
- defer_below_fold: true

## 9. Data Fetching Plan
- server fetch cms.home.hero with revalidate strategy.
- server fetch cms collections for featured grids.
- client fetch integration.quote estimate preview with retry affordance.

## 10. Form Plan
- fields: quote.surface_type, quote.monthly_bill, quote.property_type, quote.contact_email, quote.contact_phone
- validation: zod.quoteCalculatorSchema
- submit: integration.quote.submitLead payload
- states: submitting, success, validation_error, server_error, offline_error
- privacy_notice_key: quote.form.privacy_note

## 11. Analytics Plan
- page_view: frontend.home.view
- events: frontend.home.quote_start, frontend.home.call_click, frontend.home.whatsapp_click, frontend.home.assistant_open

## 12. Open Questions
- Confirm analytics naming namespace for production contracts.

## 13. Asset Brief
- required slots: hero-primary, hero-secondary, featured-projects, testimonial-support-photo
- allowed sources: licensed free-stock and customer-approved project photos
- banned sources: synthetic mockups and unrelated industrial imagery
- alt intent: task and installation context
