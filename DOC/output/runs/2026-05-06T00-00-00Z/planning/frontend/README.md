# Frontend Planning Bundle - Solar Installation Service

Status: PLANNED
Run: 2026-05-06T00-00-00Z
Scope: Frontend only (Next.js in web), CMS-driven content, no backend/CMS/deploy code generation.

## Artifact Index
- ai-context.yaml
- master-ui-architecture.md
- design-system.md
- design-system.tokens.json
- component-system.md
- components/
- motion-system.md
- content-library.md
- content.en-US.json
- interaction-matrix.md
- pages/
- visual-reference-pack.md
- frontend.json

## Route Coverage
Planned routes and page specs are one-to-one for:
- /
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

## Execution Notes
- All visible UI copy is keyed in content.en-US.json.
- All page and component decisions resolve to design tokens.
- All animated surfaces include reduced-motion fallback.
- Every public primary surface includes a Home path and mobile parity.
