---
document_type: brief
project_name: plumbing-service-website
build_stage: 0-intake
derived_from: user_request
---

# Plumbing Service Website Brief

## User Request
- Plan a plumber website again.
- Match the hero section to the supplied visual reference.
- Keep the rest of the site in the same trust-led, polished style direction.

## Project
- Name: Plumbing Service Website
- Archetype: marketing_site
- Industry: local_services / plumbing
- Deliverable: custom_build
- Tagline: Reliable plumbing support with fast quote capture and trust-first presentation.

## Brand Direction
- Voice: trustworthy
- Tone: clear, reassuring, local
- Visual archetype: knowledge/frontend-rules/visual-archetypes/local-business-trust.md
- Palette seed: #0B5EA8
- Hero reference translation:
  - Deep blue hero shell with a strong diagonal split into photography.
  - Real plumber portrait on the right with vehicle/context in the background.
  - White rounded surface block overlapping the hero into the next section.
  - White top navigation and pill CTA over the blue hero.
  - Warm metallic accent reserved for highlights and trust details.

## Audience
- Primary: Australian homeowner needing urgent or planned plumbing help.
- Secondary: Property manager handling repeat maintenance requests.

## Core Goals
- Maximise calls and quote requests from the hero and sticky contact surfaces.
- Build trust quickly with proof, coverage, and licensing signals.
- Help visitors find the right plumbing service and area page without friction.

## Journeys
- Emergency call path: Home hero -> sticky mobile CTA -> phone contact.
- Quote request path: Home -> Services -> Service detail -> Quote -> confirmation.
- Service research path: Home -> Services -> Service detail -> FAQ -> Contact.
- Area trust path: Home -> Areas -> Area detail -> Quote.

## Site Map
- / Home
- /services Services overview
- /services/[slug] Service detail
- /areas Areas overview
- /areas/[slug] Area detail
- /reviews Reviews
- /about About
- /quote Quote
- /contact Contact
- /faq FAQ
- /privacy Privacy
- /terms Terms
- /404 404

## Formal Features
- marketing_pages -> sanity
- emails -> resend
- analytics -> posthog

## Trust Signals
- Licensed and insured badges
- Years in business
- Areas served list
- Review aggregate
- Same-day availability badge
- Response-time promise

## Conversion Mechanics
- Click to call
- Quote form
- Sticky mobile call CTA

## Constraints
- Deployment platform: vercel
- Database: none
- Auth: disabled
- Payments: disabled
- Locale: en-AU

## Assumptions Ledger
- R1: Marketing-site archetype selected because the request is a public plumber website, not an app.
- R2: Plumbing / local-services industry selected because it is explicitly requested.
- R3: local-business-trust visual archetype selected deterministically for marketing_site + local_services.
- R7: marketing_pages, emails, analytics activated because the live feature map supports them; quote forms and testimonials are implemented inside those surfaces.
- R10: deep blue palette seed chosen from the hero reference.
- R11: en-AU locale retained from earlier conversation context.
- R13: basic tier selected because the site excludes auth, payments, and a database.

## Open Questions
- Confirm the business name, phone number, and service email.
- Confirm the exact service suburbs or metro coverage.
- Confirm license numbers and after-hours wording.
- Confirm whether online booking should remain out of scope.

## Status
- brief.lock_status: LOCKED