import { Skeleton } from '@/components/ui/skeleton'
import { PersonCardSkeleton } from './person-card-skeleton'

export default function PeoplePageSkeleton() {
	return (
		<div className='px-4 w-full max-w-[1572px] mx-auto flex flex-col'>
			<div className='w-full max-w-[1448px] mx-auto flex flex-col gap-8'>
				<Skeleton className='h-10 w-48' />
				<div className='flex-1 space-y-6'>
					{Array.from({ length: 1 }).map((_, index) => (
						<PersonCardSkeleton key={index} />
					))}
				</div>
			</div>
		</div>
	)
}
