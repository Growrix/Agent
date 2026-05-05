---
document_type: page-spec
page_id: privacy
route: /privacy
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [legal.privacy.title]
---

## 1. Page Definition
- Purpose: publish privacy terms and processing disclosures.
- Target user intent: verify data handling commitments.
- Primary CTA: nav.contact -> /contact
- Secondary CTA: nav.home -> /
- KPI: legal_page_exit_to_contact_rate
- Min sections exempt: true (legal utility route)

## 2. Sections in Visual Order
### A. Minimal Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: home and contact routes
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Legal Title
- Components: HeroMediaStack
- Data source: cms.legal.privacy.header()
- States: loading, success
- Interactions: in-page section nav
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: h1 and last-updated timestamp semantics

### C. Policy Body
- Components: RichTextSection
- Data source: cms.legal.privacy.body()
- States: loading, error, success
- Interactions: anchor jump links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: semantic headings and list structure

### D. Data Rights Summary
- Components: CmsCardGrid
- Data source: cms.legal.privacy.rightsSummary()
- States: loading, empty, success
- Interactions: open support actions
- Motion: motion.card.hover-lift clarity; reduced_motion border emphasis
- Accessibility: text alternative for icon cards

### E. Contact for Privacy Requests
- Components: CtaBand
- Data source: static
- States: success
- Interactions: contact action
- Motion: motion.button.press feedback; reduced_motion color-only
- Accessibility: action focus states

### F. Related Legal Links
- Components: CmsCardGrid
- Data source: static
- States: success
- Interactions: open terms page
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: link descriptions

### G. Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: legal links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- cms legal fallback to last published static snapshot.

## 4. Responsive Adaptation Summary
- single-column legal reading flow across breakpoints.

## 5. SEO and Metadata
- title_key: legal.privacy.title
- description_key: legal.privacy.title
- canonical_pattern: /privacy
- schema_org: WebPage

## 6. Conversion Path
- primary_path: Policy Body -> Contact for Privacy Requests
- secondary_path: Related Legal Links -> Terms
- exit_points: Home, Contact

## 7. Accessibility Plan
- landmarks: header, main, footer
- skip_link: #main-content

## 8. Performance Plan
- text-first legal route with minimal media.

## 9. Data Fetching Plan
- server fetch legal body with robust fallback.

## 10. Analytics Plan
- page_view: frontend.privacy.view
- events: frontend.privacy.contact_click

## 11. Open Questions
- Confirm regional legal variant strategy.
