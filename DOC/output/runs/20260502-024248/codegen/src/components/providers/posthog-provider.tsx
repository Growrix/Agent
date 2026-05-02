'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const phClient = usePostHog()

  useEffect(() => {
    if (pathname && phClient) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url += '?' + searchParams.toString()
      }
      phClient.capture('$pageview', { $current_url: url })
    }
  }, [pathname, searchParams, phClient])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
    if (key && host) {
      posthog.init(key, {
        api_host: host,
        capture_pageview: false,
        capture_pageleave: true,
      })
    }
  }, [])

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  )
}
