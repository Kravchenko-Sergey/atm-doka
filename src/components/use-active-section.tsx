// hooks/useActiveSection.ts - упрощенный вариант
import { useState, useEffect, useRef } from 'react'

export const useActiveSection = (sectionIds: string[]) => {
	const [activeId, setActiveId] = useState<string>('')
	const observerRef = useRef<IntersectionObserver | null>(null)

	useEffect(() => {
		if (sectionIds.length === 0) return

		observerRef.current = new IntersectionObserver(
			(entries) => {
				// Сортируем видимые элементы по их положению на экране
				const visibleEntries = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => {
						// Предпочитаем элементы, которые ближе к верху viewport
						const aTop = Math.abs(a.boundingClientRect.top)
						const bTop = Math.abs(b.boundingClientRect.top)
						return aTop - bTop
					})

				if (visibleEntries.length > 0) {
					const topEntry = visibleEntries[0]

					// Более строгая проверка - элемент должен быть видим хотя бы на 30%
					const rect = topEntry.boundingClientRect
					const viewportHeight = window.innerHeight
					const visibleHeight =
						Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
					const elementHeight = rect.height
					const visibleRatio = visibleHeight / elementHeight

					if (visibleRatio > 0.3) {
						setActiveId(topEntry.target.id)
					}
				}
			},
			{
				// Меньший rootMargin для большей точности
				rootMargin: '-10% 0px -80% 0px',
				threshold: 0.3
			}
		)

		sectionIds.forEach((id) => {
			const element = document.getElementById(id)
			if (element) {
				observerRef.current?.observe(element)
			}
		})

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect()
			}
		}
	}, [sectionIds])

	return activeId
}
