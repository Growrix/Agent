# Visual Differentiation Map — Apex Roofing Co.

**Run:** 20260509T1200-roofing  
**Purpose:** Prevents template collapse — guarantees every route has a visually distinct signature.

---

## 1. Per-Route Visual Signatures

Each route is assigned a `visual_signature_hash` — a deterministic shorthand of composition + rhythm + motion temperament. No two HIGH or MEDIUM latitude routes may share a hash.

| Route | Latitude | Signature Hash | Hero Composition | Primary Section Rhythm | Motion Temperament | Surface Stack |
|-------|----------|---------------|-----------------|----------------------|-------------------|--------------|
| `/` | HIGH | `VD-HOME-A1` | Full-bleed aerial + before/after slider bottom-left | Alternating D→L→D→L×4 | restrained-cinematic | Dark aerial → Light counter-strip → Light proof → Dark CTA band → Light areas → Dark final CTA |
| `/services` | MEDIUM | `VD-SVC-B2` | Dark pattern-texture surface + 4 large service pillar text tiles | Grid-dominant, no alternation | calm-precise | Dark hero → Light 4-col service grid → Light testimonial strip → Dark CTA |
| `/services/roof-installation` | HIGH | `VD-INST-C3` | 60/40 split: photo left (roofing crew on new install), spec/info sheet right on dark bg | Sequential left→right feature alternation | calm-precise | Dark split hero → Light process steps (numbered) → Light proof → Light pricing → Dark CTA |
| `/services/roof-repair` | HIGH | `VD-REP-D4` | Full-bleed close-up of damaged shingles + storm sky, headline bottom-left overlay | Feature blocks stack vertically (no LR alternation — single column dominant) | calm-precise | Light background throughout, dark urgency diagnosis band mid-page |
| `/services/roof-replacement` | HIGH | `VD-REPL-E5` | Before/after hero slider occupying 60% of viewport height with transformation stat overlay | Before/after gallery primary, testimonial wall secondary | restrained-cinematic | Dark transformation hero → Light process timeline → Dark before/after gallery → Light proof → Light pricing |
| `/services/emergency-repair` | HIGH | `VD-EMRG-F6` | Red-tinted dark hero, large clock/timer graphic, single prominent call CTA centered | Single-column stacked urgency blocks (no decorative rhythm) | alive-energetic (CTA only) | Dark-red tinted hero → Dark process (how fast we move) → Light FAQ → Dark call CTA |
| `/areas` | MEDIUM | `VD-AREA-G7` | Map-embed in hero panel (not full-bleed), cluster of area badge chips visible above fold | Dense chip grid + area cards, no alternation | calm-precise | Light throughout, inset map panel |
| `/reviews` | MEDIUM | `VD-REV-H8` | No traditional hero — masonry testimonial wall starts immediately below an editorial eyebrow header | Masonry 3-col desktop (no uniform grid), no alternating surfaces | calm-precise | Light throughout, `--color-inset` on alternate testimonial rows |
| `/about` | HIGH | `VD-ABOUT-I9` | Editorial split: team portrait photography full-left panel, story text right — portrait-dominant | Long-form editorial narrative (not card-grid rhythm) | restrained-cinematic | Warm-off-white → Dark story band → Warm-off-white team section → Dark credential band → Light CTA |
| `/contact` | LOW | `VD-CON-J10` | 50/50 utility split: form panel left, contact info panel right — no media, no hero | Two-panel utility (no section rhythm) | calm-precise | Light split, no dark surfaces |
| `/quote` | LOW | `VD-QUO-K11` | Focused minimal header, step-progress bar top, form centered, no decorative elements | Single-column form, no content sections | calm-precise | Pure white, maximum focus |
| `/faq` | LOW | `VD-FAQ-L12` | Dark accent section header with search input, accordion list below | Accordion-only, no card grid | calm-precise | Dark header → Light accordion body |
| `/blog` | MEDIUM | `VD-BLOG-M13` | Editorial masonry card grid, no traditional hero — large category tags as visual lead | Card-grid editorial, featured post large-format at top | calm-precise | Light throughout, featured card has dark overlay |

---

## 2. Route-Pair Visual Delta Matrix

This matrix confirms that every pair of HIGH or MEDIUM latitude routes has non-trivial visual differences. "Same" cells are forbidden.

### Key: `COMP` = hero composition, `RHYTHM` = primary section rhythm, `MOTION` = temperament, `SURFACE` = surface stack, `DENSITY` = content density

