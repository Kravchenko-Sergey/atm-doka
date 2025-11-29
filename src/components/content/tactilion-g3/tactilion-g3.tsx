import React from 'react'

interface TactilionG3ContentProps {
	className?: string
}

const TactilionG3Content: React.FC<TactilionG3ContentProps> = ({
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
									OS
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.18.03 (АН)
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									S190512349
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
								href='https://disk.yandex.ru/d/Zo_BfaeJxsk8oA'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#ffd829]'
							>
								Файл прошивки
							</a>
						</li>
						<li>Провод USB - mini USB</li>
						<li>
							Программа{' '}
							<a
								href='https://disk.yandex.ru/d/ntxPwIVh8dASHg'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#ffd829]'
							>
								Nexgo TMU Tools
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Включаем терминал</li>
						<li>
							После звукового сигнала зажимаем <strong>1</strong> и{' '}
							<strong>F</strong> и держим до появления системного меню
						</li>
						<li>
							Выбираем пункт <strong>4</strong> - <strong>Clear APPs</strong>
						</li>
						<li>
							Вводим пароль - <strong>83890345</strong>
						</li>
						<li>Подтверждаем нажатием на зелёную кнопку</li>
						<li>
							Открываем на компьютере программу{' '}
							<a
								href='https://disk.yandex.ru/d/ntxPwIVh8dASHg'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#ffd829]'
							>
								Nexgo TMU Tools
							</a>
						</li>
						<li>
							Нажимаем <strong>Add local App</strong> и выбираем папку с
							прошивкой
						</li>
						<li>
							Нажимаем <strong>Download</strong>
						</li>
						<li>Перезагружаем терминал</li>
						<li>
							При включении снова зажимаем <strong>1</strong> и{' '}
							<strong>F</strong>
						</li>
						<li>
							В меню выбираем пункт <strong>1</strong> -{' '}
							<strong>USB port</strong>
						</li>
						<li>
							После появления на экране компьютера надписи{' '}
							<strong>Download success</strong> нажимаем любую кнопку на
							терминале
						</li>
						<li>Осталось дождаться загрузки UPOS.</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default TactilionG3Content
