---
document_type: integrations-plan
scope: agency-wide
status: planning-reference
purpose: Authoritative integration catalog for the agentic SaaS-build OS. Lists every tool the OS may pick from, organized by tier and role, plus the post-launch support tooling layer.
audience: planner agents, integration_planner, devops_planner, agency engineers
---

# Integrations Plan — Agentic SaaS Build OS

This document is the **agency-wide integration catalog**. It is the source of truth for what the agentic system may select from when planning any project, plus the support tooling we operate alongside every site we ship.

## How to use this document

- The **planner agents** consult this catalog when picking integrations for a brief.
- The **integration_planner** uses the **role + tier matrix** to choose defaults and alternatives deterministically.
- The **devops_planner** uses the **TIER S — Support** section to pick post-launch tooling.
- The **automation surface** (handled inside `integration_planner` or a future `automation_planner`) uses **TIER A — Automation** to wire outbound webhooks and embedded integrations.
- Each integration listed here will (or should) have a corresponding `knowledge/integration-rules/<name>.yaml` with full setup steps, env vars, webhooks, constraints, and common failures.

## Design rules

1. **One default per role** — the OS picks deterministically; the human can override per project. Multiple options listed only as fallbacks.
2. **Tier the integration set to the project archetype:**
   - `basic` = minimum viable for a **marketing_site** template.
   - `standard` = adds what a **saas_app** / **ecommerce** needs.
   - `advanced` = adds operational maturity, scale, and AI/automation.
3. **Automation tier** (Zapier/n8n) sits **outside** the app boundary; it's how the app reaches third-party tools the codebase doesn't import directly.
4. **Support tier** is everything used **after launch**: helpdesk, status, feedback, monitoring beyond errors, growth tooling.
5. Adding a YAML rule is cheap; **activating** an integration in `feature-integration-map.json` is the gate that gets it included in a plan.

---

## TIER 1 — BASIC (every site, even a 1-page service template)

| Role | Default | Why |
|---|---|---|
| Hosting / CDN | **Vercel** (alt: Netlify / Cloudflare Pages) | Edge cache, preview deploys, env vault built in |
| DNS | **Cloudflare** | Free, fast, DNSSEC, redirects + page rules |
| Email (transactional) | **Resend** | React Email templates; clean API |
| Forms backend | route handler + Resend | No third-party form host needed |
| Analytics | **PostHog** (alt: Plausible / Vercel Analytics) | Cookieless mode for marketing sites |
| SEO basics | **Schema.org JSON-LD** + sitemap.xml + robots.txt | Built into the OS by content_planner |
| Forms-spam guard | **Cloudflare Turnstile** (alt: hCaptcha) | Privacy-preserving, free |
| Cookie consent | **Cookiebot** (alt: Osano / native) | Required where GDPR applies |
| Error tracking | **Sentry** | Source maps + release tracking |
| Logging | **Axiom** | Structured logs via pino |
| CMS (when content > static) | **Sanity** | GROQ + studio + revalidation webhooks |
| Media / image hosting | **Sanity asset CDN** OR **Cloudinary** | Sanity covered out of the box |
| Search (small catalogs) | native CMS query | No external search needed at this size |

---

## TIER 2 — STANDARD (SaaS apps, ecommerce, content sites at scale)

| Role | Default | Why |
|---|---|---|
| Auth | **Clerk** (alt: WorkOS for B2B SSO, Supabase Auth for budget) | Hosted UI, organizations, MFA, webhooks |
| Database | **Postgres via Neon** (alt: Supabase / Vercel Postgres / PlanetScale Postgres) | Branchable DB, serverless-friendly |
| ORM | **Prisma** (alt: Drizzle) | Schema-first, migrations, generators |
| Payments | **Stripe** | Default for every commerce surface |
| Tax | **Stripe Tax** | Bundled with Stripe |
| File storage | **UploadThing** (alt: Cloudflare R2 / S3) | Browser-direct uploads, typed routes |
| Background jobs | **Inngest** (alt: Trigger.dev) | Step functions, durable workflows |
| Cache + rate-limit | **Upstash Redis** | Serverless KV with rate-limit helpers |
| Search | **Meilisearch** (alt: Algolia / Typesense) | Typo tolerance, faceted search |
| Marketing email | **Loops** (alt: ConvertKit / Customer.io) | Newsletters, drip sequences |
| Notifications (multi-channel) | **Knock** (alt: Novu) | Email + in-app + SMS + push fan-out |
| SMS / voice | **Twilio** | Industry standard |
| WhatsApp | **Twilio WhatsApp** (alt: 360dialog) | Common for service-business templates |
| Booking / scheduling | **Cal.com** (alt: Calendly) | Embeddable, OSS option |
| Maps + addresses | **Mapbox** (alt: Google Maps) | Listings, areas-served, locations |
| Geocoding / autocomplete | **Mapbox Search** OR **Google Places** | Address forms, locality |
| Reviews aggregation | **Google Business Profile** | Pull live reviews into trust strips |
| Customer support widget | **Crisp** (alt: Intercom / Plain) | Live chat + email handoff |
| AI assistant (entry-level) | **Vercel AI SDK + OpenAI** | Streaming, tool calls, structured outputs |
| Documentation site | **Mintlify** OR colocated MDX | For B2B SaaS docs surface |
| Status page | **Better Stack Status** (alt: Statuspage / Instatus) | Public uptime + incident history |
| Uptime monitoring | **Better Stack Uptime** | Probes against `/api/health` |
| Privacy / DSAR | **Termageddon** + custom GDPR endpoints | Drop-in policy generator + `/api/account/export|delete` |

