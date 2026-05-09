# Visual Reference Pack — Apex Roofing Co.

**Run:** 20260509T1200-roofing  
**Purpose:** Hero composition specs, mobile composition specs, and asset brief for every key surface.

---

## 1. Hero Composition Specs

### 1.1 Home (`/`) — Signature Hero

**Composition type:** Full-bleed cinematic aerial

**Panel hierarchy:**
1. `MediaFrame` — aerial drone photo of residential rooftop (subject) with neighborhood context (depth). Object position: `center 30%` — keeps roof as primary subject, sky as breathing room.
2. `Surface(overlay)` — gradient `linear-gradient(180deg, rgba(15,25,35,0.10) 0%, rgba(15,25,35,0.55) 50%, rgba(15,25,35,0.92) 100%)`. Gradient direction: top (transparent) to bottom (heavy dark). Ensures headline contrast at bottom.
3. Content `Frame` — anchored `bottom-left`, `padding: 64px desktop / 32px mobile`. Contains: overline → H1 (two lines, 800 weight) → subhead → CTA row → `TrustBadgeCluster` (3 dark pills).

**Before/After slider placement:** Overlaps the bottom edge of the hero — the slider appears at the hero-to-content transition. On desktop: 60vw wide, centered-left. On mobile: full-width.

**Visual focus:** The roofline itself — the craft of the work. Sky provides cinematic depth. Gradient ensures text is ALWAYS legible (no color-dependent trust).

**Required photo spec:**
- Minimum resolution: 3200 × 1800px
- Orientation: landscape, wide-angle (≥ 24mm equivalent)
- Subject: residential roof in excellent completed condition (or during active work with crew visible)
- Sky: dramatic (golden hour, blue hour, or post-storm clearing) — not flat midday white
- No people's faces visible without release
- No temporary construction signage or equipment branding visible

**Gradient overlay minimum:** Bottom 50% at opacity ≥ 0.55. Verified WCAG 4.5:1 for `--font-size-body` text at bottom.

**Trust chip contrast:** Dark pill: `background: rgba(0,0,0,0.60)`, `color: --color-text-inverse`. Contrast ratio verified: 9.4:1 (AAA).

---

### 1.2 Roof Installation (`/services/roof-installation`) — Editorial Split

**Composition type:** 60/40 split — photo left, spec content right

**Panel hierarchy:**
1. Left panel (60%): `MediaFrame` — full panel height, portrait-crop of roofing crew actively installing shingles on a residential roof. `object-position: center center`. No overlay needed (content is on the right).
2. Right panel (40%): `Surface(dark)` — `--color-primary` background. Contains: overline → H1 → subhead → 2 trust badges → CTA buttons.

**Visual focus:** Human craft and technical precision. Crew visible, wearing safety gear, working on a real job. Not a stock photo of isolated shingles.

**Required photo spec:**
- Portrait or landscape (portrait preferred for 60/40 split — fills height well)
- Subject: actual crew at an active installation site
- Safety equipment visible (boosts trust)
- Bright daylight — clear sky or partial cloud
- Real residential property in background

---

### 1.3 Roof Repair (`/services/roof-repair`) — Damage Close-Up

**Composition type:** Full-bleed damage photography, headline bottom-left

**Panel hierarchy:**
1. `MediaFrame` — extreme close-up or medium shot of real storm-damaged shingles. `object-position: center 60%` — keeps damaged zone in focus. Sky visible at top (storm mood).
2. `Surface(overlay)` — gradient from bottom: `linear-gradient(0deg, rgba(15,25,35,0.92) 0%, rgba(15,25,35,0.40) 50%, rgba(15,25,35,0.00) 80%)`. Bottom-heavy dark, top clear (reveals damaged roof in full clarity).
3. Content `Frame` — `bottom-left`. Contains: overline → H1 → subhead → CTA (phone primary, quote secondary) → TrustBadgeCluster.

**Visual focus:** The problem being solved — real damage that evokes recognition ("that's what my roof looks like"). Dark sky mood creates appropriate urgency without manufactured alarm.

**Required photo spec:**
- Subject: actual storm damage (missing shingles, cracked tiles, wind peel, or leak staining) — NOT a catalogue illustration
- Dark or stormy sky context preferred
- No brand logos or license plates visible
- Real property — no CGI or digitally manipulated backgrounds

---

### 1.4 Roof Replacement (`/services/roof-replacement`) — Before/After Hero

