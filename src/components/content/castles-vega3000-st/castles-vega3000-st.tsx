import React from 'react'

interface CastlesVega3000ContentProps {
	className?: string
}

const CastlesVega3000Content: React.FC<CastlesVega3000ContentProps> = ({
	className = ''
}) => {
	const tableHeaders = ['UPOS', 'OS']

	const tableData = [
		{
			upos: '33.33.07 (АН)',
			os: 'VR0028-201'
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
										{row.os}
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
						<li className='leading-7'>Флешка в формате FAT32</li>
						<li className='leading-7'>Переходник USB мама - mini USB папа</li>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/MS548Ff0grXoUw'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#704ecc] font-medium transition-colors duration-200'
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
								<span>Подключаем флешку с помощью переходника к порту</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>
									USB1
								</span>
								<span>на задней стороне терминала.</span>
							</div>
						</li>
						<li className='leading-7'>
							Включаем терминал и многократно нажимаем на красную кнопку, пока
							не появится системное меню.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Удаляем старый UPOS - кнопка</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>
									2
								</span>
							</div>
						</li>
						<li className='leading-7'>Подтверждаем удаление.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажимаем</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>
									0
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В появившемся меню выбираем пункт 1 -</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>
									Download AP
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Далее выбираем пункт 2 -</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>
									USB Disk
								</span>
							</div>
						</li>
						<li className='leading-7'>
							После завершения прошивки нажимаем любую кнопку.
						</li>
						<li className='leading-7'>Дважды нажимаем красную кнопку.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>На экране должна появиться надпись</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>
									[Default Select]
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Если её нет, нажимаем</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>
									1
								</span>
							</div>
						</li>
						<li className='leading-7'>Нажимаем зелёную кнопку.</li>
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
								src='/content/castles-vega3000/video/Vega3000 GPRS-ETH.mp4'
								type='video/mp4'
							/>
							Ваш браузер не поддерживает видео тег.
						</video>
					</div>
				</div>
			</div>

			<div className='content-section'>
				<h2 className='section-title text-3xl font-bold mb-8 mt-8' id='3'>
					Дефектовка
				</h2>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='3.1'>
						Внешний вид
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							Проверяем наличие посторонних предметов в чип-ридере, магнитном
							ридере, наличие на корпусе терминала\пинпада различных субстанций
							грязи, сколы, трещины.
						</li>
						<li className='leading-7'>
							Проверяем визуально исправность контактов SIM-модуля и
							Ethernet-разъема и т.д.
						</li>
						<li className='leading-7'>
							Субъективно определяем товарный вид терминала.
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='3.2'>
						Включение
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Проверяем терминал на включение</li>
						<li className='leading-7'>
							Включаем терминал и нажимаем на красную клавишу (Х) (часто и
							отрывисто) пока не появится Program Manager
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='3.3'>
						Магнитный ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Нажимаем «0»</li>
						<li className='leading-7'>Нажимаем «5» TEST utility.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Нажимаем «6» (MSR Test) и терминал нас попросит провести
									карточкой.
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Далее, медленно проводим картой, видим значения с магнитной полосы
							(Track 1, Track 2, Track 3) и терминал предлагает нажать любую
							клавишу, значит магнитный ридер исправен.
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='3.4'>
						Чиповый ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Нажимаем «0»</li>
						<li className='leading-7'>Нажимаем «5» TEST utility.</li>
						<li className='leading-7'>Нажимаем «4» smart card</li>
						<li className='leading-7'>Вставляем карту и нажимаем «1» ICC</li>
						<li className='leading-7'>
							Если чип исправен пишет «test ok», если нет, то «Test Fail!!»
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='3.5'>
						Бесконтактный ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Нажимаем «0»</li>
						<li className='leading-7'>Нажимаем «5» TEST utility.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Выбираем «12» и Ок→ далее терминал включит CTLS и выйдет в
									тестовый режим, выбираем «2» Type A
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Прикладываем карточку, каждый раз, когда прикладываешь
							бесконтактную карту и услышим писк, значит бесконтактный модуль
							исправен.
						</li>
						<li className='leading-7'>
							Нажимаем на красную и выходим обратно в main menu.
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='3.6'>
						Принтер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Нажимаем «0»</li>
						<li className='leading-7'>Нажимаем «5» TEST utility.</li>
						<li className='leading-7'>Нажимаем «9» и ОК</li>
						<li className='leading-7'>Нажимаем «5»</li>
						<li className='leading-7'>
							Должна произвестись печать информационного чека.
						</li>
						<li className='leading-7'>
							Если не этого не произошло. попробуйте перевернуть рулон чековой
							ленты или вставить новый.
						</li>
						<li className='leading-7'>
							Если текст так и не появился, то термопринтер неисправен.
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='3.7'>
						Клавиатура и динамик
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Нажимаем «0»</li>
						<li className='leading-7'>Нажимаем «5» TEST utility.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Для проверки клавиатуры и динамика нажимаем «2» и «Enter» и
									нажимаем все клавиши, которые работают будут пропадать.
								</span>
							</div>
						</li>
						<li className='leading-7'>
							После того как все клавиши нажаты вы услышите писк – это тест
							звукового сигнала, на экране будет написано Buzzer Test. Нажимаем
							любую клавишу…
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='3.8'>
						LCD
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Нажимаем «0»</li>
						<li className='leading-7'>Нажимаем «5» TEST utility.</li>
						<li className='leading-7'>
							Нажимаем «1» и проводим проверку дисплея.
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='3.9'>
						Светодиоды
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Нажимаем «0»</li>
						<li className='leading-7'>Нажимаем «5» TEST utility.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Проверка индикаторов нажимаем «7» и ок, далее несколько раз
									подряд нажимаем на клавишу «3» и наблюдаем работу светодиодов.
									По прошествии необходимого времени нажать зелёную или красную
									клавишу.
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3
						className='subsection-title text-2xl font-semibold mb-6'
						id='3.10'
					>
						USB
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							Подключить терминал к ноутбуку и убедиться, что терминал
							определяется в диспетчере устройств.
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3
						className='subsection-title text-2xl font-semibold mb-6'
						id='3.11'
					>
						GPRS
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Наличие СИМ карты не требуется.</li>
						<li className='leading-7'>
							Включаем терминал и нажимаем на красную клавишу (Х) (часто и
							отрывисто) пока не появится Program Manager.
						</li>
						<li className='leading-7'>Нажимаем кнопку 0</li>
						<li className='leading-7'>Нажимаем кнопку 5</li>
						<li className='leading-7'>Далее вводим 16 и нажимаем OK.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Нажимаем кнопку 7, если появляется надпись: Select APN:
								</span>
							</div>
							<div className='mt-2 ml-4'>
								<div>1.Internet</div>
								<div>2.Cmnet</div>
								<div>3.Ctnet</div>
								<div>4.User Input</div>
							</div>
						</li>
						<li className='leading-7'>
							Тогда все хорошо и модуль GPRS есть в наличии и терминал точно
							будет работать с СИМ картой.
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Если появляется надпись</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>
									GPRS not supported
								</span>
								<span>– то оборудование не поддерживает GPRS модуль.</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3
						className='subsection-title text-2xl font-semibold mb-6'
						id='3.12'
					>
						Чтение sim
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Вставить в терминал сим-карту.</li>
						<li className='leading-7'>
							Включаем терминал и нажимаем на красную клавишу (Х) (часто и
							отрывисто) пока не появится Program Manager.
						</li>
						<li className='leading-7'>Нажимаем кнопку 0</li>
						<li className='leading-7'>Нажимаем кнопку 5</li>
						<li className='leading-7'>Далее вводим 16 и нажимаем OK.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажимаем кнопку 7, если появляется надпись:</span>
							</div>
							<div className='mt-2 ml-4'>
								<div>Select APN:</div>
								<div>1.Internet</div>
								<div>2.Cmnet</div>
								<div>3.Ctnet</div>
								<div>4.User Input</div>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выбираем пункт «1» будет написано</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>
									SIM1 «Ready»
								</span>
								<span>или</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 ml-1'>
									«Not Ready»
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<h3
						className='subsection-title text-2xl font-semibold mb-6'
						id='3.13'
					>
						WI-FI
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							Включаем терминал и нажимаем на красную клавишу (Х) (часто и
							отрывисто) пока не появится Program Manager.
						</li>
						<li className='leading-7'>Нажимаем кнопку 0</li>
						<li className='leading-7'>Нажимаем кнопку 5</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									«14» пункт – WiFi TEST (для терминалов, в которых есть WiFi),
									выбираем «1» пункт WIFI Test, он сканирует и выдаёт список
									сетей, значит всё хорошо нажимаем красную клавишу и выходим в
									Main Menu.
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3
						className='subsection-title text-2xl font-semibold mb-6'
						id='3.14'
					>
						Ethernet
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Визуальный осмотр разъёма.</li>
						<li className='leading-7'>
							Подключить терминал с помощью патчкорда к ноутбуку.
						</li>
						<li className='leading-7'>Зайти в сетевые подключения ноутбука.</li>
						<li className='leading-7'>
							При исправном разъёме Ethernet в сетевых подключениях ноутбука
							отобразится подключенная сеть:
						</li>
						<li className='leading-7'>
							Если сетевое подключение не меняется (сетевой кабель не
							подключен), то ноутбук терминал не определяет, следовательно
							Ethernet-разъём неисправен.
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default CastlesVega3000Content
