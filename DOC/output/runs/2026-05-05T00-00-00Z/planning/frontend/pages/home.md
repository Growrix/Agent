---
document_type: page-spec
page_id: home
route: /
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
  - home.hero.eyebrow
  - home.hero.headline
  - home.hero.subheadline
  - home.hero.trust_badges.licensed
  - home.hero.trust_badges.insured
  - home.hero.trust_badges.same_day
  - home.proof.heading
  - home.proof.stats.years_label
  - home.proof.stats.response_time_label
  - home.proof.stats.reviews_label
  - home.services.heading
  - home.services.body
  - home.services.view_all
  - home.areas.heading
  - home.areas.body
  - home.areas.view_all
  - home.reviews.heading
  - home.reviews.view_all
  - home.faq.heading
  - home.faq.view_all
  - home.cta.heading
  - home.cta.body
  - component.action_bar.aria_label
  - component.breadcrumbs.aria_label
  - component.accordion.expand_label
  - component.accordion.collapse_label
  - component.testimonial.read_more
  - component.testimonial.read_less
  - errors.network.title
  - errors.network.body
  - errors.network.retry
  - errors.not_found.title
  - errors.not_found.body
  - seo.home.meta_title
  - seo.home.meta_description
  - seo.home.og_title
  - seo.home.og_description
---

# Home (`/`)

## 1. Page Definition
- Purpose: Convert urgent visitors into calls and provide a fast secondary path to request a quote.
- Target user intent: “I need a local plumber and want to confirm they’re legitimate.”
- Primary CTA: `global.cta.call_now` → `tel:` (from `cms.siteSettings.phone`).
- Secondary CTA: `global.cta.get_quote` → `/quote`.
- KPI to optimize: `call_click_rate` (secondary: `quote_request_submit_rate`).
- Min sections exempt?: false.

## 2. Sections in Visual Order

### 1. Global Header
- **Purpose:** Keep phone + hours + navigation visible.
- **Content keys:**
  - global.nav.*
  - global.cta.call_now
  - global.header.hours_label
- **Components:** Header, Button, Icon
- **Data source:** `cms.siteSettings` (phone, hours)
- **Interactions:**
  - Open/close mobile drawer; navigate via nav links; click-to-call.
- **States:** default, scrolled, mobile-open
- **Responsive:**
  - desktop: utility strip (hours + phone) + full nav + CTA
  - tablet: same as desktop
  - mobile: brand + hamburger; CTA handled by ActionBar
- **Motion:**
  - macro: drawer open/close (`--motion-duration-base`, purpose: clarity)
  - micro: focus ring + press feedback (purpose: clarity/feedback)
  - reduced-motion: instant drawer
- **Accessibility:**
  - landmarks: header + nav; skip link target `#main-content`
- **Visual contract:**
  - desktop composition: utility strip above primary nav bar; CTA pinned right
  - tablet composition: same; no truncation of phone
  - mobile composition: single-row header + drawer; drawer includes contact block
  - trust surface: hours + phone visible in utility strip (desktop)

### 2. Hero (Home)
- **Purpose:** Establish credibility and present the fastest call path.
- **Content keys:**
  - home.hero.eyebrow
  - home.hero.headline
  - home.hero.subheadline
  - home.hero.trust_badges.*
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** HeroSection, Badge, Button, MediaBlock
- **Data source:** `cms.homePage.heroMedia` + `static` (content keys)
- **Interactions:**
  - Primary CTA click-to-call; secondary CTA to `/quote`.
- **States:** default, loading-media, error-media
- **Responsive:**
  - desktop: split layout (copy left, media right)
  - tablet: stacked; CTAs remain above media
  - mobile: order = eyebrow → headline → subheadline → trust badges → CTAs → media
- **Motion:**
  - macro: optional section reveal (`--motion-duration-slow`, purpose: hierarchy)
  - micro: button press feedback (purpose: feedback)
  - reduced-motion: instant reveal
- **Accessibility:**
  - hero contains H1; badges are non-interactive; CTAs keyboard reachable
- **Visual contract:**
  - desktop composition: text panel + media panel; CTAs above the fold
  - tablet composition: stacked with CTAs still visible without scrolling past media
  - mobile composition: text-first; CTA order Call Now then Get Quote
  - media framing: real photo, 16:9 or 4:3 per crop; subject centered
  - trust surface: licensed/insured/same-day badges visible above fold

### 3. Proof Strip (Stats + Review Aggregate)
- **Purpose:** Reinforce trust with quick proof points.
- **Content keys:**
  - home.proof.heading
  - home.proof.stats.years_label
  - home.proof.stats.response_time_label
  - home.proof.stats.reviews_label
- **Components:** StatBlock, Badge, Divider
- **Data source:** `cms.siteSettings` (years, response time, review aggregate)
- **Interactions:**
  - None.
