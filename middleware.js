import { NextResponse } from 'next/server';

const PROTECTED_PREFIX = '/dashboard';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isProtectedRoute = pathname.startsWith(PROTECTED_PREFIX);

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const session = request.cookies.get('session')?.value;

  if (session === 'authenticated') {
    return NextResponse.next();
  }

  const loginUrl = new URL('/', request.url);
  loginUrl.searchParams.set('message', 'Please sign in to continue.');

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/dashboard/:path*']
};
