---
document_type: page-spec
page_id: terms
route: /terms
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
  - terms.hero.title
  - terms.contact_line
---

# Terms

## 1. Page Definition
- Purpose: publish site and service-use terms.
- Target user intent: understand the basic terms before booking or enquiry.
- Primary CTA: Contact the Business -> /contact.
- Secondary CTA: Return Home -> /.
- KPI to optimize: legal clarity with low abandonment.
- Min sections exempt: true (legal utility page).

## 2. Sections in Visual Order
### 1. Header
- Purpose: minimal nav.
- Content keys: component.nav.home, component.nav.contact.
- Components: Header.
- Data source: static.
- Interactions: nav click.
- States: default.
- Responsive: compact.
- Motion: focus ring only; reduced-motion instant.
- Accessibility: Home path visible.

### 2. Hero
- Purpose: page title.
- Content keys: terms.hero.title.
- Components: HeroSplit.
- Data source: static.
- Interactions: none.
- States: default.
- Responsive: compact band.
- Motion: section reveal; reduced-motion instant.
- Accessibility: single H1.

### 3. Legal Content
- Purpose: long-form service terms body.
- Content keys: terms.contact_line.
- Components: ContentBand.
- Data source: cms.getLegalPage('terms').
- Interactions: none.
- States: loading, error.
- Responsive: reading-width constrained.
- Motion: section reveal; reduced-motion instant.
- Accessibility: semantic rich text structure.

### 4. Contact Line
- Purpose: provide human follow-up for contract questions.
- Content keys: terms.contact_line.
- Components: Button.
- Data source: static.
- Interactions: route to /contact.
- States: default.
- Responsive: stacked.
- Motion: section reveal; reduced-motion instant.
- Accessibility: explicit label.

### 5. Footer
- Purpose: legal close.
- Content keys: component.footer.*.
- Components: Footer.
- Data source: static.
- Interactions: footer links.
- States: default.
- Responsive: minimal legal footer.
- Motion: reveal only; reduced-motion instant.
- Accessibility: footer landmark.

## 3. Page-Level State Requirements
- Loading skeleton: legal reading shell.
- Error fallback: contact CTA with error copy.
- Empty/filtered-empty: not applicable.
- Auth state: not applicable.
- Network offline: contact CTA remains available.

## 4. Responsive Adaptation Summary
The terms page mirrors privacy: simple reading shell, minimal chrome, clear contact fallback.

## 5. SEO and Metadata
```yaml
seo:
  title: "Terms of Service"
  description: "Terms that govern service requests and use of the plumbing site."
  og_title: "Terms of Service"
  og_description: "Terms for service requests, quotes, and contact flows."
  og_image: terms.hero.title
  canonical: "/terms"
  schema_org:
    "@context": "https://schema.org"
    "@type": "WebPage"
    properties:
      name: "Terms of Service"
```

## 6. Conversion Path
- primary_path: terms body -> /contact.
- secondary_path: header Home -> /.
- exit_points: /contact, /.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: terms.hero.title
  notable_aria:
    - "Long-form content preserves semantic rich text structure"
  contrast_checks:
    - "Body text on surface exceeds AA"
  motion_prefers_reduced:
    - "Reveal motion becomes instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 1800
  hero_image:
    path_or_key: terms.hero.title
    format: avif
    weight_kb_target: 0
    priority: false
  route_js_budget_kb_gz: 40
  client_components: []
  defer_below_fold: false
```

## 9. Data Fetching Plan
- Legal body: server component, cache `revalidate: 3600`, failure falls back to contact line.

## 10. Open Questions
- Confirm whether service terms need a downloadable PDF companion.