import { CopyLinkButton } from '@/components/shared/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface PaxQ25ContentProps {
	className?: string
}

const PaxQ25Content: React.FC<PaxQ25ContentProps> = ({ className = '' }) => {
	useDelayedHashScroll()

	const tableHeaders = ['UPOS', 'Prolin OS']

	const tableData = [
		{
			upos: '33.33.07',
			prolinOS: '2.7.136'
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
									<td className='px-3 py-3 text-sm border border-gray-300'>{row.prolinOS}</td>
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
						<li className='leading-7'>Ноутбук</li>
						<li className='leading-7'>
							<a href='https://disk.yandex.ru/d/jt5WS_fWPZHaUg' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200'>
								Папка с программой прошивки
							</a>
						</li>
						<li className='leading-7'>Комплектный USB-кабель</li>
						<li className='leading-7'>
							<a href='https://disk.yandex.ru/d/0XtlL9aZeqnAHA' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200'>
								Драйвер устройства
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
						<li className='leading-7'>Проверьте наличие драйвера в Диспетчере устройств</li>
						<li className='leading-7'>При необходимости установите драйвер</li>
						<li className='leading-7'>Подключите терминал к компьютеру USB-кабелем</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Многократно нажимайте кнопку</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>2</span>
								<span>для входа в системное меню</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>System Config</span>
								<span>и введите пароль</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>123456</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>4</span>
								<span>для включения</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>XCB Service</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выберите пункт</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>3</span>
								<span>—</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>USB</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Запустите программу</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>Starter</span>
								<span>из</span>
								<a href='https://disk.yandex.ru/d/jt5WS_fWPZHaUg' target='_blank' rel='noopener noreferrer' className='hover:underline text-[#08a4e1] font-medium transition-colors duration-200 mx-1'>
									папки прошивки
								</a>
							</div>
						</li>
						<li className='leading-7'>Введите номер COM-порта (можно посмотреть в Диспетчере устройств)</li>
						<li className='leading-7'>Выберите нужную версию прошивки</li>
						<li className='leading-7'>Дождитесь завершения загрузки</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>На терминале выберите</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 mx-1'>XCB Service</span>
								<span>→</span>
								<span className='bg-[#08a4e1] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#0789c4] transition-colors duration-200 ml-1'>Close Service</span>
							</div>
						</li>
						<li className='leading-7'>Несколько раз нажмите красную кнопку и выключите терминал</li>
						<li className='leading-7'>После перезагрузки дождитесь загрузки UPOS</li>
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
							<source src='/content/pax-q25/video/PAX Q25.mp4' type='video/mp4' />
							Ваш браузер не поддерживает видео тег.
						</video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaxQ25Content
