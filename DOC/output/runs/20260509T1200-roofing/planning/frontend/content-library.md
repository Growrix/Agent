# Content Library — Apex Roofing Co.

**Run:** 20260509T1200-roofing  
**Locale:** en  
**Voice:** trustworthy, clear, locally rooted, urgency-aware  
**Forbidden words:** "synergy", "world-class", "best-in-class", "leverage", "disruptive", "innovative" (without proof), "passion" as standalone claim

Machine-readable: `content.en.json`

---

## Content Tone Guidelines

- Lead with locality and outcome: "Serving [Metro] since [year]" not "We are a roofing company"
- Use plain, confident language — the tone of a skilled tradesperson who knows their work speaks for itself
- Urgency-aware: emergency copy uses direct, active phrasing without manufactured panic
- Length discipline: hero headlines ≤ 8 words primary, ≤ 18 words secondary. Body paragraphs ≤ 60 words.
- Forbidden: generic superlatives ("the best roofer in..."), unverifiable claims, corporate filler

---

## Key Index

### Brand

| Key | Value | Notes |
|-----|-------|-------|
| `brand.name` | Apex Roofing Co. | **Open question 1** — client to confirm |
| `brand.tagline` | Protecting homes across [Metro Area] | **Open question 4** — area to be confirmed |
| `brand.logo_alt` | Apex Roofing Co. logo | |
| `brand.founded_year` | 2006 | **Open question 8** — placeholder |
| `brand.years_in_business` | 20+ | Derived from founded_year |
| `brand.project_count` | 2,400+ | **Open question 9** — placeholder |
| `brand.satisfaction_rate` | 98% | Client to confirm or derive from reviews |
| `brand.response_time_minutes` | 45 | Client to confirm |
| `brand.license_number` | LIC-XXXXXXX | **Open question 2** — mandatory |
| `brand.phone` | (555) 800-ROOF | **Open question 3** — placeholder |
| `brand.phone_uri` | tel:+15558007663 | Derived from phone |
| `brand.email` | info@apexroofing.example | Placeholder |
| `brand.address_line1` | 123 Rooftop Drive | Placeholder |
| `brand.address_city` | [Metro City] | Placeholder |
| `brand.address_state` | [State] | Placeholder |
| `brand.address_zip` | 00000 | Placeholder |
| `brand.hours_weekday` | Mon–Fri: 7am – 7pm | Confirm |
| `brand.hours_saturday` | Saturday: 8am – 5pm | Confirm |
| `brand.hours_emergency` | 24/7 Emergency Service | |
| `brand.google_business_url` | https://maps.google.com/... | Client to provide |
| `brand.google_rating` | 4.9 | Placeholder — pull from Google API |
| `brand.google_review_count` | 387 | Placeholder |

---

### Navigation

| Key | Value |
|-----|-------|
| `nav.topbar.address` | Serving [Metro Area] & surrounding towns |
| `nav.topbar.hours` | Mon–Sat 7am–7pm · 24hr Emergency |
| `nav.topbar.phone` | (555) 800-ROOF |
| `nav.topbar.phone_aria_label` | Call Apex Roofing Co. at (555) 800-ROOF |
| `nav.links.services` | Services |
| `nav.links.areas` | Areas |
| `nav.links.reviews` | Reviews |
| `nav.links.about` | About |
| `nav.links.contact` | Contact |
| `nav.cta.get_quote` | Get Free Quote |
| `nav.mobile.open_menu_aria` | Open navigation menu |
| `nav.mobile.close_menu_aria` | Close navigation menu |
| `nav.skip_to_content` | Skip to main content |

---

### Call-to-Action

| Key | Value |
|-----|-------|
| `cta.get_free_quote` | Get Free Quote |
| `cta.call_now_label` | Call Now |
| `cta.call_now_aria` | Call Apex Roofing now — (555) 800-ROOF |
| `cta.book_inspection` | Book Free Inspection |
| `cta.learn_more` | Learn More |
| `cta.see_all_services` | See All Services |
| `cta.check_my_area` | Check My Area |
| `cta.view_reviews` | Read Customer Reviews |
| `cta.read_more` | Read More |
| `cta.back_home` | Back to Home |
| `cta.emergency_call` | Call Emergency Line |

---

### Home Page

