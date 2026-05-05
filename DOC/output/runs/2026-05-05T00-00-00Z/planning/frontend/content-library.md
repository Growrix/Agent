---
document_type: content-library
project_name: local-plumbing-marketing-site
default_locale: en-US
locales: [en-US]
i18n_required: false
build_stage: 2-design-foundation
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - ../brief.json
---

# Content Library - local-plumbing-marketing-site

## 1. Voice & Tone
- Voice: trustworthy
- Tone: clear, friendly, local
- Reading level: Grade 6-8 (plain language)
- Forbidden words: synergy, world-class, best-in-class, leverage, disruptive, innovative

## 2. Naming Convention
- Dot-notated keys.
- Surface-first: <page>.<section>.<key> (e.g., home.hero.headline).
- global.* for header/footer/nav primitives; component.* for reusable UI copy; errors.* and validation.* for system messages.

## 3. Content Surfaces
Machine source of truth: content.en-US.json (same folder).

## Surface: home

### home.areas
- home.areas.body: "Check coverage in your neighborhood."
- home.areas.heading: "Areas we serve"
- home.areas.view_all: "View all areas"

### home.cta
- home.cta.body: "Call now to talk through the issue and next steps."
- home.cta.heading: "Need a plumber today?"

### home.faq
- home.faq.heading: "FAQ"
- home.faq.view_all: "View all FAQs"

### home.hero
- home.hero.eyebrow: "Local, reliable plumbing"
- home.hero.headline: "Same-day plumbing in your area"
- home.hero.subheadline: "Clear next steps, friendly service, and fast scheduling."
- home.hero.trust_badges.insured: "Insured"
- home.hero.trust_badges.licensed: "Licensed"
- home.hero.trust_badges.same_day: "Same-day availability"

### home.proof
- home.proof.heading: "Trusted by local homeowners"
- home.proof.stats.response_time_label: "Typical response time"
- home.proof.stats.reviews_label: "Customer reviews"
- home.proof.stats.years_label: "Years serving the area"

### home.reviews
- home.reviews.heading: "Reviews"
- home.reviews.view_all: "See all reviews"

### home.services
- home.services.body: "From repairs to replacements, we will help you choose the right fix."
- home.services.heading: "Services"
- home.services.view_all: "View all services"

## Surface: services

### services.areas_teaser
- services.areas_teaser.body: "See if we serve your area."
- services.areas_teaser.cta: "View areas served"
- services.areas_teaser.heading: "Check coverage"

### services.cta
- services.cta.body: "Calling is the fastest way to reach us."
- services.cta.heading: "Ready to get started?"

### services.faq
- services.faq.heading: "Service FAQs"

### services.grid
- services.grid.body: "Pick a service to see scope, expectations, and next steps."
- services.grid.empty_body: "Please check back soon, or call now for immediate help."
- services.grid.empty_title: "No services found"
- services.grid.heading: "All services"

### services.hero
- services.hero.eyebrow: "Plumbing services"
- services.hero.headline: "Services for homeowners and small properties"
- services.hero.subheadline: "Fast, clear help for common plumbing problems."

### services.process
- services.process.heading: "How it works"
- services.process.items.0.body: "Call or request a quote with a short description."
- services.process.items.0.title: "Tell us what is going on"
- services.process.items.1.body: "We confirm scope, availability, and next steps."
- services.process.items.1.title: "We confirm details"
- services.process.items.2.body: "We arrive prepared and explain options before work begins."
- services.process.items.2.title: "We fix the problem"

## Surface: service_detail

### service_detail.breadcrumb
- service_detail.breadcrumb.home: "Home"
- service_detail.breadcrumb.services: "Services"

### service_detail.cta
- service_detail.cta.body: "Call now for the fastest help."
- service_detail.cta.heading: "Need help now?"

### service_detail.expectations
- service_detail.expectations.body: "Clear communication, respectful service, and a plan you can understand."
- service_detail.expectations.heading: "What to expect"

