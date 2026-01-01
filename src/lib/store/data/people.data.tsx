import { v4 } from 'uuid'
import { ScanFace } from 'lucide-react'
import { Person } from '@/lib/types'

export const peopleData: Person[] = [
	{
		id: v4(),
		name: 'Сергей Кравченко',
		description: 'Не знал где скачать прошивку. Поэтому создал доку'
	}
]
