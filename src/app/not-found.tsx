import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='w-full h-[calc(100vh-191px)] flex flex-col items-center justify-center gap-4'>
			<p className='text-9xl'>404</p>
			<h2 className='text-3xl'>Страница не найдена</h2>
			<div className='flex flex-col items-center justify-center'>
				<p>Возможно, она была удалена</p>
				<p>Или её съели тараканы</p>
			</div>
			<Button variant={'outline'}>
				<Link href='/'>На главную</Link>
			</Button>
		</div>
	)
}
