# Page Design Brief: BLOG

**Route:** `/blog`  
**Status:** LOCKED  
**Lead Gen Role:** SECONDARY — Drive organic SEO traffic; nurture leads with solar education content  
**Section Density:** 5 sections  
**Mobile First:** Yes  
**SEO Critical:** HIGH (primary organic traffic driver)  
**Visual Latitude:** MEDIUM  
**Visual Signature Hash:** `blog::editorial-featured::scan-grid::ease-out-cards`

---

## Page Definition

**User Intent:** Find helpful information about solar energy — cost, savings, incentives, maintenance, ROI — either browsing casually or searching for a specific answer.

**Conversion Outcome:** User reads 1+ articles → subscribes to newsletter or clicks "Get Free Assessment" from article or index.

**Primary CTA:** "Get Free Assessment"  
**Secondary CTA:** "Subscribe for Solar Tips"

**KPI:** Organic search rankings per article; time on page; newsletter sign-ups; assessment clicks from blog.

---

## Outcomes (What Must Be True)

1. ✓ Featured post is visible and clearly highlighted above the fold.
2. ✓ Users can filter/browse posts by category without a page reload.
3. ✓ Post cards show reading time, date, and category — no surprise clicks.
4. ✓ Newsletter sign-up is non-intrusive but clearly available (not a modal on first visit).
5. ✓ Each post card links to its article with clear "Read More" affordance.
6. ✓ CTA to assessment is accessible from the index without navigating away.

---

## Required Content Slots

| Slot | Content Keys | Category |
|------|--------------|----------|
| Page headline | blog.hero.headline | Navigation |
| Featured post | blog.featured.* | Content Anchor |
| Category filters | blog.categories.* | Navigation |
| Post cards | blog.posts.* | Content |
| Newsletter CTA | blog.newsletter.* | Lead Capture |
| CTA band | blog.cta.* | Conversion |

---

## Section Blueprint (Visual Order)

### Section 1: HERO (Editorial Featured Post)
**Purpose:** Lead with the most relevant/recent featured article — editorial newspaper-style hero.  
**Layout Intent:** Full-bleed editorial hero (65svh desktop, 55svh mobile). Background: featured post's hero image. Bottom-weighted dark gradient. Content bottom-left (desktop), bottom-center (mobile).  
**Surface Style:** `linear-gradient(to top, rgba(4,21,31,0.92) 0%, rgba(4,21,31,0.30) 60%)`.  
**Copy Snapshot:**
- Category badge: amber pill (e.g., "SOLAR ROI")
- H1: Featured post title (e.g., "How Much Does Solar Really Cost in 2026?") — 46px desktop, 28px mobile
- Post meta: "By [Author] · May 12, 2026 · 8 min read"
- CTA: "Read the Article" (outline white button)

**Fallback (no featured post):** Static hero — "Solar Energy Insights & Resources" headline + "Expert guides on solar ROI, financing, and installation" subtitle.

**Motion:** H1 fades up from bottom (300ms). Meta appears at 400ms. CTA at 550ms.  
**Motion Fallback:** Instant opacity.

---

### Section 2: CATEGORY FILTERS
**Purpose:** Let users navigate by interest without overwhelming them with a full taxonomy.  
**Layout Intent:** Horizontal pill-filter bar (scrollable on mobile, static on desktop). Categories: All | Solar Basics | Cost & ROI | Financing | Maintenance | Incentives | Case Studies | Industry News.  
**Surface Style:** Light surface bar, amber active filter, muted inactive.  
**Interaction:** Filter click → cards animate out/in. URL updates with `?category=roi`.

---

### Section 3: BLOG POST GRID
**Purpose:** Browsable library of solar content — scannable, fast to process.  
**Layout Intent:** 3-column grid (desktop), 2-column (tablet), 1-column (mobile). First card: featured-variant (spans 2 columns on desktop). Remaining cards: standard.  
**Card anatomy per post:** Featured image (16:10 ratio) + category badge + title + excerpt (2 lines max) + author avatar + date + read time + "Read More →" link.  
**Surface Style:** White cards, hover: border-amber + card-lift.  
**Posts to include at launch (draft):**
- "How Much Does Solar Cost in 2026? A Homeowner's Guide" (Cost & ROI)
- "The 26% Federal Solar Tax Credit: What You Need to Know" (Incentives)
- "Solar Maintenance 101: Keeping Your System at Peak Performance" (Maintenance)
- "Residential vs. Commercial Solar: What's the Difference?" (Solar Basics)
- "Net Metering Explained: Selling Electricity Back to the Grid" (Solar Basics)
- "Is Battery Storage Worth It? Tesla Powerwall vs. Generac" (Cost & ROI)
- "How Long Does Solar Installation Take? A Step-by-Step Timeline" (Solar Basics)
- "Top Solar Incentives by State: California, Nevada, Texas, Florida" (Incentives)
- "Case Study: Sacramento Family Saves $6,800/Year with SunEnergy Pro" (Case Studies)

