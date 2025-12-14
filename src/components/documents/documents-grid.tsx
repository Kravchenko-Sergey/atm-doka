// components/documents/documents-grid-simple.tsx
'use client'

import DocumentCard from './document-card'

const documents = [
	{
		id: 1,
		title: 'Акт принятия оказанных услуг',
		description: 'Документ подтверждающий прием выполненных работ и услуг',
		fileUrl: '/documents/installationCertificate.docx',
		size: '18.5 KB',
		format: 'docx'
	},
	{
		id: 2,
		title: 'Акт экспертизы оборудования и sim-карт',
		description:
			'Заключение о проверке и оценке состояния оборудования и sim-карт',
		fileUrl: '/documents/expertReport.docx',
		size: '23.2 KB',
		format: 'docx'
	},
	{
		id: 3,
		title: 'Чек-лист X5',
		description: 'Пошаговый список проверок перед сдачей',
		fileUrl: '/documents/checklistX5.docx',
		size: '13.5 KB',
		format: 'docx'
	}
]

export default function DocumentsGrid() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{documents.map((doc) => (
				<DocumentCard
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
