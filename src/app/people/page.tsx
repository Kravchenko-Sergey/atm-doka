'use client'

import { useRootStore } from '@/state/store'

export default function People() {
	const people = useRootStore((state) => state.people)
	return (
		<div className='px-4 h-full w-full max-w-[1572px] flex flex-col'>
			<div className='w-full max-w-[1448px] flex flex-col gap-8 flex-wrap lg:flex-nowrap flex-1'>
				<h1 className='text-3xl'>Участники</h1>
				<div>
					<div>
						{people.map((person) => (
							<div key={person.id} className='flex items-center gap-8'>
								<div>{person.avatar}</div>
								<div>
									<div className='mb-2 text-2xl'>{person.name}</div>
									<div className='text-xl'>{person.description}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
