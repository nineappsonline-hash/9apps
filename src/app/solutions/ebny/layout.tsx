import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Construction Accounting ERP — ZATCA & IFRS Compliant | Ebny',
  description:
    'Ebny is a construction accounting ERP built for Saudi Arabia. Project cost control, percentage of completion billing, ZATCA Phase 2 e-invoicing, IFRS compliance, HR/payroll, and procurement — all in one bilingual platform. Start free trial.',
  keywords: [
    'construction accounting software',
    'construction ERP Saudi Arabia',
    'ZATCA compliance software',
    'ZATCA e-invoicing Phase 2',
    'percentage of completion accounting',
    'construction project management',
    'IFRS construction accounting',
    'construction billing software',
    'نظام محاسبة مقاولات',
    'نظام ابني',
    'ZATCA الفوترة الإلكترونية',
    'نسبة الإنجاز المحاسبية',
  ],
  openGraph: {
    title: 'Ebny — Construction Accounting ERP | ZATCA & IFRS',
    description: 'Project cost control, POC billing, ZATCA e-invoicing, IFRS compliance, and HR/payroll for Saudi construction.',
    images: ['/Ebny-Logo.webp'],
    url: 'https://nineapps.dev/solutions/ebny',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ebny — Construction Accounting ERP',
    description: 'Construction accounting with ZATCA compliance, IFRS, project cost control, and HR/payroll.',
    images: ['/Ebny-Logo.webp'],
  },
  alternates: {
    canonical: 'https://nineapps.dev/solutions/ebny',
    languages: {
      'ar': 'https://nineapps.dev/solutions/ebny',
      'en': 'https://nineapps.dev/solutions/ebny',
      'x-default': 'https://nineapps.dev/solutions/ebny',
    },
  },
}

export default function EbnySolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
