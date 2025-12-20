'use client'

import { Button } from '@/components/ui/button'
import { Device as DeviceType, useRootStore } from '@/state/store'
import { Send, Users } from 'lucide-react'
import { useEffect, useState, useMemo, useCallback } from 'react'
import Link from 'next/link'

// Простая структура: бренд -> модели
const brandModels = [
	{
		brand: 'Evotor',
		displayBrand: 'Эвотор',
		color: '#f15024',
		models: [
			{ name: '5i', url: 'evotor5i' },
			{ name: '6', url: 'evotor6' },
			{ name: '7.2', url: 'evotor72' },
			{ name: '7.3', url: 'evotor73' },
			{ name: '10', url: 'evotor10' }
		]
	},
	{
		brand: 'Pax',
		displayBrand: 'Pax',
		color: '#08a4e1',
		models: [
			{ name: 'S80', url: 'pax-s80' },
			{ name: 'S90', url: 'pax-s90' },
			{ name: 'S200', url: 'pax-s200' },
			{ name: 'S300', url: 'pax-s300' },
			{ name: 'SP30', url: 'pax-sp30' },
			{ name: 'Q25', url: 'pax-q25' },
			{ name: 'D230', url: 'pax-d230' },
			{ name: 'D230 mob', url: 'pax-d230-mob' }
		]
	},
	{
		brand: 'Ingenico',
		displayBrand: 'Ingenico',
		color: '#41e747',
		models: [
			{ name: 'ICT220-ICT250', url: 'ingenico-ict220-ict250' },
			{ name: 'IPP320-IPP350', url: 'ingenico-ipp320-ipp350' },
			{ name: 'IWL220-IWL250', url: 'ingenico-iwl220-iwl250' }
		]
	},
	{
		brand: 'VeriFone',
		displayBrand: 'VeriFone',
		color: '#6effd2',
		models: [
			{ name: 'VX520', url: 'verifone-vx520' },
			{ name: 'VX820', url: 'verifone-vx820' }
		]
	},
	{
		brand: 'Kozen',
		displayBrand: 'Kozen',
		color: '#DC2626',
		models: [
			{ name: 'P10', url: 'kozen-p10' },
			{ name: 'P12', url: 'kozen-p12' }
		]
	},
	{
		brand: 'Castles',
		displayBrand: 'Castles',
		color: '#704ecc',
		models: [
			{ name: 'Vega3000 стац', url: 'castles-vega3000' },
			{ name: 'Vega3000 моб', url: 'castles-vega3000-mob' },
			{ name: 'Vega3000 ИКР', url: 'castles-vega3000-ikr' }
		]
	},
	{
		brand: 'Tactilion',
		displayBrand: 'Tactilion',
		color: '#ffd829',
		models: [
			{ name: 'T2', url: 'tactilion-t2' },
			{ name: 'G3', url: 'tactilion-g3' }
		]
	}
]

// Функция для создания slug из названия модели
const createModelSlug = (modelName: string): string => {
	return modelName
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[.,]/g, '')
		.replace('стац', 'stationary')
		.replace('моб', 'mobile')
		.replace('икр', 'ikr')
		.replace(/[^a-z0-9-]/g, '')
}

// Функция для получения URL устройства
const getDeviceUrl = (device: DeviceType): string => {
	if (!device.brand || !device.model) {
		// Если нет бренда или модели, используем старый URL
		return `/devices/${device.url}`
	}

	const brandSlug = device.brand.toLowerCase()
	const modelSlug = createModelSlug(device.model)

	return `/devices/${brandSlug}/${modelSlug}`
}

// Извлекаем только бренды для верхней навигации
const BRAND_NAVIGATION = brandModels.map((brand) => ({
	title: brand.displayBrand,
	url: `/devices/${brand.brand.toLowerCase()}`,
	color: brand.color
}))

