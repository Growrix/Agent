---
document_type: page-spec
page_id: services
route: /services
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
  - services.hero.eyebrow
  - services.hero.headline
  - services.hero.subheadline
  - services.grid.heading
  - services.grid.body
  - services.grid.empty_title
  - services.grid.empty_body
  - services.process.heading
  - services.process.items.0.title
  - services.process.items.0.body
  - services.process.items.1.title
  - services.process.items.1.body
  - services.process.items.2.title
  - services.process.items.2.body
  - services.areas_teaser.heading
  - services.areas_teaser.body
  - services.areas_teaser.cta
  - services.faq.heading
  - services.cta.heading
  - services.cta.body
  - component.action_bar.aria_label
  - component.accordion.expand_label
  - component.accordion.collapse_label
  - errors.network.title
  - errors.network.body
  - errors.network.retry
  - seo.services.meta_title
  - seo.services.meta_description
  - seo.services.og_title
  - seo.services.og_description
---

# Services (`/services`)

## 1. Page Definition
- Purpose: Help visitors pick the right service quickly and route them to a service detail page or a call.
- Target user intent: “Do you handle my issue, and what’s the next step?”
- Primary CTA: `global.cta.call_now` → `tel:` (from `cms.siteSettings.phone`).
- Secondary CTA: `global.cta.get_quote` → `/quote`.
- KPI to optimize: `service_card_click_rate` (secondary: `call_click_rate`).
- Min sections exempt?: false.

## 2. Sections in Visual Order

### 1. Global Header
- **Purpose:** Keep phone + hours + navigation visible.
- **Content keys:**
  - global.nav.*
  - global.cta.call_now
  - global.header.hours_label
- **Components:** Header, Button
- **Data source:** `cms.siteSettings`
- **Interactions:**
  - Open/close mobile drawer; nav clicks; click-to-call.
- **States:** default, scrolled, mobile-open
- **Responsive:**
  - desktop: utility strip + full nav
  - mobile: drawer nav; CTA handled by ActionBar
- **Motion:**
  - macro: drawer open/close (purpose: clarity)
  - reduced-motion: instant
- **Accessibility:**
  - nav landmark + skip link
- **Visual contract:**
  - desktop composition: utility strip + CTA visible
  - mobile composition: hamburger + drawer with contact block

### 2. Services Hero
- **Purpose:** Frame the listing and reassure about availability and professionalism.
- **Content keys:**
  - services.hero.eyebrow
  - services.hero.headline
  - services.hero.subheadline
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** HeroSection, Badge, Button, MediaBlock
- **Data source:** `cms.servicesPage.heroMedia` + static copy
- **Interactions:**
  - CTA clicks; optional anchor scroll to grid.
- **States:** default, loading-media, error-media
- **Responsive:**
  - desktop: split
  - mobile: text-first, CTAs before media
- **Motion:**
  - macro: optional reveal (purpose: hierarchy)
  - reduced-motion: instant
- **Accessibility:**
  - H1 present; CTAs keyboard reachable
- **Visual contract:**
  - desktop composition: hero copy + real photo
  - mobile composition: CTAs above media; trust badges visible

### 3. Services Grid
- **Purpose:** Present the full service list with fast navigation to details.
- **Content keys:**
  - services.grid.heading
  - services.grid.body
  - services.grid.empty_title
  - services.grid.empty_body
- **Components:** GridSection, Card, MediaBlock, Badge
- **Data source:** `cms.groq.services.list`
- **Interactions:**
  - Click card → `/services/[slug]`.
- **States:** loading, populated, empty, error
- **Responsive:**
  - desktop: 3-column
  - tablet: 2-column
  - mobile: 1-column
- **Motion:**
  - micro: hover lift on cards (purpose: hierarchy)
  - reduced-motion: shadow-only
- **Accessibility:**
  - focus-within ring for interactive cards
- **Visual contract:**
  - desktop composition: consistent card layout; 4:3 media
  - empty state: clear next action (Call Now)

### 4. What Happens Next (Process)
- **Purpose:** Reduce uncertainty with a simple 3-step process.
- **Content keys:**
  - services.process.heading
  - services.process.items.*
- **Components:** FeatureSection, StepIndicator
- **Data source:** static
- **Interactions:**
  - None.
- **States:** default, revealed
- **Responsive:**
  - desktop: horizontal steps
  - mobile: vertical steps
- **Motion:**
  - macro: optional reveal (purpose: hierarchy)
  - reduced-motion: instant
- **Accessibility:**
  - steps are a semantic list
- **Visual contract:**
  - desktop composition: 3-step row with short labels

### 5. Areas Served Teaser
- **Purpose:** Help users confirm coverage quickly.
- **Content keys:**
  - services.areas_teaser.heading
  - services.areas_teaser.body
  - services.areas_teaser.cta
