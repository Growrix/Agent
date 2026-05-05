# ADR 0001: Run the Plumber Site as a CMS-Backed Marketing Build

## Status
Accepted

## Context
The plan requires CMS-backed marketing pages, lead capture, analytics, and no application database, auth, or payments.

## Decision
Generate a Next.js App Router marketing application under the run root using:
- Sanity query modules with local mock fallback
- Resend integration with local safe no-op mode
- PostHog provider with disabled-safe local mode
- Typed env validation and route handlers for leads, health, and Sanity revalidation

## Consequences
- The output stays runnable for local testing even without live vendor credentials
- Content-backed semantics remain intact because page data flows through query modules rather than inline arrays in page files
- The delivery can be exercised locally before real business data is supplied