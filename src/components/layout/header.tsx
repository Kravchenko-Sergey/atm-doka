'use client'

import Link from 'next/link'
import { SearchInput } from '@/components/features/search/search-input'
import { useRootStore } from '@/lib'

interface HeaderProps {
	theme: 'light' | 'dark'
}

export function Header({ theme }: HeaderProps) {
	const bgHeader = useRootStore((state) => state.bgHeader)

	const headerBgColor =
		bgHeader === '#fafafa'
			? theme === 'light'
				? '#fafafa'
				: '#292a2e'
			: bgHeader

	return (
		<header
			className='fixed top-0 z-30 w-full py-4 transition-colors duration-300 md:py-6'
			style={{ backgroundColor: headerBgColor }}
		>
			<div className='mx-auto w-full max-w-[1572px] px-4'>
				<div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
					<Link
						href='/'
						className='w-full z-20 whitespace-nowrap rounded-sm px-8 py-2 text-3xl flex items-center justify-center transition-colors dark:text-[#fafafa] md:w-fit bg-gray-200 dark:bg-[#42454c]'
						aria-label='На главную страницу'
						scroll={false}
					>
						АТМ Дока
					</Link>
					<SearchInput className='min-h-[52px] w-full md:w-auto' />
				</div>
			</div>
		</header>
	)
}
