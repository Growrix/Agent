---
document_type: page-spec
page_id: auth-sign-up
route: /auth/sign-up
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: integration
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [auth.sign_up.title, auth.email.label, auth.password.label, auth.submit.sign_up]
---

## 1. Page Definition
- Purpose: register new user account.
- Target user intent: save project details and track installation progress.
- Primary CTA: auth.submit.sign_up -> /account
- Secondary CTA: auth.submit.sign_in -> /auth/sign-in
- KPI: sign_up_success_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Minimal Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: logo and support routes
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Auth Hero
- Components: HeroMediaStack
- Data source: cms.auth.signUpHero()
- States: loading, success
- Interactions: none
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: h1 structure

### C. Sign-Up Form
- Components: AuthFormCard
- Data source: integration.auth.signUp(payload)
- States: default, loading, validation_error, server_error, success
- Interactions: submit and field validation
- Motion: motion.input.focus-ring feedback; reduced_motion static
- Accessibility: label, helper, and error associations

### D. Value Promise Strip
- Components: StatusBadge
- Data source: cms.auth.valueProps()
- States: loading, empty, success
- Interactions: expand details
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: list semantics

### E. Alternate Path
- Components: CtaBand
- Data source: static
- States: success
- Interactions: switch to sign-in
- Motion: motion.button.press feedback; reduced_motion color-only
- Accessibility: focus-visible links

### F. Support Rail
- Components: SupportFabCluster
- Data source: static
- States: success
- Interactions: call, whatsapp, assistant
- Motion: motion.drawer.mobile-dock.expand clarity; reduced_motion immediate
- Accessibility: no hover-only access

### G. Minimal Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: legal links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- account creation error recovery keeps entered values except password fields.

## 4. Responsive Adaptation Summary
- mobile-first auth card with clear progression and support shortcuts.

## 5. SEO and Metadata
- title_key: auth.sign_up.title
- description_key: auth.sign_up.title
- canonical_pattern: /auth/sign-up
- schema_org: WebPage

## 6. Conversion Path
- primary_path: Sign-Up Form success -> /account
- secondary_path: Alternate Path -> /auth/sign-in
- exit_points: Home, Contact

## 7. Accessibility Plan
- landmarks: header, main, footer
- skip_link: #main-content

## 8. Performance Plan
- route bundle constrained to auth and tokenized form controls.

## 9. Data Fetching Plan
- client submit to auth sign-up integration contract.

## 10. Form Plan
- fields: full_name, email, password, confirm_password
- validation: zod.signUpSchema
- submit endpoint: integration.auth.signUp
- states: submitting, success, validation_error, server_error, offline_error
- privacy_notice_key: quote.form.privacy_note

## 11. Analytics Plan
- page_view: frontend.auth_sign_up.view
- events: frontend.auth_sign_up.submit, frontend.auth_sign_up.error

## 12. Open Questions
- Confirm legal copy for account consent and data retention.
