# Frontend Planning — local-plumbing-marketing-site

This folder contains the deterministic frontend planning artifacts that drive codegen and execution.

## Canonical read order
1. `master-ui-architecture.md`
2. `design-system.md`
3. `component-system.md`
4. `motion-system.md`
5. `content-library.md` + `content.en-US.json`
6. `interaction-matrix.md`
7. `pages/`
8. `components/`

## Trust-critical surfaces (visual review)
- Header (desktop + mobile)
- Footer (desktop + mobile)
- Home hero + trust strip (desktop + mobile)
- Sticky mobile ActionBar

## Route inventory
- `/`
- `/services`
- `/services/[slug]`
- `/areas`
- `/areas/[slug]`
- `/reviews`
- `/about`
- `/contact`
- `/quote`
- `/faq`
- `/blog`
- `/privacy`
- `/terms`
- `/404`

## Source-of-truth responsibilities
- `master-ui-architecture.md`: cross-page UX, nav model, conversion mechanics
- `design-system.md` + `design-system.tokens.json`: tokens and visual rules
- `component-system.md` + `components/*.md`: component inventory and contracts
- `motion-system.md`: allowed effects, tokens, reduced-motion fallbacks
- `content-library.md` + `content.en-US.json`: copy for all non-CMS strings
- `interaction-matrix.md`: interaction behaviors + state transitions
- `pages/*.md`: per-route composition, data-fetching, SEO, analytics
