'use client'

import { useRootStore } from '@/state/store'
import Link from 'next/link'

export default function People() {
	const people = useRootStore((state) => state.people)
	return (
		<div className='px-4 h-full w-full max-w-[1448px] flex flex-col'>
			<header
				className={`max-w-[1448px] py-6 w-full flex justify-center gap-8 whitespace-nowrap bg-white 2xl:px-0`}
			>
				<div className='w-full max-w-[1480px] flex justify-start'>
					<Link
						href={'/'}
						className='px-8 py-2 text-3xl border rounded-xl z-10'
					>
						АТМ Дока
					</Link>
				</div>
			</header>
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
