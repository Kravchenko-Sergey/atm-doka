import React from 'react'

interface PaxS200ContentProps {
	className?: string
}

const PaxS200Content: React.FC<PaxS200ContentProps> = ({ className = '' }) => {
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
									OS Monitor+
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									S200 PCI PED 3
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.33.07
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									3.12 (любые 3.1Х)
								</td>
							</tr>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									S200 PCI PED 5
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.33.07
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									5.0X
								</td>
							</tr>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									VX520 + S200
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.18.03
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									3.12 (любые 3.1Х)
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
						<li>
							<a
								href='https://disk.yandex.ru/d/qf8P-Mc4FOyUcQ'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1]'
							>
								Программа PC Loader
							</a>
						</li>
						<li>Переходник для подключения</li>
						<li>Файл прошивки для соответствующей модели</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Подключите терминал к компьютеру</li>
						<li>
							При включении многократно нажимайте кнопку <strong>F1</strong>
						</li>
						<li>После появления меню нажмите красную кнопку</li>
						<li>
							Запустите программу <strong>PC Loader</strong> на компьютере
						</li>
						<li>
							Перейдите в раздел <strong>Setting</strong>
						</li>
						<li>
							В поле <strong>Serial Port</strong> выберите COM-порт терминала
						</li>
						<li>
							Перейдите в раздел <strong>Application</strong>
						</li>
						<li>Укажите путь к файлу прошивки</li>
						<li>
							Нажмите <strong>APP Info</strong> и затем <strong>Refresh</strong>
						</li>
						<li>
							Удалите все найденные файлы кнопкой <strong>Delete</strong>
						</li>
						<li>
							Нажмите <strong>Download</strong> для начала прошивки
						</li>
						<li>Дождитесь завершения процесса</li>
						<li>Нажмите красную кнопку на терминале</li>
						<li>Дождитесь загрузки UPOS</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.3'>
						Видеоинструкция
					</h3>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/pax-s200/video/PAX S200.mp4'
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

export default PaxS200Content