- **States:** default
- **Responsive:**
  - desktop: inline stat row
  - tablet: 2x2 grid
  - mobile: 2x2 grid or horizontal rail
- **Motion:**
  - micro: optional count-up on StatBlocks (`--motion-duration-cinematic`, purpose: hierarchy)
  - reduced-motion: static values
- **Accessibility:**
  - stat labels are plain text; no motion-only meaning
- **Visual contract:**
  - desktop composition: three stat blocks + review aggregate grouped as one band
  - mobile composition: same content, stacked
  - trust surface: review aggregate visible without scrolling far

### 4. Services Preview
- **Purpose:** Let visitors self-select the right service quickly.
- **Content keys:**
  - home.services.heading
  - home.services.body
  - home.services.view_all
- **Components:** GridSection, Card, MediaBlock, Badge, Button
- **Data source:** `cms.groq.services.top` (top services)
- **Interactions:**
  - Click a service card → `/services/[slug]`.
  - Click “view all” → `/services`.
- **States:** loading, populated, empty, error
- **Responsive:**
  - desktop: 3-column cards
  - tablet: 2-column
  - mobile: 1-column
- **Motion:**
  - macro: optional reveal on scroll (purpose: hierarchy)
  - micro: Card hover lift (desktop) (purpose: hierarchy)
  - reduced-motion: no scale
- **Accessibility:**
  - cards are articles with inner links; focus-within ring required
- **Visual contract:**
  - desktop composition: 3-up service card grid with consistent image ratios
  - mobile composition: full-width stacked cards
  - media framing: 4:3 service images

### 5. Areas Coverage Preview
- **Purpose:** Confirm coverage and route to area pages.
- **Content keys:**
  - home.areas.heading
  - home.areas.body
  - home.areas.view_all
- **Components:** GridSection, Card, Button
- **Data source:** `cms.groq.areas.top` (top areas)
- **Interactions:**
  - Click an area card → `/areas/[slug]`.
  - Click “view all” → `/areas`.
- **States:** loading, populated, empty, error
- **Responsive:**
  - desktop: 3-column
  - tablet: 2-column
  - mobile: 1-column
- **Motion:**
  - macro: optional reveal on scroll (purpose: hierarchy)
  - reduced-motion: instant
- **Accessibility:**
  - cards follow Card a11y rules
- **Visual contract:**
  - desktop composition: grid of area cards; short labels only
  - trust surface: copy clarifies “service area coverage” intent

### 6. Reviews Preview
- **Purpose:** Provide quick proof and a path to deeper review scanning.
- **Content keys:**
  - home.reviews.heading
  - home.reviews.view_all
- **Components:** TestimonialSection, TestimonialCard, Button
- **Data source:** `cms.groq.testimonials.featured`
- **Interactions:**
  - Expand testimonial quote; navigate to `/reviews`.
- **States:** loading, empty, default
- **Responsive:**
  - desktop: 3-up grid
  - tablet: 2-up
  - mobile: horizontal strip or stacked
- **Motion:**
  - micro: testimonial expand/collapse (accordion reveal, purpose: clarity)
  - reduced-motion: instant
- **Accessibility:**
  - expand control uses `aria-expanded`
- **Visual contract:**
  - desktop composition: compact cards; no long walls of text
  - trust surface: author + location visible

### 7. FAQ Preview
- **Purpose:** Remove common objections fast.
- **Content keys:**
  - home.faq.heading
  - home.faq.view_all
- **Components:** FAQSection, AccordionItem, Button
- **Data source:** `cms.groq.faq.top`
- **Interactions:**
  - Toggle FAQ items; navigate to `/faq`.
- **States:** default
- **Responsive:**
  - desktop/tablet/mobile: single column
- **Motion:**
  - micro: accordion reveal (purpose: clarity)
  - reduced-motion: instant
- **Accessibility:**
  - disclosure ARIA handled by AccordionItem
- **Visual contract:**
  - desktop composition: 6–8 questions max; link to full FAQ

### 8. Pre-Footer CTA Band
- **Purpose:** Re-present the primary call path after scanning.
- **Content keys:**
  - home.cta.heading
  - home.cta.body
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** CTASection, Button
- **Data source:** static
- **Interactions:**
  - Click Call Now / Get Quote.
- **States:** default
- **Responsive:**
  - desktop: inline CTAs
  - mobile: stacked
- **Motion:**
  - micro: press feedback (purpose: feedback)
  - reduced-motion: instant
- **Accessibility:**
  - button labels are explicit
- **Visual contract:**
  - desktop composition: high-contrast band; CTAs grouped together

### 9. Global Footer
- **Purpose:** Provide dense local trust and deep navigation.
- **Content keys:**
  - global.footer.*
  - trust.*
