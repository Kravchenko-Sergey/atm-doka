'use client'

import { ScanFace } from 'lucide-react'
import { Person } from '@/lib/types'

interface PersonCardProps {
	person: Person
}

export default function PersonCard({ person }: PersonCardProps) {
	return (
		<div className='flex items-center gap-8 mb-8'>
			<div>
				<ScanFace className='w-16 h-16' />
			</div>
			<div>
				<p className='mb-2 text-2xl'>{person.name}</p>
				<p className='text-xl'>{person.description}</p>
			</div>
		</div>
	)
}
