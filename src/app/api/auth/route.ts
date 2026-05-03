import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const { action } = await request.json()

		if (action === 'login') {
			// Устанавливаем время последней активности
			const now = new Date()
			const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000) // +24 часа

			const response = NextResponse.json({
				success: true,
				expiresAt: expiresAt.toISOString()
			})

			// Устанавливаем cookie авторизации
			response.cookies.set('auth', 'true', {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'lax',
				maxAge: 60 * 60 * 24, // 24 часа
				path: '/'
			})

			// Устанавливаем cookie с временем истечения сессии
			response.cookies.set('auth_expires', expiresAt.toISOString(), {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'lax',
				maxAge: 60 * 60 * 24,
				path: '/'
			})

			return response
		}

		if (action === 'logout') {
			const response = NextResponse.json({ success: true })

			// Удаляем cookies
			response.cookies.delete('auth')
			response.cookies.delete('auth_expires')

			return response
		}

		if (action === 'check') {
			// Проверяем не истекла ли сессия
			const expiresAt = request.headers
				.get('cookie')
				?.match(/auth_expires=([^;]+)/)?.[1]

			if (expiresAt) {
				const expiresDate = new Date(expiresAt)
				const now = new Date()

				if (now > expiresDate) {
					// Сессия истекла
					return NextResponse.json({ expired: true })
				}
			}

			return NextResponse.json({ expired: false })
		}

		return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
	} catch (error) {
		console.error('Auth API error:', error)
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		)
	}
}
