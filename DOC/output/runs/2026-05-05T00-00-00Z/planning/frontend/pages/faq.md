---
document_type: page-spec
page_id: faq
route: /faq
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
  - faq.hero.eyebrow
  - faq.hero.headline
  - faq.hero.subheadline
  - faq.list.heading
  - faq.list.body
  - faq.pricing.heading
  - faq.pricing.body
  - faq.coverage.heading
  - faq.coverage.body
  - faq.cta.heading
  - faq.cta.body
  - component.action_bar.aria_label
  - component.accordion.expand_label
  - component.accordion.collapse_label
  - errors.network.title
  - errors.network.body
  - errors.network.retry
  - seo.faq.meta_title
  - seo.faq.meta_description
  - seo.faq.og_title
  - seo.faq.og_description
---

# FAQ (`/faq`)

## 1. Page Definition
- Purpose: Answer common objections and reduce call friction.
- Target user intent: “What should I expect, and how does pricing/availability work?”
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

### 2. FAQ Hero
- **Purpose:** Set context and reassure.
- **Content keys:**
  - faq.hero.eyebrow
  - faq.hero.headline
  - faq.hero.subheadline
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** HeroSection, Button
- **Data source:** static
- **Interactions:** CTA clicks
- **States:** default
- **Responsive:** stacked on mobile
- **Motion:** optional reveal
- **Accessibility:** H1 present

### 3. FAQ List
- **Purpose:** Provide the primary FAQ content.
- **Content keys:**
  - faq.list.heading
  - faq.list.body
- **Components:** FAQSection, AccordionItem
- **Data source:** `cms.groq.faq.list`
- **Interactions:** toggle accordion items
- **States:** default
- **Responsive:** single column
- **Motion:** accordion reveal; reduced-motion instant
- **Accessibility:** disclosure ARIA

### 4. Pricing & Estimates
- **Purpose:** Set expectations without promising fixed prices.
- **Content keys:**
  - faq.pricing.heading
  - faq.pricing.body
- **Components:** DetailSection
- **Data source:** static
- **Interactions:** none
- **States:** default
- **Responsive:** single column
- **Motion:** none
- **Accessibility:** clear language

### 5. Coverage & Scheduling
- **Purpose:** Explain service areas and same-day availability.
- **Content keys:**
  - faq.coverage.heading
  - faq.coverage.body
- **Components:** DetailSection
- **Data source:** static + `cms.siteSettings.serviceAreas`
- **Interactions:** link to `/areas`
- **States:** default
- **Responsive:** single column
- **Motion:** none
- **Accessibility:** clear link text

### 6. Pre-Footer CTA Band
- **Purpose:** Provide the final call path.
- **Content keys:**
  - faq.cta.heading
  - faq.cta.body
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** CTASection
- **Data source:** static
- **Interactions:** CTA clicks
- **States:** default
- **Responsive:** stacked on mobile
- **Motion:** press feedback
- **Accessibility:** explicit labels

### 7. Global Footer
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

### 8. Sticky Mobile ActionBar
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
- Error fallback: if FAQ fetch fails, show a short fallback and promote Call Now.

## 4. Responsive Adaptation Summary
- Mobile: stacked hero + single-column accordions.
- Desktop: same, with larger type and spacing.

## 5. SEO and Metadata
```yaml
seo:
  title:        seo.faq.meta_title
  description:  seo.faq.meta_description
  og_title:     seo.faq.og_title
  og_description: seo.faq.og_description
  og_image:     cms.siteSettings.ogImage
  canonical:    "/faq"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/faq"
```

## 6. Conversion Path
- primary_path: FAQ hero → Call Now
- secondary_path: FAQ hero → Get Quote → Quote form
- exit_points: /services, /areas, /contact

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: faq.hero.headline
    - h2: faq.list.heading
    - h2: faq.pricing.heading
    - h2: faq.coverage.heading
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
  route_js_budget_kb_gz: 85
  client_components:
    - Header: mobile drawer
    - ActionBar: sticky
    - AccordionItem: FAQ
  defer_below_fold: true
```

## 9. Data Fetching Plan
- FAQ list:
  - Fetch location: server
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: fallback copy + CTAs

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "faq" }
- Events:
  - `cta_call_click` { source: "header" | "hero" | "action_bar" | "cta_band" }
  - `faq_toggle` { id: "<id>" }

## 12. Open Questions
- Confirm the FAQ taxonomy and which entries are shown on which pages.

## 13. Asset Brief
- Required photo slots: none.
- Alt-text intent: N/A
