'use client'

import { useRootStore } from '@/state/store'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

const BRAND_CONFIG = {
	evotor: {
		name: 'Evotor',
		displayName: 'Эвотор',
		color: '#f15024',
		gradient: 'from-orange-500 to-red-500',
		lightGradient: 'from-orange-50 to-orange-100'
	},
	pax: {
		name: 'Pax',
		displayName: 'Pax',
		color: '#08a4e1',
		gradient: 'from-blue-500 to-cyan-500',
		lightGradient: 'from-blue-50 to-cyan-100'
	},
	ingenico: {
		name: 'Ingenico',
		displayName: 'Ingenico',
		color: '#41e747',
		gradient: 'from-green-500 to-emerald-500',
		lightGradient: 'from-green-50 to-emerald-100'
	},
	verifone: {
		name: 'VeriFone',
		displayName: 'VeriFone',
		color: '#6effd2',
		gradient: 'from-teal-500 to-green-400',
		lightGradient: 'from-teal-50 to-green-100'
	},
	kozen: {
		name: 'Kozen',
		displayName: 'Kozen',
		color: '#DC2626',
		gradient: 'from-red-600 to-rose-600',
		lightGradient: 'from-red-50 to-rose-100'
	},
	castles: {
		name: 'Castles',
		displayName: 'Castles',
		color: '#704ecc',
		gradient: 'from-purple-600 to-violet-600',
		lightGradient: 'from-purple-50 to-violet-100'
	},
	tactilion: {
		name: 'Tactilion',
		displayName: 'Tactilion',
		color: '#ffd829',
		gradient: 'from-yellow-500 to-amber-500',
		lightGradient: 'from-yellow-50 to-amber-100'
	}
} as const

// Функция для нормализации названия бренда
const normalizeBrandName = (brandName: string): string => {
	const brandMapping: Record<string, string> = {
		эвотор: 'evotor',
		evotor: 'evotor',
		пакс: 'pax',
		pax: 'pax',
		инженико: 'ingenico',
		ingenico: 'ingenico',
		верифон: 'verifone',
		verifone: 'verifone',
		верфоун: 'verifone',
		козен: 'kozen',
		kozen: 'kozen',
		кастлс: 'castles',
		castles: 'castles',
		тактилион: 'tactilion',
		tactilion: 'tactilion'
	}

	const normalized = brandName.toLowerCase().trim()
	return brandMapping[normalized] || normalized
}

// Статическое описание для каждого бренда
const BRAND_DESCRIPTIONS: Record<
	string,
	{ title: string; description: string }
> = {
	evotor: {
		title: 'Эвотор - Российский производитель POS-терминалов',
		description:
			'Эвотор — ведущий российский производитель интеллектуальных POS-терминалов и экосистемы программного обеспечения для торговли. Компания была основана в 2014 году и быстро заняла лидирующие позиции на российском рынке.'
	},
	pax: {
		title: 'Pax - Международный лидер в производстве POS-терминалов',
		description:
			'PAX Technology — международная компания, специализирующаяся на разработке и производстве инновационных решений для электронных платежей. Штаб-квартира расположена в Шэньчжэне, Китай.'
	},
	ingenico: {
		title: 'Ingenico - Мировой лидер в платежных решениях',
		description:
			'Ingenico — французская компания, мировой лидер в области терминальных решений и платежных услуг. Компания предлагает широкий спектр продуктов и услуг для безопасных электронных транзакций.'
	},
	verifone: {
		title: 'VeriFone - Американский производитель платежных систем',
		description:
			'VeriFone — американская компания, один из крупнейших в мире производителей терминалов для электронных платежей и сопутствующих услуг. Основана в 1981 году.'
	},
	kozen: {
		title: 'Kozen - Российские POS-решения для бизнеса',
		description:
			'Kozen — российский производитель POS-терминалов, специализирующийся на создании надежных и современных решений для розничной торговли. Оборудование адаптировано под специфику российского рынка.'
	},
	castles: {
		title: 'Castles - Тайваньский производитель платежного оборудования',
		description:
			'Castles Technology — тайваньская компания, специализирующаяся на разработке и производстве инновационных решений для электронных платежей. Известна своими надежными и производительными терминалами.'
	},
	tactilion: {
		title: 'Tactilion - Мобильные POS-решения',
		description:
			'Tactilion — производитель мобильных POS-терминалов, предлагающий современные решения для безналичных платежей. Специализируется на беспроводных и компактных устройствах.'
	}
}

