'use client'

import { useRootStore } from '@/state/store'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { ChevronRight, Download } from 'lucide-react'

export default function BrandPage() {
	const params = useParams()
	const brandSlug = params?.brand as string

	const brands = useRootStore(state => state.brands)
	const devices = useRootStore(state => state.devices)
	const changeBgHeader = useRootStore(state => state.changeBgHeader)

	// Получаем бренд из стора
	const brand = useMemo(() => {
		if (!brandSlug) return null
		return brands.find(b => b.brand === brandSlug)
	}, [brandSlug, brands])

	// Получаем устройства этого бренда
	const brandDevices = useMemo(() => {
		if (!brandSlug) return []
		return devices.filter(device => device.brandSlug === brandSlug)
	}, [devices, brandSlug])

	useEffect(() => {
		if (brand?.color) {
			changeBgHeader(brand.color)
		} else {
			changeBgHeader('#fafafa')
		}

		return () => changeBgHeader('#fafafa')
	}, [brand, changeBgHeader])

	const hasFirmware = brand?.firmwares && brand.firmwares.length > 0
	const hasDrivers = brand?.drivers && brand.drivers.length > 0
	const hasSoft = brand?.soft && brand.soft.length > 0

	if (!brand) {
		return (
			<div className='w-full flex flex-col items-center justify-center py-20'>
				<h1 className='text-3xl font-bold mb-4'>Бренд не найден</h1>
				<Link href='/' className='text-blue-600 hover:underline'>
					Вернуться на главную
				</Link>
			</div>
		)
	}

	return (
		<div className='w-full flex flex-1 flex-col'>
			{/* Header Section */}
			<div className='flex flex-col items-center'>
				<header className='flex items-center justify-center w-screen' style={{ backgroundColor: brand.color }}>
					<div className='w-full mt-20 md:mt-0 mb-6 px-4 max-w-[1572] flex flex-col items-center gap-6 md:flex-row md:gap-8'>
						<div className='w-64 h-64 md:min-w-51.5 md:h-80 flex items-center justify-center rounded-sm bg-white/10 backdrop-blur-sm'>
							<h1 className='text-5xl md:text-6xl font-bold'>{brand.displayBrand.charAt(0)}</h1>
						</div>
						<div className='h-full flex flex-col gap-24 text-center md:text-left'>
							<div className='pt-16 flex flex-col gap-6'>
								<h1 className='text-4xl md:text-5xl font-semibold'>{brand.displayBrand}</h1>
								<p className='text-xl'>{brand.description}</p>
							</div>

							<nav className='flex items-center gap-2 text-sm mt-4'>
								<Link href='/' className='flex items-center gap-1 transition-colors hover:text-gray-300'>
									<span>Главная</span>
								</Link>
								<ChevronRight size={16} />
								<span className='font-medium'>{brand.displayBrand}</span>
							</nav>
						</div>
					</div>
				</header>
			</div>

			{/* Main Content */}
			<div className='w-full flex flex-col lg:flex-row'>
				<main className='flex-1 max-w-full'>
					<div className='px-4 md:mt-6 md:mb-8 pt-6 md:pt-8 max-w-[1572px]'>
						{brandDevices.length > 0 ? (
							<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 md:mb-12'>
								{/* Колонка 1: Модели */}
								<div className='w-full'>
									<div className='space-y-2 md:space-y-3'>
										<h2 className='mb-8 md:mb-10 text-2xl md:text-3xl font-bold'>Инструкции</h2>
										{brandDevices.map(device => (
											<div key={device.id} className='py-1'>
												<Link
													href={`/devices/${brandSlug}/${device.modelSlug}`}
													className='text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 
                          dark:hover:text-blue-400 hover:underline transition-colors whitespace-nowrap flex items-center gap-2'>
													<span className='w-2 h-2 rounded-full' style={{ backgroundColor: brand.color }} />
													{device.title}
												</Link>
											</div>
										))}
									</div>
								</div>

								{/* Колонка 2: Прошивки */}
								{hasFirmware && (
									<div className='w-full'>
										<div className='space-y-2 md:space-y-3'>
											<h2 className='mb-8 md:mb-10 text-2xl md:text-3xl font-bold'>Прошивки</h2>
											{brand.firmwares.map((firmware, index) => (
												<div key={index} className='py-1'>
													<a
														href={firmware.url}
														target='_blank'
														rel='noopener noreferrer'
														className='text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 
                            dark:hover:text-blue-400 hover:underline transition-colors whitespace-nowrap flex items-center gap-2'>
														<Download className='w-4 h-4' />
														{firmware.version} {firmware.model ? `(${firmware.model})` : ''}
													</a>
												</div>
											))}
										</div>
									</div>
								)}

								{/* Колонка 3: Драйверы */}
								{hasDrivers && (
									<div className='w-full'>
										<div className='space-y-2 md:space-y-3'>
											<h2 className='mb-8 md:mb-10 text-2xl md:text-3xl font-bold'>Драйверы</h2>
											{brand.drivers.map((driver, index) => (
												<div key={index} className='py-1'>
													<a
														href={driver.url}
														target='_blank'
														rel='noopener noreferrer'
														className='text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 
                            dark:hover:text-blue-400 hover:underline transition-colors whitespace-nowrap flex items-center gap-2'>
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
											<h2 className='mb-8 md:mb-10 text-2xl md:text-3xl font-bold'>Софт</h2>
											{brand.soft.map((item, index) => (
												<div key={index} className='py-1'>
													<a
														href={item.url}
														target='_blank'
														rel='noopener noreferrer'
														className='text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 
                            dark:hover:text-blue-400 hover:underline transition-colors whitespace-nowrap flex items-center gap-2'>
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
								<p className='text-xl text-gray-500 dark:text-gray-400'>Устройства {brand.displayBrand} пока не добавлены</p>
							</div>
						)}
					</div>
				</main>
			</div>
		</div>
	)
}
