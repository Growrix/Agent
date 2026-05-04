---
document_type: page-spec
page_id: about
route: /about
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
  - about.hero.eyebrow
  - about.hero.headline
  - about.hero.subheadline
  - about.story.heading
  - about.story.body
  - about.values.heading
  - about.values.body
  - about.final_cta.heading
  - about.final_cta.body
---

# About

## 1. Page Definition
- Purpose: humanise the business and explain how it works.
- Target user intent: verify professionalism and service standards.
- Primary CTA: Contact the Team -> /contact.
- Secondary CTA: View Services -> /services.
- KPI to optimize: about page to contact conversion.
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
- Purpose: introduce the business character and approach.
- Content keys: about.hero.*.
- Components: HeroSplit, Button.
- Data source: cms.getAboutPage.
- Interactions: contact CTA, services CTA.
- States: loading, error.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: H1 and descriptive media alt.

### 3. Story
- Purpose: explain the brand's service philosophy.
- Content keys: about.story.heading, about.story.body.
- Components: TrustBadgeRow.
- Data source: cms.getAboutPage.story.
- Interactions: none.
- States: loading, error.
- Responsive: stacked layout.
- Motion: section reveal; reduced-motion instant.
- Accessibility: paragraph-first reading order.

### 4. Team and Standards
- Purpose: show the human side without losing operational trust.
- Content keys: trust.license, trust.years, trust.guarantee.
- Components: StatCard.
- Data source: cms.getAboutPage.team.
- Interactions: optional click to contact.
- States: loading, empty, error.
- Responsive: stacked on mobile, multi-column on desktop.
- Motion: reveal and hover lift; reduced-motion instant.
- Accessibility: image alt and heading association.

### 5. Values
- Purpose: state the behaviours the site keeps repeating.
- Content keys: about.values.heading, about.values.body.
- Components: ServiceCard.
- Data source: cms.getAboutPage.values.
- Interactions: none.
- States: loading, error.
- Responsive: stacked cards on mobile.
- Motion: stagger reveal; reduced-motion instant.
- Accessibility: card titles as headings.

### 6. Proof
- Purpose: reconnect the brand story to customer outcome.
- Content keys: reviews.cards.1.quote, reviews.cards.2.quote.
- Components: TestimonialCard.
- Data source: cms.getAboutPageTestimonials.
- Interactions: link to /reviews.
- States: loading, error.
- Responsive: stacked on mobile.
- Motion: hover lift; reduced-motion instant.
- Accessibility: blockquote semantics.

### 7. Final CTA
- Purpose: move from trust into contact.
- Content keys: about.final_cta.heading, about.final_cta.body.
- Components: Button.
- Data source: static.
- Interactions: contact and services CTA.
- States: default.
- Responsive: stacked CTAs on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: clear labels.

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
- Loading skeleton: hero and team block.
- Error fallback: static brand summary plus CTA.
- Empty state: team module may collapse if no staff photography is available.
- Auth state: not applicable.
- Network offline: contact CTA still works locally.

## 4. Responsive Adaptation Summary
The about page becomes a clear story stack on mobile, keeping imagery supportive rather than dominant while preserving quick access to services and contact.

## 5. SEO and Metadata
```yaml
seo:
  title: "About the Team"
  description: "The about page explains approach, service standards, and why the team feels reliable."
  og_title: "About the Team"
  og_description: "Meet the local plumbing brand behind the trust-first site experience."
  og_image: about.hero.headline
  canonical: "/about"
  schema_org:
    "@context": "https://schema.org"
    "@type": "AboutPage"
    properties:
      mainEntity: "Plumbing Service Website"
```

## 6. Conversion Path
- primary_path: About hero -> /contact.
- secondary_path: About hero -> /services.
- exit_points: /reviews, /quote.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: about.hero.headline
    - h2: about.story.heading
    - h2: about.values.heading
    - h2: about.final_cta.heading
  notable_aria:
    - "Team imagery includes descriptive alt when meaningful"
  contrast_checks:
    - "CTA and text pairings stay AA compliant"
  motion_prefers_reduced:
    - "Reveal motion becomes instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: about.hero.headline
    format: avif
    weight_kb_target: 180
    priority: true
  route_js_budget_kb_gz: 80
  client_components:
    - Header: mobile drawer only
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Hero, story, team, values, proof: server component, cache `revalidate: 600`, failure falls back to static CTA surface.

## 10. Analytics Plan
- Page view event: about_page_viewed.
- Conversion events: about_contact_clicked, about_services_clicked.

## 11. Open Questions
- Confirm whether team photos are available, or if the page should lead more heavily with operational proof.