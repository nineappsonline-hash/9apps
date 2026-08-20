import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-cairo',
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
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
