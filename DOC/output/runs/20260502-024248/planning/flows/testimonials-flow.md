# DATA FLOW — TESTIMONIALS CONTENT

## OVERVIEW
Editorial flow for managing and publishing testimonials as trust signals on marketing pages.

## INTEGRATIONS INVOLVED
- `sanity` (authoritative content source)
- `posthog` (optional engagement analytics)

## ENTITIES
- `testimonial` (Sanity: id, customer_name, suburb, rating, quote, service_slug, approved, published_at, slug)

## FLOW: PUBLIC TESTIMONIALS READ

```
[Browser]
  GET /testimonials or homepage testimonial section
       ↓
[Next.js Server Component]
  Query approved testimonials from Sanity using GROQ helper
       ↓
[Sanity Content Lake]
  Return testimonial list
       ↓
[Database]
  Not used (content owner is Sanity)
       ↓
[Response]
  Render cards with schema.org Review markup
```

## FLOW: CONTENT UPDATE

```
[Editor]
  Publishes testimonial in Sanity Studio
       ↓
[Sanity Webhook]
  POST /api/webhooks/sanity
       ↓
[Webhook Handler]
  Verify secret signature
  Revalidate / and /testimonials routes
       ↓
[Response]
  200 OK
```

## ENV VARS INVOLVED
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_READ_TOKEN`
- `SANITY_API_WRITE_TOKEN`
- `SANITY_REVALIDATE_SECRET`

## CONSTRAINTS
- Testimonial docs with public pages must have slug fields.
- Only approved testimonials appear on public pages.
- Revalidation secret must match dashboard config.
