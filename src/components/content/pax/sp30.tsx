import { CopyLinkButton } from '@/components/shared/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface PaxSP30ContentProps {
	className?: string
}

const PaxSP30Content: React.FC<PaxSP30ContentProps> = ({ className = '' }) => {
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
						<li className='leading-7'>Комплектный провод подключения</li>
						<li className='leading-7'>Блок питания micro-USB</li>
						<li className='leading-7'>Флешка, отформатированная в FAT32</li>
						<li className='leading-7'>Переходник USB 2.0 (мама) — USB 2.0 (мама)</li>
						<li className='leading-7'>
							<a href='https://disk.yandex.ru/d/4fC0Y01j_Gu1-A' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200'>
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
						<li className='leading-7'>Подключите флешку через переходник к проводу пинпада</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Подключите питание — должен появиться статус</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>U-DISC_DOWNLOAD</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите файл прошивки</span>
								<a href='https://disk.yandex.ru/d/4fC0Y01j_Gu1-A' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200 mx-1'>
									!SB_SP30_33.33
								</a>
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
								<span>Затем выберите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>DOWNLOAD ALL</span>
								<span>для начала загрузки</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите красную кнопку — появится</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>DOWNLOAD OVER</span>
							</div>
						</li>
						<li className='leading-7'>Ещё раз нажмите красную кнопку для перезагрузки</li>
						<li className='leading-7'>Во время перезагрузки извлеките флешку</li>
						<li className='leading-7'>Дождитесь полной загрузки UPOS</li>
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
							<source src='/content/pax-sp30/video/PAX SP30.mp4' type='video/mp4' />
							Ваш браузер не поддерживает видео тег.
						</video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaxSP30Content
