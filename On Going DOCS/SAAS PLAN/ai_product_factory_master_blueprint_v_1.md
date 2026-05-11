# AI Product Factory — Master Blueprint
## Complete Execution Architecture for AI-Native SaaS Frontend Development System

Version: 1.1
Status: Implementation-Grade Master Plan
Goal: Build a production-grade AI Product Experience Operating System

This document is the strategic blueprint for the factory. The executable source of truth remains the canonical Agent OS under `DOC/`.

---

# 0. REPOSITORY EXECUTION CONTEXT

This blueprint MUST map directly to the current Agent OS instead of creating a parallel system.

It is binding on these execution surfaces:

- `DOC/agents/frontend_planner.agent.md`
- `DOC/agents/frontend_developer.agent.md`
- `DOC/agents/backend_planner.agent.md`
- `DOC/agents/qa_planner.agent.md`
- `DOC/agents/reviewer.agent.md`
- `DOC/agents/system_architect.agent.md`
- `DOC/execution/spec-rules/*.md`
- `DOC/validation/constraints/*.md`
- `DOC/validation/checklists/*.md`

If this blueprint and the canonical `DOC/` contracts ever disagree, `DOC/` wins until this blueprint is updated.

## CANONICAL ARTIFACT ROOTS

All generated planning and audit artifacts MUST follow the existing repo contract.

- Planning artifacts: `DOC/output/runs/<timestamp>/planning/`
- Frontend planning bundle: `DOC/output/runs/<timestamp>/planning/frontend/`
- Specs: `DOC/output/runs/<timestamp>/specs/`
- Reports: `DOC/output/runs/<timestamp>/reports/`
- Generated runtime app root: declared by `frontend.json.project_root_slug`
- Never generate operative planning artifacts under `On Going DOCS/`

## EXECUTION PATHS

### Full product-factory path

`LOCKED brief` -> `frontend_planner` -> `backend_planner` -> `reviewer` -> `frontend_developer` -> `backend_developer` -> `system_architect AUDIT/SPEC_DIFF`

### Frontend-factory path

`LOCKED brief` -> `frontend_planner` -> `reviewer` -> `frontend_developer` -> `system_architect AUDIT/SPEC_DIFF`

### Repair path

`failed check` -> `owning agent fixes the exact slice` -> `rerun the same narrow gate` -> `re-audit`

The system must never jump from a failed narrow gate into broad speculative rewrites.

## STOP CONDITIONS

The factory MUST stop and block when any of the following is true:

- `brief.lock_status != LOCKED`
- route inventory exists but per-route briefs are incomplete
- required content slots are not fully mapped into page briefs
- quality-bar targets are absent or below the required band
- mandatory UX infrastructure is missing from the planning bundle
- planner output leaves design-critical decisions unresolved for the developer
- build passes but lint, typecheck, smoke, or spec-diff fail

## ACCEPTANCE BUNDLE REQUIRED PER RUN

Every serious run must produce enough evidence to prove the system can be executed again without guesswork.

Planner-side minimum bundle:

- site inventory
- master UI architecture
- design-system narrative and token JSON
- component-system index and component briefs
- motion system
- content library and publish-ready locale JSON
- visual differentiation map
- per-page design briefs
- frontend summary JSON with route coverage and open questions

Developer-side minimum bundle:

- production app in the declared project root
- root shim only when planner requires it
- deterministic runbook files
- executable smoke and release-check scripts
- implemented critical-path tests for smoke coverage
- self-audit with cited evidence against constraints

Audit-side minimum bundle:

- deterministic audit report
- spec-diff report
- document/mirror drift check when agent files change

---

# 1. VISION

You are NOT building:

- a website generator
- a template engine
- a simple AI code generator
- another v0 clone

You ARE building:

# "AI Product Factory"

A complete intelligent system capable of:

- understanding product requirements
- planning software architecture
- selecting design languages
- composing UX experiences
- assembling sections intelligently
- generating scalable frontend systems
- orchestrating motion/interactions
- producing production-grade applications

This system combines:

- Software Architecture Intelligence
- Visual Experience Intelligence
- UX Composition Intelligence
- Builder Execution Intelligence

The system should behave like:

