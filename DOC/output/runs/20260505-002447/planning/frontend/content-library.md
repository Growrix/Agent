---
document_type: content-library
project_name: plumbing-service-website
default_locale: en-AU
locales: [en-AU]
i18n_required: false
build_stage: 2-design-foundation
depends_on:
  - master-ui-architecture.md
  - design-system.md
  - ../brief.json
---

# Content Library

## 1. Voice & Tone
- Voice: trustworthy
- Tone: clear, reassuring, local
- Reading level target: plain-language homeowner reading level
- Forbidden words: synergy, world-class, best-in-class, leverage, disruptive, innovative

## 2. Naming Convention
- Dot-notated keys.
- Surface-first naming.
- Shared component copy under component.*.
- Trust, validation, and error copy under dedicated namespaces.

## 3. Content Surfaces

## Surface: component

### component.nav
- component.nav.home: "Home"
- component.nav.services: "Services"
- component.nav.areas: "Areas"
- component.nav.reviews: "Reviews"
- component.nav.about: "About"
- component.nav.faq: "FAQ"
- component.nav.contact: "Contact"
- component.nav.cta_call: "Call Now"

### component.button
- component.button.call_now: "Call Now"
- component.button.get_quote: "Get a Quote"
- component.button.submit_quote: "Submit Quote Request"

### component.sticky
- component.sticky.call: "Call"
- component.sticky.quote: "Quote"
- component.sticky.contact: "Contact"

### component.footer
- component.footer.address: "Service area only - full address on request"
- component.footer.hours: "Mon-Sat, 7:00am-7:00pm"
- component.footer.license: "Licensed plumbing contractor details available on request"
- component.footer.call_label: "Call the team"
- component.footer.service_area: "Serving metro and surrounding suburbs"

### component.stats
- component.stats.response_time_label: "Average callback window"
- component.stats.jobs_completed_label: "Jobs completed last year"
- component.stats.satisfaction_label: "Customer satisfaction"

## Surface: trust
- trust.license: "Licensed and insured"
- trust.years: "Trusted local workmanship"
- trust.areas: "Local area coverage"
- trust.response_time: "Fast response during business hours"
- trust.guarantee: "Clear workmanship standards and tidy clean-up"
- trust.privacy: "Your details are used only to respond to your plumbing enquiry."

## Surface: home

### home.hero
- home.hero.eyebrow: "Expert Plumbing"
- home.hero.headline: "Reliable Plumbing Solutions for Your Home"
- home.hero.subheadline: "Fast local support for urgent repairs, maintenance, and scheduled plumbing work with a clear quote path."
- home.hero.cta_primary: "Call Now"
- home.hero.cta_secondary: "Get a Quote"
- home.hero.media_alt: "Professional plumber standing in front of a service van"

### home.services
- home.services.heading: "Plumbing services built around the jobs homeowners need most"
- home.services.body: "Browse the core service categories first, then jump straight into a quote request or same-day call."

### home.proof
- home.proof.heading: "Trusted by households who want fast answers and tidy work"
- home.proof.body: "Reviews, response expectations, and visible operating standards appear before the hard sell."

### home.process
- home.process.heading: "Simple from first call to completed fix"
- home.process.body: "We keep the journey short: explain the issue, confirm the service, and get the next step booked quickly."

### home.coverage
- home.coverage.heading: "Built for local response, not generic lead gen"
- home.coverage.body: "Area pages, service pages, and contact surfaces work together so visitors can confirm coverage and act in one path."

### home.final_cta
- home.final_cta.heading: "Need plumbing help now?"
- home.final_cta.body: "Call for the fastest path, or send a short quote request and we will get back to you."

## Surface: services

### services.hero
- services.hero.eyebrow: "Services"
- services.hero.headline: "Choose the right plumbing service without guesswork"
- services.hero.subheadline: "Every service page explains what is included, what to expect, and how to get help quickly."

### services.grid
- services.grid.heading: "Core plumbing categories"
- services.grid.body: "The site prioritises the high-intent jobs that usually trigger a call or quote request."
- services.grid.items.0.title: "Emergency repairs"
- services.grid.items.0.body: "Burst pipes, urgent leaks, blocked drains, and sudden failures."
- services.grid.items.0.cta: "View emergency plumbing"
- services.grid.items.1.title: "Hot water systems"
- services.grid.items.1.body: "Installs, repairs, maintenance, and replacement guidance."
- services.grid.items.1.cta: "View hot water services"
- services.grid.items.2.title: "Blocked drains"
- services.grid.items.2.body: "Inspection, clearing, and prevention support for recurring drain issues."
- services.grid.items.2.cta: "View blocked drain services"

