import { CopyLinkButton } from '@/components/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface VerifoneVx520ContentProps {
	className?: string
}

const VerifoneVx520Content: React.FC<VerifoneVx520ContentProps> = ({
	className = ''
}) => {
	useDelayedHashScroll()

	const tableHeaders = ['Модель', 'UPOS', 'OS Verix', 'EOS', 'VX-CTLS-2']

	const tableData = [
		{
			model: 'VX520',
			upos: '33.18.03',
			osVerix: 'QT00050',
			eos: '3.3.2.0',
			vxCtls: '01.30.02M6'
		},
		{
			model: 'VX520 + Kozen P10/P12',
			upos: '33.42.06 (АН)\n(ОЭ) 34.00.04',
			osVerix: 'QT00050',
			eos: '3.3.2.0',
			vxCtls: '01.30.02M6'
		}
	]

	return (
		<div className={className}>
			<div className='content-section'>
				{/* Контейнер с ID */}
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='1'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>
						Актуальные версии
					</h2>
					<CopyLinkButton index='1' color='#6effd2' />
				</div>

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
										{row.model}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300 whitespace-pre-line'>
										{row.upos}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.osVerix}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.eos}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.vxCtls}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className='content-section'>
				{/* Контейнер с ID */}
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='2'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>
						Прошивка
					</h2>
					<CopyLinkButton index='2' color='#6effd2' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Что понадобится?
						</h3>
						<CopyLinkButton index='2.1' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Флешка, отформатированная в FAT32</li>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/Ym5ZizF5xbCEHQ'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#6effd2] font-medium transition-colors duration-200'
							>
								Папка с файлами прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Процесс прошивки
						</h3>
						<CopyLinkButton index='2.2' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Включите терминал и подключите флешку</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Для входа в меню зажмите зелёную кнопку и цифру</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									7
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Введите пароль:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									1 alpha alpha 6 6 8 3 1
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Memory Function
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									Clear Mem
								</span>
							</div>
						</li>
						<li className='leading-7'>Повторно введите пароль</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Clear all Groups
								</span>
								<span>и подтвердите кнопкой</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									2
								</span>
							</div>
						</li>
						<li className='leading-7'>После очистки нажмите красную кнопку</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Restart
								</span>
								<span>для перезагрузки</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>При предложении загрузить все файлы выберите</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									NO
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите нужную прошивку и нажмите</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									YES
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Остальные шаги пропустите, нажимая</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									NO
								</span>
							</div>
						</li>
						<li className='leading-7'>Извлеките флешку по запросу системы</li>
						<li className='leading-7'>Нажмите зелёную кнопку</li>
						<li className='leading-7'>
							Дождитесь завершения прошивки и загрузки UPOS
						</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.3'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Видеоинструкция
						</h3>
						<CopyLinkButton index='2.3' color='#6effd2' />
					</div>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/verifone-vx520/video/VX520.mp4'
								type='video/mp4'
							/>
							Ваш браузер не поддерживает видео тег.
						</video>
					</div>
				</div>
			</div>

			<div className='content-section'>
				{/* Контейнер с ID */}
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='3'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>
						Дефектовка
					</h2>
					<CopyLinkButton index='3' color='#6effd2' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Магнитный ридер
						</h3>
						<CopyLinkButton index='3.1' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Terminal Info
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Diagnostics
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									Mag Card Diag
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Проведите карту — на всех дорожках должно отображаться
								</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									VALID
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Чиповый ридер
						</h3>
						<CopyLinkButton index='3.2' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Terminal Info
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Diagnostics
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Smart Card Diag
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									CHIP CARD DIAG
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									CUST SLOT DIAG
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Вставьте карту и нажмите</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									CUST SLOT DIAG
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Должны отображаться:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									POWER UP: PASSED
								</span>
								<span>и</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									GET ATR: PASSED
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.3'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Бесконтактный модуль
						</h3>
						<CopyLinkButton index='3.3' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Terminal Info
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Diagnostics
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Smart Card Diag
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									CONTACTLESS DIAG
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									TAP AND TEST
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Поднесите карту — должен отображаться</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									SW1_SW2=0x9000 card_type=1
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.4'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Клавиатура
						</h3>
						<CopyLinkButton index='3.4' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Terminal Info
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Diagnostics
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									Keybord Diag
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Проверьте все клавиши — значения должны отображаться на экране
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.5'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Принтер
						</h3>
						<CopyLinkButton index='3.5' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Terminal Info
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Diagnostics
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									Printer Diag
								</span>
							</div>
						</li>
						<li className='leading-7'>Должен распечататься тестовый чек</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.6'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							GPRS
						</h3>
						<CopyLinkButton index='3.6' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Download
								</span>
								<span>→ введите пароль →</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Multi-app
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Partial dnld
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									TCPIP
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите красную кнопку и выберите:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Control Panel
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Tools
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Network Maint
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									GPRS
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									Network Start GPRS
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Должен отображаться статус</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Connected
								</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.7'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Ethernet
						</h3>
						<CopyLinkButton index='3.7' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Download
								</span>
								<span>→ введите пароль →</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Multi-app
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Partial dnld
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									TCPIP
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите красную кнопку и выберите:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Control Panel
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Tools
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Network Maint
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Ethernet
								</span>
								<span>→</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									Network Start
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Должен отображаться статус</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Connected
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default VerifoneVx520Content