- Product Strategist
- Software Architect
- Creative Director
- UX Designer
- Frontend Engineer
- Motion Designer
- Design System Engineer

all combined into one orchestrated AI system.

---

# 2. CORE PRINCIPLE

NEVER allow raw uncontrolled generation.

The system should:

- curate
- orchestrate
- compose
- assemble
- validate
- enhance

instead of blindly generating.

This is the biggest architectural decision.

---

# 3. MASTER SYSTEM ARCHITECTURE

The platform consists of 6 major intelligence layers.

---

# LAYER 1 — ENGINEERING BRAIN

Folder:

```txt
/core-engineering
```

Purpose:

Software architecture intelligence.

Responsibilities:

- feature planning
- backend planning
- frontend planning
- integration planning
- deployment planning
- database planning
- routing structure
- API architecture
- auth planning
- scalability analysis
- dependency planning
- performance planning
- validation rules

This layer DOES NOT care about visuals.

It only defines:

- what needs to exist
- how systems communicate
- technical requirements
- engineering flows

---

# LAYER 2 — VISUAL EXPERIENCE SYSTEM

Folder:

```txt
/design-system
```

Purpose:

Visual intelligence.

Responsibilities:

- themes
- layout systems
- spacing
- typography
- colors
- shadows
- radii
- visual density
- visual hierarchy
- motion language
- interaction language
- composition rules

This layer decides:

- how products look
- how they feel
- emotional identity
- brand experience

This layer NEVER plans backend architecture.

---

# LAYER 3 — EXPERIENCE COMPOSITION ENGINE

Folder:

```txt
/orchestrator
```

Purpose:

Transforms engineering + design decisions into composable experiences.

Responsibilities:

- section selection
- UX pacing
- layout orchestration
- compatibility matching
- component pairing
- interaction orchestration
- responsive adaptation
- content hierarchy
- storytelling flow

This is the intelligence glue.

---

# LAYER 4 — BUILDER EXECUTION SYSTEM

Folder:

```txt
/builders
```

Purpose:

Converts orchestrated plans into:

- real code
- file systems
- frontend applications
- component structures
- routes
- deployable outputs

Responsibilities:

- Next.js generation
- React generation
- Tailwind generation
- shadcn generation
- animation implementation
- API wiring
- state management setup
- filesystem generation

---

# LAYER 5 — VALIDATION + QA SYSTEM

Folder:

```txt
/validators
```

Purpose:

Ensure generated systems are production safe.

Responsibilities:

- accessibility validation
- responsive validation
- performance validation
- design consistency validation
- motion validation
- layout validation
- semantic HTML validation
- bundle size validation
- dependency validation
- dark mode validation
- animation overload prevention

---

# LAYER 6 — MEMORY + KNOWLEDGE GRAPH

Folder:

```txt
/knowledge
```

Purpose:

Stores reusable intelligence.

Responsibilities:

- component metadata
- compatibility graphs
- visual references
- UX patterns
- style relationships
- motion patterns
- brand personalities
- industry mappings
- reusable flows

This becomes the AI memory layer.

---

# 4. MASTER DEVELOPMENT ROADMAP

The system should be built in the following order.

DO NOT skip order.

The order matters.

---

# PHASE 1 — ENGINEERING BRAIN

Estimated Duration:

6–10 weeks

Priority:

CRITICAL FOUNDATION

---

# GOAL

Create the software architecture intelligence engine.

---

# SUBSYSTEMS

## 1. Product Requirement Analyzer

Input:

```txt
Build a modern AI SaaS dashboard.
```

Output:

- features
- architecture
- routes
- auth requirements
- integrations
- technical scope

---

## 2. Feature Planner

Should identify:

- auth
- dashboard
- analytics
- settings
- billing
- AI chat
- notifications
- teams
- permissions

---

## 3. Frontend Architecture Planner

Should generate:

```txt
/app
/components
/features
/lib
/hooks
/store
/styles
```

Should define:

- folder strategy
- state strategy
- data fetching strategy
- rendering strategy
- caching strategy

---

## 4. API Planning Engine

Should define:

- endpoints
- schemas
- request flows
- auth middleware
- caching
- realtime requirements

---

## 5. Integration Intelligence

Should understand:

- Stripe
- Clerk
- Auth.js
- Supabase
- Firebase
- OpenAI
- Resend
- Vercel
- S3
- Prisma

---

## 6. Deployment Intelligence

Should generate:

- Vercel config
- environment variables
- CI/CD recommendations
- edge/runtime decisions
- image optimization rules

---

# PHASE 1 OUTPUT FORMAT

The engineering brain should produce:

```json
{
  "productType": "saas",
  "routes": [],
  "features": [],
  "apiArchitecture": {},
  "frontendArchitecture": {},
  "stateManagement": {},
  "deployment": {}
}
```

---

# IMPORTANT

This phase MUST become stable.

DO NOT continue to design system before:

- architecture generation works reliably
- routing generation works
- feature planning works
- integration planning works

---

# PHASE 2 — DESIGN TOKEN ENGINE

Estimated Duration:

4–6 weeks

Priority:

CRITICAL FOUNDATION

---

# GOAL

Create universal visual language foundations.

---

# SUBSYSTEMS

## 1. Color System

Support:

- semantic tokens
- theme tokens
- light/dark modes
- brand variants
- contrast validation

Structure:

```txt
primary
secondary
accent
success
warning
danger
muted
surface
```

---

## 2. Typography System

Should support:

- font scales
- responsive typography
- heading hierarchy
- editorial systems
- dashboard typography
- density adaptation

---

## 3. Spacing System

Should define:

- spacing scales
- container widths
- section paddings
- responsive spacing
- layout rhythms

---

## 4. Radius + Shadow System

Should support:

- minimal
- enterprise
- playful
- futuristic
- brutalist

visual styles.

---

## 5. Motion Token System

Must define:

- durations
- easings
- spring presets
- hover timings
- transition categories
- scroll behaviors

---

# REQUIRED OUTPUT

```json
{
  "theme": {},
  "typography": {},
  "spacing": {},
  "motion": {},
  "radii": {},
  "shadows": {}
}
```

---

# PHASE 3 — COMPONENT PRIMITIVE SYSTEM

Estimated Duration:

8–12 weeks

Priority:

EXTREMELY IMPORTANT

---

# GOAL

Create reusable AI-safe primitives.

---

# IMPORTANT PRINCIPLE

DO NOT start with huge complex sections.

Build primitives first.

---

# PRIMITIVES

## Layout Primitives

- Container
- Stack
- Grid
- Flex
- Section
- Surface
- Spacer

---

## Typography Primitives

- Heading
- Text
- Label
- Badge
- Caption

---

## Interaction Primitives

- Button
- Link
- IconButton
- Input
- Textarea
- Select
- Modal
- Drawer
- Tooltip

---

## Display Primitives

- Card
- Avatar
- Chart
- Table
- Tabs
- Accordion
- Progress
- Skeleton

---

# EACH COMPONENT MUST INCLUDE

## 1. Metadata

```json
{
  "category": "button",
  "style": ["minimal", "premium"],
  "bestFor": ["saas", "dashboard"],
  "motionLevel": "low"
}
```

---

## 2. Accessibility Rules

Must include:

- aria labels
- focus states
- keyboard support
- contrast compliance

---

## 3. Responsive Rules

Must support:

- mobile
- tablet
- desktop

---

## 4. Motion Rules

Must define:

- hover behavior
- active states
- transitions
- loading states

---

# PHASE 4 — SECTION EXPERIENCE LIBRARY

Estimated Duration:

12–20 weeks

Priority:

MASSIVE DIFFERENTIATOR

---

# GOAL

Build curated experience composition units.

---

# IMPORTANT

DO NOT think:

"components"

Think:

"experience sections"

---

# SECTION CATEGORIES

## Marketing

- Hero
- Features
- CTA
- Testimonials
- Pricing
- FAQ
- Logo Cloud
- Stats
- Team
- Blog
- Footer

---

## SaaS

- Dashboard Hero
- Analytics Panels
- AI Chat Interfaces
- Command Bars
- Tables
- Team Management
- Billing
- Notifications

---

## Commerce

- Product Grid
- Product Detail
- Cart
- Checkout
- Reviews
- Upsell

---

## Auth

- Login
- Signup
- Forgot Password
- OTP
- MFA

