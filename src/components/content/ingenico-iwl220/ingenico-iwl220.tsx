import React from 'react'

interface IngenicoIWL220ContentProps {
	className?: string
}

const IngenicoIWL220Content: React.FC<IngenicoIWL220ContentProps> = ({
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
									33.18.03 (АН)
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
						<li>Переходник USB мама - mini USB папа</li>
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
						<li>Подключаем флешку с помощью переходника.</li>
						<li>
							Включаем терминал нажатием на зелёную кнопку и сразу же зажимаем{' '}
							<strong>F4</strong>. Должна появиться надпись{' '}
							<strong>USB MASS STORAGE</strong>.
						</li>
						<li>Дожидаемся появления меню.</li>
						<li>
							Выбираем пункт <strong>FLASHCLEAN</strong>.
						</li>
						<li>Ждём очистки и перезагрузки терминала.</li>
						<li>
							После того как на экране появится надпись <strong>LLT</strong>,
							одновременно зажимаем жёлтую кнопку и точку. Терминал выключится.
						</li>
						<li>Включаем терминал нажатием на зелёную кнопку.</li>
						<li>
							В меню выбираем пункт <strong>9_32_3V</strong>.
						</li>
						<li>Ждём установки файлов и перезагрузки терминала.</li>
						<li>
							После перезагрузки терминала одновременно зажимаем жёлтую кнопку и
							точку. Терминал выключится.
						</li>
						<li>
							Включаем терминал нажатием на зелёную кнопку и сразу же зажимаем{' '}
							<strong>F4</strong>.
						</li>
						<li>
							В меню выбираем файл <strong>Stempel</strong>.
						</li>
						<li>
							После перезагрузки терминала одновременно зажимаем жёлтую кнопку и
							точку. Терминал выключится.
						</li>
						<li>
							Включаем терминал нажатием на зелёную кнопку и сразу же зажимаем{' '}
							<strong>F4</strong>.
						</li>
						<li>В меню выбираем файл с названием модели нашего устройства.</li>
						<li>
							После того как терминал перезагрузится, останется дождаться
							загрузки UPOS.
						</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.3'>
						Видеоинструкция
					</h3>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/ingenico-iwl220-iwl250/video/IWL220-IWL250.mp4'
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

export default IngenicoIWL220Content
