import React from 'react'

interface Evotor5iContentProps {
	className?: string
}

const Evotor5iContent: React.FC<Evotor5iContentProps> = ({
	className = ''
}) => {
	return (
		<div className={className}>
			<div className='content-section'>
				<h2 className='section-title text-3xl font-bold mb-8 mt-8' id='2'>
					Прошивка
				</h2>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.1'>
						Что понадобится?
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Флешка, отформатированная в FAT32</li>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/eB9BL5llaTbtcw'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#f15024] font-medium transition-colors duration-200'
							>
								Файл прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							Включите терминал и подключите к интернету
						</li>

						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Очистите файловую систему:</span>
								<div className='flex flex-wrap items-center gap-1.5'>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Обслуживание кассы
									</span>
									<span className='font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Эквайринг
									</span>
									<span className='font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Файловая система
									</span>
									<span className='font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Форматировать
									</span>
								</div>
							</div>
						</li>

						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Обновите платёжный модуль:</span>
								<div className='flex flex-wrap items-center gap-1.5'>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Обслуживание кассы
									</span>
									<span className='font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Эквайринг
									</span>
									<span className='font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Прошивка
									</span>
									<span className='font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Запрос на обновление
									</span>
								</div>
							</div>
						</li>

						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Проверьте версию эквайринга:</span>
								<div className='flex flex-wrap items-center gap-1.5'>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Настройки
									</span>
									<span className='font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Обслуживание кассы
									</span>
									<span className='font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Эквайринг
									</span>
									<span className=' font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Общая информация
									</span>
								</div>
							</div>
						</li>

						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Актуальные версии эквайринга:</span>
								<div className='flex flex-wrap items-center gap-2'>
									<span>520/521 —</span>
									<span className='border px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0'>
										1.8.4.1
									</span>
									<span>, 522 —</span>
									<span className='border px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0'>
										3.1.4.1
									</span>
								</div>
							</div>
						</li>

						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Скачайте</span>
								<a
									href='https://disk.yandex.ru/d/eB9BL5llaTbtcw'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:underline text-[#f15024] font-medium transition-colors duration-200 mx-1'
								>
									файл прошивки
								</a>
								<span>(актуальная версия —</span>
								<span className='border px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 ml-1'>
									4.9.11
								</span>
								<span>)</span>
							</div>
						</li>

						<li className='leading-7'>
							Подготовьте флешку FAT32 и запишите файл прошивки в корень
						</li>
						<li className='leading-7'>
							Выключите терминал, вставьте флешку и включите питание
						</li>

						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>На экране появится</span>
								<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200 mx-1'>
									Обновление системы
								</span>
								<span>— нажмите</span>
								<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200 ml-1'>
									Проверить и установить
								</span>
							</div>
						</li>

						<li className='leading-7'>
							Дождитесь завершения процесса (терминал перезагрузится
							автоматически)
						</li>
						<li className='leading-7'>После перезагрузки извлеките флешку</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Evotor5iContent
