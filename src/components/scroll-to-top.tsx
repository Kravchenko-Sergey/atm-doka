'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

interface ScrollToTopProps {
	progressColor?: string
	iconColor?: string
}

export function ScrollToTop({
	progressColor = '#3b82f6', // Синий по умолчанию
	iconColor = 'text-gray-700 dark:text-gray-300'
}: ScrollToTopProps) {
	const [isVisible, setIsVisible] = useState(false)
	const [scrollProgress, setScrollProgress] = useState(0)
	const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
	const lastScrollY = useRef(0)
	const animationFrameId = useRef<number | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current)
			}

			animationFrameId.current = requestAnimationFrame(() => {
				const scrolled = window.scrollY
				const maxScroll =
					document.documentElement.scrollHeight - window.innerHeight
				const progress = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0

				// Определяем направление скролла
				if (scrolled > lastScrollY.current) {
					setScrollDirection('down')
				} else if (scrolled < lastScrollY.current) {
					setScrollDirection('up')
				}

				lastScrollY.current = scrolled
				setScrollProgress(progress)
				setIsVisible(scrolled > 400)
			})
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', handleScroll)
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current)
			}
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	if (!isVisible) return null

	// Используем useMemo для стабильных вычислений
	const circleProps = {
		radius: 20,
		circumference: 2 * Math.PI * 20,
		strokeDashoffset:
			2 * Math.PI * 20 - (scrollProgress / 100) * (2 * Math.PI * 20)
	}

	return (
		<button
			onClick={scrollToTop}
			className={`
				fixed right-6 bottom-6 z-50
				w-12 h-12 rounded-full
				bg-white dark:bg-gray-800
				border border-gray-200 dark:border-gray-700
				shadow-lg hover:shadow-xl
				flex items-center justify-center
				transition-all duration-300
				hover:scale-105
				group
				${scrollDirection === 'up' ? 'animate-bounce' : ''}
			`}
			aria-label={`Наверх (${Math.round(scrollProgress)}% прокручено)`}
			style={{
				animationPlayState: scrollDirection === 'up' ? 'running' : 'paused'
			}}
		>
			{/* SVG прогресс */}
			<svg
				className='absolute inset-0 w-full h-full -rotate-90'
				viewBox='0 0 48 48'
			>
				{/* Фоновый круг */}
				<circle
					cx='24'
					cy='24'
					r={circleProps.radius}
					fill='none'
					stroke='#f1f5f9'
					strokeWidth='2'
					className='dark:stroke-gray-700'
				/>
				{/* Прогресс бар - цвет из пропсов */}
				<circle
					cx='24'
					cy='24'
					r={circleProps.radius}
					fill='none'
					stroke={progressColor}
					strokeWidth='2'
					strokeLinecap='round'
					strokeDasharray={circleProps.circumference}
					strokeDashoffset={circleProps.strokeDashoffset}
				/>
			</svg>

			{/* Постоянная иконка */}
			<div className='absolute inset-0 flex items-center justify-center'>
				<ArrowUp size={20} className={iconColor} />
			</div>

			{/* Тултип с процентом */}
			<div
				className='
				absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
				bg-gray-900 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded
				opacity-0 group-hover:opacity-100 transition-opacity duration-200
				whitespace-nowrap pointer-events-none
				shadow-lg
			'
			>
				{Math.round(scrollProgress)}%
				<div className='absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700' />
			</div>
		</button>
	)
}
