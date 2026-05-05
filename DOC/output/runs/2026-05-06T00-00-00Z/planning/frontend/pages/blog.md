---
document_type: page-spec
page_id: blog
route: /blog
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: cms
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [blog.hero.title, blog.grid.title, blog.cta.title]
---

## 1. Page Definition
- Purpose: SEO and education hub that routes readers to services and quote.
- Target user intent: learn practical solar decisions.
- Primary CTA: cta.get_quote -> /quote
- Secondary CTA: nav.services -> /services
- KPI: blog_to_quote_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: nav
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Blog Hero
- Components: HeroMediaStack
- Data source: cms.blog.hero()
- States: loading, success
- Interactions: jump to featured
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion no stagger
- Accessibility: h1 and decorative image handling

### C. Topic Filters
- Components: FilterChip
- Data source: cms.blog.topics()
- States: loading, success
- Interactions: topic and audience filtering
- Motion: motion.button.press feedback; reduced_motion color-only
- Accessibility: aria-pressed for chips

### D. Featured Insight
- Components: BlogFeed
- Data source: cms.blog.featured()
- States: loading, empty, success
- Interactions: open featured article
- Motion: motion.card.hover-lift clarity; reduced_motion border emphasis
- Accessibility: article semantics

### E. Article Grid
- Components: BlogFeed, CmsCardGrid
- Data source: cms.blog.list(filters, pagination)
- States: loading, empty, error, success
- Interactions: pagination and open detail
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: keyboard and touch parity for pagination

### F. Newsletter and CTA
- Components: CtaBand
- Data source: static
- States: success
- Interactions: subscribe and quote actions
- Motion: motion.button.press feedback; reduced_motion no transform
- Accessibility: form label and error association

### G. Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: support and legal links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- filtered empty state includes reset action.

## 4. Responsive Adaptation Summary
- desktop emphasizes featured plus grid; mobile uses sequential feed blocks.

## 5. SEO and Metadata
- title_key: blog.hero.title
- description_key: blog.hero.subtitle
- canonical_pattern: /blog
- schema_org: Blog + CollectionPage

## 6. Conversion Path
- primary_path: Featured Insight -> Service Detail -> Quote
- secondary_path: Article Grid -> Quote
- exit_points: Services, Contact

## 7. Accessibility Plan
- landmarks: header, nav, main, footer
- skip_link: #main-content

## 8. Performance Plan
- image optimization and deferred below-fold cards.

## 9. Data Fetching Plan
- server fetch topic metadata and article collections with revalidate profile.

## 10. Analytics Plan
- page_view: frontend.blog.view
- events: frontend.blog.filter, frontend.blog.article_click, frontend.blog.quote_click

## 11. Open Questions
- Confirm editorial taxonomy contract for topic and audience tags.

## 12. Asset Brief
- required slots: blog-hero, featured-article-image, article-card-thumbs