### services.final_cta
- services.final_cta.heading: "Not sure which service fits?"
- services.final_cta.body: "Use the quote page and describe the issue in plain language."

## Surface: service

### service.template
- service.template.includes_heading: "What this service includes"
- service.template.process_heading: "How the visit works"
- service.template.proof_heading: "Why customers choose this service"
- service.template.faq_heading: "Common questions"
- service.template.cta_heading: "Ready to request this service?"

## Surface: areas

### areas.hero
- areas.hero.eyebrow: "Service Areas"
- areas.hero.headline: "Plumbing coverage organised around the places you actually search for"
- areas.hero.subheadline: "Area pages give local proof, service availability context, and a direct route to contact."

### areas.intro
- areas.intro.heading: "Local area pages"
- areas.intro.body: "Each area page pairs service coverage with nearby trust signals so the site feels genuinely local."

### areas.final_cta
- areas.final_cta.heading: "Need to confirm coverage?"
- areas.final_cta.body: "Call the team or submit your postcode on the quote form."

## Surface: area

### area.template
- area.template.services_heading: "Services available in this area"
- area.template.proof_heading: "Why local customers trust this team"
- area.template.cta_heading: "Book plumbing support in this area"

## Surface: reviews

### reviews.hero
- reviews.hero.eyebrow: "Customer Reviews"
- reviews.hero.headline: "Proof that the service experience matches the promise"
- reviews.hero.subheadline: "Reviews sit close to the conversion path so visitors can build confidence before contacting the team."

### reviews.summary
- reviews.summary.heading: "What customers mention most"
- reviews.summary.body: "Fast communication, tidy work, and dependable follow-through are the repeated trust themes."
- reviews.cards.0.quote: "Clear communication from the first call and the issue was fixed without fuss."
- reviews.cards.0.name: "Homeowner review"
- reviews.cards.0.context: "Emergency repair"
- reviews.cards.1.quote: "Helpful, on time, and the quote process felt simple from start to finish."
- reviews.cards.1.name: "Property manager review"
- reviews.cards.1.context: "Maintenance call-out"
- reviews.cards.2.quote: "The site made it easy to understand the service and get in touch quickly."
- reviews.cards.2.name: "Local customer review"
- reviews.cards.2.context: "Hot water enquiry"

### reviews.final_cta
- reviews.final_cta.heading: "Want the same fast response?"
- reviews.final_cta.body: "Call now or start a short quote request."

## Surface: about

### about.hero
- about.hero.eyebrow: "About"
- about.hero.headline: "A local plumbing brand that feels capable, not corporate"
- about.hero.subheadline: "The about page explains approach, standards, and the human side of the team without diluting the conversion path."

### about.story
- about.story.heading: "How the business presents itself"
- about.story.body: "Trust comes from visible standards, clear communication, and a grounded local-service voice."

### about.values
- about.values.heading: "Operating values"
- about.values.body: "Responsiveness, tidy workmanship, honest quoting, and respectful in-home service."

### about.final_cta
- about.final_cta.heading: "Need help from a team you can actually reach?"
- about.final_cta.body: "Jump to contact or quote without digging through the site."

## Surface: quote

### quote.hero
- quote.hero.eyebrow: "Quote Request"
- quote.hero.headline: "Tell us what is happening and we will point you to the right next step"
- quote.hero.subheadline: "The quote form stays short, asks for the details that matter, and protects the submission with spam checks."

### quote.form
- quote.form.heading: "Request a plumbing quote"
- quote.form.name_label: "Your name"
- quote.form.phone_label: "Phone number"
- quote.form.service_label: "What do you need help with?"
- quote.form.postcode_label: "Postcode"
- quote.form.message_label: "Short job summary"
- quote.form.submit: "Submit Quote Request"
- quote.form.success_title: "Quote request sent"
- quote.form.success_body: "Thanks. A team member will review the details and get back to you shortly."

### quote.support
- quote.support.heading: "Prefer to talk first?"
- quote.support.body: "Calling is still the fastest route for urgent plumbing work."

### quote.final_cta
- quote.final_cta.heading: "Need an urgent answer instead?"
- quote.final_cta.body: "Use the call action if the job cannot wait."

## Surface: contact

### contact.hero
- contact.hero.eyebrow: "Contact"
- contact.hero.headline: "Every contact path is visible within one screen"
- contact.hero.subheadline: "Phone comes first, then the short form, then the support details visitors expect to verify."

### contact.channels
- contact.channels.heading: "Ways to get in touch"
- contact.channels.body: "Phone, quote form, service-area note, and business hours stay visible together."

