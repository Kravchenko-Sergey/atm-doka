import React from 'react'

interface PaxS90ContentProps {
	className?: string
}

const PaxS90Content: React.FC<PaxS90ContentProps> = ({ className = '' }) => {
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
									OS Monitor+
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									BASE
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									API
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.33.07
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									3.84
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									V1.55
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									V010024
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
						<li>Переходник USB (мама) — mini-USB (папа)</li>
						<li>
							<a
								href='https://disk.yandex.ru/d/GQPfUmSopiLFyA'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1]'
							>
								Файл прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Подключите флешку через переходник</li>
						<li>Включите терминал</li>
						<li>
							Выберите файл прошивки{' '}
							<a
								href='https://disk.yandex.ru/d/GQPfUmSopiLFyA'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1]'
							>
								!SB_S90C_33.33
							</a>{' '}
							и подтвердите выбор
						</li>
						<li>
							В меню выберите: <strong>DELETE APP</strong> →{' '}
							<strong>Delete all app</strong>
						</li>
						<li>
							После очистки выберите <strong>DOWNLOAD ALL</strong>
						</li>
						<li>
							По завершении дважды нажмите красную кнопку и извлеките флешку
						</li>
						<li>Дождитесь перезагрузки и загрузки UPOS</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.3'>
						Видеоинструкция
					</h3>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/pax-s90/video/PAX S90.mp4'
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
						Внешний осмотр
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Проверьте отсутствие посторонних предметов в ридерах</li>
						<li>Осмотрите корпус на наличие повреждений и загрязнений</li>
						<li>Проверьте целостность контактов SIM-слота и Ethernet-порта</li>
						<li>Оцените общее состояние терминала</li>
					</ul>
				</div>
				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.2'>
						Включение и загрузка
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Включите терминал и проверьте загрузку</li>
						<li>
							При появлении ошибок:{' '}
							<strong>
								TAMPER, TAMPERED DEVICE, TAMPERING DETECTED, PED TAMPERED, PLS
								INPUT PWD
							</strong>{' '}
							— терминал неисправен и подлежит отправке в сервисный центр
						</li>
					</ul>
				</div>
				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.3'>
						Магнитный ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Зажмите кнопку <strong>func</strong> при включении
						</li>
						<li>
							Выберите: <strong>Module Test</strong> →{' '}
							<strong>Magcard Reader</strong>
						</li>
						<li>
							Проведите карту — должен отображаться{' '}
							<strong>READ TRACK OK</strong> или <strong>Status=0</strong>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.4'>
						Чиповый ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Зажмите кнопку <strong>func</strong> при включении
						</li>
						<li>
							Выберите: <strong>Module Test</strong> →{' '}
							<strong>Card Readers</strong> → <strong>User Card</strong>
						</li>
						<li>
							Вставьте карту — должен отображаться <strong>OK</strong> или{' '}
							<strong>Card test done</strong>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.5'>
						Бесконтактный ридер
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Зажмите кнопку <strong>func</strong> при включении
						</li>
						<li>
							Выберите: <strong>Module Test</strong> →{' '}
							<strong>Card Readers</strong>
						</li>
						<li>
							Выберите <strong>A Type Card</strong> или поднесите карту при
							появлении <strong>PLS SWIPED CARD</strong>
						</li>
						<li>
							Должен отображаться <strong>read succeeded</strong> или{' '}
							<strong>A CARD TEST OK</strong>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.6'>
						Клавиатура
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Зажмите кнопку <strong>func</strong> при включении
						</li>
						<li>
							Выберите: <strong>Module Test</strong> → <strong>KEY TEST</strong>{' '}
							→ <strong>User Interface</strong> → <strong>Keyboard</strong>
						</li>
						<li>
							Нажмите все клавиши — значения должны отображаться на экране
						</li>
						<li>
							Для выхода нажмите дважды <strong>0</strong> или{' '}
							<strong>1</strong>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.7'>
						GPRS
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Зажмите кнопку <strong>func</strong> при включении
						</li>
						<li>
							Выберите: <strong>Module Check</strong> → <strong>WNET</strong>
						</li>
						<li>
							Нажимайте <strong>Enter</strong> до появления{' '}
							<strong>WNET DIALING</strong>
						</li>
						<li>Должна появиться шкала уровня сигнала</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='3.8'>
						Ethernet
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Визуально проверьте разъём на повреждения</li>
						<li>Подключите терминал к ноутбуку патч-кордом</li>
						<li>Проверьте сетевые подключения ноутбука</li>
						<li>Должно появиться новое сетевое подключение</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default PaxS90Content
