'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
	interface Window {
		ym?: (counterId: number, action: string, url?: string) => void
	}
}

export default function YandexMetrika() {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		const url = `${pathname}?${searchParams}`
		if (window.ym) {
			window.ym(102141824, 'hit', url)
		}
	}, [pathname, searchParams])

	return null
}
