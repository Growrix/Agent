---
document_type: page-spec
page_id: auth-sign-in
route: /auth/sign-in
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: integration
depends_on: [master-ui-architecture.md, design-system.md, component-system.md, motion-system.md, content-library.md]
content_keys_used: [auth.sign_in.title, auth.email.label, auth.password.label, auth.submit.sign_in]
---

## 1. Page Definition
- Purpose: authenticate returning users.
- Target user intent: access account resources quickly.
- Primary CTA: auth.submit.sign_in -> /account
- Secondary CTA: auth.submit.sign_up -> /auth/sign-up
- KPI: sign_in_success_rate
- Min sections exempt: false

## 2. Sections in Visual Order
### A. Minimal Header
- Components: HeaderShell
- Data source: static
- States: success
- Interactions: logo to Home, help to Contact
- Motion: motion.page.enter.fade-slide hierarchy; reduced_motion static
- Accessibility: nav landmark

### B. Auth Hero
- Components: HeroMediaStack
- Data source: cms.auth.signInHero()
- States: loading, success
- Interactions: none
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: h1 heading

### C. Sign-In Form
- Components: AuthFormCard
- Data source: integration.auth.signIn(payload)
- States: default, loading, validation_error, server_error, success
- Interactions: submit, forgot-password link
- Motion: motion.input.focus-ring feedback; reduced_motion static
- Accessibility: labels, errors, aria-required

### D. Alternate Path
- Components: CtaBand
- Data source: static
- States: success
- Interactions: switch to sign-up
- Motion: motion.button.press feedback; reduced_motion color-only
- Accessibility: focus-visible links

### E. Support Rail
- Components: SupportFabCluster
- Data source: static
- States: success
- Interactions: open support channels
- Motion: motion.drawer.mobile-dock.expand clarity; reduced_motion immediate
- Accessibility: tap target and keyboard parity

### F. Trust Notes
- Components: StatusBadge
- Data source: cms.auth.trustNotes()
- States: loading, empty, success
- Interactions: open privacy page
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: readable text alternatives

### G. Minimal Footer
- Components: FooterTrust
- Data source: cms.site.footer()
- States: success
- Interactions: legal links
- Motion: motion.section.reveal.stagger hierarchy; reduced_motion static
- Accessibility: contentinfo landmark

## 3. Page-Level State Requirements
- auth errors recover with preserved email value.

## 4. Responsive Adaptation Summary
- centered auth card desktop and full-width mobile card.

## 5. SEO and Metadata
- title_key: auth.sign_in.title
- description_key: support.response_time
- canonical_pattern: /auth/sign-in
- schema_org: WebPage

## 6. Conversion Path
- primary_path: Sign-In Form success -> /account
- secondary_path: Alternate Path -> /auth/sign-up
- exit_points: Home, Contact

## 7. Accessibility Plan
- landmarks: header, main, footer
- skip_link: #main-content

## 8. Performance Plan
- keep auth route bundle minimal.

## 9. Data Fetching Plan
- client submit to auth integration contract.

## 10. Form Plan
- fields: email, password
- validation: zod.signInSchema
- submit endpoint: integration.auth.signIn
- states: submitting, success, validation_error, server_error, offline_error
- privacy_notice_key: quote.form.privacy_note

## 11. Analytics Plan
- page_view: frontend.auth_sign_in.view
- events: frontend.auth_sign_in.submit, frontend.auth_sign_in.error

## 12. Open Questions
- Confirm password reset route contract.
