import React from 'react'

interface VerifoneVx520ContentProps {
	className?: string
}

const VerifoneVx520Content: React.FC<VerifoneVx520ContentProps> = ({
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
									OS Verix
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									EOS
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									VX-CTLS-2
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									VX520
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.18.03
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									QT00050
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									3.3.2.0
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									01.30.02M6
								</td>
							</tr>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									VX520 + Kozen P10/P12
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.42.06 (АН)
									<br />
									(ОЭ) 34.00.04
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									QT00050
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									3.3.2.0
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									01.30.02M6
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
						<li>Флешка, отформатированная в FAT32</li>
						<li>
							<a
								href='https://disk.yandex.ru/d/Ym5ZizF5xbCEHQ'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#6effd2]'
							>
								Папка с файлами прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Включите терминал и подключите флешку</li>
						<li>
							Для входа в меню зажмите зелёную кнопку и цифру <strong>7</strong>
						</li>
						<li>
							Введите пароль: <strong>1 alpha alpha 6 6 8 3 1</strong>
						</li>
						<li>
							Выберите: <strong>Memory Function</strong> →{' '}
							<strong>Clear Mem</strong>
						</li>
						<li>Повторно введите пароль</li>
						<li>
							Выберите <strong>Clear all Groups</strong> и подтвердите кнопкой{' '}
							<strong>2</strong>
						</li>
						<li>После очистки нажмите красную кнопку</li>
						<li>
							Выберите <strong>Restart</strong> для перезагрузки
						</li>
						<li>
							При предложении загрузить все файлы выберите <strong>NO</strong>
						</li>
						<li>
							Выберите нужную прошивку и нажмите <strong>YES</strong>
						</li>
						<li>
							Остальные шаги пропустите, нажимая <strong>NO</strong>
						</li>
						<li>Извлеките флешку по запросу системы</li>
						<li>Нажмите зелёную кнопку</li>
						<li>Дождитесь завершения прошивки и загрузки UPOS</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.3'>
						Видеоинструкция
					</h3>
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
				<h2 className='section-title text-3xl font-bold mb-8 mt-8' id='3'>
					Дефектовка
				</h2>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.1'>
						Магнитный ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Выберите: <strong>Terminal Info</strong> →{' '}
							<strong>Diagnostics</strong> → <strong>Mag Card Diag</strong>
						</li>
						<li>
							Проведите карту — на всех дорожках должно отображаться{' '}
							<strong>VALID</strong>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.2'>
						Чиповый ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Выберите: <strong>Terminal Info</strong> →{' '}
							<strong>Diagnostics</strong> → <strong>Smart Card Diag</strong> →{' '}
							<strong>CHIP CARD DIAG</strong> → <strong>CUST SLOT DIAG</strong>
						</li>
						<li>
							Вставьте карту и нажмите <strong>CUST SLOT DIAG</strong>
						</li>
						<li>
							Должны отображаться: <strong>POWER UP: PASSED</strong> и{' '}
							<strong>GET ATR: PASSED</strong>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.3'>
						Бесконтактный модуль
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Выберите: <strong>Terminal Info</strong> →{' '}
							<strong>Diagnostics</strong> → <strong>Smart Card Diag</strong> →{' '}
							<strong>CONTACTLESS DIAG</strong> → <strong>TAP AND TEST</strong>
						</li>
						<li>
							Поднесите карту — должен отображаться{' '}
							<strong>SW1_SW2=0x9000 card_type=1</strong>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.4'>
						Клавиатура
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Выберите: <strong>Terminal Info</strong> →{' '}
							<strong>Diagnostics</strong> → <strong>Keybord Diag</strong>
						</li>
						<li>
							Проверьте все клавиши — значения должны отображаться на экране
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.5'>
						Принтер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Выберите: <strong>Terminal Info</strong> →{' '}
							<strong>Diagnostics</strong> → <strong>Printer Diag</strong> →{' '}
							<strong>Test</strong>
						</li>
						<li>Должен распечататься тестовый чек</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.6'>
						GPRS
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Выберите: <strong>Download</strong> → введите пароль →{' '}
							<strong>Multi-app</strong> → <strong>Partial dnld</strong> →{' '}
							<strong>TCPIP</strong>
						</li>
						<li>
							Нажмите красную кнопку и выберите: <strong>Control Panel</strong>{' '}
							→ <strong>Tools</strong> → <strong>Network Maint</strong> →{' '}
							<strong>GPRS</strong> → <strong>Network Start GPRS</strong>
						</li>
						<li>
							Должен отображаться статус <strong>Connected</strong>
						</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.7'>
						Ethernet
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Выберите: <strong>Download</strong> → введите пароль →{' '}
							<strong>Multi-app</strong> → <strong>Partial dnld</strong> →{' '}
							<strong>TCPIP</strong>
						</li>
						<li>
							Нажмите красную кнопку и выберите: <strong>Control Panel</strong>{' '}
							→ <strong>Tools</strong> → <strong>Network Maint</strong> →{' '}
							<strong>Ethernet</strong> → <strong>Network Start</strong>
						</li>
						<li>
							Должен отображаться статус <strong>Connected</strong>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default VerifoneVx520Content
