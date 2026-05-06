---
document_type: page-spec
page_id: quote
route: /quote
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: mixed
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [quote.hero.title, quote.calculator.title, quote.form.title, quote.success.title]
---

## 1. Page Definition
- Purpose: complete instant estimate and collect qualified lead details.
- Target user intent: obtain realistic initial quote quickly.
- Primary CTA: quote.form.submit -> submit integration
- Secondary CTA: cta.book_call -> /contact
- KPI: quote_submit_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: nav
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Quote Hero
- Components: HeroMediaStack
- Data source: cms.quote.hero()
- States: loading, success
- Interactions: jump to calculator
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: h1 and descriptive supporting text
- Visual contract: two-panel hero with trust card and estimate preview

### C. Step Calculator
- Components: QuoteCalculatorPanel
- Data source: integration.quote.estimate(payload)
- States: default, loading, validation_error, server_error, success
- Interactions: step controls, value updates, estimate recalc
- Motion: motion.counter.quote-update feedback; reduced_motion direct update
- Accessibility: labelled controls and error association

### D. Proposal Factors
- Components: CmsCardGrid
- Data source: cms.quote.factors()
- States: loading, empty, success
- Interactions: expandable factor details
- Motion: motion.card.hover-lift clarity; reduced_motion border emphasis
- Accessibility: disclosure semantics

### E. Lead Capture Form
- Components: QuoteCalculatorPanel
- Data source: integration.quote.submitLead(payload)
- States: default, submitting, validation_error, server_error, success
- Interactions: form submit and retry
- Motion: motion.input.focus-ring feedback; reduced_motion static
- Accessibility: label, describedby, required markers

### F. Support Alternatives
- Components: SupportFabCluster, CtaBand
- Data source: static
- States: success
- Interactions: call, whatsapp, assistant
- Motion: motion.button.press feedback; reduced_motion no transform
- Accessibility: touch target and keyboard parity

### G. Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: legal and support links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- server and network recovery includes retry and preserved input.

## 4. Responsive Adaptation Summary
- desktop side-by-side calculator and lead form, mobile sequential stepper.

## 5. SEO and Metadata
- title_key: quote.hero.title
- description_key: quote.hero.subtitle
- canonical_pattern: /quote
- schema_org: Service + ContactPage

## 6. Conversion Path
- primary_path: Step Calculator -> Lead Capture -> Success
- secondary_path: Support Alternatives -> Contact
- exit_points: Services, Portfolio

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content

## 8. Performance Plan
- isolate calculator client bundle and defer non-critical sections.

## 9. Data Fetching Plan
- server fetch hero and factors; client submit and estimate calls.

## 10. Form Plan
- fields: property_type, roof_type, monthly_bill, zipcode, email, phone, timeline
- validation: zod.quoteFormSchema
- submit endpoint: integration.quote.submitLead
- success: render quote.success.title and next-step CTA
- errors: validation, server, offline with retry
- privacy_notice_key: quote.form.privacy_note

## 11. Analytics Plan
- page_view: frontend.quote.view
- events: frontend.quote.step_complete, frontend.quote.submit, frontend.quote.submit_error

## 12. Open Questions
- Confirm estimate logic tolerance ranges by region.

## 13. Asset Brief
- required slots: quote-hero, calculator-support-image
