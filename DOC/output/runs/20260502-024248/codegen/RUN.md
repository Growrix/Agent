# RUN.md — Developer Setup Guide

## Prerequisites
- Node.js 20+
- pnpm 9+
- PostgreSQL 15+ (or Neon/Supabase)
- Clerk account
- Sanity account
- Resend account
- PostHog account (or self-hosted)

## 1. Install Dependencies

```bash
pnpm install
```

## 2. Environment Variables

```bash
cp ENV.example .env.local
```

Fill in all values in `.env.local`. See `ENV.example` for descriptions.

## 3. Database Setup

```bash
# Push schema to database
pnpm prisma db push

# Or run migrations in production
pnpm prisma migrate deploy

# Generate Prisma client
pnpm prisma generate
```

## 4. Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## 5. Sanity Studio

The Sanity schema lives in `studio/`. To run the studio locally:

```bash
cd studio
npx sanity dev
```

Or deploy to Sanity's hosted studio:

```bash
npx sanity deploy
```

## 6. Build for Production

```bash
pnpm build
pnpm start
```

## 7. Clerk Webhook Setup

1. In the Clerk Dashboard, navigate to **Webhooks**.
2. Add endpoint: `https://yourdomain.com.au/api/webhooks/clerk`
3. Subscribe to events: `user.created`, `user.updated`, `user.deleted`
4. Copy the **Signing Secret** → set `CLERK_WEBHOOK_SIGNING_SECRET` in `.env.local`

## 8. Resend Webhook Setup

1. In Resend Dashboard, go to **Webhooks**.
2. Add endpoint: `https://yourdomain.com.au/api/webhooks/resend`
3. Subscribe to: `email.sent`, `email.delivered`, `email.bounced`, `email.complained`
4. Copy the webhook secret → set `RESEND_WEBHOOK_SECRET` in `.env.local`

## 9. Sanity Revalidation Webhook

1. In Sanity, go to **API** → **Webhooks**.
2. Add webhook: `https://yourdomain.com.au/api/webhooks/sanity`
3. Set secret → matches `SANITY_REVALIDATE_SECRET` in `.env.local`
4. Trigger on: **Create**, **Update**, **Delete** for all document types

## 10. Vercel Deployment

```bash
vercel --prod
```

Set all environment variables in the Vercel dashboard (Settings → Environment Variables).

## Project Structure

```
src/
  app/               # Next.js App Router pages
  components/        # React components
  lib/               # Utility libraries
  server/            # Server-only code (DB, services, repositories)
  sanity/            # Sanity queries and client
  types/             # Shared TypeScript types
  env.ts             # Zod-validated env vars
emails/              # React Email templates
prisma/              # Prisma schema
studio/              # Sanity Studio config and schemas
```