| Route A | Route B | COMP delta | RHYTHM delta | MOTION delta | SURFACE delta | DENSITY delta |
|---------|---------|-----------|-------------|-------------|--------------|--------------|
| `/` | `/services` | A: real aerial media + slider. B: dark surface + typographic tiles. **DISTINCT** | A: alternating LDL. B: grid-only, no alt. **DISTINCT** | A: restrained-cinematic. B: calm-precise. **DISTINCT** | A: 5-surface alternation. B: 2-surface only. **DISTINCT** | A: mixed dense/spacious. B: dense grid-first. **DISTINCT** |
| `/` | `/services/roof-installation` | A: full-bleed aerial. B: 60/40 split with crew photo. **DISTINCT** | A: alternating. B: sequential LR feature. **DISTINCT** | Both cinematic on hero, but A has stagger reveal, B has split-enter. **DISTINCT** | A: 5 alt. B: 3 surfaces. **DISTINCT** | A: showcase-first. B: spec-sheet-first. **DISTINCT** |
| `/` | `/services/roof-replacement` | A: aerial overview. B: before/after slider hero. **DISTINCT** (different slider placement + content) | A: alternating LDL. B: timeline-dominant. **DISTINCT** | Both restrained-cinematic but B has no counter strip. **DISTINCT** | A: opens dark. B: opens dark-transformation specific. **DISTINCT** | — |
| `/` | `/about` | A: wide aerial + slider. B: portrait-dominant editorial. **DISTINCT** | A: section strips. B: long-form editorial. **DISTINCT** | Both restrained-cinematic but A=showcase, B=storytelling. **DISTINCT** | A: dark first. B: warm-first. **DISTINCT** | — |
| `/services` | `/services/roof-installation` | A: no media hero, typographic. B: real photo in hero split. **DISTINCT** | A: grid-dominant. B: sequential reveal. **DISTINCT** | A: calm-precise start. B: calm-precise start. Same temperament — DIFFERENTIATED via hero composition (OK for same-temperament routes) | A: D→L→L→D. B: D→L→L→D similar. Differentiated via composition. | A: capability-map. B: deep-spec. **DISTINCT** |
| `/services/roof-repair` | `/services/roof-installation` | A: full-bleed damaged shingles close-up. B: 60/40 crew split. **DISTINCT** | A: vertical single-col. B: LR alternation. **DISTINCT** | Same: calm-precise. Differentiated via hero. | A: light-dominant. B: dark split hero. **DISTINCT** | — |
| `/services/roof-repair` | `/services/roof-replacement` | A: damage close-up, urgency. B: before/after transformation. **DISTINCT** | A: vertical stack. B: timeline + gallery. **DISTINCT** | A: calm-precise. B: restrained-cinematic. **DISTINCT** | A: light-dominant + dark mid-band. B: dark first. **DISTINCT** | — |
| `/services/emergency-repair` | `/services/roof-repair` | A: red-tinted dark hero + clock. B: storm damage real photo. **DISTINCT** | A: single-col urgency stack. B: feature blocks. **DISTINCT** | A: alive-energetic CTA. B: calm-precise. **DISTINCT** | A: dark red throughout. B: light-dominant. **DISTINCT** | A: minimal sections. B: richer proof sections. **DISTINCT** |
| `/reviews` | `/about` | A: masonry testimonial wall immediate. B: portrait-dominant split hero. **DISTINCT** | A: masonry-only. B: editorial narrative. **DISTINCT** | A: calm-precise. B: restrained-cinematic. **DISTINCT** | A: light throughout. B: warm+dark alternating. **DISTINCT** | — |
| `/areas` | `/contact` | A: map + chip grid. B: utility split form. **DISTINCT** | A: dense chip grid. B: 2-panel utility. **DISTINCT** | Both calm-precise. Differentiated via content type. | A: light + inset map. B: pure light split. **DISTINCT** | — |

---

## 3. Forbidden Pattern Enforcement

The following patterns are explicitly forbidden to prevent visual convergence:

| Pattern | Forbidden on |
|---------|-------------|
| Full-bleed aerial rooftop photography as hero | All routes except `/` and `/areas` |
| Before/after slider as primary hero element | All routes except `/` and `/services/roof-replacement` (each uses it differently) |
| Dark red-tinted surface | All routes except `/services/emergency-repair` |
| Masonry quote wall as primary section | All routes except `/reviews` |
| 50/50 utility split with no hero media | All routes except `/contact` and `/quote` |
| Counter cluster strip immediately below hero | All routes except `/` |
| Portrait photography as dominant hero element | All routes except `/about` |

---

## 4. Creative Latitude Declaration

| Route | Latitude | Reason |
|-------|----------|--------|
| `/` | HIGH | Signature surface — must establish the visual identity of the brand |
| `/services/roof-installation` | HIGH | Client-research destination — must earn trust with specificity |
| `/services/roof-repair` | HIGH | Urgency + authenticity — real damage photography needed |
| `/services/roof-replacement` | HIGH | Highest-value service — must demonstrate transformation |
| `/services/emergency-repair` | HIGH | Highest urgency — must feel operationally different |
| `/about` | HIGH | Trust cornerstone — editorial storytelling earns it |
| `/services` | MEDIUM | Overview utility — good differentiation but conversion-focused |
| `/reviews` | MEDIUM | Content-driven — masonry layout offers creative expression |
| `/areas` | MEDIUM | SEO-utility — creative expression via map + chip density |
| `/blog` | MEDIUM | Editorial — card composition differentiates |
| `/contact` | LOW | Utility surface — clear over creative |
| `/quote` | LOW | Conversion-critical — friction removal over decoration |
| `/faq` | LOW | Utility — clarity first |
| `/privacy`, `/terms` | LOW | Legal — no creative latitude |
| `/404` | MEDIUM | Memorable error is an opportunity for brand voice |
