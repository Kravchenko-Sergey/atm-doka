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
				<h2 className='section-title text-3xl font-bold mb-8 mt-8' id='1'>
					Актуальные версии
				</h2>

				<div className='overflow-x-auto whitespace-nowrap'>
					<table className='min-w-full'>
						<thead>
							<tr>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									Модель
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									МЭ
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									OC
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									EvoPP
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									UposNative
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									UPOS
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									520 и 521
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									1.8.4.1
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									4.9.11
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									2.1.8
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									1.105.63
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.43.06 (АН)
								</td>
							</tr>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									522
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									3.1.4.1
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									4.9.11
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									2.1.8
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									1.105.63
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.43.06 (АН)
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className='content-section'>
				<h2 className='section-title text-3xl font-bold mb-8 mt-8' id='2'>
					Прошивка
				</h2>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.1'>
						Что понадобится?
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Флешка, отформатированная в FAT32</li>
						<li>
							<a
								href='https://disk.yandex.ru/d/eB9BL5llaTbtcw'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#f15024]'
							>
								Файл прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Включите терминал и подключите к интернету</li>
						<li>
							Очистите файловую систему:
							<strong> Обслуживание кассы</strong> →
							<strong> Эквайринг/Эвотор.PAY</strong> →
							<strong> Файловая система</strong> →{' '}
							<strong> Форматировать</strong>
						</li>
						<li>
							Обновите платёжный модуль:
							<strong> Обслуживание кассы</strong> → <strong> Эквайринг</strong>{' '}
							→<strong> Прошивка</strong> →{' '}
							<strong> Запрос на обновление</strong>
						</li>
						<li>
							Проверьте версию эквайринга:
							<strong> Настройки</strong> → <strong> Обслуживание кассы</strong>{' '}
							→<strong> Эквайринг</strong> → <strong> Общая информация</strong>
						</li>
						<li>
							Актуальные версии эквайринга: 520/521 — <strong>1.8.4.1</strong>,
							522 — <strong>3.1.4.1</strong>
						</li>
						<li>
							Скачайте{' '}
							<a
								href='https://disk.yandex.ru/d/eB9BL5llaTbtcw'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#f15024]'
							>
								файл прошивки
							</a>{' '}
							(актуальная версия — <strong>4.9.11</strong>)
						</li>
						<li>Подготовьте флешку FAT32 и запишите файл прошивки в корень</li>
						<li>Выключите терминал, вставьте флешку и включите питание</li>
						<li>
							На экране появится <strong>Обновление системы</strong> — нажмите
							<strong> Проверить и установить</strong>
						</li>
						<li>
							Дождитесь завершения процесса (терминал перезагрузится
							автоматически)
						</li>
						<li>После перезагрузки извлеките флешку</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Evotor5iContent
