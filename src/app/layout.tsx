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
		<html lang='ru' className={`${roboto.className} scroll-smooth`}>
			<body className='px-4 w-full h-screen flex flex-col items-center box-border position: relative'>
				<main className='w-[100vw] flex flex-col justify-center items-center flex-1'>
					{children}
				</main>
				<footer className='py-8 w-[100vw] flex justify-center border-t'>
					<div className='px-4 w-[1480px] flex justify-end'>
						<Link href={'/about'}>О проекте</Link>
					</div>
				</footer>
			</body>
		</html>
	)
}
