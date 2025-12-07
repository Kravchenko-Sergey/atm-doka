import { CopyLinkButton } from '@/components/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface Evotor73ContentProps {
	className?: string
}

const Evotor73Content: React.FC<Evotor73ContentProps> = ({
	className = ''
}) => {
	useDelayedHashScroll()

	const tableHeaders = ['OC', 'UPOS', 'Драйвер', 'UPOS ККМ']

	const tableData = [
		{
			oc: '4.9.11',
			upos: 'В соответствии с целевой версией применяемого терминала эквайринга',
			driver: 'Uposdriver\n1.104.103',
			uposKKM: '33.35.02'
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
					<CopyLinkButton index='1' color='#f15024' />
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
										{row.oc}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.upos}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300 whitespace-pre-line'>
										{row.driver}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.uposKKM}
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
					<CopyLinkButton index='2' color='#f15024' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Что понадобится?
						</h3>
						<CopyLinkButton index='2.1' color='#f15024' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Флешка, отформатированная в FAT32</li>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/6wPk2ywVHz_BpA'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#f15024] font-medium transition-colors duration-200'
							>
								Файл прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Процесс прошивки
						</h3>
						<CopyLinkButton index='2.2' color='#f15024' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Скачайте</span>
								<a
									href='https://disk.yandex.ru/d/6wPk2ywVHz_BpA'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:underline text-[#f15024] font-medium transition-colors duration-200 mx-1'
								>
									файл прошивки
								</a>
								<span>(актуальная версия —</span>
								<span className='border px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 ml-1'>
									4.9.11
								</span>
								<span>)</span>
							</div>
						</li>
						<li className='leading-7'>
							Подготовьте флешку FAT32 и запишите файл прошивки в корень
						</li>
						<li className='leading-7'>Включите терминал</li>
						<li className='leading-7'>
							Вставьте флешку — запустится автоматическое обновление
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>В окне</span>
								<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200 mx-1'>
									Обновление системы
								</span>
								<span>нажмите</span>
								<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200 ml-1'>
									Проверить и установить
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Дождитесь завершения процесса установки
						</li>
						<li className='leading-7'>
							После автоматической перезагрузки извлеките флешку
						</li>
					</ul>
				</div>
			</div>

			<div className='content-section'>
				{/* Контейнер с ID */}
				<div className='flex items-center justify-start gap-4 mb-8 mt-8' id='3'>
					<h2 className='section-title text-2xl md:text-3xl font-semibold md:font-bold'>
						На практике
					</h2>
					<CopyLinkButton index='3' color='#f15024' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Как избежать ГЗ, если проблема в принтере
						</h3>
						<CopyLinkButton index='3.1' color='#f15024' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>Разберите неисправный терминал</li>
						<li className='leading-7'>Отсоедините плату от принтера</li>
						<li className='leading-7'>Разберите рабочий терминал-донор</li>
						<li className='leading-7'>
							Отсоедините плату от исправного принтера
						</li>
						<li className='leading-7'>
							Установите плату от неисправного принтера на исправный механизм
						</li>
						<li className='leading-7'>Соберите терминал и проверьте работу</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='3.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Видеоинструкция
						</h3>
						<CopyLinkButton index='3.2' color='#f15024' />
					</div>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/evotor73/video/73-PRINTER.mp4'
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

export default Evotor73Content
