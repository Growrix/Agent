# Runbook: Local Development

## Goal
Bring up the generated marketing app locally and verify the core smoke routes.

## Steps
1. Copy `ENV.example` to `.env.local`.
2. Leave `APP_MODE=mock` for local development.
3. Install dependencies with `pnpm install`.
4. Start the app with `pnpm dev` or `npm run dev`.
5. Verify `/`, `/quote`, and `/api/health`.

## Failure Handling
- If env validation fails, compare `.env.local` against `ENV.example`.
- If lead submission fails in local mode, confirm `APP_MODE=mock` so Turnstile and email delivery use local-safe behavior.