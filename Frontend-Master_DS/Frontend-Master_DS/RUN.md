# Frontend Runtime Commands

## App Root
- Runtime app root: `Frontend-Master_DS/Frontend-Master_DS`
- Run all install, lint, typecheck, build, test, and dev commands from this directory.

## Prerequisites
- Node.js 20+
- npm 10+

## Core Commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Typecheck: `npm run typecheck`
- Lint: `npm run lint`
- Jest suite: `npm test`
- Full verification: `npm run verify`
- Production build: `npm run build`

## Recommended Startup Order
1. Read `dev-server-checklist.md`.
2. Run `npm run typecheck`.
3. Run `npm run lint`.
4. Start the app with `npm run dev`.

## Smoke Checks After Boot
- Home route renders without runtime overlay errors.
- Theme switcher changes theme and persists on refresh.
- Bottom navigation is visible on mobile viewport.
- Support actions for call / WhatsApp / AI chat render.

## Common Pitfalls
- Running commands from the repo root instead of the app root.
- Stale `.next/` output after dependency or config changes.
- Windows file locks on native binaries after interrupted installs.