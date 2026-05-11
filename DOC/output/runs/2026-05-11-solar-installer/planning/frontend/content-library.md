# Content Library — SunEnergy Pro

**Project:** SunEnergy Pro Solar Installation Website  
**Version:** 1.0  
**Locale:** en-US  
**Status:** LOCKED  
**Date:** 2026-05-11

---

## Content Overview

All visible text on the SunEnergy Pro website is keyed for internationalization (i18n). This document serves as the master index; the actual content values are in `content.en-US.json`.

### Content Key Naming Convention
```
<section>.<element>.<variant>
Examples:
  hero.headline.main
  hero.cta.primary
  services.grid.card_1.title
  footer.attribution.text
```

---

## Global Content Keys (All Pages)

### Header & Navigation
```
header.nav.services
header.nav.portfolio
header.nav.about
header.nav.financing
header.nav.contact
header.nav.faq
header.cta.schedule
header.cta.quote
header.theme_switcher.label
```

### Footer (Universal)
```
footer.company_name
footer.tagline
footer.address
footer.phone
footer.email
footer.hours_label
footer.service_area
footer.service_area_detail
footer.social.facebook.label
footer.social.instagram.label
footer.social.youtube.label
footer.social.linkedin.label
footer.social.youtube.url
footer.copyright
footer.attribution.text
footer.attribution.link_text
footer.attribution.url
footer.privacy_link
footer.terms_link
footer.contact.hours_title
footer.contact.hours_value
footer.contact.emergency_title
footer.contact.emergency_value
footer.contact.languages
```

### Contact Options (Sticky Header & Sidebar)
```
contact.whatsapp_label
contact.whatsapp_message_template
contact.phone_label
contact.call_now
contact.email_label
```

### Global CTAs
```
cta.get_assessment
cta.schedule_consultation
cta.browse_portfolio
cta.learn_more
cta.get_quote
cta.contact_us
cta.chat_now
cta.explore_services
```

---

## Page-Specific Content Keys

### HOME PAGE
```
home.hero.headline
home.hero.subheadline
home.hero.description
home.hero.cta_primary
home.hero.cta_secondary

home.trust_badges.title
home.trust_badges.installations
home.trust_badges.years
home.trust_badges.satisfaction
home.trust_badges.warranty

home.services_preview.title
home.services_preview.description
home.services_preview.service_1_name
home.services_preview.service_1_desc
home.services_preview.service_2_name
home.services_preview.service_2_desc
home.services_preview.service_3_name
home.services_preview.service_3_desc
home.services_preview.cta

home.testimonials.title
home.testimonials.subtitle
home.testimonials.testimonial_1_quote
home.testimonials.testimonial_1_author
home.testimonials.testimonial_1_role
home.testimonials.testimonial_2_quote
home.testimonials.testimonial_2_author

home.featured_projects.title
home.featured_projects.description
home.featured_projects.project_1_name
home.featured_projects.project_1_savings
home.featured_projects.project_2_name
home.featured_projects.project_2_savings
home.featured_projects.cta

home.cta_band.headline
home.cta_band.description
home.cta_band.cta_text
```

### SERVICES PAGE
```
services.hero.headline
services.hero.description
services.hero.cta

services.grid.title
services.grid.subtitle

services.service_1.name
services.service_1.description
services.service_1.benefits
services.service_1.price_label
services.service_1.cta

services.service_2.name
services.service_2.description
services.service_2.benefits
services.service_2.price_label
services.service_2.cta

services.service_3.name
services.service_3.description
services.service_3.benefits
services.service_3.price_label
services.service_3.cta

services.financing_preview.title
services.financing_preview.description
services.financing_preview.cta

services.cta_band.headline
services.cta_band.cta_text
```

