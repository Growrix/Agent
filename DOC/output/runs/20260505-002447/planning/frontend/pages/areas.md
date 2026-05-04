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
  - ../master-ui-architecture.md
  - ../design-system.md
  - ../component-system.md
  - ../motion-system.md
  - ../content-library.md
content_keys_used:
  - areas.hero.eyebrow
  - areas.hero.headline
  - areas.hero.subheadline
  - areas.intro.heading
  - areas.intro.body
  - areas.final_cta.heading
  - areas.final_cta.body
---

# Areas

## 1. Page Definition
- Purpose: help visitors confirm coverage and find a localised page fast.
- Target user intent: verify the business serves a suburb or local pocket.
- Primary CTA: Check Service Availability -> /quote.
- Secondary CTA: Call Now -> tel link.
- KPI to optimize: area-detail CTR.
- Min sections exempt: false.

## 2. Sections in Visual Order
### 1. Header
- Purpose: global nav.
- Content keys: component.nav.*, component.button.call_now.
- Components: Header.
- Data source: static.
- Interactions: nav click, call CTA.
- States: default.
- Responsive: compact on mobile.
- Motion: focus ring only; reduced-motion instant.
- Accessibility: Home path visible.

### 2. Hero
- Purpose: explain why the site breaks coverage into local pages.
- Content keys: areas.hero.*.
- Components: HeroSplit, Button.
- Data source: cms.getAreasIndexPage.
- Interactions: quote CTA and call CTA.
- States: loading, error.
- Responsive: compact split on desktop, stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: single H1.

### 3. Intro
- Purpose: frame the locality search intent.
- Content keys: areas.intro.heading, areas.intro.body.
- Components: TrustBadgeRow.
- Data source: static.
- Interactions: none.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: semantic list.

### 4. Area Grid
- Purpose: list service-area pages.
- Content keys: trust.areas.
- Components: ServiceCard.
- Data source: cms.getAreaCards.
- Interactions: card click to /areas/[slug].
- States: loading, empty, error.
- Responsive: one/two/three columns.
- Motion: stagger reveal; reduced-motion instant.
- Accessibility: linked cards with focus state.

### 5. Service Cross-Linking
- Purpose: connect area discovery with service categories.
- Content keys: services.grid.heading, services.grid.body.
- Components: ServiceCard.
- Data source: cms.getAreaServiceCrossLinks.
- Interactions: clicks to /services/[slug].
- States: loading, error.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: list semantics.

### 6. Proof Strip
- Purpose: establish local trust.
- Content keys: reviews.summary.heading, reviews.summary.body.
- Components: TestimonialCard, StatCard.
- Data source: cms.getAreaProofRollup.
- Interactions: review link.
- States: loading, error.
- Responsive: stacked on mobile.
- Motion: reveal and count-up; reduced-motion instant/static.
- Accessibility: rating text labels.

### 7. Final CTA
- Purpose: move visitors into quote or call.
- Content keys: areas.final_cta.heading, areas.final_cta.body.
- Components: Button.
- Data source: static.
- Interactions: quote and call CTA.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: explicit action labels.

### 8. Footer
- Purpose: trust and legal close.
- Content keys: component.footer.*.
- Components: Footer, StickyContactDock.
- Data source: static.
- Interactions: footer links.
- States: default.
- Responsive: stacked groups on mobile.
- Motion: reveal only; reduced-motion instant.
- Accessibility: footer landmark.

## 3. Page-Level State Requirements
- Loading skeleton: hero and area grid.
- Error fallback: show contact CTA and call path.
- Empty state: no-area list falls back to postcode quote prompt.
- Auth state: not applicable.
- Network offline: phone route remains available.

## 4. Responsive Adaptation Summary
On mobile, area discovery becomes a simple stacked directory with local trust blocks between cards and CTA. Desktop gains a denser searchable overview feel without introducing a hover dependency.

## 5. SEO and Metadata
```yaml
seo:
  title: "Service Areas"
  description: "Area pages prove local coverage and connect visitors to the quote path without friction."
  og_title: "Service Areas"
  og_description: "Find the right local area page and move into service or quote flows quickly."
  og_image: areas.hero.headline
  canonical: "/areas"
  schema_org:
    "@context": "https://schema.org"
    "@type": "ItemList"
    properties:
      itemListElement: "area cards"
```

## 6. Conversion Path
- primary_path: Area grid -> /areas/[slug] -> /quote.
- secondary_path: Hero CTA -> phone contact.
- exit_points: /services, /contact.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: areas.hero.headline
    - h2: areas.intro.heading
    - h2: reviews.summary.heading
    - h2: areas.final_cta.heading
  notable_aria:
    - "Area card links use descriptive labels"
  contrast_checks:
    - "Buttons and cards maintain AA contrast"
  motion_prefers_reduced:
    - "Grid reveal becomes instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: areas.hero.headline
    format: avif
    weight_kb_target: 180
    priority: true
  route_js_budget_kb_gz: 80
  client_components:
    - Header: mobile drawer only
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Hero and area grid: server component, cache `revalidate: 300`, failure falls back to contact CTA.
- Proof rollup: server component, cache `revalidate: 600`, failure hides proof strip.

## 10. Analytics Plan
- Page view event: areas_index_viewed.
- Conversion events: area_card_clicked, areas_quote_clicked, areas_call_clicked.

## 11. Open Questions
- Confirm whether the area directory needs alphabetical filters or if grouped regional clusters are enough.