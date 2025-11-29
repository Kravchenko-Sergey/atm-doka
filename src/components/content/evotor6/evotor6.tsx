import React from 'react'

interface Evotor6ContentProps {
	className?: string
}

const Evotor6Content: React.FC<Evotor6ContentProps> = ({ className = '' }) => {
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
									МЭ
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									ОС
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									EvoPP
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									UposNative
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									UPOS
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									SP_V1.01.050
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									6.0.16
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									Не применяется
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									1.105.63
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.60.00
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
						<li>Флешка, отформатированная в FAT32</li>
						<li>Переходник USB (мама) — Type-C (папа)</li>
						<li>
							<a
								href='https://drive.google.com/uc?export=download&id=1f0PLsnjJLSsyf8BjNS7pERTeJYn48JLp'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#f15024]'
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
						<li>
							Скачайте{' '}
							<a
								href='https://drive.google.com/uc?export=download&id=1zp8lapO00GubC86cOwkxooq8cZBRzLb5'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#f15024]'
							>
								файл прошивки
							</a>
						</li>
						<li>Подготовьте флешку FAT32 и запишите файл прошивки в корень</li>
						<li>Включите терминал</li>
						<li>Подключите флешку через переходник Type-C</li>
						<li>Дождитесь обнаружения файла системой</li>
						<li>
							В окне <strong>Обновление системы</strong> нажмите{' '}
							<strong>Проверить и установить</strong>
						</li>
						<li>Дождитесь завершения процесса установки</li>
						<li>После автоматической перезагрузки извлеките флешку</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.3'>
						Настройка eSIM
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Откройте настройки устройства (тройное нажатие на логотип Сбера)
						</li>
						<li>Подключитесь к сети Wi-Fi</li>
						<li>
							Перейдите: <strong>Мобильная сеть</strong> →{' '}
							<strong>Добавить eSIM</strong>
						</li>
						<li>Откройте мобильное приложение АТМ</li>
						<li>
							Перейдите: <strong>три точки</strong> →{' '}
							<strong>eSIM профили</strong>
						</li>
						<li>Введите серийный номер терминала</li>
						<li>Выберите ГОСБ и оператора связи</li>
						<li>
							Нажмите <strong>Получить QRCode</strong>
						</li>
						<li>Отсканируйте полученный QR-код на терминале</li>
						<li>
							Повторите для добавления eSIM других операторов при необходимости
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Evotor6Content
