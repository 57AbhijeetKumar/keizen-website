import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already on maintenance — let it through
  if (pathname === "/maintenance") return NextResponse.next();

  // Allow static assets, images, fonts, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/logo") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|woff2?|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to the maintenance page
  return NextResponse.redirect(new URL("/maintenance", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
