'use client'

import { useRootStore } from '@/state/store'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { ChevronRight, Download } from 'lucide-react'

const BRAND_CONFIG = {
	evotor: {
		name: 'Evotor',
		displayName: 'Эвотор',
		color: '#f15024',
		gradient: 'from-orange-500 to-red-500',
		lightGradient: 'from-orange-50 to-orange-100',
		firmwares: [
			{
				model: 'Эвотор 5i',
				version: '4.9.11',
				url: 'https://evoservice.center/upload/iblock/2c2/81jjeqjozr2tvc2giymyttknr6n1fyy3/evotor_st3si_4.9.11.20241107143357.77e95644_5380_4bf8_80f6_8161b24fa612.aef'
			},
			{
				model: 'Эвотор 7.2',
				version: '4.9.11',
				url: 'https://evoservice.center/upload/iblock/bc0/2bbmp0jvgiwqp6yefzve38adzenwzg7j/evotor_st2_4.9.11.20241107143140.b24b2d50_6245_4b18_87b8_115bd9c62d84.aef'
			},
			{
				model: 'Эвотор 7.3',
				version: '4.9.11',
				url: 'https://evoservice.center/upload/iblock/c6e/ch46qjmajbpheq2dz7u8afl8m1p94twh/evotor_st3_4.9.11.20241107143150.73ea5ec7_8738_4a94_829a_5d2e52dc1ca9.aef'
			},
			{
				model: 'Эвотор 10',
				version: '4.9.11',
				url: 'https://evoservice.center/upload/iblock/917/7032gor2oiwtw4t0cw6mszj0zui6cx49/evotor_st3xl_4.9.11.20241107143322.6c56f433_f0af_4a68_9e06_2c5f7b852e94.aef'
			},
			{
				model: 'Эвотор 6',
				version: '6.0.16',
				url: 'https://drive.google.com/uc?export=download&id=1f0PLsnjJLSsyf8BjNS7pERTeJYn48JLp'
			}
		],
		drivers: [],
		soft: []
	},
	pax: {
		name: 'Pax',
		displayName: 'Pax',
		color: '#08a4e1',
		gradient: 'from-blue-500 to-cyan-500',
		lightGradient: 'from-blue-50 to-cyan-100',
		firmwares: [
			{
				model: '',
				version: '!SB_S80_33.33',
				url: 'https://disk.yandex.ru/d/1Ei0svpswKnAOQ'
			},
			{
				model: '',
				version: '!SB_S90C_33.33',
				url: 'https://disk.yandex.ru/d/GQPfUmSopiLFyA'
			},
			{
				model: '',
				version: '!SB_SP30_33.33',
				url: 'https://disk.yandex.ru/d/4fC0Y01j_Gu1-A'
			},
			{
				model: '',
				version: '33.33_PAX_Prolin_Bat',
				url: 'https://disk.yandex.ru/d/jt5WS_fWPZHaUg'
			}
		],
		drivers: [
			{
				title: 'PaxUSBDriver_2.28',
				url: 'https://disk.yandex.ru/d/0XtlL9aZeqnAHA'
			}
		],
		soft: []
	},
	ingenico: {
		name: 'Ingenico',
		displayName: 'Ingenico',
		color: '#41e747',
		gradient: 'from-green-500 to-emerald-500',
		lightGradient: 'from-green-50 to-emerald-100',
		firmwares: [
			{
				model: '',
				version: 'telium',
				url: 'https://disk.yandex.ru/d/-L6rGWh_bGYcog'
			}
		],
		drivers: [],
		soft: [{ title: 'LLT', url: 'https://disk.yandex.ru/d/BbiiXdxjEfw_PA' }]
	},
	verifone: {
		name: 'VeriFone',
		displayName: 'VeriFone',
		color: '#6effd2',
		gradient: 'from-teal-500 to-green-400',
		lightGradient: 'from-teal-50 to-green-100',
		firmwares: [
			{
				model: 'VX520',
				version: 'verifone',
				url: 'https://disk.yandex.ru/d/Ym5ZizF5xbCEHQ'
			},
			{
				model: 'VX820',
				version: 'vx820-33.33.07',
				url: 'https://disk.yandex.ru/d/XjC6g_QSFhr6Jw'
			}
		],
		drivers: [],
		soft: []
	},
	kozen: {
		name: 'Kozen',
		displayName: 'Kozen',
		color: '#DC2626',
		gradient: 'from-red-600 to-rose-600',
		lightGradient: 'from-red-50 to-rose-100',
		firmwares: [
			{
				model: 'Kozen P10',
				version: '1.5.24',
				url: 'https://drive.google.com/uc?export=download&id=1MpQ1YbGuHUT9na83AT5qO6h6hvL-1-dw'
			},
			{
				model: 'Kozen P12',
				version: '1.4.5',
				url: 'https://drive.google.com/uc?export=download&id=1vdlPr4kLPkLk7Jg3EbBnmJ-DhHh1pNZ7'
			}
		],
		drivers: [
			{
				title: 'Драйверы для Kozen P12',
				url: 'https://disk.yandex.ru/d/b-x-jmu7iA3swg'
			}
		],
		soft: [
			{ title: 'Flash Tool', url: 'https://disk.yandex.ru/d/rd08ougjIKg4Lg' },
			{ title: 'SN Writter', url: 'https://disk.yandex.ru/d/jWk5EXCjMpsN8g' }
		]
	},
	castles: {
		name: 'Castles',
		displayName: 'Castles',
		color: '#704ecc',
		gradient: 'from-purple-600 to-violet-600',
		lightGradient: 'from-purple-50 to-violet-100',
		firmwares: [
			{
				model: '',
				version: 'vxupdate',
				url: 'https://disk.yandex.ru/d/MS548Ff0grXoUw'
			}
		],
		drivers: [],
		soft: []
	},
	tactilion: {
		name: 'Tactilion',
		displayName: 'Tactilion',
		color: '#ffd829',
		gradient: 'from-yellow-500 to-amber-500',
		lightGradient: 'from-yellow-50 to-amber-100',
		firmwares: [
			{
				model: '',
				version: 'T2',
				url: 'https://disk.yandex.ru/d/wlh2zYSls2s77g'
			},
			{
				model: '',
				version: 'G3',
				url: 'https://disk.yandex.ru/d/Zo_BfaeJxsk8oA'
			}
		],
		drivers: [],
		soft: [
			{
				title: 'Nexgo TMU Tools',
				url: 'https://disk.yandex.ru/d/ntxPwIVh8dASHg'
			}
		]
	}
} as const

