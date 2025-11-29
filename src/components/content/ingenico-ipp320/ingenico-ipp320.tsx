import React from 'react'

interface IngenicoIPP320ContentProps {
	className?: string
}

const IngenicoIPP320Content: React.FC<IngenicoIPP320ContentProps> = ({
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
									33.33.07 (АН)
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									9.32
									<br />
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
						<li>
							<a
								href='https://disk.yandex.ru/d/BbiiXdxjEfw_PA'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#41e747]'
							>
								Программа LLT
							</a>
						</li>
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
						<li>
							Запускаем программу <strong>LLT</strong>
						</li>
						<li>
							Нажимаем <strong>New Catalogue</strong>
						</li>
						<li>
							Если в нижней правой части экрана не отображается порт на котором
							висит терминал, то нужно установить драйвер.
						</li>
						<li>
							Для того чтобы перейти в режим LLT одновременно зажимаем жёлтую
							кнопку и точку. Когда терминал начнёт перезагрузку, отпускаем эти
							кнопки и зажимаем <strong>F1</strong> и держим. После того как на
							экране появится <strong>*</strong> отпускаем <strong>F1</strong> и
							быстро поочерёдно нажимаем <strong>F2</strong>,{' '}
							<strong>F3</strong>, <strong>F4</strong>. На экране должна
							появиться надпись LLT.
						</li>
						<li>
							В нижней правой части экрана дважды нажимаем на значок терминала.
							Выше должны появиться папки <strong>HOST</strong> и{' '}
							<strong>SWAP</strong>. Удаляем папку <strong>HOST</strong>.
						</li>
						<li>
							В левой части экрана в папке <strong>FLASHCLEAN</strong> кликаем
							правой кнопкой мыши по файлу <strong>IPP3XX_CLEAN</strong>.
							Нажимаем <strong>download</strong>.
						</li>
						<li>
							После загрузки файлов в нижней правой части экрана дважды нажимаем
							на значок терминала и ждём. Терминал сам должен перезагрузиться.
							Дожидаемся появления надписи LLT на экране терминала.
						</li>
						<li>
							На компьютере снова подключаем наше устройство двойным нажатием на
							значок терминала.
						</li>
						<li>
							В правой части экрана выбираем файл ОС - <strong>9_32_3V</strong>.
						</li>
						<li>
							После окончания загрузки в нижней правой части экрана снова дважды
							нажимаем на значок терминала чтобы отконнектиться. Ждём
							перезагрузки терминала.
						</li>
						<li>
							На терминале принимаем все пункты меню. Нажимаем зеленую кнопку до
							появления надписи <strong>CHARGER UNE APPLICATION</strong>.
						</li>
						<li>
							Перезагружаем терминал одновременным нажатием желтой кнопки и
							точки.
						</li>
						<li>
							После того как начнется перезагрузка, многократно нажимаем кнопку{' '}
							<strong>F</strong> пока не появится системное меню.
						</li>
						<li>
							Выбираем пункт - <strong>Local Download</strong>. Терминал снова
							войдёт в режим LLT.
						</li>
						<li>
							На компьютере снова приконнекчиваем терминал. Дважды нажимаем на
							значок терминала.
						</li>
						<li>
							В левой части экрана выбираем файл <strong>STEMPEL</strong>.
						</li>
						<li>
							После загрузки файла отконнекчиваем терминал двойным нажатием на
							значок.
						</li>
						<li>Ждём пока терминал перезапустится.</li>
						<li>
							Перезагружаем терминал вручную одновременным нажатием желтой
							кнопки и точки.
						</li>
						<li>
							После того как начнется перезагрузка, многократно нажимаем кнопку{' '}
							<strong>F</strong> пока не появится системное меню.
						</li>
						<li>
							Выбираем пункт - <strong>Local Download</strong>. Терминал снова
							войдёт в режим LLT.
						</li>
						<li>
							Снова приконнекчиваем терминал. Дважды нажимаем на значок
							терминала.
						</li>
						<li>
							В левой части экрана находим папку с названием нашего терминала и
							выбираем нужную прошивку.
						</li>
						<li>
							После окончания прошивки дважды нажимаем на значок. Ждём
							перезагрузки терминала.
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
