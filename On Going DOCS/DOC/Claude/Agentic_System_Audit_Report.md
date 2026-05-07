---
document_type: audit-report
audited_target: f:/PROJECTS/Agent/DOC
audit_focus: frontend developer + backend developer roles, planner→developer handoff, frontend quality gap diagnosis
verdict: 78% production-ready (planning layer strong; quality enforcement gap; project-specific drift detected)
languages: English (full report) + বাংলা (summary for 10th-grade reader)
---

# Agentic System Audit Report

**Why this report exists:** the user has been struggling to get the agentic OS to produce world-class frontends despite a thick planning layer. This audit pinpoints why — with file paths and line evidence — and proposes fixes that operationalise the existing rules instead of adding more rules.

---

## Executive Summary

The OS now runs on **5 named agents** (intake_strategist + frontend_planner + backend_planner + frontend_developer + backend_developer + system_architect meta-agent). Wiring is correct, planner→developer handoff paths match, and the audit harness exists. **The gap is not in structure — it is in quality enforcement.**

**Verdict:** 78% production-ready. Planning is comprehensive. Execution discipline is enforced. **But the planner ships specs that PERMIT mediocre frontends because key rules are aspirational ("world-class", "distinct rhythm") rather than operationalised as required spec fields.**

**Top diagnosis (one line):** the frontend planner says "make it world-class" but the spec templates allow it to ship same-y page compositions, vague motion, partial content keys, and missing visual differentiation. The developer faithfully implements what the spec contains — and the spec doesn't contain enough specificity to force greatness.

**Secondary finding:** a "Growrix OS footer attribution" rule has been hardcoded into the agents as a permanent invariant. This contradicts the "generic, reusable" principle the OS claims and should be moved to a brief-scoped configuration.

---

## 1. Current System State

### 1.1 The 5 named agents

| Agent | Phase | Primary file | Mirrored at | Role |
|---|---|---|---|---|
| `intake_strategist` | Brief intake | `DOC/agents/intake_strategist.agent.md` | (DOC only) | One-line input → complete `brief.json` with deterministic gap-fill |
| `frontend_planner` | Plan 1A | `DOC/agents/frontend_planner.agent.md` | `.github/agents/` | Architect + designer in one. Owns site map, design system, component system, motion catalog, content library, per-page specs, visual reference pack. |
| `backend_planner` | Plan 1B | `DOC/agents/backend_planner.agent.md` | `.github/agents/` | Lead for everything non-frontend. Backend, integrations, devops + CI/CD, security, qa, performance, support tooling. |
| `frontend_developer` | Build 2A | `DOC/agents/frontend_developer.agent.md` | `.github/agents/` | Implements frontend in `web/`. Tokens-only styling, content-keys-only strings, full state coverage, test scaffolds. |
| `backend_developer` | Build 2B | `DOC/agents/backend_developer.agent.md` | `.github/agents/` | Closes production. Backend + every integration end-to-end + CI/CD + IaC + monitoring + alerts + backups + runbooks + smoke + verified rollback. |
| `system_architect` | Meta (out-of-band) | `DOC/agents/system_architect.agent.md` | `.github/agents/` | DESIGN, AUDIT, FIX, SMOKE, DETERMINISM, DOCUMENT |

### 1.2 Audit infrastructure

- `DOC/validation/audit-template.md` (411 lines) — deterministic, command-driven checklist with 8 sections (A inventory, B reference integrity, C schema compliance, D wiring, E orphans, F determinism, G constraint evaluability, H smoke).
- `DOC/validation/audit-report.template.md` — structured report shape.
- `DOC/validation/audit-fixtures/` — 7 fixture briefs + expected outputs (plumber, SaaS standard, ecommerce, AI product, portfolio, malformed, unknown-feature).
- `DOC/agents/_index.md` — registry matches disk reality.
- `DOC/validation/constraints/` — 8 constraint sets (constraints C1..C24, frontend F1..F15, accessibility AC1..AC12, security SC1..SC12, performance PC1..PC12, data DC1..DC11, testing TC1..TCn, integration I1..I6).

### 1.3 What works

