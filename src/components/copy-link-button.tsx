// components/copy-link-button.tsx
'use client'

import { Link as LinkIcon } from 'lucide-react'
import { toast } from 'sonner'
import { useState, useEffect } from 'react'

interface CopyLinkButtonProps {
	index: string
	color?: string
	className?: string
}

export function CopyLinkButton({
	index,
	color = '#3b82f6',
	className = ''
}: CopyLinkButtonProps) {
	const [isCopied, setIsCopied] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	// Определяем мобильное устройство
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768) // 768px - стандартный breakpoint для md в Tailwind
		}

		checkMobile()
		window.addEventListener('resize', checkMobile)

		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	const copyLink = async (e: React.MouseEvent) => {
		e.stopPropagation()
		e.preventDefault()

		const currentPath = window.location.pathname
		const url = `${window.location.origin}${currentPath}#${index}`

		try {
			await navigator.clipboard.writeText(url)

			setIsCopied(true)
			setTimeout(() => setIsCopied(false), 300)

			toast.custom(
				(t) => (
					<div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4'>
						<div className='flex items-center gap-2'>
							<div className='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center'>
								<svg
									className='w-4 h-4 text-green-600 dark:text-green-400'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M5 13l4 4L19 7'
									></path>
								</svg>
							</div>
							<p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
								Ссылка скопирована в буфер обмена
							</p>
						</div>
					</div>
				),
				{
					position: isMobile ? 'top-center' : 'bottom-right',
					duration: 2000
				}
			)
		} catch {
			toast.custom(
				(t) => (
					<div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4'>
						<div className='flex items-center gap-2'>
							<div className='flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center'>
								<svg
									className='w-4 h-4 text-red-600 dark:text-red-400'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M6 18L18 6M6 6l12 12'
									></path>
								</svg>
							</div>
							<p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
								Ошибка копирования
							</p>
						</div>
					</div>
				),
				{
					position: isMobile ? 'top-center' : 'bottom-right',
					duration: 2000
				}
			)
		}
	}

	return (
		<button
			onClick={copyLink}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onFocus={() => setIsHovered(true)}
			onBlur={() => setIsHovered(false)}
			className={`${className} transition-opacity duration-200 ${
				isMobile
					? 'opacity-100' // На мобилках всегда видно
					: isHovered
						? 'opacity-100' // На десктопе при наведении
						: 'opacity-0' // На десктопе без наведения
			}`}
			aria-label='Копировать ссылку на этот раздел'
		>
			<LinkIcon
				className='h-4 w-4 transition-colors duration-200'
				style={{
					color: isCopied ? color : '#6b7280'
				}}
			/>
		</button>
	)
}
