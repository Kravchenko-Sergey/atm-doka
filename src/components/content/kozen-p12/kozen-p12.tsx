import React from 'react'

interface KozenP12ContentProps {
	className?: string
}

const KozenP12Content: React.FC<KozenP12ContentProps> = ({
	className = ''
}) => {
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
									Прошивка
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									Upos native
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									Виды оборудования к которому подключается
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.42.02 (АН)
									<br />
									(На ограниченном количестве 33.47.04)
									<br />
									(ОЭ) 34.00.04
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									1.4.5
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									1.104.53
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									ИКР Атол Sigma
									<br />
									Терминалы Эвотор (кроме банковских 5i)
									<br />
									Ingenico ICT 220, 250
									<br />
									Verifone VX 520
									<br />
									Tactilion T2
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
						<li>
							<a
								href='https://disk.yandex.ru/d/rd08ougjIKg4Lg'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#C0C0C0]'
							>
								Программа Flash Tool
							</a>
						</li>
						<li>
							<a
								href='https://drive.google.com/file/d/1QjZNdEqwrSw07ZGy8s1vZ6f3xOH-NxSk/view?usp=drive_link'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#C0C0C0]'
							>
								Файлы прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Запустите программу Flash Tool</li>
						<li>
							В поле <strong>Download-Agent</strong> укажите путь к
							соответствующему файлу
						</li>
						<li>
							В поле <strong>Scatter-loading File</strong> укажите путь к
							scatter-файлу
						</li>
						<li>
							Выберите режим <strong>Firmware Upgrade</strong>
						</li>
						<li>
							Нажмите кнопку <strong>Download</strong>
						</li>
						<li>Подключите терминал к компьютеру</li>
						<li>Дождитесь завершения процесса прошивки</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.3'>
						Видеоинструкция
					</h3>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/kozen-p12/video/KOZEN.mp4'
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

export default KozenP12Content
