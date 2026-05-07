import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const publicRoutes = ["/", "/services", "/storm-damage", "/materials", "/projects", "/financing", "/contact", "/faq", "/about", "/areas", "/sign-in", "/sign-up"];

export function proxy(request: NextRequest) {
  const isPublic = publicRoutes.some((route) => request.nextUrl.pathname === route || request.nextUrl.pathname.startsWith(`${route}/`));
  if (isPublic) {
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"]
};


