---
document_type: master-ui-architecture
project_name: local-plumbing-marketing-site
project_archetype: marketing_site
visual_archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
industry_pack: knowledge/industries/local-services.md
build_stage: 1-architecture
depends_on:
  - ../brief.json
recommended_next_reads:
  - design-system.md
  - component-system.md
---

# Master UI Architecture — local-plumbing-marketing-site

## 1. Product Intent
A trust-first local-services marketing site that converts visitors into direct calls and qualified quote requests by making phone access immediate, proving credibility early, and keeping service + coverage information easy to scan on mobile.

## 2. Experience Direction
- Visual theme: `local-business-trust` (warm, credible, locally-rooted)
- Default mood: calm + reassuring, speed-to-contact
- Brand personality: trustworthy, clear, friendly
- Mobile posture: app-like (touch-first, sticky primary CTA)

## 3. Experience Principles
- Lead with proof before details.
- Keep the phone number visible and tappable across all primary surfaces.
- Use simple language and specific claims (license, hours, areas) over vague superlatives.
- Prefer scannable sections (cards, rails, accordions) over long walls of text.
- Keep motion subtle and functional; reduced-motion always supported.

## 4. Core Journeys
- Emergency call path: `/` → sticky mobile Call Now → call connected
- Quote request path: `/` → `/services/[slug]` → `/quote` → confirmation state
- Service research path: `/services/[slug]` → `/reviews` (proof scan) → `/contact`
- Area check path: `/areas` → `/areas/[slug]` → confirm coverage → call / quote
- Review proof path: `/reviews` → `/services/[slug]` → call / quote

## 5. Site Map
Required:
- `/` — Home
- `/services` — Services overview
- `/services/[slug]` — Service detail (dynamic)
- `/areas` — Areas served
- `/reviews` — Reviews
- `/about` — About
- `/contact` — Contact
- `/privacy` — Privacy
- `/terms` — Terms
- `/404` — Not found

Optional / recommended:
- `/areas/[slug]` — Area landing (dynamic)
- `/quote` — Quote
- `/faq` — FAQ
- `/blog` — Blog

## 6. Global Navigation Model
Header (desktop/tablet):
- Left: brand link (always returns to `/`)
- Primary nav links:
  - `global.nav.home` → `/`
  - `global.nav.services` → `/services`
  - `global.nav.areas` → `/areas`
  - `global.nav.reviews` → `/reviews`
  - `global.nav.about` → `/about`
  - `global.nav.contact` → `/contact`
- Persistent primary CTA (button): `global.cta.call_now` → `tel:` (number from CMS site settings)
- Secondary utilities:
  - Click-to-call icon/text in utility strip (hours + phone)

Footer groups:
- Services: links to `/services` and top service slugs (CMS-driven)
- Areas: links to `/areas` and top area slugs (CMS-driven)
- Company: `/about`, `/reviews`, `/faq` (if enabled)
- Legal: `/privacy`, `/terms`

Deep-link behavior:
- Brand mark + explicit Home link are both valid “Home navigation” paths.

## 7. Mobile Navigation Model
- Top bar: brand + hamburger (no dense link row)
- Drawer contents:
  - Same as primary nav + legal
  - Utility block: hours, primary phone, secondary contact options
- Sticky mobile action bar (required by `local-business-trust`):
  - Primary: `global.cta.call_now` (tel)
  - Secondary: `global.cta.get_quote` → `/quote`
  - Optional tertiary (only if present in CMS settings): `global.cta.text_us` (sms)

## 8. Shared Conversion Infrastructure
Primary CTA surfaces:
- Header (desktop/tablet)
- Hero (all primary marketing pages)
- Sticky mobile action bar (mobile only)
- Mid-page CTA band on trust-critical pages
- Footer CTA band (above legal)

Entry points:
- Click-to-call (`tel:`) uses CMS site settings phone
- Quote request path uses `/quote` (form-like experience; no auth)
- Contact page provides multi-channel contact methods (phone-first)

## 9. Frontend Visual Strategy
From `local-business-trust`:
- Light-first theme
- Spacious hero with real-photo media panel (4:3 or 16:9 depending on crop)
- Hairline borders + mild shadow for cards
- Inset surfaces for testimonials/FAQ wells
- Dense footer with trust + locality information

## 10. Shared Visual Contract
Header composition:
- Utility strip (desktop/tablet): hours + phone (clickable), optional service-area note
- Main bar: brand at left; nav; primary CTA at right
- On scroll: header compresses (reduced height), CTA remains visible

Footer composition:
- 3–4 columns (Services, Areas, Company, Legal)
- Trust density block:
  - license / insured
  - address (or “service area only” label if no public address)
  - hours
  - review aggregate slot

Mobile hero/navigation composition:
- Order: Utility (optional) → Hero headline/subheadline → Trust badges row → CTAs row → Hero media
- Sticky action bar always visible after initial viewport scroll threshold

Reference-locked surfaces:
- None declared as screenshot-locked in the brief; however the following are treated as trust-critical and should be visually reviewed:
  - Header (desktop + mobile)
  - Footer (desktop + mobile)
  - Home hero + trust strip (desktop + mobile)

Required trust data slots (sourced from CMS site settings and/or CMS content):
- business name
- primary phone
- business hours
- license (label + number)
- service area list
- review aggregate (rating + count + source label)

