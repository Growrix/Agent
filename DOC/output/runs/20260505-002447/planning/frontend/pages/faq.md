---
document_type: page-spec
page_id: faq
route: /faq
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
  - faq.hero.eyebrow
  - faq.hero.headline
  - faq.hero.subheadline
  - faq.categories.heading
  - faq.categories.body
  - faq.items.0.question
  - faq.items.0.answer
  - faq.items.1.question
  - faq.items.1.answer
  - faq.items.2.question
  - faq.items.2.answer
  - faq.final_cta.heading
  - faq.final_cta.body
---

# FAQ

## 1. Page Definition
- Purpose: answer the questions that usually delay contact.
- Target user intent: remove hesitation before calling or requesting a quote.
- Primary CTA: Get a Quote -> /quote.
- Secondary CTA: Call Now -> tel link.
- KPI to optimize: FAQ page to quote conversion.
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
- Purpose: explain the role of the FAQ.
- Content keys: faq.hero.*.
- Components: HeroSplit, Button.
- Data source: cms.getFaqPage.
- Interactions: call and quote CTA.
- States: loading, error.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: single H1.

### 3. Category Intro
- Purpose: orient the visitor to the question groups.
- Content keys: faq.categories.heading, faq.categories.body.
- Components: TrustBadgeRow.
- Data source: static.
- Interactions: none.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: semantic list of categories when present.

### 4. Coverage Questions
- Purpose: answer service-area uncertainty.
- Content keys: faq.items.2.question, faq.items.2.answer.
- Components: FAQAccordion.
- Data source: cms.getFaqGroup('coverage').
- Interactions: accordion expand.
- States: loading, empty, error.
- Responsive: full-width accordion.
- Motion: accordion reveal; reduced-motion instant.
- Accessibility: keyboard and ARIA support.

### 5. Timing Questions
- Purpose: answer response-time hesitation.
- Content keys: faq.items.0.question, faq.items.0.answer.
- Components: FAQAccordion.
- Data source: cms.getFaqGroup('timing').
- Interactions: accordion expand.
- States: loading, empty, error.
- Responsive: full-width accordion.
- Motion: accordion reveal; reduced-motion instant.
- Accessibility: keyboard and ARIA support.

### 6. Quote Questions
- Purpose: explain what is needed before requesting help.
- Content keys: faq.items.1.question, faq.items.1.answer.
- Components: FAQAccordion.
- Data source: cms.getFaqGroup('quote').
- Interactions: accordion expand.
- States: loading, empty, error.
- Responsive: full-width accordion.
- Motion: accordion reveal; reduced-motion instant.
- Accessibility: keyboard and ARIA support.

### 7. Final CTA
- Purpose: redirect confident visitors into the main conversion path.
- Content keys: faq.final_cta.heading, faq.final_cta.body.
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
- Responsive: stacked footer groups.
- Motion: reveal only; reduced-motion instant.
- Accessibility: footer landmark.

## 3. Page-Level State Requirements
- Loading skeleton: accordion groups.
- Error fallback: show contact CTA and brief fallback copy.
- Empty state: hide empty category group.
- Auth state: not applicable.
- Network offline: call path remains usable.

## 4. Responsive Adaptation Summary
The FAQ page stays simple on mobile: one clear category after another, with no tabs or hover dependence.

## 5. SEO and Metadata
```yaml
seo:
  title: "Plumbing FAQ"
  description: "Common plumbing questions answered clearly to reduce hesitation before contact."
  og_title: "Plumbing FAQ"
  og_description: "Get fast answers about timing, coverage, and quotes before contacting the team."
  og_image: faq.hero.headline
  canonical: "/faq"
  schema_org:
    "@context": "https://schema.org"
    "@type": "FAQPage"
    properties:
      mainEntity: "cms faq items"
```

## 6. Conversion Path
- primary_path: FAQ answers -> /quote.
- secondary_path: Hero CTA -> phone contact.
- exit_points: /contact, /services.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: faq.hero.headline
    - h2: faq.categories.heading
    - h2: faq.final_cta.heading
  notable_aria:
    - "All accordion items expose aria-expanded and aria-controls"
  contrast_checks:
    - "Accordion separators and text meet AA"
  motion_prefers_reduced:
    - "Accordion reveal becomes instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2200
  hero_image:
    path_or_key: faq.hero.headline
    format: avif
    weight_kb_target: 120
    priority: true
  route_js_budget_kb_gz: 75
  client_components:
    - FAQAccordion: disclosure state only
  defer_below_fold: false
```

## 9. Data Fetching Plan
- FAQ groups: server component, cache `revalidate: 600`, failure falls back to contact CTA.

## 10. Analytics Plan
- Page view event: faq_page_viewed.
- Conversion events: faq_item_opened, faq_quote_clicked, faq_call_clicked.

## 11. Open Questions
- Confirm whether FAQ answers should stay tightly concise or allow longer editorial blocks.