### service_detail.faq
- service_detail.faq.heading: "FAQs"

### service_detail.hero
- service_detail.hero.eyebrow: "Service"
- service_detail.hero.subheadline: "Clear scope, pricing guidance, and the fastest way to book."

### service_detail.overview
- service_detail.overview.body: "We will help you understand the issue and typical next steps."
- service_detail.overview.heading: "Overview"

### service_detail.pricing
- service_detail.pricing.body: "Pricing depends on access, parts, and complexity. We will confirm before work begins."
- service_detail.pricing.heading: "Pricing guidance"

### service_detail.process
- service_detail.process.heading: "How it works"
- service_detail.process.steps.0.body: "A quick description helps us plan the right visit."
- service_detail.process.steps.0.title: "1) Describe the issue"
- service_detail.process.steps.1.body: "We confirm availability and timing."
- service_detail.process.steps.1.title: "2) Schedule"
- service_detail.process.steps.2.body: "We explain options and complete the repair."
- service_detail.process.steps.2.title: "3) Complete the work"

### service_detail.reviews
- service_detail.reviews.heading: "Related reviews"

### service_detail.what_we_do
- service_detail.what_we_do.heading: "What we do"
- service_detail.what_we_do.items.0.body: "We identify the cause and explain options."
- service_detail.what_we_do.items.0.title: "Inspect and diagnose"
- service_detail.what_we_do.items.1.body: "We recommend the simplest fix that solves the problem."
- service_detail.what_we_do.items.1.title: "Repair or replace"
- service_detail.what_we_do.items.2.body: "We verify the repair and leave the area tidy."
- service_detail.what_we_do.items.2.title: "Test and clean up"

## Surface: areas

### areas.coverage
- areas.coverage.body: "If you do not see your area listed, call and we will confirm."
- areas.coverage.heading: "Coverage notes"

### areas.cta
- areas.cta.body: "Call now and we will confirm coverage quickly."
- areas.cta.heading: "Not sure if you are covered?"

### areas.faq
- areas.faq.heading: "Coverage FAQs"

### areas.grid
- areas.grid.body: "Select an area to confirm coverage and get next steps."
- areas.grid.empty_body: "Please check back soon, or call now for immediate help."
- areas.grid.empty_title: "No areas available"
- areas.grid.heading: "Service areas"

### areas.hero
- areas.hero.eyebrow: "Coverage"
- areas.hero.headline: "Areas we serve"
- areas.hero.subheadline: "Find your neighborhood and confirm coverage."

### areas.services_teaser
- areas.services_teaser.body: "See common plumbing services we provide."
- areas.services_teaser.cta: "View services"
- areas.services_teaser.heading: "Explore services"

## Surface: area_detail

### area_detail.breadcrumb
- area_detail.breadcrumb.areas: "Areas"
- area_detail.breadcrumb.home: "Home"

### area_detail.coverage
- area_detail.coverage.body: "If your address is near the edge of our service area, call and we will confirm."
- area_detail.coverage.heading: "We serve this area"

### area_detail.cta
- area_detail.cta.body: "Call now for the fastest help in this area."
- area_detail.cta.heading: "Need a plumber here?"

### area_detail.faq
- area_detail.faq.heading: "Area FAQs"

### area_detail.hero
- area_detail.hero.eyebrow: "Area"
- area_detail.hero.subheadline: "Confirm coverage and see relevant services."

### area_detail.reviews
- area_detail.reviews.heading: "What customers say"

### area_detail.services
- area_detail.services.heading: "Services in this area"

## Surface: reviews

### reviews.aggregate
- reviews.aggregate.count_label: "Reviews"
- reviews.aggregate.heading: "Overall rating"
- reviews.aggregate.rating_label: "Rating"

### reviews.cta
- reviews.cta.body: "Call now for the fastest next step."
- reviews.cta.heading: "Ready to talk it through?"

