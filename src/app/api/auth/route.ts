import { NextResponse } from 'next/server'

export function getNextMidnight(): Date {
	const now = new Date()
	const midnight = new Date(now)
	midnight.setHours(24, 0, 0, 0) // Следующая полночь (00:00 следующего дня)
	return midnight
}

export async function POST(request: Request) {
	try {
		const { action } = await request.json()

		if (action === 'login') {
			const midnight = getNextMidnight()
			const secondsUntilMidnight = Math.floor(
				(midnight.getTime() - Date.now()) / 1000
			)

			const response = NextResponse.json({
				success: true,
				expiresAt: midnight.toISOString()
			})

			// Устанавливаем cookie до полуночи
			response.cookies.set('auth', 'true', {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'lax',
				maxAge: secondsUntilMidnight, // Живет до полуночи
				path: '/'
			})

			// Устанавливаем cookie с временем истечения
			response.cookies.set('auth_expires', midnight.toISOString(), {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'lax',
				maxAge: secondsUntilMidnight,
				path: '/'
			})

			return response
		}

		if (action === 'logout') {
			const response = NextResponse.json({ success: true })
			response.cookies.delete('auth')
			response.cookies.delete('auth_expires')
			return response
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