- **Components:** CTASection, Button
- **Data source:** static
- **Interactions:**
  - Click → `/areas`.
- **States:** default
- **Responsive:**
  - mobile: stacked
  - desktop: inline
- **Motion:**
  - micro: press feedback (purpose: feedback)
  - reduced-motion: instant
- **Accessibility:**
  - button label is explicit
- **Visual contract:**
  - composition: short copy + single CTA

### 6. Services FAQ
- **Purpose:** Answer pricing/availability questions.
- **Content keys:**
  - services.faq.heading
- **Components:** FAQSection, AccordionItem
- **Data source:** `cms.groq.faq.services`
- **Interactions:**
  - Toggle accordion items.
- **States:** default
- **Responsive:**
  - single column
- **Motion:**
  - micro: accordion reveal (purpose: clarity)
  - reduced-motion: instant
- **Accessibility:**
  - disclosure ARIA handled by AccordionItem
- **Visual contract:**
  - composition: no more than 10 items

### 7. Pre-Footer CTA Band
- **Purpose:** Provide a final conversion prompt.
- **Content keys:**
  - services.cta.heading
  - services.cta.body
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** CTASection
- **Data source:** static
- **Interactions:**
  - Call Now / Get Quote.
- **States:** default
- **Responsive:**
  - CTAs stacked on mobile
- **Motion:**
  - micro: press feedback
  - reduced-motion: instant
- **Accessibility:**
  - explicit labels
- **Visual contract:**
  - high-contrast band; CTAs grouped

### 8. Global Footer
- **Purpose:** Dense trust + deep links.
- **Content keys:**
  - global.footer.*
  - trust.*
- **Components:** Footer
- **Data source:** `cms.siteSettings` + `cms.groq.services.top` + `cms.groq.areas.top`
- **Interactions:**
  - navigate; click-to-call
- **States:** default
- **Responsive:**
  - columns→stack
- **Motion:** none
- **Accessibility:** footer landmark
- **Visual contract:**
  - trust slots present

### 9. Sticky Mobile ActionBar
- **Purpose:** Keep Call Now reachable.
- **Content keys:**
  - component.action_bar.aria_label
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** ActionBar
- **Data source:** `cms.siteSettings.phone` + static labels
- **Interactions:**
  - tap Call Now / Get Quote.
- **States:** default, with-secondary-actions-open
- **Responsive:**
  - mobile only
- **Motion:**
  - reduced-motion: instant
- **Accessibility:**
  - labeled region
- **Visual contract:**
  - safe-area aware

## 3. Page-Level State Requirements
- Loading skeleton: services grid skeleton cards.
- Error fallback: show AlertMessage with retry.
- Empty: show empty state and promote Call Now.
- Auth: public.

## 4. Responsive Adaptation Summary
- Desktop: hero split + 3-up services grid.
- Mobile: text-first hero; grid is stacked; ActionBar is primary CTA.

## 5. SEO and Metadata
```yaml
seo:
  title:        seo.services.meta_title
  description:  seo.services.meta_description
  og_title:     seo.services.og_title
  og_description: seo.services.og_description
  og_image:     cms.servicesPage.ogImage
  canonical:    "/services"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/services"
```

## 6. Conversion Path
- primary_path: Services grid → Service detail → Call Now
- secondary_path: Services grid → Get Quote → Quote form
- exit_points: /areas, /reviews, /contact

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: services.hero.headline
    - h2: services.grid.heading
    - h2: services.process.heading
    - h2: services.faq.heading
  notable_aria:
    - "AccordionItem aria-expanded + aria-controls"
  motion_prefers_reduced:
    - "Disable hover scale; instant accordion"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: cms.servicesPage.heroMedia
    format: avif
    weight_kb_target: 200
    priority: true
  route_js_budget_kb_gz: 90
  client_components:
    - Header: mobile drawer state
    - ActionBar: sticky state
    - AccordionItem: open/close state
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Services list:
  - Fetch location: server component
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: error state with retry
- FAQ:
  - Fetch location: server
  - Cache strategy: `revalidate: 86400`
  - Failure mode: hide FAQ section

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "services" }
- Events:
  - `cta_call_click` { source: "header" | "action_bar" | "cta_band" }
  - `cta_get_quote_click` { source: "hero" | "cta_band" | "action_bar" }
  - `card_click` { kind: "service", slug: "<slug>" }

## 12. Open Questions
- Confirm final service taxonomy and images in CMS.

## 13. Asset Brief
- Required photo slots:
  - Services hero: real work-site image.
- Allowed fallback sources:
  - Licensed stock in Sanity media library.
- Banned fallback sources:
  - Illustrations.
- Alt-text intent:
  - Describe the task context.