---

# EACH SECTION MUST INCLUDE

## 1. Preview Image

Required.

---

## 2. Metadata

```json
{
  "type": "hero",
  "style": ["premium", "futuristic"],
  "industry": ["ai", "saas"],
  "density": "comfortable",
  "motion": "medium",
  "compatibleWith": ["logo-cloud", "stats-grid"]
}
```

---

## 3. Content Slots

Must define:

- title
- subtitle
- CTA
- media
- stats
- trust indicators

---

## 4. Responsive Variants

Each section must have:

- mobile strategy
- tablet strategy
- desktop strategy

---

## 5. Motion Strategy

Must define:

- reveal animations
- hover animations
- transition timing
- scroll choreography

---

# INITIAL TARGET

DO NOT build thousands.

Build:

- 20 hero sections
- 20 feature sections
- 15 CTA sections
- 10 pricing sections
- 10 testimonial systems
- 10 dashboards

HIGH QUALITY ONLY.

---

# PHASE 5 — MOTION EXPERIENCE SYSTEM

Estimated Duration:

6–10 weeks

Priority:

PREMIUM UX DIFFERENTIATOR

---

# GOAL

Create reusable motion intelligence.

---

# SUBSYSTEMS

## 1. Animation Primitives

Examples:

- fade
- slide
- scale
- reveal
- stagger
- parallax

---

## 2. Transition System

Should define:

- page transitions
- modal transitions
- route transitions
- loading transitions

---

## 3. Scroll Engine

Should support:

- scroll reveals
- pinned sections
- storytelling flows
- timeline animations

---

## 4. Interaction Engine

Should support:

- hover responses
- magnetic interactions
- cursor systems
- micro feedback

---

## 5. Motion Personality System

Examples:

- Apple-like
- Linear-like
- Stripe-like
- Framer-like
- Enterprise-clean

---

# IMPORTANT RULE

Motion should NEVER be random.

Every motion decision must map to:

- product type
- brand personality
- density
- UX intent

---

# PHASE 6 — EXPERIENCE RULE ENGINE

Estimated Duration:

8–12 weeks

Priority:

CRITICAL INTELLIGENCE LAYER

---

# GOAL

Teach AI design psychology.

---

# SUBSYSTEMS

## 1. UX Pacing Rules

Examples:

```txt
Hero
↓
Trust
↓
Features
↓
Benefits
↓
CTA
```

---

## 2. Visual Hierarchy Rules

Should understand:

- attention priority
- spacing hierarchy
- CTA emphasis
- reading patterns

---

## 3. Emotional Journey Rules

Examples:

- excitement
- trust
- authority
- clarity
- confidence

---

## 4. Conversion Psychology

Should understand:

- trust signals
- urgency
- proof systems
- pricing psychology

---

## 5. Density Rules

Should understand:

- enterprise density
- minimal density
- comfortable density

---

# PHASE 7 — AI METADATA KNOWLEDGE GRAPH

Estimated Duration:

8–14 weeks

Priority:

CORE AI INTELLIGENCE

---

# GOAL

Create searchable design intelligence.

---

# REQUIRED KNOWLEDGE TYPES

## 1. Compatibility Graph

```txt
hero-x pairs with pricing-y
```

---

## 2. Industry Mapping

```txt
fintech → premium minimal
```

---

## 3. Motion Mapping

```txt
playful → high motion
enterprise → low motion
```

---

## 4. Brand Mapping

```txt
brand personality → visual system
```

---

## 5. Layout Relationships

```txt
dashboard layouts
landing layouts
editorial layouts
```

---

# STORAGE STRUCTURE

Use:

- JSON
- vector database
- embeddings
- visual indexing
- screenshot tagging

---

# PHASE 8 — UI ORCHESTRATOR

Estimated Duration:

10–16 weeks

Priority:

THE MAGIC LAYER

---

# GOAL

Compose complete experiences.

---

# RESPONSIBILITIES

## 1. Theme Selection

## 2. Section Selection

## 3. Compatibility Matching

## 4. Layout Composition

## 5. Motion Coordination

## 6. Responsive Adaptation

## 7. Content Placement

## 8. UX Pacing

---