### reviews.faq
- reviews.faq.heading: "Reviews FAQs"

### reviews.feedback
- reviews.feedback.heading: "How we handle feedback"
- reviews.feedback.items.0.body: "We take concerns seriously and respond quickly."
- reviews.feedback.items.0.title: "We listen"
- reviews.feedback.items.1.body: "If something is not right, we work to make it right."
- reviews.feedback.items.1.title: "We fix it"
- reviews.feedback.items.2.body: "Feedback helps us improve how we serve you."
- reviews.feedback.items.2.title: "We improve"

### reviews.grid
- reviews.grid.body: "A few notes from recent customers."
- reviews.grid.heading: "Testimonials"

### reviews.hero
- reviews.hero.eyebrow: "Proof"
- reviews.hero.headline: "Reviews from local customers"
- reviews.hero.subheadline: "Real feedback and clear expectations."

### reviews.services_teaser
- reviews.services_teaser.body: "Learn what we can help with."
- reviews.services_teaser.cta: "View services"
- reviews.services_teaser.heading: "See our services"

## Surface: about

### about.coverage
- about.coverage.body: "We serve nearby neighborhoods and surrounding areas. If you are unsure, call and we will confirm coverage."
- about.coverage.heading: "Service area"

### about.credentials
- about.credentials.body: "Licensed and insured. Specific details are provided in site settings."
- about.credentials.heading: "Credentials"

### about.cta
- about.cta.body: "Call now for the fastest next step."
- about.cta.heading: "Need help today?"

### about.hero
- about.hero.eyebrow: "About"
- about.hero.headline: "Local plumbing you can rely on"
- about.hero.subheadline: "Clear communication, practical solutions, and respectful service."

### about.reviews
- about.reviews.heading: "What customers say"

### about.story
- about.story.body: "We are a local plumbing team focused on clear options, quick scheduling, and work you can feel good about."
- about.story.heading: "Our story"

### about.values
- about.values.heading: "How we work"
- about.values.items.0.body: "We explain what we found and what it means in plain language."
- about.values.items.0.title: "Clear options"
- about.values.items.1.body: "We respect your home and keep you informed throughout."
- about.values.items.1.title: "Respectful service"
- about.values.items.2.body: "We recommend the simplest fix that solves the problem."
- about.values.items.2.title: "Practical solutions"

## Surface: contact

### contact.areas
- contact.areas.body: "Check coverage, or call and we will confirm."
- contact.areas.heading: "Areas served"

### contact.cta
- contact.cta.body: "Call now for the fastest help."
- contact.cta.heading: "Need help now?"

### contact.faq
- contact.faq.heading: "Contact FAQs"

### contact.hero
- contact.hero.eyebrow: "Contact"
- contact.hero.headline: "Contact a local plumber"
- contact.hero.subheadline: "Calling is the fastest way to reach us."

### contact.methods
- contact.methods.address_label: "Service address"
- contact.methods.heading: "Contact details"
- contact.methods.hours_label: "Hours"
- contact.methods.phone_label: "Phone"

### contact.prep
- contact.prep.heading: "What to have ready"
- contact.prep.items.0.body: "So we can confirm coverage."
- contact.prep.items.0.title: "Your address or ZIP"
- contact.prep.items.1.body: "What is happening and when it started."
- contact.prep.items.1.title: "A short description"
- contact.prep.items.2.body: "If safe, a quick photo can help."
- contact.prep.items.2.title: "Photos (optional)"

## Surface: quote

### quote.cta
- quote.cta.body: "If it is urgent, calling is the fastest option."
- quote.cta.heading: "Need help now?"

### quote.faq
- quote.faq.heading: "Quote FAQs"

