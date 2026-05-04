---
document_type: page-spec
page_id: privacy
route: /privacy
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
  - privacy.hero.title
  - privacy.contact_line
---

# Privacy

## 1. Page Definition
- Purpose: publish privacy terms for form and contact usage.
- Target user intent: understand how enquiry details are handled.
- Primary CTA: Contact the Business -> /contact.
- Secondary CTA: Return Home -> /.
- KPI to optimize: legal clarity with low abandonment.
- Min sections exempt: true (legal utility page).

## 2. Sections in Visual Order
### 1. Header
- Purpose: minimal global nav.
- Content keys: component.nav.home, component.nav.contact.
- Components: Header.
- Data source: static.
- Interactions: nav click.
- States: default.
- Responsive: compact.
- Motion: focus ring only; reduced-motion instant.
- Accessibility: Home path visible.

### 2. Hero
- Purpose: title and page context.
- Content keys: privacy.hero.title.
- Components: HeroSplit.
- Data source: static.
- Interactions: none.
- States: default.
- Responsive: compact band.
- Motion: section reveal; reduced-motion instant.
- Accessibility: single H1.

### 3. Legal Content
- Purpose: long-form privacy body from CMS.
- Content keys: privacy.contact_line.
- Components: ContentBand.
- Data source: cms.getLegalPage('privacy').
- Interactions: none.
- States: loading, error.
- Responsive: reading-width constrained.
- Motion: section reveal; reduced-motion instant.
- Accessibility: readable width and heading order.

### 4. Contact Line
- Purpose: point privacy questions to a human path.
- Content keys: privacy.contact_line.
- Components: Button.
- Data source: static.
- Interactions: route to /contact.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: explicit action label.

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
- Network offline: static contact CTA stays available.

## 4. Responsive Adaptation Summary
The privacy page collapses to a simple reading layout with constrained width and no unnecessary media weight.

## 5. SEO and Metadata
```yaml
seo:
  title: "Privacy Policy"
  description: "Privacy details for visitors using the plumbing site contact and quote surfaces."
  og_title: "Privacy Policy"
  og_description: "Privacy information for enquiry and quote handling."
  og_image: privacy.hero.title
  canonical: "/privacy"
  schema_org:
    "@context": "https://schema.org"
    "@type": "WebPage"
    properties:
      name: "Privacy Policy"
```

## 6. Conversion Path
- primary_path: privacy body -> /contact.
- secondary_path: header Home -> /.
- exit_points: /contact, /.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: privacy.hero.title
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
    path_or_key: privacy.hero.title
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
- Confirm whether privacy copy stays CMS-managed or ships as static legal copy.