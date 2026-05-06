---
document_type: page-spec
page_id: terms
route: /terms
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [legal.terms.title]
---

## 1. Page Definition
- Purpose: publish terms of service and usage conditions.
- Target user intent: review legal obligations before engagement.
- Primary CTA: nav.contact -> /contact
- Secondary CTA: nav.home -> /
- KPI: legal_page_exit_to_contact_rate
- Min sections exempt: true (legal utility route)

## 2. Sections in Visual Order
### A. Minimal Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: home/contact nav
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Terms Header
- Components: HeroMediaStack
- Data source: cms.legal.terms.header()
- States: loading, success
- Interactions: in-page anchors
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: h1 heading

### C. Terms Body
- Components: RichTextSection
- Data source: cms.legal.terms.body()
- States: loading, error, success
- Interactions: anchor navigation
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: semantic heading outline

### D. Service Conditions Summary
- Components: CmsCardGrid
- Data source: cms.legal.terms.summary()
- States: loading, empty, success
- Interactions: open linked policies
- Motion: motion.card.hover-lift clarity; reduced_motion border emphasis
- Accessibility: cards include explicit text labels

### E. Contact and Dispute Support
- Components: CtaBand
- Data source: static
- States: success
- Interactions: open contact route
- Motion: motion.button.press feedback; reduced_motion color-only
- Accessibility: focus-visible actions

### F. Related Legal Resources
- Components: CmsCardGrid
- Data source: static
- States: success
- Interactions: open privacy route
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: link semantics

### G. Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: legal links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- unavailable legal cms response falls back to last approved snapshot.

## 4. Responsive Adaptation Summary
- legal reading route remains single-column and legible on all breakpoints.

## 5. SEO and Metadata
- title_key: legal.terms.title
- description_key: legal.terms.title
- canonical_pattern: /terms
- schema_org: WebPage

## 6. Conversion Path
- primary_path: Terms Body -> Contact
- secondary_path: Related Legal Resources -> Privacy
- exit_points: Home, Services

## 7. Accessibility Plan
- landmarks: header, main, footer
- skip_link: #main-content

## 8. Performance Plan
- text route with minimal assets and route budget discipline.

## 9. Data Fetching Plan
- server fetch legal terms body and summary cards.

## 10. Analytics Plan
- page_view: frontend.terms.view
- events: frontend.terms.contact_click

## 11. Open Questions
- Confirm arbitration and jurisdiction copy for target regions.
