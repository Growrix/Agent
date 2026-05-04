# Build Plan — AusPlumb Pro
**Branch:** Plumber_test | **Date:** 2026-05-04 | **Status:** READY FOR EXECUTION
**Plan ref:** `specs/plan.json` | **Design ref:** `reports/system-design.md`

---

## Execution Prerequisites
Before starting codegen, the following must be true:

- [ ] `Plumber_test` branch is checked out
- [ ] `.env.local` created with all env vars from `specs/plan.json → devops.env_vars`
- [ ] Sanity project created (`sanity init`) and `NEXT_PUBLIC_SANITY_PROJECT_ID` set
- [ ] OpenAI API key obtained and set
- [ ] Resend account + domain verified and API key set
- [ ] Calendly embed URL obtained from client
- [ ] Google Maps API key obtained and billing enabled
- [ ] Cloudflare Turnstile site + secret keys created

---

## Stage 0 — Project Bootstrap
*Dependency: none*

| # | Deliverable | Path | Notes |
|---|---|---|---|
| 0.1 | Next.js 14 project init | `/` root | `npx create-next-app@latest --typescript --tailwind --app --src-dir=false` |
| 0.2 | Tailwind config with design tokens | `tailwind.config.ts` | Primary #0F4C81, accent #F59E0B, background #FAF9F7 |
| 0.3 | shadcn/ui init + base components | `components/ui/` | Button, Card, Input, Textarea, Select, Dialog, Sheet |
| 0.4 | ESLint + Prettier config | `.eslintrc.json`, `.prettierrc` | Strict; zero-warnings policy |
| 0.5 | Next.js config (headers, CSP, redirects) | `next.config.ts` | CSP strict-dynamic, HSTS, X-Frame-Options |
| 0.6 | Global layout with font loading | `app/layout.tsx` | Poppins (display) + Inter (body) via next/font |
| 0.7 | Environment variable validation | `lib/env.ts` | Zod schema; throw at startup if missing |
| 0.8 | Sentry initialisation | `sentry.client.config.ts`, `sentry.server.config.ts` | |
| 0.9 | PostHog provider | `components/providers/PostHogProvider.tsx` | Client-side only; respects Cookiebot consent |
| 0.10 | Cookiebot script in layout | `app/layout.tsx` | Non-blocking; async |

---

## Stage 1 — Design System & Global Components
*Dependency: Stage 0 complete*

| # | Deliverable | Path | Notes |
|---|---|---|---|
| 1.1 | Global CSS tokens | `app/globals.css` | CSS custom properties from visual archetype |
| 1.2 | Header component | `components/layout/Header.tsx` | Utility strip (phone + hours), nav, mobile menu, CTA button |
| 1.3 | Footer component | `components/layout/Footer.tsx` | Dense: ABN, licence, hours, areas, phone, WhatsApp, email, social |
| 1.4 | FloatingContactDock | `components/global/FloatingContactDock.tsx` | Three FABs: Call, WhatsApp, AskMax — `fixed bottom-6 right-6 z-50` |
| 1.5 | AIChatDrawer | `components/global/AIChatDrawer.tsx` | Sliding Sheet; streaming messages; lead capture form |
| 1.6 | AnnouncementBanner | `components/layout/AnnouncementBanner.tsx` | Dismissible; emergency hours / promotions |
| 1.7 | SeoHead component | `components/seo/SeoHead.tsx` | JSON-LD schema injection; per-page type |
| 1.8 | LocalBusiness JSON-LD | `lib/seo/schemas/local-business.ts` | Reusable; parametric by page |
| 1.9 | Reduced-motion utility | `lib/hooks/useReducedMotion.ts` | Feeds all animated components |
| 1.10 | Analytics event helpers | `lib/analytics.ts` | PostHog capture wrappers |

---

## Stage 2 — Sanity CMS Setup
*Dependency: Stage 0 complete (can run in parallel with Stage 1)*

