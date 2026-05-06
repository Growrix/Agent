---
document_type: page-spec
page_id: quote
route: /quote
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: static
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - component-system.md
  - motion-system.md
  - content-library.md
  - interaction-matrix.md
content_keys_used:
  - global.nav.home
  - global.nav.services
  - global.nav.areas
  - global.nav.reviews
  - global.nav.about
  - global.nav.contact
  - global.cta.call_now
  - global.cta.get_quote
  - global.header.hours_label
  - quote.hero.eyebrow
  - quote.hero.headline
  - quote.hero.subheadline
  - quote.form.title
  - quote.form.fields.full_name.label
  - quote.form.fields.phone.label
  - quote.form.fields.service.label
  - quote.form.fields.zip.label
  - quote.form.fields.details.label
  - quote.form.fields.service.placeholder
  - quote.form.fields.details.placeholder
  - quote.form.submit
  - quote.form.success_title
  - quote.form.success_body
  - quote.form.error_title
  - quote.form.error_body
  - quote.next_steps.heading
  - quote.next_steps.steps.0.title
  - quote.next_steps.steps.0.body
  - quote.next_steps.steps.1.title
  - quote.next_steps.steps.1.body
  - quote.next_steps.steps.2.title
  - quote.next_steps.steps.2.body
  - quote.privacy_note
  - quote.faq.heading
  - quote.cta.heading
  - quote.cta.body
  - component.action_bar.aria_label
  - component.button.loading_label
  - component.accordion.expand_label
  - component.accordion.collapse_label
  - errors.network.title
  - errors.network.body
  - errors.network.retry
  - validation.full_name.required
  - validation.phone.required
  - validation.phone.format
  - validation.zip.required
  - validation.details.required
  - seo.quote.meta_title
  - seo.quote.meta_description
  - seo.quote.og_title
  - seo.quote.og_description
  - trust.privacy
---

# Quote (`/quote`)

## 1. Page Definition
- Purpose: Collect enough detail for a quick callback while keeping calling as the fastest option.
- Target user intent: “I want to request a quote without playing phone tag.”
- Primary CTA: `quote.form.submit` (form submit).
- Secondary CTA: `global.cta.call_now` → `tel:`.
- KPI to optimize: `quote_request_submit_rate`.
- Min sections exempt?: false.

## 2. Sections in Visual Order

### 1. Global Header
- **Purpose:** Keep phone + hours + navigation visible.
- **Content keys:**
  - global.nav.*
  - global.cta.call_now
  - global.header.hours_label
- **Components:** Header
- **Data source:** `cms.siteSettings`
- **Interactions:** drawer open/close; nav clicks; click-to-call
- **States:** default, scrolled, mobile-open
- **Responsive:** utility strip at `md+`; drawer on mobile
- **Motion:** drawer open/close; reduced-motion instant
- **Accessibility:** nav landmark + skip link
- **Visual contract:**
  - desktop: utility strip + CTA visible
  - mobile: hamburger + drawer; call path visible

### 2. Quote Hero
- **Purpose:** Explain what the form is for and provide a fallback to call.
- **Content keys:**
  - quote.hero.eyebrow
  - quote.hero.headline
  - quote.hero.subheadline
  - global.cta.call_now
- **Components:** HeroSection, Button
- **Data source:** static
- **Interactions:** click Call Now
- **States:** default
- **Responsive:** text-first on mobile
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** H1 present
- **Visual contract:**
  - mobile composition: headline + short explanation + Call Now visible

### 3. Quote Request Form
- **Purpose:** Collect minimal, actionable details.
- **Content keys:**
  - quote.form.title
  - quote.form.fields.*
  - quote.form.submit
  - quote.form.success_*
  - quote.form.error_*
  - component.button.loading_label
  - validation.*
- **Components:** FormSection, FormRow, Input, Select, Textarea, Checkbox, Button, AlertMessage, Spinner
- **Data source:** static (content keys) + `cms.groq.services.list` (optional for service select options)
- **Interactions:**
  - Validate on submit; show errors inline; submit opens email client; show success fallback.
- **States:** default, submitting, success, server-error, validation-error
- **Responsive:**
  - desktop: 2-column form layout where it improves speed (preserve reading order)
  - tablet/mobile: stacked fields
- **Motion:**
  - micro: inline validation appear (purpose: clarity)
  - micro: button press feedback (purpose: feedback)
  - reduced-motion: instant
- **Accessibility:**
  - labels on every field; error summary links to invalid fields; `aria-busy` while submitting
- **Visual contract:**
  - desktop: form is the primary block; submit is prominent
  - mobile: fields stacked; submit button full-width; ActionBar does not cover submit

### 4. What Happens Next
- **Purpose:** Reduce anxiety by explaining the follow-up.
- **Content keys:**
  - quote.next_steps.heading
  - quote.next_steps.steps.*
- **Components:** StepIndicator, FeatureSection
- **Data source:** static
- **Interactions:** none
- **States:** default, revealed
- **Responsive:** horizontal steps → vertical
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** semantic list
- **Visual contract:**
  - composition: 3 short steps max

