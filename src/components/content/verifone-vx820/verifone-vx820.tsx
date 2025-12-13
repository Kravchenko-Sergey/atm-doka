import { CopyLinkButton } from '@/components/copy-link-button'
import { useDelayedHashScroll } from '@/hooks/use-delayed-hash-scroll'
import React from 'react'

interface VerifoneVx820ContentProps {
	className?: string
}

const VerifoneVx820Content: React.FC<VerifoneVx820ContentProps> = ({
	className = ''
}) => {
	useDelayedHashScroll()

	const tableHeaders = ['UPOS', 'OS Verix', 'EOS', 'VX-CTLS-2']

	const tableData = [
		{
			upos: '33.33.07',
			osVerix: 'QT000560',
			eos: '3.3.2.0',
			vxCtls: '01.30.02M6'
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
					<CopyLinkButton index='1' color='#6effd2' />
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
										{row.upos}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.osVerix}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.eos}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.vxCtls}
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
					<CopyLinkButton index='2' color='#6effd2' />
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.1'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Что понадобится?
						</h3>
						<CopyLinkButton index='2.1' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Комплектный провод</li>
						<li className='leading-7'>Блок питания micro-USB</li>
						<li className='leading-7'>
							<a
								href='https://disk.yandex.ru/d/XjC6g_QSFhr6Jw'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#6effd2] font-medium transition-colors duration-200'
							>
								Папка с файлами
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-8'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.2'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							План действий
						</h3>
						<CopyLinkButton index='2.2' color='#6effd2' />
					</div>

					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Сначала нужно войти в режим прошивки. Для этого одновременно
									зажимаем зелёную кнопку и цифру
								</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									7
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Вводим пароль:</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									166831
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажимаем</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									6
								</span>
								<span>-</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									Clear Memory
								</span>
							</div>
						</li>
						<li className='leading-7'>Повторяем пароль</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выбираем 4 пункт -</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									Clear all Groups
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Подтверждаем нажатием кнопки</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									2
								</span>
								<span>-</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									Confirm
								</span>
							</div>
						</li>
						<li className='leading-7'>
							После того как терминал очистится, нажимаем красную кнопку
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Выбираем</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									1
								</span>
								<span>-</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									Restart
								</span>
								<span>
									. Терминал перезапустится. На экране должна появиться надпись
								</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 ml-1'>
									GO FILE NOT FOUND
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Открываем на компьютере заранее скачанную папку и выбираем файл с
							моделью нашего терминала
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Откроется командная строка. Следуем инструкциям на экране.
									Нажимаем кнопку
								</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									1
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>
									Ждем, пока терминал очистится. На экране должна появится
									надпись
								</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									No *GO variable
								</span>
							</div>
						</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажимаем кнопку</span>
								<span className='bg-[#6effd2] text-black px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#5ae0b8] transition-colors duration-200 mx-1'>
									2
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Осталось дождаться окончания прошивки и загрузки UPOS
						</li>
					</ul>
				</div>

				<div className='subsection'>
					{/* Контейнер с ID */}
					<div className='flex items-center justify-start gap-4 mb-6' id='2.3'>
						<h3 className='subsection-title text-xl md:text-2xl font-semibold'>
							Видеоинструкция
						</h3>
						<CopyLinkButton index='2.3' color='#6effd2' />
					</div>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/verifone-vx820/video/VX820.mp4'
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

export default VerifoneVx820Content
