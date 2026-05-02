# RUNBOOK — AU Plumber Website

**Project**: au-plumber-website  
**Stack**: Next.js 15 · TypeScript · Tailwind CSS · Clerk · Prisma/Postgres · Sanity · Resend · PostHog · Vercel

---

## 1. Initial Deploy Checklist

### 1.1 External Services to Provision
- [ ] Clerk application created, auth methods configured
- [ ] Managed Postgres instance provisioned (Neon / Supabase / Railway)
- [ ] Sanity project created, dataset = `production`
- [ ] Resend account created, sending domain verified (SPF + DKIM + DMARC)
- [ ] PostHog project created

### 1.2 DNS
- [ ] Apex (`yourdomain.com.au`) + `www` pointing to Vercel
- [ ] Resend domain verification DNS records applied
- [ ] DMARC record set

### 1.3 Environment Variables
Copy `ENV.example` to `.env.local`. Fill in all values. Add to Vercel environment for `preview` and `production`.

### 1.4 Database Migration
```bash
pnpm prisma migrate deploy
pnpm prisma generate
```
**Never run `migrate dev` against production.**

### 1.5 Webhook Registration
| Integration | Endpoint | Events |
|---|---|---|
| Sanity | `https://yourdomain.com.au/api/webhooks/sanity` | `document.created`, `document.updated`, `document.deleted` |
| Resend | `https://yourdomain.com.au/api/webhooks/resend` | `email.*` |
| Clerk | `https://yourdomain.com.au/api/webhooks/clerk` | `user.*`, `session.*` |

Set `SANITY_REVALIDATE_SECRET` and `CLERK_WEBHOOK_SIGNING_SECRET` in Vercel dashboard and matching integration dashboards.

---

## 2. Deployment Procedure

### 2.1 Preview Deploy (every PR)
1. Vercel auto-deploys on branch push.
2. Confirm environment: `VERCEL_ENV=preview`.
3. Preview uses separate Postgres and Sanity dataset (`staging`).

### 2.2 Production Deploy
1. Merge PR to `main`.
2. Vercel auto-deploys.
3. GitHub Actions job runs `prisma migrate deploy` on production DB after deploy.
4. Smoke test: visit `/api/health` — expect `{ status: "ok", db: "ok" }`.

---

## 3. Rollback Procedure

### 3.1 Code Rollback
1. In Vercel dashboard → Deployments → select last good deployment → `Redeploy`.
2. Takes ~30 seconds.

### 3.2 Database Rollback
1. Stop traffic by setting deployment to maintenance mode in Vercel.
2. Restore from daily backup (RTO: 60 min, RPO: 15 min).
3. Apply rollback migration if needed: `prisma migrate resolve --rolled-back <migration_name>`.
4. Re-enable traffic.

---

## 4. Monitoring & Alerting

### 4.1 Health Check
- Endpoint: `/api/health`
- Vercel cron or UptimeRobot polls every minute.
- Alert if non-200 for 2 consecutive checks.

### 4.2 Error Indicators
- PostHog `$exception` events spike
- Resend bounce rate > 5% → investigate domain reputation
- DB query P99 > 100ms → check slow query logs, add indexes

### 4.3 Lead Volume
- PostHog dashboard: `quote_request_submitted` + `callback_requested` events
- Alert if zero leads for 24h on business days (may indicate form breakage)

---

## 5. Backup Policy
- **Frequency**: Daily automated snapshot of Postgres
- **Retention**: 30 days
- **RTO**: 60 minutes
- **RPO**: 15 minutes
- **Restore test**: Monthly

---

## 6. Incident Response

### Severity 1 — Site Down
1. Check Vercel status page.
2. Check `/api/health` — if DB error, check Postgres provider status.
3. Rollback deployment if regression suspected.
4. Post update in team Slack / WhatsApp.

### Severity 2 — Forms Not Submitting
1. Check `/api/lead-enquiries` route logs in Vercel.
2. Check Resend dashboard for delivery failures.
3. Check Postgres connection pool — restart if exhausted.

### Severity 3 — CMS Content Not Updating
1. Check Sanity webhook delivery in Sanity dashboard.
2. Manually trigger revalidation: `curl -X POST https://yourdomain.com.au/api/webhooks/sanity -H "sanity-webhook-signature: <sig>"`.
3. Check `SANITY_REVALIDATE_SECRET` matches.
