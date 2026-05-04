---
document_type: page-spec
page_id: contact
route: /contact
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: mixed
depends_on:
  - ../master-ui-architecture.md
  - ../design-system.md
  - ../component-system.md
  - ../motion-system.md
  - ../content-library.md
content_keys_used:
  - contact.hero.eyebrow
  - contact.hero.headline
  - contact.hero.subheadline
  - contact.channels.heading
  - contact.channels.body
  - contact.form.heading
  - contact.final_cta.heading
  - contact.final_cta.body
---

# Contact

## 1. Page Definition
- Purpose: surface every contact mode clearly.
- Target user intent: choose the fastest suitable contact option.
- Primary CTA: Call Now -> tel link.
- Secondary CTA: Send Message -> POST /api/leads.
- KPI to optimize: contact-page lead conversions.
- Min sections exempt: false.

## 2. Sections in Visual Order
### 1. Header
- Purpose: global nav.
- Content keys: component.nav.*, component.button.call_now.
- Components: Header.
- Data source: static.
- Interactions: nav click, call CTA.
- States: default.
- Responsive: compact on mobile.
- Motion: focus ring only; reduced-motion instant.
- Accessibility: Home path visible.

### 2. Hero
- Purpose: set up the contact-first posture.
- Content keys: contact.hero.*.
- Components: HeroSplit, Button.
- Data source: static.
- Interactions: call CTA and jump to form.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: single H1.

### 3. Contact Channels
- Purpose: show phone, hours, service-area note, and form option together.
- Content keys: contact.channels.heading, contact.channels.body, component.footer.hours, component.footer.service_area.
- Components: TrustBadgeRow, Button.
- Data source: static.
- Interactions: call click, quote click.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: phone link and labels are explicit.

### 4. Contact Form
- Purpose: capture non-urgent contact messages.
- Content keys: contact.form.heading, quote.form.name_label, quote.form.phone_label, quote.form.message_label, quote.form.submit, trust.privacy.
- Components: QuoteFormCard, InputField.
- Data source: integration.POST /api/leads.
- Interactions: field entry, submit.
- States: validation-error, submitting, success, server-error.
- Responsive: single-column on mobile, two-column on desktop.
- Motion: inline validation appear; reduced-motion instant.
- Accessibility: visible labels and error descriptions.

### 5. Address and Availability
- Purpose: reinforce legitimacy and expectations.
- Content keys: component.footer.address, component.footer.hours, component.footer.license.
- Components: TrustBadgeRow.
- Data source: static.
- Interactions: none.
- States: default.
- Responsive: stacked list.
- Motion: section reveal; reduced-motion instant.
- Accessibility: semantic list.

### 6. FAQ Reminder
- Purpose: answer contact hesitation before abandonment.
- Content keys: faq.items.0.question, faq.items.1.question.
- Components: FAQAccordion.
- Data source: static.
- Interactions: accordion expand.
- States: default.
- Responsive: full width.
- Motion: accordion reveal; reduced-motion instant.
- Accessibility: keyboard support.

### 7. Final CTA
- Purpose: give one last direct phone path.
- Content keys: contact.final_cta.heading, contact.final_cta.body.
- Components: Button.
- Data source: static.
- Interactions: call CTA.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: explicit action text.

### 8. Footer
- Purpose: trust and legal close.
- Content keys: component.footer.*.
- Components: Footer, StickyContactDock.
- Data source: static.
- Interactions: footer links and sticky actions.
- States: default.
- Responsive: stacked footer groups.
- Motion: reveal only; reduced-motion instant.
- Accessibility: footer landmark.

## 3. Page-Level State Requirements
- Loading skeleton: none beyond form shell.
- Error fallback: form error message plus direct call fallback.
- Empty state: not applicable.
- Auth state: not applicable.
- Network offline: call path remains usable.

## 4. Responsive Adaptation Summary
The contact page prioritises a thumb-friendly decision on mobile: call first, message second, supporting trust details immediately below.

## 5. SEO and Metadata
```yaml
seo:
  title: "Contact the Plumbing Team"
  description: "Phone, enquiry form, hours, and service-area details stay visible on one clear contact page."
  og_title: "Contact the Plumbing Team"
  og_description: "Reach the plumbing team by phone or send a short message through the site."
  og_image: contact.hero.headline
  canonical: "/contact"
  schema_org:
    "@context": "https://schema.org"
    "@type": "ContactPage"
    properties:
      contactType: "customer support"
```

## 6. Conversion Path
- primary_path: Contact channels -> call CTA.
- secondary_path: Contact form -> POST /api/leads.
- exit_points: /quote, /faq.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: contact.hero.headline
    - h2: contact.channels.heading
    - h2: contact.form.heading
    - h2: contact.final_cta.heading
  notable_aria:
    - "Contact actions include explicit aria-labels"
  contrast_checks:
    - "Forms and CTA states meet AA"
  motion_prefers_reduced:
    - "Form state transitions become instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2200
  hero_image:
    path_or_key: contact.hero.headline
    format: avif
    weight_kb_target: 140
    priority: true
  route_js_budget_kb_gz: 85
  client_components:
    - QuoteFormCard: form state only
  defer_below_fold: false
```

## 9. Data Fetching Plan
- Static hero/channels surfaces: static.
- Form submit: POST /api/leads with server validation and Turnstile verification.

## 10. Form Plan
- Fields:
  - name: text, required
  - phone: tel, required
  - message: textarea, required in contact variant
- Submit endpoint and method: POST /api/leads.
- Success state behavior: success message + optional phone fallback.
- Error states: inline validation, server-error, network retry.
- Privacy notice content key: trust.privacy.

## 11. Analytics Plan
- Page view event: contact_page_viewed.
- Conversion events: contact_call_clicked, contact_form_submitted.

## 12. Open Questions
- Confirm whether a dedicated email address should be shown or if phone plus form is sufficient.