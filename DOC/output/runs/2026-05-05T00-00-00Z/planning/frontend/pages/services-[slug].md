---
document_type: page-spec
page_id: services-[slug]
route: /services/[slug]
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
  - service_detail.breadcrumb.home
  - service_detail.breadcrumb.services
  - service_detail.hero.eyebrow
  - service_detail.hero.subheadline
  - service_detail.overview.heading
  - service_detail.overview.body
  - service_detail.what_we_do.heading
  - service_detail.what_we_do.items.0.title
  - service_detail.what_we_do.items.0.body
  - service_detail.what_we_do.items.1.title
  - service_detail.what_we_do.items.1.body
  - service_detail.what_we_do.items.2.title
  - service_detail.what_we_do.items.2.body
  - service_detail.pricing.heading
  - service_detail.pricing.body
  - service_detail.expectations.heading
  - service_detail.expectations.body
  - service_detail.process.heading
  - service_detail.process.steps.0.title
  - service_detail.process.steps.0.body
  - service_detail.process.steps.1.title
  - service_detail.process.steps.1.body
  - service_detail.process.steps.2.title
  - service_detail.process.steps.2.body
  - service_detail.reviews.heading
  - service_detail.faq.heading
  - service_detail.cta.heading
  - service_detail.cta.body
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

# Service detail (`/services/[slug]`)

## 1. Page Definition
- Purpose: Explain service scope, set expectations, and push the user to call or request a quote.
- Target user intent: “Is this my issue, and how do I get help today?”
- Primary CTA: `global.cta.call_now` → `tel:` (from `cms.siteSettings.phone`).
- Secondary CTA: `global.cta.get_quote` → `/quote`.
- KPI to optimize: `cta_call_click` (secondary: `cta_get_quote_click`).
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
- **Interactions:**
  - Drawer open/close; nav clicks; click-to-call.
- **States:** default, scrolled, mobile-open
- **Responsive:**
  - desktop: utility strip
  - mobile: drawer nav
- **Motion:**
  - macro: drawer open/close (purpose: clarity)
  - reduced-motion: instant
- **Accessibility:**
  - nav landmark + skip link

### 2. Breadcrumbs
- **Purpose:** Provide location context for deep-entry SEO visitors.
- **Content keys:**
  - component.breadcrumbs.aria_label
  - service_detail.breadcrumb.home
  - service_detail.breadcrumb.services
- **Components:** Breadcrumbs
- **Data source:** static + `cms.service.title`
- **Interactions:**
  - Click crumbs back to Home/Services.
- **States:** default
- **Responsive:**
  - mobile: collapse middle items if needed
- **Motion:** none
- **Accessibility:**
  - last crumb is current and not linked

### 3. Service Hero
- **Purpose:** Confirm the chosen service and present the next step.
- **Content keys:**
  - service_detail.hero.eyebrow
  - service_detail.hero.subheadline
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** HeroSection, Badge, Button, MediaBlock
- **Data source:** `cms.groq.service.bySlug` (title, hero media) + static copy
- **Interactions:**
  - CTA clicks.
- **States:** default, loading-media, error-media
- **Responsive:**
  - mobile: text-first and CTAs above media
- **Motion:**
  - macro: optional reveal (purpose: hierarchy)
  - reduced-motion: instant
- **Accessibility:**
  - H1 uses `cms.service.title`

### 4. Service Overview
- **Purpose:** Define what this service covers.
- **Content keys:**
  - service_detail.overview.heading
  - service_detail.overview.body
- **Components:** DetailSection
- **Data source:** `cms.groq.service.bySlug` (overview body) + static heading
- **Interactions:**
  - None.
- **States:** loading, error, not-found
- **Responsive:**
  - single column
- **Motion:**
  - macro: optional reveal
  - reduced-motion: instant
- **Accessibility:**
  - heading outline maintained

### 5. What We Do (Checklist)
- **Purpose:** Reduce anxiety by showing what’s included.
- **Content keys:**
  - service_detail.what_we_do.heading
  - service_detail.what_we_do.items.*
- **Components:** FeatureSection
- **Data source:** static
- **Interactions:**
  - None.
- **States:** default, revealed
- **Responsive:**
  - grid on desktop; stacked on mobile
- **Motion:**
  - macro: optional reveal
  - reduced-motion: instant
- **Accessibility:**
  - list semantics

### 6. Pricing Guidance
- **Purpose:** Set expectations without promising fixed prices.
- **Content keys:**
  - service_detail.pricing.heading
  - service_detail.pricing.body
- **Components:** DetailSection
- **Data source:** static + optional `cms.service.pricingNotes`
- **Interactions:**
  - None.
- **States:** default
- **Responsive:**
  - single column
- **Motion:** none
- **Accessibility:**
  - avoid tables unless necessary

### 7. What to Expect
- **Purpose:** Explain the visit flow and how to prepare.
- **Content keys:**
  - service_detail.expectations.heading
  - service_detail.expectations.body
