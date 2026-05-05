---
document_type: page-spec
page_id: about
route: /about
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [about.hero.title, about.story.title, about.team.title, about.cta.title]
---

## 1. Page Definition
- Purpose: establish company credibility, mission, and team.
- Target user intent: confirm trustworthiness and professionalism.
- Primary CTA: cta.get_quote -> /quote
- Secondary CTA: nav.contact -> /contact
- KPI: about_to_quote_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: navigation
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. About Hero
- Components: HeroMediaStack
- Data source: cms.about.hero()
- States: loading, success
- Interactions: jump links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: h1 contract

### C. Story and Mission
- Components: CmsCardGrid
- Data source: cms.about.story()
- States: loading, empty, success
- Interactions: read-more disclosure
- Motion: motion.card.hover-lift clarity; reduced_motion border emphasis
- Accessibility: heading order and text contrast

### D. Certifications and Trust
- Components: StatusBadge, CmsCardGrid
- Data source: cms.about.certifications()
- States: loading, empty, success
- Interactions: open credential details
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: badges include text labels

### E. Team and Process
- Components: CmsCardGrid, CaseStudyTimeline
- Data source: cms.about.team(), cms.about.process()
- States: loading, empty, success
- Interactions: open profile cards
- Motion: motion.card.hover-lift clarity; reduced_motion static
- Accessibility: profile images with alt context

### F. Testimonials Bridge
- Components: TestimonialRail, CtaBand
- Data source: cms.testimonials.featured()
- States: loading, empty, success
- Interactions: quote and contact actions
- Motion: motion.button.press feedback; reduced_motion color-only
- Accessibility: action focus visible

### G. Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: support links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- missing certification data fallback to trust summary text.

## 4. Responsive Adaptation Summary
- desktop emphasizes story plus credentials; mobile prioritizes team and support actions.

## 5. SEO and Metadata
- title_key: about.hero.title
- description_key: about.story.title
- canonical_pattern: /about
- schema_org: AboutPage + Organization

## 6. Conversion Path
- primary_path: Story -> Certifications -> CTA
- secondary_path: Team -> Contact
- exit_points: Services, Portfolio

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content

## 8. Performance Plan
- defer team media below fold.

## 9. Data Fetching Plan
- server fetch all about sections and footer trust data.

## 10. Analytics Plan
- page_view: frontend.about.view
- events: frontend.about.quote_click, frontend.about.contact_click

## 11. Open Questions
- Confirm team profile depth and governance approvals.

## 12. Asset Brief
- required slots: about-hero, team-photos, certifications-media
