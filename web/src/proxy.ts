import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const publicRoutes = [
  "/",
  "/services",
  "/portfolio",
  "/testimonials",
  "/blog",
  "/quote",
  "/contact",
  "/about",
  "/privacy",
  "/terms",
  "/auth/sign-in",
  "/auth/sign-up",
];

export function proxy(request: NextRequest) {
  const isPublic = publicRoutes.some(
    (route) => request.nextUrl.pathname === route || request.nextUrl.pathname.startsWith(`${route}/`),
  );

  if (isPublic) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
