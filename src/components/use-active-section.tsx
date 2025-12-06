// useActiveSection.ts (с Intersection Observer - лучший вариант)
import { useState, useEffect, useRef } from 'react'

export const useActiveSection = (sectionIds: string[]) => {
	const [activeId, setActiveId] = useState<string>('')
	const observerRef = useRef<IntersectionObserver | null>(null)

	useEffect(() => {
		if (sectionIds.length === 0) return

		// Очищаем предыдущий observer
		if (observerRef.current) {
			observerRef.current.disconnect()
		}

		const elements = sectionIds
			.map((id) => ({
				id,
				element: document.getElementById(id)
			}))
			.filter((item) => item.element !== null) as {
			id: string
			element: HTMLElement
		}[]

		if (elements.length === 0) return

		const visibleElements = new Map<
			string,
			{
				ratio: number
				distanceToTop: number
			}
		>()

		const options = {
			root: null,
			// Настройка области наблюдения:
			// -100px сверху (учитываем фиксированный заголовок)
			// -40% снизу (чтобы элемент считался активным, когда он в верхней части экрана)
			rootMargin: '-100px 0px -40% 0px',
			threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const id = entry.target.id
				const rect = entry.boundingClientRect

				if (entry.isIntersecting) {
					// Сохраняем информацию о видимом элементе
					visibleElements.set(id, {
						ratio: entry.intersectionRatio,
						distanceToTop: Math.abs(rect.top)
					})
				} else {
					visibleElements.delete(id)
				}
			})

			// Находим наиболее подходящий активный элемент
			let bestMatch = { id: '', score: -1 }

			visibleElements.forEach((data, id) => {
				// Вычисляем "score" - комбинация видимости и положения
				// Больший вес даем элементам с большей видимостью
				// и элементам, которые ближе к верхней части экрана
				const visibilityScore = data.ratio * 100 // 0-100
				const positionScore = Math.max(0, 50 - data.distanceToTop / 10) // 0-50
				const totalScore = visibilityScore + positionScore

				if (totalScore > bestMatch.score) {
					bestMatch = { id, score: totalScore }
				}
			})

			// Если есть видимые элементы, выбираем лучший
			if (bestMatch.id && bestMatch.id !== activeId) {
				setActiveId(bestMatch.id)
			}

			// Если нет видимых элементов, пытаемся определить последний пройденный
			if (visibleElements.size === 0) {
				// Находим элемент с наименьшим отрицательным top (самый нижний пройденный)
				let lastPassedId = ''
				let maxTop = -Infinity

				elements.forEach(({ id, element }) => {
					const rect = element.getBoundingClientRect()
					// Ищем элемент, который уже проскроллили (top < 0)
					// и который ближе всего к верху среди проскролленных
					if (rect.top < 100 && rect.top > maxTop) {
						maxTop = rect.top
						lastPassedId = id
					}
				})

				if (lastPassedId && lastPassedId !== activeId) {
					setActiveId(lastPassedId)
				}
			}
		}, options)

		// Начинаем наблюдение
		elements.forEach(({ element }) => {
			observer.observe(element)
		})

		observerRef.current = observer

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect()
			}
		}
	}, [sectionIds, activeId])

	return activeId
}