- **Components:** DetailSection
- **Data source:** static
- **Interactions:** none
- **States:** default
- **Responsive:** single column
- **Motion:** none
- **Accessibility:** headings and lists

### 8. How It Works
- **Purpose:** Provide a simple process and timeline.
- **Content keys:**
  - service_detail.process.heading
  - service_detail.process.steps.*
- **Components:** StepIndicator, FeatureSection
- **Data source:** static
- **Interactions:** none
- **States:** default, revealed
- **Responsive:**
  - desktop: horizontal steps
  - mobile: vertical
- **Motion:**
  - macro: optional reveal (purpose: hierarchy)
  - reduced-motion: instant
- **Accessibility:**
  - steps announced

### 9. Reviews (Relevant)
- **Purpose:** Add proof close to the decision point.
- **Content keys:**
  - service_detail.reviews.heading
- **Components:** TestimonialSection, TestimonialCard
- **Data source:** `cms.groq.testimonials.byServiceSlug`
- **Interactions:**
  - Expand/collapse testimonial.
- **States:** loading, empty, default
- **Responsive:**
  - grid/strip depending on density
- **Motion:**
  - micro: accordion reveal for expand (purpose: clarity)
  - reduced-motion: instant
- **Accessibility:**
  - aria-expanded on expand control

### 10. Service FAQ
- **Purpose:** Address objections specific to this service.
- **Content keys:**
  - service_detail.faq.heading
- **Components:** FAQSection, AccordionItem
- **Data source:** `cms.groq.faq.byServiceSlug`
- **Interactions:**
  - Toggle questions.
- **States:** default
- **Responsive:** single column
- **Motion:**
  - micro: accordion reveal
  - reduced-motion: instant
- **Accessibility:** disclosure ARIA

### 11. Pre-Footer CTA Band
- **Purpose:** Provide a final prompt to call or request a quote.
- **Content keys:**
  - service_detail.cta.heading
  - service_detail.cta.body
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** CTASection
- **Data source:** static
- **Interactions:** CTA clicks
- **States:** default
- **Responsive:** stacked CTAs on mobile
- **Motion:** micro press feedback
- **Accessibility:** explicit button labels

### 12. Global Footer
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

### 13. Sticky Mobile ActionBar
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
- **Motion:** reduced-motion: instant
- **Accessibility:** labeled region

## 3. Page-Level State Requirements
- Loading skeleton:
  - service detail shows skeleton text blocks; media skeleton in hero.
- Error fallback:
  - show AlertMessage with retry for CMS failures.
- Not found:
  - show not-found state with links to /services and Call Now.

## 4. Responsive Adaptation Summary
- Mobile: breadcrumbs may collapse; hero text-first; CTA surfaces remain reachable via ActionBar.
- Desktop: hero split; long-form content remains scannable with sections.

## 5. SEO and Metadata
```yaml
seo:
  title:        cms.service.metaTitle
  description:  cms.service.metaDescription
  og_title:     cms.service.ogTitle
  og_description: cms.service.ogDescription
  og_image:     cms.service.ogImage
  canonical:    "/services/<slug>"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/services/<slug>"
```

## 6. Conversion Path
- primary_path: Service hero → Call Now
- secondary_path: Service hero → Get Quote → Quote form
- exit_points: /services, /reviews, /contact

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: cms.service.title
    - h2: service_detail.overview.heading
    - h2: service_detail.what_we_do.heading
    - h2: service_detail.pricing.heading
    - h2: service_detail.process.heading
    - h2: service_detail.reviews.heading
    - h2: service_detail.faq.heading
  notable_aria:
    - "Breadcrumbs nav aria-label"
    - "AccordionItem aria-expanded"
  motion_prefers_reduced:
    - "Instant accordion + no hover scale"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: cms.service.heroMedia
    format: avif
    weight_kb_target: 200
    priority: true
  route_js_budget_kb_gz: 95
  client_components:
    - Header: mobile drawer state
    - ActionBar: sticky state
    - AccordionItem: FAQ disclosure state
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Service by slug:
  - Fetch location: server component
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: error state with retry
- Related testimonials / FAQ:
  - Fetch location: server
  - Cache strategy: `revalidate: 86400`
  - Failure mode: hide section if empty/error

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "service_detail", slug: "<slug>" }
- Conversion events:
  - `cta_call_click` { source: "hero" | "header" | "action_bar" }
  - `cta_get_quote_click` { source: "hero" | "action_bar" }

## 12. Open Questions
- Confirm the final service schema fields in Sanity (overview, hero media, SEO fields).

## 13. Asset Brief
- Required photo slots:
  - Per-service hero image (real work context).
- Allowed fallback sources:
  - Licensed stock in Sanity media library.
- Banned fallback sources:
  - Illustrations.
- Alt-text intent:
  - Describe the service context.
