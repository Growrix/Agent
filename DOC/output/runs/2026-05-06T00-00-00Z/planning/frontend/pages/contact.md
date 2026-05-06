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
- Purpose: site-wide wayfinding; Home path and contact shortcuts always visible
- Content keys: nav.*
- Data source: static
- States: success
- Interactions: nav links, call/WhatsApp shortcut
- Responsive: full nav desktop; compact + dock mobile
- Motion: motion.page.enter.fade-slide (variant: `headerEnter`) purpose hierarchy; reduced_motion static
- Accessibility: nav landmark, focus-visible links

### B. Contact Hero
- Purpose: user immediately sees all contact methods and understands how fast they can reach the team — no photography, clarity-first
- Content keys: contact.hero.title, contact.hero.sub, contact.hero.response_time_badge, contact.hero.availability_label
- Data source: cms.contact.hero()
- States: loading (skeleton), success
- Interactions: anchor-scroll to channels section; keyboard focus lands on first channel CTA
- Responsive:
  - desktop: two-column utility layout — left column contact channels (phone, WhatsApp, email, assistant), right column map/address block; brand-accent background surface (no photography)
  - tablet: two-column collapses to single column; channels above, map below
  - mobile: channels as full-width tappable rows, stacked vertically; map hidden, address shown as text
- Motion: motion.section.reveal.stagger (variant: `contactHeroReveal`) purpose hierarchy; reduced_motion static
- Accessibility: h1 above channels; each channel row is a large touch target (min 48px height); keyboard navigable
- Visual contract:
  - desktop composition: two-column utility panel; left = icon-driven channel list with large tappable rows; right = map or address block; brand-accent background (not white, not photography)
  - tablet composition: single column; channels → address block
  - mobile composition: channels as full-width tappable card rows; response time badge visible above first channel
  - media framing: NO hero photography — the channel list IS the primary visual; use brand-accent background
  - trust surface: response time badge (e.g., "Typically replies within 1 hour") anchored top-right of hero panel
- visual-differentiation-note: Contact hero is utility-first with NO photography and a brand-accent background — completely distinct from Home (campaign photo), Services (cinematic landscape), Portfolio (masonry grid), and About (portrait-split). No other route uses this channel-list-as-hero pattern.

### C. Contact Channels Detail
- Purpose: each contact method is a self-contained action with clear expected outcome
- Content keys: contact.channels.call.label, contact.channels.call.number, contact.channels.whatsapp.label, contact.channels.email.label, contact.channels.assistant.label, contact.channels.schedule.label
- Data source: cms.contact.channels()
- States: loading (row skeleton), empty (fallback phone number static), success
- Interactions: click-to-call (tel: link), open WhatsApp (integration.support.openWhatsApp), launch email client, open AI assistant modal, open scheduling widget
- Responsive:
  - desktop: 2×3 grid of channel cards with icon + label + action button
  - mobile: single-column stacked rows; each row full-width tappable
- Motion: motion.button.press (variant: `channelPress`) purpose feedback; motion.section.reveal.stagger (variant: `channelsReveal`) on mount; reduced_motion color shift only
- Accessibility: each card has a distinct aria-label; touch target ≥48px; keyboard Tab order follows visual order

### D. Contact Form
- Purpose: user can submit a structured request when asynchronous contact is preferred
- Content keys: contact.form.title, contact.form.name_label, contact.form.email_label, contact.form.phone_label, contact.form.topic_label, contact.form.message_label, contact.form.submit_label, contact.form.privacy_note, contact.form.success_title, contact.form.error_message
- Data source: integration.contact.submit(payload)
- States: default, submitting (button loading), validation_error (inline field errors), server_error (toast + retry), success (success state replaces form)
- Interactions: real-time zod validation on blur; submit; error recovery with preserved field values
- Responsive:
  - desktop: two-column form (name + email in row 1) then single-column fields below
  - mobile: single-column all fields
- Motion: motion.input.focus-ring (variant: `inputFocusRing`) purpose feedback; reduced_motion static focus ring
- Accessibility: every field has explicit `<label>`; error messages linked via `aria-describedby`; success state announces via live region

### E. Service Area and Hours
- Purpose: user confirms the company serves their location and knows when they can call
- Content keys: contact.service_area.title, contact.service_area.regions.*, contact.hours.title, contact.hours.weekday, contact.hours.weekend, contact.hours.emergency
- Data source: cms.contact.serviceAreaAndHours()
- States: loading (skeleton), empty (fallback static text), success
- Interactions: expand region list; map loads on user intent (not on page load)
- Responsive:
  - desktop: side-by-side — service area map left, hours grid right
  - mobile: hours first (most time-sensitive), map/area list below
- Motion: motion.card.hover-lift (variant: `areaCardHover`) purpose clarity; reduced_motion border emphasis only
- Accessibility: map has a text fallback listing served postcodes/regions; hours table uses proper `<table>` semantics

### F. FAQ and Support Bridge
- Purpose: handle the top contact-related hesitations and surface self-service paths
- Content keys: contact.faq.title, contact.faq.items.*, contact.support_bridge.title, cta.open_whatsapp, cta.book_call
- Data source: cms.faq.contact()
- States: loading, empty, success
- Interactions: accordion open/close; CTA actions
- Responsive:
  - desktop: FAQ accordion left-aligned (65% width); CTA bridge right-aligned sticky column
  - mobile: FAQ full-width accordion, CTA bridge below
- Motion: accordion open/close uses CSS height transition (not framer-motion, declared in tokens); motion.button.press (variant: `ctaPress`) on CTA; reduced_motion instant accordion open
- Accessibility: `aria-expanded` on accordion triggers; `aria-controls` linking trigger to panel

### G. Footer
- Purpose: site-wide exit links, legal, support contacts
- Content keys: footer.*
- Data source: cms.site.footer()
- States: success
- Interactions: legal links, social links, nav links
- Responsive: multi-column desktop, stacked mobile
- Motion: motion.section.reveal.stagger (variant: `footerReveal`) purpose hierarchy; reduced_motion static
- Accessibility: `<footer>` with `contentinfo` landmark

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
