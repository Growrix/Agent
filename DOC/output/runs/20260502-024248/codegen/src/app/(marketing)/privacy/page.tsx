import type { Metadata } from 'next'
import { getMarketingPageBySlug } from '@/sanity/queries/pages'
import { notFound } from 'next/navigation'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const page = await getMarketingPageBySlug('privacy-policy')
  return {
    title: page?.seo?.metaTitle ?? 'Privacy Policy',
    description: page?.seo?.metaDescription ?? 'Our privacy policy.',
  }
}

export default async function PrivacyPage() {
  const page = await getMarketingPageBySlug('privacy-policy')
  if (!page) notFound()

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">Privacy policy content loaded from CMS.</p>
      </div>
    </div>
  )
}
