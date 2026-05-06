---
document_type: interaction-matrix
project_name: local-plumbing-marketing-site
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 3-interaction-planning
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - component-system.md
  - motion-system.md
  - content-library.md
---

# Interaction Matrix - local-plumbing-marketing-site

This file defines deterministic interaction behavior (triggers, state transitions, keyboard + ARIA, and motion tokens) for all planned routes.

## 0. Global interaction rules
- No hover-only actions. Any hover affordance must have a touch or keyboard equivalent.
- Every interactive element supports keyboard activation where applicable (Enter/Space) and has visible focus styling (focus-visible or focus-within) per the design tokens.
- Drawer/sheet-like UI uses a focus trap, supports Escape to close, and restores focus to the opener.
- Motion is token-only (no raw ms). Reduced-motion uses `--motion-duration-instant` and removes transform-based perceived motion.

## 1. Canonical interaction definitions

```yaml
interactions:
  # -----------------------------
  # Global navigation + header
  # -----------------------------
  - id: global.header.drawer.open
    trigger: "click|tap"
    actor: header.hamburger_button
    before_state: "default|scrolled"
    after_state: mobile-open
    success_state: mobile-open
    error_state: default
    keyboard: "Enter|Space"
    aria:
      - "aria-expanded=true"
      - "aria-controls=header-drawer"
      - "focus-trap=true"
    motion:
      token: "--motion-duration-base"
      purpose: clarity
      reduced: "--motion-duration-instant"
    notes:
      - "Move focus to first drawer link on open; restore focus to hamburger on close."
      - "Escape closes the drawer."

  - id: global.header.drawer.close
    trigger: "click|tap|Escape"
    actor: header.drawer_close_button|drawer_backdrop
    before_state: mobile-open
    after_state: "default|scrolled"
    success_state: "default|scrolled"
    error_state: mobile-open
    keyboard: Escape
    aria:
      - "aria-expanded=false"
      - "focus-trap=false"
    motion:
      token: "--motion-duration-base"
      purpose: clarity
      reduced: "--motion-duration-instant"

  - id: global.nav.link.navigate
    trigger: "click|tap"
    actor: nav.link
    before_state: default
    after_state: active
    success_state: default
    error_state: default
    keyboard: "Enter|Space"
    aria:
      - "aria-current=page (current route only)"
    motion:
      token: "--motion-duration-fast"
      purpose: feedback
      reduced: "--motion-duration-instant"

  # -----------------------------
  # Links + CTAs
  # -----------------------------
  - id: link.internal.navigate
    trigger: "click|tap"
    actor: link.internal
    before_state: default
    after_state: active
    success_state: default
    error_state: default
    keyboard: "Enter|Space"
    aria: []
    motion:
      token: "--motion-duration-fast"
      purpose: feedback
      reduced: "--motion-duration-instant"

  - id: link.external.tel
    trigger: "click|tap"
    actor: link.tel
    before_state: default
    after_state: active
    success_state: default
    error_state: default
    keyboard: "Enter|Space"
    aria: []
    motion:
      token: "--motion-duration-fast"
      purpose: feedback
      reduced: "--motion-duration-instant"
    notes:
      - "Uses tel: with cms.siteSettings.phone."

  - id: link.external.mailto
    trigger: "click|tap"
    actor: link.mailto
    before_state: default
    after_state: active
    success_state: default
    error_state: default
    keyboard: "Enter|Space"
    aria: []
    motion:
      token: "--motion-duration-fast"
      purpose: feedback
      reduced: "--motion-duration-instant"

  # -----------------------------
  # Cards + grids
  # -----------------------------
  - id: card.hover_affordance
    trigger: hover
    actor: card
    before_state: default
    after_state: hover
    success_state: hover
    error_state: default
    keyboard: none
    aria: []
    motion:
      token: "--motion-duration-fast"
      purpose: hierarchy
      reduced: "--motion-duration-instant"
    notes:
      - "Desktop only: hover lift is visual-only; no information is gated behind hover."
      - "Touch equivalent: card remains fully tappable; press feedback handled by the inner link/button."

  - id: card.focus_within
    trigger: focus
    actor: card.inner_link
    before_state: default
    after_state: focus-within
    success_state: focus-within
    error_state: default
    keyboard: Tab
    aria: []
    motion:
      token: "--motion-duration-fast"
      purpose: clarity
      reduced: "--motion-duration-instant"

  - id: card.navigate
    trigger: "click|tap"
    actor: card.inner_link
    before_state: default
    after_state: active
    success_state: default
    error_state: default
    keyboard: "Enter|Space"
    aria: []
    motion:
      token: "--motion-duration-fast"
      purpose: feedback
      reduced: "--motion-duration-instant"

  # -----------------------------
  # Accordions (FAQ + inline blog posts)
  # -----------------------------
  - id: accordion.open
    trigger: "click|tap"
    actor: accordion_item.trigger
    before_state: closed
    after_state: open
    success_state: open
    error_state: closed
    keyboard: "Enter|Space"
    aria:
      - "aria-expanded=true"
      - "aria-controls=<panel_id>"
    motion:
      token: "--motion-duration-base"
      purpose: clarity
      reduced: "--motion-duration-instant"
    notes:
      - "Arrow keys move between triggers; Home/End jump in the list (where supported by the accordion implementation)."

  - id: accordion.close
    trigger: "click|tap"
    actor: accordion_item.trigger
    before_state: open
    after_state: closed
    success_state: closed
    error_state: open
    keyboard: "Enter|Space"
    aria:
      - "aria-expanded=false"
      - "aria-controls=<panel_id>"
    motion:
      token: "--motion-duration-base"
      purpose: clarity
      reduced: "--motion-duration-instant"

  # -----------------------------
  # Testimonials (expand/collapse)
  # -----------------------------
  - id: testimonial.expand
    trigger: "click|tap"
    actor: testimonial.read_more_button
    before_state: default
    after_state: expanded
    success_state: expanded
    error_state: default
    keyboard: "Enter|Space"
    aria:
      - "aria-expanded=true"
    motion:
      token: "--motion-duration-base"
      purpose: clarity
      reduced: "--motion-duration-instant"

  - id: testimonial.collapse
    trigger: "click|tap"
    actor: testimonial.read_less_button
    before_state: expanded
    after_state: default
    success_state: default
    error_state: expanded
    keyboard: "Enter|Space"
    aria:
      - "aria-expanded=false"
    motion:
      token: "--motion-duration-base"
      purpose: clarity
      reduced: "--motion-duration-instant"

  # -----------------------------
  # ActionBar (mobile sticky)
  # -----------------------------
  - id: action_bar.call_now
    trigger: "click|tap"
    actor: action_bar.call_button
    before_state: default
    after_state: active
    success_state: default
    error_state: default
    keyboard: "Enter|Space"
    aria: []
    motion:
      token: "--motion-duration-fast"
      purpose: feedback
      reduced: "--motion-duration-instant"

  - id: action_bar.get_quote
    trigger: "click|tap"
    actor: action_bar.quote_button
    before_state: default
    after_state: active
    success_state: default
    error_state: default
    keyboard: "Enter|Space"
    aria: []
    motion:
      token: "--motion-duration-fast"
      purpose: feedback
      reduced: "--motion-duration-instant"

  - id: action_bar.secondary.open
    trigger: "click|tap"
    actor: action_bar.more_button
    before_state: default
    after_state: with-secondary-actions-open
    success_state: with-secondary-actions-open
    error_state: default
    keyboard: "Enter|Space"
    aria:
      - "aria-expanded=true"
    motion:
      token: "--motion-duration-base"
      purpose: clarity
      reduced: "--motion-duration-instant"

  - id: action_bar.secondary.close
    trigger: "click|tap|Escape"
    actor: action_bar.more_button|action_bar.backdrop
    before_state: with-secondary-actions-open
    after_state: default
    success_state: default
    error_state: with-secondary-actions-open
    keyboard: Escape
    aria:
      - "aria-expanded=false"
    motion:
      token: "--motion-duration-base"
      purpose: clarity
      reduced: "--motion-duration-instant"

  # -----------------------------
  # Forms (Quote)
  # -----------------------------
  - id: form.field.focus
    trigger: focus
    actor: form_field
    before_state: "default|filled|error"
    after_state: focus-visible
    success_state: focus-visible
    error_state: "default|filled|error"
    keyboard: Tab
    aria:
      - "aria-describedby=<helper_or_error_id>"
    motion:
      token: "--motion-duration-fast"
      purpose: clarity
      reduced: "--motion-duration-instant"

  - id: form.submit.quote
    trigger: "click|tap|Enter"
    actor: quote_form.submit_button
    before_state: default
    after_state: submitting
    success_state: success
    error_state: "validation-error|server-error"
    keyboard: Enter
    aria:
      - "aria-busy=true (form while submitting)"
    motion:
      token: "--motion-duration-fast"
      purpose: feedback
      reduced: "--motion-duration-instant"
    notes:
      - "Tier-basic behavior: build mailto: payload and open email client; if blocked, show server-error with Call Now fallback."
      - "On validation-error: focus the first invalid field; announce error summary via aria-live assertive."

  # -----------------------------
  # Error recovery
  # -----------------------------
  - id: system.retry_fetch
    trigger: "click|tap"
    actor: error_state.retry_button
    before_state: error
    after_state: loading
    success_state: populated
    error_state: error
    keyboard: "Enter|Space"
    aria:
      - "aria-busy=true (section while retrying)"
    motion:
      token: "--motion-duration-fast"
      purpose: feedback
      reduced: "--motion-duration-instant"

  # -----------------------------
  # Optional scroll-driven reveals (system-triggered)
  # -----------------------------
  - id: section.reveal.on_scroll
    trigger: intersection
    actor: section
    before_state: default
    after_state: revealed
    success_state: revealed
    error_state: default
    keyboard: none
    aria: []
    motion:
      token: "--motion-duration-slow"
      purpose: hierarchy
      reduced: "--motion-duration-instant"

  - id: stat.count_up.start
    trigger: intersection
    actor: stat_block
    before_state: default
    after_state: count-up-running
    success_state: count-up-complete
    error_state: default
    keyboard: none
    aria: []
    motion:
      token: "--motion-duration-cinematic"
      purpose: hierarchy
      reduced: "--motion-duration-instant"
    notes:
      - "Reduced-motion renders the final value immediately (no counting animation)."
```

