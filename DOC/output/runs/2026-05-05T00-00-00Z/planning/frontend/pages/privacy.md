---
document_type: page-spec
page_id: privacy
route: /privacy
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
build_stage: 4-page-implementation
auth: public
data_source: static
min_sections_exempt: true
min_sections_exempt_reason: legal_page
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - component-system.md
  - motion-system.md
  - content-library.md
  - interaction-matrix.md
content_keys_used:
  - global.nav.home
  - global.nav.services
  - global.nav.areas
  - global.nav.reviews
  - global.nav.about
  - global.nav.contact
  - global.cta.call_now
  - global.cta.get_quote
  - global.header.hours_label
  - privacy.hero.headline
  - privacy.hero.subheadline
  - privacy.body
  - privacy.updated_label
  - privacy.contact_label
  - component.action_bar.aria_label
  - seo.privacy.meta_title
  - seo.privacy.meta_description
  - seo.privacy.og_title
  - seo.privacy.og_description
---

# Privacy (`/privacy`)

## 1. Page Definition
- Purpose: Present the site privacy policy in plain language.
- Target user intent: "What data do you collect and why?"
- Primary CTA: `global.cta.call_now` -> `tel:` (from `cms.siteSettings.phone`).
- Secondary CTA: `global.cta.get_quote` -> `/quote`.
- KPI to optimize: none (compliance page).
- Min sections exempt?: true (legal).

## 2. Sections in Visual Order

### 1. Global Header
- **Purpose:** Keep navigation and click-to-call reachable.
- **Content keys:**
  - global.nav.*
  - global.cta.call_now
  - global.header.hours_label
- **Components:** Header
- **Data source:** `cms.siteSettings`
- **Interactions:**
  - Drawer open/close (mobile)
  - Click-to-call (`tel:`)
- **States:** default, scrolled, mobile-open
- **Responsive:**
  - desktop: utility strip + full nav + Call Now CTA
  - tablet: same as desktop with tighter spacing
  - mobile: hamburger opens drawer; primary CTA is handled by ActionBar
- **Motion:**
  - macro: drawer open/close (purpose: clarity)
  - micro: focus ring (purpose: clarity)
  - micro: press feedback (purpose: feedback)
  - reduced-motion: instant open/close
- **Accessibility:**
  - `<header>` + `<nav>` landmarks; skip link to `#main-content`; focus trap in drawer

### 2. Privacy Hero
- **Purpose:** Provide title and short summary before policy text.
- **Content keys:**
  - privacy.hero.headline
  - privacy.hero.subheadline
- **Components:** HeroSection
- **Data source:** static
- **Interactions:**
  - None
- **States:** default
- **Responsive:**
  - desktop: centered heading block
  - tablet: same as desktop
  - mobile: stacked with comfortable line length
- **Motion:**
  - macro: none
  - micro: none
  - reduced-motion: N/A
- **Accessibility:**
  - H1 present; intro copy is plain text

### 3. Privacy Content
- **Purpose:** Render the policy body and last-updated label.
- **Content keys:**
  - privacy.body
  - privacy.updated_label
- **Components:** DetailSection, Divider
- **Data source:** static
- **Interactions:**
  - Optional anchor links if present in content
- **States:** default
- **Responsive:**
  - desktop: single column with readable max-width
  - tablet: same as desktop
  - mobile: single column; no sidebars
- **Motion:**
  - macro: none
  - micro: none
  - reduced-motion: N/A
- **Accessibility:**
  - Preserve semantic headings and lists from the rendered content

### 4. Privacy Contact CTA
- **Purpose:** Provide a clear next step for privacy questions.
- **Content keys:**
  - privacy.contact_label
  - global.cta.call_now
- **Components:** CTASection, Button
- **Data source:** static + `cms.siteSettings.phone`
- **Interactions:**
  - Click-to-call (`tel:`)
- **States:** default
- **Responsive:**
  - desktop: CTA band with single primary action
  - tablet: same as desktop
  - mobile: stacked CTA
- **Motion:**
  - micro: press feedback (purpose: feedback)
  - reduced-motion: instant/no scale
- **Accessibility:**
  - CTA is a link-button with clear label