### contact.form
- contact.form.heading: "Send a message"

### contact.final_cta
- contact.final_cta.heading: "Need the fastest route?"
- contact.final_cta.body: "Call directly for urgent plumbing help."

## Surface: faq

### faq.hero
- faq.hero.eyebrow: "FAQ"
- faq.hero.headline: "Common questions before you book or request a quote"
- faq.hero.subheadline: "The FAQ reduces hesitation and points visitors back into the quote path."

### faq.categories
- faq.categories.heading: "Questions we answer up front"
- faq.categories.body: "Coverage, timing, pricing expectations, and what to prepare before a visit."
- faq.items.0.question: "How quickly do you respond to new enquiries?"
- faq.items.0.answer: "The site promises a fast response window during stated business hours, with phone presented as the quickest path."
- faq.items.1.question: "Do I need to know the exact plumbing issue before asking for a quote?"
- faq.items.1.answer: "No. The quote flow is written so visitors can describe the problem in plain language."
- faq.items.2.question: "Can I check if my suburb is covered?"
- faq.items.2.answer: "Yes. Area pages and the postcode field in the quote form both support coverage checks."

### faq.final_cta
- faq.final_cta.heading: "Still need help?"
- faq.final_cta.body: "Move straight to the contact or quote path."

## Surface: privacy
- privacy.hero.title: "Privacy Policy"
- privacy.contact_line: "For privacy questions, use the contact page or call the business directly."

## Surface: terms
- terms.hero.title: "Terms of Service"
- terms.contact_line: "If you need clarification on service terms, contact the business before booking."

## Surface: not_found
- not_found.hero.title: "Page not found"
- not_found.hero.body: "The page may have moved, but the main contact paths are still available."
- not_found.cta_primary: "Return Home"
- not_found.cta_secondary: "View Services"

## Surface: errors
- errors.network.title: "Connection issue"
- errors.network.body: "Please check your connection and try again."
- errors.network.retry: "Try again"
- errors.form.submit: "We could not send your request right now. Please try again or call directly."

## Surface: validation
- validation.name.required: "Please enter your name."
- validation.phone.required: "Please enter a phone number."
- validation.phone.format: "Enter a valid Australian phone number."
- validation.service.required: "Please select the service you need."
- validation.postcode.required: "Please enter your postcode."

## Surface: seo
- seo.home.meta_title: "Reliable Plumbing Solutions for Your Home"
- seo.home.meta_description: "Trust-led plumbing website plan with fast calls, quote capture, and local proof blocks."
- seo.services.meta_title: "Plumbing Services"
- seo.services.meta_description: "Browse service categories, understand the next step, and request the right plumbing help quickly."
- seo.service.meta_title: "Service Detail"
- seo.service.meta_description: "Service-detail pages explain scope, proof, FAQs, and a direct quote path."
- seo.areas.meta_title: "Service Areas"
- seo.areas.meta_description: "Area pages prove local coverage and connect visitors to the quote path without friction."
- seo.reviews.meta_title: "Customer Reviews"
- seo.reviews.meta_description: "Review surfaces build trust before visitors call or request a quote."
- seo.about.meta_title: "About the Team"
- seo.about.meta_description: "The about page explains approach, service standards, and why the team feels reliable."
- seo.quote.meta_title: "Request a Plumbing Quote"
- seo.quote.meta_description: "Submit a short quote request and move into the fastest next step for the job."
- seo.contact.meta_title: "Contact the Plumbing Team"
- seo.contact.meta_description: "Phone, enquiry form, hours, and service-area details stay visible on one clear contact page."
- seo.faq.meta_title: "Plumbing FAQ"
- seo.faq.meta_description: "Common plumbing questions answered clearly to reduce hesitation before contact."
- seo.privacy.meta_title: "Privacy Policy"
- seo.privacy.meta_description: "Privacy details for visitors using the plumbing site contact and quote surfaces."
- seo.terms.meta_title: "Terms of Service"
- seo.terms.meta_description: "Terms that govern service requests and use of the plumbing site."

## Surface: schema_org
- schema.home.local_business: "LocalBusiness with business name, area served, telephone, openingHours, and serviceType"
- schema.service.service: "Service with provider, areaServed, and serviceType"
- schema.area.local_business: "LocalBusiness area landing variant with areaServed and contactPoint"

## 8. Trust Copy
- trust.license
- trust.years
- trust.areas
- trust.response_time
- trust.guarantee
- trust.privacy

## 9. Forbidden Words Audit
- No forbidden words remain in the content set.

## 10. Open Questions
- Replace generic service-area wording once suburbs are confirmed.
- Replace placeholder licensing line once business credentials are available.