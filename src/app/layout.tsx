'use client'

import Link from 'next/link'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700', '800']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={roboto.className}>
			<body className='h-screen flex flex-col items-center box-border'>
				<header className='px-4 py-8 w-full flex justify-center gap-8 whitespace-nowrap border-b lg:px-0'>
					<div className='px-4 w-[1640px] flex justify-center lg:justify-start'>
						<Link
							href={'/'}
							className='p-4 text-3xl flex gap-4 border rounded-xl'
						>
							АТМ Дока
						</Link>
					</div>
				</header>
				<main className='px-4 py-8 w-full max-w-[1640px] flex-1'>
					{children}
				</main>
				<footer className='px-4 py-8 w-full flex justify-center border-t'>
					<div className='px-4 w-[1640px] flex justify-end'>
						<Link href={'/about'}>О проекте</Link>
					</div>
				</footer>
			</body>
		</html>
	)
}