### 5. Global Footer
- **Purpose:** Deep links and trust/contact block.
- **Content keys:**
  - global.footer.*
  - trust.*
- **Components:** Footer
- **Data source:** `cms.siteSettings` + `cms.groq.services.top` + `cms.groq.areas.top`
- **Interactions:**
  - Navigate links
  - Click-to-call (`tel:`)
- **States:** default
- **Responsive:**
  - desktop: multi-column with trust block
  - tablet: 2-3 columns depending on space
  - mobile: stacked groups
- **Motion:**
  - macro: none
  - micro: none
  - reduced-motion: N/A
- **Accessibility:**
  - `<footer>` landmark; nav groups are lists

### 6. Sticky Mobile ActionBar
- **Purpose:** Keep primary conversion actions reachable on mobile.
- **Content keys:**
  - component.action_bar.aria_label
  - global.cta.call_now
  - global.cta.get_quote
- **Components:** ActionBar
- **Data source:** `cms.siteSettings.phone` + static labels
- **Interactions:**
  - Tap Call Now / Get Quote
- **States:** default, with-secondary-actions-open
- **Responsive:**
  - desktop: hidden
  - tablet: hidden
  - mobile: sticky bottom; safe-area aware
- **Motion:**
  - micro: expand/collapse (purpose: clarity)
  - reduced-motion: instant
- **Accessibility:**
  - labeled region; focus order left-to-right

## 3. Page-Level State Requirements
- Loading: header/footer render after `cms.siteSettings` resolves; main policy sections are static.
- Error fallback: if `cms.siteSettings` fails, render Header/Footer with nav only; hide click-to-call; optionally show `AlertMessage(error)` in main.
- Empty: not applicable (static content).
- Auth: public.
- Offline: static policy remains readable; disable click-to-call if phone is unavailable.

## 4. Responsive Adaptation Summary
- Desktop/tablet: standard header + centered hero + single-column legal body + footer columns.
- Mobile: drawer navigation; legal body stays single column; ActionBar provides Call Now / Get Quote.

## 5. SEO and Metadata
```yaml
seo:
  title:        seo.privacy.meta_title
  description:  seo.privacy.meta_description
  og_title:     seo.privacy.og_title
  og_description: seo.privacy.og_description
  og_image:     cms.siteSettings.ogImage
  canonical:    "/privacy"
  schema_org:
    "@context": "https://schema.org"
    "@type": "LocalBusiness"
    properties:
      name: cms.siteSettings.businessName
      telephone: cms.siteSettings.phone
      address: cms.siteSettings.address
      openingHours: cms.siteSettings.openingHours
      url: "/privacy"
```

## 6. Conversion Path
- primary_path: Privacy contact CTA -> Call Now
- secondary_path: ActionBar -> Get Quote -> Quote form
- exit_points: /, /services, /areas, /contact

## 7. Accessibility Plan
```yaml
accessibility:
  landmarks: [header, nav, main, footer]
  skip_link: "#main-content"
  heading_outline:
    - h1: privacy.hero.headline
    - h2: privacy.contact_label
  notable_aria:
    - "Header drawer toggle uses aria-expanded and aria-controls."
  motion_prefers_reduced:
    - "Instant drawer and ActionBar expand/collapse."
```

## 8. Performance Plan
```yaml
performance:
  lcp_target_ms: 2500
  hero_image:
    path_or_key: none
    format: avif
    weight_kb_target: 0
    priority: false
  route_js_budget_kb_gz: 60
  client_components:
    - Header: mobile drawer state
    - ActionBar: sticky state
  defer_below_fold: true
```

## 9. Data Fetching Plan
- Site settings (`cms.siteSettings`):
  - Fetch location: server layout (shared across routes)
  - Cache strategy: `force-cache` + webhook revalidation
  - Failure mode: render nav-only header/footer; hide phone-dependent CTAs

## 10. Form Plan
- No form on this page.

## 11. Analytics Plan
- Page-view: `page_view` { page_id: "privacy" }
- Events:
  - `cta_call_click` { source: "header" | "privacy_cta" | "action_bar" }
  - `cta_get_quote_click` { source: "action_bar" }

## 12. Open Questions
- Legal review required for final policy language.

## 13. Asset Brief
- Required photo slots: none.
- Alt-text intent: N/A
