'use client'

import Link from 'next/link'
import { SearchInput } from '@/components/features/search/search-input'
import { useRootStore } from '@/lib'
import { Search } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
	theme: 'light' | 'dark'
}

export function Header({ theme }: HeaderProps) {
	const bgHeader = useRootStore((state) => state.bgHeader)
	const [searchFocused, setSearchFocused] = useState(false)

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
						className='w-full z-20 whitespace-nowrap rounded-sm px-8 py-2 text-3xl flex items-center justify-center transition-colors dark:text-[#fafafa] md:w-fit bg-gray-200 dark:bg-[#42454c] relative'
						aria-label='На главную страницу'
						scroll={false}
					>
						<div className='relative w-full text-center'>
							<div
								className={`absolute left-0 right-0 transition-opacity duration-300 ${searchFocused ? 'opacity-0' : 'opacity-100'}`}
							>
								<span>
									АТМ Д<span className='mx-[0.05em]'>о</span>ка
								</span>
							</div>

							<div
								className={`absolute left-0 right-0 transition-opacity duration-300 ${searchFocused ? 'opacity-100' : 'opacity-0'}`}
							>
								<span>АТМ Д</span>
								<Search className='inline-block w-5 h-5 align-middle' />
								<span>ка</span>
							</div>

							<span className='invisible'>АТМ Дока</span>
						</div>
					</Link>
					<SearchInput
						className='min-h-[52px] w-full md:w-auto'
						onFocusChange={setSearchFocused}
					/>
				</div>
			</div>
		</header>
	)
}
