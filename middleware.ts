import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 – Site Not Available</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0a;
      color: #a1a1aa;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 2rem;
    }
    .wrap { text-align: center; max-width: 400px; }
    .code {
      font-size: clamp(5rem, 20vw, 8rem);
      font-weight: 800;
      color: #f47920;
      line-height: 1;
      letter-spacing: -4px;
    }
    h1 {
      margin-top: 1rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: #e4e4e7;
    }
    p { margin-top: 0.5rem; font-size: 0.9rem; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="code">404</div>
    <h1>Site Not Available</h1>
    <p>This page is currently unavailable. Please check back later.</p>
  </div>
</body>
</html>`;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static assets and Next.js internals
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

  // Return a bare 404 HTML page — no Next.js layout, no header/footer/chat
  return new NextResponse(HTML, {
    status: 404,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
