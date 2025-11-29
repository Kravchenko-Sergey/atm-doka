import React from 'react'

interface PaxD230ContentProps {
	className?: string
}

const PaxD230Content: React.FC<PaxD230ContentProps> = ({ className = '' }) => {
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
									Prolin OS
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.33.07
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									2.9.33
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
						<li>Ноутбук</li>
						<li>
							<a
								href='https://disk.yandex.ru/d/jt5WS_fWPZHaUg'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1]'
							>
								Папка с программой прошивки
							</a>
						</li>
						<li>Комплектный USB-кабель</li>
						<li>
							<a
								href='https://disk.yandex.ru/d/0XtlL9aZeqnAHA'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#08a4e1]'
							>
								Драйвер устройства
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Проверьте наличие драйвера в Диспетчере устройств</li>
						<li>При необходимости установите драйвер</li>
						<li>Подключите терминал к компьютеру USB-кабелем</li>
						<li>
							Многократно нажимайте кнопку <strong>2</strong> для входа в
							системное меню
						</li>
						<li>
							Выберите <strong>System Config</strong> и введите пароль{' '}
							<strong>123456</strong>
						</li>
						<li>
							Нажмите <strong>4</strong> для включения{' '}
							<strong>XCB Service</strong>
						</li>
						<li>
							Выберите пункт <strong>3</strong> — <strong>USB</strong>
						</li>
						<li>
							Запустите программу <strong>Starter</strong> из папки прошивки
						</li>
						<li>
							Введите номер COM-порта (можно посмотреть в Диспетчере устройств)
						</li>
						<li>Выберите нужную версию прошивки</li>
						<li>Дождитесь завершения загрузки</li>
						<li>
							На терминале выберите <strong>XCB Service</strong> →{' '}
							<strong>Close Service</strong>
						</li>
						<li>Несколько раз нажмите красную кнопку и выключите терминал</li>
						<li>После перезагрузки дождитесь загрузки UPOS</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default PaxD230Content
