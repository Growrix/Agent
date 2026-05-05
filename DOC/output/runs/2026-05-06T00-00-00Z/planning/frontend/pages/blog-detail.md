---
document_type: page-spec
page_id: blog-detail
route: /blog/[slug]
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [blog_detail.hero.title, blog_detail.body.title, blog_detail.related.title, blog_detail.cta.title]
---

## 1. Page Definition
- Purpose: deliver long-form insight with conversion bridge.
- Target user intent: evaluate a specific topic deeply.
- Primary CTA: cta.get_quote -> /quote
- Secondary CTA: nav.services -> /services
- KPI: blog_detail_to_quote_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: nav
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Article Hero
- Components: HeroMediaStack
- Data source: cms.blog.bySlug(slug).hero
- States: loading, error, success
- Interactions: share and save actions
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: h1 and byline heading structure

### C. Meta and Reading Aids
- Components: StatusBadge
- Data source: cms.blog.bySlug(slug).meta
- States: loading, success
- Interactions: reading progress and section jumps
- Motion: motion.button.press feedback; reduced_motion no transform
- Accessibility: progress text equivalent

### D. Article Body
- Components: RichTextSection
- Data source: cms.blog.bySlug(slug).body
- States: loading, error, success
- Interactions: in-article anchor links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion direct render
- Accessibility: semantic headings and figure captions

### E. Author and Trust Box
- Components: CmsCardGrid
- Data source: cms.blog.bySlug(slug).author
- States: loading, empty, success
- Interactions: open author archive
- Motion: motion.card.hover-lift clarity; reduced_motion border emphasis
- Accessibility: author image alt and role labels

### F. Related Insights and CTA
- Components: BlogFeed, CtaBand
- Data source: cms.blog.related(slug)
- States: loading, empty, success
- Interactions: open related, open quote
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: related list semantics

### G. Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: support links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- slug not found routes to utility not-found page.

## 4. Responsive Adaptation Summary
- long-form reading optimized with comfortable line length and anchored jump links.

## 5. SEO and Metadata
- title_key: blog_detail.hero.title
- description_key: blog_detail.meta.read_time
- canonical_pattern: /blog/[slug]
- schema_org: BlogPosting + BreadcrumbList

## 6. Conversion Path
- primary_path: Article Body -> CTA -> Quote
- secondary_path: Related -> Service Detail -> Quote
- exit_points: Blog index, Contact

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content

## 8. Performance Plan
- prioritize hero image and defer related cards.

## 9. Data Fetching Plan
- server fetch article by slug and related list.

## 10. Analytics Plan
- page_view: frontend.blog_detail.view
- events: frontend.blog_detail.scroll_depth, frontend.blog_detail.quote_click

## 11. Open Questions
- Confirm article citation strategy for regulated claims.

## 12. Asset Brief
- required slots: article-hero, inline-figure, author-photo
