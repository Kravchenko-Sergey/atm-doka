import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent } from '@/components/ui/card'

export function PersonCardSkeleton() {
	return (
		<Card className='mb-8'>
			<CardContent className='p-6'>
				<div className='flex items-center gap-8'>
					<div>
						<Skeleton className='w-16 h-16 rounded-full' />
					</div>
					<div className='flex-1 space-y-3'>
						<Skeleton className='h-7 w-64' />
						<Skeleton className='h-5 w-96' />
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