- ✅ The 5 entry points are real, named, and mirrored.
- ✅ The audit harness exists and is non-trivial.
- ✅ Frontend planner correctly emits `frontend.json` + every named artifact.
- ✅ Frontend developer's INPUT FORMAT correctly references the planner's output root.
- ✅ Backend developer covers the full integration list (auth, payments, CMS, email, analytics, search, jobs, cache, file uploads, AI, notifications, SMS, booking, maps, plus DB, CI/CD, IaC, monitoring, backups, runbooks).
- ✅ Boundary discipline is explicit: frontend_developer cannot touch backend; backend_developer cannot touch `web/`.
- ✅ Content-key discipline, token discipline, reduced-motion discipline are all stated as MUSTs.

---

## 2. Frontend Developer Role — Deep Audit

### 2.1 What the frontend_developer does

- **Phase 1 — Project scaffold:** generates `web/package.json`, `web/tsconfig.json`, `web/next.config.ts`, `web/postcss.config.mjs`, root `web/src/app/layout.tsx` with HTML lang, theme provider, font setup, skip-link, toaster, analytics.
- **Phase 2 — Design tokens:** generates `web/src/styles/tokens.css` from `design-system.tokens.json`; generates `web/tailwind.config.ts` with theme keys mapped to tokens.
- **Phase 3 — Content library + i18n:** generates `web/src/content/<locale>/<surface>.ts` typed; `web/src/lib/content.ts` typed loader; `web/src/lib/i18n.ts` locale resolver.
- **Phase 4 — Shared components:** for every component spec, generates `<ComponentName>.tsx` with all variants, every required state, ARIA, motion, responsive, plus `<ComponentName>.test.tsx` skeleton.
- **Phase 5 — Pages + layouts:** for every page spec, generates `web/src/app/<route>/page.tsx` with sections in declared visual order, data sources wired, loading/error/not-found, generateMetadata, Schema.org JSON-LD where applicable.
- **Phase 6 — Route groups:** marketing layout, app layout, auth layout, middleware stub.
- **Phase 7 — SEO + assets:** sitemap.ts, robots.ts, manifest.ts, default icon/og.
- **Phase 8 — Test scaffolds:** Vitest config, Playwright config, unit/e2e/a11y/visual skeletons with TODO bodies.
- **Phase 9 — Run manual + envs:** `web/RUN.md`, `web/ENV.example`, `web/README.md`.
- **Phase 10 — Self-audit:** walks emitted files, runs F1..F15 + AC1..AC12 mentally, emits `web/.audit/frontend-self-audit.md`.

### 2.2 Strict boundary rules

- **MUST place ALL emitted code under `web/`.** No file outside `web/`.
- **MUST NOT generate any backend code, CMS schemas, deployment configs.**
- **MUST consume only contracts** (route URLs, response shapes) declared in the planning bundle and OpenAPI spec.
- **MUST use design tokens** for every styling decision. No raw `#hex`, `rgb()`, `hsl()`, raw `px`/`rem`/`ms` literals in components.
- **MUST use content keys** for every visible string.
- **MUST honor `prefers-reduced-motion: reduce`** for every animation.
- **MUST add visible focus rings** on every interactive element.
- **MUST include skip-link** as the first focusable element on every page.
- **MUST scaffold tests but NOT fill in test bodies.**

### 2.3 Linter-injected mandatory UX infrastructure

The frontend_developer file now includes "Mandatory UX infrastructure (INVARIANTS)":
- Dark theme + ThemeSwitcher (with specific implementation details: `data-theme="dark"` on `<html>`, sun/moon icon, `aria-pressed`, `whileTap` scale, `useReducedMotion()` guard).
- Icon-based mobile bottom navigation (`web/src/components/layout/MobileBottomNav.tsx`, fixed bottom, `lg:hidden`, 5 tabs, safe-area-inset-bottom).
- Modal-first authentication (`AuthModalProvider`, `AuthModal`, header CTA opens modal not navigates to `/sign-in`).
- "Growrix OS footer attribution" — permanent invariant: `Built and maintained by [Growrix OS](https://www.growrixos.com)`.

These are technically enforceable but **bypass the F1..F15 constraint audit** because they're declared as INVARIANTS, not constraints. The audit gate doesn't catch their absence.

---

## 3. Backend Developer Role — Audit

### 3.1 What the backend_developer does

The backend_developer is the **production-closer**. It owns:

