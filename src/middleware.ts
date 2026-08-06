import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname === 'www.primus-companies.com') {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.hostname = 'primus-companies.com';

    return NextResponse.redirect(canonicalUrl, 308);
  }

  const response = NextResponse.next();

  // Vercel preview and local environments must never be indexed. Production
  // remains governed by the site's normal robots policy after launch approval.
  if (process.env.VERCEL_ENV !== 'production') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
