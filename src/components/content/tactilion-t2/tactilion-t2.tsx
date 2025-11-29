import React from 'react'

interface TactilionT2ContentProps {
	className?: string
}

const TactilionT2Content: React.FC<TactilionT2ContentProps> = ({
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
									OS
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>T2</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.18.03 (АН)
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									04_190408
								</td>
							</tr>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									T2 + Kozen P10/P12
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.42.06 (АН)
									<br />
									(ОЭ) 34.00.04
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									04_190408
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
								href='https://disk.yandex.ru/d/wlh2zYSls2s77g'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#ffd829]'
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
						<li>Подключаем флешку к терминалу.</li>
						<li>Нажимаем на кнопку включения.</li>
						<li>
							После того как терминал издаст звуковой сигнал, быстро зажимаем
							клавиши <strong>F</strong> и <strong>1</strong>. Держим, пока не
							появится системное меню.
						</li>
						<li>
							Для начала очищаем терминал. Выбираем пункт 4 -{' '}
							<strong>Clear APPs</strong>.
						</li>
						<li>
							Вводим пароль - <strong>83890345</strong>.
						</li>
						<li>Подтверждаем нажатием на зелёную кнопку.</li>
						<li>
							В меню выбираем пункт 3 - <strong>U disk download</strong>.
						</li>
						<li>
							После завершения прошивки дважды нажимаем кнопку назад и один раз
							зелёную кнопку.
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
								src='/content/tactilion-t2/video/TACTILION T2.mp4'
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

export default TactilionT2Content
