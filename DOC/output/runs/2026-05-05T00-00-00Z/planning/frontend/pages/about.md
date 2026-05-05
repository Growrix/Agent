---
document_type: page-spec
page_id: about
route: /about
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
  - about.hero.eyebrow
  - about.hero.headline
  - about.hero.subheadline
  - about.story.heading
  - about.story.body
  - about.values.heading
  - about.values.items.0.title
  - about.values.items.0.body
  - about.values.items.1.title
  - about.values.items.1.body
  - about.values.items.2.title
  - about.values.items.2.body
  - about.credentials.heading
  - about.credentials.body
  - about.coverage.heading
  - about.coverage.body
  - about.reviews.heading
  - about.cta.heading
  - about.cta.body
  - component.action_bar.aria_label
  - component.testimonial.read_more
  - component.testimonial.read_less
  - errors.network.title
  - errors.network.body
  - errors.network.retry
  - seo.about.meta_title
  - seo.about.meta_description
  - seo.about.og_title
  - seo.about.og_description
---

# About (`/about`)

## 1. Page Definition
- Purpose: Build trust with origin, standards, and what customers can expect.
- Target user intent: “Are you legitimate, local, and reliable?”
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

### 2. About Hero
- **Purpose:** Set the trust tone and summarize credibility.
- **Content keys:**
  - about.hero.eyebrow
  - about.hero.headline
  - about.hero.subheadline
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** HeroSection, Button, MediaBlock
- **Data source:** `cms.aboutPage.heroMedia` + static copy
- **Interactions:** CTA clicks
- **States:** default, loading-media, error-media
- **Responsive:** text-first on mobile
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** H1 present

### 3. Our Story
- **Purpose:** Explain how the business works and what it stands for.
- **Content keys:**
  - about.story.heading
  - about.story.body
- **Components:** DetailSection
- **Data source:** `cms.aboutPage.story` + static fallback copy
- **Interactions:** none
- **States:** loading, error
- **Responsive:** single column
- **Motion:** none
- **Accessibility:** headings + paragraphs

### 4. How We Work (Values)
- **Purpose:** Reduce uncertainty with clear standards.
- **Content keys:**
  - about.values.heading
  - about.values.items.*
- **Components:** FeatureSection
- **Data source:** static
- **Interactions:** none
- **States:** default, revealed
- **Responsive:** 3-up grid → stacked
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** list semantics

### 5. Credentials & Trust
- **Purpose:** Surface license/insurance/proof without burying it.
- **Content keys:**
  - about.credentials.heading
  - about.credentials.body
  - trust.license_label
  - trust.insured_label
  - trust.review_aggregate_label
- **Components:** DetailSection, Badge, StatBlock
- **Data source:** `cms.siteSettings` + static labels
- **Interactions:** none
- **States:** default
- **Responsive:** stacked blocks
- **Motion:** optional count-up for non-critical stats; reduced-motion static
- **Accessibility:** plain text proof

### 6. Service Area Promise
- **Purpose:** Clarify where service is offered and how to confirm coverage.
- **Content keys:**
  - about.coverage.heading
  - about.coverage.body
- **Components:** DetailSection
- **Data source:** `cms.siteSettings.serviceAreas` + static copy
- **Interactions:** link to `/areas`
- **States:** default
- **Responsive:** single column
- **Motion:** none
- **Accessibility:** clear link text

### 7. Reviews Preview
- **Purpose:** Add proof close to the decision point.
- **Content keys:**
  - about.reviews.heading
- **Components:** TestimonialSection, TestimonialCard
- **Data source:** `cms.groq.testimonials.featured`
- **Interactions:** expand/collapse testimonial; link to `/reviews`
- **States:** loading, empty, default
- **Responsive:** strip on mobile; grid on desktop
- **Motion:** accordion reveal for expand; reduced-motion instant
- **Accessibility:** aria-expanded on expand control

### 8. Pre-Footer CTA Band
- **Purpose:** Provide the final call path.
- **Content keys:**
  - about.cta.heading
  - about.cta.body
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
- Loading skeleton: about story skeleton.
- Error fallback: show AlertMessage and keep CTAs usable.

## 4. Responsive Adaptation Summary
- Desktop: hero split; values grid.
- Mobile: text-first hero; stacked sections; ActionBar is primary CTA.

## 5. SEO and Metadata
```yaml
seo:
  title:        seo.about.meta_title
  description:  seo.about.meta_description
  og_title:     seo.about.og_title
  og_description: seo.about.og_description
  og_image:     cms.aboutPage.ogImage
  canonical:    "/about"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/about"
```

## 6. Conversion Path
- primary_path: About hero → Call Now
- secondary_path: About hero → Get Quote → Quote form
- exit_points: /services, /areas, /reviews

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: about.hero.headline
    - h2: about.story.heading
    - h2: about.values.heading
    - h2: about.credentials.heading
    - h2: about.coverage.heading
    - h2: about.reviews.heading
  motion_prefers_reduced:
    - "Disable count-up; instant expand"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: cms.aboutPage.heroMedia
    format: avif
    weight_kb_target: 200
    priority: true
  route_js_budget_kb_gz: 90
  client_components:
    - Header: mobile drawer
    - ActionBar: sticky
    - TestimonialCard: expand
  defer_below_fold: true
```

## 9. Data Fetching Plan
- About page content:
  - Fetch location: server
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: static fallback copy + CTAs remain

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "about" }
- Events:
  - `cta_call_click` { source: "header" | "hero" | "action_bar" | "cta_band" }
  - `cta_get_quote_click` { source: "hero" | "cta_band" | "action_bar" }

## 12. Open Questions
- Confirm the “about story” content in CMS.

## 13. Asset Brief
- Required photo slots:
  - About hero: team/truck photo or real work context.
- Allowed fallback sources:
  - Licensed stock in Sanity.
- Banned fallback sources:
  - Illustrations.
- Alt-text intent:
  - Identify the scene (team/work).