**Composition type:** Before/after slider spanning 60% viewport height

**Panel hierarchy:**
1. `BeforeAfterSlider` component — fills `min-height: 60svh`. Left side: "before" state (damaged/old roof). Right side: "after" state (completed replacement). Same property, same camera angle, same time of day preferred.
2. `Surface(dark)` header band — ABOVE the slider (not overlaid). Contains: overline → H1 → subhead → CTA buttons.
3. Stat overlay — dark pill cluster at the bottom edge of the slider (overlaps onto the content below): "2,400+ Roofs Replaced" + "18 Years Experience".

**Visual focus:** The transformation — the dramatic before/after is the proof. Slider interaction makes the visitor an active participant in the reveal.

**Required photo spec (pair):**
- Both images: identical property, identical camera position and zoom, natural lighting similar time of day
- "Before": clearly showing deteriorated or damaged state
- "After": newly completed, clean, even shingles, professional finish
- Minimum 1600 × 1000px per image
- Same season preferred (avoids foliage difference distracting from roof)

---

### 1.5 Emergency Repair (`/services/emergency-repair`) — Dark CTA Surface

**Composition type:** Pure surface — no background media

**Panel hierarchy:**
1. `Surface(dark)` with red tint: `background: color-mix(in srgb, var(--color-primary) 88%, var(--color-destructive) 12%)`.
2. Centered `Stack`. Eyebrow: "24/7 Emergency Service" (`--color-destructive` tint on text). H1: large, white. Phone number: `--font-size-display-2`, `--color-accent`. Subhead: response time. CTA row.

**Visual focus:** Instant phone number legibility. No visual decoration that could delay parsing.

**No background media.** The visual weight of the dark surface + large accent phone number is the hero.

---

### 1.6 About (`/about`) — Portrait Editorial Split

**Composition type:** 50/50 split — portrait photo left, story text right

**Panel hierarchy:**
1. Left panel (50%): `MediaFrame` — team portrait on actual job site. Full panel height. `object-position: top center`. Shows genuine people in work context.
2. Right panel (50%): `Surface(warm-off-white)` — `--color-surface-warm`. Contains: eyebrow ("Our Story") → H1 → founding paragraph → years badge (inline).

**Visual focus:** People — the humans behind the brand. The warmth of the off-white surface against real photography creates an editorial newspaper quality.

**Required photo spec:**
- Subject: founding owner or core team on a real job site (not a studio or office)
- Natural light strongly preferred (indoor studio shots feel inauthentic for a contractor)
- Portrait or landscape orientation (portrait works best for split layout)
- Subjects in work attire (not suits)

---

### 1.7 Areas (`/areas`) — Map + Content Panel

**Composition type:** Inset map panel (not a full-bleed background)

**Panel hierarchy:**
1. `Grid(60/40)`. Left (60%): Google Maps embed in a `Surface(inset)` inset panel (rounded corners, shadow, fixed height 480px desktop). Right (40%): `Stack` — H1 + subhead + zip lookup input.

**No full-bleed photo.** The map is functional — it earns its space by being useful, not decorative.

---

### 1.8 Quote (`/quote`) — Focused Minimal

**Composition type:** No hero. Centered form card.

**Visual focus:** The form. The form card is centered. `Surface(white)`. `--shadow-lg`. The absence of hero media IS the design decision — maximum clarity at the highest-conversion page.

---

## 2. Mobile Composition Specs

### Global Mobile Behavior

- All full-bleed media heroes collapse to `100svh` on mobile
- All split-layout heroes (60/40, 50/50) collapse to stacked: media panel first (50svh), content panel below
- `MobileBottomNav` is fixed, `height: 60px`, `padding-bottom: calc(60px + env(safe-area-inset-bottom))`
- `StickyCallPill` floats at `bottom: calc(68px + env(safe-area-inset-bottom))` (above the mobile nav)
- All CTA button groups: `flex-direction: column`, full-width on `< 480px`

### Home Mobile

- Hero: `100svh`, before/after slider below the fold (user discovers on first scroll)
- Trust badges: 2-up row (not 3-up — avoid overflow)
- Counter strip: 2×2 grid (not single row)

### Service Detail Mobile (Installation, Repair, Replacement)

- Split heroes: media `50svh` full-width, content below with `24px` side padding
- Process Trail: vertical (numbered list with left border accent)

### Emergency Mobile

