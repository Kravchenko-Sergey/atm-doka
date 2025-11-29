import React from 'react'

interface IngenicoIct220CTContentProps {
	className?: string
}

const IngenicoICT220Content: React.FC<IngenicoIct220CTContentProps> = ({
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
									UPOS
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									Telium OS
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									ICT2X0
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.18.03
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									9.32.3v
								</td>
							</tr>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									ICT2X0 + Kozen P10/P12
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.42.06 (АН)
									<br />
									(ОЭ) 34.00.04
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									9.32.3v
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
						<li>Флешка в формате FAT32</li>
						<li>
							<a
								href='https://disk.yandex.ru/d/-L6rGWh_bGYcog'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#41e747]'
							>
								Папка с файлами
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Включаем терминал.</li>
						<li>Присоединяем флешку.</li>
						<li>
							Одновременно нажимаем желтую кнопку и точку. Держим до
							перезагрузки.
						</li>
						<li>
							Зажимаем <strong>F4</strong>. На экране терминала должна появиться
							надпись <strong>USB MASS STORAGE</strong>.
						</li>
						<li>
							Ждём появления меню. Выбираем <strong>FLASHCLEAN</strong>.
						</li>
						<li>
							Ждём. На экране должна появиться надпись{' '}
							<strong>Software Activate OK</strong>. Терминал перезагрузится.
							После перезагрузки на экране должна появиться надпись{' '}
							<strong>LLT</strong>.
						</li>
						<li>
							Одновременно нажимаем желтую кнопку и точку. Держим до
							перезагрузки.
						</li>
						<li>
							Зажимаем <strong>F4</strong>. На экране терминала должна появиться
							надпись <strong>USB MASS STORAGE</strong>.
						</li>
						<li>
							Ждём появления меню. Выбираем файл ОС - <strong>9_32_3V</strong>.
						</li>
						<li>Дожидаемся загрузки файлов.</li>
						<li>
							Ждём. На экране должна появиться надпись{' '}
							<strong>Software Activate OK</strong>. Терминал перезагрузится.
						</li>
						<li>
							Одновременно нажимаем желтую кнопку и точку. Держим до
							перезагрузки.
						</li>
						<li>
							Зажимаем <strong>F4</strong>. На экране терминала должна появиться
							надпись <strong>USB MASS STORAGE</strong>.
						</li>
						<li>
							Ждём появления меню. Выбираем файл <strong>Stempel</strong>.
						</li>
						<li>Дожидаемся загрузки файлов.</li>
						<li>
							Ждём. На экране должна появиться надпись{' '}
							<strong>Software Activate OK</strong>. Терминал перезагрузится.
						</li>
						<li>
							Зажимаем <strong>F4</strong>. На экране терминала должна появиться
							надпись <strong>USB MASS STORAGE</strong>.
						</li>
						<li>
							Ждём появления меню. Выбираем файл с моделью нашего терминала.
						</li>
						<li>
							Ждём. На экране должна появиться надпись{' '}
							<strong>Software Activate OK</strong>. Терминал перезагрузится.
						</li>
						<li>Осталось дождаться загрузки UPOS.</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.3'>
						Видеоинструкция
					</h3>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/ingenico-ict220-ict250/video/ICT220-ICT250.mp4'
								type='video/mp4'
							/>
							Ваш браузер не поддерживает видео тег.
						</video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IngenicoICT220Content
