import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Public routes — no auth required. */
const PUBLIC_ROUTES = [
  '/',
  '/services',
  '/services/(.*)',
  '/portfolio',
  '/portfolio/(.*)',
  '/testimonials',
  '/blog',
  '/blog/(.*)',
  '/quote',
  '/contact',
  '/about',
  '/privacy',
  '/terms',
  '/sign-in',
  '/sign-up',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isPublic = PUBLIC_ROUTES.some((route) =>
    new RegExp(`^${route}$`).test(pathname),
  )

  // Protected routes: /account/**
  if (!isPublic && pathname.startsWith('/account')) {
    const signIn = new URL('/sign-in', request.url)
    signIn.searchParams.set('next', pathname)
    return NextResponse.redirect(signIn)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico)).*)'],
}
