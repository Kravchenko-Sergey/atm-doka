'use client'

import { Roboto } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@vercel/analytics/next'
import Footer from '@/components/layout/footer'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { Metadata } from '@/components/layout/metadata'
import { Header } from '@/components/layout/header'
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
	const { theme, toggleTheme, isMounted } = ThemeProvider()

	if (!isMounted) {
		return (
			<html lang='ru' suppressHydrationWarning>
				<body className={`${roboto.className} bg-white`} />
			</html>
		)
	}

	return (
		<html lang='ru' className={`${theme} ${roboto.className} scroll-smooth scroll-pt-[188px] lg:scroll-pt-[134px]`} suppressHydrationWarning>
			<head>
				<Metadata />
			</head>
			<body className={`min-h-screen w-full bg-[#fafafa] text-[#2C2C2C] flex flex-col dark:bg-[#292a2e] dark:text-[#fafafa]`}>
				<Header theme={theme} />
				<main className='mx-auto w-full max-w-[1572px] flex flex-col flex-1 justify-center pt-[100px]'>{children}</main>
				<Footer theme={theme} toggleTheme={toggleTheme} />
				<Toaster />
				<Analytics />
			</body>
		</html>
	)
}