## 2. Coverage map (route -> section -> interaction IDs)

```yaml
coverage:
  globals_apply_to: all_routes
  global_sections:
    - id: global.header
      interactions:
        - global.header.drawer.open
        - global.header.drawer.close
        - global.nav.link.navigate
        - link.external.tel
        - link.internal.navigate

    - id: global.footer
      interactions:
        - link.internal.navigate
        - link.external.tel

    - id: global.action_bar
      interactions:
        - action_bar.call_now
        - action_bar.get_quote
        - action_bar.secondary.open
        - action_bar.secondary.close

routes:
  - route: "/"
    page_id: home
    sections:
      - id: home.hero
        interactions: [link.external.tel, link.internal.navigate]
      - id: home.proof_strip
        interaction: none
        interactions: []
      - id: home.services_preview
        interactions: [card.hover_affordance, card.focus_within, card.navigate, link.internal.navigate]
      - id: home.areas_preview
        interactions: [card.hover_affordance, card.focus_within, card.navigate, link.internal.navigate]
      - id: home.reviews_preview
        interactions: [testimonial.expand, testimonial.collapse, link.internal.navigate]
      - id: home.faq_preview
        interactions: [accordion.open, accordion.close, link.internal.navigate]
      - id: home.pre_footer_cta
        interactions: [link.external.tel, link.internal.navigate]

  - route: "/services"
    page_id: services
    sections:
      - id: services.hero
        interactions: [link.external.tel, link.internal.navigate]
      - id: services.grid
        interactions: [card.hover_affordance, card.focus_within, card.navigate]
      - id: services.process
        interaction: none
        interactions: []
      - id: services.areas_teaser
        interactions: [link.internal.navigate]
      - id: services.faq
        interactions: [accordion.open, accordion.close]
      - id: services.pre_footer_cta
        interactions: [link.external.tel, link.internal.navigate]

  - route: "/services/[slug]"
    page_id: services-[slug]
    sections:
      - id: service_detail.breadcrumbs
        interactions: [link.internal.navigate]
      - id: service_detail.hero
        interactions: [link.external.tel, link.internal.navigate]
      - id: service_detail.overview
        interaction: none
        interactions: []
      - id: service_detail.what_we_do
        interaction: none
        interactions: []
      - id: service_detail.pricing
        interaction: none
        interactions: []
      - id: service_detail.expectations
        interaction: none
        interactions: []
      - id: service_detail.process
        interaction: none
        interactions: []
      - id: service_detail.reviews
        interactions: [testimonial.expand, testimonial.collapse]
      - id: service_detail.faq
        interactions: [accordion.open, accordion.close]
      - id: service_detail.pre_footer_cta
        interactions: [link.external.tel, link.internal.navigate]

  - route: "/areas"
    page_id: areas
    sections:
      - id: areas.hero
        interactions: [link.external.tel, link.internal.navigate]
      - id: areas.grid
        interactions: [card.hover_affordance, card.focus_within, card.navigate]
      - id: areas.coverage_notes
        interaction: none
        interactions: []
      - id: areas.services_teaser
        interactions: [link.internal.navigate]
      - id: areas.faq
        interactions: [accordion.open, accordion.close]
      - id: areas.pre_footer_cta
        interactions: [link.external.tel, link.internal.navigate]

  - route: "/areas/[slug]"
    page_id: areas-[slug]
    sections:
      - id: area_detail.breadcrumbs
        interactions: [link.internal.navigate]
      - id: area_detail.hero
        interactions: [link.external.tel, link.internal.navigate]
      - id: area_detail.coverage
        interaction: none
        interactions: []
      - id: area_detail.services
        interactions: [card.hover_affordance, card.focus_within, card.navigate]
      - id: area_detail.reviews
        interactions: [testimonial.expand, testimonial.collapse]
      - id: area_detail.faq
        interactions: [accordion.open, accordion.close]
      - id: area_detail.pre_footer_cta
        interactions: [link.external.tel, link.internal.navigate]

  - route: "/reviews"
    page_id: reviews
    sections:
      - id: reviews.hero
        interactions: [link.external.tel, link.internal.navigate]
      - id: reviews.aggregate
        interactions: [stat.count_up.start]
      - id: reviews.grid
        interactions: [testimonial.expand, testimonial.collapse]
      - id: reviews.feedback
        interaction: none
        interactions: []
      - id: reviews.services_teaser
        interactions: [link.internal.navigate]
      - id: reviews.faq
        interactions: [accordion.open, accordion.close]
      - id: reviews.pre_footer_cta
        interactions: [link.external.tel, link.internal.navigate]

  - route: "/about"
    page_id: about
    sections:
      - id: about.hero
        interactions: [link.external.tel, link.internal.navigate]
      - id: about.story
        interaction: none
        interactions: []
      - id: about.values
        interaction: none
        interactions: []
      - id: about.credentials
        interactions: [stat.count_up.start]
      - id: about.coverage
        interactions: [link.internal.navigate]
      - id: about.reviews
        interactions: [testimonial.expand, testimonial.collapse, link.internal.navigate]
      - id: about.pre_footer_cta
        interactions: [link.external.tel, link.internal.navigate]

  - route: "/contact"
    page_id: contact
    sections:
      - id: contact.hero
        interactions: [link.external.tel, link.internal.navigate]
      - id: contact.methods
        interactions: [link.external.tel, link.internal.navigate]
      - id: contact.prep
        interaction: none
        interactions: []
      - id: contact.areas_summary
        interactions: [link.internal.navigate]
      - id: contact.faq
        interactions: [accordion.open, accordion.close]
      - id: contact.pre_footer_cta
        interactions: [link.external.tel, link.internal.navigate]

  - route: "/quote"
    page_id: quote
    sections:
      - id: quote.hero
        interactions: [link.external.tel]
      - id: quote.form
        interactions: [form.field.focus, form.submit.quote]
      - id: quote.next_steps
        interaction: none
        interactions: []
      - id: quote.privacy_note
        interactions: [link.internal.navigate]
      - id: quote.faq
        interactions: [accordion.open, accordion.close]
      - id: quote.pre_footer_cta
        interactions: [link.external.tel]

  - route: "/faq"
    page_id: faq
    sections:
      - id: faq.hero
        interactions: [link.external.tel, link.internal.navigate]
      - id: faq.list
        interactions: [accordion.open, accordion.close]
      - id: faq.pricing
        interaction: none
        interactions: []
      - id: faq.coverage
        interactions: [link.internal.navigate]
      - id: faq.pre_footer_cta
        interactions: [link.external.tel, link.internal.navigate]

  - route: "/blog"
    page_id: blog
    sections:
      - id: blog.hero
        interactions: [link.external.tel]
      - id: blog.list
        interactions: [accordion.open, accordion.close]
      - id: blog.safety_cta
        interactions: [link.external.tel, link.internal.navigate]

  - route: "/privacy"
    page_id: privacy
    sections:
      - id: privacy.hero
        interaction: none
        interactions: []
      - id: privacy.content
        interactions: [link.internal.navigate]
      - id: privacy.contact_cta
        interactions: [link.external.tel]

  - route: "/terms"
    page_id: terms
    sections:
      - id: terms.hero
        interaction: none
        interactions: []
      - id: terms.content
        interactions: [link.internal.navigate]
      - id: terms.contact_cta
        interactions: [link.external.tel]

  - route: "/404"
    page_id: not_found
    sections:
      - id: not_found.hero
        interactions: [link.external.tel]
      - id: not_found.suggestions
        interactions: [card.hover_affordance, card.focus_within, card.navigate]
      - id: not_found.pre_footer_cta
        interactions: [link.external.tel, link.internal.navigate]
```