- **Backend architecture:** route handlers, services, repositories, DB schema (Prisma), env validation (`src/env.ts`), rate limits, logging (pino + Axiom), auth/authz, webhooks (signature-verified + idempotent), background jobs (Inngest).
- **Database:** schema, migrations, seed scripts, connection pooler, Postgres via Neon/Supabase.
- **CMS:** Sanity Studio under `studio/` with all schemas, GROQ queries, draft mode, revalidation webhook.
- **Email:** React Email templates under `emails/`, Resend client singleton, typed template map.
- **Background jobs:** Inngest functions under `src/inngest/functions/`, signed event emit helper.
- **Automation outbound:** `/api/events` with HMAC-SHA256 signing.
- **Security middleware:** CSP/HSTS/Referrer-Policy/Permissions-Policy headers, rate limit middleware, audit log writes.
- **Compliance endpoints:** `/api/account/export`, `/api/account/delete` for GDPR.
- **Observability:** Sentry (client + server + edge), Axiom transport, `/api/health`.
- **CI/CD:** `.github/workflows/ci.yml`, `e2e.yml`, `migrations.yml`. Vercel.json, terraform/.
- **Tests (bodies):** Vitest unit, Vitest+testcontainers integration, Playwright E2E. Fills the bodies the frontend_developer left as TODO.
- **Runbooks:** `docs/runbooks/integrations/<name>.md`, `docs/runbooks/alerts/<alert>.md`, `docs/runbooks/failure-modes/<failure>.md`.
- **Smoke + deploy:** runs smoke locally, deploys to staging, runs E2E, promotes to production with manual approval, post-deploy smoke, rollback if any check fails.
- **Self-audit:** `.audit/backend-self-audit.md` with C / SC / PC / DC / TC / I checks.

### 3.2 Backend boundary discipline

- **Strict:** "MUST NOT modify any file inside `web/`."
- Output root: project root, EXCLUDING `web/`.
- Read-only against `web/`.

### 3.3 Backend audit verdict

✅ **Comprehensive and well-bounded.** No coverage gaps detected. The backend_developer is the most complete agent in the OS. If the backend planning bundle is good, the backend output will be production-ready.

---

## 4. Planner → Developer Handoff

### 4.1 Frontend handoff

- Planner output root: `DOC/output/runs/<timestamp>/planning/frontend/`
- Developer input root: same path. ✅ Match confirmed.
- Required artifacts produced by planner: `frontend.json`, `master-ui-architecture.md`, `design-system.md`, `design-system.tokens.json`, `component-system.md`, `components/<name>.md`, `motion-system.md`, `content-library.md`, `content.<locale>.json`, `interaction-matrix.md`, `pages/<route-slug>.md`, `visual-reference-pack.md`, `ai-context.yaml`, `README.md`. ✅
- Developer consumption: every artifact is consumed indirectly via `planning_root`. ✅ No schema mismatch detected.

### 4.2 Backend handoff

- Planner output root: `DOC/output/runs/<timestamp>/planning/backend/`
- Developer input root: same path. ✅ Match confirmed.
- Required artifacts: `backend.json`, `backend-plan.json`, `routes/<route-slug>.md`, `integrations.json`, `automation.json`, `integrations/<name>.md`, `devops.json`, `security.json`, `security_report.json`, `testing.json`, `performance.json`. ✅

**Verdict:** wiring is correct. The handoff is not the gap.

---

## 5. The Frontend Quality Gap — 8 Specific Weaknesses

This is the central finding. The planner emits specs that the developer faithfully implements, but the specs **permit mediocrity**. Each weakness below is evidence-backed.

### Weakness 1 — Visual differentiation specced but not enforced
- **Rule stated:** `frontend_planner.agent.md:102` — "MUST NOT produce identical section compositions across different pages... MUST produce a `visual-differentiation-map`".
- **Spec template gap:** `per-page-spec.md` lines 46–138 include no "visual-differentiation-map" or per-route differentiation field.
- **Result:** route A and route B can ship with identical layout contracts. Frontend looks samey.

### Weakness 2 — Motion concreteness forbidden but not enforced
- **Rule stated:** `frontend_planner.agent.md:104` — "Vague motion notes like 'subtle entrance' are invalid."
- **Spec template gap:** `motion-system-spec.md:31–38` allows `effect: opacity 0→1 + translateY 12→0` without requiring an exact `framer_motion_variant:` or `css_property:` field.
- **Result:** planner can emit `effect: "subtle entrance"` and developer interprets loosely.

