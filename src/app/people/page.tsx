'use client'

import { useRootStore } from '@/state/store'

export default function People() {
	const people = useRootStore((state) => state.people)
	return (
		<div className='w-full flex flex-col gap-8 flex-wrap lg:flex-nowrap'>
			<h1 className='text-3xl'>Участники</h1>
			<div>
				<div>
					{people.map((person) => (
						<div key={person.id} className='flex items-center gap-8'>
							{person.avatar}
							<div>
								<div className='mb-2 text-2xl'>{person.name}</div>
								<div className='text-xl'>{person.description}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