# EXAMPLE FLOW

Input:

```txt
Build futuristic AI startup landing page.
```

Orchestrator decides:

- dark premium theme
- futuristic hero
- smooth medium motion
- minimal pricing
- AI-focused CTA
- glassmorphism cards

---

# IMPORTANT

The orchestrator should NOT generate raw JSX.

It should:

- select
- compose
- orchestrate

---

# PHASE 9 — PAGE COMPOSITION ENGINE

Estimated Duration:

8–14 weeks

Priority:

CORE EXPERIENCE GENERATION

---

# GOAL

Generate full page systems.

---

# PAGE TYPES

## Marketing

- Landing pages
- Agency pages
- Startup sites
- Product launch pages

---

## Application

- Dashboards
- Admin panels
- Analytics
- AI apps
- Team systems

---

## Commerce

- Storefronts
- Checkout systems
- Product pages

---

## Editorial

- Blogs
- Docs
- Knowledge systems

---

# PAGE ENGINE RESPONSIBILITIES

- section sequencing
- spacing orchestration
- responsive coordination
- route consistency
- content density balancing

---

# PHASE 10 — BUILDER EXECUTION ENGINE

Estimated Duration:

10–18 weeks

Priority:

PRODUCTION OUTPUT LAYER

---

# GOAL

Convert orchestrated systems into real production apps.

---

# SUPPORTED STACKS

## Core

- Next.js
- React
- Tailwind
- TypeScript

---

## UI

- shadcn/ui
- Radix
- Framer Motion

---

## Backend

- Supabase
- Firebase
- Prisma
- PostgreSQL

---

# BUILDER RESPONSIBILITIES

## 1. File Generation

## 2. Route Generation

## 3. Component Generation

## 4. State Management

## 5. Animation Wiring

## 6. Theme Wiring

## 7. Dependency Installation

## 8. Config Generation

## 9. Environment Setup

## 10. Deployment Config

---

# OUTPUT MUST BE

- scalable
- maintainable
- production-ready
- typed
- responsive
- accessible

---

# PHASE 11 — VALIDATION + QUALITY SYSTEM

Estimated Duration:

6–10 weeks

Priority:

MANDATORY

---

# GOAL

Prevent low-quality AI output.

---

# VALIDATORS

## 1. Accessibility Validator

Checks:

- aria
- keyboard nav
- contrast
- focus states

---

## 2. Responsive Validator

Checks:

- overflow
- breakpoints
- scaling
- touch spacing

---

## 3. Performance Validator

Checks:

- animation overload
- bundle size
- image optimization
- lazy loading

---

## 4. Design Validator

Checks:

- spacing consistency
- typography consistency
- hierarchy
- alignment

---

## 5. Motion Validator

Checks:

- duration consistency
- motion overload
- interaction conflicts

---

## REQUIRED PRODUCTION TEST AND RELEASE GATE

This phase is not complete until it defines executable validation, not just validator categories.

Every frontend build produced from this factory MUST ship with a deterministic command surface:

- `lint`
- `typecheck`
- `test`
- `test:unit`
- `test:a11y`
- `e2e:smoke`
- `e2e:full`
- `build`
- `audit:frontend`
- `release:check`

`release:check` is the aggregate local production gate. It MUST fail fast on the first failing stage and MUST run, in order:

1. repository/runtime-root detection
2. dependency validation
3. lint with zero warnings tolerated
4. typecheck with zero errors tolerated
5. unit/component tests
6. accessibility smoke tests
7. Playwright smoke on desktop + mobile + reduced-motion
8. full production build
9. post-build smoke against the local preview server
10. planner-vs-output spec-diff check
11. frontend self-audit evidence generation

The smoke layer MUST contain real executable tests, not TODO-only placeholders, for the following minimum journeys:

- home route renders without console or hydration errors
- primary navigation works on desktop and mobile
- ThemeSwitcher changes theme and persists preference
- MobileBottomNav renders on mobile breakpoints and routes correctly
- AuthModal opens, switches mode, closes, and fallback auth routes resolve
- primary conversion surface is reachable in two interactions or less from home
- one content route, one conversion route, and one contact/support route all resolve with 200-equivalent app responses

The full E2E layer MUST extend beyond smoke and cover:

