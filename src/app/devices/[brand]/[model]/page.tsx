'use client'

import { useRootStore } from '@/state/store'
import { CircleArrowLeft, CircleArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ScrollToTop } from '@/components/scroll-to-top'
import { useActiveSection } from '@/components/use-active-section'
import { Feedback } from '@/components/feedback'

const BRAND_CONFIG = {
	evotor: {
		name: 'Evotor',
		displayName: 'Эвотор',
		color: '#f15024'
	},
	pax: {
		name: 'Pax',
		displayName: 'Pax',
		color: '#08a4e1'
	},
	ingenico: {
		name: 'Ingenico',
		displayName: 'Ingenico',
		color: '#41e747'
	},
	verifone: {
		name: 'VeriFone',
		displayName: 'VeriFone',
		color: '#6effd2'
	},
	kozen: {
		name: 'Kozen',
		displayName: 'Kozen',
		color: '#DC2626'
	},
	castles: {
		name: 'Castles',
		displayName: 'Castles',
		color: '#704ecc'
	},
	tactilion: {
		name: 'Tactilion',
		displayName: 'Tactilion',
		color: '#ffd829'
	}
} as const

const DevicePage = () => {
	const params = useParams()
	const router = useRouter()

	// Получаем параметры из URL
	const brandSlug = params?.brand as string | undefined
	const modelSlug = params?.model as string | undefined

	const devices = useRootStore((state) => state.devices)
	const changeBgHeader = useRootStore((state) => state.changeBgHeader)
	const [sectionIds, setSectionIds] = useState<string[]>([])
	const activeSectionId = useActiveSection(sectionIds)

	const brandInfo = useMemo(() => {
		if (!brandSlug) return null
		return BRAND_CONFIG[brandSlug as keyof typeof BRAND_CONFIG]
	}, [brandSlug])

	// Ищем устройство по бренду и модели
	const device = useMemo(() => {
		if (!brandSlug || !modelSlug) return null

		return devices.find((d) => {
			// Создаем slug из модели устройства для сравнения
			const deviceModelSlug = d.model
				.toLowerCase()
				.replace(/\s+/g, '-')
				.replace(/[.,]/g, '')

			return (
				d.brand?.toLowerCase() === brandSlug && deviceModelSlug === modelSlug
			)
		})
	}, [devices, brandSlug, modelSlug])

	const deviceIndex = useMemo(
		() => devices.findIndex((d) => d.id === device?.id),
		[devices, device?.id]
	)

	const prevDevice = useMemo(
		() => devices[deviceIndex - 1] ?? null,
		[devices, deviceIndex]
	)

	const nextDevice = useMemo(
		() => devices[deviceIndex + 1] ?? null,
		[devices, deviceIndex]
	)

	const randomDevices = useMemo(
		() =>
			[...devices]
				.filter((d) => d.id !== device?.id)
				.sort(() => Math.random() - 0.5)
				.slice(0, 3),
		[devices, device?.id]
	)

	const getAllSectionIds = () => {
		if (!device?.contentItems) return []

		const ids: string[] = []
		device.contentItems.forEach((item, itemIndex) => {
			ids.push(`${itemIndex + 1}`)

			if (item.children) {
				item.children.forEach((_, childIndex) => {
					ids.push(`${itemIndex + 1}.${childIndex + 1}`)
				})
			}
		})

		ids.push(String(device.contentItems.length))

		return ids
	}

	useEffect(() => {
		const ids = getAllSectionIds()
		setSectionIds(ids)
	}, [device])

	useEffect(() => {
		if (!device && brandSlug && modelSlug) {
			// Если устройство не найдено, перенаправляем на страницу бренда
			router.push(`/devices/${brandSlug}`)
			return
		}

		if (device?.bgColor) {
			changeBgHeader(device.bgColor)
		}
	}, [device, changeBgHeader, router, brandSlug, modelSlug])

	const isSectionActive = (sectionId: string) => {
		return activeSectionId === sectionId
	}

	const getActiveStyles = (sectionId: string) => {
		if (isSectionActive(sectionId)) {
			return { color: device?.bgColor }
		}
		return {}
	}

	// Функция для получения URL устройства
	const getDeviceUrl = (deviceItem: any) => {
		if (!deviceItem) return '/'

		const brandSlug = deviceItem.brand?.toLowerCase() || 'unknown'
		const modelSlug = deviceItem.model
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[.,]/g, '')
			.replace('стац', 'stationary')
			.replace('моб', 'mobile')
			.replace('икр', 'ikr')

		return `/devices/${brandSlug}/${modelSlug}`
	}

	// Функция для получения URL для навигации назад
	const getBrandUrl = () => {
		if (!brandSlug) return '/'
		return `/devices/${brandSlug}`
	}

	const Content = device?.content

	// Если SSR или загрузка
	if (!brandSlug || !modelSlug) {
		return (
			<div className='min-h-screen bg-white dark:bg-gray-900'>
				<div className='p-8'>
					<div className='animate-pulse'>
						<div className='h-8 bg-gray-200 rounded w-1/4 mb-4'></div>
						<div className='h-4 bg-gray-200 rounded w-1/2'></div>
					</div>
				</div>
			</div>
		)
	}

	if (!device) {
		return <div></div>
	}

	return (
		<div className='w-full flex flex-col'>
			{/* Header Section */}
			<div className='flex flex-col items-center'>
				<header
					className='flex items-center justify-center w-screen'
					style={{ backgroundColor: device.bgColor }}
				>
					<div className='w-full mt-20 md:mt-0 mb-6 px-4 max-w-[1570px] flex flex-col items-center gap-6 md:flex-row md:gap-8'>
						{/* Изображение устройства */}
						<div className='w-50 h-64 md:min-w-51.5 md:h-80 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm'>
							<Image
								src={device.image}
								width={206}
								height={256}
								priority
								alt={device.title}
							/>
						</div>

						<div className='h-full flex flex-col gap-24 text-center md:text-left'>
							<div className='pt-16 flex flex-col gap-6'>
								<h1 className='text-4xl md:text-5xl font-semibold'>
									{device.title}
								</h1>
								<p className='text-xl'>{device.description}</p>
							</div>

							{/* Хлебные крошки */}
							<nav className='flex items-center gap-2 text-sm mt-4 '>
								<Link
									href='/'
									className='flex items-center gap-1 hover:text-white transition-colors'
								>
									<span>Главная</span>
								</Link>
								<ChevronRight size={16} />
								<Link
									href={`/devices/${brandSlug}`}
									className='flex items-center gap-1 hover:text-white transition-colors'
								>
									<span>{brandInfo?.displayName || device.brand}</span>
								</Link>
								<ChevronRight size={16} />
								<span className='font-medium'>{device.title}</span>
							</nav>
						</div>
					</div>
				</header>

				{/* Mobile Table of Contents */}
				<Accordion
					type='single'
					collapsible
					className='w-full border-b border-gray-200 dark:border-gray-700 block lg:hidden'
				>
					<AccordionItem value='table-of-contents'>
						<AccordionTrigger className='text-xl font-normal px-4 hover:no-underline'>
							Содержание
						</AccordionTrigger>
						<AccordionContent>
							<nav className='flex flex-col p-4'>
								{device.contentItems.map((item, itemIndex) => (
									<div key={`nav-${itemIndex}`} className='mb-3'>
										<a
											href={`#${itemIndex + 1}`}
											className='min-w-[140px] text-lg hover:underline transition-colors'
										>
											{item.title}
										</a>
										{item.children && (
											<div className='pl-6 flex flex-col mt-2 space-y-2'>
												{item.children.map((child, childIndex) => (
													<a
														key={childIndex}
														href={`#${itemIndex + 1}.${childIndex + 1}`}
														className='min-w-[140px] text-lg hover:underline transition-colors text-gray-600 dark:text-gray-400'
													>
														{child}
													</a>
												))}
											</div>
										)}
									</div>
								))}
							</nav>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>

			{/* Main Content */}
			<div className='flex flex-col lg:flex-row'>
				{/* Desktop Sidebar */}
				<aside className='hidden lg:flex flex-col min-w-[280px] bg-[#fafafa] dark:bg-[#292a2e]'>
					<div className='p-6 sticky top-[102px]'>
						<ScrollArea className='h-[calc(100vh-200px)]'>
							<nav className='space-y-4'>
								{device.contentItems.map((item, itemIndex) => (
									<div key={itemIndex} className='mb-2'>
										<a
											href={`#${itemIndex + 1}`}
											className={`block min-w-[140px] text-md hover:underline transition-colors font-medium pl-6 relative ${isSectionActive(`${itemIndex + 1}`) ? 'font-semibold' : ''}`}
											style={getActiveStyles(`${itemIndex + 1}`)}
										>
											{isSectionActive(`${itemIndex + 1}`) && (
												<div
													className='absolute left-0 top-1 bottom-1 w-1.5 rounded-full'
													style={{
														backgroundColor: device.bgColor,
														transition: 'background-color 0.3s ease'
													}}
												/>
											)}
											{item.title}
										</a>
										{item.children && (
											<div className='pl-6 flex flex-col mt-2 space-y-2'>
												{item.children.map((child, childIndex) => (
													<a
														key={childIndex}
														href={`#${itemIndex + 1}.${childIndex + 1}`}
														className={`block min-w-[140px] text-md hover:underline transition-colors text-gray-600 dark:text-gray-400 pl-6 relative ${isSectionActive(`${itemIndex + 1}.${childIndex + 1}`) ? 'font-medium' : ''}`}
														style={getActiveStyles(
															`${itemIndex + 1}.${childIndex + 1}`
														)}
													>
														{isSectionActive(
															`${itemIndex + 1}.${childIndex + 1}`
														) && (
															<div
																className='absolute left-0 top-1 bottom-1 w-1.5 rounded-full'
																style={{
																	backgroundColor: device.bgColor,
																	transition: 'background-color 0.3s ease'
																}}
															/>
														)}
														{child}
													</a>
												))}
											</div>
										)}
									</div>
								))}
							</nav>
						</ScrollArea>
					</div>

					<footer
						className='p-6 mt-auto bg-[#fafafa] dark:bg-[#292a2e] sticky bottom-0'
						aria-label='Информация об обновлении'
					>
						<div className='flex flex-wrap gap-1 text-sm text-gray-600 dark:text-gray-400'>
							<span>Обновлено</span>
							<time dateTime={device.updatedAt}>{device.updatedAt}</time>
						</div>
					</footer>
				</aside>

				{/* Content Area */}
				<main className='flex-1 max-w-full lg:max-w-[calc(100%-280px)]'>
					<div className='px-4 max-w-[1308px] mx-auto'>
						{Content ? (
							<Content />
						) : (
							<div className='text-center py-12 text-xl'>
								Контент недоступен
							</div>
						)}
					</div>

					{/*Feedback*/}
					<div className='mt-16 px-4 max-w-[1308px] mx-auto'>
						<Feedback
							postId={device.id}
							discussionId={device.discussionId}
							color={device.bgColor}
						/>
					</div>

					{/* Related Posts */}
					<div className='px-4 max-w-[1308px] mx-auto'>
						<h2 className='my-12 text-3xl font-semibold transition-colors duration-300'>
							Читайте также
						</h2>
						<div className='flex gap-6 flex-wrap'>
							{randomDevices.map((relatedDevice) => (
								<Link
									href={getDeviceUrl(relatedDevice)}
									key={relatedDevice.id}
									className={`relative p-6 h-[380px] flex flex-col items-center justify-between rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-101 flex-1 min-w-[280px] ${'max-w-full'}`}
									style={{ backgroundColor: relatedDevice.bgColor }}
								>
									<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-20 dark:bg-gray-800 dark:hover:opacity-40' />
									<h3 className='text-xl font-semibold self-start z-10 line-clamp-2'>
										{relatedDevice.title}
									</h3>
									<p className='text-lg text-center self-center z-10 line-clamp-3'>
										{relatedDevice.description}
									</p>
									<ul className='flex gap-1 flex-wrap self-end justify-end z-10'>
										{relatedDevice.tags.map((tag) => (
											<li
												key={tag}
												className='px-3 py-1 text-sm bg-black/10 rounded-md backdrop-blur-sm'
											>
												{tag}
											</li>
										))}
									</ul>
								</Link>
							))}
						</div>

						{/* Navigation */}
						<div className='my-12 flex flex-col gap-6 md:flex-row justify-between items-center'>
							{prevDevice && (
								<Link
									href={getDeviceUrl(prevDevice)}
									className='flex items-center gap-3 text-lg hover:underline transition-all hover:scale-101 group mr-auto'
								>
									<CircleArrowLeft className='transition-transform group-hover:-translate-x-1' />
									<span className='max-w-[200px] line-clamp-2 md:max-w-[300px]'>
										{prevDevice.title}
									</span>
								</Link>
							)}

							{nextDevice && (
								<Link
									href={getDeviceUrl(nextDevice)}
									className='flex items-center gap-3 text-lg hover:underline transition-all hover:scale-101 group ml-auto'
								>
									<span className='max-w-[200px] line-clamp-2 md:max-w-[300px] text-right'>
										{nextDevice.title}
									</span>
									<CircleArrowRight className='transition-transform group-hover:translate-x-1' />
								</Link>
							)}
						</div>

						<ScrollToTop
							progressColor={device.bgColor}
							iconColor={device.bgColor}
						/>

						{/* Mobile Footer */}
						<div className='mb-8 px-6 py-8 text-lg border rounded-lg flex items-center justify-center lg:hidden'>
							<div className='flex flex-wrap gap-1 text-gray-600 dark:text-gray-400'>
								<span>Обновлено</span>
								<time dateTime={device.updatedAt}>{device.updatedAt}</time>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default DevicePage
