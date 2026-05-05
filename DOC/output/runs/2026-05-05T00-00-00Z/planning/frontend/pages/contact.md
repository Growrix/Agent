---
document_type: page-spec
page_id: contact
route: /contact
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
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
  - contact.hero.eyebrow
  - contact.hero.headline
  - contact.hero.subheadline
  - contact.methods.heading
  - contact.methods.phone_label
  - contact.methods.hours_label
  - contact.methods.address_label
  - contact.prep.heading
  - contact.prep.items.0.title
  - contact.prep.items.0.body
  - contact.prep.items.1.title
  - contact.prep.items.1.body
  - contact.prep.items.2.title
  - contact.prep.items.2.body
  - contact.areas.heading
  - contact.areas.body
  - contact.faq.heading
  - contact.cta.heading
  - contact.cta.body
  - component.action_bar.aria_label
  - component.accordion.expand_label
  - component.accordion.collapse_label
  - errors.network.title
  - errors.network.body
  - errors.network.retry
  - seo.contact.meta_title
  - seo.contact.meta_description
  - seo.contact.og_title
  - seo.contact.og_description
---

# Contact (`/contact`)

## 1. Page Definition
- Purpose: Provide clear contact options, hours, and what to prepare before calling.
- Target user intent: “How do I reach you and what info do you need?”
- Primary CTA: `global.cta.call_now` → `tel:`.
- Secondary CTA: `global.cta.get_quote` → `/quote`.
- KPI to optimize: `cta_call_click`.
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

### 2. Contact Hero
- **Purpose:** Emphasize the fastest reach option (call) and the quote alternative.
- **Content keys:**
  - contact.hero.eyebrow
  - contact.hero.headline
  - contact.hero.subheadline
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** HeroSection, Button
- **Data source:** static
- **Interactions:** CTA clicks
- **States:** default
- **Responsive:** stacked on mobile
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** H1 present

### 3. Contact Methods
- **Purpose:** Present phone, hours, and address clearly.
- **Content keys:**
  - contact.methods.heading
  - contact.methods.phone_label
  - contact.methods.hours_label
  - contact.methods.address_label
- **Components:** DetailSection, Icon, Divider
- **Data source:** `cms.siteSettings` (phone, hours, address) + static labels
- **Interactions:**
  - Click phone (tel); optional map link if address is present.
- **States:** default
- **Responsive:** stacked blocks
- **Motion:** none
- **Accessibility:** phone link announced clearly

### 4. What to Have Ready
- **Purpose:** Make the call faster and reduce back-and-forth.
- **Content keys:**
  - contact.prep.heading
  - contact.prep.items.*
- **Components:** FeatureSection
- **Data source:** static
- **Interactions:** none
- **States:** default, revealed
- **Responsive:** grid → stacked
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** list semantics

### 5. Areas Served Summary
- **Purpose:** Help the visitor confirm coverage.
- **Content keys:**
  - contact.areas.heading
  - contact.areas.body
- **Components:** DetailSection, Button
- **Data source:** `cms.siteSettings.serviceAreas` + static copy
- **Interactions:** click → `/areas`
- **States:** default
- **Responsive:** single column
- **Motion:** none
- **Accessibility:** clear link label

### 6. Contact FAQ
- **Purpose:** Answer common contact questions.
- **Content keys:**
  - contact.faq.heading
- **Components:** FAQSection, AccordionItem
- **Data source:** `cms.groq.faq.contact`
- **Interactions:** toggle accordion items
- **States:** default
- **Responsive:** single column
- **Motion:** accordion reveal; reduced-motion instant
- **Accessibility:** disclosure ARIA

### 7. Pre-Footer CTA Band
- **Purpose:** Provide the final call path.
- **Content keys:**
  - contact.cta.heading
  - contact.cta.body
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** CTASection
- **Data source:** static
- **Interactions:** CTA clicks
- **States:** default
- **Responsive:** stacked CTAs on mobile
- **Motion:** press feedback
- **Accessibility:** explicit labels

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

### 9. Sticky Mobile ActionBar
- **Purpose:** Keep Call Now reachable.
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

## 3. Page-Level State Requirements
- Error fallback: keep click-to-call even if CMS content fails.

## 4. Responsive Adaptation Summary
- Mobile: call CTA remains primary; ActionBar is persistent.
- Desktop: utility strip + contact method blocks.

## 5. SEO and Metadata
```yaml
seo:
  title:        seo.contact.meta_title
  description:  seo.contact.meta_description
  og_title:     seo.contact.og_title
  og_description: seo.contact.og_description
  og_image:     cms.siteSettings.ogImage
  canonical:    "/contact"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/contact"
```

## 6. Conversion Path
- primary_path: Contact hero → Call Now
- secondary_path: Contact hero → Get Quote → Quote form
- exit_points: /services, /areas

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: contact.hero.headline
    - h2: contact.methods.heading
    - h2: contact.prep.heading
    - h2: contact.areas.heading
    - h2: contact.faq.heading
  notable_aria:
    - "Phone link uses clear label"
  motion_prefers_reduced:
    - "Instant accordion"
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
  route_js_budget_kb_gz: 80
  client_components:
    - Header: mobile drawer
    - ActionBar: sticky
    - AccordionItem: FAQ
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Site settings:
  - Fetch location: server
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: render basic contact fallback and keep Call Now

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "contact" }
- Events:
  - `cta_call_click` { source: "hero" | "header" | "footer" | "action_bar" }

## 12. Open Questions
- Confirm if address is customer-facing or “service area only.”

## 13. Asset Brief
- Required photo slots:
  - None mandatory.
- Allowed fallback sources:
  - N/A
- Banned fallback sources:
  - N/A
- Alt-text intent:
  - N/A
