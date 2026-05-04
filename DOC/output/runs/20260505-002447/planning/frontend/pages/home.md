---
document_type: page-spec
page_id: home
route: /
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: mixed
depends_on:
  - ../master-ui-architecture.md
  - ../design-system.md
  - ../component-system.md
  - ../motion-system.md
  - ../content-library.md
content_keys_used:
  - home.hero.eyebrow
  - home.hero.headline
  - home.hero.subheadline
  - home.hero.cta_primary
  - home.hero.cta_secondary
  - home.proof.heading
  - home.proof.body
  - home.services.heading
  - home.services.body
  - home.process.heading
  - home.process.body
  - home.coverage.heading
  - home.coverage.body
  - home.final_cta.heading
  - home.final_cta.body
---

# Home

## 1. Page Definition
- Purpose: Convert urgent and planned plumbing visitors from the first screen.
- Target user intent: understand trust, service fit, and the fastest contact path.
- Primary CTA: Call Now -> tel link.
- Secondary CTA: Get a Quote -> /quote.
- KPI to optimize: hero CTA conversion rate.
- Min sections exempt: false.

## 2. Sections in Visual Order
### 1. Header
- Purpose: utility trust and global navigation.
- Content keys: component.nav.*, component.button.call_now.
- Components: Header.
- Data source: static.
- Interactions: drawer open, nav click, call CTA.
- States: default.
- Responsive: desktop horizontal nav; tablet condensed; mobile drawer plus sticky dock support.
- Motion: macro none; micro focus ring; reduced-motion instant.
- Accessibility: nav landmark and visible Home path.

### 2. Hero
- Purpose: reproduce the supplied split-hero reference and present immediate contact actions.
- Content keys: home.hero.*, trust.license, trust.years, trust.areas.
- Components: HeroSplit, TrustBadgeRow, Button.
- Data source: cms.getMarketingHomePage.
- Interactions: primary call CTA, secondary quote CTA.
- States: loading, error, success.
- Responsive: desktop 42/58 split; tablet stacked split; mobile text-first with media below.
- Motion: macro section reveal; micro CTA hover/press; reduced-motion instant reveal.
- Accessibility: single H1, alt text on hero image, CTA group reachable by keyboard.

### 3. Testimonial Shell
- Purpose: transition from hero into proof inside the rounded white overlap surface.
- Content keys: home.proof.heading, home.proof.body, reviews.cards.0.quote, reviews.cards.1.quote, reviews.cards.2.quote.
- Components: TestimonialCard.
- Data source: cms.getMarketingHomePageTestimonials.
- Interactions: review card links to /reviews.
- States: loading, error.
- Responsive: desktop three cards; tablet two-up; mobile stacked.
- Motion: macro stagger reveal; micro hover lift; reduced-motion instant.
- Accessibility: blockquote semantics and rating text labels.

### 4. Service Preview Grid
- Purpose: move high-intent visitors into service detail routes.
- Content keys: home.services.heading, home.services.body, services.grid.items.0.title, services.grid.items.1.title, services.grid.items.2.title.
- Components: ServiceGridSection, ServiceCard.
- Data source: cms.getFeaturedServices.
- Interactions: card click to /services/[slug].
- States: loading, empty, error.
- Responsive: one/two/three columns by breakpoint.
- Motion: macro section reveal; micro hover lift; reduced-motion instant.
- Accessibility: list semantics and full-card focus state.

### 5. Process
- Purpose: explain the short path from enquiry to job completion.
- Content keys: home.process.heading, home.process.body.
- Components: StatCard.
- Data source: cms.getMarketingHomePage.
- Interactions: none beyond CTA link in the block.
- States: loading, error.
- Responsive: stacked narrative on mobile, side-by-side on desktop.
- Motion: macro section reveal; reduced-motion instant.
- Accessibility: ordered step heading structure.

### 6. Coverage and Fleet Proof
- Purpose: show local capability with vehicle imagery and area-support framing.
- Content keys: home.coverage.heading, home.coverage.body, trust.response_time, trust.guarantee.
- Components: TrustBadgeRow, Button.
- Data source: cms.getCoverageProofBlock.
- Interactions: click to /areas and /contact.
- States: loading, error.
- Responsive: image below text on mobile, split panel on desktop.
- Motion: macro section reveal; reduced-motion instant.
- Accessibility: meaningful image alt and no text embedded in image.

