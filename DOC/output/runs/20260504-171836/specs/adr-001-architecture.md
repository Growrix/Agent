# ADR-001: Content-led Next.js architecture with AI contact assistant

Date: 2026-05-04
Status: ACCEPTED
Agents Involved: master_planner, execution_orchestrator
Authored By: execution_orchestrator

## CONTEXT
The target product is an Australia-focused plumbing service website where fast conversion, local trust, and multichannel contact paths are primary goals. The site needs editable service and area pages, plus an AI helper without introducing unnecessary portal/billing complexity.

## DECISION
We will use a content-led Next.js App Router architecture with Sanity CMS for page content and OpenAI for the public AI chat assistant.

Specific:
- Primary choice: Next.js + Sanity + OpenAI + Resend + PostHog
- Justification: Fits local-services SEO and content operations while delivering interactive assistant and conversion-first UX.
- Alternatives considered: standard_saas, api_saas, ai_saas

## ALTERNATIVES CONSIDERED
| Option | Pros | Cons | Rejected Reason |
|--------|------|------|----------------|
| standard_saas | Familiar defaults | No CMS-first content model | Not ideal for service-area SEO |
| api_saas | Strong API governance | Heavy API product overhead | Misaligned with marketing site |
| ai_saas | Rich AI platform capabilities | Over-scoped auth/billing/dashboard | Not required for brochure+lead funnel |
| content_saas + AI extension | CMS and page flexibility | Requires additional chat route design | CHOSEN |

## CONSEQUENCES
Positive:
- Fast publishing workflow for services/areas/blog
- Interactive AI assistant available as third contact channel

Negative / Trade-offs:
- More provider setup tasks at launch (Sanity + OpenAI + Resend + PostHog)
- Ongoing model cost monitoring required

Neutral:
- Optional customer portal and online payment remain deferred

## COMPLIANCE
- core/system-rules.md: aligned
- knowledge/integration-rules/cms/sanity.yaml: aligned
- knowledge/integration-rules/ai/openai.yaml: aligned
- validation/constraints/constraints.md: C1-C24 pass at planning stage

## REVIEW
| Reviewer | Status | Notes |
|----------|--------|-------|
| reviewer.agent | APPROVED | Plan is locked and validated |