| Key | Value |
|-----|-------|
| `home.hero.eyebrow` | Roofing Excellence Since {brand.founded_year} |
| `home.hero.headline_1` | Your Roof. |
| `home.hero.headline_2` | Our Responsibility. |
| `home.hero.subhead` | Licensed, insured roofing for homeowners across {area}. Installs, repairs, and emergency response — done right the first time. |
| `home.hero.cta_primary` | Get Free Quote |
| `home.hero.cta_secondary` | (555) 800-ROOF |
| `home.hero.before_label` | Before |
| `home.hero.after_label` | After |
| `home.counters.section_eyebrow` | By the numbers |
| `home.proof.section_eyebrow` | What our customers say |
| `home.proof.section_heading` | Trusted by {brand.project_count} homeowners |
| `home.services.section_eyebrow` | What we do |
| `home.services.section_heading` | Expert Roofing, Every Job |
| `home.services.section_subhead` | From full replacements to same-day emergency repairs — we handle every roofing need with the same care. |
| `home.cta_band.heading` | Ready to protect your home? |
| `home.cta_band.subhead` | Get a free quote in under 24 hours. No obligation. |
| `home.cta_band.cta` | Get Free Quote |
| `home.areas.section_eyebrow` | Coverage |
| `home.areas.section_heading` | Serving Your Neighborhood |
| `home.blog.section_eyebrow` | From our roof to yours |
| `home.blog.section_heading` | Roofing Guides & Advice |

---

### Services

| Key | Value |
|-----|-------|
| `services.overview.eyebrow` | Our expertise |
| `services.overview.heading` | Every Roofing Need, Covered |
| `services.overview.subhead` | Four core services. One team. Zero shortcuts. |
| `service.roof-installation.name` | Roof Installation |
| `service.roof-installation.category_label` | New Construction |
| `service.roof-installation.card_summary` | New installs for homes and commercial buildings — built to code and built to last. |
| `service.roof-installation.starts_at` | Starts from $8,500 |
| `service.roof-repair.name` | Roof Repair |
| `service.roof-repair.category_label` | Repair & Restoration |
| `service.roof-repair.card_summary` | Leaks, storm damage, missing shingles — fast diagnosis and lasting fixes. |
| `service.roof-repair.starts_at` | Starts from $350 |
| `service.roof-replacement.name` | Roof Replacement |
| `service.roof-replacement.category_label` | Full Replacement |
| `service.roof-replacement.card_summary` | When repair isn't enough — complete re-roofing with your choice of materials. |
| `service.roof-replacement.starts_at` | Starts from $12,000 |
| `service.emergency-repair.name` | Emergency Repair |
| `service.emergency-repair.category_label` | 24/7 Emergency |
| `service.emergency-repair.card_summary` | Storm damage, active leaks, fallen debris — we respond within 45 minutes. |
| `service.emergency-repair.starts_at` | Same-day service |

---

### Trust Badges

| Key | Value |
|-----|-------|
| `trust.badge.licensed` | State Licensed |
| `trust.badge.licensed_aria` | State licensed roofing contractor |
| `trust.badge.insured` | Fully Insured |
| `trust.badge.insured_aria` | Fully insured — liability and workers compensation |
| `trust.badge.years` | {brand.years_in_business} Years |
| `trust.badge.years_aria` | {brand.years_in_business} years in business |
| `trust.badge.guarantee` | 10-Year Guarantee |
| `trust.badge.guarantee_aria` | 10-year workmanship guarantee |
| `trust.badge.rating` | {brand.google_rating}★ Google |
| `trust.badge.rating_aria` | Rated {brand.google_rating} out of 5 on Google |

---

### Counters

| Key | Value |
|-----|-------|
| `counters.projects.label` | Projects Completed |
| `counters.years.label` | Years in Business |
| `counters.satisfaction.label` | Satisfaction Rate |
| `counters.response.label` | Min. Response Time |

---

### Reviews

| Key | Value |
|-----|-------|
| `reviews.aggregate.rating` | 4.9 |
| `reviews.aggregate.count_label` | Based on 387 Google Reviews |
| `reviews.aggregate.aria` | 4.9 out of 5 stars based on 387 Google Reviews |
| `reviews.page.eyebrow` | Customer Stories |
| `reviews.page.heading` | {brand.project_count} Projects. Thousands of Happy Homeowners. |
| `reviews.page.subhead` | Don't take our word for it — here's what our customers say after every job. |

---

### About

| Key | Value |
|-----|-------|
| `about.hero.eyebrow` | Who we are |
| `about.hero.heading` | Built on Rooftops. Built on Trust. |
| `about.hero.subhead` | Since {brand.founded_year}, we've been the roofing team homeowners in {area} call when it matters most. |
| `about.story.eyebrow` | Our story |
| `about.story.heading` | {brand.years_in_business} Years. Same Values. |
| `about.team.eyebrow` | The crew |
| `about.team.heading` | The People on Your Roof |
| `about.credentials.license` | State License #{brand.license_number} |
| `about.credentials.insurance` | $2M General Liability + Workers' Comp |
| `about.credentials.warranty` | 10-Year Workmanship Guarantee |

---

### Quote Form

