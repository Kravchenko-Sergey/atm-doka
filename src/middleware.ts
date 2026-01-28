import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Разрешаем доступ только к странице закрытия проекта
  if (request.nextUrl.pathname === '/project-closed') {
    return NextResponse.next();
  }

  // Для всех остальных страниц делаем редирект
  const url = request.nextUrl.clone();
  url.pathname = '/project-closed';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};