// hooks/use-delayed-hash-scroll.ts
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useDelayedHashScroll() {
	const pathname = usePathname()

	useEffect(() => {
		const hash = window.location.hash
		if (!hash || hash === '#') return

		const id = hash.substring(1)

		// Функция для скролла
		const scrollToElement = () => {
			const element = document.getElementById(id)
			if (element) {
				// Используем нативный скролл с offset
				const yOffset = -120 // Высота фиксированного заголовка
				const y =
					element.getBoundingClientRect().top + window.pageYOffset + yOffset

				window.scrollTo({
					top: y,
					behavior: 'smooth'
				})

				return true
			}
			return false
		}

		// Пробуем несколько раз с интервалами
		let attempts = 0
		const maxAttempts = 10

		const tryScroll = () => {
			if (scrollToElement() || attempts >= maxAttempts) {
				return
			}

			attempts++
			setTimeout(tryScroll, 100)
		}

		// Начинаем попытки
		setTimeout(tryScroll, 100)
	}, [pathname])
}
