import { ScanFace } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { getPeopleData } from '@/lib/data/people'

export default async function PeopleContent() {
	// Загружаем данные на сервере
	const people = await getPeopleData()

	return (
		<div className='px-4 w-full max-w-[1572px] mx-auto flex flex-col'>
			<div className='w-full max-w-[1448px] mx-auto flex flex-col gap-8'>
				<h1 className='text-3xl font-bold'>Участники</h1>
				<div className='flex-1'>
					{people.length === 0 ? (
						<div className='text-center py-12'>
							<p className='text-gray-500 text-lg'>
								Нет участников для отображения
							</p>
						</div>
					) : (
						people.map((person) => (
							<Card
								key={person.id}
								className='mb-8 hover:shadow-md transition-shadow'
							>
								<CardContent className='p-6'>
									<div className='flex items-center gap-8'>
										<div className='flex-shrink-0'>
											<div className='p-2 bg-blue-50 rounded-full'>
												<ScanFace className='w-16 h-16 text-blue-600' />
											</div>
										</div>
										<div className='flex-1'>
											<h3 className='mb-2 text-2xl font-semibold'>
												{person.name}
											</h3>
											<p className='text-xl text-gray-600'>
												{person.description}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))
					)}
				</div>
			</div>
		</div>
	)
}