- **Components:** Footer, Divider, Badge
- **Data source:** `cms.siteSettings` + `cms.groq.services.top` + `cms.groq.areas.top`
- **Interactions:**
  - Click phone link; navigate to legal/contact/services.
- **States:** default
- **Responsive:**
  - desktop: 3–4 columns
  - mobile: stacked
- **Motion:**
  - none
- **Accessibility:**
  - footer landmark; nav groups are lists
- **Visual contract:**
  - desktop composition: dense but readable; legal links grouped
  - trust surface: license, hours, areas, review aggregate, phone

### 10. Sticky Mobile ActionBar
- **Purpose:** Keep the conversion path reachable at all times on mobile.
- **Content keys:**
  - component.action_bar.aria_label
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** ActionBar, Button
- **Data source:** `cms.siteSettings.phone` + static labels
- **Interactions:**
  - Tap Call Now (tel); tap Get Quote (/quote); optional expand tertiary.
- **States:** default, with-secondary-actions-open
- **Responsive:**
  - desktop/tablet: hidden
  - mobile: sticky bottom, safe-area aware
- **Motion:**
  - micro: optional expand/collapse (purpose: clarity)
  - reduced-motion: instant
- **Accessibility:**
  - labeled region; focus order left→right
- **Visual contract:**
  - mobile composition: primary Call Now + secondary Get Quote; does not cover CTAs

## 3. Page-Level State Requirements
- Loading skeleton:
  - Services/Areas/Reviews previews show skeleton cards matching layout.
- Error fallback:
  - GridSection error uses `errors.network.*` and offers retry.
- Empty:
  - If no services/areas/testimonials exist, hide the section and promote Call Now.
- Auth state: public.
- Network offline:
  - Show AlertMessage for CMS fetch failures; retain click-to-call path.

## 4. Responsive Adaptation Summary
- Desktop: header utility strip + split hero; 3-up grids.
- Tablet: hero stacks; 2-up grids.
- Mobile: text-first hero with CTAs before media; sticky ActionBar is primary conversion surface.

## 5. SEO and Metadata
```yaml
seo:
  title:        seo.home.meta_title
  description:  seo.home.meta_description
  og_title:     seo.home.og_title
  og_description: seo.home.og_description
  og_image:     cms.siteSettings.ogImage
  canonical:    "/"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/"
```

## 6. Conversion Path
- primary_path: Hero → Call Now (tel)
- secondary_path: Hero → Get Quote → Quote form → confirmation state
- exit_points: /services, /areas, /reviews, /contact

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: home.hero.headline
    - h2: home.services.heading
    - h2: home.areas.heading
    - h2: home.reviews.heading
    - h2: home.faq.heading
  notable_aria:
    - "Header drawer uses aria-expanded + focus trap"
    - "Testimonial expand controls use aria-expanded"
  contrast_checks:
    - "CTA button contrast meets WCAG AA"
    - "Badge semantic variants meet WCAG AA"
  motion_prefers_reduced:
    - "Disable hover scale; disable count-up; instant accordion"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: cms.homePage.heroMedia
    format: avif
    weight_kb_target: 200
    priority: true
  route_js_budget_kb_gz: 90
  client_components:
    - Header: mobile drawer state
    - ActionBar: sticky + expand state
    - AccordionItem: open/close state
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Header/Footer settings:
  - Fetch location: server component (root layout)
  - Cache strategy: `force-cache` + webhook-driven revalidation
  - Failure mode: render fallback labels and keep Call Now functional
- Home hero media:
  - Fetch location: server
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: error-media state with stable fallback
- Services/Areas/Testimonials previews:
  - Fetch location: server
  - Cache strategy: `revalidate: 3600` (or webhook revalidation)
  - Failure mode: show error state with retry; keep CTAs active

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view event: `page_view` { page_id: "home", route: "/" }
- Conversion events:
  - `cta_call_click` { source: "hero" | "header" | "footer" | "action_bar" }
  - `cta_get_quote_click` { source: "hero" | "cta_band" | "action_bar" }
  - `nav_click` { item: "services" | "areas" | "reviews" | "about" | "contact" }
  - `card_click` { kind: "service" | "area" }

## 12. Open Questions
- Provide: business phone, hours, license, address, service areas (CMS site settings).
- Provide: 6–10 service cards, 8–20 areas, 6–12 testimonials, 8–12 FAQs.

## 13. Asset Brief
- Required photo slots:
  - Home hero: real work-site photo (wide, minimal clutter).
  - Service cards: 4:3 photos per service category.
- Subject guidance:
  - Trucks, uniforms, tools, in-progress work.
- Allowed fallback sources:
  - Sanity image library (client-provided or licensed stock).
- Banned fallback sources:
  - Illustrations; “call center” imagery.
- Alt-text intent:
  - Describe the work context, not marketing claims.