export default function BrandPage() {
	const params = useParams()
	const router = useRouter()

	const brandSlug = params?.brand as string | undefined

	const devices = useRootStore((state) => state.devices)
	const changeBgHeader = useRootStore((state) => state.changeBgHeader)
	const [isClient, setIsClient] = useState(false)

	const getModelWord = (count: number): string => {
		if (count % 10 === 1 && count % 100 !== 11) {
			return 'модель'
		}
		if (
			count % 10 >= 2 &&
			count % 10 <= 4 &&
			(count % 100 < 10 || count % 100 >= 20)
		) {
			return 'модели'
		}
		return 'моделей'
	}

	useEffect(() => {
		setIsClient(true)
	}, [])

	// Ищем бренд в конфигурации
	const brand = useMemo(() => {
		if (!brandSlug) return null
		return BRAND_CONFIG[brandSlug as keyof typeof BRAND_CONFIG]
	}, [brandSlug])

	useEffect(() => {
		if (!isClient) return

		// Проверяем, что бренд существует и у него есть цвет
		if (brand?.color) {
			changeBgHeader(brand.color)
		} else {
			// Если бренд не найден, устанавливаем цвет по умолчанию
			changeBgHeader('#fafafa')
		}
	}, [brand, changeBgHeader, isClient])

	// Получаем устройства этого бренда (с нормализацией)
	const brandDevices = useMemo(() => {
		if (!brand) return []

		const normalizedBrandName = normalizeBrandName(brand.name)

		return devices.filter((device) => {
			const deviceBrandNormalized = normalizeBrandName(device.brand || '')
			return deviceBrandNormalized === normalizedBrandName
		})
	}, [devices, brand])

	// Получаем другие бренды для рекомендаций
	const otherBrands = useMemo(() => {
		if (!brandSlug) return []

		const allBrands = Object.keys(BRAND_CONFIG)
		const currentBrandIndex = allBrands.indexOf(brandSlug)

		// Берем 3 других бренда
		const otherBrandSlugs = allBrands.filter(
			(slug, index) => index !== currentBrandIndex
		)

		return otherBrandSlugs.map((slug) => ({
			slug,
			...BRAND_CONFIG[slug as keyof typeof BRAND_CONFIG]
		}))
	}, [brandSlug])

	// Получаем статистику по другим брендам
	const brandStats = useMemo(() => {
		const stats: Record<string, { count: number; devices: any[] }> = {}

		devices.forEach((device) => {
			if (!device.brand) return

			const brandSlug = normalizeBrandName(device.brand)
			if (!stats[brandSlug]) {
				stats[brandSlug] = { count: 0, devices: [] }
			}
			stats[brandSlug].count++
			stats[brandSlug].devices.push(device)
		})

		return stats
	}, [devices])

	// Функция для получения URL бренда
	const getBrandUrl = (brandSlugName: string | null) => {
		if (!brandSlugName) return '/'
		return `/devices/${brandSlugName}`
	}

	// Если SSR или загрузка
	if (!isClient || !brandSlug) {
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

	if (!brand) {
		return (
			<div className='min-h-screen bg-white dark:bg-gray-900'>
				<div className='px-4 pt-20 md:pt-8 pb-8 max-w-[1572px] mx-auto'>
					<h1 className='text-2xl font-bold text-red-600'>Бренд не найден</h1>
					<Link href='/' className='text-blue-600 hover:underline'>
						Вернуться на главную
					</Link>
				</div>
			</div>
		)
	}

	const brandDescription = BRAND_DESCRIPTIONS[brandSlug] || {
		title: `${brand.displayName} - POS-терминалы`,
		description: `Полное руководство по POS-терминалам ${brand.displayName}. Инструкции по настройке, прошивке, ремонту и обслуживанию всех моделей.`
	}

	return (
		<div className='w-full mb-32 flex flex-col'>
			{/* Header Section */}
			<div className='flex flex-col items-center'>
				<header
					className='flex items-center justify-center w-screen'
					style={{ backgroundColor: brand.color }}
				>
					<div className='w-full mb-6 px-4 max-w-[1572] flex flex-col items-center gap-6 md:flex-row md:gap-8'>
						{/* Иконка или лого бренда */}
						<div
							className='w-64 h-64 md:min-w-51.5 md:h-80 flex items-center justify-center rounded-2xl'
							style={{
								backgroundColor: 'rgba(255, 255, 255, 0.2)',
								backdropFilter: 'blur(10px)'
							}}
						>
							<h1 className='text-5xl md:text-6xl font-bold text-white'>
								{brand.displayName.charAt(0)}
							</h1>
						</div>
						<div className='flex flex-col gap-6 text-center md:text-left'>
							<h1 className='text-4xl md:text-5xl font-semibold text-white'>
								{brand.displayName}
							</h1>
							<p className='text-xl text-white/90'>
								{brandDescription.description}
							</p>
						</div>
					</div>
				</header>
			</div>

			{/* Main Content */}
			<div className='w-full flex flex-col lg:flex-row'>
				{/* Content Area */}
				<main className='flex-1 max-w-full'>
					{/* Устройства бренда */}

					<div className='px-4 max-w-[1572px]'>
						<h2 className='my-12 text-2xl md:text-3xl font-bold'>
							Модели {brand.displayName}
						</h2>

						{brandDevices.length > 0 ? (
							<div className='flex justify-center gap-6 flex-wrap'>
								{brandDevices.map((device) => {
									const modelSlug = device.model
										.toLowerCase()
										.replace(/\s+/g, '-')
										.replace(/[.,]/g, '')
										.replace('стац', 'stationary')
										.replace('моб', 'mobile')
										.replace('икр', 'ikr')

									return (
										<Link
											key={device.id}
											href={`/devices/${brandSlug}/${modelSlug}`}
											className='relative p-6 min-w-[320px] h-[330px] flex flex-col items-center justify-between flex-1 rounded-xl overflow-hidden transition-all duration-300 ease-in-out sm:h-[480px] sm:min-w-[400px] hover:shadow-lg hover:scale-101'
											style={{ backgroundColor: device.bgColor || brand.color }}
										>
											<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20 dark:bg-gray-800 dark:hover:opacity-40' />
											<h3 className='text-2xl font-semibold self-start z-10'>
												{device.title}
											</h3>
											<p className='text-xl text-center self-center z-10 line-clamp-3'>
												{device.description}
											</p>
											<div className='flex gap-3 flex-wrap self-end justify-end z-10'>
												{device.tags.slice(0, 3).map((tag) => (
													<span
														key={tag}
														className='px-2 py-1 text-sm bg-black/10 rounded-lg'
													>
														{tag}
													</span>
												))}
											</div>
										</Link>
									)
								})}
							</div>
						) : (
							<div className='text-center py-12'>
								<p className='text-xl text-gray-500 dark:text-gray-400'>
									Устройства {brand.displayName} пока не добавлены
								</p>
							</div>
						)}
					</div>
					{/* Рекомендуемые бренды */}
					{otherBrands.length > 0 && (
						<div className='px-4 pb-8 max-w-[1572px]'>
							<h2 className='my-12 text-3xl font-semibold transition-colors duration-300'>
								Другие бренды
							</h2>
							<div className='flex justify-center gap-6 flex-wrap'>
								{otherBrands.map((otherBrand) => {
									const devicesCount = brandStats[otherBrand.slug]?.count || 0

									return (
										<Link
											key={otherBrand.slug}
											href={getBrandUrl(otherBrand.slug)}
											className='relative p-6 min-w-[320px] h-[330px] flex flex-col items-center justify-between flex-1 rounded-xl overflow-hidden transition-all duration-300 ease-in-out sm:h-[480px] sm:min-w-[400px] hover:shadow-lg hover:scale-101'
											style={{ backgroundColor: otherBrand.color }}
										>
											<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20 dark:bg-gray-800 dark:hover:opacity-40' />
											<h3 className='text-2xl font-semibold self-start z-10'>
												{otherBrand.displayName}
											</h3>
											<p className='text-xl text-center self-center z-10 line-clamp-3'>
												{BRAND_DESCRIPTIONS[otherBrand.slug]?.description ||
													'Смотреть все модели'}
											</p>
											<div className='flex gap-3 flex-wrap self-end justify-end z-10'>
												<span className='px-2 py-1 text-sm bg-black/10 rounded-lg'>
													{devicesCount} {getModelWord(devicesCount)}
												</span>
											</div>
										</Link>
									)
								})}
							</div>
						</div>
					)}
					{/* Mobile Footer */}
					<div className='mb-8 px-6 py-8 text-lg border rounded-lg flex items-center justify-center lg:hidden'>
						<div className='flex flex-wrap gap-1 text-gray-600 dark:text-gray-400'>
							<span>Всего моделей:</span>
							<span className='font-semibold'>{brandDevices.length}</span>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
