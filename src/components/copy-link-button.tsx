'use client'

import { Link as LinkIcon } from 'lucide-react'
import { toast } from 'sonner'
import { useState } from 'react'

interface CopyLinkButtonProps {
	id: string
	color?: string
}

export function CopyLinkButton({ id, color = '#3b82f6' }: CopyLinkButtonProps) {
	const [isCopied, setIsCopied] = useState(false)

	const copyLink = async () => {
		const url = `${window.location.origin}${window.location.pathname}#${id}`

		try {
			await navigator.clipboard.writeText(url)

			setIsCopied(true)
			setTimeout(() => setIsCopied(false), 300)

			toast.success('Ссылка скопирована')
		} catch {
			toast.error('Ошибка копирования')
		}
	}

	return (
		<button onClick={copyLink} className='inline-flex items-center ml-2 translate-y-[2px]' title='Копировать ссылку'>
			<LinkIcon
				className='h-4 w-4 hover:scale-110 transition-all duration-200'
				style={{
					color: isCopied ? color : '#6b7280'
				}}
			/>
		</button>
	)
}