// Функция для создания slug из названия модели
const createModelSlug = (modelName: string): string => {
	return modelName
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[.,]/g, '')
		.replace(/[^a-z0-9-]/g, '')
}

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
		title: 'Эвотор',
		description:
			'Ведущий российский производитель интеллектуальных POS-терминалов и экосистемы программного обеспечения для торговли. Компания была основана в 2014 году, быстро заняла лидирующие позиции на российском рынке. Специализируется на создании смарт-терминалов для автоматизации малого и среднего бизнеса, предлагая комплексные решения для розничной торговли, общественного питания и сферы услуг'
	},
	pax: {
		title: 'Pax',
		description:
			'Международная компания PAX Technology (PAX Global Technology) — мировой лидер в производстве инновационных решений для электронных платежей. Основана в 2000 году, штаб-квартира расположена в Шэньчжэне, Китай. Производит широкий спектр POS-терминалов, включая стационарные, мобильные и беспроводные модели, поставляя оборудование в более чем 120 стран мира'
	},
	ingenico: {
		title: 'Ingenico',
		description:
			'Французская компания, один из мировых лидеров в области терминальных решений и платежных услуг. Основана в 1980 году, имеет представительства в более чем 170 странах. Компания предлагает полный спектр продуктов и услуг для безопасных электронных транзакций, включая POS-терминалы, решения для электронной коммерции и мобильных платежей'
	},
	verifone: {
		title: 'VeriFone',
		description:
			'Американская компания (ныне часть индийской группы Catalyst), один из крупнейших в мире производителей терминалов для электронных платежей. Основана в 1981 году. Специализируется на разработке и производстве безопасных платежных решений для розничной торговли, финансовых учреждений и поставщиков услуг по всему миру'
	},
	kozen: {
		title: 'Kozen',
		description:
			'Российский производитель POS-терминалов, основанный в 2016 году. Специализируется на создании надежных и современных решений для розничной торговли, адаптированных под специфику российского рынка. Компания предлагает как стационарные, так и мобильные терминалы, ориентированные на потребности малого и среднего бизнеса в России и странах СНГ'
	},
	castles: {
		title: 'Castles',
		description:
			'Тайваньская компания Castles Technology, основанная в 1996 году. Специализируется на разработке и производстве инновационных решений для электронных платежей. Известна своими надежными и производительными терминалами, которые используются по всему миру. Компания имеет сертификаты безопасности PCI, EMV и других международных стандартов'
	},
	tactilion: {
		title: 'Tactilion',
		description:
			'Производитель мобильных POS-терминалов, предлагающий современные решения для безналичных платежей. Специализируется на создании компактных, беспроводных устройств для мобильной торговли. Продукция компании ориентирована на курьеров, торговых представителей, водителей такси и другие профессии, требующие мобильных платежных решений'
	}
}