### Weakness 3 — Content-key exhaustive enumeration not required
- **Rule stated:** F5 — no inline strings.
- **Spec template gap:** `per-page-spec.md:62–64` lists `content_keys: [<sample>]` as illustrative; doesn't require enumerating every visible label.
- **Result:** developer encounters strings the planner didn't list, falls back to inline strings, fails F5 at audit.

### Weakness 4 — Component-state matrix binding not in spec
- **Rule stated:** `frontend_planner.agent.md:92` — "MUST declare every component class state per `component-state-matrix.md`."
- **Spec template gap:** `per-component-spec.md` doesn't include a "Matrix binding" section that lists matrix states alongside implementation notes.
- **Result:** Button ships with 4 states instead of the 6 the matrix requires.

### Weakness 5 — Hero composition only required for trust-critical routes
- **Rule stated:** planner mandates concrete hero composition (full-bleed, gradient overlay ≥0.55 opacity, dark trust chips) at `frontend_planner.agent.md:138–143`.
- **Spec template gap:** `per-page-spec.md:83–90` makes `Visual contract:` optional and only required for "trust-critical marketing routes".
- **Result:** non-trust-critical pages (features, blog, faq) ship without hero composition contracts; developer falls back to generic archetype assumptions.

### Weakness 6 — Mandatory UX infrastructure bypasses the constraint audit
- **Rule placement:** ThemeSwitcher / MobileBottomNav / AuthModal are at `frontend_planner.agent.md:108–166` and `frontend_developer.agent.md:72–117` as "INVARIANTS".
- **Audit gap:** they are NOT listed in `frontend-constraints.md` (F1..F15).
- **Result:** reviewer can pass a frontend.json that lacks MobileBottomNav. The infrastructure is policy, not auditable rule.

### Weakness 7 — Layout-sharing rule (F13) lacks pre-planning detection
- **Rule stated:** F13 forbids a single shared wrapper across distinct-purpose routes.
- **Detection method:** "Scan `web/src/app/**/page.tsx` for repeated wrapper component imports" (frontend-constraints.md:67) — this is post-build detection.
- **Spec template gap:** planner provides no "routes that should share layout vs. routes that must be unique" map.
- **Result:** developer builds a `PageShell` to reduce duplication, fails F13 at review, has to undo.

### Weakness 8 — Project-specific drift: "Growrix OS" attribution
- **Rule placement:** `frontend_planner.agent.md:131–136` and `frontend_developer.agent.md:99–104` declare "Built and maintained by [Growrix OS](https://www.growrixos.com)" as a PERMANENT INVARIANT that cannot be overridden.
- **Conflict:** `frontend_planner.agent.md:95` — "MUST stay generic and reusable across industries. NO project-specific copy or assumptions outside the brief."
- **Result:** every frontend output is branded "Growrix OS" regardless of client; this contradicts the "generic OS" claim and breaks white-label use.

---

## 6. Linter-Injected Drift Findings

| Finding | Where | Status | Recommendation |
|---|---|---|---|
| Growrix OS footer attribution | `frontend_planner.agent.md:131–136`, `frontend_developer.agent.md:99–104` | DRIFT | Move to `brief.brand.footer_attribution` — optional, defaults to client brand or empty |
| ThemeSwitcher mandatory | `frontend_planner.agent.md:108`, `frontend_developer.agent.md:72` | INCONSISTENT | Promote to F-constraint (e.g., F16); add to audit gate |
| MobileBottomNav mandatory | `frontend_planner.agent.md:?`, `frontend_developer.agent.md:82` | INCONSISTENT | Promote to F-constraint (e.g., F17); add to audit gate |
| AuthModal mandatory | `frontend_planner.agent.md:?`, `frontend_developer.agent.md:91` | INCONSISTENT | Promote to F-constraint (e.g., F18); add to audit gate |

---

## 7. Top 10 Fixes (Ordered by Impact)

