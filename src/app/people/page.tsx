'use client'

import { useRootStore } from '@/state/store'

export default function People() {
	const people = useRootStore((state) => state.people)
	return (
		<div className='px-4 w-full max-w-[1572px] mx-auto h-[calc(100vh-191px)] flex flex-col'>
			<div className='w-full max-w-[1448px] mx-auto flex flex-col gap-8'>
				<h1 className='text-3xl'>Участники</h1>
				<div className='flex-1'>
					{people.map((person) => (
						<div key={person.id} className='flex items-center gap-8 mb-8'>
							<div>{person.avatar}</div>
							<div>
								<p className='mb-2 text-2xl'>{person.name}</p>
								<p className='text-xl'>{person.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
