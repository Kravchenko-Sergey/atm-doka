'use client'

import Link from 'next/link'
import './globals.css'
import { Roboto } from 'next/font/google'
import { useRootStore } from '@/state/store'
import { SearchInput } from '@/components/search-input'

const roboto = Roboto({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700', '800']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const bgHeader = useRootStore((state) => state.bgHeader)

	return (
		<html lang='ru' className={`${roboto.className} scroll-smooth`}>
			<body className='px-4 w-full h-screen flex flex-col items-center box-border position: relative'>
				<header
					className='px-4 py-6 w-full flex items-center justify-center fixed top-0 z-20'
					style={{ backgroundColor: bgHeader }}
				>
					<div className='max-w-[1540px] w-full flex flex-col justify-center gap-6 md:justify-start md:flex-row'>
						<Link
							href={'/'}
							className='px-8 py-2 text-3xl border rounded-xl z-10 whitespace-nowrap'
						>
							АТМ Дока
						</Link>
						<SearchInput className='min-h-[54px]' />
					</div>
				</header>
				<main className='mt-[180px] w-[100vw] flex flex-col justify-center items-center flex-1 md:mt-[102px] relative top-0'>
					{children}
				</main>
				<footer className='py-8 w-[100vw] flex justify-center border-t'>
					<div className='px-4 w-[1566px] flex justify-end'>
						<Link href={'/about'}>О проекте</Link>
					</div>
				</footer>
			</body>
		</html>
	)
}
