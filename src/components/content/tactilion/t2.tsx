import { CopyLinkButton } from '@/components/shared/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface TactilionT2ContentProps {
	className?: string
}

const TactilionT2Content: React.FC<TactilionT2ContentProps> = ({ className = '' }) => {
	useDelayedHashScroll()

	const tableHeaders = ['Модель', 'UPOS', 'OS']

	const tableData = [
		{
			model: 'T2',
			upos: '33.18.03 (АН)',
			os: '04_190408'
		},
		{
			model: 'T2 + Kozen P10/P12',
			upos: '34.00.04 (АН)\n(ОЭ) 34.02.02',
			os: '04_190408'
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
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.model}</td>
									<td className='px-3 py-3 text-sm border border-gray-300 whitespace-pre-line'>{row.upos}</td>
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
						<li className='leading-7'>Флешка в формате FAT32</li>
						<li className='leading-7'>
							<a href='https://disk.yandex.ru/d/wlh2zYSls2s77g' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#ffd829] font-medium transition-colors duration-200'>
								Папка с файлами
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Процесс прошивки</h3>
						<CopyLinkButton index='2.2' color='#ffd829' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Подключаем флешку к терминалу.</li>
						<li className='leading-7'>Нажимаем на кнопку включения.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>После того как терминал издаст звуковой сигнал, быстро зажимаем клавиши</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>F</span>
								<span>и</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 ml-1'>1</span>
								<span>. Держим, пока не появится системное меню.</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Для начала очищаем терминал. Выбираем пункт 4 -</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>Clear APPs</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Вводим пароль -</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>83890345</span>
							</div>
						</li>
						<li className='leading-7'>Подтверждаем нажатием на зелёную кнопку.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В меню выбираем пункт 3 -</span>
								<span className='bg-[#ffd829] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e6c225] transition-colors duration-200 mx-1'>U disk download</span>
							</div>
						</li>
						<li className='leading-7'>После завершения прошивки дважды нажимаем кнопку назад и один раз зелёную кнопку.</li>
						<li className='leading-7'>Осталось дождаться загрузки UPOS.</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.3'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Видеоинструкция</h3>
						<CopyLinkButton index='2.3' color='#ffd829' />
					</div>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source src='/content/tactilion-t2/video/TACTILION T2.mp4' type='video/mp4' />
							Ваш браузер не поддерживает видео тег.
						</video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TactilionT2Content