- route differentiation and no shared-wrapper collapse on public routes
- reduced-motion behavior
- keyboard navigation and focus visibility
- dark-theme contrast on trust-critical surfaces
- loading, error, empty, and offline states for declared dynamic surfaces

The factory must consider a build `NOT PRODUCTION READY` if code compiles but any of the above evidence is missing.

---

# PHASE 12 — VISUAL SEARCH + RETRIEVAL ENGINE

Estimated Duration:

6–12 weeks

Priority:

MASSIVE AI UPGRADE

---

# GOAL

Allow AI to retrieve visual intelligence.

---

# FEATURES

## 1. Screenshot Search

## 2. Metadata Search

## 3. Style Search

## 4. Industry Search

## 5. Motion Search

## 6. UX Pattern Search

---

# EXAMPLE

```txt
Find futuristic fintech hero.
```

Returns:

- best matching sections
- compatible pricing systems
- motion presets
- theme systems

---

# PHASE 13 — BRAND PERSONALITY ENGINE

Estimated Duration:

4–8 weeks

Priority:

HIGH VALUE

---

# GOAL

Allow entire UI systems to adapt to brand identity.

---

# BRAND VARIABLES

```json
{
  "personality": "playful",
  "motion": "high",
  "density": "comfortable",
  "radius": "rounded",
  "style": "modern"
}
```

---

# SHOULD CONTROL

- typography
- motion
- spacing
- color usage
- density
- component styling
- interaction energy

---

# PHASE 14 — MULTI-AGENT AI SYSTEM

Estimated Duration:

8–14 weeks

Priority:

ADVANCED INTELLIGENCE

---

# GOAL

Split intelligence responsibilities.

---

# AGENTS

## 1. Product Strategist Agent

## 2. Software Architect Agent

## 3. UX Planner Agent

## 4. Design Curator Agent

## 5. Motion Director Agent

## 6. Frontend Builder Agent

## 7. QA Validator Agent

## 8. Performance Optimizer Agent

---

# ORCHESTRATION FLOW

```txt
User Intent
↓
Product Strategist
↓
Software Architect
↓
Design Curator
↓
UX Composer
↓
Builder
↓
Validator
↓
Deployment
```

---

## REQUIRED AGENT WIRING TO THE CURRENT OS

This blueprint is only valid if it is translated into the existing agent responsibilities.

### frontend_planner

Must translate this blueprint into deterministic artifacts, not narrative summaries. It owns:

- route inventory completeness
- visual differentiation mapping
- per-page design briefs with publish-ready draft copy
- explicit quality-bar targets per page
- runtime-root, export, and dev-server contracts
- required smoke-route declarations for execution

### frontend_developer

Must implement the locked bundle exactly, and must not downgrade execution to generic templates. It owns:

- unique page composition per route
- design-token-only implementation
- required UX infrastructure implementation
- executable smoke tests and release gate scripts
- Playwright and accessibility smoke coverage for mandatory surfaces
- self-audit with evidence against planner outputs and frontend constraints

### backend_planner and qa_planner

Must supply the validation envelope needed for production readiness even for frontend-focused runs. They own:

- test matrix and CI gate declarations
- smoke probe definitions
- environment and preview/production gate expectations
- post-deploy rollback expectations when smoke fails

### reviewer

Must treat these failures as blocking:

- page briefs that are visually repetitive
- missing quality-bar targets
- missing route coverage
- missing smoke journeys
- TODO-only testing on mandatory critical paths

### system_architect

Must be able to audit this factory as a system, not just inspect prose. It owns:

- audit evidence for blueprint-to-agent wiring
- mirror drift detection between `DOC/agents/` and `.github/agents/`
- spec-diff between planning bundle and emitted frontend
- determinism checks for repeated planning outputs
- document updates when the factory contract changes

---

## DELIVERY STRATEGY FOR THIS REPOSITORY

To make this blueprint work in real tasks without recurring repair loops, implementation should follow this exact order:

1. harden the planning contract
2. harden the developer execution contract
3. add executable readiness scripts
4. wire audits and spec-diff checks
5. only then run new frontend builds on live briefs

Skipping this order recreates the same failure pattern: decent-looking first output followed by repeated manual fixes.