- Phone number is the first rendered text after the eyebrow. `font-size: clamp(2rem, 8vw, 4rem)`. Full-width. Tap target ≥ 48px height.

### About Mobile

- Portrait photo: `50svh`, full-width. Story text directly below with `32px` padding.

---

## 3. Asset Brief

### Photography Direction

**What is required — client must supply:**
- Aerial/drone rooftop photo (Home hero): 1 photo minimum, 3 preferred at different hours
- Before/after pairs (Replacement hero + gallery): minimum 3 pairs, 6 preferred
- Crew-in-action installation shots: 4–8 photos
- Damage close-ups (Repair hero): 2–4 photos of different damage types (storm, age, missing shingles, leak staining)
- Team portrait on job site (About hero): 1 featured photo + 3–4 individual headshots
- Completed project gallery (Installation): 10–20 photos of finished roofs

**Photo quality requirements:**
- Minimum 2400px on the longest edge
- Shot in RAW and delivered as high-res JPEG (90%+ quality) or TIFF
- Not from stock photo libraries (Shutterstock, Getty, Unsplash) — real project documentation only
- No watermarks, EXIF location data stripped for privacy, no visible children

**Banned media sources:**
- Generic stock photography (no smiling stock homeowners, no stock crews in generic uniforms)
- AI-generated or AI-upscaled photography
- Manufacturer catalogue shots of isolated shingles or tools
- CGI renders or digitally composited project photos
- Photos from other contractor's portfolios or social media

### Video (Optional Phase 2)

- Homepage hero: 15–30 second loop of crew on job site or time-lapse of installation
- Must have a high-quality still frame for `poster` attribute (used when autoplay is blocked)
- Format: MP4 (H.265/H.264), WebM fallback
- `autoplay muted loop playsinline` — no audio on autoplay
- Fallback: static photo hero identical in composition

### Required Asset Aspect Ratios

| Surface | Aspect ratio | Minimum dimensions |
|---------|-------------|-------------------|
| Home hero background | 16:9 landscape | 3200 × 1800px |
| Before/after slider pair | 3:2 landscape (both images identical) | 1600 × 1067px |
| Installation split hero | 2:3 portrait (left panel) | 1200 × 1800px |
| Repair full-bleed hero | 16:9 | 2400 × 1350px |
| About team portrait | 3:4 portrait | 1200 × 1600px |
| Team member headshots | 1:1 square | 600 × 600px |
| Project gallery images | 4:3 | 1200 × 900px |
| Blog post featured images | 16:9 | 1600 × 900px |
| OG/social share image | 1.91:1 | 1200 × 630px |

### Fallback Policy

**Every key conversion surface must have a fallback:**

| Surface | Primary | Fallback |
|---------|---------|---------|
| Home hero | Client drone photo | Static gradient `--color-primary` to `--color-surface` with overlay typography |
| Before/after slider | Client project pair | Placeholder: left=gray, right=light-gray with "Photo coming soon" pill |
| Installation split hero | Client crew photo | Static `--color-primary` surface with geometry pattern |
| Repair full-bleed hero | Client damage photo | Static dark surface + large H1 (works without media) |
| About portrait | Client team photo | Monogram avatar placeholder (`--color-accent` bg, initials white) |
| Gallery images | Client portfolio | Placeholder tile with project category label |

**No broken image `<img>` tags on key surfaces.** Every `next/image` component on a hero or feature surface must declare a fallback via `onError` or use a static asset in `/public/fallbacks/`.

---

## 4. Iconography Direction

- Library: Lucide React (outline style, `1.5px` stroke)
- Default size: `20 × 20px`
- Hero and feature contexts: `24 × 24px`
- Color: inherits from `currentColor` — never hardcoded fill
- No solid/filled icons — outline only for visual consistency
- No mixing of icon libraries on the same page

---

## 5. Typography as Visual Element

- `Space Grotesk` 800-weight display text is a visual element in its own right — it should feel architectural
- Headline color on dark surfaces: `--color-text-inverse` (white)
- Headline color on light surfaces: `--color-primary` (slate-navy)
- Accent word highlight: occasional use of `--color-accent` (copper-amber) on a single keyword in a headline (e.g., "Expert **Roofing** Services")
- Never more than one accent-colored word per headline
- Large decorative numbers (counter stats, section numbers): `Space Grotesk 800`, `--color-accent`, opacity 0.9
