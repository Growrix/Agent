# Master UI Architecture

## Product Intent
Create a high-conversion, image-forward solar installation frontend that builds trust quickly, educates clearly, and converts visitors through quote, call, WhatsApp, and assisted chat paths.

## Experience Direction
- Mobile-first, app-like flows for quote and support.
- Trust-led storytelling using real project imagery.
- Dynamic CMS content for all editorial and marketing surfaces.
- Frontend-only implementation boundaries with API-contract consumption.

## Experience Principles
- Trust in first scroll.
- Guidance before form friction.
- Visual proof over claims.
- Conversion paths always visible.
- Home return path always visible.

## Core Journeys
- Discovery to quote: Home -> Services -> Service Detail -> Instant Quote -> Submission state.
- Proof to contact: Home -> Portfolio -> Case Study -> Quote or Call.
- Insight to conversion: Blog -> Blog Detail -> Related Service -> Quote.
- Returning user: Sign in -> Account dashboard -> Project status and documents.
- Fast support: Any page -> WhatsApp/Call/AI icon -> contact channel.

## Site Map
- / (Home)
- /services
- /services/[slug]
- /portfolio
- /portfolio/[slug]
- /testimonials
- /blog
- /blog/[slug]
- /quote
- /contact
- /about
- /auth/sign-in
- /auth/sign-up
- /account
- /privacy
- /terms
- /404

## Global Navigation
Primary desktop nav items:
- Home
- Services
- Portfolio
- Testimonials
- Blog
- Quote
- Contact

Persistent utilities:
- Call action
- WhatsApp action
- AI assistant launcher
- Sign in

## Mobile Navigation
- Bottom app dock with Home, Services, Quote, Support, Account.
- Sticky quote CTA rail above dock on marketing routes.
- Support speed dial for Call, WhatsApp, AI assistant.

## Shared Conversion Infrastructure
- Sticky quote trigger on all marketing pages.
- Inline and modal quote entry points routed to /quote.
- Contact rail in footer and mobile dock.
- Testimonial and case-study conversion rails.

## Frontend Visual Strategy
Visual archetype: local-business-trust.
- Bright surfaces with high-legibility hierarchy.
- Real installation photography as first-class layout element.
- Warm CTA accent reserved for conversion intent.
- Motion profile: reassuring, readable transitions.

## Layout System
- Content shell with tokenized max-width tiers.
- Section rhythm driven by semantic spacing tokens.
- Desktop: layered media and copy panels.
- Mobile: single-column card stacks with sticky action anchors.

## Visual Differentiation Map

Every public marketing route must have a measurably distinct hero composition. This map is binding for the developer and is checked by F15.

| Route | Hero layout split | Media framing | Typographic scale relationship |
|---|---|---|---|
| `/` (Home) | 55/45 copy-left / media-right with foreground image layered over background | Full-bleed background panel; foreground photo cropped at mid-torso, overflowing bottom edge | XL display headline (5xl) + body sub at 2xl; CTA buttons stack vertically below sub |
| `/services` | Full-width cinematic banner; copy centered in lower-third overlay | Wide landscape: solar panels on rooftop, sky fill; warm gradient overlay at bottom 40% | Large headline centered (4xl) with short descriptor below; trust-chip row anchored to bottom edge |
| `/portfolio` | Masonry-preview intro: 3-column media grid bleeding to edges, with overlay title card top-left | First 3 project images as bleed-grid; no single hero photo — the grid IS the hero | Compact headline + subtext inside a frosted-glass card overlaid top-left |
| `/about` | Split panel: left = staff/team editorial portrait (60% width); right = mission statement with year-founded badge, vertically centered | Portrait-style team photo; soft-focus depth; subject faces in upper-third | Headline (3xl) right-aligned inside right panel; mission statement text wraps tightly |
| `/testimonials` | Quote-forward layout: giant pull-quote marks (decorative, aria-hidden) behind centered headline; no photography in hero zone | No media; instead a star-rating aggregate tile floats right of headline | Extra-large italic headline (4xl italic) with aggregate-rating tile beside it |
| `/blog` | Editorial masthead: left-side large featured-post image card; right-side 2 stacked smaller post cards | Featured image fills left column (2/5 width) with category chip + title overlay | Right column: compact card titles (xl) + dates; masthead label in sm caps above the grid |
| `/contact` | Two-column utility panel: left = contact channels (call, WhatsApp, email, form link); right = map or address block | No hero photography; brand-accent background surface with icon-driven channel list | Page title (3xl) above channel list; each channel as a large tappable row with icon + label |
| `/quote` | Focused single-column funnel with step indicator at top; no sidebars | No photography in hero zone; calculator UI fills the content well | Step-indicator (sm caps) → form headline (3xl) → helper copy (base); conversion-focused minimal chrome |
| `/auth/sign-in` | Centered card on brand-gradient or split brand-surface; no full-bleed photography | Brand pattern or gradient surface; no editorial imagery | Logo mark at top; headline (2xl) centered in card; form below |
| `/auth/sign-up` | Same centered card pattern as sign-in but with social proof strip (logo bar) below the card | Same gradient surface; brief value proposition below form | Same scale as sign-in; value strip uses sm caps + partner logo row |

