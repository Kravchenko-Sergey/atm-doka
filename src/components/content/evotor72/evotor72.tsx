import React from 'react'

interface Evotor72ContentProps {
	className?: string
}

const Evotor72Content: React.FC<Evotor72ContentProps> = ({
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
									OC
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									UPOS
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									Драйвер
								</th>
								<th className='px-2 py-2 text-left text-sm font-medium border border-gray-300'>
									UPOS ККМ
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									4.9.11
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									В соответствии с целевой версией
									<br />
									применяемого терминала эквайринга
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									Uposdriver
									<br />
									1.104.103
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									33.35.02
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
						<li>
							<a
								href='https://disk.yandex.ru/d/Zwk1HO1llawQwQ'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#f15024]'
							>
								Файл прошивки
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>
							Скачайте{' '}
							<a
								href='https://disk.yandex.ru/d/Zwk1HO1llawQwQ'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#f15024]'
							>
								файл прошивки
							</a>{' '}
							(актуальная версия — <strong>4.9.11</strong>)
						</li>
						<li>Подготовьте флешку FAT32 и запишите файл прошивки в корень</li>
						<li>Включите терминал</li>
						<li>Вставьте флешку — запустится автоматическое обновление</li>
						<li>
							В окне <strong>Обновление системы</strong> нажмите{' '}
							<strong>Проверить и установить</strong>
						</li>
						<li>Дождитесь завершения процесса установки</li>
						<li>После автоматической перезагрузки извлеките флешку</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Evotor72Content
