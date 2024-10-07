import { Metadata } from 'next'

import { SITE_NAME } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `Анализ продаж | ${SITE_NAME}`
	},
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='flex flex-col'>
			<div>123</div>
			{children}
		</div>
	)
}
