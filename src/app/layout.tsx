import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'
import ClientEffects from '@/components/ClientEffects'

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
  title: 'NineApps — برنامج إدارة علاقات العملاء ومورد المؤسسات للفرق الحديثة',
  description:
    'حلول CRM و ERP قوية مصممة لتبسيط سير العمل، وزيادة الإنتاجية، ودفع نمو الأعمال. ابدأ تجربتك المجانية اليوم.',
  keywords: ['CRM', 'ERP', 'برمجيات أعمال', 'إدارة علاقات العملاء', 'تخطيط موارد المؤسسات'],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'NineApps — برنامج إدارة علاقات العملاء ومورد المؤسسات للفرق الحديثة',
    description: 'حلول CRM و ERP قوية مصممة لتبسيط سير العمل، وزيادة الإنتاجية، ودفع نمو الأعمال.',
    type: 'website',
    images: ['/Logo.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${cairo.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ClientEffects />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
