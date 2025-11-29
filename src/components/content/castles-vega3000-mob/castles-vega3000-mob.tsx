import React from 'react'

interface CastlesVega3000MobContentProps {
	className?: string
}

const CastlesVega3000MobContent: React.FC<CastlesVega3000MobContentProps> = ({
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
									33.33.07
								</td>
								<td className='px-3 py-3 text-sm border border-gray-300'>
									VR0028-201
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
						<li>Флешка в формате FAT32</li>
						<li>Переходник USB мама - mini USB папа</li>
						<li>
							<a
								href='https://disk.yandex.ru/d/MS548Ff0grXoUw'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline text-[#704ecc]'
							>
								Папка с файлами
							</a>
						</li>
					</ul>
				</div>

				<div className='subsection mb-6'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.2'>
						Процесс прошивки
					</h3>
					<ul className='list-disc text-lg flex flex-col gap-3 pl-5'>
						<li>Включаем терминал.</li>
						<li>Подключаем флешку с помощью переходника.</li>
						<li>Перезагружаем терминал.</li>
						<li>
							Многократно нажимаем красную кнопку до появления системного меню.
						</li>
						<li>
							Удаляем старый UPOS - кнопка <strong>2</strong>.
						</li>
						<li>Подтверждаем удаление.</li>
						<li>
							Нажимаем <strong>0</strong>.
						</li>
						<li>
							В появившемся меню выбираем пункт 1 - <strong>Download AP</strong>
							.
						</li>
						<li>
							Далее выбираем пункт 2 - <strong>USB Disk</strong>.
						</li>
						<li>После завершения прошивки нажимаем любую кнопку.</li>
						<li>Дважды нажимаем красную кнопку.</li>
						<li>
							На экране должна появиться надпись{' '}
							<strong>[Default Select]</strong>.
						</li>
						<li>
							Если её нет, нажимаем <strong>1</strong>.
						</li>
						<li>Нажимаем зелёную кнопку.</li>
						<li>Осталось дождаться загрузки UPOS.</li>
					</ul>
				</div>

				<div className='subsection'>
					<h3 className='subsection-title text-2xl font-semibold mb-4' id='2.3'>
						Видеоинструкция
					</h3>
					<div className='flex'>
						<video controls className='w-full rounded-xl md:w-1/3 max-w-md'>
							<source
								src='/content/castles-vega3000-mob/video/Castles vega 3000 GPRS.mp4'
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

export default CastlesVega3000MobContent
