import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'NineApps — CRM & ERP Software for Modern Teams',
  description:
    'Powerful CRM and ERP solutions designed to streamline workflows, boost productivity, and drive business growth. Start your free trial today.',
  keywords: ['CRM', 'ERP', 'business software', 'customer relationship management', 'enterprise resource planning'],
  openGraph: {
    title: 'NineApps — CRM & ERP Software for Modern Teams',
    description: 'Powerful CRM and ERP solutions designed to streamline workflows, boost productivity, and drive business growth.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