### PORTFOLIO PAGE
```
portfolio.hero.headline
portfolio.hero.description

portfolio.gallery.title
portfolio.gallery.filter_all
portfolio.gallery.filter_residential
portfolio.gallery.filter_commercial
portfolio.gallery.filter_rooftop

portfolio.project_1.name
portfolio.project_1.location
portfolio.project_1.before_label
portfolio.project_1.after_label
portfolio.project_1.savings_amount
portfolio.project_1.payback_period

portfolio.project_2.name
portfolio.project_2.location
portfolio.project_2.before_label
portfolio.project_2.after_label
portfolio.project_2.savings_amount
portfolio.project_2.payback_period

portfolio.case_study_link
portfolio.cta_band.headline
portfolio.cta_band.cta_text
```

### CONTACT PAGE
```
contact.hero.headline
contact.hero.description

contact.form.step_1_label
contact.form.step_1_description
contact.form.email_label
contact.form.email_placeholder
contact.form.email_required
contact.form.next_step

contact.form.step_2_label
contact.form.step_2_description
contact.form.name_label
contact.form.name_placeholder
contact.form.phone_label
contact.form.phone_placeholder
contact.form.property_type_label
contact.form.property_type_residential
contact.form.property_type_commercial
contact.form.next_step

contact.form.step_3_label
contact.form.step_3_description
contact.form.message_label
contact.form.message_placeholder
contact.form.preferred_contact_label
contact.form.preferred_contact_phone
contact.form.preferred_contact_email
contact.form.preferred_contact_whatsapp
contact.form.submit_label
contact.form.submitting_label

contact.form.success_title
contact.form.success_message
contact.form.success_next_step

contact.map.title
contact.map.service_area_label
contact.map.zip_code_placeholder

contact.info_strip.hours_title
contact.info_strip.hours_value
contact.info_strip.emergency_title
contact.info_strip.emergency_value
contact.info_strip.response_time
```

### FINANCING PAGE
```
financing.hero.headline
financing.hero.description

financing.options.title
financing.options.option_1_name
financing.options.option_1_description
financing.options.option_1_cta

financing.options.option_2_name
financing.options.option_2_description
financing.options.option_2_cta

financing.options.option_3_name
financing.options.option_3_description
financing.options.option_3_cta

financing.calculator.title
financing.calculator.description
financing.calculator.zip_code_label
financing.calculator.annual_usage_label
financing.calculator.roof_type_label
financing.calculator.calculate_button

financing.calculator.results_title
financing.calculator.results_monthly_savings
financing.calculator.results_annual_savings
financing.calculator.results_payback_period
financing.calculator.results_system_size
financing.calculator.results_cta

financing.incentives.title
financing.incentives.federal_tax_credit
financing.incentives.state_incentives
financing.incentives.utility_rebates

financing.cta_band.headline
financing.cta_band.cta_text
```

### TESTIMONIALS PAGE
```
testimonials.hero.headline
testimonials.hero.description

testimonials.carousel.title
testimonials.carousel.subtitle

testimonials.testimonial_1.quote
testimonials.testimonial_1.author
testimonials.testimonial_1.role
testimonials.testimonial_1.location
testimonials.testimonial_1.rating

testimonials.testimonial_2.quote
testimonials.testimonial_2.author
testimonials.testimonial_2.role
testimonials.testimonial_2.location
testimonials.testimonial_2.rating

testimonials.stats.title
testimonials.stats.satisfaction_rating
testimonials.stats.total_reviews
testimonials.stats.average_rating

testimonials.cta_band.headline
testimonials.cta_band.cta_text
```

### ABOUT PAGE
```
about.hero.headline
about.hero.description

about.story.title
about.story.subtitle
about.story.paragraph_1
about.story.paragraph_2
about.story.paragraph_3

about.mission.title
about.mission.description

about.certifications.title
about.certifications.nabcep
about.certifications.warranty
about.certifications.insurance

about.team.title
about.team.description

about.team_member_1.name
about.team_member_1.role
about.team_member_1.bio

about.team_member_2.name
about.team_member_2.role
about.team_member_2.bio

about.cta_band.headline
about.cta_band.cta_text
```

