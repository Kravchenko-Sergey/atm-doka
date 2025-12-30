import { CopyLinkButton } from '@/components/shared/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface IngenicoIct220CTContentProps {
	className?: string
}

const IngenicoICT220Content: React.FC<IngenicoIct220CTContentProps> = ({ className = '' }) => {
	useDelayedHashScroll()

	const tableHeaders = ['Модель', 'UPOS', 'Telium OS']

	const tableData = [
		{
			model: 'ICT2X0',
			upos: '33.18.03',
			teliumOS: '9.32.3v'
		},
		{
			model: 'ICT2X0 + Kozen P10/P12',
			upos: '34.00.04 (АН)\n(ОЭ) 34.02.02',
			teliumOS: '9.32.3v'
		}
	]

	return (
		<div className={className}>
			<div className='content-section'>
				{/* Контейнер с ID */}
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='1'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>Актуальные версии</h2>
					<CopyLinkButton index='1' color='#41e747' />
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
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.model}</td>
									<td className='px-3 py-3 text-sm border border-gray-300 whitespace-pre-line'>{row.upos}</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.teliumOS}</td>
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
					<CopyLinkButton index='2' color='#41e747' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Что понадобится?</h3>
						<CopyLinkButton index='2.1' color='#41e747' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Флешка в формате FAT32</li>
						<li className='leading-7'>
							<a href='https://disk.yandex.ru/d/-L6rGWh_bGYcog' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#41e747] font-medium transition-colors duration-200'>
								Папка с файлами
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Процесс прошивки</h3>
						<CopyLinkButton index='2.2' color='#41e747' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Включаем терминал.</li>
						<li className='leading-7'>Присоединяем флешку.</li>
						<li className='leading-7'>Одновременно нажимаем желтую кнопку и точку. Держим до перезагрузки.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Зажимаем</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>F4</span>
								<span>. На экране терминала должна появиться надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 ml-1'>USB MASS STORAGE</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Ждём появления меню. Выбираем</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>FLASHCLEAN</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Ждём. На экране должна появиться надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>Software Activate OK</span>
								<span>. Терминал перезагрузится. После перезагрузки на экране должна появиться надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 ml-1'>LLT</span>
							</div>
						</li>
						<li className='leading-7'>Одновременно нажимаем желтую кнопку и точку. Держим до перезагрузки.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Зажимаем</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>F4</span>
								<span>. На экране терминала должна появиться надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 ml-1'>USB MASS STORAGE</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Ждём появления меню. Выбираем файл ОС -</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>9_32_3V</span>
							</div>
						</li>
						<li className='leading-7'>Дожидаемся загрузки файлов.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Ждём. На экране должна появиться надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>Software Activate OK</span>
								<span>. Терминал перезагрузится.</span>
							</div>
						</li>
						<li className='leading-7'>Одновременно нажимаем желтую кнопку и точку. Держим до перезагрузки.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Зажимаем</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>F4</span>
								<span>. На экране терминала должна появиться надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 ml-1'>USB MASS STORAGE</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Ждём появления меню. Выбираем файл</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>Stempel</span>
							</div>
						</li>
						<li className='leading-7'>Дожидаемся загрузки файлов.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Ждём. На экране должна появиться надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>Software Activate OK</span>
								<span>. Терминал перезагрузится.</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Зажимаем</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>F4</span>
								<span>. На экране терминала должна появиться надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 ml-1'>USB MASS STORAGE</span>
							</div>
						</li>
						<li className='leading-7'>Ждём появления меню. Выбираем файл с моделью нашего терминала.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Ждём. На экране должна появиться надпись</span>
								<span className='bg-[#41e747] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#37c43d] transition-colors duration-200 mx-1'>Software Activate OK</span>
								<span>. Терминал перезагрузится.</span>
							</div>
						</li>
						<li className='leading-7'>Осталось дождаться загрузки UPOS.</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.3'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Видеоинструкция</h3>
						<CopyLinkButton index='2.3' color='#41e747' />
					</div>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source src='/content/ingenico-ict220-ict250/video/ICT220-ICT250.mp4' type='video/mp4' />
							Ваш браузер не поддерживает видео тег.
						</video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IngenicoICT220Content