### 7. Metrics Strip
- Purpose: reinforce operational credibility with compact proof figures.
- Content keys: component.stats.response_time_label, component.stats.jobs_completed_label, component.stats.satisfaction_label.
- Components: StatCard.
- Data source: cms.getMarketingStats.
- Interactions: none.
- States: loading, error.
- Responsive: stacked cards on mobile, single row on desktop.
- Motion: macro reveal; micro count-up; reduced-motion static values.
- Accessibility: values announced as text.

### 8. Final CTA
- Purpose: give a last call and quote decision point.
- Content keys: home.final_cta.heading, home.final_cta.body.
- Components: Button.
- Data source: static.
- Interactions: call and quote CTA clicks.
- States: default.
- Responsive: stacked CTAs on mobile, inline on desktop.
- Motion: macro section reveal; micro button hover; reduced-motion instant.
- Accessibility: clear action labels.

### 9. Footer
- Purpose: provide contact, service-area, and legal trust details.
- Content keys: component.footer.*.
- Components: Footer, StickyContactDock.
- Data source: static.
- Interactions: footer links, sticky actions.
- States: default.
- Responsive: stacked footer groups on mobile, four-column footer on desktop.
- Motion: section reveal only; reduced-motion instant.
- Accessibility: footer landmark and legal links.

## 3. Page-Level State Requirements
- Loading skeleton: hero media block, testimonial cards, service cards, metrics strip.
- Error fallback: proof and service sections fall back to CTA-only banner with errors.network.* copy.
- Empty state: service preview falls back to direct quote CTA if CMS items are unavailable.
- Auth state: not applicable.
- Network offline: call CTA still works; quote CTA routes locally.

## 4. Responsive Adaptation Summary
The home page preserves the reference hero feel on desktop, then collapses into a text-first vertical stack on mobile while keeping the same order: trust, services, proof, process, coverage, conversion.

## 5. SEO and Metadata
```yaml
seo:
  title: "Reliable Plumbing Solutions for Your Home"
  description: "Trust-led plumbing website plan with fast calls, quote capture, and local proof blocks."
  og_title: "Reliable Plumbing Solutions for Your Home"
  og_description: "Fast contact paths, service proof, and local-trust presentation for a plumbing brand."
  og_image: home.hero.media_alt
  canonical: "/"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: "Plumbing Service Website"
      areaServed: "service area"
      telephone: "business phone"
```

## 6. Conversion Path
- primary_path: Home hero -> call CTA -> phone contact.
- secondary_path: Home hero -> services preview -> /services/[slug] -> /quote.
- exit_points: /services, /areas, /reviews, /contact.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: home.hero.headline
    - h2: home.proof.heading
    - h2: home.services.heading
    - h2: home.process.heading
    - h2: home.coverage.heading
    - h2: home.final_cta.heading
  notable_aria:
    - "Hero CTA group announced as primary actions"
    - "Sticky dock actions have explicit aria-labels"
  contrast_checks:
    - "White on primary blue exceeds AA"
  motion_prefers_reduced:
    - "Hero reveal and count-up collapse to static states"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: home.hero.media_alt
    format: avif
    weight_kb_target: 220
    priority: true
  route_js_budget_kb_gz: 90
  client_components:
    - Header: mobile drawer state only
    - StickyContactDock: fixed mobile CTA state
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Hero, proof, process, coverage: server component, cache `revalidate: 300`, fallback to static CTA state.
- Services preview: server component, cache `revalidate: 300`, fallback to quote CTA if missing.
- Metrics strip: server component, cache `revalidate: 600`, fallback to hidden strip if unavailable.

## 10. Analytics Plan
- Page view event: marketing_home_viewed.
- Conversion events: home_hero_call_clicked, home_hero_quote_clicked, service_card_clicked.
- Event source: typed marketing events constant.

## 11. Open Questions
- Replace generic service-area wording once the suburb list is confirmed.
- Confirm whether the proof metrics should use live business numbers or editorial placeholders.