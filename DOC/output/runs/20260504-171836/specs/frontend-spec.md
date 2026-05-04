# FRONTEND SPEC - AU Plumbing Service Website

## ROUTE: /
### Page
file: src/app/page.tsx
component_type: server_component
layout: root
auth_required: false
title: Same-day Plumbing in Australia | 24/7 Emergency Callout
description: Fast, licensed plumbing with transparent pricing, suburb coverage, and instant contact via call, WhatsApp, and AI assistant.
og_image: /og/home.png
canonical: /

### Data Fetching
data_source: static + cms
query_function: getHomePageContent
cache_strategy: revalidate:300
params: none
error_handling:
- error.tsx for service failures
loading_ui: loading.tsx skeleton cards

### Component Tree
<HomePage>
  <HeaderUtilityBar />
  <HeroEmergencySection />
  <FloatingContactRail />
  <UrgencySelector />
  <QuoteEstimator />
  <ServiceCards />
  <CoverageChecker />
  <ReviewsWall />
  <FAQPreview />
  <FooterTrustBlock />

### States
loading: hero and card skeleton
error: fallback contact block with direct call CTA
empty: N/A
success: full landing render

## ROUTE: /services
Page: src/app/services/page.tsx
Data source: cms
Query: getServicesOverview
Cache: revalidate:300
States: loading/error/empty/success required

## ROUTE: /services/[slug]
Page: src/app/services/[slug]/page.tsx
Data source: cms
Query: getServiceBySlug
Cache: revalidate:300
Params: slug
Error handling: notFound() if no service

## ROUTE: /areas
Page: src/app/areas/page.tsx
Data source: cms
Query: getAreasOverview
Cache: revalidate:600

## ROUTE: /areas/[slug]
Page: src/app/areas/[slug]/page.tsx
Data source: cms
Query: getAreaBySlug
Cache: revalidate:600
Params: slug
Error handling: notFound()

## ROUTE: /reviews
Page: src/app/reviews/page.tsx
Data source: cms
Query: getReviews
Cache: revalidate:300

## ROUTE: /about
Page: src/app/about/page.tsx
Data source: cms
Query: getAboutContent
Cache: revalidate:900

## ROUTE: /contact
Page: src/app/contact/page.tsx
Data source: static + form API
Query: none
Cache: no-store

## ROUTE: /quote
Page: src/app/quote/page.tsx
Data source: static + form API
Cache: no-store

## ROUTE: /book
Page: src/app/book/page.tsx
Data source: static + booking embed config
Cache: revalidate:900

## ROUTE: /faq
Page: src/app/faq/page.tsx
Data source: cms
Query: getFaqEntries
Cache: revalidate:900

## ROUTE: /blog
Page: src/app/blog/page.tsx
Data source: cms
Query: getBlogPosts
Cache: revalidate:600

## ROUTE: /privacy
Page: src/app/privacy/page.tsx
Data source: static
Cache: force-cache

## ROUTE: /terms
Page: src/app/terms/page.tsx
Data source: static
Cache: force-cache

## LAYOUT
file: src/app/layout.tsx
providers:
- PostHogProvider
nav: HeaderUtilityBar + main nav
footer: FooterTrustBlock
auth_guard: false

## COMPONENTS
- FloatingContactRail: src/components/contact/floating-contact-rail.tsx (client)
- QuoteEstimator: src/components/quote/quote-estimator.tsx (client)
- UrgencySelector: src/components/quote/urgency-selector.tsx (client)
- CoverageChecker: src/components/areas/coverage-checker.tsx (client)
- AiAssistantPanel: src/components/ai/ai-assistant-panel.tsx (client)

## FORMS
QuoteForm
file: src/components/forms/quote-form.tsx
schema: src/lib/schemas/lead.ts -> QuoteLeadSchema
submission: api_route
 target: /api/leads
success_behavior: toast + reset + optional redirect /contact?sent=1
error_behavior: inline field errors

## METADATA SUMMARY
/ title static | /og/home.png | /
/services title static | /og/services.png | /services
/contact title static | /og/contact.png | /contact

## PROTECTED ROUTES SUMMARY
No protected routes in v1 marketing site.