### FAQ PAGE
```
faq.hero.headline
faq.hero.description

faq.question_1.question
faq.question_1.answer

faq.question_2.question
faq.question_2.answer

faq.question_3.question
faq.question_3.answer

faq.question_4.question
faq.question_4.answer

faq.question_5.question
faq.question_5.answer

faq.search_placeholder
faq.no_results_message
faq.contact_support_link

faq.cta_band.headline
faq.cta_band.cta_text
```

### BLOG PAGE
```
blog.hero.headline
blog.hero.description

blog.featured.title
blog.featured.category
blog.featured.read_time
blog.featured.excerpt

blog.post_1.title
blog.post_1.category
blog.post_1.read_time
blog.post_1.excerpt

blog.post_2.title
blog.post_2.category
blog.post_2.read_time
blog.post_2.excerpt

blog.filter_all
blog.filter_installation
blog.filter_maintenance
blog.filter_solar_basics
blog.filter_news

blog.pagination_prev
blog.pagination_next

blog.cta_band.headline
blog.cta_band.cta_text
```

### ASSESSMENT PAGE
```
assessment.hero.headline
assessment.hero.description

assessment.form.step_1.question
assessment.form.step_1.option_a
assessment.form.step_1.option_b
assessment.form.step_1.option_c

assessment.form.step_2.question
assessment.form.step_2.option_a
assessment.form.step_2.option_b
assessment.form.step_2.option_c

assessment.form.step_3.question
assessment.form.step_3.label
assessment.form.step_3.placeholder

assessment.results.title
assessment.results.subtitle
assessment.results.your_potential_savings
assessment.results.estimated_payback
assessment.results.system_recommendation

assessment.results.cta_email_capture
assessment.results.email_placeholder
assessment.results.submit_button

assessment.error.message
assessment.error.retry_button
```

### CALCULATOR PAGE
```
calculator.hero.headline
calculator.hero.description

calculator.form.zip_code_label
calculator.form.zip_code_placeholder
calculator.form.annual_usage_label
calculator.form.annual_usage_unit
calculator.form.roof_type_label
calculator.form.roof_type_flat
calculator.form.roof_type_pitched
calculator.form.roof_type_metal
calculator.form.calculate_button

calculator.results.title
calculator.results.monthly_savings
calculator.results.annual_savings
calculator.results.payback_period
calculator.results.system_size
calculator.results.federal_tax_credit

calculator.results.cta_primary
calculator.results.cta_secondary

calculator.disclaimer
calculator.accuracy_note
```

### FORM VALIDATION & STATES
```
form.validation.email_required
form.validation.email_invalid
form.validation.phone_required
form.validation.phone_invalid
form.validation.name_required
form.validation.message_required

form.error.network_error
form.error.server_error
form.error.try_again

form.success.message
form.success.thank_you

form.loading.submitting
```

---

## Error & Empty States
```
error.404.headline
error.404.description
error.404.home_link

error.500.headline
error.500.description
error.500.support_link

empty.no_posts
empty.no_results
empty.no_testimonials

offline.message
offline.retry_button
```

---

## Social & Trust
```
social.follow_us
social.facebook_url
social.instagram_url
social.youtube_url
social.linkedin_url
social.youtube_channel

trust.bbb_rating
trust.customer_reviews
trust.years_established
trust.installations_completed
trust.satisfaction_rate
trust.warranty_years

certifications.nabcep
certifications.licensed
certifications.insured
certifications.bonded
```

---

## Trust Signals & Metrics
```
metrics.installations
metrics.years_business
metrics.satisfaction
metrics.warranty

metrics.installations_label
metrics.years_label
metrics.satisfaction_label
metrics.warranty_label

trust_chip.certified
trust_chip.warranty
trust_chip.response_time
trust_chip.licensed
```

---

## Next Phase

**Phase 5.5 — Content Values** will populate `content.en-US.json` with full, publish-ready copy for every key listed above.

