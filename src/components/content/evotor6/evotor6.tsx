import React from 'react'

interface Evotor6ContentProps {
	className?: string
}

const Evotor6Content: React.FC<Evotor6ContentProps> = ({ className = '' }) => {
	const tableHeaders = ['МЭ', 'OC', 'EvoPP', 'UposNative', 'UPOS']

	const tableData = [
		{
			me: 'SP_V1.01.050',
			oc: '6.0.16',
			evoPP: 'Не применяется',
			uposNative: '1.105.63',
			upos: '33.60.00'
		}
	]

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
										{row.me}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.oc}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.evoPP}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.uposNative}
									</td>
									<td className='px-3 py-3 text-sm border border-gray-300'>
										{row.upos}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className='content-section'>
				<h2 className='section-title text-3xl font-bold mb-8 mt-8' id='2'>
					Прошивка
				</h2>

				<div className='subsection mb-8'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.1'>
						Что понадобится?
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-4 pl-6'>
						<li className='leading-7'>Флешка, отформатированная в FAT32</li>
						<li className='leading-7'>Переходник USB (мама) — Type-C (папа)</li>
						<li className='leading-7'>
							<a
								href='https://drive.google.com/uc?export=download&id=1f0PLsnjJLSsyf8BjNS7pERTeJYn48JLp'
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
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Скачайте</span>
								<a
									href='https://drive.google.com/uc?export=download&id=1zp8lapO00GubC86cOwkxooq8cZBRzLb5'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:underline text-[#f15024] font-medium transition-colors duration-200 mx-1'
								>
									файл прошивки
								</a>
								<span>(актуальная версия —</span>
								<span className='border px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 ml-1'>
									6.0.16
								</span>
								<span>)</span>
							</div>
						</li>
						<li className='leading-7'>
							Подготовьте флешку FAT32 и запишите файл прошивки в корень
						</li>
						<li className='leading-7'>Включите терминал</li>
						<li className='leading-7'>
							Подключите флешку через переходник Type-C
						</li>
						<li className='leading-7'>Дождитесь обнаружения файла системой</li>
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

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-6' id='2.3'>
						Настройка eSIM
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-5 pl-6'>
						<li className='leading-7'>
							Откройте настройки устройства (тройное нажатие на логотип Сбера)
						</li>
						<li className='leading-7'>Подключитесь к сети Wi-Fi</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Перейдите:</span>
								<div className='flex flex-wrap items-center gap-1.5'>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Мобильная сеть
									</span>
									<span className='font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										Добавить eSIM
									</span>
								</div>
							</div>
						</li>
						<li className='leading-7'>Откройте мобильное приложение АТМ</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Перейдите:</span>
								<div className='flex flex-wrap items-center gap-1.5'>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										три точки
									</span>
									<span className='font-medium'>→</span>
									<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200'>
										eSIM профили
									</span>
								</div>
							</div>
						</li>
						<li className='leading-7'>Введите серийный номер терминала</li>
						<li className='leading-7'>Выберите ГОСБ и оператора связи</li>
						<li className='leading-7'>
							<div className='flex flex-wrap items-center gap-2 mt-1'>
								<span>Нажмите</span>
								<span className='bg-[#f15024] text-white px-1 rounded text-base font-medium whitespace-nowrap flex-shrink-0 hover:bg-[#e14520] transition-colors duration-200 mx-1'>
									Получить QRCode
								</span>
							</div>
						</li>
						<li className='leading-7'>
							Отсканируйте полученный QR-код на терминале
						</li>
						<li className='leading-7'>
							Повторите для добавления eSIM других операторов при необходимости
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Evotor6Content
