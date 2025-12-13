// components/documents/documents-grid-simple.tsx
'use client'

import DocumentCardSimple from './document-card'

const documents = [
	{
		id: 1,
		title: 'Чек-лист X5',
		description: 'Пошаговый список проверок перед сдачей',
		fileUrl: '/documents//checklistX5.docx',
		size: '13.5 KB',
		format: 'docx'
	}
]

export default function DocumentsGridSimple() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{documents.map((doc) => (
				<DocumentCardSimple
					key={doc.id}
					title={doc.title}
					description={doc.description}
					fileUrl={doc.fileUrl}
					size={doc.size}
					format={doc.format}
				/>
			))}
		</div>
	)
}
