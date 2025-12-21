import { CopyLinkButton } from '@/components/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface KozenP10ContentProps {
	className?: string
}

const KozenP10Content: React.FC<KozenP10ContentProps> = ({
	className = ''
}) => {
	useDelayedHashScroll()

	const tableHeaders = [
		'UPOS',
		'Прошивка',
		'Upos native',
		'Виды оборудования к которому подключается'
	]

	const tableData = [
		{
			upos: '34.00.04 (АН)\n(ОЭ) 34.02.02',
			firmware: '1.5.24',
			uposNative: '1.104.53',
			equipment:
				'ИКР Атол Sigma\nТерминалы Эвотор (кроме банковских 5i)\nIngenico ICT 220, 250\nVerifone VX 520\nTactilion T2'
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
					<CopyLinkButton index='1' color='#EF4444' />
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
									<td className='px-3 py-3 text-sm border border-gray-300 whitespace-pre-line'>
										{row.upos}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.firmware}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.uposNative}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300 whitespace-pre-line'>
										{row.equipment}
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
					<CopyLinkButton index='2' color='#EF4444' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Что понадобится?
						</h3>
						<CopyLinkButton index='2.1' color='#EF4444' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Ноутбук</li>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/rd08ougjIKg4Lg'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#EF4444] font-medium transition-colors duration-200'
							>
								Программа Flash Tool
							</a>
						</li>
						<li className='leading-7'>
							<a
								href='https://drive.google.com/file/d/1rseX8SzaCr5X41YLjX9kcvzj4SdPE1ZX/view?usp=drive_link'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#EF4444] font-medium transition-colors duration-200'
							>
								Файлы прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Процесс прошивки
						</h3>
						<CopyLinkButton index='2.2' color='#EF4444' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Запустите программу Flash Tool</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В поле</span>
								<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>
									Download-Agent
								</span>
								<span>укажите путь к соответствующему файлу</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В поле</span>
								<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>
									Scatter-loading File
								</span>
								<span>укажите путь к scatter-файлу</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите режим</span>
								<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>
									Firmware Upgrade
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите кнопку</span>
								<span className='bg-[#EF4444] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#eb3131] transition-colors duration-200 mx-1'>
									Download
								</span>
							</div>
						</li>
						<li className='leading-7'>Подключите терминал к ноутбуку</li>
						<li className='leading-7'>
							Дождитесь завершения процесса прошивки
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default KozenP10Content
