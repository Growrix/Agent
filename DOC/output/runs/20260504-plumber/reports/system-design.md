# System Design — AusPlumb Pro
**Branch:** Plumber_test | **Date:** 2026-05-04 | **Status:** LOCKED

---

## 1. What We Are Building

A high-conversion, modern Australian plumbing service marketing website. The primary job of the site is to turn visitors into booked jobs as fast as possible — by phone, WhatsApp, AI chat, or online booking — with trust as the dominant force that drives that conversion.

This is not a SaaS app. There is no user authentication, no payments (Phase 1), and no database. All content is managed through a headless CMS (Sanity). The "application" layer is purely the AI chat assistant and lead capture forms.

---

## 2. Design Principles

| Principle | How It Manifests |
|---|---|
| **Trust first** | Real photos, licence numbers, ABN, years in business, review aggregates — in the above-the-fold zone |
| **Contact in one tap** | Floating dock always present; emergency line in header on desktop |
| **No dead ends** | Every page has a CTA; 404 has contact options; AI chat is always available |
| **Speed** | LCP ≤ 2s on AU 4G mobile; bundle splitting; ISR for CMS pages |
| **Local roots** | Suburb-specific landing pages; service area map; "we serve your area" messaging |
| **Australian compliance** | ABN, licence, GST, Privacy Act, Spam Act — woven in, not bolted on |

---

## 3. Visual Identity

The site follows the **`local-business-trust`** visual archetype:

```
Palette:
  Primary    #0F4C81  Deep navy    (trust, water, credibility)
  Accent     #F59E0B  Amber        (urgency, CTAs, warmth)
  Background #FAF9F7  Warm white   (approachable)
  Surface    #FFFFFF  Pure white   (cards, elevated content)
  
Typography:
  Display/Headings  Poppins (confident, humanist)
  Body              Inter   (legible, web-native)
  
Motion:
  Reassuring, medium-speed, never flashy
  220–280ms macro, 150–200ms micro
  Reduced-motion: fully equivalent static fallback
```

---

## 4. Site Architecture

```
ausplumbpro.com.au
│
├── /                         Home — trust hub + multi-CTA
├── /services                 Services grid overview
│   ├── /services/blocked-drains
│   ├── /services/hot-water-systems
│   ├── /services/leak-detection
│   ├── /services/gas-fitting
│   ├── /services/toilet-repairs
│   ├── /services/pipe-relining
│   ├── /services/emergency-plumbing
│   ├── /services/bathroom-renovations
│   └── /services/[service]/[area-slug]   (SEO cross-cuts, auto-generated)
│
├── /areas                    Coverage map + suburb index
│   └── /areas/[suburb-slug]  Suburb-specific SEO landing pages
│
├── /emergency               24/7 emergency landing (high urgency, direct CTA)
├── /quote                   Free quote estimator + form
├── /book                    Online booking (Calendly embed)
├── /gallery                 Before/after gallery slider
├── /pricing                 Transparent pricing + GST notice
├── /reviews                 Testimonials + video reviews + aggregate rating
├── /about                   Team, history, licence, values
├── /contact                 Map, hours, all contact options
├── /faq                     Searchable FAQ with schema markup
├── /maintenance             Annual maintenance plan + signup
├── /blog                    Homeowner tips (SEO + trust)
│   └── /blog/[slug]         Blog post
├── /privacy                 Privacy policy (Privacy Act 1988)
├── /terms                   Terms + ACL guarantee statement
├── /sitemap                 HTML sitemap
└── /404                     Contextual 404 + contact options
```

---

## 5. Technology Stack

```
Layer             Technology                       Reason
─────────────────────────────────────────────────────────────────────────
Frontend          Next.js 14 App Router (TS)       User's locked default; best ISR + streaming support
Styling           Tailwind CSS + shadcn/ui          Rapid build, accessible components, consistent tokens
CMS               Sanity v3                         Best for local-services content volume; GROQ queries
Forms             React Hook Form + Zod             Type-safe validation; preserves field state on error
Email             Resend                            Simple, reliable; Australian deliverability good
AI Chat           OpenAI gpt-4o-mini (streaming)   Low latency, cost-effective, sufficient for triage bot
Analytics         PostHog                           Privacy-compliant; AU server option; event tracking
Error tracking    Sentry                            Next.js SDK; source maps auto-uploaded on deploy
Hosting           Vercel                            User's locked default; Sydney edge PoP
DNS               Cloudflare                        DDoS protection + edge rate limiting
Spam guard        Cloudflare Turnstile              CAPTCHA alternative; better UX than reCAPTCHA
Cookie consent    Cookiebot                         AU Privacy Act compliant; auto-blocks non-consented scripts
Maps              Google Maps Platform              Best AU suburb data; Static Maps for SEO pages
Booking           Calendly embed                    No backend required; swap-able in Phase 2
Uptime            BetterStack Uptime                Synthetic + real-user monitoring
Security scan     Snyk                              Dependency vulnerability scanning in CI
SEO               next-sitemap + @vercel/og          Sitemap + dynamic OG images
```

---

## 6. The Floating Contact Dock

The most important interactive element on the site. Three FABs, always visible at `fixed bottom-6 right-6`:

```
   ┌────────────────────────────────┐
   │  ○ Ask Max  ← AI chat (pulse)  │
   │  ○ WhatsApp                    │  
   │  ○ Call Now ← primary (green)  │
   └────────────────────────────────┘
         (bottom-right, z-50)
```

**Interaction design:**
- Dock slides up 1.5s after page load (not immediate — lets hero breathe)
- On mobile: each button is 48×48px (accessible touch targets)
- "Ask Max" pulses with a subtle ring animation after 30s of no interaction
- On emergency or plumbing urgency pages: Call button shows a green pulse permanently
- Reduced-motion: all animations disabled; dock appears statically

