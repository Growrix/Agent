# Brief — Local Plumbing Marketing Site

## Project
- Name: Local Plumbing Marketing Site
- Archetype: marketing_site
- Industry: local-services (plumbing)
- Deliverable: custom_build
- Tagline intent: same-day availability + locality

## Brand
- Voice: trustworthy
- Tone: clear, friendly, local
- Visual archetype: local-business-trust
- Palette: derived from archetype defaults (no seed provided)
- Forbidden words: synergy, world-class, best-in-class, leverage, disruptive, innovative

## Audience
- Primary: homeowner in the service area needing urgent or planned plumbing
- Secondary: property manager / small landlord needing reliable recurring work

## Goals (KPIs)
- Convert visitors to direct calls (call_click_rate)
- Collect qualified quote requests (quote_request_submit_rate)
- Drive organic traffic to service and area pages (organic_sessions_to_service_and_area_pages)

## Journeys
- Emergency call path: Home → trust signals → sticky Call Now → connected
- Quote request path: Home → service detail → quote form → confirmation
- Service research path: Service detail → scope + pricing guidance → reviews → contact
- Area check path: Areas → area landing → confirm coverage → contact
- Review proof path: Reviews → service detail → contact

## Site Map
Required
- /, /services, /services/[slug], /areas, /reviews, /about, /contact, /privacy, /terms, /404
Optional
- /areas/[slug], /quote, /faq, /blog

## Features
- marketing_pages
- analytics

## Integrations (feature-mapped)
- marketing_pages → sanity
- analytics → posthog

## Trust Signals
- Phone + hours visible
- Licensed/insured badges
- Years in business
- Areas served coverage
- Review aggregate

## Conversion Mechanics
- Click-to-call as primary conversion
- Sticky mobile call-to-action
- Quote request form as secondary conversion
- Areas served confirmation

## Locale
- Default: en-US
- Regions: United States

## Constraints
- Deployment platform: vercel
- Database: none
- No auth: true
- No payments: true

## Assumptions Ledger
- Archetype marketing_site selected via local-services detection
- Industry pack local-services selected via plumbing keyword match
- Visual archetype local-business-trust applied as default for local_services
- Quote/reviews/SEO are implemented within marketing pages and content model, not as separate feature flags
- Business identity data (phone, address, license numbers, hours) is CMS-managed in a site settings document to avoid guessing

## Lock Status
LOCKED
