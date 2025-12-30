import { CopyLinkButton } from '@/components/shared/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface CastlesVega3000IkrContentProps {
	className?: string
}

const CastlesVega3000IkrContent: React.FC<CastlesVega3000IkrContentProps> = ({ className = '' }) => {
	useDelayedHashScroll()

	const tableHeaders = ['UPOS', 'OS']

	const tableData = [
		{
			upos: '33.33.07',
			os: 'VR0028-201'
		}
	]

	return (
		<div className={className}>
			<div className='content-section'>
				{/* Контейнер с ID */}
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='1'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>Актуальные версии</h2>
					<CopyLinkButton index='1' color='#704ecc' />
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
					<CopyLinkButton index='2' color='#704ecc' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Что понадобится?</h3>
						<CopyLinkButton index='2.1' color='#704ecc' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Флешка в формате FAT32</li>
						<li className='leading-7'>Комплектный провод</li>
						<li className='leading-7'>Переходник USB мама - mini USB папа</li>
						<li className='leading-7'>
							<a href='https://disk.yandex.ru/d/MS548Ff0grXoUw' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#704ecc] font-medium transition-colors duration-200'>
								Папка с файлами
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Процесс прошивки</h3>
						<CopyLinkButton index='2.2' color='#704ecc' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Подключить питание терминала к компьютеру.</li>
						<li className='leading-7'>Подключить флешку с помощью переходника.</li>
						<li className='leading-7'>Отключаем питание от компьютера и включаем снова, чтобы перезагрузить терминал.</li>
						<li className='leading-7'>При включении многократно нажимаем красную кнопку до появления системного меню.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Удаляем старый UPOS - кнопка</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>2</span>
							</div>
						</li>
						<li className='leading-7'>Подтверждаем удаление.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажимаем</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>0</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В появившемся меню выбираем пункт 1 -</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>Download AP</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Далее выбираем пункт 2 -</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>USB Disk</span>
							</div>
						</li>
						<li className='leading-7'>После завершения прошивки нажимаем любую кнопку.</li>
						<li className='leading-7'>Дважды нажимаем красную кнопку.</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>На экране должна появиться надпись</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>[Default Select]</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Если её нет, нажимаем</span>
								<span className='bg-[#704ecc] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5d3db3] transition-colors duration-200 mx-1'>1</span>
							</div>
						</li>
						<li className='leading-7'>Нажимаем зелёную кнопку.</li>
						<li className='leading-7'>Осталось дождаться загрузки UPOS.</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.3'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>Видеоинструкция</h3>
						<CopyLinkButton index='2.3' color='#704ecc' />
					</div>

					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source src='/content/castles-vega3000-ikr/video/Vega3000 ИКР.mp4' type='video/mp4' />
							Ваш браузер не поддерживает видео тег.
						</video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CastlesVega3000IkrContent