export default function BrandPage() {
	const params = useParams()

	const brandSlug = params?.brand as string | undefined

	const devices = useRootStore((state) => state.devices)
	const changeBgHeader = useRootStore((state) => state.changeBgHeader)

	// Ищем бренд в конфигурации
	const brand = useMemo(() => {
		if (!brandSlug) return null
		return BRAND_CONFIG[brandSlug as keyof typeof BRAND_CONFIG]
	}, [brandSlug])

	useEffect(() => {
		// Проверяем, что бренд существует и у него есть цвет
		if (brand?.color) {
			changeBgHeader(brand.color)
		} else {
			// Если бренд не найден, устанавливаем цвет по умолчанию
			changeBgHeader('#fafafa')
		}
	}, [brand, changeBgHeader])

	// Получаем устройства этого бренда (с нормализацией)
	const brandDevices = useMemo(() => {
		if (!brand) return []

		const normalizedBrandName = normalizeBrandName(brand.name)

		return devices.filter((device) => {
			const deviceBrandNormalized = normalizeBrandName(device.brand || '')
			return deviceBrandNormalized === normalizedBrandName
		})
	}, [devices, brand])

	const brandDescription = BRAND_DESCRIPTIONS[brandSlug || ''] || {
		title: `${brand?.displayName} - POS-терминалы`,
		description: `Полное руководство по POS-терминалам ${brand?.displayName}. Инструкции по настройке, прошивке, ремонту и обслуживанию всех моделей.`
	}

	const hasFirmware = brand?.firmwares && brand.firmwares.length > 0
	const hasDrivers = brand?.drivers && brand.drivers.length > 0
	const hasSoft = brand?.soft && brand.soft.length > 0

	return (
		<div className='w-full flex flex-1 flex-col'>
			{/* Header Section */}
			<div className='flex flex-col items-center'>
				<header
					className='flex items-center justify-center w-screen'
					style={{ backgroundColor: brand?.color }}
				>
					<div className='w-full mt-20 md:mt-0 mb-6 px-4 max-w-[1572] flex flex-col items-center gap-6 md:flex-row md:gap-8'>
						{/* Иконка или лого бренда */}
						<div className='w-64 h-64 md:min-w-51.5 md:h-80 flex items-center justify-center rounded-sm bg-white/10 backdrop-blur-sm'>
							<h1 className='text-5xl md:text-6xl font-bold'>
								{brand?.displayName.charAt(0)}
							</h1>
						</div>
						<div className='h-full flex flex-col gap-24 text-center md:text-left'>
							<div className='pt-16 flex flex-col gap-6'>
								<h1 className='text-4xl md:text-5xl font-semibold'>
									{brand?.displayName}
								</h1>
								<p className='text-xl'>{brandDescription.description}</p>
							</div>

							{/* Хлебные крошки */}
							<nav className='flex items-center gap-2 text-sm mt-4'>
								<Link
									href='/'
									className='flex items-center gap-1 transition-colors'
								>
									<span>Главная</span>
								</Link>
								<ChevronRight size={16} />
								<span className='font-medium'>{brand?.displayName}</span>
							</nav>
						</div>
					</div>
				</header>
			</div>

			{/* Main Content */}
			<div className='w-full flex flex-col lg:flex-row'>
				{/* Content Area */}
				<main className='flex-1 max-w-full'>
					{/* Устройства бренда - СПИСОК как на главной */}
					<div className='px-4 md:mt-6 md:mb-8 pt-6 md:pt-8 max-w-[1572px]'>
						{brandDevices.length > 0 ? (
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 md:mb-12'>
								{/* Колонка 1: Модели */}
								<div className='w-full'>
									<div className='space-y-2 md:space-y-3'>
										<h2 className='mb-8 md:mb-10 text-2xl md:text-3xl font-bold'>
											Модели
										</h2>
										{brandDevices.map((device) => {
											const modelSlug = createModelSlug(device.model)
											return (
												<div key={device.id} className='py-1'>
													<Link
														href={`/devices/${brandSlug}/${modelSlug}`}
														className='text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 
                dark:hover:text-blue-400 hover:underline transition-colors whitespace-nowrap flex items-center gap-2'
													>
														<span
															className='w-2 h-2 rounded-full'
															style={{ backgroundColor: brand?.color }}
														/>
														{device.title}
													</Link>
												</div>
											)
										})}
									</div>
								</div>

								{/* Колонка 2: Прошивки */}
								{hasFirmware && (
									<div className='w-full'>
										<div className='space-y-2 md:space-y-3'>
											<h2 className='mb-8 md:mb-10 text-2xl md:text-3xl font-bold'>
												Прошивки
											</h2>
											{brand.firmwares.map((firmware) => {
												return (
													<div key={firmware.url} className='py-1'>
														<a
															href={firmware.url}
															target='_blank'
															rel='noopener noreferrer'
															className='text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 
                  dark:hover:text-blue-400 hover:underline transition-colors whitespace-nowrap flex items-center gap-2'
														>
															<Download className='w-4 h-4' />
															{firmware.version}{' '}
															{firmware.model ? `(${firmware.model})` : ''}
														</a>
													</div>
												)
											})}
										</div>
									</div>
								)}

								{/* Колонка 3: Драйверы */}
								{hasDrivers && (
									<div className='w-full'>
										<div className='space-y-2 md:space-y-3'>
											<h2 className='mb-8 md:mb-10 text-2xl md:text-3xl font-bold'>
												Драйверы
											</h2>
											{brand.drivers.map((driver, index) => (
												<div key={index} className='py-1'>
													<a
														href={driver.url}
														target='_blank'
														rel='noopener noreferrer'
														className='text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 
                  dark:hover:text-blue-400 hover:underline transition-colors whitespace-nowrap flex items-center gap-2'
													>
														<Download className='w-4 h-4' />
														{driver.title}
													</a>
												</div>
											))}
										</div>
									</div>
								)}

								{/* Колонка 4: Софт */}
								{hasSoft && (
									<div className='w-full'>
										<div className='space-y-2 md:space-y-3'>
											<h2 className='mb-8 md:mb-10 text-2xl md:text-3xl font-bold'>
												Софт
											</h2>
											{brand.soft.map((item, index) => (
												<div key={index} className='py-1'>
													<a
														href={item.url}
														target='_blank'
														rel='noopener noreferrer'
														className='text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 
                  dark:hover:text-blue-400 hover:underline transition-colors whitespace-nowrap flex items-center gap-2'
													>
														<Download className='w-4 h-4' />
														{item.title}
													</a>
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						) : (
							<div className='text-center py-12'>
								<p className='text-xl text-gray-500 dark:text-gray-400'>
									Устройства {brand?.displayName} пока не добавлены
								</p>
							</div>
						)}
					</div>
				</main>
			</div>
		</div>
	)
}