---

## TIER 3 — ADVANCED (mature SaaS, multi-tenant, regulated, AI-native)

| Role | Default | Why |
|---|---|---|
| SSO / SAML | **WorkOS** | Enterprise auth on top of Clerk if needed |
| Audit logs (sellable feature) | **WorkOS Audit Logs** (alt: Vanta / native table) | Sellable enterprise feature |
| Compliance automation | **Vanta** (alt: Drata / Secureframe) | SOC 2 / ISO / HIPAA evidence collection |
| RBAC service | **Permit.io** (alt: native + Casbin) | Externalized policy when entitlements get complex |
| Feature flags / experiments | **PostHog feature flags** (alt: Statsig / GrowthBook) | Already in OS via PostHog |
| Product analytics (advanced) | **PostHog + Heap or Mixpanel** | Funnels, retention |
| Session replay | **PostHog Session Replay** OR **FullStory** | Debug UX issues post-launch |
| Customer data platform | **Segment** (alt: RudderStack) | Single event pipeline to N destinations |
| Customer messaging / CRM | **Customer.io** (alt: Braze) | Lifecycle email, in-app messages |
| Sales CRM | **HubSpot** (alt: Pipedrive / Attio) | Lead capture from forms |
| Help center / KB | **Intercom Articles** (alt: HelpScout / Zendesk Guide / Mintlify) | Self-serve support |
| Voice of customer | **Canny** (alt: Productboard) | Public roadmap + feedback intake |
| In-app onboarding tours | **Userflow** (alt: Appcues) | Guided product tours |
| Surveys + NPS | **Sprig** (alt: Delighted / native PostHog surveys) | In-product measurement |
| LLM (multi-provider) | **OpenAI** + **Anthropic** + **Vercel AI SDK** | Multi-provider routing |
| Vector DB | **Turbopuffer** (alt: Pinecone / pgvector on Neon) | RAG for AI features |
| LLM observability | **Langfuse** (alt: Helicone / LangSmith) | Trace prompts, costs, evals |
| AI cost tracking | **Helicone** | Per-user / per-route AI spend |
| Translation / i18n CMS | **Lokalise** (alt: Crowdin) | Manage locale JSONs at scale |
| Geofence / IP intelligence | **Cloudflare** (alt: ipinfo / MaxMind) | Geo-routing, abuse detection |
| Fraud / abuse | **Stripe Radar** + **hCaptcha Enterprise** | Payment fraud + bot mitigation |
| Synthetic monitoring | **Checkly** (alt: Datadog Synthetics) | Multi-step API + browser checks |
| APM / traces | **Datadog APM** OR **Sentry Performance** | Production traces beyond errors |
| Cost / FinOps | **Vercel Spend Caps** + **Vantage** | Multi-vendor cost rollup |
| Data warehouse + BI | **BigQuery / Snowflake** + **Metabase / Hex** | Internal analytics off OLTP DB |
| Push notifications (web/mobile) | **OneSignal** (alt: Knock + APNs/FCM) | When the app has a mobile surface |
| Calendaring API (ops) | **Cal.com API** | Programmatic booking events |
| Document signing | **Documenso** (alt: Dropbox Sign / DocuSign) | Contracts, MSAs, NDAs |
| Live class / video | **LiveKit / Mux Video / Daily** | If video is a feature |

---

## TIER A — AUTOMATION LAYER (Zapier / n8n / Make)

This is **glue between the app and third-party tools the app doesn't import directly**. The pattern: emit webhooks from your app → automation platform routes them → calls services like Slack, Notion, Sheets, HubSpot, Trello, etc.

| Role | Default | Why |
|---|---|---|
| Internal automation runner | **n8n** (self-hosted) | Owns your data, no per-task cost; OSS |
| External / consumer automation | **Zapier** | Best when end-users (your customers) wire their own integrations |
| Embedded integrations marketplace | **Paragon** OR **Pipedream Connect** OR **Nango** | When your SaaS sells "integrate with our app" as a feature |
| iPaaS for enterprise | **Workato** | Replaces Zapier at enterprise scale |
| Local low-code workflows | **Make.com** | Visual flows when n8n is overkill |

### App-side requirements (the OS must support)

- A canonical outbound webhook surface (`/api/events`) that emits typed events.
- A documented event taxonomy (e.g., `lead.created`, `subscription.canceled`, `order.paid`, `appointment.booked`).
- A signed outbound webhook (HMAC-SHA256 in a single header).
- A delivery log table mirroring what we mandate for inbound webhooks.
- Per-customer "automation tokens" if the SaaS itself exposes Zapier/n8n integrations to its users.