| # | Deliverable | Path | Notes |
|---|---|---|---|
| 2.1 | Sanity project + studio scaffold | `sanity/` | `sanity init --project ausplumbpro` |
| 2.2 | `service` document schema | `sanity/schemas/service.ts` | title, slug, heroImage, description, body (PT), faqs, gallery, areas |
| 2.3 | `area` document schema | `sanity/schemas/area.ts` | name, slug, postcodes[], servicesOffered, heroImage, landmarks |
| 2.4 | `review` document schema | `sanity/schemas/review.ts` | author, rating (1-5), text, service ref, area ref, date, source, videoUrl |
| 2.5 | `blogPost` document schema | `sanity/schemas/blogPost.ts` | title, slug, excerpt, body, coverImage, author, publishedAt, tags, seo |
| 2.6 | `galleryItem` document schema | `sanity/schemas/galleryItem.ts` | title, beforeImage, afterImage, service ref, area ref, description |
| 2.7 | `teamMember` document schema | `sanity/schemas/teamMember.ts` | name, role, photo, bio, licenceNumber |
| 2.8 | `faq` document schema | `sanity/schemas/faq.ts` | question, answer, category, service ref |
| 2.9 | `siteSettings` singleton schema | `sanity/schemas/siteSettings.ts` | phone, whatsapp, email, address, ABN, licence, hours, areasServed[] |
| 2.10 | Desk layout (Sanity Studio) | `sanity/structure.ts` | Logical grouping; siteSettings as singleton |
| 2.11 | Sanity client + GROQ helpers | `lib/sanity/client.ts`, `lib/sanity/queries.ts` | Type-safe; ISR-compatible |
| 2.12 | Sanity type generation | `sanity/types.ts` | `sanity typegen` output; import in all fetch helpers |
| 2.13 | Seed data (placeholder content) | `sanity/seed/` | 8 services, 5 areas, 10 reviews, 3 FAQs — for dev |
| 2.14 | On-demand revalidation webhook | `app/api/revalidate/route.ts` | SANITY_WEBHOOK_SECRET validated; revalidatePath per doc type |

---

## Stage 3 — API Route Handlers
*Dependency: Stage 0 complete*

| # | Deliverable | Path | Notes |
|---|---|---|---|
| 3.1 | Quote form handler | `app/api/quote/route.ts` | POST; Zod; Turnstile; Resend → business + user confirmation |
| 3.2 | Contact form handler | `app/api/contact/route.ts` | POST; Zod; Turnstile; Resend |
| 3.3 | Lead capture handler | `app/api/leads/route.ts` | POST; Zod; Resend notification to business |
| 3.4 | AI chat handler (streaming) | `app/api/chat/route.ts` | POST; OpenAI SDK stream; rate limit header check; system prompt injected |
| 3.5 | Maintenance signup handler | `app/api/maintenance-signup/route.ts` | POST; Zod; opt-in flag required; Resend welcome email |
| 3.6 | Coverage check handler | `app/api/coverage-check/route.ts` | GET; ?postcode=; queries static JSON compiled from Sanity areas |
| 3.7 | AI system prompt | `lib/ai/plumber-system-prompt.ts` | Brand, services, suburbs, hours — no raw phone in prompt |
| 3.8 | Resend email templates | `lib/email/templates/` | quote-received.tsx, contact-received.tsx, lead-received.tsx, maintenance-welcome.tsx |
| 3.9 | Zod schemas (shared) | `lib/validation/schemas.ts` | quoteSchema, contactSchema, leadSchema, maintenanceSchema |

---

## Stage 4 — Core Pages (P0)
*Dependency: Stages 1, 2, 3 complete*

### 4.1 — Home Page (`/`)
| Section | Component | Notes |
|---|---|---|
| Hero | `sections/Hero.tsx` | Headline: "Same-day plumbing in [city]"; triple CTA: Call / Quote / Book; real photo bg; trust badges row |
| Trust strip | `sections/TrustStrip.tsx` | Animated stats: 500+ jobs, 10yr, 4.9★, 24/7 |
| Services grid | `sections/ServicesGrid.tsx` | 8 cards, icon + title + 1-line description + "Learn more" link |
| Postcode checker | `sections/PostcodeChecker.tsx` | Inline suburb/postcode lookup; data from Sanity areas JSON |
| Reviews | `sections/ReviewsCarousel.tsx` | Carousel of Sanity reviews; aggregate rating badge |
| Before/after preview | `sections/BeforeAfterPreview.tsx` | 3 gallery items with drag-to-reveal slider |
| Areas served | `sections/AreasServed.tsx` | Tag cloud of suburbs + map embed + postcode checker |
| CTA banner | `sections/CtaBanner.tsx` | "Emergency? We're available 24/7" — amber bg, call + chat CTAs |
| Blog preview | `sections/BlogPreview.tsx` | 3 latest posts from Sanity |
| FAQ preview | `sections/FaqPreview.tsx` | 5 top FAQs; "See all" link |

