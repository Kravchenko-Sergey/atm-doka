import React from 'react'

interface CastlesVega3000ContentProps {
	className?: string
}

const CastlesVega3000Content: React.FC<CastlesVega3000ContentProps> = ({
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
									OS
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.33.07 (АН)
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									VR0028-201
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
						<li>Переходник USB мама - mini USB папа</li>
						<li>
							<a
								href='https://disk.yandex.ru/d/MS548Ff0grXoUw'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#704ecc]'
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
							Подключаем флешку с помощью переходника к порту{' '}
							<strong>USB1</strong> на задней стороне терминала.
						</li>
						<li>
							Включаем терминал и многократно нажимаем на красную кнопку, пока
							не появится системное меню.
						</li>
						<li>
							Удаляем старый UPOS - кнопка <strong>2</strong>.
						</li>
						<li>Подтверждаем удаление.</li>
						<li>
							Нажимаем <strong>0</strong>.
						</li>
						<li>
							В появившемся меню выбираем пункт 1 - <strong>Download AP</strong>
							.
						</li>
						<li>
							Далее выбираем пункт 2 - <strong>USB Disk</strong>.
						</li>
						<li>После завершения прошивки нажимаем любую кнопку.</li>
						<li>Дважды нажимаем красную кнопку.</li>
						<li>
							На экране должна появиться надпись{' '}
							<strong>[Default Select]</strong>.
						</li>
						<li>
							Если её нет, нажимаем <strong>1</strong>.
						</li>
						<li>Нажимаем зелёную кнопку.</li>
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

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.1'>
						Внешний вид
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Проверяем наличие посторонних предметов в чип-ридере, магнитном
							ридере, наличие на корпусе терминала\пинпада различных субстанций
							грязи, сколы, трещины.
						</li>
						<li>
							Проверяем визуально исправность контактов SIM-модуля и
							Ethernet-разъема и т.д.
						</li>
						<li>Субъективно определяем товарный вид терминала.</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.2'>
						Включение
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Проверяем терминал на включение</li>
						<li>
							Включаем терминал и нажимаем на красную клавишу (Х) (часто и
							отрывисто) пока не появится Program Manager
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.3'>
						Магнитный ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Нажимаем «0»</li>
						<li>Нажимаем «5» TEST utility.</li>
						<li>
							Нажимаем «6» (MSR Test) и терминал нас попросит провести
							карточкой.
						</li>
						<li>
							Далее, медленно проводим картой, видим значения с магнитной полосы
							(Track 1, Track 2, Track 3) и терминал предлагает нажать любую
							клавишу, значит магнитный ридер исправен.
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.4'>
						Чиповый ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Нажимаем «0»</li>
						<li>Нажимаем «5» TEST utility.</li>
						<li>Нажимаем «4» smart card</li>
						<li>Вставляем карту и нажимаем «1» ICC</li>
						<li>
							Если чип исправен пишет «test ok», если нет, то «Test Fail!!»
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.5'>
						Бесконтактный ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Нажимаем «0»</li>
						<li>Нажимаем «5» TEST utility.</li>
						<li>
							Выбираем «12» и Ок→ далее терминал включит CTLS и выйдет в
							тестовый режим, выбираем «2» Type A
						</li>
						<li>
							Прикладываем карточку, каждый раз, когда прикладываешь
							бесконтактную карту и услышим писк, значит бесконтактный модуль
							исправен.
						</li>
						<li>Нажимаем на красную и выходим обратно в main menu.</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.6'>
						Принтер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Нажимаем «0»</li>
						<li>Нажимаем «5» TEST utility.</li>
						<li>Нажимаем «9» и ОК</li>
						<li>Нажимаем «5»</li>
						<li>Должна произвестись печать информационного чека.</li>
						<li>
							Если не этого не произошло. попробуйте перевернуть рулон чековой
							ленты или вставить новый.
						</li>
						<li>Если текст так и не появился, то термопринтер неисправен.</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.7'>
						Клавиатура и динамик
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Нажимаем «0»</li>
						<li>Нажимаем «5» TEST utility.</li>
						<li>
							Для проверки клавиатуры и динамика нажимаем «2» и «Enter» и
							нажимаем все клавиши, которые работают будут пропадать.
						</li>
						<li>
							После того как все клавиши нажаты вы услышите писк – это тест
							звукового сигнала, на экране будет написано Buzzer Test. Нажимаем
							любую клавишу…
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.8'>
						LCD
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Нажимаем «0»</li>
						<li>Нажимаем «5» TEST utility.</li>
						<li>Нажимаем «1» и проводим проверку дисплея.</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.9'>
						Светодиоды
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Нажимаем «0»</li>
						<li>Нажимаем «5» TEST utility.</li>
						<li>
							Проверка индикаторов нажимаем «7» и ок, далее несколько раз подряд
							нажимаем на клавишу «3» и наблюдаем работу светодиодов. По
							прошествии необходимого времени нажать зелёную или красную
							клавишу.
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3
						className='subsection-title text-2xl font-semibold mb-4'
						id='3.10'
					>
						USB
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Подключить терминал к ноутбуку и убедиться, что терминал
							определяется в диспетчере устройств.
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3
						className='subsection-title text-2xl font-semibold mb-4'
						id='3.11'
					>
						GPRS
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Наличие СИМ карты не требуется.</li>
						<li>
							Включаем терминал и нажимаем на красную клавишу (Х) (часто и
							отрывисто) пока не появится Program Manager.
						</li>
						<li>Нажимаем кнопку 0</li>
						<li>Нажимаем кнопку 5</li>
						<li>Далее вводим 16 и нажимаем OK.</li>
						<li>
							Нажимаем кнопку 7, если появляется надпись: Select APN:
							<br />
							1.Internet
							<br />
							2.Cmnet
							<br />
							3.Ctnet
							<br />
							4.User Input
						</li>
						<li>
							Тогда все хорошо и модуль GPRS есть в наличии и терминал точно
							будет работать с СИМ картой.
						</li>
						<li>
							Если появляется надпись GPRS not supported – то оборудование не
							поддерживает GPRS модуль.
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3
						className='subsection-title text-2xl font-semibold mb-4'
						id='3.12'
					>
						Чтение sim
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Вставить в терминал сим-карту.</li>
						<li>
							Включаем терминал и нажимаем на красную клавишу (Х) (часто и
							отрывисто) пока не появится Program Manager.
						</li>
						<li>Нажимаем кнопку 0</li>
						<li>Нажимаем кнопку 5</li>
						<li>Далее вводим 16 и нажимаем OK.</li>
						<li>
							Нажимаем кнопку 7, если появляется надпись:
							<br />
							Select APN:
							<br />
							1.Internet
							<br />
							2.Cmnet
							<br />
							3.Ctnet
							<br />
							4.User Input
						</li>
						<li>
							Выбираем пункт «1» будет написано SIM1 «Ready» или «Not Ready»
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3
						className='subsection-title text-2xl font-semibold mb-4'
						id='3.13'
					>
						WI-FI
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Включаем терминал и нажимаем на красную клавишу (Х) (часто и
							отрывисто) пока не появится Program Manager.
						</li>
						<li>Нажимаем кнопку 0</li>
						<li>Нажимаем кнопку 5</li>
						<li>
							«14» пункт – WiFi TEST (для терминалов, в которых есть WiFi),
							выбираем «1» пункт WIFI Test, он сканирует и выдаёт список сетей,
							значит всё хорошо нажимаем красную клавишу и выходим в Main Menu.
						</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3
						className='subsection-title text-2xl font-semibold mb-4'
						id='3.14'
					>
						Ethernet
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Визуальный осмотр разъёма.</li>
						<li>Подключить терминал с помощью патчкорда к ноутбуку.</li>
						<li>Зайти в сетевые подключения ноутбука.</li>
						<li>
							При исправном разъёме Ethernet в сетевых подключениях ноутбука
							отобразится подключенная сеть:
						</li>
						<li>
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
