import { CopyLinkButton } from '@/components/shared/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface TactilionG3ContentProps {
	className?: string
}

const TactilionG3Content: React.FC<TactilionG3ContentProps> = ({ className = '' }) => {
	useDelayedHashScroll()

	const tableHeaders = ['UPOS', 'OS']

	const tableData = [
		{
			upos: '33.18.03 (АН)',
			os: 'S190512349'
		}
	]

	return (
		<div className={className}>
			<div className='content-section'>
				{/* Контейнер с ID */}
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='1'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>Актуальные версии</h2>
					<CopyLinkButton index='1' color='#ffd829' />
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
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.os}</td>
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
					<CopyLinkButton index='2' color='#ffd829' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Что понадобится?</h3>
						<CopyLinkButton index='2.1' color='#ffd829' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>
							<a href='https://disk.yandex.ru/d/Zo_BfaeJxsk8oA' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#ffd829] font-medium transition-colors duration-200'>
								Файл прошивки
							</a>
						</li>
						<li className='leading-7'>Провод USB - mini USB</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Программа</span>
								<a href='https://disk.yandex.ru/d/ntxPwIVh8dASHg' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#ffd829] font-medium transition-colors duration-200 mx-1'>
									Nexgo TMU Tools
								</a>
							</div>
						</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Процесс прошивки</h3>
						<CopyLinkButton index='2.2' color='#ffd829' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Включаем терминал</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>После звукового сигнала зажимаем</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>1</span>
								<span>и</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 ml-1'>F</span>
								<span>и держим до появления системного меню</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выбираем пункт</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>4</span>
								<span>-</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 ml-1'>Clear APPs</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Вводим пароль -</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>83890345</span>
							</div>
						</li>
						<li className='leading-7'>Подтверждаем нажатием на зелёную кнопку</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Открываем на компьютере программу</span>
								<a href='https://disk.yandex.ru/d/ntxPwIVh8dASHg' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#ffd829] font-medium transition-colors duration-200 mx-1'>
									Nexgo TMU Tools
								</a>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажимаем</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>Add local App</span>
								<span>и выбираем папку с прошивкой</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажимаем</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>Download</span>
							</div>
						</li>
						<li className='leading-7'>Перезагружаем терминал</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>При включении снова зажимаем</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>1</span>
								<span>и</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 ml-1'>F</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В меню выбираем пункт</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>1</span>
								<span>-</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 ml-1'>USB port</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>После появления на экране компьютера надписи</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>Download success</span>
								<span>нажимаем любую кнопку на терминале</span>
							</div>
						</li>
						<li className='leading-7'>Осталось дождаться загрузки UPOS.</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default TactilionG3Content
