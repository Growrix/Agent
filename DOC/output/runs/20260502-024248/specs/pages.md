# PAGE SPECS — AU Plumber Website

## `/` — Homepage
- **Group**: `(marketing)`
- **Data**: `getHomepageBySlug('home')` via Sanity CDN, `revalidate: 60`
- **Metadata**: from CMS `seo` field
- **Required sections**: hero_local_positioning, immediate_call_cta, quote_cta, trust_signals, service_cards, why_choose_us, reviews_preview, process_steps, service_area_summary, faq_preview, final_conversion_cta
- **States**: `loading.tsx`, `error.tsx`
- **Structured data**: `LocalBusiness`, `Plumber`

## `/about` — About
- **Group**: `(marketing)`
- **Data**: `getMarketingPageBySlug('about')` via Sanity CDN, `revalidate: 120`
- **States**: `loading.tsx`, `error.tsx`, `not-found.tsx`

## `/services` — Services Overview
- **Group**: `(marketing)`
- **Data**: `getAllServices()` via Sanity CDN, `revalidate: 60`
- **States**: `loading.tsx`, `error.tsx`

## `/services/[slug]` — Service Detail
- **Group**: `(marketing)`
- **Data**: `getServiceBySlug(params.slug)` via Sanity CDN, `revalidate: 60`
- **Metadata**: per-service title, description, canonical
- **Structured data**: `Service`
- **Forms**: `QuoteRequestForm` embedded
- **States**: `loading.tsx`, `error.tsx`, `not-found.tsx`
- **generateStaticParams**: all service slugs from Sanity at build time

## `/emergency-plumbing` — Emergency Landing
- **Group**: `(marketing)`
- **Data**: `getMarketingPageBySlug('emergency-plumbing')`, `revalidate: 30`
- **Conversion priority**: HIGHEST — full-width CTAs, `CallbackRequestForm` above fold
- **States**: `loading.tsx`, `error.tsx`, `not-found.tsx`

## `/areas` — Service Areas Overview
- **Group**: `(marketing)`
- **Data**: `getAllServiceAreas()`, `revalidate: 120`
- **States**: `loading.tsx`, `error.tsx`

## `/areas/[slug]` — Suburb Landing
- **Group**: `(marketing)`
- **Data**: `getServiceAreaBySlug(params.slug)`, `revalidate: 120`
- **SEO**: local keyword targeting, unique copy per suburb
- **Structured data**: `LocalBusiness` with suburb `areaServed`
- **generateStaticParams**: all area slugs from Sanity at build
- **States**: `loading.tsx`, `error.tsx`, `not-found.tsx`

## `/quote` — Quote Request
- **Group**: `(marketing)`
- **Data**: `getMarketingPageBySlug('quote')`, `revalidate: 60`
- **Form**: `QuoteRequestForm` (name, phone, email, suburb, service_slug, urgency, message, consent)
- **Submission**: POST `/api/lead-enquiries`, redirect `/thank-you?type=quote`
- **States**: `loading.tsx`, `error.tsx`, `not-found.tsx`

## `/testimonials` — Reviews
- **Group**: `(marketing)`
- **Data**: `getApprovedTestimonials()`, `revalidate: 120`
- **Structured data**: `Review` array
- **States**: `loading.tsx`, `error.tsx`

## `/faq` — FAQ
- **Group**: `(marketing)`
- **Data**: `getFaqItems()`, `revalidate: 120`
- **Structured data**: `FAQPage`
- **States**: `loading.tsx`, `error.tsx`

## `/contact` — Contact
- **Group**: `(marketing)`
- **Data**: `getMarketingPageBySlug('contact')`, `revalidate: 120`
- **Forms**: both `QuoteRequestForm` and `CallbackRequestForm`
- **States**: `loading.tsx`, `error.tsx`, `not-found.tsx`

## `/blog` — Blog List
- **Group**: `(marketing)`
- **Data**: `getPublishedPosts()`, `revalidate: 120`
- **States**: `loading.tsx`, `error.tsx`

## `/blog/[slug]` — Blog Post
- **Group**: `(marketing)`
- **Data**: `getPostBySlug(params.slug)`, `revalidate: 120`
- **Structured data**: `Article`
- **generateStaticParams**: all published post slugs
- **States**: `loading.tsx`, `error.tsx`, `not-found.tsx`

## `/thank-you` — Confirmation
- **Group**: `(marketing)`
- **Data**: static
- **Cache**: `force-cache`
- **Query param**: `type=quote|callback` to show appropriate message

## `/privacy` and `/terms`
- **Group**: `(marketing)`
- **Data**: CMS, `revalidate: 3600`
- **States**: `not-found.tsx`

## `/sign-in` — Admin Sign In
- **Group**: `(auth)`
- **Component**: `<SignIn>` from `@clerk/nextjs`
- **Redirect after sign-in**: `/admin/leads`

## `/admin/leads` — Lead Dashboard
- **Group**: `(admin)`
- **Auth**: server-side `await auth()` — redirect to `/sign-in` if unauthenticated
- **Data**: paginated `getLeadEnquiriesPaginated()`, `no-store`
- **States**: `loading.tsx`, `error.tsx`