### 4.2 — Service Detail Page (`/services/[slug]`)
| Section | Notes |
|---|---|
| Hero | Service name, description, same-day badge, call CTA |
| What we do | Portable text body from Sanity |
| Our process | Step-by-step numbered list |
| Before/after gallery | Filtered by service |
| Service areas | Suburbs covered for this service |
| Service-level FAQs | From Sanity FAQ docs (service ref) |
| Reviews for this service | Filtered by service |
| Related services | 3 cards |
| Sticky sidebar / mobile dock | Price range + "Get a free quote" form |

### 4.3 — Areas Overview + Area Landing (`/areas`, `/areas/[slug]`)
| Element | Notes |
|---|---|
| Interactive map | Google Maps; covered suburbs highlighted |
| Suburb grid | Cards linking to each `/areas/[slug]` |
| Area landing hero | "Plumber in [suburb]" headline; local schema |
| Local landmarks | Trust signal: "We know [suburb] roads" |
| Services in area | Available services for that suburb |
| Local reviews | Reviews where area ref = this suburb |
| Emergency CTA | "Need emergency plumbing in [suburb]? Call now" |

### 4.4 — Reviews, About, Contact
| Page | Key elements |
|---|---|
| `/reviews` | Aggregate rating, filter by service/area, video testimonials carousel, Google Reviews badge |
| `/about` | Team grid with photos + licences, company story, values, trust badges, awards |
| `/contact` | All contact methods, Google Map embed, business hours, quote form |

### 4.5 — Legal Pages
| Page | Notes |
|---|---|
| `/privacy` | Privacy Act 1988; data handling; contact for deletion requests |
| `/terms` | ACL statutory guarantee; service scope; payment terms |
| `/404` | Friendly 404; top services links; contact options |

---

## Stage 5 — Recommended Pages (P1)
*Dependency: Stage 4 complete*

| # | Page | Key Features |
|---|---|---|
| 5.1 | `/quote` | 4-step quote estimator wizard + form; Turnstile; Resend confirmation |
| 5.2 | `/book` | Calendly embed + surrounding trust copy; "What to expect" section |
| 5.3 | `/emergency` | High urgency; pulsing Call button; urgency triage tool; 24/7 badge; no nav distractions |
| 5.4 | `/pricing` | Transparent price ranges by service; GST notice; "actual quote may vary" disclaimer; no-price-promise badge |
| 5.5 | `/gallery` | Full before/after gallery; filter by service + area; lightbox |
| 5.6 | `/faq` | Searchable FAQ; grouped by category; FAQPage JSON-LD; "Ask Max" CTA |
| 5.7 | `/blog` | Blog grid; filter by tag; featured post; subscribe to tips CTA |
| 5.8 | `/blog/[slug]` | Full blog post; TOC; related posts; "Got plumbing issues?" CTA |
| 5.9 | `/services/[s]/[a]` | SEO cross-cut page; LocalBusiness scoped to area; dynamic generateStaticParams |

---

## Stage 6 — P2 + Enhancements
*Dependency: Stage 5 complete*