## 11. Layout System
- Grid: 4 columns mobile / 8 tablet / 12 desktop (per responsive rules)
- Gutters: 16 mobile / 20 tablet / 24 desktop
- Container max-width: 1200 for marketing surfaces
- Section rhythm tokens:
  - `--space-section-y-mobile`
  - `--space-section-y-tablet`
  - `--space-section-y-desktop`

## 12. Page Inventory
### Home (`/`)
- Goal: fast credibility + fastest path to call
- Primary CTA: `global.cta.call_now` → tel
- Secondary CTA: `global.cta.get_quote` → `/quote`

### Services (`/services`)
- Goal: scan offerings and pick a service
- Primary CTA: `global.cta.call_now` → tel
- Secondary CTA: `global.cta.get_quote` → `/quote`

### Service detail (`/services/[slug]`)
- Goal: understand scope + objections + take next step
- Primary CTA: `global.cta.call_now` → tel
- Secondary CTA: `global.cta.get_quote` → `/quote`

### Areas served (`/areas`)
- Goal: confirm coverage and contact quickly
- Primary CTA: `global.cta.call_now` → tel
- Secondary CTA: `global.cta.get_quote` → `/quote`

### Area landing (`/areas/[slug]`) (optional)
- Goal: SEO-driven landing; confirm coverage + show relevant services
- Primary CTA: `global.cta.call_now` → tel
- Secondary CTA: `global.cta.get_quote` → `/quote`

### Reviews (`/reviews`)
- Goal: proof and reassurance
- Primary CTA: `global.cta.call_now` → tel
- Secondary CTA: `global.cta.get_quote` → `/quote`

### About (`/about`)
- Goal: origin, team, values, professionalism
- Primary CTA: `global.cta.call_now` → tel
- Secondary CTA: `global.cta.get_quote` → `/quote`

### Contact (`/contact`)
- Goal: multi-channel reach
- Primary CTA: `global.cta.call_now` → tel
- Secondary CTA: `global.cta.get_quote` → `/quote`

### Quote (`/quote`) (optional)
- Goal: structured quote request with confirmation state
- Primary CTA: `quote.form.submit` (form-like submit)
- Secondary CTA: `global.cta.call_now` → tel

### FAQ (`/faq`) (optional)
- Goal: answer common objections
- Primary CTA: `global.cta.call_now` → tel
- Secondary CTA: `global.cta.get_quote` → `/quote`

### Blog (`/blog`) (optional)
- Goal: SEO + helpful advice; route stays lightweight
- Primary CTA: `global.cta.call_now` → tel
- Secondary CTA: `global.cta.get_quote` → `/quote`

### Privacy / Terms
- Goal: compliance and clarity

### Not found (`/404`)
- Goal: recover quickly to primary destinations

## 13. Cross-Page Components
- Header (Navbar)
- Footer
- Sticky mobile action bar
- Service card
- Testimonial card
- FAQ accordion
- CTA band

## 14. Shared State Requirements
- Navigation:
  - Header: default / scrolled / mobile-open / submenu-open
  - Mobile action bar: default / secondary-actions-open
- Listings (services, areas, reviews): loading / populated / empty / error
- Media: loading / error fallback
- Quote flow (if enabled as a form): default / validation-error / submitting / success / server-error

## 15. Motion Posture
- Duration band: macro 220–280ms, micro 150–200ms (trust archetype)
- Default easing: `--motion-easing-standard` and `--motion-easing-decel`
- Macro: section reveal only where it improves comprehension
- Micro: press feedback + focus ring + accordion reveal
- Reduced motion: swap durations to `--motion-duration-instant` and remove transforms that cause motion discomfort

## 16. Accessibility Posture
- Target: WCAG 2.1 AA
- Standard affordances: skip link, visible focus ring, semantic landmarks
- Phone links remain keyboard-focusable and announced clearly

## 17. Localization Posture
- Default locale: `en-US`
- i18n required: false
- RTL: false
- Locale switcher: not planned for v1

## 18. Implementation Stack (Frontend Only)
- Framework: Next.js (App Router) + TypeScript
- Styling: Tailwind CSS + shadcn/ui primitives
- State: React Server Components + Zustand (client-only UI state)
- Forms (if used on `/quote`): react-hook-form + zod
- Motion: CSS transitions guided by tokens (Framer Motion not required for this archetype)
- Images: `next/image` (Sanity image URL builder)

## 19. Route Map
`/`
`/services`
`/services/[slug]`
`/areas`
`/areas/[slug]`
`/reviews`
`/about`
`/contact`
`/quote`
`/faq`
`/blog`
`/privacy`
`/terms`
`/404`

## 20. File Output Inventory
Run-scoped output root: `DOC/output/runs/2026-05-05T00-00-00Z/planning/frontend/`

- `ai-context.yaml`
- `README.md`
- `visual-reference-pack.md`
- `master-ui-architecture.md`
- `design-system.md`
- `design-system.tokens.json`
- `component-system.md`
- `motion-system.md`
- `content-library.md`
- `content.en-US.json`
- `interaction-matrix.md`
- `pages/*.md`
- `components/*.md`

## 21. AI Consumption Guidance
- AI first stop: `ai-context.yaml`
- Human first stop: `README.md`
- Read order for incremental implementation:
  1. `master-ui-architecture.md`
  2. `design-system.md`
  3. `component-system.md`
  4. `motion-system.md`
  5. `content-library.md`
  6. `interaction-matrix.md`
  7. `pages/`
  8. `components/`

All generated frontend planning artifacts MUST remain under `DOC/output/runs/2026-05-05T00-00-00Z/planning/frontend/`.
