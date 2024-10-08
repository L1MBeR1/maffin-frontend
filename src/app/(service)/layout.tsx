import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { SITE_NAME } from '@/constants/seo.constants'

import '../globals.css'
import { Providers } from '../providers'

import Base from './admin/base'

const geistSans = localFont({
	src: '../../fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: '../../fonts/GeistVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<Base>{children}</Base>
				</Providers>
			</body>
		</html>
	)
}
