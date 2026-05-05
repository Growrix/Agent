# Integration Spec: Sanity

## Required Artifacts
- `src/lib/sanity.ts`
- `src/server/cms/mock-data.ts`
- `src/server/cms/queries.ts`
- `src/app/api/webhooks/sanity/route.ts`
- `studio/sanity.config.ts`
- `studio/schemas/*.ts`

## Responsibilities
- Provide typed content queries for home, services, service detail, areas, area detail, reviews, about, FAQ, and legal pages
- Support local mock mode without external API availability
- Support revalidation webhook with signature validation