import React from 'react'

interface PaxS300ContentProps {
	className?: string
}

const PaxS300Content: React.FC<PaxS300ContentProps> = ({ className = '' }) => {
	const tableHeaders = ['UPOS', 'Prolin OS']

	const tableData = [
		{
			upos: '33.33.07',
			prolinOS: '2.4.224'
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
										{row.prolinOS}
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
						<li className='leading-7'>Ноутбук</li>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/jt5WS_fWPZHaUg'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200'
							>
								Папка с программой прошивки
							</a>
						</li>
						<li className='leading-7'>Комплектный USB-кабель</li>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/0XtlL9aZeqnAHA'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200'
							>
								Драйвер устройства
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
							Проверьте наличие драйвера в Диспетчере устройств
						</li>
						<li className='leading-7'>При необходимости установите драйвер</li>
						<li className='leading-7'>
							Подключите терминал к компьютеру USB-кабелем
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Многократно нажимайте кнопку</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									2
								</span>
								<span>для входа в системное меню</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									System Config
								</span>
								<span>и введите пароль</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>
									123456
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									4
								</span>
								<span>для включения</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>
									XCB Service
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите пункт</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									3
								</span>
								<span>—</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>
									USB
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Запустите программу</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									Starter
								</span>
								<span>из папки прошивки</span>
							</div>
						</li>
						<li className='leading-7'>
							Введите номер COM-порта (можно посмотреть в Диспетчере устройств)
						</li>
						<li className='leading-7'>Выберите нужную версию прошивки</li>
						<li className='leading-7'>Дождитесь завершения загрузки</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>На терминале выберите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									XCB Service
								</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>
									Close Service
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Несколько раз нажмите красную кнопку и выключите терминал
						</li>
						<li className='leading-7'>
							После перезагрузки дождитесь загрузки UPOS
						</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.3'>
						Видеоинструкция
					</h3>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source src='/content/pax-s300/video/S300.mp4' type='video/mp4' />
							Ваш браузер не поддерживает видео тег.
						</video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaxS300Content
