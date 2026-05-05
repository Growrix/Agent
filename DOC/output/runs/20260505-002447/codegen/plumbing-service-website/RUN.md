# Prerequisites

- Node.js 20+
- pnpm 10+

# Install

```bash
pnpm install
```

# Configure environment

```bash
cp ENV.example .env.local
# Replace the placeholder business facts and vendor credentials before production use.
```

# Database

No application database is used in this run.

# Studio (if CMS)

```bash
cd studio
pnpm install
# Optional: wire the local mock schemas into a real Sanity studio before live content work.
cd ..
```

# Run dev

```bash
pnpm dev
# npm compatibility:
npm run dev
```

# Webhooks

- Sanity webhook URL: `http://localhost:3000/api/webhooks/sanity`

# Smoke tests

```bash
curl -i http://localhost:3000/
curl -i http://localhost:3000/quote
curl -i http://localhost:3000/api/health
```

# Build

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:integration
pnpm build
```

# Deploy

```bash
vercel link
vercel env pull
vercel --prod
```

# Troubleshooting

- If env validation fails, compare `.env.local` with `ENV.example` exactly.
- If the quote form does not submit locally, keep the placeholder local env values so the app remains in mock integration mode.
- If Playwright is missing browsers locally, run `pnpm exec playwright install chromium`.