| # | Deliverable | Notes |
|---|---|---|
| 6.1 | `/maintenance` | Maintenance plan page; feature list; email signup form |
| 6.2 | `/sitemap` | HTML sitemap page (not XML — that's auto) |
| 6.3 | Water efficiency calculator | Interactive widget on /maintenance + blog post |
| 6.4 | Social share meta | All blog posts and gallery items |
| 6.5 | Print stylesheet | Contact page and quote confirmation printable |

---

## Stage 7 — SEO & Performance Pass
*Dependency: All pages complete*

| # | Task | Notes |
|---|---|---|
| 7.1 | next-sitemap config + sitemap.xml | All routes included; priority set |
| 7.2 | robots.txt | Allow all; disallow /api/ |
| 7.3 | @vercel/og dynamic images | Service pages + area pages |
| 7.4 | JSON-LD audit | Validate every page type via schema.org/validator |
| 7.5 | Image alt text audit | All images; meaningful descriptions |
| 7.6 | Heading hierarchy audit | Single H1 per page; logical H2/H3 nesting |
| 7.7 | Internal link audit | No orphan pages; every page reachable within 3 clicks |
| 7.8 | Core Web Vitals pass | Run Lighthouse CI; target ≥ 90 all categories |
| 7.9 | Bundle analysis | `@next/bundle-analyzer`; identify and split any chunk > 100kb |

---

## Stage 8 — Accessibility & Compliance Pass
*Dependency: All pages complete*

| # | Task | Notes |
|---|---|---|
| 8.1 | axe-core audit | Zero violations at AA level |
| 8.2 | Keyboard navigation | Every interactive element reachable and operable by keyboard |
| 8.3 | Colour contrast | All text ≥ 4.5:1 (AA); large text ≥ 3:1 |
| 8.4 | Focus indicators | Visible focus ring on all interactive elements |
| 8.5 | ARIA labels | FloatingDock buttons, chat drawer, gallery slider all labelled |
| 8.6 | Reduced motion | Verify all animations disabled under `prefers-reduced-motion` |
| 8.7 | ABN + licence check | Confirm real values present before launch |
| 8.8 | Privacy policy review | Confirm email addresses and contact details are live |
| 8.9 | Cookie consent test | Verify Cookiebot blocks PostHog + GA until consented |

---

## Stage 9 — Testing
*Dependency: Stages 7 + 8 complete*

| # | Test | Tool | Target |
|---|---|---|---|
| 9.1 | Form validation unit tests | Vitest | 100% schema coverage |
| 9.2 | API route handler tests | Vitest + MSW | All happy + error paths |
| 9.3 | E2E: Quote form flow | Playwright | Submit → email confirmation |
| 9.4 | E2E: Call button fires | Playwright | tel: link fires, GA event |
| 9.5 | E2E: AI chat opens + responds | Playwright | Max greets, user sends, response streams |
| 9.6 | E2E: Services → detail → CTA | Playwright | Full nav flow |
| 9.7 | E2E: Area landing from /areas | Playwright | Suburb page loads with correct data |
| 9.8 | E2E: Emergency page — Call Now | Playwright | Pulsing button + tel: link |
| 9.9 | Lighthouse CI gate | GitHub Action | ≥ 90 all categories; blocks PR merge if failing |
| 9.10 | Coverage report | Vitest | ≥ 80% unit coverage |

---

## Stage 10 — DevOps & Launch Prep
*Dependency: Stage 9 green*

| # | Task | Notes |
|---|---|---|
| 10.1 | Vercel project + environment setup | Preview + Production environments |
| 10.2 | Cloudflare DNS config | A/CNAME records to Vercel; proxy enabled |
| 10.3 | Cloudflare Rate Limiting rules | 100 req/min per IP on /api/* |
| 10.4 | BetterStack uptime checks | Homepage, /api/health |
| 10.5 | Sentry release tracking | Source maps uploaded on deploy via GitHub Action |
| 10.6 | Google Search Console verification | HTML tag via Sanity siteSettings |
| 10.7 | PostHog production key | Swap preview key for production key |
| 10.8 | Snyk scan in CI | Block deploy if critical CVE found |
| 10.9 | Environment variables audit | All vars present in Vercel production dashboard |
| 10.10 | Smoke test on production URL | All E2E critical paths re-run against live domain |

---

## Dependency Graph

```
Stage 0 (Bootstrap)
  └── Stage 1 (Design System) ──┐
  └── Stage 2 (Sanity CMS)    ──┼── Stage 4 (Core Pages)
  └── Stage 3 (API Routes)    ──┘       │
                                        └── Stage 5 (P1 Pages)
                                                │
                                                └── Stage 6 (P2)
                                                        │
                                              Stage 7 (SEO/Perf)
                                              Stage 8 (A11y/Legal)
                                                        │
                                                Stage 9 (Testing)
                                                        │
                                               Stage 10 (Launch)
```

---

## File Count Estimate

| Category | Files |
|---|---|
| Pages (app/...) | ~35 |
| Components | ~55 |
| API routes | ~7 |
| Sanity schemas | ~9 |
| Lib utilities | ~15 |
| Email templates | ~4 |
| Test files | ~20 |
| Config files | ~10 |
| **Total** | **~155** |

---

## Verification Checklist (post-build)

Run all of these before declaring the build DONE:

```
□ npx tsc --noEmit          → 0 errors
□ npx eslint . --max-warnings 0  → 0 warnings
□ npx next build             → build succeeds, no errors
□ npx lighthouse https://ausplumbpro.com.au --min-score 0.9
□ npx playwright test        → all E2E pass
□ npx axe https://ausplumbpro.com.au  → 0 violations
□ Validate JSON-LD at schema.org/validator for 5 page types
□ ABN + licence numbers confirmed real values
□ All floating dock buttons functional on mobile (real device)
□ AI chat Max responds correctly on production
```
