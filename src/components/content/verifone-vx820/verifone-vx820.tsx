import React from 'react'

interface VerifoneVx820ContentProps {
	className?: string
}

const VerifoneVx820Content: React.FC<VerifoneVx820ContentProps> = ({
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
									OS Verix
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									EOS
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									VX-CTLS-2
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.33.07
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									QT000560
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									3.3.2.0
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									01.30.02M6
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
						<li>Комплектный провод</li>
						<li>Блок питания micro-USB</li>
						<li>
							<a
								href='https://disk.yandex.ru/d/XjC6g_QSFhr6Jw'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#6effd2]'
							>
								Папка с файлами
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						План действий
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Сначала нужно войти в режим прошивки. Для этого одновременно
							зажимаем зелёную кнопку и цифру <strong>7</strong>
						</li>
						<li>
							Вводим пароль: <strong>166831</strong>
						</li>
						<li>
							Нажимаем <strong>6</strong> - <strong>Clear Memory</strong>
						</li>
						<li>Повторяем пароль</li>
						<li>
							Выбираем 4 пункт - <strong>Clear all Groups</strong>
						</li>
						<li>
							Подтверждаем нажатием кнопки <strong>2</strong> -{' '}
							<strong>Confirm</strong>
						</li>
						<li>После того как терминал очистится, нажимаем красную кнопку</li>
						<li>
							Выбираем <strong>1</strong> - <strong>Restart</strong>. Терминал
							перезапустится. На экране должна появиться надпись{' '}
							<strong>GO FILE NOT FOUND</strong>
						</li>
						<li>
							Открываем на компьютере заранее скачанную папку и выбираем файл с
							моделью нашего терминала
						</li>
						<li>
							Откроется командная строка. Следуем инструкциям на экране.
							Нажимаем кнопку <strong>1</strong>
						</li>
						<li>
							Ждем, пока терминал очистится. На экране должна появится надпись{' '}
							<strong>No *GO variable</strong>
						</li>
						<li>
							Нажимаем кнопку <strong>2</strong>
						</li>
						<li>Осталось дождаться окончания прошивки и загрузки UPOS</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.3'>
						Видеоинструкция
					</h3>
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
