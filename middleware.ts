import { NextRequest, NextResponse } from "next/server";

// MAINTENANCE MODE — remove this file and redeploy to bring the site back online.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow the maintenance page and all static assets through
  if (
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/logo") ||
    pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/maintenance", req.url));
}

export const config = {
  matcher: ["/((?!api).*)"],
};
