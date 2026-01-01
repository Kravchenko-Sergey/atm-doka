import PeopleContent from '@/components/people/people-content'
import PeoplePageSkeleton from '@/components/people/people-page-skeleton'
import { Suspense } from 'react'

export default function PeoplePage() {
	return (
		<Suspense fallback={<PeoplePageSkeleton />}>
			<PeopleContent />
		</Suspense>
	)
}
