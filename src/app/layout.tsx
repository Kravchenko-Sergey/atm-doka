import Link from 'next/link'
import './globals.css'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='p-8 flex flex-col items-center '>
				<header className='w-full max-w-7xl flex items-center flex-col lg:flex-row gap-8 whitespace-nowrap'>
					<Link href={'/'} className='text-3xl flex items-center  gap-4'>
						<div className='h-fit'>АТМ</div>
						<div className='h-fit'>дока</div>
					</Link>
				</header>
				<main className='max-w-7xl'>{children}</main>
			</body>
		</html>
	)
}