### quote.form
- quote.form.consent_label: "I agree to be contacted about this request."
- quote.form.error_body: "Please try again, or call now for the fastest help."
- quote.form.error_title: "Could not submit"
- quote.form.fields.details.label: "What is going on?"
- quote.form.fields.details.placeholder: "Briefly describe the issue, when it started, and any safety concerns."
- quote.form.fields.full_name.label: "Full name"
- quote.form.fields.phone.label: "Phone number"
- quote.form.fields.service.label: "Service needed"
- quote.form.fields.service.placeholder: "Select a service (optional)"
- quote.form.fields.zip.label: "ZIP code"
- quote.form.submit: "Request quote"
- quote.form.success_body: "Thanks. If this is urgent, calling is the fastest way to reach us."
- quote.form.success_title: "Request received"
- quote.form.title: "Request a quote"

### quote.hero
- quote.hero.eyebrow: "Quote"
- quote.hero.headline: "Request a quote"
- quote.hero.subheadline: "Send a quick request and we will follow up. Calling is the fastest option."

### quote.next_steps
- quote.next_steps.heading: "What happens next"
- quote.next_steps.steps.0.body: "Share a few details so we can understand the issue."
- quote.next_steps.steps.0.title: "1) Tell us about the problem"
- quote.next_steps.steps.1.body: "We will confirm scope and availability."
- quote.next_steps.steps.1.title: "2) We follow up"
- quote.next_steps.steps.2.body: "If it is urgent, calling is always the fastest way to get help."
- quote.next_steps.steps.2.title: "3) Get help fast"

### quote.privacy_note
- quote.privacy_note: "We only use this information to respond to your request."

## Surface: faq

### faq.coverage
- faq.coverage.body: "We serve nearby areas and can confirm availability when you call."
- faq.coverage.heading: "Coverage and scheduling"

### faq.cta
- faq.cta.body: "Call now and we will help you choose next steps."
- faq.cta.heading: "Still have a question?"

### faq.hero
- faq.hero.eyebrow: "FAQ"
- faq.hero.headline: "Frequently asked questions"
- faq.hero.subheadline: "Clear answers and what to expect."

### faq.list
- faq.list.body: "If you do not see your question, call now."
- faq.list.heading: "Common questions"

### faq.pricing
- faq.pricing.body: "We can share guidance and confirm scope before work begins."
- faq.pricing.heading: "Pricing and estimates"

## Surface: blog

### blog.cta
- blog.cta.body: "If it is urgent or you are unsure, calling is the fastest option."
- blog.cta.heading: "Need help with a plumbing issue?"

### blog.empty
- blog.empty.body: "Check back soon, or call now if you need help."
- blog.empty.heading: "No posts yet"

### blog.hero
- blog.hero.eyebrow: "Tips"
- blog.hero.headline: "Plumbing tips and guidance"
- blog.hero.subheadline: "Simple explanations and when it is time to call."

### blog.list
- blog.list.body: "Short, homeowner-friendly notes about common plumbing issues."
- blog.list.heading: "Latest posts"

### blog.post
- blog.post.read_less: "Read less"
- blog.post.read_more: "Read more"

## Surface: privacy

### privacy.body
- privacy.body: "This privacy policy is a general template and should be reviewed for your business.\\n\\nWhat we collect\\n- Information you send us (for example, your name, phone number, ZIP code, and request details).\\n- Basic website analytics to understand site performance.\\n\\nHow we use it\\n- To respond to your request and provide service.\\n- To improve this website.\\n\\nWe do not sell your personal information.\\n\\nContact\\nIf you have questions, contact us using the information on this site."

### privacy.contact_label
- privacy.contact_label: "Privacy questions"

### privacy.hero
- privacy.hero.headline: "Privacy policy"
- privacy.hero.subheadline: "How we handle information from this website."

### privacy.updated_label
- privacy.updated_label: "Last updated"

## Surface: terms

