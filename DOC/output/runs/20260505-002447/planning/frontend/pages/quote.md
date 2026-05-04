---
document_type: page-spec
page_id: quote
route: /quote
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
  - quote.hero.eyebrow
  - quote.hero.headline
  - quote.hero.subheadline
  - quote.form.heading
  - quote.form.name_label
  - quote.form.phone_label
  - quote.form.service_label
  - quote.form.postcode_label
  - quote.form.message_label
  - quote.form.submit
  - quote.support.heading
  - quote.support.body
  - quote.final_cta.heading
  - quote.final_cta.body
---

# Quote

## 1. Page Definition
- Purpose: capture a short, high-intent plumbing lead.
- Target user intent: send the job summary with minimal friction.
- Primary CTA: Submit Quote Request -> POST /api/leads.
- Secondary CTA: Call Now -> tel link.
- KPI to optimize: completed quote submissions.
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
- Accessibility: visible Home path.

### 2. Hero
- Purpose: frame the quote process as short and low-friction.
- Content keys: quote.hero.*.
- Components: HeroSplit, Button.
- Data source: static.
- Interactions: call CTA and scroll to form.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: single H1 and explicit CTA labels.

### 3. Quote Form
- Purpose: collect the minimum lead details needed to respond well.
- Content keys: quote.form.* , trust.privacy, validation.*, errors.form.submit.
- Components: QuoteFormCard, InputField, Button.
- Data source: integration.POST /api/leads.
- Interactions: field entry, Turnstile completion, submit.
- States: validation-error, submitting, success, server-error.
- Responsive: single-column on mobile, two-column on desktop.
- Motion: inline validation appear; reduced-motion instant.
- Accessibility: visible labels, aria-describedby on errors, aria-busy on submit.

### 4. Support Options
- Purpose: give visitors the faster phone path if needed.
- Content keys: quote.support.heading, quote.support.body.
- Components: Button, TrustBadgeRow.
- Data source: static.
- Interactions: call CTA.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: clear phone action wording.

### 5. What Happens Next
- Purpose: set expectations after submission.
- Content keys: quote.form.success_title, quote.form.success_body, trust.response_time.
- Components: StatCard.
- Data source: static.
- Interactions: none.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: success text in readable region.

### 6. FAQ Reminder
- Purpose: answer timing and coverage questions before submission.
- Content keys: faq.items.0.question, faq.items.2.question.
- Components: FAQAccordion.
- Data source: static.
- Interactions: accordion expand.
- States: default.
- Responsive: full width.
- Motion: accordion reveal; reduced-motion instant.
- Accessibility: keyboard support and aria-expanded.

### 7. Final CTA
- Purpose: provide a call fallback after form hesitation.
- Content keys: quote.final_cta.heading, quote.final_cta.body.
- Components: Button.
- Data source: static.
- Interactions: call CTA.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: clear labels.

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
- Error fallback: server error message with retry button and phone fallback.
- Empty state: not applicable.
- Auth state: not applicable.
- Network offline: show errors.network.* and keep call CTA visible.

## 4. Responsive Adaptation Summary
The quote page compresses into a single action funnel on mobile, with the form, trust note, and call fallback all visible without tabbing through dense layout chrome.

## 5. SEO and Metadata
```yaml
seo:
  title: "Request a Plumbing Quote"
  description: "Submit a short quote request and move into the fastest next step for the job."
  og_title: "Request a Plumbing Quote"
  og_description: "Use the short quote form or call directly for urgent plumbing help."
  og_image: quote.hero.headline
  canonical: "/quote"
  schema_org:
    "@context": "https://schema.org"
    "@type": "ContactPage"
    properties:
      contactType: "customer support"
```

## 6. Conversion Path
- primary_path: Quote form -> POST /api/leads -> success state.
- secondary_path: Hero/support CTA -> phone contact.
- exit_points: /contact, /faq.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: quote.hero.headline
    - h2: quote.form.heading
    - h2: quote.support.heading
    - h2: quote.final_cta.heading
  notable_aria:
    - "Form fields use visible labels and aria-describedby for errors"
    - "Submit button exposes aria-busy during submission"
  contrast_checks:
    - "Error and success states meet AA contrast"
  motion_prefers_reduced:
    - "Validation and success transitions become instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2200
  hero_image:
    path_or_key: quote.hero.headline
    format: avif
    weight_kb_target: 140
    priority: true
  route_js_budget_kb_gz: 85
  client_components:
    - QuoteFormCard: form state and Turnstile interaction
  defer_below_fold: false
```

## 9. Data Fetching Plan
- Static hero and support surfaces: static.
- Form submit: client form to route handler `/api/leads`, failure degrades to phone CTA and retry.

## 10. Form Plan
- Fields:
  - name: text, required, validation.name.required
  - phone: tel, required, validation.phone.required and validation.phone.format
  - service: select, required, validation.service.required
  - postcode: text, required, validation.postcode.required
  - message: textarea, optional
- Submit endpoint and method: POST /api/leads.
- Success state behavior: replace submit region with quote.form.success_title and quote.form.success_body.
- Error states: inline validation, server-error banner, network retry.
- Privacy notice content key: trust.privacy.

## 11. Analytics Plan
- Page view event: quote_page_viewed.
- Conversion events: quote_form_submitted, quote_call_clicked, quote_form_error_seen.

## 12. Open Questions
- Confirm the exact service option list for the select input.