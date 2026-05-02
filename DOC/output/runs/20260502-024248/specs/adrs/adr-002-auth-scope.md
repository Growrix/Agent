# ADR-002 — Auth Scope: Admin-Only

**Date**: 2026-05-02  
**Status**: Accepted

## Context
The `content_saas` template includes full customer-facing auth (sign-up, user portal, subscriptions). A local plumbing business website does not need customer accounts — conversions happen through phone calls and form submissions, not account creation.

## Decision
**Clerk auth is scoped exclusively to the internal admin lead queue.** No public sign-up route is exposed.

## Consequences
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL` and `/sign-up` route are omitted from the build.
- Middleware marks all `/(marketing)/*` routes as public with no auth gate.
- Only `/admin/*` and `/api/admin/*` are protected.
- The `ClerkProvider` is still mounted at root (required for auth state on admin pages) but no `UserButton` or account management surfaces appear on public pages.
- Future expansion to customer portal (e.g., job tracking) can be re-enabled without architectural rework.