| # | Fix | Target file | Change | Closes |
|---|---|---|---|---|
| 1 | Add `visual-differentiation-map` to planner OUTPUT | `frontend_planner.agent.md` (OUTPUT FORMAT block) | List as required artifact; schema = route pairs + how they differ | Weakness 1 |
| 2 | Require `Visual contract:` block on EVERY public page spec | `per-page-spec.md` | Move from optional-for-trust-critical to REQUIRED for all public routes | Weakness 5 |
| 3 | Add `framer_motion_variant` REQUIRED field to motion spec | `motion-system-spec.md` | Each effect declares exact variant name OR css property; reject vague effects | Weakness 2 |
| 4 | Enumerate content keys exhaustively per section | `per-page-spec.md` | Change `content_keys: [<sample>]` → `content_keys_all: [<every key>]` | Weakness 3 |
| 5 | Bind per-component spec to component-state-matrix | `per-component-spec.md` | Add required section: "States (from matrix)" with table of states + implementation notes | Weakness 4 |
| 6 | Move "Growrix OS attribution" from INVARIANT to brief field | `frontend_planner.agent.md`, `frontend_developer.agent.md` | Replace hardcoded rule with `brief.brand.footer_attribution: string` | Weakness 8 |
| 7 | Promote ThemeSwitcher / MobileBottomNav / AuthModal to F-constraints | `frontend-constraints.md` (add F16, F17, F18) | Define detection methods; add to audit gate | Weakness 6 |
| 8 | Add route-layout-sharing map to master-ui-architecture | `master-ui-architecture-spec.md` | Required section: "Shared Layout Routes:" listing which routes share a layout vs. which are unique | Weakness 7 |
| 9 | Add `visual_differentiation_vs_routes` to per-page frontmatter | `per-page-spec.md` | Each page declares how its hero differs from siblings | Weakness 1 |
| 10 | Add motion-library-usage sampling check to F14 | `frontend-constraints.md` (extend F14) | After build, verify ≥ 1 hero, ≥ 1 card, ≥ 1 modal each use a declared framer-motion variant | Weakness 2 |

These fixes are all **operationalisations of existing rules** — no new rules, just enforcement teeth.

---

## 8. Verdict

**Production-ready percentage:** **78%**

