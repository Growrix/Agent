# DATA FLOW — OPERATIONS DASHBOARD

## OVERVIEW
Internal operations flow for staff to review, triage, and update website enquiries.

## INTEGRATIONS INVOLVED
- `clerk` (staff authentication)
- `database` (lead and callback records)
- `posthog` (admin action telemetry)

## ENTITIES
- `users` (DB mirror from Clerk)
- `lead_enquiries`
- `callback_requests`
- `audit_logs`

## FLOW: VIEW LEAD QUEUE

```
[Staff Browser]
  GET /admin/leads
       ↓
[Middleware + Auth]
  Enforce authenticated staff session
       ↓
[Server Component]
  Fetch paginated leads from repository (status filter + date range)
       ↓
[Database]
  Return scoped records ordered by created_at DESC
       ↓
[Response]
  Render queue with status chips and contact actions
```

## FLOW: UPDATE LEAD STATUS

```
[Staff Browser]
  POST /api/admin/leads/[id]/status
       ↓
[Route Handler]
  Validate input (zod), authenticate user
       ↓
[Service]
  Authorize staff role
  Update lead_enquiries.status
  Write audit_logs entry
  Capture analytics event "lead_status_updated"
       ↓
[Database]
  Persist state + audit record in transaction
       ↓
[Response]
  200 { data: { id, status } }
```

## ENV VARS INVOLVED
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `CLERK_WEBHOOK_SIGNING_SECRET`
- `DATABASE_URL`
- `DIRECT_URL`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`
- `POSTHOG_API_KEY`

## CONSTRAINTS
- All admin routes require authentication.
- Lead reads are paginated; unbounded list queries are forbidden.
- Audit logs are mandatory for state changes.
- No client-side direct DB access.
