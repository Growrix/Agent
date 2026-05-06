import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://solarpro.example.com'
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/account/' },
    sitemap: `${base}/sitemap.xml`,
  }
}
