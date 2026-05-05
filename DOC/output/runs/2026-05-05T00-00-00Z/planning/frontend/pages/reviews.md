---
document_type: page-spec
page_id: reviews
route: /reviews
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
  - reviews.hero.eyebrow
  - reviews.hero.headline
  - reviews.hero.subheadline
  - reviews.aggregate.heading
  - reviews.aggregate.rating_label
  - reviews.aggregate.count_label
  - reviews.grid.heading
  - reviews.grid.body
  - reviews.feedback.heading
  - reviews.feedback.items.0.title
  - reviews.feedback.items.0.body
  - reviews.feedback.items.1.title
  - reviews.feedback.items.1.body
  - reviews.feedback.items.2.title
  - reviews.feedback.items.2.body
  - reviews.services_teaser.heading
  - reviews.services_teaser.body
  - reviews.services_teaser.cta
  - reviews.faq.heading
  - reviews.cta.heading
  - reviews.cta.body
  - component.action_bar.aria_label
  - component.testimonial.read_more
  - component.testimonial.read_less
  - component.accordion.expand_label
  - component.accordion.collapse_label
  - errors.network.title
  - errors.network.body
  - errors.network.retry
  - seo.reviews.meta_title
  - seo.reviews.meta_description
  - seo.reviews.og_title
  - seo.reviews.og_description
---

# Reviews (`/reviews`)

## 1. Page Definition
- Purpose: Provide proof and reassure visitors before they call.
- Target user intent: “Can I trust you, and do other locals recommend you?”
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
- **Visual contract:**
  - desktop composition: utility strip + CTA visible
  - mobile composition: brand + hamburger; drawer includes contact block

### 2. Reviews Hero
- **Purpose:** Frame proof as the primary content.
- **Content keys:**
  - reviews.hero.eyebrow
  - reviews.hero.headline
  - reviews.hero.subheadline
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** HeroSection, Button, MediaBlock
- **Data source:** `cms.reviewsPage.heroMedia` + static copy
- **Interactions:** CTA clicks
- **States:** default, loading-media, error-media
- **Responsive:** text-first on mobile
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** H1 present
- **Visual contract:**
  - desktop composition: short copy + real photo
  - mobile composition: CTAs above media

### 3. Review Aggregate Proof
- **Purpose:** Show rating + count at a glance.
- **Content keys:**
  - reviews.aggregate.heading
  - reviews.aggregate.rating_label
  - reviews.aggregate.count_label
- **Components:** StatBlock, Badge, Divider
- **Data source:** `cms.siteSettings.reviewAggregate`
- **Interactions:** none
- **States:** default
- **Responsive:** inline row → stacked
- **Motion:** optional count-up; reduced-motion static
- **Accessibility:** plain text labels
- **Visual contract:**
  - composition: aggregate sits immediately under hero

### 4. Testimonials Grid
- **Purpose:** Provide scannable testimonials with expand control.
- **Content keys:**
  - reviews.grid.heading
  - reviews.grid.body
- **Components:** TestimonialSection, TestimonialCard
- **Data source:** `cms.groq.testimonials.list`
- **Interactions:** expand/collapse quote
- **States:** loading, empty, default
- **Responsive:** 3/2/1 columns; optional strip on mobile
- **Motion:** accordion reveal; reduced-motion instant
- **Accessibility:** aria-expanded on expand control
- **Visual contract:**
  - desktop composition: consistent card density; avoid long columns

### 5. How We Handle Feedback
- **Purpose:** Reinforce professionalism and expectations.
- **Content keys:**
  - reviews.feedback.heading
  - reviews.feedback.items.*
- **Components:** FeatureSection
- **Data source:** static
- **Interactions:** none
- **States:** default, revealed
- **Responsive:** grid on desktop; stacked on mobile
- **Motion:** optional reveal; reduced-motion instant
- **Accessibility:** list semantics
- **Visual contract:**
  - composition: 3 short items max

### 6. Services Teaser
- **Purpose:** Route visitors back to services.
- **Content keys:**
  - reviews.services_teaser.heading
  - reviews.services_teaser.body
  - reviews.services_teaser.cta
- **Components:** CTASection
- **Data source:** static
- **Interactions:** click → `/services`
- **States:** default
- **Responsive:** stacked on mobile
- **Motion:** press feedback
- **Accessibility:** explicit label
- **Visual contract:**
  - composition: short copy + one CTA

### 7. Reviews FAQ
- **Purpose:** Address common proof/pricing questions.
- **Content keys:**
  - reviews.faq.heading
- **Components:** FAQSection, AccordionItem
- **Data source:** `cms.groq.faq.reviews`
- **Interactions:** toggle accordion
- **States:** default
- **Responsive:** single column
- **Motion:** accordion reveal; reduced-motion instant
- **Accessibility:** disclosure ARIA
- **Visual contract:**
  - composition: no more than 10 items

### 8. Pre-Footer CTA Band
- **Purpose:** Provide the final call path.
- **Content keys:**
  - reviews.cta.heading
  - reviews.cta.body
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** CTASection
- **Data source:** static
- **Interactions:** CTA clicks
- **States:** default
- **Responsive:** stacked CTAs on mobile
- **Motion:** press feedback
- **Accessibility:** explicit labels
- **Visual contract:**
  - high-contrast band

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
- **Visual contract:**
  - trust slots present

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
- **Visual contract:**
  - safe-area aware

## 3. Page-Level State Requirements
- Loading skeleton: testimonial card skeletons.
- Error fallback: AlertMessage with retry.
- Empty: hide testimonial grid and promote Call Now.

## 4. Responsive Adaptation Summary
- Desktop: hero + aggregate proof + grid.
- Mobile: CTAs prioritized; testimonials as strip or stacked.

## 5. SEO and Metadata
```yaml
seo:
  title:        seo.reviews.meta_title
  description:  seo.reviews.meta_description
  og_title:     seo.reviews.og_title
  og_description: seo.reviews.og_description
  og_image:     cms.reviewsPage.ogImage
  canonical:    "/reviews"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/reviews"
```

## 6. Conversion Path
- primary_path: Reviews hero → Call Now
- secondary_path: Reviews hero → Get Quote → Quote form
- exit_points: /services, /contact

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: reviews.hero.headline
    - h2: reviews.aggregate.heading
    - h2: reviews.grid.heading
    - h2: reviews.feedback.heading
    - h2: reviews.faq.heading
  notable_aria:
    - "Testimonial expand uses aria-expanded"
  motion_prefers_reduced:
    - "Disable count-up; instant expand"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: cms.reviewsPage.heroMedia
    format: avif
    weight_kb_target: 200
    priority: true
  route_js_budget_kb_gz: 90
  client_components:
    - Header: mobile drawer
    - ActionBar: sticky
    - TestimonialCard: expand state
    - AccordionItem: FAQ
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Testimonials list:
  - Fetch location: server
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: error state + retry

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "reviews" }
- Events:
  - `cta_call_click` { source: "header" | "hero" | "action_bar" | "cta_band" }
  - `cta_get_quote_click` { source: "hero" | "cta_band" | "action_bar" }
  - `testimonial_expand` { id: "<id>" }

## 12. Open Questions
- Provide: review aggregate source label (e.g., “Google”) and consented testimonials.

## 13. Asset Brief
- Required photo slots:
  - Reviews hero: real work or team photo.
- Allowed fallback sources:
  - Licensed stock in Sanity.
- Banned fallback sources:
  - Illustrations.
- Alt-text intent:
  - Describe the scene.
