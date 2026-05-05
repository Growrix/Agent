---
document_type: page-spec
page_id: case-study-detail
route: /portfolio/[slug]
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [case_study.hero.title, case_study.challenge.title, case_study.solution.title, case_study.outcome.title]
---

## 1. Page Definition
- Purpose: deliver full project narrative with measurable outcomes.
- Target user intent: assess competence in similar scenarios.
- Primary CTA: content_key cta.get_quote -> /quote
- Secondary CTA: content_key nav.contact -> /contact
- KPI: case_study_to_quote_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Purpose: route and breadcrumb continuity
- Content keys: nav.*
- Components: HeaderShell
- Data source: static
- Interactions: navigate to parent pages
- States: success
- Responsive: standard
- Motion: macro motion.page.enter.fade-slide purpose hierarchy; reduced_motion static
- Accessibility: nav with breadcrumb semantics

### B. Case Hero
- Purpose: summarize project context and result promise
- Content keys: case_study.hero.*
- Components: HeroMediaStack
- Data source: cms.caseStudy.bySlug(slug).hero
- Interactions: jump links to sections
- States: loading, error, success
- Responsive: split desktop, stacked mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion immediate render
- Accessibility: h1 and caption pairing
- Visual contract: hero image with project metadata ribbon

### C. Project Context
- Purpose: capture property constraints and goals
- Content keys: case_study.context.title
- Components: CmsCardGrid
- Data source: cms.caseStudy.bySlug(slug).context
- Interactions: expand context cards
- States: loading, empty, success
- Responsive: two-column desktop, stacked mobile
- Motion: micro motion.card.hover-lift purpose clarity; reduced_motion border emphasis
- Accessibility: semantic definition list for key facts

### D. Challenge and Approach
- Purpose: explain planning and technical decisions
- Content keys: case_study.challenge.title, case_study.solution.title
- Components: CaseStudyTimeline
- Data source: cms.caseStudy.bySlug(slug).timeline
- Interactions: step reveal
- States: loading, success
- Responsive: timeline desktop, linear mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion static
- Accessibility: ordered list sequence

### E. Gallery and Proof
- Purpose: show before and after evidence
- Content keys: case_study.gallery.title
- Components: CmsCardGrid
- Data source: cms.caseStudy.bySlug(slug).gallery
- Interactions: open lightbox
- States: loading, empty, success
- Responsive: masonry desktop, card stack mobile
- Motion: micro motion.button.press purpose feedback; reduced_motion no zoom
- Accessibility: lightbox keyboard and close escape support

### F. Outcomes and Quote
- Purpose: quantify results and reinforce trust
- Content keys: case_study.outcome.title, case_study.quote.title
- Components: StatusBadge, TestimonialRail
- Data source: cms.caseStudy.bySlug(slug).outcomes, cms.caseStudy.bySlug(slug).quote
- Interactions: open related projects
- States: loading, empty, success
- Responsive: side-by-side desktop, stacked mobile
- Motion: macro motion.section.reveal.stagger purpose hierarchy; reduced_motion direct
- Accessibility: metric text alternatives included

### G. Conversion and Footer
- Purpose: move user to quote and maintain trust details
- Content keys: case_study.cta.title, footer.*
- Components: CtaBand, FooterTrust
- Data source: cms.site.footer()
- Interactions: quote, contact
- States: success
- Responsive: standard
- Motion: micro motion.button.press purpose feedback; reduced_motion static
- Accessibility: action focus states visible

## 3. Page-Level State Requirements
- slug not-found fallback and related-case recommendations.

## 4. Responsive Adaptation Summary
Narrative remains linear on mobile, with media-first interleaving.

## 5. SEO and Metadata
- title_key: case_study.hero.title
- description_key: case_study.outcome.title
- canonical_pattern: /portfolio/[slug]
- schema_org: Article + CreativeWork + BreadcrumbList

## 6. Conversion Path
- primary_path: Outcomes -> Conversion
- secondary_path: Related Projects -> Quote
- exit_points: Portfolio, Services

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content

## 8. Performance Plan
- gallery media lazy strategy and responsive source sets.

## 9. Data Fetching Plan
- server fetch case study payload by slug.

## 10. Analytics Plan
- page_view: frontend.case_study.view
- events: frontend.case_study.quote_click, frontend.case_study.related_click

## 11. Open Questions
- Confirm permission workflow for customer photos and quotes.

## 12. Asset Brief
- required slots: hero, challenge-media, solution-media, outcome-media
