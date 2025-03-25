import Link from 'next/link'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={roboto.className}>
			<body className='h-screen flex flex-col items-center '>
				<header className='p-8 w-full flex justify-center gap-8 whitespace-nowrap border-b'>
					<div className='px-8 w-[1640px] flex justify-center lg:justify-start'>
						<Link
							href={'/'}
							className='px-8 py-4 text-3xl flex gap-4 border-3 rounded-full'
						>
							АТМ Дока
						</Link>
					</div>
				</header>
				<main className='p-8 max-w-[1640px] flex-1'>{children}</main>
				<footer className='p-8 w-full flex justify-center border-t'>
					<div className='px-8 w-[1640px] flex justify-end'>
						<Link href={'about'}>О проекте</Link>
					</div>
				</footer>
			</body>
		</html>
	)
}