### Recommendation for the agency's own work

- **n8n self-hosted** as the default automation runner the agency operates for clients (cheaper, no per-task pricing, IP stays in-house).
- **Zapier** offered as a documented integration when *the client's customers* need it (SaaS templates).
- For "build a plumber website template" → n8n flows pre-wired: form submit → CRM, booking → calendar + SMS, review → Google Business reply prompt.

---

## TIER S — ONGOING SUPPORT TOOLING (post-launch, per-site)

This is what the agency installs on every site shipped, for *ongoing maintenance and support* — separate from what the site itself uses for end-users.

### Health & uptime
- **Better Stack Uptime** — uptime + SSL expiry + DNS expiry alerts.
- **Checkly** — synthetic browser checks (sign-in flow, checkout flow once a day).
- **UptimeRobot** as a free fallback for low-tier client sites.

### Errors + performance
- **Sentry** — share an org across all client projects with per-project rate limits.
- **Vercel Speed Insights** — Web Vitals per route; cheap and zero-config.
- **Datadog** OR **Logtail / Better Stack Logs** for clients with SLAs.

### Backups (beyond DB-managed snapshots)
- **SimpleBackups** OR **Snaplet** (Postgres) — off-site logical dumps; quarterly restore drill.
- **CMS export cron** via Inngest — Sanity → S3/R2 weekly export.

### Security ongoing
- **Snyk** OR **Socket** — npm dependency monitoring per-project.
- **Cloudflare WAF** + **Bot Management** — for high-traffic client sites.
- **GitGuardian** — secret scanning across the repo org.
- **Vanta** for any client pursuing SOC 2.

### Content + SEO maintenance
- **Ahrefs** OR **Semrush** OR **Sitebulb** — quarterly SEO audits.
- **Screaming Frog** — pre/post-launch crawl, redirect map check.
- **Google Search Console** + **Bing Webmaster** — connected from launch.
- **Google Business Profile API** — for local-services templates, monitor reviews and post updates.
- **Sanity content scheduling** — for editorial calendars.

### Operational
- **Linear** OR **Plane** — track issues across all client projects in one workspace.
- **Notion** OR **Outline** — agency-side runbooks, client onboarding docs, brand assets.
- **Slack Connect** — shared channels with each client for incident comms.
- **PagerDuty** OR **Better Stack On-call** — rotate on-call duty across the agency team.

### Customer-facing support tools (per client site)
- **Crisp** OR **Plain** OR **Intercom** — live chat widget installed for the client.
- **Cal.com** OR **TidyCal** — booking integration.
- **Help Scout** OR **HelpJuice** — knowledge base if the client wants self-serve.

### Feedback + roadmap
- **Canny** (per client) — public feedback board.
- **Featurebase** — alternative to Canny.

### Billing / finance for the agency
- **Stripe Billing** for client retainers.
- **Stripe Atlas** if new entities are needed for templates / SaaS spinouts.
- **Wise** / **Mercury** for international payments.

### "Maintenance plan" infra (recurring revenue layer)
For the "1 year free support / paid maintenance" offering:
- A central agency dashboard that aggregates per-client: uptime, errors, deps to update, perf regressions, content TODOs.
- Built on **Linear** + **Sentry org** + **Better Stack** + **n8n** stitching weekly digests.
- Could itself become a productized tool the agency sells.

---

## Priority order for adding YAML rules to the OS

If the OS needs to back this catalog with `integration-rules/*.yaml` so the planner can activate them, the priority order is:

1. **Twilio** (SMS / WhatsApp / voice) — basic for many templates.
2. **Knock** (notifications fan-out) — bridges email/SMS/in-app.
3. **Cal.com** (booking) — every service template needs it.
4. **Cloudflare Turnstile** (form spam) — basic for every site.
5. **Mapbox** OR **Google Places** (geocoding + maps) — local-services templates.
6. **n8n outbound-webhook contract** (the automation glue) — define `/api/events` + signing.
7. **Better Stack Uptime + Status** (post-launch monitoring + status page).
8. **WorkOS** (enterprise SSO when SaaS templates need it).
9. **Vercel AI SDK / Anthropic** (multi-provider rule on top of OpenAI).
10. **Documenso** (e-signatures, common in service businesses).

After these, fill in the rest of standard tier, then advanced, then support.

---

## Cross-references

- App-side integration rules live in: `DOC/knowledge/integration-rules/`
- Feature → integration mapping: `DOC/knowledge/feature-maps/feature-integration-map.json`
- Architecture templates that bundle integrations: `DOC/knowledge/architecture-templates/`
- Industry packs that bias defaults: `DOC/knowledge/industries/`
- Brand → UI translation: `DOC/knowledge/frontend-rules/brand-translation-rules.md`

This document is updated whenever the agency adopts a new integration class or retires an existing one.
