---
document_type: page-spec
page_id: services
route: /services
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
  - services.hero.eyebrow
  - services.hero.headline
  - services.hero.subheadline
  - services.grid.heading
  - services.grid.body
  - services.final_cta.heading
  - services.final_cta.body
---

# Services

## 1. Page Definition
- Purpose: organise service categories and direct visitors into the correct detail page.
- Target user intent: identify the right plumbing service quickly.
- Primary CTA: Get a Quote -> /quote.
- Secondary CTA: Call Now -> tel link.
- KPI to optimize: service detail CTR.
- Min sections exempt: false.

## 2. Sections in Visual Order
### 1. Header
- Purpose: global nav and call CTA.
- Content keys: component.nav.*, component.button.call_now.
- Components: Header.
- Data source: static.
- Interactions: nav clicks, call CTA.
- States: default.
- Responsive: condensed on mobile.
- Motion: focus ring only; reduced-motion instant.
- Accessibility: visible Home path.

### 2. Hero
- Purpose: set page intent and keep call/quote actions visible.
- Content keys: services.hero.*.
- Components: HeroSplit, Button.
- Data source: cms.getServiceIndexPage.
- Interactions: quote CTA, call CTA.
- States: loading, error.
- Responsive: compact split on desktop, stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: single H1 and clear CTA labels.

### 3. Service Grid
- Purpose: surface all primary service categories.
- Content keys: services.grid.*, services.grid.items.0.*, services.grid.items.1.*, services.grid.items.2.*.
- Components: ServiceGridSection, ServiceCard.
- Data source: cms.getAllServiceCards.
- Interactions: card click.
- States: loading, empty, error.
- Responsive: one/two/three columns by breakpoint.
- Motion: stagger reveal; hover lift; reduced-motion instant.
- Accessibility: linked cards have focus state.

### 4. Differentiators
- Purpose: explain why this provider feels safer to contact.
- Content keys: trust.license, trust.response_time, trust.guarantee.
- Components: TrustBadgeRow.
- Data source: static.
- Interactions: none.
- States: default.
- Responsive: wrapped badge rows on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: semantic list.

### 5. Process
- Purpose: show what happens after a visitor chooses a service.
- Content keys: home.process.heading, home.process.body.
- Components: StatCard.
- Data source: static.
- Interactions: none.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: ordered list semantics.

### 6. Proof
- Purpose: reinforce trust before the CTA band.
- Content keys: reviews.cards.0.quote, reviews.cards.1.quote.
- Components: TestimonialCard.
- Data source: cms.getServiceProofTestimonials.
- Interactions: review links to /reviews.
- States: loading, error.
- Responsive: stacked on mobile.
- Motion: card reveal; reduced-motion instant.
- Accessibility: blockquote semantics.

### 7. Final CTA
- Purpose: catch undecided visitors with a low-friction next step.
- Content keys: services.final_cta.heading, services.final_cta.body.
- Components: Button.
- Data source: static.
- Interactions: quote and call CTA.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: clear labels.

### 8. Footer
- Purpose: close with contact and legal details.
- Content keys: component.footer.*.
- Components: Footer, StickyContactDock.
- Data source: static.
- Interactions: footer links and sticky actions.
- States: default.
- Responsive: stacked footer groups on mobile.
- Motion: reveal only; reduced-motion instant.
- Accessibility: footer landmark.

## 3. Page-Level State Requirements
- Loading skeleton: hero and service cards.
- Error fallback: service grid becomes CTA-only recovery block.
- Empty state: show quote CTA and phone alternative.
- Auth state: not applicable.
- Network offline: phone path remains usable.

## 4. Responsive Adaptation Summary
The service page compresses into a straightforward stacked directory on mobile while preserving the same hierarchy: intent, categories, trust, process, conversion.

## 5. SEO and Metadata
```yaml
seo:
  title: "Plumbing Services"
  description: "Browse service categories, understand the next step, and request the right plumbing help quickly."
  og_title: "Plumbing Services"
  og_description: "Choose the right plumbing category and move into the fastest contact path."
  og_image: services.hero.headline
  canonical: "/services"
  schema_org:
    "@context": "https://schema.org"
    "@type": "ItemList"
    properties:
      itemListElement: "service category cards"
```

## 6. Conversion Path
- primary_path: Services grid -> /services/[slug] -> /quote.
- secondary_path: Services hero -> call CTA.
- exit_points: /areas, /reviews, /contact.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: services.hero.headline
    - h2: services.grid.heading
    - h2: home.process.heading
    - h2: services.final_cta.heading
  notable_aria:
    - "Service cards expose full-card link labels"
  contrast_checks:
    - "Primary CTA on white and blue backgrounds meets AA"
  motion_prefers_reduced:
    - "Grid stagger becomes instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: services.hero.headline
    format: avif
    weight_kb_target: 180
    priority: true
  route_js_budget_kb_gz: 80
  client_components:
    - Header: mobile drawer state only
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Hero and grid: server component, cache `revalidate: 300`, failure falls back to static intro + contact CTA.
- Proof: server component, cache `revalidate: 600`, failure hides testimonial row.

## 10. Analytics Plan
- Page view event: services_index_viewed.
- Conversion events: service_card_clicked, services_quote_clicked, services_call_clicked.

## 11. Open Questions
- Confirm the final service taxonomy before wiring the CMS schema.