export default function HomeClient() {
	const devicesList = useRootStore((state) => state.devices)
	const changeBgHeader = useRootStore((state) => state.changeBgHeader)
	const activeDevices = useRootStore((state) => state.activeTags)
	const toggleDevice = useRootStore((state) => state.toggleTag)

	const [sortedDevices, setSortedDevices] = useState<DeviceType[]>([])
	const [visibleCount, setVisibleCount] = useState(6)

	const toggleActive = useCallback(
		(title: string) => {
			toggleDevice(title)
		},
		[toggleDevice]
	)

	const filteredDevices = useMemo(() => {
		if (activeDevices.length === 0) return sortedDevices

		return sortedDevices.filter((deviceItem) =>
			activeDevices.some((activeDevice) =>
				deviceItem.tags.includes(activeDevice)
			)
		)
	}, [sortedDevices, activeDevices])

	const displayedDevices = useMemo(
		() => filteredDevices.slice(0, visibleCount),
		[filteredDevices, visibleCount]
	)

	const handleLoadMore = useCallback(() => {
		setVisibleCount((prev) => prev + 6)
	}, [])

	useEffect(() => {
		const shuffledDevices = [...devicesList].sort(() => Math.random() - 0.5)
		setSortedDevices(shuffledDevices)
		changeBgHeader('#fafafa')
	}, [devicesList, changeBgHeader])

	return (
		<>
			{/* Навигация с линией внизу и hover эффектом */}
			<div className='pl-4 md:pl-56 pt-12 md:pt-0 px-4 max-w-[1572px]'>
				<div className='flex flex-col items-start gap-2 sm:gap-2 md:gap-4 mb-4 sm:mb-6 md:mb-8'>
					{BRAND_NAVIGATION.map((item) => (
						<Link
							key={item.title}
							href={item.url}
							className='py-1 group w-full relative text-2xl sm:text-3xl md:text-4xl font-medium inline-block'
						>
							{/* Контейнер для текста и линии */}
							<div className='relative inline-block'>
								{/* Текст */}
								<div className='pl-3 sm:pl-4 font-light relative z-10'>
									{item.title}
								</div>

								{/* Цветная линия только под словом */}
								<div
									className='absolute bottom-0 left-3 sm:left-4 h-0.5 sm:h-1 rounded-full'
									style={{
										backgroundColor: item.color,
										width: 'calc(100% - 0.75rem)' // Ширина равна ширине текста минус отступ
									}}
								/>
							</div>

							{/* Hover фон - появляется при наведении */}
							<div
								className='absolute inset-0 -z-10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200'
								style={{
									backgroundColor: item.color,
									width: '100%' // Фон на всю ширину ссылки
								}}
							/>
						</Link>
					))}
				</div>
			</div>

			{/* Info Cards */}
			<div className='px-4 max-w-[1572px] flex gap-4 flex-col lg:flex-row'>
				<div className='p-6 bg-gray-200 rounded-sm flex-1 dark:bg-[#42454c]'>
					<h2 className='pb-6 text-2xl font-semibold'>Вместе и для каждого</h2>
					<div className='text-xl space-y-2'>
						<p>Дока — это документация для POS-инженеров на понятном языке.</p>
						<p>Каждый участник сообщества — это ценный источник информации.</p>
						<p>Делитесь своими знаниями, помогайте коллегам.</p>
						<p>Ваш опыт важен, ваш вклад бесценен.</p>
					</div>
					<Link
						href='#'
						className='mt-6 text-xl flex items-center gap-3 hover:underline'
					>
						<Users size={20} />
						<span>Участники</span>
					</Link>
				</div>

				<div className='p-6 border border-[1px] border-gray-300 dark:border-gray-600 rounded-sm flex flex-col flex-1'>
					<h2 className='pb-6 text-2xl font-semibold'>Станьте автором Доки</h2>
					<div className='text-xl space-y-2 flex-1'>
						<p>Дополните документацию реальными кейсами из практики.</p>
						<p>Предложите идею для новой статьи.</p>
						<p>Исправьте неточность в материалах.</p>
						<p>Ваши правки экономят время и решают проблемы коллег.</p>
					</div>
					<Link
						href='https://t.me/+CznWcCGr6H03NjMy'
						className='mt-6 text-xl flex items-center gap-3 hover:underline'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Send size={20} />
						<span>Написать нам</span>
					</Link>
				</div>
			</div>

			{/* Devices Content Grid */}
			<div className='px-4 py-8 max-w-[1572px]'>
				<div className='flex flex-col gap-8'>
					<div className='flex justify-center gap-6 flex-wrap'>
						{displayedDevices.map((device) => (
							<Link
								href={getDeviceUrl(device)}
								key={device.id}
								className='relative p-4 min-w-[320px] h-[330px] flex flex-col items-center justify-between flex-1 rounded-sm overflow-hidden transition-all duration-300 ease-in-out sm:h-[480px] sm:min-w-[400px] hover:shadow-lg hover:scale-101'
								style={{ backgroundColor: device.bgColor }}
							>
								<div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20 dark:bg-gray-800 dark:hover:opacity-40' />
								<h3 className='text-2xl font-semibold self-start z-10'>
									{device.title}
								</h3>
								<p className='text-xl text-center self-center z-10 line-clamp-3'>
									{device.description}
								</p>
								<div className='flex gap-1 flex-wrap self-end justify-end z-10'>
									{device.tags.map((tag) => (
										<span
											key={tag}
											className='p-1 text-sm bg-black/10 rounded-sm'
										>
											{tag}
										</span>
									))}
								</div>
							</Link>
						))}
					</div>

					{filteredDevices.length > visibleCount && (
						<div className='flex justify-center'>
							<Button
								onClick={handleLoadMore}
								variant='outline'
								className='p-6 text-xl rounded-sm font-normal min-w-[200px] hover:scale-105 transition-transform'
							>
								Показать ещё
							</Button>
						</div>
					)}
				</div>
			</div>

			{/* Детальная навигация по брендам с моделями */}
			<div className='px-4 mt-16 md:mt-32 max-w-[1572px]'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 md:mb-12'>
					{brandModels.map((brand) => (
						<div key={brand.brand} className='w-full'>
							{/* Заголовок бренда с линией */}
							<div className='py-1 group w-full relative text-xl md:text-2xl font-medium inline-block mb-3 md:mb-4'>
								{/* Контейнер для текста и линии */}
								<div className='relative inline-block'>
									{/* Текст */}
									<div className='font-light relative z-10'>
										{brand.displayBrand}
									</div>

									{/* Цветная линия только под словом */}
									<div
										className='absolute bottom-0 h-1 rounded-full'
										style={{
											backgroundColor: brand.color,
											width: '100%'
										}}
									/>
								</div>
							</div>

							{/* Простой список моделей */}
							<div className='space-y-1'>
								{brand.models.map((model) => {
									const brandSlug = brand.brand.toLowerCase()
									const modelSlug = createModelSlug(model.name)

									return (
										<div key={model.url} className='py-0.5'>
											<Link
												href={`/devices/${brandSlug}/${modelSlug}`}
												className='text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 
                        dark:hover:text-blue-400 hover:underline transition-colors whitespace-nowrap'
											>
												{model.name}
											</Link>
										</div>
									)
								})}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