**Developer note:** This map is a F15 hard gate. Two routes may not share the same values in all three columns simultaneously. If two routes share layout split, they must differ in media framing. If they share media framing, they must differ in typographic scale relationship.


- Home: campaign hero, trust strips, instant estimate entry, featured projects.
- Services: service taxonomy, install packages, financing and warranty context.
- Service detail: scoped offering, process, inclusions, savings cues, conversion.
- Portfolio: filterable project gallery.
- Case study detail: before/after, constraints, outcome, customer quote.
- Testimonials: social proof archive and scoreboards.
- Blog + detail: education and SEO content hub.
- Quote: instant calculator and lead capture funnel.
- Contact: multi-channel support and scheduling intent.
- About: company proof, certifications, mission.
- Sign in / sign up / account: personalized progress and resources.
- Legal pages + not found utility surfaces.

## Cross-Page Components
- HeaderShell
- FooterTrust
- MobileSupportDock
- SupportFabCluster
- HeroMediaStack
- CtaBand
- QuoteCalculatorPanel
- CmsCardGrid
- TestimonialRail
- CaseStudyTimeline
- BlogFeed
- AuthFormCard
- ChatAssistantModal

## Shared State Requirements
- loading, empty, error, success for every dynamic section.
- offline and reconnect banners for chat and auth-aware surfaces.
- optimistic interaction state for calculator step transitions.

## Motion Posture
- Motion is functional only: clarity, feedback, hierarchy.
- Every transition has reduced-motion equivalent preserving end state.

## Accessibility Posture
- WCAG AA baseline across all routes.
- Keyboard and focus-visible parity for all actionable elements.
- No hover-only discovery; touch-first alternatives are mandatory.
- Skip link and landmark discipline on every page.

## Localization Posture
- Default locale en-US with full content-key architecture.
- Structure supports expansion to additional locales without layout rewrites.

## Implementation Stack
- Next.js App Router in web directory.
- CMS data via Sanity API contracts.
- Client state only where interaction requires it.
- No backend, CMS schema, or deployment artifacts in this planning bundle.

## Route Map and Ownership
- Public marketing: /, /services, /services/[slug], /portfolio, /portfolio/[slug], /testimonials, /blog, /blog/[slug], /quote, /contact, /about
- Public utility: /privacy, /terms, /404
- Auth surfaces: /auth/sign-in, /auth/sign-up
- Protected app-like surface: /account

## File Output Inventory
- Architecture: master-ui-architecture.md
- Design: design-system.md, design-system.tokens.json
- Components: component-system.md, components/*
- Motion: motion-system.md
- Content: content-library.md, content.en-US.json
- Interactions: interaction-matrix.md
- Pages: pages/*
- Visuals: visual-reference-pack.md
- Validation summary: frontend.json

## AI Consumption Guidance
- Generate all frontend code under web only.
- Resolve all labels via content keys.
- Resolve all style decisions via tokens.
- Consume only documented API contracts for CMS/auth/chat integrations.
