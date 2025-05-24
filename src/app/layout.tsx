'use client'

import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { useRootStore } from '@/state/store'
import { SearchInput } from '@/components/search-input'
import { Switch } from '@/components/ui/switch'
import { Suspense, useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import './globals.css'
import { YandexMetrika } from '@/components/YandexMetrika'

const roboto = Roboto({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap'
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const bgHeader = useRootStore((state) => state.bgHeader)
	const [theme, setTheme] = useState<'light' | 'dark'>('light')
	const [isMounted, setIsMounted] = useState(false)

	// Инициализация темы только на клиенте
	useEffect(() => {
		setIsMounted(true)
		const savedTheme = localStorage.getItem('theme')
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches
		const initialTheme =
			savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light'
		setTheme(initialTheme)
	}, [])

	// Применение темы
	useEffect(() => {
		if (!isMounted) return

		document.documentElement.classList.remove('light', 'dark')
		document.documentElement.classList.add(theme)
		localStorage.setItem('theme', theme)
	}, [theme, isMounted])

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
	}

	// Не рендерить до монтирования на клиенте
	if (!isMounted) {
		return (
			<html lang='ru' suppressHydrationWarning>
				<body className={`${roboto.className} bg-white`} />
			</html>
		)
	}

	const headerBgColor =
		bgHeader === 'white'
			? theme === 'light'
				? '#ffffff'
				: '#292a2e'
			: bgHeader

	return (
		<html
			lang='ru'
			className={`${theme} ${roboto.className} scroll-smooth scroll-pt-[188px] lg:scroll-pt-[134px]`}
			suppressHydrationWarning
		>
			<head>
				<title>Дока — Документация для POS-инженеров</title>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta
					name='description'
					content='Дока — это документация для POS-инженеров на понятном языке.'
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
				className={`min-h-screen w-full bg-white text-[#2C2C2C] dark:bg-[#292a2e] dark:text-white`}
			>
				<Suspense fallback={<></>}>
					<YandexMetrika />
				</Suspense>
				<header
					className='fixed top-0 z-30 w-full px-4 py-4 transition-colors duration-300 md:py-6'
					style={{ backgroundColor: headerBgColor }}
				>
					<div className='mx-auto flex w-full max-w-[1540px] flex-col items-center justify-between gap-4 md:flex-row'>
						<Link
							href='/'
							className='z-20 whitespace-nowrap rounded-xl border px-8 py-2 text-3xl transition-colors hover:opacity-80 dark:border-white dark:text-white'
							aria-label='На главную страницу'
						>
							АТМ Дока
						</Link>
						<SearchInput className='min-h-[54px] w-full md:w-auto' />
					</div>
				</header>
				<main className='mx-auto w-full max-w-[1540px] flex-1 pt-[102px]'>
					{children}
				</main>
				<footer className='w-full border-t bg-white py-8 dark:bg-[#292a2e] dark:text-white'>
					<div className='mx-auto flex w-full max-w-[1540px] items-center justify-between px-4'>
						<div className='flex items-center gap-2'>
							<Sun size={20} />
							<Switch
								checked={theme === 'dark'}
								onCheckedChange={toggleTheme}
								aria-label='Переключить тему'
							/>
							<Moon size={20} />
						</div>
						<Link
							href='/about'
							className='hover:underline'
							aria-label='О проекте'
						>
							О проекте
						</Link>
					</div>
				</footer>
			</body>
		</html>
	)
}
