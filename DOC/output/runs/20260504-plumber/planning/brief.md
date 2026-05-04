# Brief — AusPlumb Pro
**Generated:** 2026-05-04 | **Branch:** Plumber_test | **Status:** LOCKED

---

## Project Overview
A modern, interactive plumbing service marketing website targeting Australian homeowners and property managers. The site is built to convert on three primary user intents: emergency contact, quote request, and booking — with trust as the dominant conversion lever.

## Brand Identity
| Field | Value |
|---|---|
| Brand name | AusPlumb Pro *(placeholder — swap before launch)* |
| Voice | Trustworthy, plain-spoken, locally rooted |
| Locale | en-AU |
| Target regions | NSW, VIC, QLD, WA, SA |
| Industry pack | `local-services` → `plumbing` |

## Audience
- **Primary:** Homeowner aged 30–65, urgent or planned plumbing need, mobile-first, makes fast trust decisions.
- **Secondary:** Property manager / landlord with recurring maintenance needs; values reliability and fast turnaround.
- **Emergency segment:** Anyone with a burst pipe, blocked drain, or gas leak — needs one-tap call with zero friction.

## Architecture Decisions
| Decision | Choice | Rationale |
|---|---|---|
| Project archetype | `marketing_site` | No auth, no dashboard, no billing required in Phase 1 |
| Visual archetype | `local-business-trust` | Plumbing industry; trust and locality drive conversion |
| Tier preset | `tier-basic-marketing-site` | Minimum viable stack; no backend complexity needed |
| CMS | Sanity (activated) | > 3 editable pages: 8 services, 20+ area pages, blog, reviews |
| Hosting | Vercel | Per preset; global CDN, edge functions |
| AI Chat | OpenAI GPT-4o-mini streaming | Lead capture + triage; low latency, cost-effective |
| Forms backend | Next.js route handler + Resend | Simple, no DB; resend for quote follow-up emails |
| Analytics | PostHog | Per preset; privacy-compliant for AU |

---

## Site Map

### Required Pages
| Path | Type | Priority |
|---|---|---|
| `/` | Home | P0 |
| `/services` | Services overview | P0 |
| `/services/[slug]` | Service detail (dynamic, 8 services) | P0 |
| `/areas` | Areas served overview | P0 |
| `/areas/[suburb-slug]` | Suburb landing page (dynamic, SEO) | P0 |
| `/reviews` | Reviews & testimonials | P0 |
| `/about` | About / team | P0 |
| `/contact` | Contact page | P0 |
| `/privacy` | Privacy policy | P0 |
| `/terms` | Terms of service | P0 |
| `/404` | Custom 404 | P0 |

### Recommended Pages
| Path | Type | Priority |
|---|---|---|
| `/quote` | Free quote request form | P1 |
| `/book` | Online booking (Calendly embed) | P1 |
| `/faq` | Interactive FAQ with search | P1 |
| `/blog` | Blog index (SEO + homeowner tips) | P1 |
| `/blog/[slug]` | Blog post (dynamic) | P1 |
| `/gallery` | Before/after work gallery | P1 |
| `/emergency` | 24/7 emergency plumbing landing | P1 |
| `/pricing` | Transparent pricing page | P1 |
| `/maintenance` | Maintenance plan / annual inspection | P2 |
| `/sitemap` | HTML sitemap | P2 |

### SEO Cross-cut Pages (auto-generated from Sanity)
- `/services/[service-slug]/[area-slug]` — e.g., `/services/blocked-drains/parramatta`
- Generates `LocalBusiness` + `Service` JSON-LD schema on every page

---

## Services (8 core)
1. **Blocked Drains** — jet blasting, CCTV drain camera, same-day
2. **Hot Water Systems** — install, repair, electric/gas/solar/heat-pump
3. **Leak Detection** — thermal imaging, acoustic detection, no-dig options
4. **Gas Fitting** — gas appliance install/repair, gas leak detection
5. **Toilet Repairs** — cistern, leaking, blocked, replace
6. **Pipe Relining** — no-dig pipe repair, resin lining
7. **Emergency Plumbing** — 24/7, burst pipes, gas emergencies
8. **Bathroom Renovations** — full fit-out, tapware, waterproofing