**Pagination/infinite scroll:** Load 9 posts initially. "Load More" button fetches next 9.  
**Motion:** Cards stagger-entrance on initial load (30ms stagger, 300ms each). "Load More" items fade in as a batch.

---

### Section 4: NEWSLETTER SIGN-UP STRIP
**Purpose:** Capture emails from organic traffic visitors who are not ready to buy but want to stay informed.  
**Layout Intent:** Full-width strip (light teal surface `var(--color-secondary-50)`). Desktop: 2-column — copy left + form right. Mobile: stacked center.  
**Copy Snapshot:**
- Eyebrow: "STAY INFORMED"
- Headline: "Get Monthly Solar Tips & Incentive Updates"
- Subheadline: "No spam. Unsubscribe anytime."
- Form: Email input + "Subscribe" button
- Privacy note: "We respect your privacy. Unsubscribe anytime."

**Interaction:** Inline email form. Success: input replaced by "✓ You're subscribed! Check your inbox." error: red border + "Please enter a valid email."  
**Form accessibility:** `type="email"`, `autocomplete="email"`, `aria-label="Email address for newsletter"`.

---

### Section 5: CTA BAND
**Purpose:** Capture high-intent readers who want to move beyond education to action.  
**Layout Intent:** Full-width amber band. Desktop: text left + CTA right. Mobile: center-stacked.  
**Copy Snapshot:**
- Headline: "Ready to Stop Reading and Start Saving?"
- Subheadline: "Get your personalized solar assessment — free, no obligation, results in 48 hours."
- CTA Primary: "Get Free Assessment"
- CTA Secondary: "Calculate My Savings →"

---

## Forbidden Patterns

- ✗ MUST NOT use a hero with the full-bleed warm amber overlay (that's Home's identity)
- ✗ MUST NOT hide post dates or authors (editorial credibility requires transparency)
- ✗ MUST NOT use an aggressive newsletter popup on page load
- ✗ MUST NOT show post grid without reading time estimates

---

## Visual Differentiation vs. Other Routes

**vs. HOME:** Home teases blog as a section; Blog is the full editorial index. Different hero (editorial feature-post style vs. product installation hero).  
**vs. RESOURCES:** Blog is authored articles/opinions; Resources is downloadable content library. Different card types and interactions.  
→ See `visual-differentiation-map.md`.

---

## Motion Temperament

**Mood:** `ease-out-entrances` — scannable, lightweight. Blog is for reading, not spectacle.  
**Key moments:** Card stagger on load (gentle, not dramatic); category filter cross-fade.  
**Reduced-motion:** All cards appear instantly, no stagger.

---

## SEO + Schema

- **Title:** "Solar Energy Blog — Tips, Guides & Industry News | SunEnergy Pro"
- **Meta:** "Expert solar energy articles: cost guides, financing tips, installation timelines, and incentive updates. Written by NABCEP-certified solar professionals."
- **H1:** "Solar Energy Insights & Resources" (or featured post title when one is pinned)
- **Schema:** `Blog`, `BlogPosting` per article preview, `BreadcrumbList`
- **Canonical:** `/blog`

---

## Performance Plan

- LCP target: < 2.5s (featured image lazy-loaded after CSS above-fold content)
- Blog post data: Static generation with ISR (revalidate: 3600s)
- Images: All `next/image`, lazy below fold
- No client-side JS required for initial render (filters hydrate after mount)

---

## Data Fetching Plan

| Surface | Source | Cache | Failure |
|---------|--------|-------|---------|
| Post list | Static JSON / Contentlayer / CMS | Build-time + ISR | Empty state: "Content loading" |
| Featured post | First post with `featured: true` flag | Build-time + ISR | Fallback to static hero |
| Newsletter form | API route or third-party (Mailchimp/Resend) | N/A | Error toast: "Subscription failed" |

---

## Analytics Plan

| Event | Trigger |
|-------|---------|
| `blog_category_filter` | Filter pill clicked |
| `blog_card_click` | Any post card clicked |
| `blog_load_more` | "Load More" clicked |
| `blog_newsletter_signup` | Newsletter form submitted |
| `blog_cta_click` | Assessment CTA clicked from blog index |

---

## Open Questions

1. Are we writing blog posts ourselves or does the client provide content?
2. Will there be a CMS (e.g., Sanity, Contentlayer, Notion) or static JSON at launch?
3. What 9 posts will be ready at launch? (See draft list in Section 3 above)
