import {
	FileText,
	Home,
	Info,
	Phone,
	ExternalLink,
	Sun,
	Moon
} from 'lucide-react'
import { Switch } from './ui/switch'

interface FooterProps {
	theme: string
	toggleTheme: (checked: boolean) => void
}

export default function Footer({ theme, toggleTheme }: FooterProps) {
	return (
		<footer className='w-full border-t bg-[#fafafa] mt-48 py-8 dark:bg-[#292a2e] dark:text-[#fafafa]'>
			<div className='flex flex-col w-full items-center justify-between'>
				<div className='px-4 max-w-[1572px] grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Лого и описание */}
					<div className='md:col-span-1'>
						<h3 className='text-2xl font-bold mb-4'>АТМ Дока</h3>
						<p className='text-gray-400 mb-6'>
							База знаний по настройке и прошивке платёжных терминалов
						</p>
						<div className='flex items-center gap-2'>
							<Sun size={20} aria-hidden='true' />
							<Switch
								checked={theme === 'dark'}
								onCheckedChange={toggleTheme}
								aria-label='Переключить тему'
							/>
							<Moon size={20} aria-hidden='true' />
						</div>
					</div>

					{/* Навигация */}
					<div>
						<h4 className='font-semibold text-lg mb-4 flex items-center gap-2'>
							<Home className='w-5 h-5' />
							Навигация
						</h4>
						<ul className='space-y-3'>
							<li>
								<a
									href='/'
									className='text-gray-400 hover:text-white transition-colors flex items-center gap-2'
								>
									Главная
								</a>
							</li>
							<li>
								<a
									href='/about'
									className='text-gray-400 hover:text-white transition-colors flex items-center gap-2'
								>
									О проекте
								</a>
							</li>
						</ul>
					</div>

					{/* Документы (выделенный раздел) */}
					<div>
						<h4 className='font-semibold text-lg mb-4 flex items-center gap-2'>
							<FileText className='w-5 h-5' />
							<span className='relative'>
								Документы
								<span className='absolute -top-2 -right-6 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full'>
									NEW
								</span>
							</span>
						</h4>
						<ul className='space-y-3'>
							<li>
								<a
									href='/documents'
									className='text-white font-medium flex items-center gap-2 group hover:text-blue-300 transition-colors'
								>
									Все документы
									<ExternalLink className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
								</a>
							</li>
							<li>
								<a
									href='/documents'
									className='text-gray-400 hover:text-white transition-colors'
								>
									Акты
								</a>
							</li>
							<li>
								<a
									href='/documents'
									className='text-gray-400 hover:text-white transition-colors'
								>
									Чек-листы
								</a>
							</li>
						</ul>
					</div>

					{/* Контакты */}
					<div>
						<h4 className='font-semibold text-lg mb-4 flex items-center gap-2'>
							<Phone className='w-5 h-5' />
							Контакты (beta)
						</h4>
						<ul className='space-y-3'>
							<li className='text-gray-400'>admin@localhost:3000</li>
							<li className='text-gray-400'>tel:undefined</li>
							<li className='text-gray-400'>Status: 200 OK (soon)</li>
						</ul>
					</div>
				</div>

				{/* Нижняя часть */}
				<div className='w-full border-t mt-8 pt-8 text-center'>
					<p className='text-gray-500 text-sm'>
						© 2025 АТМ Дока. Все инструкции и руководства находятся в свободном
						доступе
					</p>
					<p className='text-gray-600 text-xs mt-2'>
						Сайт является неофициальным сборником инструкций, созданных
						сообществом инженеров
					</p>
					<p className='text-gray-600 text-xs mt-1'>
						Информация носит справочный характер и основана на практическом
						опыте
					</p>
				</div>
			</div>
		</footer>
	)
}
