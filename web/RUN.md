# SolarPro Frontend — Run Guide

## Prerequisites
- Node.js ≥ 20
- npm ≥ 10 (bundled with Node 20+)

## Install

```bash
cd web
npm install
```

## Dev server

```bash
npm run dev
```

Opens at http://localhost:3000

## Type check

```bash
npm run typecheck
```

## Lint

```bash
npm run lint
```

## Build (production)

```bash
npm run build
```

## Preview production build

```bash
npm run start
```

## Unit tests (Vitest)

```bash
npm run test
# with coverage:
npm run test -- --coverage
```

## E2E tests (Playwright)

```bash
# Install browsers once:
npx playwright install --with-deps

# Run all E2E tests:
npx playwright test

# UI mode:
npx playwright test --ui
```

## Smoke checklist (manual, post-build)

- [ ] http://localhost:3000/ — hero 55/45 split loads; services grid visible
- [ ] /services — cinematic full-bleed hero loads; process timeline visible
- [ ] /portfolio — masonry grid hero; frosted glass card visible
- [ ] /testimonials — giant quote mark; review grid
- [ ] /blog — editorial masthead; featured + 2 sidebar cards
- [ ] /quote — step indicator header; calculator panel
- [ ] /contact — brand-green background; channel rows; address panel
- [ ] /about — portrait 60/40 split; values grid
- [ ] /sign-in — brand gradient background; form card
- [ ] /sign-up — brand gradient background; form card; social proof strip
- [ ] skip-link visible on Tab from any page
- [ ] FAB opens assistant modal on home / quote / contact
- [ ] mobile menu opens and closes on /
- [ ] dark mode toggles correctly

## Common pitfalls

- **`next/image` remote pattern error**: Add the domain to `remotePatterns` in `next.config.ts`. Unsplash (`images.unsplash.com`) is already included.
- **`NEXT_PUBLIC_API_BASE_URL` not set**: API client falls back to mock data. Set the var in `.env.local` to use a real backend.
- **Port 3000 already in use**: `npm run dev -- --port 3001`
