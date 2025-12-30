// hooks/useActiveSection.ts
import { useState, useEffect } from 'react'

export const useActiveSection = (sectionIds: string[]) => {
	const [activeId, setActiveId] = useState<string>('')

	useEffect(() => {
		if (sectionIds.length === 0) return

		const handleScroll = () => {
			let currentActive = ''
			let smallestPositiveDistance = Infinity
			let highestNegativeElement = { id: '', distance: -Infinity }

			sectionIds.forEach((id) => {
				const element = document.getElementById(id)
				if (element) {
					const rect = element.getBoundingClientRect()
					const elementTop = rect.top
					const elementHeight = rect.height
					const viewportHeight = window.innerHeight

					// Расстояние от верха элемента до контрольной точки (150px от верха viewport)
					const distance = elementTop - 150

					// Элемент виден в viewport (или почти виден)
					if (
						elementTop <= viewportHeight * 0.7 &&
						elementTop >= -elementHeight * 0.3
					) {
						// Если элемент выше контрольной точки (distance < 0)
						if (distance < 0) {
							// Ищем элемент, который максимально пересек контрольную точку
							if (distance > highestNegativeElement.distance) {
								highestNegativeElement = { id, distance }
							}
						}
						// Если элемент ниже контрольной точки (distance >= 0)
						else {
							// Ищем самый близкий элемент к контрольной точке
							if (distance < smallestPositiveDistance) {
								smallestPositiveDistance = distance
								currentActive = id
							}
						}
					}
				}
			})

			// Приоритет отдаем элементу, который пересек контрольную точку
			if (highestNegativeElement.id) {
				currentActive = highestNegativeElement.id
			}

			// Если не нашли ни одного подходящего элемента,
			// выбираем последний элемент, который уже проскроллили
			if (!currentActive) {
				sectionIds.forEach((id) => {
					const element = document.getElementById(id)
					if (element) {
						const rect = element.getBoundingClientRect()
						// Если элемент уже полностью вышел за верх viewport
						if (rect.bottom < 0) {
							currentActive = id
						}
					}
				})
			}

			// Если все еще не нашли, берем первый элемент
			if (!currentActive && sectionIds.length > 0) {
				currentActive = sectionIds[0]
			}

			if (currentActive && currentActive !== activeId) {
				setActiveId(currentActive)
			}
		}

		// Добавляем обработчик
		let ticking = false
		const onScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll()
					ticking = false
				})
				ticking = true
			}
		}

		window.addEventListener('scroll', onScroll)
		handleScroll() // Проверяем начальное состояние

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [sectionIds, activeId])

	return activeId
}
