import { CopyLinkButton } from '@/components/shared/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface KozenP12ContentProps {
	className?: string
}

const KozenP12Content: React.FC<KozenP12ContentProps> = ({ className = '' }) => {
	useDelayedHashScroll()

	const tableHeaders = ['UPOS', 'Прошивка', 'Upos native', 'Виды оборудования к которому подключается']

	const tableData = [
		{
			upos: '34.00.04 (АН)\n(ОЭ) 34.02.02',
			firmware: '1.4.5\n (ОЭ)1.4.7',
			uposNative: '1.104.53',
			equipment: 'ИКР Атол Sigma\nТерминалы Эвотор (кроме банковских 5i)\nIngenico ICT 220, 250\nVerifone VX 520\nTactilion T2'
		}
	]

	return (
		<div className={className}>
			<div className='content-section'>
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='1'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>Актуальные версии</h2>
					<CopyLinkButton index='1' color='#EF4444' />
				</div>

				<div className='overflow-x-auto whitespace-nowrap'>
					<table className='min-w-full'>
						<thead>
							<tr>
								{tableHeaders.map(header => (
									<th key={header} className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{tableData.map((row, index) => (
								<tr key={index}>
									<td className='px-3 py-3 text-sm border border-gray-300 whitespace-pre-line'>{row.upos}</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.firmware}</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.uposNative}</td>
									<td className='px-3 py-3 text-sm border border-gray-300 whitespace-pre-line'>{row.equipment}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className='content-section'>
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='2'>
					<h2 className='section-title text-3xl md:text-3xl font-semibold md:font-bold'>Прошивка</h2>
					<CopyLinkButton index='2' color='#EF4444' />
				</div>

				<div className='subsection mb-8'>
					<div className='flex items-center justify-start gap-4 mb-6' id='2.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Что понадобится</h3>
						<CopyLinkButton index='2.1' color='#EF4444' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>
							<a href='https://disk.yandex.ru/d/rd08ougjIKg4Lg' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#EF4444] font-medium transition-colors duration-200'>
								Программа Flash Tool
							</a>
						</li>
						<li className='leading-7'>
							<a href='https://drive.google.com/uc?export=download&id=1vdlPr4kLPkLk7Jg3EbBnmJ-DhHh1pNZ7' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#EF4444] font-medium transition-colors duration-200'>
								Файлы прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Процесс прошивки</h3>
						<CopyLinkButton index='2.2' color='#EF4444' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Запустите программу Flash Tool</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В поле</span>
								<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Download-Agent</span>
								<span>укажите путь к соответствующему файлу</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В поле</span>
								<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Scatter-loading File</span>
								<span>укажите путь к scatter-файлу</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите режим</span>
								<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Firmware Upgrade</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите кнопку</span>
								<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Download</span>
							</div>
						</li>
						<li className='leading-7'>Подключите терминал к компьютеру</li>
						<li className='leading-7'>Дождитесь завершения процесса прошивки</li>
					</ul>
				</div>

				<div className='subsection'>
					<div className='flex items-center justify-start gap-4 mb-6' id='2.3'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Видеоинструкция</h3>
						<CopyLinkButton index='2.3' color='#EF4444' />
					</div>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source src='/content/kozen-p12/video/KOZEN.mp4' type='video/mp4' />
							Ваш браузер не поддерживает видео тег
						</video>
					</div>
				</div>
			</div>

			<div className='content-section'>
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='3'>
					<h2 className='section-title text-3xl md:text-3xl font-semibold md:font-bold'>Дефектовка</h2>
					<CopyLinkButton index='3' color='#EF4444' />
				</div>

				<div className='subsection mb-8'>
					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Включить терминал P12 с использованием комплектных кабелей</li>
						<li className='leading-7'>
							Открыть <span className='bg-[#EF4444] text-white px-1 rounded'>Настройки</span> и выбрать пункт <span className='bg-[#EF4444] text-white px-1 rounded'>Об устройстве</span>
						</li>
						<li className='leading-7'>
							Нажать несколько раз на строку <span className='bg-[#EF4444] text-white px-1 rounded'>Версия прошивки</span>
						</li>
						<li className='leading-7'>Открыть номеронабиратель</li>
						<li className='leading-7'>
							Набрать номер <span className='bg-[#EF4444] text-white px-1 rounded'>*#87#</span>
						</li>
						<li className='leading-7'>
							Выбрать <span className='bg-[#EF4444] text-white px-1 rounded'>MM1 TEST</span> и <span className='bg-[#EF4444] text-white px-1 rounded'>ManualTest</span>
						</li>
					</ul>

					<div className='mt-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.1'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Меню тестовой программы</h3>
							<CopyLinkButton index='3.1' color='#EF4444' />
						</div>

						<div className='subsection mb-8'>
							<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>IC Card</span> – проверка считывания чиповых карт
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>NFC TypeA 0 cm</span> – проверка считывания бесконтактных карт на расстоянии от экрана 0 см
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>NFC TypeA 5.9 cm</span> – проверка считывания бесконтактных карт на расстоянии от экрана 4 см
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>PinPad</span> – проверка работы PIN-пада
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>Small Battery</span> – проверка работы резервного элемента питания CR2320
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>Backlight</span> – проверка работы подсветки экрана
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>Color</span> – проверка отображения цветов
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>Button</span> – проверка работы кнопок
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>Proactive</span> – проверка работы автофокуса фотокамеры
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>Speaker</span> – проверка работы динамика
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>TouchScreen</span> – проверка работы сенсорного экрана
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>TwoPoints</span> – проверка считывания касаний
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>Bluetooth</span> – проверка работы Bluetooth
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>WIFI</span> – проверка работы Wi-Fi
								</li>
								<li className='leading-7'>
									<span className='bg-[#EF4444] text-white px-1 rounded'>SimCard</span> – проверка считывания SIM-карты
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='subsection'>
					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.2'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Чиповый ридер</h3>
							<CopyLinkButton index='3.2' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>IC Card</span>
									<span>нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Start</span>
								</div>
							</li>
							<li className='leading-7'>Вставить карту в считыватель и извлечь ее через 2 секунды</li>
							<li className='leading-7'>На экране должен отобразиться UID карты</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если на экране отображен UID карты, то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.3'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Модуль CTLS</h3>
							<CopyLinkButton index='3.3' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>NFC TypeA 0cm</span>
								</div>
							</li>
							<li className='leading-7'>Приложить бесконтактную карту к центру экрана терминала</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если на экране отображено слово</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>PASS</span>
									<span>то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>NFC TypeA 5.9cm</span>
								</div>
							</li>
							<li className='leading-7'>Поднести бесконтактную карту к центру экрана на расстоянии 4 см от него</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если на экране отображено слово</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>PASS</span>
									<span>то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.4'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>PIN-pad</h3>
							<CopyLinkButton index='3.4' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>PinPad</span>
									<span>нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>PIN</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Ввести PIN-код</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>123456</span>
									<span>и нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Enter</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если PIN-код введен корректно, то на экране терминала отобразится сообщение</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>VerifyResult PASS</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если на экране отобразилось сообщение</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>VerifyResult PASS</span>
									<span>то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.5'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Резервный элемент питания CR2320</h3>
							<CopyLinkButton index='3.5' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Small Battery</span>
									<span>и нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Start</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если на экране терминала отображается сообщение</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Small battery in place</span>
									<span>то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.6'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Подсветка экрана</h3>
							<CopyLinkButton index='3.6' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Backlight</span>
								</div>
							</li>
							<li className='leading-7'>Подсветка экрана несколько раз выключится и включится</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если подсветка экрана несколько раз выключилась и включилась, то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.7'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Отображение цветов</h3>
							<CopyLinkButton index='3.7' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Color</span>
									<span>и коснуться экрана</span>
								</div>
							</li>
							<li className='leading-7'>Будет отображен белый, красный, зеленый и синий цвета</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если на экране отсутствуют неработающие пиксели, то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.8'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Кнопки</h3>
							<CopyLinkButton index='3.8' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Button</span>
								</div>
							</li>
							<li className='leading-7'>
								Нажать на кнопку включения, кнопки <span className='bg-[#EF4444] text-white px-1 rounded'>Back</span>, <span className='bg-[#EF4444] text-white px-1 rounded'>Home</span> и <span className='bg-[#EF4444] text-white px-1 rounded'>Recent</span>
							</li>
							<li className='leading-7'>При успешном считывании всех нажатий проверка завершится автоматически</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.9'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Фотокамера</h3>
							<CopyLinkButton index='3.9' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Proactive</span>
									<span>и сделать фотографию</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если на экране отображается сообщение</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Autofocus succeeded!</span>
									<span>и изображение не содержит видимых искажений, то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.10'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Воспроизведение звука</h3>
							<CopyLinkButton index='3.10' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Speaker</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если проверочная мелодия воспроизведена, то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.11'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Считывание касаний</h3>
							<CopyLinkButton index='3.11' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>TouchScreen</span>
								</div>
							</li>
							<li className='leading-7'>Провести пальцем по периметру экрана и по его диагоналям</li>
							<li className='leading-7'>Если все касания экрана будут считаны в указанных областях, то проверка завершится автоматически</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.12'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Касания экрана в двух точках</h3>
							<CopyLinkButton index='3.12' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>TwoPoints</span>
									<span>и коснуться экрана в двух точках</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если одновременное касание экрана в двух точках считано (экран окрасится в зеленый цвет), то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.13'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Подключение к BT устройству</h3>
							<CopyLinkButton index='3.13' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Bluetooth</span>
								</div>
							</li>
							<li className='leading-7'>Запустить поиск устройств Bluetooth на смартфоне</li>
							<li className='leading-7'>Терминал P12 должен найти смартфон</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если терминал нашел BT устройство, то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.14'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Подключение к Wi-Fi сети</h3>
							<CopyLinkButton index='3.14' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>WIFI</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если терминал найдет SSID обеих сетей, то на экране отобразится слово</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>В этом случае нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mb-8'>
						<div className='flex items-center justify-start gap-4 mb-6' id='3.15'>
							<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Считывание SIM-карты</h3>
							<CopyLinkButton index='3.15' color='#EF4444' />
						</div>
						<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
							<li className='leading-7'>Установить SIM-карту в терминал (перезагрузка терминала не требуется)</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Запустить тест</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>SimCard</span>
								</div>
							</li>
							<li className='leading-7'>
								<div className='flex flex-wrap items-center gap-2 mt-1'>
									<span>Если терминал обнаружит SIM-карту и на экране отобразится сообщение</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>SIM1CardInserted</span>
									<span>то нажать на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Pass</span>
									<span>в противном случае – на кнопку</span>
									<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Fail</span>
								</div>
							</li>
						</ul>
					</div>

					<div className='mt-8 p-4 rounded-lg'>
						<div className='text-base font-medium'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Завершить проверку, нажав на кнопку</span>
								<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>Back</span>
								<span>и подтвердить выход из приложения для проверки терминала</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default KozenP12Content