| Key | Value |
|-----|-------|
| `form.quote.aria_label` | Request a free roofing quote |
| `form.quote.heading` | Get Your Free Quote |
| `form.quote.subhead` | We'll call you back within 1 business hour. |
| `form.quote.field.name` | Your first name |
| `form.quote.field.phone` | Phone number |
| `form.quote.field.email` | Email address |
| `form.quote.field.service` | What do you need? |
| `form.quote.field.postcode` | Your postcode / zip |
| `form.quote.field.description` | Brief description (optional) |
| `form.quote.field.description_placeholder` | e.g. Missing shingles after last night's storm |
| `form.quote.submit` | Request Free Quote |
| `form.quote.success.heading` | Quote request received! |
| `form.quote.success.body` | We'll call you at {phone} within 1 business hour. You'll also get a confirmation email. |
| `form.quote.error.network` | Something went wrong. Please call us directly at {brand.phone}. |
| `form.quote.error.name.required` | Please enter your first name. |
| `form.quote.error.phone.required` | Please enter a valid phone number. |
| `form.quote.error.phone.pattern` | Please enter a valid phone number. |
| `form.quote.error.service.required` | Please select the type of service. |
| `form.quote.error.postcode.required` | Please enter your postcode. |

---

### Footer

| Key | Value |
|-----|-------|
| `footer.brand.tagline` | Protecting homes across {area} since {brand.founded_year}. |
| `footer.legal.license` | License #{brand.license_number} |
| `footer.legal.copyright` | © {year} Apex Roofing Co. All rights reserved. |
| `footer.legal.privacy` | Privacy Policy |
| `footer.legal.terms` | Terms of Service |
| `footer.contact.phone` | (555) 800-ROOF |
| `footer.contact.phone_aria_label` | Call Apex Roofing at (555) 800-ROOF |
| `footer.contact.email` | info@apexroofing.example |
| `footer.contact.address` | 123 Rooftop Drive, [Metro City], [State] 00000 |
| `footer.contact.hours` | Mon–Sat 7am–7pm · 24hr Emergency |
| `footer.attribution.text` | Website by |
| `footer.attribution.link_text` | [Agency Name] |
| `footer.attribution.url` | https://[agency-url].example |
| `footer.attribution.aria_label` | Website designed and built by [Agency Name] — opens [Agency Name] website |

**Note:** `footer.attribution.*` values are **FOOTER_ATTRIBUTION_UNDECLARED** — agency must supply before build. Open Question 7.

---

### FAQ (excerpt — full list to be authored at build time)

| Key | Value |
|-----|-------|
| `faq.page.eyebrow` | Common questions |
| `faq.page.heading` | Everything You Wanted to Know About Your Roof |
| `faq.q1.question` | How long does a full roof replacement take? |
| `faq.q1.answer` | Most residential replacements are complete in 1–2 days. Larger or complex roofs may take 3–4 days. We'll give you a precise timeline at the quote stage. |
| `faq.q2.question` | Do you offer warranties on your work? |
| `faq.q2.answer` | Yes. All workmanship is covered by our 10-year guarantee. Materials carry manufacturer warranties that vary by product — we'll explain these during your quote. |
| `faq.q3.question` | Are you licensed and insured? |
| `faq.q3.answer` | Absolutely. We hold State License #{brand.license_number} and carry full general liability and workers' compensation insurance. Certificates available on request. |
| `faq.q4.question` | How quickly can you respond to an emergency? |
| `faq.q4.answer` | We aim to be on-site within 45 minutes for emergency calls in our primary service area. Call {brand.phone} any time — 24/7. |

---

### 404 Page

| Key | Value |
|-----|-------|
| `not_found.heading` | Looks like this page is off the roof. |
| `not_found.subhead` | We couldn't find what you were looking for, but we can still help with your roof. |
| `not_found.cta_home` | Back to Home |
| `not_found.cta_contact` | Contact Us |

---

## Open Questions (content blocking)

| # | Key(s) | Status |
|---|--------|--------|
| 1 | `brand.name` | Placeholder "Apex Roofing Co." — client to confirm |
| 2 | `brand.license_number` | **MANDATORY** — client to supply before build |
| 3 | `brand.phone` | Placeholder — client to supply |
| 4 | `brand.tagline` area | Client to confirm service area name |
| 7 | `footer.attribution.*` | **MANDATORY** — agency to supply |
| 8 | `brand.founded_year` | Client to confirm |
| 9 | `brand.project_count` | Client to confirm |
| OQ | `brand.google_rating` | Integrate via Google Places API or manually seed |
| OQ | FAQ complete list | Full FAQ set to be authored with client input |
| OQ | All service detail body copy | Long-form copy for each service page — content writer required |
| OQ | Team member names + bios | For `/about` team section |
| OQ | Area list | Complete list of served towns/boroughs |