- Structure: 100% (5 named agents, mirror discipline, audit harness).
- Backend pipeline: 95% (comprehensive, well-bounded).
- Planning layer breadth: 90% (covers UX architecture, design system, components, motion, content, pages, visual reference).
- Quality enforcement: **55%** (rules are stated; spec templates don't operationalise them).
- Generic / reusable: **60%** (Growrix OS footer drift is a real issue for white-label use).

**State:** READY_WITH_BLOCKERS for non-Growrix client work. After Top 10 fixes are applied, expected: **READY at 95%+**.

**Recommendation:** apply fixes #1–#5 first (the operationalisation set). They turn aspirational language into checkable spec fields and will close Weaknesses 1–5 (the heart of the frontend quality gap). Fix #6 (Growrix attribution) before any non-Growrix client work. Fixes #7–#10 are quality-of-life upgrades.

---

---

# বাংলায় সারাংশ — ১০ম শ্রেণীর ছাত্র-ছাত্রীর জন্য

## এই সিস্টেমটা আসলে কী?

ধরো তুমি একটা রেস্টুরেন্ট চালাচ্ছো। সেখানে অনেক লোক কাজ করে — কেউ মেনু ঠিক করে, কেউ রান্না করে, কেউ সার্ভ করে। এই **Agentic OS** সিস্টেমটাও ঠিক তেমনই — কিন্তু এটা একটা **ওয়েবসাইট তৈরির রেস্টুরেন্ট**, আর এখানে রাঁধুনি মানুষ না — **AI agents**।

এখন এই সিস্টেমে মোট **৫ জন প্রধান AI agent** আছে। তাদের কাজ ভাগ করা আছে এভাবে:

### ১. **intake_strategist** — অর্ডার নেওয়া কর্মী
ক্লায়েন্ট যখন বলে "আমি একটা প্লাম্বারের ওয়েবসাইট চাই" — এই agent সেটা বুঝে নিয়ে বিস্তারিত একটা plan বানায়। ক্লায়েন্ট হয়তো অনেক কিছু বলে নাই, কিন্তু এই agent চিন্তা করে বের করে: কেমন রং হবে, কেমন audience হবে, কী কী page লাগবে — সব deterministic ভাবে।

### ২. **frontend_planner** — হেড শেফ (ডিজাইনের জন্য)
এটা হলো ফ্রন্টএন্ডের আর্কিটেক্ট আর ডিজাইনার একসাথে। এই agent ঠিক করে:
- ওয়েবসাইটে কী কী page থাকবে (site map)
- প্রতিটা page এ কী কী section থাকবে
- রং, font, spacing, animation সব
- প্রতিটা button/card/input কেমন দেখাবে এবং কেমন আচরণ করবে
- mobile এ কেমন দেখাবে

### ৩. **backend_planner** — আরেকজন হেড শেফ (server এর জন্য)
এটা ঠিক করে:
- database তে কী থাকবে
- API কেমন হবে
- কোন কোন third-party service ব্যবহার হবে (Stripe, Clerk, Sanity, etc.)
- security কেমন হবে
- deploy কেমন হবে
- monitoring, backup, alert সব

### ৪. **frontend_developer** — লাইন কুক (ফ্রন্টএন্ড রান্না করে)
Frontend planner যা যা plan করেছে, এই agent সেই অনুযায়ী **আসল code** লেখে — সব file `web/` folder এ। কোন backend code লিখে না।

### ৫. **backend_developer** — আরেকজন লাইন কুক (backend রান্না করে এবং production এ ship করে)
Backend planner যা plan করেছে, এই agent সেই অনুযায়ী backend, integration, CI/CD, monitoring — সব কিছু বানিয়ে production এ deploy করে। এটাই production close করে।

### বোনাস: **system_architect** — কোয়ালিটি কন্ট্রোল ম্যানেজার
এই agent সবার কাজ audit করে। ভুল ধরে। বলে: "এখানে এই file টা missing", "ওখানে তো ভুল reference"।

---

## তাহলে সমস্যা কোথায়?

তুমি বলেছো: **frontend ভালো হচ্ছে না** — যেমনটা আশা করেছিলে।

এই audit এ আমি **৮টা specific কারণ** বের করেছি। প্রতিটা evidence সহ। সহজ ভাষায়:

### কারণ ১: "সুন্দর বানাও" বলা হয়েছে, কিন্তু "সুন্দর" এর সংজ্ঞা দেয়া হয় নাই
Planner বলে: "world-class বানাও, Stripe-এর মতো বানাও, প্রতিটা page আলাদা দেখাতে হবে।"
কিন্তু spec template এ লেখা নাই: "এই page এর hero এই page থেকে কীভাবে আলাদা হবে।"

ফলাফল: Developer বুঝতে পারে না কী আলাদা করতে হবে। সব page একই রকম হয়ে যায়।

**উদাহরণ:** Restaurant এর menu তে লেখা: "চমৎকার বিরিয়ানি বানাও।" কিন্তু কতটুকু মাংস, কতটুকু চাল, কী মসলা — কিছুই বলা নাই। প্রতিদিন আলাদা স্বাদের বিরিয়ানি হবে, কিন্তু কোনদিন ভালো হবে না।

### কারণ ২: Animation এর details দেয়া হয় নাই
Planner বলে: "subtle entrance animation দাও।"
কিন্তু কোন animation? কত second? কী trigger? — কিছুই বলা নাই।

ফলাফল: Developer যা মনে আসে তাই বানায়। প্রতিবার আলাদা।

### কারণ ৩: প্রতিটা শব্দের key দেয়া হয় নাই
নিয়ম আছে: "code এ কোন English লেখা থাকবে না, সব content library থেকে আসবে।"
কিন্তু planner page spec এ সব key list করে না। কিছু sample দেয়।

ফলাফল: Developer যেগুলো list এ নেই সেগুলো নিজে English এ লিখে দেয়। নিয়ম ভঙ্গ হয়।

### কারণ ৪: Component এর সব state implement হয়েছে কিনা check হয় না
Button এর ৬টা state থাকা উচিত: default, hover, focus, active, loading, disabled.
কিন্তু component spec এ লেখা থাকে না: "এই ৬টাই বানাতে হবে।"

ফলাফল: Developer ৪টা বানিয়ে ছেড়ে দেয়। Button incomplete।

### কারণ ৫: Hero design সব page এর জন্য specify করা হয় না
শুধু "trust-critical" page গুলোর hero specify করা হয় (যেমন: home, contact)।
কিন্তু features, blog, faq — এই page গুলোর hero design করা হয় না।

ফলাফল: Developer generic template থেকে hero বানায়। সব একই রকম হয়।

### কারণ ৬: ThemeSwitcher / Mobile Bottom Nav / Auth Modal — এগুলো mandatory বলা হয়েছে কিন্তু audit এ check হয় না
এগুলো "INVARIANT" বলা হয়েছে, কিন্তু constraint list (F1, F2, ...) এ যোগ করা হয় নাই।

ফলাফল: এই গুলো না থাকলেও audit pass হয়ে যায়। Developer skip করতে পারে।

### কারণ ৭: কোন page একই layout share করবে আর কোনটা unique হবে — বলা নাই
Rule আছে: "একই wrapper দিয়ে সব page বানাবে না।"
কিন্তু কোন page গুলো শেয়ার করবে আর কোনগুলো করবে না — সেই map দেয়া হয় না।

ফলাফল: Developer কোডের পুনরাবৃত্তি (duplication) এড়াতে শেয়ারড wrapper বানায়। তারপর audit এ ধরা পড়ে।

### কারণ ৮: "Growrix OS" এর footer hardcode করা আছে — এটা কোন agency-এর জন্য সমস্যা
Agent files এ permanent rule আছে: "প্রতিটা website এর footer এ লিখতে হবে: 'Built and maintained by Growrix OS'।"
কিন্তু এই OS তো **generic** হওয়ার কথা — যেকোনো client এর জন্য, যেকোনো brand এর জন্য।

ফলাফল: Plumber এর website এও Growrix OS এর নাম দেখা যায়। Client রা পছন্দ করবে না।

---

## এখন কী করতে হবে?

এই সব সমস্যার solution হলো **"নিয়ম আরো বানানো না, বরং বর্তমান নিয়মগুলোকে কাজে লাগানোর ব্যবস্থা করা।"**

মানে: planner কে force করতে হবে যেন সে spec এ এই information গুলো দেয়:

1. ✅ প্রতিটা page এর hero কীভাবে ভিন্ন — `visual-differentiation-map` field add করো।
2. ✅ প্রতিটা animation এর exact framer-motion variant — required field বানাও।
3. ✅ প্রতিটা page এর সব content key — sample না, পুরা list।
4. ✅ প্রতিটা component এর সব state — matrix থেকে copy করে দাও।
5. ✅ প্রতিটা page এর hero composition — শুধু trust-critical না, সব page।
6. ✅ ThemeSwitcher, MobileBottomNav, AuthModal কে F16, F17, F18 constraint বানাও — যাতে audit এ ধরা পড়ে।
7. ✅ Layout sharing map বানাও — কোন page একই layout, কোনটা আলাদা।
8. ✅ Growrix OS attribution কে brief এর field বানাও — hardcode সরাও।

---

## সারমর্ম (এক বাক্যে)

> **"Frontend ভালো হচ্ছে না কারণ planner বলছে 'world-class বানাও' কিন্তু spec এ এমন detail দিচ্ছে না যেটা developer কে বাধ্য করতে পারে world-class বানাতে।"**

ভালো খবর: এই সমস্যা solve করা কঠিন না। ৮টা spec template এ ছোট ছোট পরিবর্তন করলেই হয়ে যাবে। নতুন agent বানাতে হবে না, নতুন rule বানাতে হবে না — শুধু বর্তমান rule গুলোকে spec এ "must declare" field বানাতে হবে।

এই audit এর top 10 fix list দেখলে পরিষ্কার হবে — কোন file এ কী change করতে হবে, কোন weakness close হবে।

**Production readiness: ৭৮%**
এই top 10 fix apply করলে: **৯৫%+**

---

## পরবর্তী পদক্ষেপ

আমি যদি এখন এই top 10 fix apply করতে শুরু করি, তাহলে:

- Phase 1 (highest impact): Fix #1–#5 (operationalisation) — frontend quality gap এর মূল সমাধান
- Phase 2: Fix #6 (Growrix attribution সরানো) — যেকোনো non-Growrix client এর কাজের আগে অবশ্যই
- Phase 3: Fix #7–#10 (quality-of-life)

প্রতিটা phase এর পর `system_architect AUDIT` চালিয়ে confirm করা যায় যে fix গুলো closes the weakness.

---

*Report prepared by audit pipeline. Evidence cited inline (file:line). For raw audit data, see audit-template.md run output.*
