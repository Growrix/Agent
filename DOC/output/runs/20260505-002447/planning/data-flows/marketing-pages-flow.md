# DATA FLOW - MARKETING PAGES

## OVERVIEW
End-to-end flow for CMS-backed marketing, service, area, review, FAQ, and legal pages served by Next.js.

## INTEGRATIONS INVOLVED
- `sanity` (primary)
- `posthog` (analytics on page views and CTA events)

## ENTITIES
- `page` (Sanity)
- `service` (Sanity)
- `serviceArea` (Sanity)
- `review` (Sanity)
- `faqGroup` (Sanity)

## FLOW: PUBLIC PAGE READ

```
[Browser]
  GET /services/<slug> or /areas/<slug>
       ->
[Next.js Server Component]
  resolve slug
  call cms query helper (getServiceBySlug, getAreaBySlug, getHomePage)
       ->
[Sanity Client]
  query Content Lake with CDN-backed public reads
       ->
[Next.js Server Component]
  render content, metadata, and CTA surfaces
       ->
[Browser]
  receives HTML and tracked CTA targets
```

## FLOW: CONTENT PUBLISH -> SITE REVALIDATION

```
[Editor]
  publish content in Sanity
       ->
[Sanity Webhook]
  POST /api/webhooks/sanity
       ->
[Route Handler]
  verify signature using SANITY_WEBHOOK_SECRET
  determine affected route tags
  revalidate path and tags
       ->
[Next.js Cache]
  next request receives fresh content
```

## ENV VARS INVOLVED
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_READ_TOKEN`
- `SANITY_WEBHOOK_SECRET`

## CONSTRAINTS
- Content stays in the CMS, not duplicated in a database.
- Every public content type with a route uses a unique slug.
- Revalidation must happen through the signed webhook only.