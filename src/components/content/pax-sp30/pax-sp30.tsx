import React from 'react'

interface PaxSP30ContentProps {
	className?: string
}

const PaxSP30Content: React.FC<PaxSP30ContentProps> = ({ className = '' }) => {
	return (
		<div className={className}>
			<div className='content-section'>
				<h2 className='section-title text-3xl font-bold mb-8 mt-8' id='1'>
					Актуальные версии
				</h2>

				<div className='overflow-x-auto whitespace-nowrap'>
					<table className='min-w-full'>
						<thead>
							<tr>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									UPOS
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									OS Monitor+
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									BASE
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									API
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.33.07
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									3.84
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									V1.55
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									V010024
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className='content-section'>
				<h2 className='section-title text-3xl font-bold mb-8 mt-8' id='2'>
					Прошивка
				</h2>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.1'>
						Что понадобится?
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Комплектный провод подключения</li>
						<li>Блок питания micro-USB</li>
						<li>Флешка, отформатированная в FAT32</li>
						<li>Переходник USB 2.0 (мама) — USB 2.0 (мама)</li>
						<li>
							<a
								href='https://disk.yandex.ru/d/4fC0Y01j_Gu1-A'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1]'
							>
								Файл прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Подключите флешку через переходник к проводу пинпада</li>
						<li>
							Подключите питание — должен появиться статус{' '}
							<strong>U-DISC_DOWNLOAD</strong>
						</li>
						<li>
							Выберите файл прошивки{' '}
							<a
								href='https://disk.yandex.ru/d/4fC0Y01j_Gu1-A'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1]'
							>
								!SB_SP30_33.33
							</a>
						</li>
						<li>
							В меню выберите: <strong>DELETE APP</strong> →{' '}
							<strong>Delete all app</strong>
						</li>
						<li>
							Затем выберите <strong>DOWNLOAD ALL</strong> для начала загрузки
						</li>
						<li>
							Нажмите красную кнопку — появится <strong>DOWNLOAD OVER</strong>
						</li>
						<li>Ещё раз нажмите красную кнопку для перезагрузки</li>
						<li>Во время перезагрузки извлеките флешку</li>
						<li>Дождитесь полной загрузки UPOS</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.3'>
						Видеоинструкция
					</h3>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/pax-sp30/video/PAX SP30.mp4'
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

export default PaxSP30Content
