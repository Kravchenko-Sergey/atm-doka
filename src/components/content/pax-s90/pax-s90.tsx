import { CopyLinkButton } from '@/components/shared/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface PaxS90ContentProps {
	className?: string
}

const PaxS90Content: React.FC<PaxS90ContentProps> = ({ className = '' }) => {
	useDelayedHashScroll()

	const tableHeaders = ['UPOS', 'OS Monitor+', 'BASE', 'API']

	const tableData = [
		{
			upos: '33.33.07',
			osMonitor: '3.84',
			base: 'V1.55',
			api: 'V010024'
		}
	]

	return (
		<div className={className}>
			<div className='content-section'>
				{/* Контейнер с ID */}
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='1'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>Актуальные версии</h2>
					<CopyLinkButton index='1' color='#08a4e1' />
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
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.upos}</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.osMonitor}</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.base}</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.api}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className='content-section'>
				{/* Контейнер с ID */}
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='2'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>Прошивка</h2>
					<CopyLinkButton index='2' color='#08a4e1' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Что понадобится?</h3>
						<CopyLinkButton index='2.1' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Флешка, отформатированная в FAT32</li>
						<li className='leading-7'>Переходник USB (мама) — mini-USB (папа)</li>
						<li className='leading-7'>
							<a href='https://disk.yandex.ru/d/GQPfUmSopiLFyA' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200'>
								Файл прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Процесс прошивки</h3>
						<CopyLinkButton index='2.2' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Подключите флешку через переходник</li>
						<li className='leading-7'>Включите терминал</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите файл прошивки</span>
								<a href='https://disk.yandex.ru/d/GQPfUmSopiLFyA' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200 mx-1'>
									!SB_S90C_33.33
								</a>
								<span>и подтвердите выбор</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В меню выберите:</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>DELETE APP</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>Delete all app</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>После очистки выберите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>DOWNLOAD ALL</span>
							</div>
						</li>
						<li className='leading-7'>По завершении дважды нажмите красную кнопку и извлеките флешку</li>
						<li className='leading-7'>Дождитесь перезагрузки и загрузки UPOS</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.3'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Видеоинструкция</h3>
						<CopyLinkButton index='2.3' color='#08a4e1' />
					</div>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source src='/content/pax-s90/video/PAX S90.mp4' type='video/mp4' />
							Ваш браузер не поддерживает видео тег.
						</video>
					</div>
				</div>
			</div>

			<div className='content-section'>
				{/* Контейнер с ID */}
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='3'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>Дефектовка</h2>
					<CopyLinkButton index='3' color='#08a4e1' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Внешний осмотр</h3>
						<CopyLinkButton index='3.1' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Проверьте отсутствие посторонних предметов в ридерах</li>
						<li className='leading-7'>Осмотрите корпус на наличие повреждений и загрязнений</li>
						<li className='leading-7'>Проверьте целостность контактов SIM-слота и Ethernet-порта</li>
						<li className='leading-7'>Оцените общее состояние терминала</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Включение терминала</h3>
						<CopyLinkButton index='3.2' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Включите терминал и проверьте процесс загрузки</li>
						<li className='leading-7'>
							Убедитесь в отсутствии сообщений об ошибках:
							<div className='mt-2 ml-4 flex flex-wrap gap-2'>
								<span className='bg-[#08a4e1] text-white px-2 py-1 rounded text-base font-medium whitespace-nowrap'>TAMPER</span>
								<span className='bg-[#08a4e1] text-white px-2 py-1 rounded text-base font-medium whitespace-nowrap'>TAMPERED DEVICE</span>
								<span className='bg-[#08a4e1] text-white px-2 py-1 rounded text-base font-medium whitespace-nowrap'>TAMPERING DETECTED</span>
								<span className='bg-[#08a4e1] text-white px-2 py-1 rounded text-base font-medium whitespace-nowrap'>PED TAMPERED</span>
								<span className='bg-[#08a4e1] text-white px-2 py-1 rounded text-base font-medium whitespace-nowrap'>PLS INPUT PWD</span>
							</div>
						</li>
						<li className='leading-7'>При обнаружении ошибок — терминал неисправен, требуется отправка в сервисный центр</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.3'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Магнитный ридер</h3>
						<CopyLinkButton index='3.3' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Зажмите кнопку</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>func</span>
								<span>при включении</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>Module Test</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>Magcard Reader</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Проведите карту — должен отображаться</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>READ TRACK OK</span>
								<span>или</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>Status=0</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.4'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Чиповый ридер</h3>
						<CopyLinkButton index='3.4' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Зажмите кнопку</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>func</span>
								<span>при включении</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>Module Test</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>Card Readers</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>User Card</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Вставьте карту — должен отображаться</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>OK</span>
								<span>или</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>Card test done</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.5'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Бесконтактный ридер</h3>
						<CopyLinkButton index='3.5' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Зажмите кнопку</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>func</span>
								<span>при включении</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>Module Test</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>Card Readers</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>A Type Card</span>
								<span>или поднесите карту при появлении</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>PLS SWIPED CARD</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Должен отображаться</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>read succeeded</span>
								<span>или</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>A CARD TEST OK</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.6'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Клавиатура</h3>
						<CopyLinkButton index='3.6' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Зажмите кнопку</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>func</span>
								<span>при включении</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>Module Test</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>KEY TEST</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>User Interface</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>Keyboard</span>
							</div>
						</li>
						<li className='leading-7'>Нажмите все клавиши — значения должны отображаться на экране</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Для выхода нажмите дважды</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>0</span>
								<span>или</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>1</span>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.7'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>GPRS</h3>
						<CopyLinkButton index='3.7' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Зажмите кнопку</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>func</span>
								<span>при включении</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите:</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>Module Check</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>WNET</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажимайте</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>Enter</span>
								<span>до появления</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>WNET DIALING</span>
							</div>
						</li>
						<li className='leading-7'>Должна появиться шкала уровня сигнала</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.8'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Ethernet</h3>
						<CopyLinkButton index='3.8' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Визуально проверьте разъём на повреждения</li>
						<li className='leading-7'>Подключите терминал к ноутбуку патч-кордом</li>
						<li className='leading-7'>Проверьте сетевые подключения ноутбука</li>
						<li className='leading-7'>Должно появиться новое сетевое подключение</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default PaxS90Content