### 5. Privacy Note
- **Purpose:** Build trust and reduce abandonment.
- **Content keys:**
  - quote.privacy_note
  - trust.privacy
- **Components:** DetailSection
- **Data source:** static
- **Interactions:** link to `/privacy`
- **States:** default
- **Responsive:** single column
- **Motion:** none
- **Accessibility:** clear link text
- **Visual contract:**
  - placement: immediately adjacent to submit or directly below form

### 6. Quote FAQ
- **Purpose:** Answer common quote questions.
- **Content keys:**
  - quote.faq.heading
- **Components:** FAQSection, AccordionItem
- **Data source:** `cms.groq.faq.quote`
- **Interactions:** toggle accordion
- **States:** default
- **Responsive:** single column
- **Motion:** accordion reveal; reduced-motion instant
- **Accessibility:** disclosure ARIA
- **Visual contract:**
  - composition: 6–10 items max

### 7. Pre-Footer CTA Band
- **Purpose:** Provide a clear fallback conversion path.
- **Content keys:**
  - quote.cta.heading
  - quote.cta.body
  - global.cta.call_now
- **Components:** CTASection
- **Data source:** static
- **Interactions:** click Call Now
- **States:** default
- **Responsive:** stacked on mobile
- **Motion:** press feedback
- **Accessibility:** explicit labels
- **Visual contract:**
  - composition: call-first

### 8. Global Footer
- **Purpose:** Dense trust + deep links.
- **Content keys:**
  - global.footer.*
  - trust.*
- **Components:** Footer
- **Data source:** `cms.siteSettings` + `cms.groq.services.top` + `cms.groq.areas.top`
- **Interactions:** navigate; click-to-call
- **States:** default
- **Responsive:** columns→stack
- **Motion:** none
- **Accessibility:** footer landmark
- **Visual contract:**
  - trust slots present

### 9. Sticky Mobile ActionBar
- **Purpose:** Keep Call Now reachable without covering submit.
- **Content keys:**
  - component.action_bar.aria_label
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** ActionBar
- **Data source:** `cms.siteSettings.phone` + static labels
- **Interactions:** tap Call Now / Get Quote
- **States:** default, with-secondary-actions-open
- **Responsive:** mobile only
- **Motion:** reduced-motion instant
- **Accessibility:** labeled region
- **Visual contract:**
  - safe-area aware; does not overlap submit

## 3. Page-Level State Requirements
- Loading skeleton: none (static page).
- Error fallback:
  - If services list fails, service field becomes free-text.
- Network offline:
  - Show AlertMessage and prompt the user to call.

## 4. Responsive Adaptation Summary
- Desktop: form is central and wide; supporting steps below.
- Mobile: stacked fields; submit full width; ActionBar remains visible and non-overlapping.

## 5. SEO and Metadata
```yaml
seo:
  title:        seo.quote.meta_title
  description:  seo.quote.meta_description
  og_title:     seo.quote.og_title
  og_description: seo.quote.og_description
  og_image:     cms.siteSettings.ogImage
  canonical:    "/quote"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/quote"
```

## 6. Conversion Path
- primary_path: Quote form → success state
- secondary_path: Call Now
- exit_points: /services, /areas, /privacy

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: quote.hero.headline
    - h2: quote.form.title
    - h2: quote.next_steps.heading
    - h2: quote.faq.heading
  notable_aria:
    - "FormSection aria-busy during submit"
    - "Error summary links to fields"
  motion_prefers_reduced:
    - "Instant validation + no hover scale"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: none
    format: avif
    weight_kb_target: 0
    priority: false
  route_js_budget_kb_gz: 110
  client_components:
    - Header: mobile drawer
    - ActionBar: sticky
    - FormSection: form state
    - Input: focus/validation
    - Select: open/selected state
    - AccordionItem: FAQ
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Optional services select options:
  - Fetch location: server
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: render service input as free-text

## 10. Form Plan
- Fields:
  - `full_name` (text, required) — `quote.form.fields.full_name.label`
    - validation: required → `validation.full_name.required`
  - `phone` (tel, required)
    - validation: required → `validation.phone.required`
    - validation: format → `validation.phone.format`
  - `service` (select or free-text)
    - options: `cms.groq.services.list` (fallback: free-text)
  - `zip` (text, required)
    - validation: required → `validation.zip.required`
  - `details` (textarea, required)
    - validation: required → `validation.details.required`
- Submit behavior:
  - Method: client-side `mailto:` to `cms.siteSettings.email` with encoded body.
  - Success state: show `quote.form.success_title/body` and remind to call if urgent.
  - Error states:
    - validation-error: inline errors + summary
    - server-error/network: show `quote.form.error_title/body` + Call Now CTA
- Privacy notice:
  - Render adjacent to submit: `trust.privacy` + `quote.privacy_note`.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "quote" }
- Events:
  - `quote_form_submit` { method: "mailto" }
  - `quote_form_validation_error` { field: "<field>" }
  - `cta_call_click` { source: "quote_hero" | "header" | "action_bar" }

## 12. Open Questions
- Confirm the target email address for quote requests (CMS site settings).

## 13. Asset Brief
- Required photo slots:
  - None mandatory.
- Alt-text intent:
  - N/A
