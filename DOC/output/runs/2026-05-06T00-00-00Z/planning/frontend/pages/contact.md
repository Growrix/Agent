---
document_type: page-spec
page_id: contact
route: /contact
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: mixed
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [contact.hero.title, contact.channels.title, contact.form.title]
---

## 1. Page Definition
- Purpose: provide all direct contact paths and request form.
- Target user intent: reach the team with minimal effort.
- Primary CTA: cta.book_call -> integration.contact.requestCall
- Secondary CTA: cta.open_whatsapp -> integration.support.openWhatsApp
- KPI: contact_request_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: nav
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Contact Hero
- Components: HeroMediaStack
- Data source: cms.contact.hero()
- States: loading, success
- Interactions: quick action jump links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: h1 and hero alt text

### C. Contact Channels
- Components: SupportFabCluster, CmsCardGrid
- Data source: cms.contact.channels()
- States: loading, empty, success
- Interactions: call, whatsapp, assistant, email
- Motion: motion.button.press feedback; reduced_motion color-only
- Accessibility: touch target and keyboard parity

### D. Contact Form
- Components: AuthFormCard
- Data source: integration.contact.submit(payload)
- States: default, loading, validation_error, server_error, success
- Interactions: submit and retry
- Motion: motion.input.focus-ring feedback; reduced_motion static
- Accessibility: labels, helper text, and error links

### E. Service Area and Hours
- Components: CmsCardGrid
- Data source: cms.contact.serviceAreaAndHours()
- States: loading, empty, success
- Interactions: open map and area detail
- Motion: motion.card.hover-lift clarity; reduced_motion border emphasis
- Accessibility: map fallback text and address semantics

### F. FAQ Support
- Components: AccordionItem, CtaBand
- Data source: cms.faq.contact()
- States: loading, empty, success
- Interactions: faq toggle and support CTA
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: aria-expanded for faq items

### G. Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: legal links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- form recovery with preserved input and retry.

## 4. Responsive Adaptation Summary
- mobile prioritizes quick-contact cards and sticky support actions.

## 5. SEO and Metadata
- title_key: contact.hero.title
- description_key: contact.channels.title
- canonical_pattern: /contact
- schema_org: ContactPage + LocalBusiness

## 6. Conversion Path
- primary_path: Contact Channels -> Contact Form success
- secondary_path: FAQ Support -> Call/WhatsApp
- exit_points: Quote, Services

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content

## 8. Performance Plan
- maps and rich embeds deferred until user intent.

## 9. Data Fetching Plan
- server fetch contact cms blocks; client submit form integration.

## 10. Form Plan
- fields: name, email, phone, message_topic, message
- validation: zod.contactSchema
- submit: integration.contact.submit
- states: submitting, success, validation_error, server_error, offline_error
- privacy_notice_key: quote.form.privacy_note

## 11. Analytics Plan
- page_view: frontend.contact.view
- events: frontend.contact.call_click, frontend.contact.whatsapp_click, frontend.contact.form_submit

## 12. Open Questions
- Confirm map provider and consent behavior requirements.

## 13. Asset Brief
- required slots: contact-hero, support-team-image
