# Page Brief — About (`/about`)

**Visual Signature:** `VD-ABOUT-I9`  
**Creative Latitude:** HIGH  
**Motion Temperament:** `restrained-cinematic`  
**Differentiation Reference:** [visual-differentiation-map.md](../visual-differentiation-map.md)  
**Min Sections:** 6

---

## Page Definition

- **User intent:** Learn who they're hiring — the people, the story, the values.
- **Conversion outcome:** Trust earned → quote or call
- **Primary CTA:** `cta.get_free_quote` → `/quote`
- **Secondary CTA:** "Meet the team" scroll anchor
- **KPI:** Time on page + subsequent quote page visits

---

## Outcomes

1. Visitor feels like they know the people they're hiring, not just a faceless company.
2. The business's founding story and values are credible and specific — not generic.
3. Credentials (license, certifications, insurance, years) are stated without fanfare.
4. Team photos exist — real people, real job sites (not posed studio shots).
5. A clear conversion path follows the trust narrative.
6. Visitor sees evidence of the company's community involvement or care (if applicable).

---

## Required Content Slots

| Slot | Content Key(s) | Category Tag |
|------|---------------|-------------|
| Founder/team portrait photography | Client-supplied job-site photos | `local_proof` |
| Brand story headline | `about.hero.*` | `locality_outcome_statement` |
| Founding story narrative | `about.story.*` | `trust_signal_cluster` |
| Mission + values | `about.values.*` | `trust_signal_cluster` |
| Team member profiles (names, roles, photos) | `about.team.*` | `local_proof` |
| Years in business + project count | `brand.founded_year`, `brand.project_count` | `trust_signal_cluster` |
| Licenses + certifications + insurance | `trust.credentials.*` | `trust_signal_cluster` |
| Industry memberships | `trust.memberships.*` | `trust_signal_cluster` |
| Community/local presence note | `about.community.*` | `local_proof` |
| Quote CTA | `cta.*` | `multi_channel_conversion` |

---

## Forbidden Patterns

- Generic "we are a family-owned business" opener without specifics (year, story, founder name)
- Corporate stock photography of meeting rooms or handshakes
- Credentials buried in a footer-style footnote — they are primary trust content on this page
- Same hero composition as any service page
- Mission/values as a bulleted list without supporting evidence or context

---

## Visual Differentiation

- This is the ONLY page with a portrait-photography-dominant hero: large left panel is a team portrait on an actual job site, right panel is story text on a warm-off-white surface.
- This is the ONLY page using long-form editorial narrative layout (no card grids, no feature alternation in the hero section).
- Surface stack uses warm-off-white (`--color-surface-warm`) as primary — distinct from Home's cool dark opening.
- Cross-reference: [visual-differentiation-map.md](../visual-differentiation-map.md) entry `VD-ABOUT-I9`

---

## Composition Guidance (HIGH latitude)

**Composition primitives:** `MediaFrame` + `Frame` + `Stack` + `Surface` + `Grid` + `Reveal`

**Hero:** `Grid(50/50)`. Left: `MediaFrame` — team portrait on job site, portrait orientation, full panel height. Right: `Surface(warm-off-white)` — eyebrow ("Our Story") + H1 + founding paragraph + years badge. Text should feel editorial — large body copy, generous line height.

**Story section:** `Surface(warm-off-white)`. Long-form narrative paragraphs. NO card containers. Pull-quote treatment for a key founding moment. 1–2 historical job-site photos inset with `MediaFrame`.

**Values section:** `Surface(dark)` — `--color-primary`. 3–4 value statements. Each: `--color-accent` icon (24×24) + value name (heading-3) + description paragraph. NOT icon-card grid — use a `Cluster` with generous vertical spacing.

**Team section:** `Surface(warm-off-white)`. Team member `Grid(3-col desktop, 2-col tablet, 1-col mobile)`. Each member: photo (square crop, real job-site or workshop setting) + name + role + brief bio (2 sentences).

**Credentials section:** `Surface(dark)`. License number, certifications, insurance carrier (partial). Formatted as a credential table or structured `dl` element. Trust badges in a `Cluster`.

**CTA:** `Surface(dark)`. "Ready to work with our team?" → quote CTA + phone.

---

## Section Blueprint (E2E)

1. `about_hero`: Purpose: human-first trust. Draft copy: "Built on Rooftops. Built on Trust." + founder-era subhead. Layout: 50/50 portrait/story split.
2. `origin_story`: Purpose: differentiate via narrative. Draft copy: founding story paragraphs and pull-quote. Layout: long-form editorial surface.
3. `values_panel`: Purpose: communicate standards. Draft copy: 3-4 value statements with supporting detail. Layout: dark value strip with icon-led rows.
4. `team_grid`: Purpose: prove real people. Draft copy: name, role, short bio per team member. Layout: 3-col desktop grid.
5. `credentials_block`: Purpose: compliance confidence. Draft copy: license, insurance, workmanship guarantee lines. Layout: dark structured list/table.
6. `about_conversion_band`: Purpose: convert trust to action. Draft copy: quote CTA + phone line. Layout: dark bottom CTA band.

---

## Motion

**Temperament:** `restrained-cinematic`

- Hero portrait: `MediaFrame` reveals from black overlay (opacity 1→0, `--motion-duration-slow`), starting after headline text is in place.
- Headline text: word stagger, `--motion-duration-normal`.
- Values section: each value stagger-reveals 100ms apart on scroll.
- Team grid: `Reveal` stagger 60ms per card on scroll.

**Reduced-motion:** Headline instant. Portrait instant visible. Values instant. Team instant.

---

## State Requirements

| State | Handling |
|-------|---------|
| Team photos loading | Circular skeleton placeholder per member |
| Error fetching team from CMS | Static team data from `content.en.json` fallback |
| No team members in CMS | Section is omitted (not an error state) |

---

## Responsive Intent

- Mobile: Hero portrait stacks on top, story text below. Full-width portrait. Values 1-col stack. Team 1-col.
- Tablet: 2-col team grid. Hero remains stacked.
- Desktop: 50/50 split hero. 3-col team grid. Editorial body width capped at `60ch`.

---

## SEO

- Title: `seo.about_title`
- Description: `seo.about_description`
- Schema.org: `LocalBusiness` with `founder`, `foundingDate`, `numberOfEmployees` (range)
- Canonical: `/about`

---

## Conversion Path

- After reading story/values → values section CTA anchor
- Team section: "Work with our team" CTA → `/quote`
- Credentials section: trust established → final CTA band

---

## Accessibility

- H1: `about.hero.heading`
- Team grid: each card is `<article>` with `aria-label`("Team member: [name]")
- Portrait photo: `alt` text describing the scene (not just the person's name)
- Values list: `<ul>` semantics even if visually styled as cards

---

## Performance

- Hero portrait: `priority={true}` — LCP candidate
- Team photos: lazy load, `next/image`
- Body copy: entirely static — no CMS fetch needed for story/values
- LCP target: ≤ 2.0s

---

## Analytics

| Event | Trigger |
|-------|---------|
| `about_cta_click` | Any CTA on this page |
| `team_section_view` | Team section enters viewport |
| `credentials_section_view` | Credentials section enters viewport |