### terms.body
- terms.body: "These terms are a general template and should be reviewed for your business.\\n\\nUsing this website\\n- Do not misuse the site or attempt to disrupt it.\\n- Information on this site is provided for general guidance and may change.\\n\\nService information\\n- Scheduling and availability are confirmed when you contact us.\\n- Pricing depends on scope and will be confirmed before work begins.\\n\\nContact\\nIf you have questions, contact us using the information on this site."

### terms.contact_label
- terms.contact_label: "Questions about these terms"

### terms.hero
- terms.hero.headline: "Terms of use"
- terms.hero.subheadline: "Conditions for using this website."

### terms.updated_label
- terms.updated_label: "Last updated"

## Surface: not_found

### not_found.cta
- not_found.cta.body: "Call now for the fastest next step."
- not_found.cta.heading: "Need help now?"

### not_found.hero
- not_found.hero.headline: "We cannot find that page"
- not_found.hero.subheadline: "Try one of these, or call now for immediate help."

### not_found.suggestions
- not_found.suggestions.heading: "Popular pages"
- not_found.suggestions.items.0.label: "Services"
- not_found.suggestions.items.1.label: "Areas served"
- not_found.suggestions.items.2.label: "Contact"

## 4. Shared Component Surfaces

## Surface: global

### global.cta
- global.cta.call_now: "Call now"
- global.cta.get_quote: "Get a quote"

### global.footer
- global.footer.areas: "Areas served"
- global.footer.company: "Company"
- global.footer.legal: "Legal"
- global.footer.services: "Services"

### global.header
- global.header.hours_label: "Hours"

### global.nav
- global.nav.about: "About"
- global.nav.areas: "Areas"
- global.nav.contact: "Contact"
- global.nav.home: "Home"
- global.nav.reviews: "Reviews"
- global.nav.services: "Services"

## Surface: component

### component.accordion
- component.accordion.collapse_label: "Collapse"
- component.accordion.expand_label: "Expand"

### component.action_bar
- component.action_bar.aria_label: "Quick actions"

### component.breadcrumbs
- component.breadcrumbs.aria_label: "Breadcrumb"

### component.button
- component.button.loading_label: "Loading..."

### component.form
- component.form.optional_indicator: "Optional"
- component.form.required_indicator: "Required"

### component.testimonial
- component.testimonial.read_less: "Read less"
- component.testimonial.read_more: "Read more"

## Surface: forms

### forms.quote
- forms.quote.error_body: "Please try again, or call now for the fastest help."
- forms.quote.error_title: "Could not submit"
- forms.quote.submit: "Request quote"
- forms.quote.success_body: "Thanks. If this is urgent, calling is the fastest way to reach us."
- forms.quote.success_title: "Request received"
- forms.quote.title: "Request a quote"

## 5. Errors and Validation

## Surface: errors

### errors.network
- errors.network.body: "Please try again. If you need help urgently, call now."
- errors.network.retry: "Try again"
- errors.network.title: "Something went wrong"

### errors.not_found
- errors.not_found.body: "The page you are looking for does not exist or has moved."
- errors.not_found.title: "Page not found"

## Surface: validation

### validation.details
- validation.details.required: "Tell us what is going on."

### validation.full_name
- validation.full_name.required: "Enter your name."

### validation.phone
- validation.phone.format: "Enter a valid phone number."
- validation.phone.required: "Enter a phone number."

### validation.zip
- validation.zip.required: "Enter your ZIP code."

## 6. SEO Block

## Surface: seo

### seo.about
- seo.about.meta_description: "Learn how we work and what to expect when you call."
- seo.about.meta_title: "About our plumbing team"
- seo.about.og_description: "Learn how we work and what to expect when you call."
- seo.about.og_title: "About our plumbing team"

### seo.areas
- seo.areas.meta_description: "Confirm whether we serve your neighborhood and get help fast."
- seo.areas.meta_title: "Areas we serve"
- seo.areas.og_description: "Confirm whether we serve your neighborhood and get help fast."
- seo.areas.og_title: "Areas we serve"

