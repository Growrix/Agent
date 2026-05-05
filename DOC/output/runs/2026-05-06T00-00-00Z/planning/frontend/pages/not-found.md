---
document_type: page-spec
page_id: not-found
route: /404
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: static
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [utility.not_found.title, nav.home, nav.services, nav.quote]
---

## 1. Page Definition
- Purpose: recover users from broken or retired routes.
- Target user intent: find a meaningful next destination.
- Primary CTA: nav.home -> /
- Secondary CTA: nav.quote -> /quote
- KPI: not_found_recovery_rate
- Min sections exempt: true (utility route)

## 2. Sections in Visual Order
### A. Minimal Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: route nav
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Not Found Hero
- Components: HeroMediaStack
- Data source: static
- States: success
- Interactions: primary recovery actions
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: clear h1 and descriptive text

### C. Quick Links
- Components: CmsCardGrid
- Data source: static
- States: success
- Interactions: open Home, Services, Quote, Contact
- Motion: motion.button.press feedback; reduced_motion color-only
- Accessibility: keyboard and touch parity

### D. Search Fallback
- Components: InputField
- Data source: integration.search.siteIndex(query)
- States: default, loading, empty, error, success
- Interactions: search submit
- Motion: motion.input.focus-ring feedback; reduced_motion static
- Accessibility: labelled search field

### E. Support Shortcut
- Components: SupportFabCluster
- Data source: static
- States: success
- Interactions: call, whatsapp, assistant
- Motion: motion.drawer.mobile-dock.expand clarity; reduced_motion immediate
- Accessibility: no hover-only behavior

### F. Suggested Content
- Components: BlogFeed
- Data source: cms.notFound.suggestions()
- States: loading, empty, success
- Interactions: open suggested routes
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: list semantics

### G. Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: legal/support links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- if search integration unavailable, show static suggested routes.

## 4. Responsive Adaptation Summary
- compact utility layout with mobile-first action stack.

## 5. SEO and Metadata
- title_key: utility.not_found.title
- description_key: utility.not_found.title
- canonical_pattern: /404
- schema_org: WebPage

## 6. Conversion Path
- primary_path: Quick Links -> Home
- secondary_path: Support Shortcut -> Contact
- exit_points: Services, Quote, Blog

## 7. Accessibility Plan
- landmarks: header, main, footer
- skip_link: #main-content

## 8. Performance Plan
- lightweight route with optional deferred suggestions.

## 9. Data Fetching Plan
- static core content with optional cms suggestions fetch.

## 10. Analytics Plan
- page_view: frontend.not_found.view
- events: frontend.not_found.recovery_click, frontend.not_found.search_submit

## 11. Open Questions
- confirm preferred top suggestions order.
