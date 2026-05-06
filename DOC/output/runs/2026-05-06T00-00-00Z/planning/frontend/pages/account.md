---
document_type: page-spec
page_id: account
route: /account
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: protected
data_source: integration
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [account.hero.title, account.projects.title, account.documents.title, account.support.title]
---

## 1. Page Definition
- Purpose: give signed-in users personalized project and support visibility.
- Target user intent: monitor status and next actions.
- Primary CTA: account.support.title -> support modal action
- Secondary CTA: cta.get_quote -> /quote
- KPI: account_engagement_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. App Header
- Components: HeaderShell, MobileSupportDock
- Data source: integration.auth.session()
- States: loading, success, error
- Interactions: account nav and sign-out
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav and tab semantics

### B. Account Hero
- Components: HeroMediaStack
- Data source: integration.account.summary()
- States: loading, empty, success
- Interactions: open project details
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: heading order and status labels

### C. Project Timeline
- Components: CaseStudyTimeline
- Data source: integration.account.projects()
- States: loading, empty, error, success
- Interactions: expand project milestones
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: ordered list and status text

### D. Documents and Resources
- Components: CmsCardGrid
- Data source: integration.account.documents()
- States: loading, empty, error, success
- Interactions: open and download docs
- Motion: motion.card.hover-lift clarity; reduced_motion border emphasis
- Accessibility: file type and size announced in link text

### E. Support Center
- Components: ChatAssistantModal, SupportFabCluster
- Data source: integration.support.channels(), integration.chatAssistant.stream(payload)
- States: default, loading, error, success
- Interactions: open assistant, create support request
- Motion: motion.modal.assistant.open clarity; reduced_motion static modal
- Accessibility: dialog focus trap and escape close

### F. Recommended Next Actions
- Components: CtaBand
- Data source: integration.account.nextActions()
- States: loading, empty, success
- Interactions: open quote or contact
- Motion: motion.button.press feedback; reduced_motion color-only
- Accessibility: action buttons keyboard parity

### G. Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: legal and support links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- unauthenticated users redirect to /auth/sign-in with returnUrl.

## 4. Responsive Adaptation Summary
- mobile uses app-like dock navigation and stacked status cards.

## 5. SEO and Metadata
- title_key: account.hero.title
- description_key: account.support.title
- canonical_pattern: /account
- schema_org: WebPage

## 6. Conversion Path
- primary_path: Project Timeline -> Support Center
- secondary_path: Recommended Actions -> Quote
- exit_points: Contact, Home

## 7. Accessibility Plan
- landmarks: header, main, footer
- skip_link: #main-content

## 8. Performance Plan
- load project details incrementally with skeletons.

## 9. Data Fetching Plan
- server verify session, then fetch account summary and project lists.

## 10. Analytics Plan
- page_view: frontend.account.view
- events: frontend.account.project_open, frontend.account.support_open

## 11. Open Questions
- Confirm document retention and signed URL expiration behavior.
