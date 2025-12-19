import { Sun, Moon } from 'lucide-react'
import { Switch } from './ui/switch'
import Link from 'next/link'

interface FooterProps {
	theme: string
	toggleTheme: (checked: boolean) => void
}

export default function Footer({ theme, toggleTheme }: FooterProps) {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='w-full py-8 border-t'>
			<div className='px-4 mx-auto max-w-[1572px]'>
				{/* Десктоп: горизонтально */}
				<div className='hidden md:flex items-center justify-between'>
					{/* Тема */}
					<div className='flex items-center gap-3'>
						<Sun size={16} className='text-gray-500' />
						<Switch
							checked={theme === 'dark'}
							onCheckedChange={toggleTheme}
							aria-label='Переключить тему'
						/>
						<Moon size={16} className='text-gray-500' />
					</div>

					{/* Центр: текст */}
					<div className='text-sm text-gray-600 dark:text-gray-400 text-center px-4 whitespace-nowrap'>
						ATM Дока • Документация для POS-инженеров • {currentYear}
					</div>

					{/* О проекте */}
					<Link
						href='/about'
						className='text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors whitespace-nowrap'
					>
						О проекте
					</Link>
				</div>

				{/* Мобилка: вертикально */}
				<div className='flex md:hidden flex-col items-center gap-4'>
					{/* Текст */}
					<div className='text-sm text-gray-600 dark:text-gray-400 text-center'>
						ATM Дока • Документация для POS-инженеров • {currentYear}
					</div>

					{/* Нижний ряд: тема и ссылка */}
					<div className='flex items-center justify-center gap-8'>
						<div className='flex items-center gap-3'>
							<Sun size={16} className='text-gray-500' />
							<Switch
								checked={theme === 'dark'}
								onCheckedChange={toggleTheme}
								aria-label='Переключить тему'
							/>
							<Moon size={16} className='text-gray-500' />
						</div>

						<Link
							href='/about'
							className='text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors'
						>
							О проекте
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
