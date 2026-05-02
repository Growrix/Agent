import type { Metadata } from 'next'
import { getMarketingPageBySlug } from '@/sanity/queries/pages'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getMarketingPageBySlug('about')
  return {
    title: page?.seo?.metaTitle ?? 'About Us',
    description: page?.seo?.metaDescription ?? 'Your local licenced plumbing team.',
  }
}

export default async function AboutPage() {
  const page = await getMarketingPageBySlug('about')
  const phoneHref = 'tel:1300XXXXXX'

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{page?.title ?? 'About Us'}</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">About page content loaded from Sanity CMS.</p>
      </div>
      <div className="mt-10 bg-brand-blue text-white rounded-xl p-6">
        <p className="font-bold text-lg mb-2">Ready to book?</p>
        <a
          href={phoneHref}
          className="inline-block bg-white text-brand-blue font-bold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Call Us Now
        </a>
      </div>
    </div>
  )
}
