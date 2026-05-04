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
  - ../master-ui-architecture.md
  - ../design-system.md
  - ../component-system.md
  - ../motion-system.md
  - ../content-library.md
content_keys_used:
  - reviews.hero.eyebrow
  - reviews.hero.headline
  - reviews.hero.subheadline
  - reviews.summary.heading
  - reviews.summary.body
  - reviews.final_cta.heading
  - reviews.final_cta.body
---

# Reviews

## 1. Page Definition
- Purpose: concentrate customer proof in one trust-heavy destination.
- Target user intent: validate credibility before making contact.
- Primary CTA: Get a Quote -> /quote.
- Secondary CTA: Call Now -> tel link.
- KPI to optimize: reviews page to contact conversion.
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
- Motion: focus ring; reduced-motion instant.
- Accessibility: Home path visible.

### 2. Hero
- Purpose: set up the proof narrative.
- Content keys: reviews.hero.*.
- Components: HeroSplit, Button.
- Data source: cms.getReviewsPage.
- Interactions: quote and call CTA.
- States: loading, error.
- Responsive: compact split on desktop, stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: single H1.

### 3. Review Summary
- Purpose: explain the recurring trust themes.
- Content keys: reviews.summary.heading, reviews.summary.body.
- Components: StatCard.
- Data source: cms.getReviewsSummary.
- Interactions: none.
- States: loading, error.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: text-based metrics.

### 4. Reviews Grid
- Purpose: show testimonial cards without carousel friction.
- Content keys: reviews.cards.0.*, reviews.cards.1.*, reviews.cards.2.*.
- Components: TestimonialCard.
- Data source: cms.getAllReviews.
- Interactions: optional filtered view.
- States: loading, empty, error.
- Responsive: stacked on mobile, two/three column grid above md.
- Motion: stagger reveal; reduced-motion instant.
- Accessibility: blockquote semantics and descriptive rating text.

### 5. Trust Signals
- Purpose: reinforce operating standards next to customer quotes.
- Content keys: trust.license, trust.response_time, trust.guarantee.
- Components: TrustBadgeRow.
- Data source: static.
- Interactions: none.
- States: default.
- Responsive: wrapped badges on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: semantic list.

### 6. Metrics Strip
- Purpose: pair anecdotal proof with operational proof.
- Content keys: component.stats.*.
- Components: StatCard.
- Data source: cms.getMarketingStats.
- Interactions: none.
- States: loading, error.
- Responsive: stacked cards on mobile.
- Motion: count-up; reduced-motion static.
- Accessibility: numbers remain text.

### 7. Final CTA
- Purpose: turn proof into action.
- Content keys: reviews.final_cta.heading, reviews.final_cta.body.
- Components: Button.
- Data source: static.
- Interactions: quote and call CTA.
- States: default.
- Responsive: stacked CTAs on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: explicit labels.

### 8. Footer
- Purpose: trust and legal close.
- Content keys: component.footer.*.
- Components: Footer, StickyContactDock.
- Data source: static.
- Interactions: footer links.
- States: default.
- Responsive: stacked footer groups.
- Motion: reveal only; reduced-motion instant.
- Accessibility: footer landmark.

## 3. Page-Level State Requirements
- Loading skeleton: hero and reviews grid.
- Error fallback: summary plus direct CTA.
- Empty state: highlight call/quote CTA if testimonials are not available.
- Auth state: not applicable.
- Network offline: call path remains available.

## 4. Responsive Adaptation Summary
The reviews page behaves like a proof gallery that never relies on hover, carousel motion, or dense filtering to communicate trust.

## 5. SEO and Metadata
```yaml
seo:
  title: "Customer Reviews"
  description: "Review surfaces build trust before visitors call or request a quote."
  og_title: "Customer Reviews"
  og_description: "See how customer proof supports the plumbing brand's trust-first positioning."
  og_image: reviews.hero.headline
  canonical: "/reviews"
  schema_org:
    "@context": "https://schema.org"
    "@type": "ItemList"
    properties:
      itemListElement: "review cards"
```

## 6. Conversion Path
- primary_path: Reviews grid -> final CTA -> /quote.
- secondary_path: Hero CTA -> phone contact.
- exit_points: /services, /about, /contact.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: reviews.hero.headline
    - h2: reviews.summary.heading
    - h2: reviews.final_cta.heading
  notable_aria:
    - "Ratings are exposed as readable text, not icon-only"
  contrast_checks:
    - "White cards on inset surfaces retain AA"
  motion_prefers_reduced:
    - "Review reveal becomes instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: reviews.hero.headline
    format: avif
    weight_kb_target: 160
    priority: true
  route_js_budget_kb_gz: 80
  client_components:
    - Header: mobile drawer only
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Hero, review grid, and metrics: server component, cache `revalidate: 300`, failure falls back to direct CTA state.

## 10. Analytics Plan
- Page view event: reviews_page_viewed.
- Conversion events: reviews_quote_clicked, reviews_call_clicked.

## 11. Open Questions
- Confirm whether reviews should display source badges once review providers are finalised.