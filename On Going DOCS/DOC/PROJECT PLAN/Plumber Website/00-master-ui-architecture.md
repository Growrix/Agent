---
document_type: master-architecture
scope: site-wide
build_stage: 1-architecture
recommended_next_reads:
  - ai-context.yaml
  - README.md
  - 01-design-system.md
  - 02-component-system.md
---

# Plumbing Service Website UI Architecture

## Product Intent
- Build a premium local-services website for an Australian plumbing business.
- Convert urgent visitors fast, then support planned repairs, maintenance, and quote requests.
- Keep the business feeling modern, reliable, and easy to contact.

## Recommended Experience Direction
- Visual theme: clean tradesman premium with strong hierarchy and a calm, technical feel.
- Mood: confident, practical, immediate, and locally grounded.
- Mobile posture: app-like, fast-scanning, with persistent contact utilities.
- Trust posture: licensed, insured, review-backed, area-aware, and response-time led.

## Core Journeys
- Emergency visitor: Home -> emergency triage -> click-to-call or WhatsApp -> dispatch or booking.
- Quote seeker: Home -> service page -> quote estimator -> photo upload -> confirmation.
- Coverage checker: Home or footer -> postcode checker -> area page -> contact.
- Trust seeker: Home -> reviews -> about -> contact or book.
- Research visitor: Home -> blog article -> service detail -> quote or booking.
- Assisted visitor: Any page -> AI concierge -> call, WhatsApp, quote, or book.

## Site Map
### Marketing Pages
- Home
- Services overview
- Service detail pages for:
  - Emergency plumbing
  - Blocked drains
  - Burst pipes and leak detection
  - Hot water systems
  - Toilet and tap repairs
  - Gas fitting and appliance connections, if offered
  - Bathroom, kitchen, and laundry plumbing
  - Commercial and strata plumbing
  - Maintenance plans
- Areas served
- Area detail pages for suburbs, postcodes, or major cities
- Reviews
- About
- Blog / resources
- Blog article detail

### Conversion Pages
- Quote request
- Book service
- Contact
- AI concierge

### Utility Pages
- FAQ
- Privacy policy
- Terms of service
- 404

## Global Navigation Model
- Header links: Services, Areas, Reviews, About, Blog, FAQ, Contact.
- Persistent primary CTA: Book or Request Quote.
- Persistent secondary utilities: Phone, WhatsApp, AI chat.
- Footer groups: Services, Areas, Resources, Trust, Support, Legal.

## Floating Action Model
- Bottom-right cluster with three visible icons: Call, WhatsApp, AI chat.
- Optional expanded state can reveal Quote or Book as a fourth action on larger screens.
- On mobile, the cluster should stay above the safe area and avoid covering key content.
- The first tap should never force a dead-end; every icon must open a real next step.

## Shared Conversion Infrastructure
- AI chat launcher with plumbing-aware prompts and emergency triage.
- WhatsApp deep link for quick handoff.
- Click-to-call action for urgent jobs.
- Quote estimator with service type, urgency, postcode, and photo upload.
- Postcode checker with suburb / area validation.
- Booking flow for planned work and inspection requests.
- Review aggregation and before/after proof surfaces.

## Layout System
- Desktop: 12-column grid with generous whitespace and layered proof cards.
- Tablet: 8-column grid with condensed hero and stacked proof modules.
- Mobile: single-column flow with pinned utility actions and short, high-clarity sections.
- All pages should reserve safe space for floating actions and sticky callouts.

## State Requirements
- Forms: default, focus, validation error, submitting, success, server error.
- Coverage checker: loading, matched, no coverage, unknown postcode, fallback contact.
- Chat: collapsed, greeting, active, handoff, offline.
- Reviews: loading, populated, empty, error.
- Service lists: loading, populated, filtered-empty, error.

## SEO and Trust Requirements
- Use LocalBusiness, Service, FAQPage, Review, and PostalAddress schema where applicable.
- Include suburb and postcode language on area pages.
- Surface licenses, insurance, business hours, and response-time promises early.
- Prioritise emergency plumbing queries, but support planned-service long-tail pages as well.

## Conversion Principles
- Reduce friction first, collect detail second.
- Offer call, WhatsApp, AI help, quote, and booking from the same content cluster.
- Make urgent options visually dominant without hiding planned-service options.
- Keep the site useful even if the visitor never submits a form.
