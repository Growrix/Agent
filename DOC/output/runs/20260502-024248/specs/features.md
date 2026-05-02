# FEATURE SPECS — AU Plumber Website

## F1 · auth
- **Provider**: Clerk
- **Scope**: Internal admin only — no public-facing accounts
- **Protected routes**: `/admin/*`, `/api/admin/*`
- **Public routes**: all `/(marketing)/*`, `/api/lead-enquiries`, `/api/callback-requests`, `/api/webhooks/*`, `/api/health`
- **Webhook sync**: `user.created` / `user.updated` / `user.deleted` → mirror to `users` table
- **Auth gate**: middleware + `(admin)/layout.tsx` server-side `auth()` check

## F2 · dashboard
- **Surface**: `/admin/leads`
- **Data source**: Postgres via Prisma (no-store cache)
- **Capabilities**: paginated lead queue, status updates (new → contacted → quoted → converted → closed), audit log per action
- **Auth**: Clerk session required, server-side check on every route handler

## F3 · marketing_pages
- **CMS**: Sanity (GROQ queries, CDN reads)
- **Pages**: `/`, `/about`, `/quote`, `/contact`, `/emergency-plumbing`, `/privacy`, `/terms`
- **Cache**: `revalidate: 30–3600` seconds (per urgency of page)
- **Revalidation**: Sanity webhook → `/api/webhooks/sanity` → `revalidatePath`
- **Draft mode**: `/api/draft` route enables Sanity draft preview for authenticated editors

## F4 · blog
- **CMS**: Sanity (`post`, `author`, `category` schemas)
- **Pages**: `/blog` (list), `/blog/[slug]` (detail)
- **SEO**: `generateMetadata` per post, `Article` structured data
- **Cache**: `revalidate: 120`

## F5 · testimonials
- **CMS**: Sanity (`testimonial` schema with `approved` flag)
- **Pages**: `/testimonials`
- **Governance**: `approval_required` — only `published` testimonials served
- **Webhook revalidation**: on Sanity publish event

## F6 · emails
- **Provider**: Resend + React Email templates
- **Triggers**: lead enquiry submitted → notification to business owner; callback requested → notification to business owner
- **Templates**: `lead-enquiry-notification.tsx`, `callback-request-notification.tsx`
- **Logging**: every send persisted to `email_logs` with `provider_message_id`
- **Delivery events**: Resend webhook → `/api/webhooks/resend` → update `email_logs.status`

## F7 · analytics
- **Provider**: PostHog (client: posthog-js; server: posthog-node)
- **Client events**: `phone_cta_clicked`, `quote_cta_clicked`, `emergency_cta_clicked`, `callback_cta_clicked`, `faq_item_expanded`
- **Server events**: `quote_request_submitted`, `callback_requested`, `admin_lead_status_updated`, `thank_you_page_viewed`, `service_page_viewed`, `suburb_page_viewed`
- **PII rule**: no email / phone in event properties
- **Identify**: internal user id (Clerk userId) only — never email
