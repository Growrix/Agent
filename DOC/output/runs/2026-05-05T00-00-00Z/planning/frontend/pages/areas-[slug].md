---
document_type: page-spec
page_id: areas-[slug]
route: /areas/[slug]
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
  - component.breadcrumbs.aria_label
  - area_detail.breadcrumb.home
  - area_detail.breadcrumb.areas
  - area_detail.hero.eyebrow
  - area_detail.hero.subheadline
  - area_detail.coverage.heading
  - area_detail.coverage.body
  - area_detail.services.heading
  - area_detail.reviews.heading
  - area_detail.faq.heading
  - area_detail.cta.heading
  - area_detail.cta.body
  - component.action_bar.aria_label
  - component.accordion.expand_label
  - component.accordion.collapse_label
  - component.testimonial.read_more
  - component.testimonial.read_less
  - errors.network.title
  - errors.network.body
  - errors.network.retry
  - errors.not_found.title
  - errors.not_found.body
---

# Area landing (`/areas/[slug]`)

## 1. Page Definition
- Purpose: Confirm service coverage for the selected area and provide immediate contact paths.
- Target user intent: “Do you serve my neighborhood, and can I call right now?”
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
- **Responsive:** desktop utility strip; mobile drawer
- **Motion:** drawer open/close; reduced-motion instant
- **Accessibility:** nav landmark + skip link

### 2. Breadcrumbs
- **Purpose:** Provide location context for SEO deep-entry.
- **Content keys:**
  - component.breadcrumbs.aria_label
  - area_detail.breadcrumb.home
  - area_detail.breadcrumb.areas
- **Components:** Breadcrumbs
- **Data source:** static + `cms.area.title`
- **Interactions:** click crumbs back
- **States:** default
- **Responsive:** collapse if too long
- **Motion:** none
- **Accessibility:** current crumb not linked

### 3. Area Hero
- **Purpose:** Confirm coverage and set expectations.
- **Content keys:**
  - area_detail.hero.eyebrow
  - area_detail.hero.subheadline
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** HeroSection, Button, MediaBlock
- **Data source:** `cms.groq.area.bySlug` (title, hero media) + static copy
- **Interactions:** CTA clicks
- **States:** default, loading-media, error-media
- **Responsive:** text-first on mobile
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** H1 uses `cms.area.title`

### 4. Coverage Confirmation
- **Purpose:** Clearly state that the area is served (or how to confirm).
- **Content keys:**
  - area_detail.coverage.heading
  - area_detail.coverage.body
- **Components:** DetailSection
- **Data source:** `cms.groq.area.bySlug` + static fallback copy
- **Interactions:** none
- **States:** loading, error, not-found
- **Responsive:** single column
- **Motion:** none
- **Accessibility:** headings + lists

### 5. Services in This Area
- **Purpose:** Offer next best action for non-urgent visitors.
- **Content keys:**
  - area_detail.services.heading
- **Components:** GridSection, Card
- **Data source:** `cms.groq.services.byAreaSlug`
- **Interactions:** click service card → `/services/[slug]`
- **States:** loading, populated, empty, error
- **Responsive:** 3/2/1 columns
- **Motion:** hover lift (desktop); reduced-motion shadow-only
- **Accessibility:** focus-within ring

### 6. Reviews (Relevant)
- **Purpose:** Add proof close to the decision point.
- **Content keys:**
  - area_detail.reviews.heading
- **Components:** TestimonialSection, TestimonialCard
- **Data source:** `cms.groq.testimonials.byAreaSlug`
- **Interactions:** expand/collapse testimonial
- **States:** loading, empty, default
- **Responsive:** strip/grid
- **Motion:** accordion reveal for expand; reduced-motion instant
- **Accessibility:** aria-expanded on expand

### 7. Area FAQ
- **Purpose:** Address local coverage questions.
- **Content keys:**
  - area_detail.faq.heading
- **Components:** FAQSection, AccordionItem
- **Data source:** `cms.groq.faq.byAreaSlug`
- **Interactions:** toggle accordion items
- **States:** default
- **Responsive:** single column
- **Motion:** accordion reveal; reduced-motion instant
- **Accessibility:** disclosure ARIA

### 8. Pre-Footer CTA Band
- **Purpose:** Provide the final call path.
- **Content keys:**
  - area_detail.cta.heading
  - area_detail.cta.body
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** CTASection
- **Data source:** static
- **Interactions:** CTA clicks
- **States:** default
- **Responsive:** stacked CTAs on mobile
- **Motion:** press feedback
- **Accessibility:** explicit labels

### 9. Global Footer
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

### 10. Sticky Mobile ActionBar
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
- Loading skeleton: detail text skeleton + media skeleton.
- Error fallback: AlertMessage with retry.
- Not found: show not-found copy and route to /areas and Call Now.

## 4. Responsive Adaptation Summary
- Mobile: text-first hero; CTA surfaces maintained via ActionBar.
- Desktop: hero split and scannable section rhythm.

## 5. SEO and Metadata
```yaml
seo:
  title:        cms.area.metaTitle
  description:  cms.area.metaDescription
  og_title:     cms.area.ogTitle
  og_description: cms.area.ogDescription
  og_image:     cms.area.ogImage
  canonical:    "/areas/<slug>"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/areas/<slug>"
```

## 6. Conversion Path
- primary_path: Area hero → Call Now
- secondary_path: Area hero → Get Quote → Quote form
- exit_points: /services, /contact

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: cms.area.title
    - h2: area_detail.coverage.heading
    - h2: area_detail.services.heading
    - h2: area_detail.reviews.heading
    - h2: area_detail.faq.heading
  motion_prefers_reduced:
    - "Disable hover scale; instant accordion"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: cms.area.heroMedia
    format: avif
    weight_kb_target: 200
    priority: true
  route_js_budget_kb_gz: 95
  client_components:
    - Header: mobile drawer
    - ActionBar: sticky
    - AccordionItem: FAQ
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Area by slug:
  - Fetch location: server
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: error/not-found states
- Services by area:
  - Fetch location: server
  - Cache strategy: `revalidate: 86400`
  - Failure mode: hide section

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "area_detail", slug: "<slug>" }
- Events:
  - `cta_call_click` { source: "hero" | "header" | "action_bar" }
  - `card_click` { kind: "service", slug: "<slug>" }

## 12. Open Questions
- Confirm the final area schema fields in Sanity (coverage copy + SEO fields).

## 13. Asset Brief
- Required photo slots:
  - Area hero: optional local context photo.
- Allowed fallback sources:
  - Licensed stock in Sanity.
- Banned fallback sources:
  - Illustrations.
- Alt-text intent:
  - Describe the scene.
