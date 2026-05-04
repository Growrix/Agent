---
document_type: page-spec
page_id: not-found
route: /404
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: static
depends_on:
  - ../master-ui-architecture.md
  - ../design-system.md
  - ../component-system.md
  - ../motion-system.md
  - ../content-library.md
content_keys_used:
  - not_found.hero.title
  - not_found.hero.body
  - not_found.cta_primary
  - not_found.cta_secondary
---

# Not Found

## 1. Page Definition
- Purpose: recover from broken links without losing the visitor.
- Target user intent: find a useful next step quickly.
- Primary CTA: Return Home -> /.
- Secondary CTA: View Services -> /services.
- KPI to optimize: recovery CTR.
- Min sections exempt: true (utility page).

## 2. Sections in Visual Order
### 1. Header
- Purpose: minimal nav.
- Content keys: component.nav.home, component.nav.services, component.button.call_now.
- Components: Header.
- Data source: static.
- Interactions: nav click, call CTA.
- States: default.
- Responsive: compact.
- Motion: focus ring only; reduced-motion instant.
- Accessibility: Home path visible.

### 2. Hero
- Purpose: explain the error and keep confidence intact.
- Content keys: not_found.hero.title, not_found.hero.body.
- Components: HeroSplit.
- Data source: static.
- Interactions: none.
- States: default.
- Responsive: compact stack.
- Motion: section reveal; reduced-motion instant.
- Accessibility: single H1.

### 3. Recovery Links
- Purpose: surface the top navigation destinations.
- Content keys: not_found.cta_primary, not_found.cta_secondary.
- Components: Button.
- Data source: static.
- Interactions: route to / and /services.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: explicit link labels.

### 4. Contact Fallback
- Purpose: preserve urgent contact path.
- Content keys: component.button.call_now, component.button.get_quote.
- Components: Button.
- Data source: static.
- Interactions: call and quote CTA.
- States: default.
- Responsive: stacked on mobile.
- Motion: section reveal; reduced-motion instant.
- Accessibility: clear labels.

### 5. Footer
- Purpose: trust and legal close.
- Content keys: component.footer.*.
- Components: Footer.
- Data source: static.
- Interactions: footer links.
- States: default.
- Responsive: minimal footer.
- Motion: reveal only; reduced-motion instant.
- Accessibility: footer landmark.

## 3. Page-Level State Requirements
- Loading skeleton: not applicable.
- Error fallback: not applicable.
- Empty/filtered-empty: not applicable.
- Auth state: not applicable.
- Network offline: call CTA remains usable.

## 4. Responsive Adaptation Summary
The 404 page stays lightweight and action-focused, prioritising recovery over decorative content.

## 5. SEO and Metadata
```yaml
seo:
  title: "Page not found"
  description: "The page may have moved, but the main contact paths are still available."
  og_title: "Page not found"
  og_description: "Use the main navigation, services page, or direct contact path to continue."
  og_image: not_found.hero.title
  canonical: "/404"
  schema_org:
    "@context": "https://schema.org"
    "@type": "WebPage"
    properties:
      name: "Page not found"
```

## 6. Conversion Path
- primary_path: Return Home -> /.
- secondary_path: View Services -> /services.
- exit_points: tel link, /quote.

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, main, footer, nav]
  skip_link: "#main-content"
  heading_outline:
    - h1: not_found.hero.title
  notable_aria:
    - "Recovery links are grouped and clearly labeled"
  contrast_checks:
    - "CTA colors remain AA compliant"
  motion_prefers_reduced:
    - "Reveal motion becomes instant"
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 1600
  hero_image:
    path_or_key: not_found.hero.title
    format: avif
    weight_kb_target: 0
    priority: false
  route_js_budget_kb_gz: 35
  client_components: []
  defer_below_fold: false
```

## 9. Data Fetching Plan
- Static page; no remote fetches.

## 10. Open Questions
- None.