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

## Page Inventory
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
