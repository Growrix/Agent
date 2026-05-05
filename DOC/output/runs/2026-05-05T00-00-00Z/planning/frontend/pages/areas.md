---
document_type: page-spec
page_id: areas
route: /areas
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
  - areas.hero.eyebrow
  - areas.hero.headline
  - areas.hero.subheadline
  - areas.grid.heading
  - areas.grid.body
  - areas.grid.empty_title
  - areas.grid.empty_body
  - areas.coverage.heading
  - areas.coverage.body
  - areas.services_teaser.heading
  - areas.services_teaser.body
  - areas.services_teaser.cta
  - areas.faq.heading
  - areas.cta.heading
  - areas.cta.body
  - component.action_bar.aria_label
  - component.accordion.expand_label
  - component.accordion.collapse_label
  - errors.network.title
  - errors.network.body
  - errors.network.retry
  - seo.areas.meta_title
  - seo.areas.meta_description
  - seo.areas.og_title
  - seo.areas.og_description
---

# Areas served (`/areas`)

## 1. Page Definition
- Purpose: Confirm coverage and let visitors jump to a local area page.
- Target user intent: “Do you serve my area?”
- Primary CTA: `global.cta.call_now` → `tel:`.
- Secondary CTA: `global.cta.get_quote` → `/quote`.
- KPI to optimize: `area_card_click_rate` (secondary: `cta_call_click`).
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
- **Responsive:** desktop utility strip; mobile drawer
- **Motion:** drawer open/close; reduced-motion instant
- **Accessibility:** nav landmark + skip link

### 2. Areas Hero
- **Purpose:** Explain coverage and reduce uncertainty.
- **Content keys:**
  - areas.hero.eyebrow
  - areas.hero.headline
  - areas.hero.subheadline
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** HeroSection, Button, MediaBlock
- **Data source:** `cms.areasPage.heroMedia` + static copy
- **Interactions:** CTA clicks
- **States:** default, loading-media, error-media
- **Responsive:** text-first on mobile
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** H1 present

### 3. Areas Grid
- **Purpose:** List service areas with direct navigation.
- **Content keys:**
  - areas.grid.heading
  - areas.grid.body
  - areas.grid.empty_title
  - areas.grid.empty_body
- **Components:** GridSection, Card
- **Data source:** `cms.groq.areas.list`
- **Interactions:** click area card → `/areas/[slug]`
- **States:** loading, populated, empty, error
- **Responsive:** 3/2/1 column
- **Motion:** hover lift (desktop); reduced-motion shadow-only
- **Accessibility:** focus-within on cards

### 4. Coverage Notes
- **Purpose:** Clarify boundaries and what to do if the area isn’t listed.
- **Content keys:**
  - areas.coverage.heading
  - areas.coverage.body
- **Components:** DetailSection
- **Data source:** static
- **Interactions:** none
- **States:** default
- **Responsive:** single column
- **Motion:** none
- **Accessibility:** headings + plain copy

### 5. Services Teaser
- **Purpose:** Route undecided users to the service list.
- **Content keys:**
  - areas.services_teaser.heading
  - areas.services_teaser.body
  - areas.services_teaser.cta
- **Components:** CTASection, Button
- **Data source:** static
- **Interactions:** click → `/services`
- **States:** default
- **Responsive:** stacked on mobile
- **Motion:** press feedback
- **Accessibility:** explicit label

### 6. Areas FAQ
- **Purpose:** Answer coverage and scheduling questions.
- **Content keys:**
  - areas.faq.heading
- **Components:** FAQSection, AccordionItem
- **Data source:** `cms.groq.faq.areas`
- **Interactions:** toggle accordion items
- **States:** default
- **Responsive:** single column
- **Motion:** accordion reveal; reduced-motion instant
- **Accessibility:** disclosure ARIA

### 7. Pre-Footer CTA Band
- **Purpose:** Provide a final prompt to call or request a quote.
- **Content keys:**
  - areas.cta.heading
  - areas.cta.body
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** CTASection
- **Data source:** static
- **Interactions:** CTA clicks
- **States:** default
- **Responsive:** stacked on mobile
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
- Loading skeleton: areas grid skeleton cards.
- Error fallback: AlertMessage with retry.
- Empty: show coverage note and promote Call Now.

## 4. Responsive Adaptation Summary
- Desktop: hero split + 3-up grid.
- Mobile: text-first hero; stacked grid; ActionBar is primary CTA.

## 5. SEO and Metadata
```yaml
seo:
  title:        seo.areas.meta_title
  description:  seo.areas.meta_description
  og_title:     seo.areas.og_title
  og_description: seo.areas.og_description
  og_image:     cms.areasPage.ogImage
  canonical:    "/areas"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/areas"
```

## 6. Conversion Path
- primary_path: Areas grid → Area page → Call Now
- secondary_path: Areas grid → Get Quote → Quote form
- exit_points: /services, /contact

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: areas.hero.headline
    - h2: areas.grid.heading
    - h2: areas.coverage.heading
    - h2: areas.faq.heading
  motion_prefers_reduced:
    - "Disable hover scale; instant accordion"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: cms.areasPage.heroMedia
    format: avif
    weight_kb_target: 200
    priority: true
  route_js_budget_kb_gz: 90
  client_components:
    - Header: mobile drawer
    - ActionBar: sticky
    - AccordionItem: FAQ
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Areas list:
  - Fetch location: server
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: error state + retry

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "areas" }
- Events:
  - `cta_call_click` { source: "header" | "action_bar" | "cta_band" }
  - `card_click` { kind: "area", slug: "<slug>" }

## 12. Open Questions
- Confirm the canonical “service areas” list and area slugs in CMS.

## 13. Asset Brief
- Required photo slots:
  - Areas hero: real local context (truck in neighborhood / work-site).
- Allowed fallback sources:
  - Licensed stock in Sanity.
- Banned fallback sources:
  - Illustrations.
- Alt-text intent:
  - Describe the scene.