### seo.blog
- seo.blog.meta_description: "Simple plumbing guidance for homeowners and when to call a pro."
- seo.blog.meta_title: "Plumbing tips"
- seo.blog.og_description: "Simple plumbing guidance for homeowners and when to call a pro."
- seo.blog.og_title: "Plumbing tips"

### seo.contact
- seo.contact.meta_description: "Call now or request a quote. Find hours and service area info."
- seo.contact.meta_title: "Contact"
- seo.contact.og_description: "Call now or request a quote. Find hours and service area info."
- seo.contact.og_title: "Contact"

### seo.faq
- seo.faq.meta_description: "Common questions about coverage, scheduling, and pricing guidance."
- seo.faq.meta_title: "FAQ"
- seo.faq.og_description: "Common questions about coverage, scheduling, and pricing guidance."
- seo.faq.og_title: "FAQ"

### seo.home
- seo.home.meta_description: "Local plumbing services with clear next steps. Call now or request a quote."
- seo.home.meta_title: "Same-day plumbing in your area"
- seo.home.og_description: "Local plumbing services with clear next steps. Call now or request a quote."
- seo.home.og_title: "Same-day plumbing in your area"

### seo.not_found
- seo.not_found.meta_description: "The page you are looking for could not be found."
- seo.not_found.meta_title: "Page not found"

### seo.privacy
- seo.privacy.meta_description: "How we handle information from this website."
- seo.privacy.meta_title: "Privacy policy"
- seo.privacy.og_description: "How we handle information from this website."
- seo.privacy.og_title: "Privacy policy"

### seo.quote
- seo.quote.meta_description: "Send a quick request and we will follow up. Calling is the fastest option."
- seo.quote.meta_title: "Request a quote"
- seo.quote.og_description: "Send a quick request and we will follow up. Calling is the fastest option."
- seo.quote.og_title: "Request a quote"

### seo.reviews
- seo.reviews.meta_description: "Read feedback from local customers and decide next steps."
- seo.reviews.meta_title: "Customer reviews"
- seo.reviews.og_description: "Read feedback from local customers and decide next steps."
- seo.reviews.og_title: "Customer reviews"

### seo.services
- seo.services.meta_description: "Browse common plumbing services and get clear next steps. Call now or request a quote."
- seo.services.meta_title: "Plumbing services"
- seo.services.og_description: "Browse common plumbing services and get clear next steps. Call now or request a quote."
- seo.services.og_title: "Plumbing services"

### seo.terms
- seo.terms.meta_description: "Conditions for using this website."
- seo.terms.meta_title: "Terms of use"
- seo.terms.og_description: "Conditions for using this website."
- seo.terms.og_title: "Terms of use"

## 7. Schema.org Snippets
- Industry pack requires LocalBusiness JSON-LD across public pages.
- Schema values are rendered from CMS site settings (name/phone/hours/address/serviceArea/aggregateRating) and page CMS content (services/areas/reviews).

## 8. Trust Copy
- trust.* keys are labels and short copy that pair with CMS-managed business identity values.

## Surface: trust

### trust.hours_label
- trust.hours_label: "Hours"

### trust.insured_badge
- trust.insured_badge: "Insured"

### trust.insured_label
- trust.insured_label: "Insured"

### trust.license_label
- trust.license_label: "License"

### trust.licensed_badge
- trust.licensed_badge: "Licensed"

### trust.privacy
- trust.privacy: "We respect your privacy and only use your information to respond to your request."

### trust.review_aggregate_label
- trust.review_aggregate_label: "Rating"

### trust.same_day_badge
- trust.same_day_badge: "Same-day"

### trust.service_areas_label
- trust.service_areas_label: "Service areas"

## 9. Forbidden Words Audit
- No forbidden words found in this locale set.

## 10. Open Questions
- Legal review needed for privacy.body and terms.body.
- Confirm business license number format (rendered from CMS site settings).
