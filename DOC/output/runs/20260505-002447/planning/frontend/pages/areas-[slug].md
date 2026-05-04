---
document_type: page-spec
page_id: area-detail
route: /areas/[slug]
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
  - area.template.services_heading
  - area.template.proof_heading
  - area.template.cta_heading
---

# Area Detail

## 1. Page Definition
- Purpose: localise trust and service relevance for a specific area.
- Target user intent: confirm this plumber serves the visitor's suburb and can help with the issue.
- Primary CTA: Book plumbing support in this area -> /quote.
- Secondary CTA: Call Local Team -> tel link.
- KPI to optimize: area-detail to quote conversion.
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
- Accessibility: visible Home path.

### 2. Hero
- Purpose: present the area-specific trust proposition.
- Content keys: area.template.cta_heading, trust.areas, trust.response_time.
- Components: HeroSplit, TrustBadgeRow, Button.
- Data source: cms.getAreaBySlug.
- Interactions: quote and call CTA.
- States: loading, error, not-found.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: H1 from CMS area name.

### 3. Services in This Area
- Purpose: connect local intent to service categories.
- Content keys: area.template.services_heading.
- Components: ServiceCard.
- Data source: cms.getAreaBySlug.services.
- Interactions: clicks to /services/[slug].
- States: loading, empty, error.
- Responsive: stacked on mobile, grid on desktop.
- Motion: stagger reveal; reduced-motion instant.
- Accessibility: full-card links.

### 4. Local Proof
- Purpose: surface local testimonials and trust metrics.
- Content keys: area.template.proof_heading, reviews.cards.0.quote.
- Components: TestimonialCard, StatCard.
- Data source: cms.getAreaBySlug.proof.
- Interactions: review link.
- States: loading, error.
- Responsive: stacked on mobile.
- Motion: reveal and count-up; reduced-motion instant/static.
- Accessibility: readable metrics and text labels.

### 5. How Service Works Here
- Purpose: explain locality-specific arrival and quoting expectations.
- Content keys: home.process.heading, home.process.body.
- Components: StatCard.
- Data source: cms.getAreaBySlug.process.
- Interactions: none.
- States: loading, error.
- Responsive: vertical stack on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: ordered headings.

### 6. FAQ
- Purpose: answer area-specific questions.
- Content keys: faq.items.0.question, faq.items.2.question.
- Components: FAQAccordion.
- Data source: cms.getAreaBySlug.faq.
- Interactions: accordion expand.
- States: loading, empty, error.
- Responsive: full width.
- Motion: accordion reveal; reduced-motion instant.
- Accessibility: keyboard support and aria-expanded.

### 7. Final CTA
- Purpose: move into quote or call.
- Content keys: area.template.cta_heading.
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
- Responsive: stacked on mobile.
- Motion: reveal only; reduced-motion instant.
- Accessibility: footer landmark.

## 3. Page-Level State Requirements
- Loading skeleton: hero, service cards, FAQ.
- Error fallback: quote CTA and call fallback.
- Empty state: hide local proof if absent and emphasise general contact path.
- Auth state: not applicable.
- Network offline: call path remains usable.

## 4. Responsive Adaptation Summary
Area detail pages collapse into a concise locality story on mobile while preserving the same trust -> service -> FAQ -> CTA hierarchy.

## 5. SEO and Metadata
```yaml
seo:
  title: "Service Area Detail"
  description: "Local area pages prove coverage and direct visitors into the fastest quote or call path."
  og_title: "Service Area Detail"
  og_description: "Find local plumbing coverage, trust proof, and a direct contact path."
  og_image: "cms.area.heroImage"
  canonical: "/areas/[slug]"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      areaServed: "cms.area.name"
      telephone: "business phone"
      serviceType: "plumbing"
```

## 6. Conversion Path
- primary_path: Hero CTA -> /quote.
- secondary_path: Hero CTA -> phone contact.
- exit_points: /services/[slug], /contact.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: "cms.area.name"
    - h2: area.template.services_heading
    - h2: area.template.proof_heading
    - h2: home.process.heading
    - h2: area.template.cta_heading
  notable_aria:
    - "Area-specific CTA buttons include area context in aria-labels"
  contrast_checks:
    - "Blue and white surfaces remain AA compliant"
  motion_prefers_reduced:
    - "Reveal and accordion motion become instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: "cms.area.heroImage"
    format: avif
    weight_kb_target: 180
    priority: true
  route_js_budget_kb_gz: 85
  client_components:
    - FAQAccordion: disclosure state only
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Hero, services, proof, FAQ: server component, cache `revalidate: 300`, 404 on missing slug.

## 10. Analytics Plan
- Page view event: area_detail_viewed.
- Conversion events: area_detail_quote_clicked, area_detail_call_clicked, area_service_card_clicked.

## 11. Open Questions
- Confirm whether area pages should include suburb-specific before/after galleries later.