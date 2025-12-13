// components/documents/document-card-simple.tsx
'use client'

import { Download } from 'lucide-react'

interface DocumentCardProps {
	title: string
	description: string
	fileUrl: string
	size: string
	format: string
}

export default function DocumentCard({
	title,
	description,
	fileUrl,
	size,
	format
}: DocumentCardProps) {
	const handleDownload = () => {
		// Прямая ссылка на скачивание
		const link = document.createElement('a')
		link.href = fileUrl
		link.download = `${title}.${format}`
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<div className='border rounded-lg p-4 hover:shadow-md transition-shadow'>
			<h3 className='font-semibold mb-2'>{title}</h3>
			<p className='text-sm text-gray-600 mb-4'>{description}</p>
			<div className='flex items-center justify-between'>
				<span className='text-sm text-gray-500'>
					{format.toUpperCase()} • {size}
				</span>
				<button
					onClick={handleDownload}
					className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm'
				>
					<Download className='w-4 h-4' />
					Скачать
				</button>
			</div>
		</div>
	)
}