---

# 5. MASTER FOLDER STRUCTURE

```txt
/apps
/core-engineering
/design-system
/orchestrator
/builders
/validators
/knowledge
/agents
/sections
/components
/themes
/motion
/tokens
/ux-rules
/metadata
/search
/assets
/previews
/generated
```

---

# 6. TECH STACK

---

# FRONTEND

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Radix UI
- Zustand
- TanStack Query

---

# BACKEND

- Node.js
- NestJS or Hono
- PostgreSQL
- Prisma
- Redis
- Supabase

---

# AI

- OpenAI
- Claude
- Gemini
- Local Models

---

# SEARCH

- Vector DB
- Pinecone
- Weaviate
- pgvector

---

# STORAGE

- S3
- Cloudflare R2
- Supabase Storage

---

# DEPLOYMENT

- Vercel
- Railway
- Docker
- Kubernetes

---

# 7. AI PROMPTING STRATEGY

---

# NEVER ALLOW FREEFORM GENERATION

Instead:

```txt
AI selects from curated systems.
```

---

# AI SHOULD

- retrieve
- rank
- compose
- validate
- adapt

---

# PROMPTING MODEL

## Step 1 — Analyze

## Step 2 — Retrieve

## Step 3 — Compose

## Step 4 — Validate

## Step 5 — Generate

## Step 6 — Optimize

---

# 8. UX PHILOSOPHY

The system should optimize for:

- clarity
- hierarchy
- premium feeling
- responsiveness
- accessibility
- conversion
- emotional engagement

---

# 9. IMPORTANT ARCHITECTURAL WARNINGS

---

# DO NOT

## 1. Merge DOC + Design

Keep separate forever.

---

## 2. Generate Random Components

Curated systems only.

---

## 3. Build Thousands Early

Quality over quantity.

---

## 4. Ignore Metadata

Metadata is the intelligence layer.

---

## 5. Ignore Motion

Motion defines premium UX.

---

## 6. Ignore Responsive Design

Mobile-first mandatory.

---

## 7. Ignore Accessibility

Accessibility must be foundational.

---

# 10. MVP RECOMMENDATION

Build in this order.

---

# MVP 1

Engineering Brain
+
Basic Design Tokens
+
20 curated sections
+
Simple orchestrator
+
Next.js builder

---

# MVP 2

Motion system
+
Compatibility graph
+
Responsive intelligence
+
Metadata search

---

# MVP 3

Multi-agent orchestration
+
Brand personality engine
+
Advanced composition
+
Visual retrieval

---

# 11. FINAL ENDGAME

The final system should work like this:

```txt
User Idea
↓
Product Intelligence
↓
Architecture Planning
↓
Visual System Selection
↓
UX Composition
↓
Motion Orchestration
↓
Code Generation
↓
Validation
↓
Deployment
```

---

# 12. FINAL REALITY

You are NOT building:

- a component library
- a no-code tool
- a template generator

You ARE building:

# "AI Product Experience Operating System"

This is fundamentally:

- AI-native
- metadata-driven
- composition-first
- design-intelligent
- architecture-aware
- production-oriented

---

# 13. MOST IMPORTANT EXECUTION PRINCIPLE

Your biggest advantage will NOT come from:

- better code generation

It will come from:

- better orchestration
- better metadata
- better curation
- better UX intelligence
- better composition
- better motion systems
- better visual retrieval

This is the true future moat.

---

# 14. FINAL EXECUTION ORDER (ABSOLUTE PRIORITY)

1. Engineering Brain
2. Design Tokens
3. Primitive Components
4. Section Library
5. Metadata System
6. Orchestrator
7. Motion System
8. Validation System
9. Builder Engine
10. Visual Retrieval
11. Brand Intelligence
12. Multi-Agent Intelligence

DO NOT change this order.

This order minimizes architectural debt and prevents future rewrites.

---

# 15. FINAL SUCCESS METRIC

Success is NOT:

"AI generated a website"

Success IS:

"AI generated a premium production-grade product experience system with scalable architecture, curated UX, intelligent composition, accessibility, responsive behavior, motion orchestration, and deployable code."

---

END OF MASTER BLUEPRINT