---

## 7. AI Chat System (Max)

```
User opens chat drawer
        │
        ▼
Max greets: "Hi! I'm Max, your virtual plumbing assistant. 
             Got a burst pipe or blocked drain? I can help."
        │
        ▼
User types (streaming response via /api/chat → OpenAI gpt-4o-mini)
        │
   ┌────┴──────────────────────────────────────┐
   │                                           │
Emergency keywords?                     Normal inquiry
(burst, gas, flood, urgent)                   │
   │                                           ▼
   ▼                               Answer Q or collect lead:
Escalate immediately:              1. "What's your name?"
"This sounds urgent — call us      2. "Your phone number?"
now: [CALL NOW BUTTON]"            3. "What service do you need?"
                                   4. "Your postcode?"
                                   5. "We'll call you back in 15 min"
                                          │
                                          ▼
                                  POST /api/leads → Resend
                                  (notification to business)
```

**System prompt strategy:** Injected from `lib/ai/plumber-system-prompt.ts`
- Contains: brand name, services list, coverage suburbs, business hours, licence info
- Does NOT contain: real phone number in raw form (surfaces as a button instead)
- Rate limited: 20 messages/session, 100 sessions/hour per IP

---

## 8. SEO Architecture

The site earns local search traffic through a three-tier structure:

**Tier 1: Service pages** — "Blocked drain plumber"
`/services/blocked-drains` → targets `blocked drain plumber [city]`

**Tier 2: Area pages** — "Plumber in Parramatta"
`/areas/parramatta-nsw` → targets `plumber parramatta`, `emergency plumber parramatta`

**Tier 3: Cross-cut pages** — "Blocked drain plumber in Parramatta"
`/services/blocked-drains/parramatta-nsw` → targets hyper-local keyword clusters

Each page gets:
- `LocalBusiness` + `PlumbingService` JSON-LD
- Dynamic OG image via `@vercel/og`
- Absolute canonical URL
- Auto-generated XML sitemap entry

---

## 9. CMS Content Architecture (Sanity)

```
Sanity Studio
│
├── Documents
│   ├── service         (8 docs) — title, slug, hero, body (portable text), FAQs, gallery
│   ├── area            (20+ docs) — name, slug, postcodes, services, hero, landmarks
│   ├── review          (ongoing) — author, rating, text, video URL, source
│   ├── blogPost        (ongoing) — title, slug, body, cover, author, tags
│   ├── galleryItem     (ongoing) — before/after image pair, service, area
│   ├── teamMember      (4+ docs) — name, role, photo, bio, licence number
│   ├── faq             (ongoing) — question, answer, category
│   └── siteSettings    (singleton) — phone, WhatsApp, email, ABN, licence, hours
│
└── Desk Layout
    ├── Site Settings (top-level singleton)
    ├── Services
    ├── Areas Served
    ├── Gallery
    ├── Reviews
    ├── Blog
    ├── FAQ
    └── Team
```

---

## 10. Interactive Features Design

### Postcode Coverage Checker
- Input: suburb name or postcode
- Data source: array of postcodes on each Sanity `area` document, compiled to a static JSON at build time
- Result: "✓ Yes, we serve [suburb]! [Book Now]" or "We don't cover that area yet — call us to check"

### Quote Estimator
- 4-step mini-wizard (service → problem description → postcode → name+phone)
- Outputs a price range from a static lookup table in Sanity
- Final step submits to `/api/quote` — business receives full details via Resend

### Before/After Gallery Slider
- Drag or click-and-hold to reveal `before` image underneath `after`
- Mobile: swipe gesture
- Each card: service label + suburb

### Urgency Triage Tool
- 3 yes/no questions
- "Yes" to any → immediate "Call Now" screen with pulsing phone button
- "No" to all → "Book online — we'll confirm within 2 hours"

### Animated Stats (Homepage)
- Triggered by Intersection Observer on viewport entry
- Count-up animation (Framer Motion `useSpring`)
- Values: 500+ jobs, 10+ years, 4.9★, 24/7 availability

---

## 11. Australian Compliance Map

| Requirement | Where displayed |
|---|---|
| ABN | Footer — siteSettings.abn |
| State licence number | Footer + header utility strip |
| GST notice | /pricing — "All prices include GST" |
| ACL guarantee | /terms — statutory guarantee statement |
| Privacy policy | /privacy — Privacy Act 1988 compliant |
| Email opt-in | /maintenance signup + blog subscribe |
| Cookie consent | Cookiebot banner — auto-blocks non-consented scripts |

---

## 12. Phase 2 Roadmap (Not in Scope)

These features are explicitly deferred and will not affect Phase 1 codegen:

| Feature | Requires | Estimate |
|---|---|---|
| Customer portal / job history | Auth (Clerk) + DB (Neon) | Phase 2 |
| Online deposit payments | Stripe + Auth | Phase 2 |
| Google Business live review sync | Google Business Profile OAuth | Phase 2 |
| SMS confirmations | Twilio | Phase 2 |
| Technician ETA tracker | Real-time backend (Pusher/Ably) | Phase 2 |
| Multi-location / franchise | Multi-tenant architecture | Phase 3 |
| Custom booking calendar | Custom backend + availability API | Phase 2 |
| Loyalty / referral program | Auth + DB + Stripe | Phase 3 |

---

## 13. Validation

**Verdict:** `READY` — zero blockers, five non-blocking advisories.

All advisories relate to client-supplied content (brand name, phone, ABN, photos, Calendly setup) — not blocking for development.

See `specs/validation_report.json` for full evidence trail.
