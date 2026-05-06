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
- Purpose: site-wide wayfinding; Home path always visible
- Content keys: nav.*
- Data source: static
- States: success
- Interactions: navigation, call/WhatsApp shortcut
- Responsive: full nav desktop; compact + mobile dock mobile
- Motion: motion.page.enter.fade-slide (variant: `headerEnter`) purpose hierarchy; reduced_motion static
- Accessibility: nav landmark, focus-visible links

### B. About Hero
- Purpose: user immediately understands the company's identity and human team — emotional trust before facts
- Content keys: about.hero.title, about.hero.mission, about.hero.years_badge, about.hero.founded_label
- Data source: cms.about.hero()
- States: loading (skeleton), success
- Interactions: scroll-to-story anchor link
- Responsive:
  - desktop: split panel — left 60% team editorial portrait with soft-focus depth; right 40% mission statement + year-founded badge, vertically centered
  - tablet: portrait spans full width as background; mission statement overlaid in bottom-left frosted panel
  - mobile: portrait stacked above mission text; year badge anchored to image bottom-right corner
- Motion: motion.section.reveal.stagger (variant: `aboutHeroReveal`) purpose hierarchy; reduced_motion static render
- Accessibility: h1 in right panel; portrait img alt describes team context (not decorative)
- Visual contract:
  - desktop composition: 60/40 horizontal split; left = portrait photo (faces in upper-third, soft-focus background); right = mission copy with 3xl headline right-aligned; year-founded badge as a trust chip
  - tablet composition: full-bleed portrait with frosted-glass overlay panel in bottom-left quadrant
  - mobile composition: portrait image first (16:9 crop), mission text below, CTA below text
  - media framing: portrait-orientation editorial photo; warm-toned, professional not sterile
  - trust surface: year-founded badge, license number chip, top-right of right panel
- visual-differentiation-note: Hero is portrait-dominant + narrative-split — distinctly different from Home (campaign photo + conversion), Services (cinematic landscape banner), and Portfolio (bleed-grid). No other route uses a portrait-orientation team photo as hero anchor.

### C. Story and Mission
- Purpose: user reads a genuine founding story and understands the why behind the business
- Content keys: about.story.headline, about.story.body, about.story.founder_name, about.story.founding_year, about.mission.statement
- Data source: cms.about.story()
- States: loading (skeleton), empty (fallback static text), success
- Interactions: read-more disclosure for longer body
- Responsive:
  - desktop: two-column — pull-quote left, narrative paragraphs right
  - mobile: single column, pull-quote styled as a blockquote
- Motion: motion.section.reveal.stagger (variant: `storyReveal`) purpose hierarchy; reduced_motion immediate paint
- Accessibility: heading level h2, pull-quote as `<blockquote>`, text contrast WCAG AA

### D. Certifications and Trust
- Purpose: user sees third-party validated credentials — removes doubt about legitimacy
- Content keys: about.certifications.title, about.certifications.items.*, about.certifications.footnote
- Data source: cms.about.certifications()
- States: loading (badge skeleton row), empty (fallback summary text), success
- Interactions: tap badge to open credential detail sheet
- Responsive:
  - desktop: horizontal badge rail, 4–6 items in a row
  - mobile: 2-column badge grid
- Motion: motion.section.reveal.stagger (variant: `badgeReveal`) purpose hierarchy; reduced_motion static
- Accessibility: each badge includes text label (not color/icon-only); credential detail sheet is keyboard-accessible

### E. Team and Installation Process
- Purpose: user sees real people and understands how the install journey works — humanises and de-risks
- Content keys: about.team.title, about.team.items.*, about.process.title, about.process.steps.*
- Data source: cms.about.team(), cms.about.process()
- States: loading (card skeleton), empty, success
- Interactions: open team member profile card (name, role, years experience, headshot); process step expansion
- Responsive:
  - desktop: team cards in 3-column grid; process timeline horizontal below
  - tablet: team 2-column; process vertical
  - mobile: team single-column; process vertical stepper
- Motion: motion.card.hover-lift (variant: `teamCardHover`) purpose clarity; reduced_motion border emphasis only; process steps use motion.section.reveal.stagger
- Accessibility: profile images have alt with name + role; timeline uses `<ol>` semantics

### F. Testimonials Bridge + CTA
- Purpose: reinforce credibility with customer voices and close the page with a conversion action
- Content keys: about.testimonials.label, about.final_cta.title, about.final_cta.sub, cta.get_quote, cta.book_call
- Data source: cms.testimonials.featured()
- States: loading, empty, success
- Interactions: quote calculator open; schedule call action
- Responsive:
  - desktop: testimonial rail + CTA side-by-side
  - mobile: stacked — testimonials above, CTA block below
- Motion: motion.button.press (variant: `ctaPress`) purpose feedback; reduced_motion color shift only
- Accessibility: CTA buttons have focus-visible rings; testimonials in list context

### G. Footer
- Purpose: site-wide exit links, legal, support contacts, social
- Content keys: footer.*
- Data source: cms.site.footer()
- States: success
- Interactions: support channel links, nav links
- Responsive: multi-column desktop, stacked mobile
- Motion: motion.section.reveal.stagger (variant: `footerReveal`) purpose hierarchy; reduced_motion static
- Accessibility: `<footer>` with `contentinfo` landmark

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
