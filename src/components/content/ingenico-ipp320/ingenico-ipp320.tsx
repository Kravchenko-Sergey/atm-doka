import React from 'react'

interface IngenicoIPP320ContentProps {
	className?: string
}

const IngenicoIPP320Content: React.FC<IngenicoIPP320ContentProps> = ({
	className = ''
}) => {
	const tableHeaders = ['UPOS', 'Telium OS']

	const tableData = [
		{
			upos: '33.33.07 (АН)',
			teliumOS: '9.32\n9.32.3v'
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
									<td className='px-3 py-3 text-sm border border-gray-300 whitespace-pre-line'>
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
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/BbiiXdxjEfw_PA'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#41e747] font-medium transition-colors duration-200'
							>
								Программа LLT
							</a>
						</li>
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
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Запускаем программу</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									LLT
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажимаем</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									New Catalogue
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Если в нижней правой части экрана не отображается порт на котором
							висит терминал, то нужно установить драйвер.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Для того чтобы перейти в режим LLT одновременно зажимаем
									жёлтую кнопку и точку. Когда терминал начнёт перезагрузку,
									отпускаем эти кнопки и зажимаем
								</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									F1
								</span>
								<span>и держим. После того как на экране появится</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									*
								</span>
								<span>отпускаем</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									F1
								</span>
								<span>и быстро поочерёдно нажимаем</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									F2
								</span>
								<span>,</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									F3
								</span>
								<span>,</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 ml-1'>
									F4
								</span>
								<span>. На экране должна появиться надпись LLT.</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									В нижней правой части экрана дважды нажимаем на значок
									терминала. Выше должны появиться папки
								</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									HOST
								</span>
								<span>и</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 ml-1'>
									SWAP
								</span>
								<span>. Удаляем папку</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 ml-1'>
									HOST
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В левой части экрана в папке</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									FLASHCLEAN
								</span>
								<span>кликаем правой кнопкой мыши по файлу</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									IPP3XX_CLEAN
								</span>
								<span>. Нажимаем</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 ml-1'>
									download
								</span>
							</div>
						</li>
						<li className='leading-7'>
							После загрузки файлов в нижней правой части экрана дважды нажимаем
							на значок терминала и ждём. Терминал сам должен перезагрузиться.
							Дожидаемся появления надписи LLT на экране терминала.
						</li>
						<li className='leading-7'>
							На компьютере снова подключаем наше устройство двойным нажатием на
							значок терминала.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В правой части экрана выбираем файл ОС -</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									9_32_3V
								</span>
							</div>
						</li>
						<li className='leading-7'>
							После окончания загрузки в нижней правой части экрана снова дважды
							нажимаем на значок терминала чтобы отконнектиться. Ждём
							перезагрузки терминала.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									На терминале принимаем все пункты меню. Нажимаем зеленую
									кнопку до появления надписи
								</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									CHARGER UNE APPLICATION
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Перезагружаем терминал одновременным нажатием желтой кнопки и
							точки.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									После того как начнется перезагрузка, многократно нажимаем
									кнопку
								</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									F
								</span>
								<span>пока не появится системное меню.</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выбираем пункт -</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									Local Download
								</span>
								<span>. Терминал снова войдёт в режим LLT.</span>
							</div>
						</li>
						<li className='leading-7'>
							На компьютере снова приконнекчиваем терминал. Дважды нажимаем на
							значок терминала.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В левой части экрана выбираем файл</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									STEMPEL
								</span>
							</div>
						</li>
						<li className='leading-7'>
							После загрузки файла отконнекчиваем терминал двойным нажатием на
							значок.
						</li>
						<li className='leading-7'>Ждём пока терминал перезапустится.</li>
						<li className='leading-7'>
							Перезагружаем терминал вручную одновременным нажатием желтой
							кнопки и точки.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									После того как начнется перезагрузка, многократно нажимаем
									кнопку
								</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									F
								</span>
								<span>пока не появится системное меню.</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выбираем пункт -</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>
									Local Download
								</span>
								<span>. Терминал снова войдёт в режим LLT.</span>
							</div>
						</li>
						<li className='leading-7'>
							Снова приконнекчиваем терминал. Дважды нажимаем на значок
							терминала.
						</li>
						<li className='leading-7'>
							В левой части экрана находим папку с названием нашего терминала и
							выбираем нужную прошивку.
						</li>
						<li className='leading-7'>
							После окончания прошивки дважды нажимаем на значок. Ждём
							перезагрузки терминала.
						</li>
						<li className='leading-7'>Осталось дождаться загрузки UPOS.</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.3'>
						Видеоинструкция
					</h3>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/ingenico-ipp320-ipp350/video/IPP320-350.mp4'
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

export default IngenicoIPP320Content
