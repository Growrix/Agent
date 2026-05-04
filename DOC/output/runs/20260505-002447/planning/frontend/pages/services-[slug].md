---
document_type: page-spec
page_id: service-detail
route: /services/[slug]
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
  - service.template.includes_heading
  - service.template.process_heading
  - service.template.proof_heading
  - service.template.faq_heading
  - service.template.cta_heading
---

# Service Detail

## 1. Page Definition
- Purpose: explain a single service with enough trust and clarity to trigger a quote or call.
- Target user intent: decide whether this service solves the problem.
- Primary CTA: Request Quote -> /quote.
- Secondary CTA: Call for Same-Day Help -> tel link.
- KPI to optimize: service-detail to quote conversion.
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
- Accessibility: visible Home path.

### 2. Hero
- Purpose: present service-specific promise and immediate contact options.
- Content keys: service.template.cta_heading, trust.response_time.
- Components: HeroSplit, TrustBadgeRow, Button.
- Data source: cms.getServiceBySlug.
- Interactions: call and quote CTA.
- States: loading, error, not-found.
- Responsive: stacked on mobile, split on desktop.
- Motion: section reveal; reduced-motion instant.
- Accessibility: H1 from CMS title and no text in image.

### 3. What's Included
- Purpose: clarify service scope.
- Content keys: service.template.includes_heading.
- Components: ServiceCard.
- Data source: cms.getServiceBySlug.sections.included.
- Interactions: none.
- States: loading, empty, error.
- Responsive: stacked list on mobile, grid on desktop.
- Motion: stagger reveal; reduced-motion instant.
- Accessibility: semantic list.

### 4. How It Works
- Purpose: reduce uncertainty about the visit process.
- Content keys: service.template.process_heading.
- Components: StatCard.
- Data source: cms.getServiceBySlug.sections.process.
- Interactions: none.
- States: loading, error.
- Responsive: vertical steps on mobile, horizontal on desktop.
- Motion: section reveal; reduced-motion instant.
- Accessibility: ordered step sequence.

### 5. Quote Guidance
- Purpose: explain what to prepare before requesting service.
- Content keys: trust.guarantee, trust.privacy.
- Components: QuoteFormCard.
- Data source: static.
- Interactions: route to /quote.
- States: default.
- Responsive: full-width card on mobile, right-rail CTA on desktop.
- Motion: section reveal; reduced-motion instant.
- Accessibility: CTA labels stay explicit.

### 6. Proof
- Purpose: reinforce that this specific service is dependable.
- Content keys: service.template.proof_heading, reviews.cards.0.quote, reviews.cards.1.quote.
- Components: TestimonialCard.
- Data source: cms.getServiceTestimonialsBySlug.
- Interactions: link to /reviews.
- States: loading, error.
- Responsive: stacked on mobile.
- Motion: hover lift; reduced-motion instant.
- Accessibility: blockquote semantics.

### 7. FAQ
- Purpose: answer service-specific objections.
- Content keys: service.template.faq_heading, faq.items.0.question, faq.items.1.question.
- Components: FAQAccordion.
- Data source: cms.getServiceFaqBySlug.
- Interactions: accordion expand.
- States: loading, empty, error.
- Responsive: full-width accordion.
- Motion: accordion reveal; reduced-motion instant.
- Accessibility: aria-expanded and keyboard support.

### 8. Final CTA
- Purpose: repeat the quote and call decision.
- Content keys: service.template.cta_heading.
- Components: Button.
- Data source: static.
- Interactions: quote and call CTA.
- States: default.
- Responsive: stacked on mobile, inline on desktop.
- Motion: section reveal; reduced-motion instant.
- Accessibility: visible labels.

### 9. Footer
- Purpose: close with trust and legal detail.
- Content keys: component.footer.*.
- Components: Footer, StickyContactDock.
- Data source: static.
- Interactions: footer links.
- States: default.
- Responsive: stacked groups on mobile.
- Motion: reveal only; reduced-motion instant.
- Accessibility: footer landmark.

## 3. Page-Level State Requirements
- Loading skeleton: hero, included blocks, FAQ.
- Error fallback: generic contact CTA band with errors.network.* copy.
- Empty/filtered-empty: hidden proof or FAQ sections if CMS lacks entries.
- Auth state: not applicable.
- Network offline: call path remains valid.

## 4. Responsive Adaptation Summary
Service detail pages keep the hierarchy tight on mobile: promise, inclusions, process, FAQ, CTA. Desktop gains a cleaner split hero and side-by-side information blocks.

## 5. SEO and Metadata
```yaml
seo:
  title: "Service Detail"
  description: "Service-detail pages explain scope, proof, FAQs, and a direct quote path."
  og_title: "Service Detail"
  og_description: "Understand this plumbing service and move into the fastest contact path."
  og_image: "cms.service.heroImage"
  canonical: "/services/[slug]"
  schema_org:
    "@context": "https://schema.org"
    "@type": "Service"
    properties:
      serviceType: "cms.service.title"
      provider: "Plumbing Service Website"
      areaServed: "service area"
```

## 6. Conversion Path
- primary_path: Hero CTA -> /quote.
- secondary_path: Hero CTA -> phone contact.
- exit_points: /services, /areas, /contact.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: "cms.service.title"
    - h2: service.template.includes_heading
    - h2: service.template.process_heading
    - h2: service.template.proof_heading
    - h2: service.template.faq_heading
    - h2: service.template.cta_heading
  notable_aria:
    - "FAQ accordion uses aria-expanded and aria-controls"
  contrast_checks:
    - "CTA colors retain AA on white and blue surfaces"
  motion_prefers_reduced:
    - "Accordion and reveal transitions become instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: "cms.service.heroImage"
    format: avif
    weight_kb_target: 200
    priority: true
  route_js_budget_kb_gz: 90
  client_components:
    - FAQAccordion: disclosure state only
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Hero, included, process, FAQ: server component, cache `revalidate: 300`, 404 falls to not-found.
- Testimonials: server component, cache `revalidate: 600`, failure hides section.

## 10. Analytics Plan
- Page view event: service_detail_viewed.
- Conversion events: service_quote_clicked, service_call_clicked, faq_item_opened.

## 11. Open Questions
- Confirm whether any service detail needs a pricing table, or all pricing remains quote-led.