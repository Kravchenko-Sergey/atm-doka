import { CopyLinkButton } from '@/components/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface PaxS200ContentProps {
	className?: string
}

const PaxS200Content: React.FC<PaxS200ContentProps> = ({ className = '' }) => {
	useDelayedHashScroll()

	const tableHeaders = ['Модель', 'UPOS', 'OS Monitor+']

	const tableData = [
		{
			model: 'S200 PCI PED 3',
			upos: '33.33.07',
			osMonitor: '3.12 (любые 3.1Х)'
		},
		{
			model: 'S200 PCI PED 5',
			upos: '33.33.07',
			osMonitor: '5.0X'
		},
		{
			model: 'VX520 + S200',
			upos: '33.18.03',
			osMonitor: '3.12 (любые 3.1Х)'
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
					<CopyLinkButton index='1' color='#08a4e1' />
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
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.upos}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.osMonitor}
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
					<CopyLinkButton index='2' color='#08a4e1' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Что понадобится?
						</h3>
						<CopyLinkButton index='2.1' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/qf8P-Mc4FOyUcQ'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200'
							>
								Программа PC Loader
							</a>
						</li>
						<li className='leading-7'>Переходник для подключения</li>
						<li className='leading-7'>
							Файл прошивки для соответствующей модели
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Процесс прошивки
						</h3>
						<CopyLinkButton index='2.2' color='#08a4e1' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Подключите терминал к компьютеру</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>При включении многократно нажимайте кнопку</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									F1
								</span>
							</div>
						</li>
						<li className='leading-7'>
							После появления меню нажмите красную кнопку
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Запустите программу</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									PC Loader
								</span>
								<span>на компьютере</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Перейдите в раздел</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									Setting
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В поле</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									Serial Port
								</span>
								<span>выберите COM-порт терминала</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Перейдите в раздел</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									Application
								</span>
							</div>
						</li>
						<li className='leading-7'>Укажите путь к файлу прошивки</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									APP Info
								</span>
								<span>и затем</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>
									Refresh
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Удалите все найденные файлы кнопкой</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									Delete
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>
									Download
								</span>
								<span>для начала прошивки</span>
							</div>
						</li>
						<li className='leading-7'>Дождитесь завершения процесса</li>
						<li className='leading-7'>Нажмите красную кнопку на терминале</li>
						<li className='leading-7'>Дождитесь загрузки UPOS</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.3'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Видеоинструкция
						</h3>
						<CopyLinkButton index='2.3' color='#08a4e1' />
					</div>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/pax-s200/video/PAX S200.mp4'
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

export default PaxS200Content