---

## Floating Contact Dock (bottom-right)
Three stackable FABs (Floating Action Buttons), always visible on mobile and desktop:
1. **Call Now** — `tel:` link; green/amber accent; phone icon
2. **WhatsApp** — `wa.me/` deep link; WhatsApp green; brand icon
3. **Ask Max (AI Chat)** — opens a sliding chat drawer; pulse animation on idle

### AI Chat Persona: Max
- Greeting: *"Hi! I'm Max, AusPlumb Pro's virtual assistant. Burst pipe? Blocked drain? I'll help you fast."*
- Capabilities: service Q&A, suburb coverage check, urgency triage, pricing guidance, lead capture
- Lead capture flow: name → phone → issue → postcode → "We'll call you back within 15 minutes"
- Escalation triggers: `emergency`, `urgent`, `gas leak`, `burst pipe` → surface direct call CTA immediately

---

## Interactive Features

| Feature | Description |
|---|---|
| **Postcode coverage checker** | Instant suburb/postcode lookup — "Do you service my area?" |
| **Quote estimator** | Select service + describe issue → ballpark cost range |
| **Before/after gallery slider** | Drag-to-reveal comparison on completed jobs |
| **Animated stats counters** | 500+ jobs completed, 10+ years, 4.9★ rating — count up on viewport entry |
| **Interactive service area map** | Google Maps embed showing covered suburbs highlighted |
| **Emergency availability badge** | Real-time status: "Available now — 24/7 emergency line" |
| **Plumbing urgency triage tool** | 3-question quiz → "Book online" vs "Call now" recommendation |
| **Water efficiency calculator** | Shows potential savings with modern fixtures |
| **Video testimonials carousel** | Embedded customer video reviews (Loom/YouTube) |
| **Maintenance plan signup** | Annual inspection plan with email onboarding sequence |

---

## Australian Compliance Requirements
- ABN: displayed in footer
- State plumbing licence number: displayed in footer and header utility strip
- GST: "All prices include GST" notation on pricing page
- Australian Consumer Law: statutory guarantees statement on Terms page
- Privacy Act 1988: privacy policy covering form data collection
- Spam Act 2003: opt-in checkbox on email capture forms (maintenance plan, blog subscribe)

---

## Performance Targets (Australian CDN)
- LCP ≤ 2.0s on 4G mobile (Sydney edge)
- FID / INP ≤ 100ms
- CLS ≤ 0.05
- Lighthouse score ≥ 90 (Performance, Accessibility, SEO)
- Core Web Vitals all green

## SEO Posture
- `LocalBusiness` + `PlumbingService` JSON-LD on every page
- `Service` schema on each service detail page
- `FAQPage` schema on FAQ page
- `BlogPosting` schema on blog posts
- Open Graph + Twitter card on all pages
- XML sitemap auto-generated by Next.js
- `hreflang` not required (en-AU only)
- Google Search Console verified

## Tech Stack Summary
| Layer | Technology |
|---|---|
| Frontend | Next.js 14 App Router (TypeScript) |
| Styling | Tailwind CSS + shadcn/ui |
| CMS | Sanity Studio v3 |
| Forms | React Hook Form + Zod |
| Email | Resend |
| AI Chat | OpenAI API (gpt-4o-mini, streaming) |
| Analytics | PostHog |
| Error tracking | Sentry |
| Booking | Calendly embed |
| Maps | Google Maps Platform |
| Hosting | Vercel |
| DNS | Cloudflare |
| Spam guard | Cloudflare Turnstile |
| Cookie consent | Cookiebot |
| Uptime monitor | BetterStack Uptime |
| Security scanning | Snyk |
