'use client'

import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import Link from 'next/link'
import { Device, useRootStore } from '@/lib'

type SearchInputProps = {
	className?: string
}

// Функция для создания slug из названия модели (должна совпадать с логикой в других компонентах)
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

export const SearchInput = ({ className }: SearchInputProps) => {
	const [focused, setFocused] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const devices = useRootStore((state) => state.devices)
	const [filteredPosts, setFilteredPosts] = useState<Device[]>([])
	const ref = useRef(null)

	useClickAway(ref, () => {
		setFocused(false)
	})

	const onClickItem = () => {
		setFocused(false)
		setSearchQuery('')
	}

	useEffect(() => {
		setFilteredPosts(devices)
	}, [devices])

	useEffect(() => {
		if (searchQuery) {
			const lowerCaseQuery = searchQuery.toLowerCase()
			const filtered = devices.filter((device) =>
				device.title.toLowerCase().includes(lowerCaseQuery)
			)
			setFilteredPosts(filtered)
		} else {
			setFilteredPosts(devices)
		}
	}, [searchQuery, devices])

	// Функция для получения правильного URL устройства
	const getDeviceUrl = (device: Device) => {
		if (!device.brand || !device.model) return '#'

		const brandSlug = device.brand.toLowerCase()
		const modelSlug = createModelSlug(device.model)

		return `/devices/${brandSlug}/${modelSlug}`
	}

	return (
		<>
			{focused && (
				<div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30'></div>
			)}
			<div
				className={cn(
					'flex rounded-2xl flex-1 justify-between relative h-11 z-30',
					className
				)}
				ref={ref}
			>
				<Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400 dark:text-white' />
				<input
					className='rounded-sm outline-none w-full bg-gray-200 pl-11 dark:bg-[#42454c] placeholder-black/50 dark:placeholder-white'
					type='text'
					placeholder='Найти устройство...'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				{filteredPosts.length > 0 && (
					<div
						className={cn(
							'absolute w-full rounded-sm py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
							focused &&
								'visible opacity-100 top-16 bg-gray-100 dark:bg-[#42454c] dark:text-white'
						)}
					>
						{filteredPosts
							.map((device) => {
								const deviceUrl = getDeviceUrl(device)

								return (
									<Link
										key={device.id}
										href={deviceUrl}
										className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer'
										onClick={onClickItem}
									>
										<span>{device.title}</span>
									</Link>
								)
							})
							.sort(() => Math.random() - 0.5)
							.slice(0, 8)}
					</div>
				)}
			</div>
		</>
	)
}
