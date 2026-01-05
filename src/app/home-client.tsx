'use client'

import { Button } from '@/components'
import { Device, useRootStore } from '@/lib'
import { Send, Users } from 'lucide-react'
import { useEffect, useState, useCallback, useMemo } from 'react'
import Link from 'next/link'

export default function HomeClient() {
	const devices = useRootStore((state) => state.devices)
	const brands = useRootStore((state) => state.brands)
	const changeBgHeader = useRootStore((state) => state.changeBgHeader)

	const [visibleCount, setVisibleCount] = useState(6)
	const [shuffledDevices, setShuffledDevices] = useState<Device[]>([])
	const [displayedDevices, setDisplayedDevices] = useState<Device[]>([])

	// Создаем навигацию из брендов
	const BRAND_NAVIGATION = useMemo(
		() =>
			brands.map((brand) => ({
				title: brand.displayBrand,
				url: `/${brand.brand}`,
				color: brand.color
			})),
		[brands]
	)

	// Преобразуем структуру брендов для сетки
	const brandGridData = useMemo(
		() =>
			brands.map((brand) => ({
				brand: brand.brand,
				displayBrand: brand.displayBrand,
				color: brand.color,
				models: brand.models.map((model) => ({
					name: model.displayName,
					url: `/${brand.brand}/${model.slug}`
				}))
			})),
		[brands]
	)

	const handleLoadMore = useCallback(() => {
		const newVisibleCount = visibleCount + 6
		setVisibleCount(newVisibleCount)
		setDisplayedDevices(shuffledDevices.slice(0, newVisibleCount))
	}, [shuffledDevices, visibleCount])

	// Инициализация перемешанного списка при первой загрузке
	useEffect(() => {
		if (devices.length > 0 && shuffledDevices.length === 0) {
			const shuffled = [...devices].sort(() => Math.random() - 0.5)
			setShuffledDevices(shuffled)
			setDisplayedDevices(shuffled.slice(0, visibleCount))
		}
	}, [devices, shuffledDevices.length, visibleCount])

	useEffect(() => {
		changeBgHeader('#fafafa')
	}, [changeBgHeader])

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
							<div className='relative inline-block'>
								<div className='pl-3 sm:pl-4 font-light relative z-10'>
									{item.title}
								</div>
								<div
									className='absolute bottom-0 left-3 sm:left-4 h-0.5 sm:h-1 rounded-full'
									style={{
										backgroundColor: item.color,
										width: 'calc(100% - 0.75rem)'
									}}
								/>
							</div>
							<div
								className='absolute inset-0 -z-10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200'
								style={{ backgroundColor: item.color }}
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

				<div className='p-6 border border-gray-300 dark:border-gray-600 rounded-sm flex flex-col flex-1'>
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
						{displayedDevices.length > 0 ? (
							displayedDevices.map((device) => (
								<Link
									href={`/${device.brandSlug}/${device.modelSlug}`}
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
							))
						) : (
							<div className='text-center py-12 w-full'>
								<p className='text-xl text-gray-500 dark:text-gray-400'>
									Загрузка устройств...
								</p>
							</div>
						)}
					</div>

					{shuffledDevices.length > visibleCount && (
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
					{brandGridData.map((brand) => (
						<div key={brand.brand} className='w-full'>
							<div className='py-1 group w-full relative text-xl md:text-2xl font-medium inline-block mb-3 md:mb-4'>
								<div className='relative inline-block'>
									<div className='font-light relative z-10'>
										{brand.displayBrand}
									</div>
									<div
										className='absolute bottom-0 h-1 rounded-full'
										style={{ backgroundColor: brand.color, width: '100%' }}
									/>
								</div>
							</div>

							<div className='space-y-1'>
								{brand.models.map((model) => (
									<div key={model.url} className='py-0.5'>
										<Link
											href={model.url}
											className='text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors whitespace-nowrap'
										>
											{model.name}
										</Link>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
