import DocumentsGrid from '@/components/documents/documents-grid'

export default function DocumentsPage() {
	return (
		<div className='container pt-20 md:pt-4 h-screen max-w-[1572px] mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-8'>Документы</h1>
			<DocumentsGrid />
		</div>
	)
}
