import React from 'react'

interface IngenicoIWL220ContentProps {
	className?: string
}

const IngenicoIWL220Content: React.FC<IngenicoIWL220ContentProps> = ({
	className = ''
}) => {
	const tableHeaders = ['UPOS', 'Telium OS']

	const tableData = [
		{
			upos: '33.18.03 (АН)',
			teliumOS: '9.32.3v'
		}
	]

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
								{tableHeaders.map((header) => (
									<th
										key={header}
										className='px-2 py-2 text-left text-sm font-medium border border-gray-300'
									>
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{tableData.map((row, index) => (
								<tr key={index}>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.upos}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.teliumOS}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className='content-section'>
				<h2 className='section-title text-3xl font-bold mb-8 mt-8' id='2'>
					Прошивка
				</h2>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.1'>
						Что понадобится?
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Переходник USB мама - mini USB папа</li>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/-L6rGWh_bGYcog'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#41e747] font-medium transition-colors duration-200'
							>
								Папка с файлами
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							Подключаем флешку с помощью переходника.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Включаем терминал нажатием на зелёную кнопку и сразу же
									зажимаем
								</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									F4
								</span>
								<span>. Должна появиться надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 ml-1'>
									USB MASS STORAGE
								</span>
							</div>
						</li>
						<li className='leading-7'>Дожидаемся появления меню.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выбираем пункт</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									FLASHCLEAN
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Ждём очистки и перезагрузки терминала.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>После того как на экране появится надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									LLT
								</span>
								<span>
									, одновременно зажимаем жёлтую кнопку и точку. Терминал
									выключится.
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Включаем терминал нажатием на зелёную кнопку.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В меню выбираем пункт</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									9_32_3V
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Ждём установки файлов и перезагрузки терминала.
						</li>
						<li className='leading-7'>
							После перезагрузки терминала одновременно зажимаем жёлтую кнопку и
							точку. Терминал выключится.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Включаем терминал нажатием на зелёную кнопку и сразу же
									зажимаем
								</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									F4
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В меню выбираем файл</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									Stempel
								</span>
							</div>
						</li>
						<li className='leading-7'>
							После перезагрузки терминала одновременно зажимаем жёлтую кнопку и
							точку. Терминал выключится.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Включаем терминал нажатием на зелёную кнопку и сразу же
									зажимаем
								</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									F4
								</span>
							</div>
						</li>
						<li className='leading-7'>
							В меню выбираем файл с названием модели нашего устройства.
						</li>
						<li className='leading-7'>
							После того как терминал перезагрузится, останется дождаться
							загрузки UPOS.
						</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.3'>
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
