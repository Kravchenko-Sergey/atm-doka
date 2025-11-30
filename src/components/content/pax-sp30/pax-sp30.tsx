import React from 'react'

interface PaxSP30ContentProps {
	className?: string
}

const PaxSP30Content: React.FC<PaxSP30ContentProps> = ({ className = '' }) => {
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
										{row.osMonitor}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.base}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.api}
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
						<li className='leading-7'>Комплектный провод подключения</li>
						<li className='leading-7'>Блок питания micro-USB</li>
						<li className='leading-7'>Флешка, отформатированная в FAT32</li>
						<li className='leading-7'>
							Переходник USB 2.0 (мама) — USB 2.0 (мама)
						</li>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/4fC0Y01j_Gu1-A'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200'
							>
								Файл прошивки
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
							Подключите флешку через переходник к проводу пинпада
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Подключите питание — должен появиться статус</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									U-DISC_DOWNLOAD
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите файл прошивки</span>
								<a
									href='https://disk.yandex.ru/d/4fC0Y01j_Gu1-A'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200 mx-1'
								>
									!SB_SP30_33.33
								</a>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В меню выберите:</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									DELETE APP
								</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>
									Delete all app
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Затем выберите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									DOWNLOAD ALL
								</span>
								<span>для начала загрузки</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите красную кнопку — появится</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									DOWNLOAD OVER
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Ещё раз нажмите красную кнопку для перезагрузки
						</li>
						<li className='leading-7'>
							Во время перезагрузки извлеките флешку
						</li>
						<li className='leading-7'>Дождитесь полной загрузки UPOS</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.3'>
						Видеоинструкция
					</h3>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/pax-sp30/video/PAX SP30.mp4'
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

export default PaxSP30Content
