# ADR-001 — Architecture Template Selection

**Date**: 2026-05-02  
**Status**: Accepted  
**Deciders**: master_planner

## Context
The project is an Australian plumbing company website focused on phone calls, quote requests, and local SEO growth. It is not a SaaS product. The DOC knowledge base offers five architecture templates: `standard_saas`, `content_saas`, `api_saas`, `marketplace_saas`, `ai_saas`.

## Decision
Selected **`content_saas`** adapted as `local_service_lead_generation`.

## Rationale
- `content_saas` is the only template with Sanity CMS + marketing pages + blog as first-class citizens.
- It maps cleanly to the required features: auth, CMS-driven content, analytics, email notifications.
- Stripe (payments) disabled — no subscription or payment flow is needed for a local service business; enquiries are the conversion unit.
- The "SaaS app shell" (dashboard, user portal) is repurposed as an internal-only admin lead queue.

## Rejected Alternatives
| Template | Reason Rejected |
|---|---|
| `standard_saas` | No CMS or blog support; app-heavy with user portal not required |
| `api_saas` | API-product focused; no frontend marketing surface |
| `marketplace_saas` | Multi-sided marketplace complexity; not applicable |
| `ai_saas` | AI/LLM features not in scope; over-engineered for a plumbing site |

## Consequences
- Stripe dependency removed entirely from the stack.
- Clerk auth scoped to admin-only rather than customer accounts.
- "Pricing page" replaced with a quote-first conversion page `/quote`.
- CMS remains source of truth for all public-facing copy (no hardcoded marketing text in code).
