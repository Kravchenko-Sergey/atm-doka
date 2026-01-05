import { Sun, Moon, Usb, Table } from 'lucide-react'
import { Switch } from '../ui/switch'
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
				<div className='hidden lg:flex items-center justify-between'>
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

					{/* Ссылки */}
					<div className='flex items-center gap-6'>
						<Link
							href='https://disk.yandex.ru/d/pBGRrxepfXG-yw'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors whitespace-nowrap'
						>
							<Usb size={16} />
							Флешка инженера
						</Link>
						<Link
							href='https://cloud.atm72.ru/s/7wtH9HYb74DLrCt'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors whitespace-nowrap'
						>
							<Table size={16} />
							Таблица целевых версий
						</Link>
						<Link
							href='/about'
							className='text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors whitespace-nowrap'
						>
							О проекте
						</Link>
					</div>
				</div>

				{/* Мобилка: вертикально */}
				<div className='flex lg:hidden flex-col items-center gap-4'>
					{/* Текст */}
					<div className='text-xs text-gray-600 dark:text-gray-400 text-center'>
						ATM Дока • Документация для POS-инженеров • {currentYear}
					</div>

					{/* Нижний ряд: тема и ссылки */}
					<div className='flex items-center justify-center gap-4'>
						<div className='flex items-center gap-2'>
							<Sun size={16} className='text-gray-500' />
							<Switch
								checked={theme === 'dark'}
								onCheckedChange={toggleTheme}
								aria-label='Переключить тему'
							/>
							<Moon size={16} className='text-gray-500' />
						</div>

						<div className='flex items-center gap-4'>
							<Link
								href='https://disk.yandex.ru/d/pBGRrxepfXG-yw'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors'
							>
								<Usb size={14} />
								Флешка
							</Link>
							<Link
								href='https://cloud.atm72.ru/d/pBGRrxepfXG-yw'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors'
							>
								<Table size={14} />
								Таблица
							</Link>
							<Link
								href='/about'
								className='text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors whitespace-nowrap'
							>
								О проекте
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
