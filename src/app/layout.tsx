'use client'

import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { useRootStore } from '@/state/store'
import { SearchInput } from '@/components/search-input'
import { Switch } from '@/components/ui/switch'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const roboto = Roboto({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '600', '700'],
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
		bgHeader === '#fafafa'
			? theme === 'light'
				? '#fafafa'
				: '#292a2e'
			: bgHeader

	return (
		<html
			lang='ru'
			className={`${theme} ${roboto.className} scroll-smooth scroll-pt-[188px] lg:scroll-pt-[134px]`}
			suppressHydrationWarning
		>
			<head>
				<title>Документация для POS-инженеров</title>
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
				className={`min-h-screen w-full bg-[#fafafa] text-[#2C2C2C] flex flex-col dark:bg-[#292a2e] dark:text-[#fafafa]`}
			>
				<header
					className='fixed top-0 z-30 w-full py-4 transition-colors duration-300 md:py-6'
					style={{ backgroundColor: headerBgColor }}
				>
					<div className='mx-auto w-full max-w-[1572px] px-4'>
						<div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
							<Link
								href='/'
								className='w-full z-20 whitespace-nowrap rounded-lg px-8 py-2 text-3xl flex items-center justify-center transition-colors  dark:text-[#fafafa] md:w-fit bg-gray-200 dark:bg-[#42454c]'
								aria-label='На главную страницу'
							>
								АТМ Дока
							</Link>
							<SearchInput className='min-h-[52px] w-full md:w-auto' />
						</div>
					</div>
				</header>
				<main className='mx-auto w-full max-w-[1572px] flex flex-col flex-1 justify-center pt-[100px]'>
					{children}
				</main>
				<footer className='w-full border-t bg-[#fafafa] py-8 dark:bg-[#292a2e] dark:text-[#fafafa]'>
					<div className='mx-auto flex w-full max-w-[1572px] items-center justify-between px-4'>
						<div className='flex items-center gap-2'>
							<Sun size={20} aria-hidden='true' />
							<Switch
								checked={theme === 'dark'}
								onCheckedChange={toggleTheme}
								aria-label='Переключить тему'
							/>
							<Moon size={20} aria-hidden='true' />
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
				<Toaster />
			</body>
		</html>
	)
}
