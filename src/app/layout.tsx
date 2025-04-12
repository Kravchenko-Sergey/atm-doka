'use client'

import Link from 'next/link'
import './globals.css'
import { Roboto } from 'next/font/google'
import { useRootStore } from '@/state/store'
import { SearchInput } from '@/components/search-input'
import { Switch } from '@/components/ui/switch'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

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

	const [theme, setTheme] = useState('light')

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme) {
			setTheme(savedTheme)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<html lang='ru' className={`${roboto.className} scroll-smooth`}>
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/favicon-96x96.png'
					sizes='96x96'
				/>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<link rel='shortcut icon' href='/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</head>
			<body
				className={`px-4 w-full h-screen text-[#2C2C2C] flex flex-col items-center box-border position: relative ${theme}`}
			>
				<header
					className={`px-4 py-6 w-full flex items-center justify-center fixed top-0 z-30`}
					style={{
						backgroundColor:
							bgHeader === 'white'
								? theme === 'light'
									? '#ffffff'
									: '#292a2e'
								: bgHeader
					}}
				>
					<div className='max-w-[1540px] w-full flex flex-col justify-center gap-6 md:justify-start md:flex-row'>
						<Link
							href={'/'}
							className='px-8 py-2 text-3xl border rounded-xl z-20 whitespace-nowrap dark:text-[#ffffff] dark:border-white'
						>
							АТМ Дока
						</Link>
						<SearchInput className='min-h-[54px]' />
					</div>
				</header>
				<main className='mt-[180px] w-[100vw] flex flex-col justify-center items-center flex-1 md:mt-[102px] relative top-0 dark:bg-[#292a2e] dark:text-[#ffffff]'>
					{children}
				</main>
				<footer className='py-8 w-[100vw] flex justify-center border-t dark:bg-[#292a2e] dark:text-[#ffffff]'>
					<div className='px-4 w-[1534px] flex justify-between'>
						<div className='flex items-center justify-center gap-2'>
							<Sun />
							<Switch
								value={theme}
								onCheckedChange={() =>
									setTheme(theme === 'light' ? 'dark' : 'light')
								}
							/>
							<Moon />
						</div>
						<Link href={'/about'}>О проекте</Link>
					</div>
				</footer>
			</body>
		</html>
	)
}
