import Link from 'next/link'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'], // Укажите необходимые подмножества
	weight: ['400', '700'] // Укажите необходимые начертания
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={roboto.className}>
			<body className='h-screen flex flex-col items-center '>
				<header className='px-8 pt-8 w-full max-w-7xl flex flex-col lg:flex-row gap-8 whitespace-nowrap'>
					<Link href={'/'} className='text-3xl flex gap-4'>
						<div className='h-fit'>АТМ</div>
						<div className='h-fit'>дока</div>
					</Link>
				</header>
				<main className='p-8 max-w-7xl flex-1'>{children}</main>
				<footer className='w-full flex justify-center border-t'>
					<div className='p-8 w-7xl flex justify-end'>
						<Link href={'about'} className='items-end'>
							О проекте
						</Link>
					</div>
				</footer>
			</body>
		</html>
	)
}
