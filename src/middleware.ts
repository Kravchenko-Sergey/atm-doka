import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const authCookie = request.cookies.get('auth')
	const expiresCookie = request.cookies.get('auth_expires')
	const isAuthenticated = authCookie?.value === 'true'
	const isLoginPage = request.nextUrl.pathname === '/login'
	const isApiRoute = request.nextUrl.pathname.startsWith('/api')

	// Проверяем не истекла ли сессия
	if (isAuthenticated && expiresCookie?.value) {
		const expiresDate = new Date(expiresCookie.value)
		const now = new Date()

		if (now > expiresDate) {
			// Сессия истекла - удаляем cookie и перенаправляем на логин
			const response = NextResponse.redirect(new URL('/login', request.url))
			response.cookies.delete('auth')
			response.cookies.delete('auth_expires')
			return response
		}
	}

	// Разрешаем доступ к статическим файлам и API
	if (
		request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|css|js|ico)$/) ||
		isApiRoute
	) {
		return NextResponse.next()
	}

	// Если пользователь авторизован - пропускаем
	if (isAuthenticated) {
		return NextResponse.next()
	}

	// Если не авторизован и не на странице логина - редирект на логин
	if (!isAuthenticated && !isLoginPage) {
		const url = request.nextUrl.clone()
		url.pathname = '/login'
		url.search = `?redirectTo=${encodeURIComponent(request.nextUrl.pathname)}`
		return NextResponse.redirect(url)
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
}
