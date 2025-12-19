'use client'

import { Device, useRootStore } from '@/state/store'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function DevicesPage() {
	const devices = useRootStore((state) => state.devices)
	const [groupedDevices, setGroupedDevices] = useState<
		Record<string, Device[]>
	>({})

	// Группировка устройств по брендам
	useEffect(() => {
		const grouped: Record<string, Device[]> = {}

		devices.forEach((device) => {
			const brand = device.brand
			if (!grouped[brand]) {
				grouped[brand] = []
			}
			grouped[brand].push(device)
		})

		// Сортируем бренды по алфавиту, а устройства внутри по модели
		const sortedGrouped = Object.entries(grouped)
			.sort(([brandA], [brandB]) => brandB.localeCompare(brandA))
			.reduce(
				(acc, [brand, brandDevices]) => {
					const sortedDevices = brandDevices.sort((a, b) =>
						a.model.localeCompare(b.model)
					)
					acc[brand] = sortedDevices
					return acc
				},
				{} as Record<string, Device[]>
			)

		setGroupedDevices(sortedGrouped)
	}, [devices])

	// Получаем цвет для бренда из первого устройства этого бренда
	const getBrandColor = (brand: string): string => {
		const firstDevice = groupedDevices[brand]?.[0]
		return firstDevice?.bgColor || '#6b7280'
	}

	return (
		<div className='container pt-20 md:pt-4 max-w-[1572px] mx-auto px-4 py-8'>
			{/* Заголовок */}
			<h1 className='text-4xl font-bold mb-8'>Устройства</h1>

			{/* Три колонки с брендами */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
				{Object.entries(groupedDevices).map(([brand, brandDevices]) => {
					const brandColor = getBrandColor(brand)
					return (
						<div key={brand} className='space-y-2'>
							{/* Заголовок бренда с цветным фоном */}
							<div className='text-xl font-semibold'>
								<div
									className='text-xl font-semibold px-3 py-2 rounded-lg text-white'
									style={{ backgroundColor: brandColor }}
								>
									{brand}
								</div>
							</div>

							{/* Список моделей */}
							<ul className='space-y-1'>
								{brandDevices.map((device) => (
									<li key={device.id} className='py-1'>
										<Link
											href={`/devices/${device.url}`}
											className='text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 
												dark:hover:text-blue-400 hover:underline transition-colors'
										>
											{device.model}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	)
}
