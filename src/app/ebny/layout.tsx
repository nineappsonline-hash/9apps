import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ebny — Construction Accounting ERP | ZATCA, IFRS, Project Costing',
  description:
    'Ebny is a construction accounting ERP built for Saudi Arabia. Project accounting with percentage of completion, earned value management, ZATCA Phase 2 e-invoicing, IFRS compliance, VAT/Zakat, HR/payroll, and procurement — all in one bilingual platform.',
  keywords: [
    'construction accounting software',
    'construction ERP Saudi Arabia',
    'construction company accounting',
    'percentage of completion accounting',
    'POC accounting construction',
    'earned value management',
    'CPI SPI EAC construction',
    'ZATCA compliance software',
    'ZATCA e-invoicing Phase 2',
    'ZATCA UBL XML',
    'IFRS construction accounting',
    'IFRS 15 revenue construction',
    'construction project management',
    'construction cost tracking',
    'construction billing software',
    'construction procurement',
    'construction HR payroll',
    'Saudi Arabia construction software',
    'Egypt construction accounting',
    'مقاولات محاسبة',
    'نظام محاسبة مقاولات',
    'نظام ابني',
    'نسبة الإنجاز المحاسبية',
    'ZATCA الفوترة الإلكترونية',
    'ضريبة القيمة المضافة مقاولات',
    'زكاة شركات المقاولات',
    'إدارة مشاريع مقاولات',
    'محاسبة مشاريع بناء',
    'construction accounting Egypt',
    'construction ERP Egypt',
    'Saudi construction management',
    'bank reconciliation software',
    'accounts receivable construction',
    'change order management',
  ],
  openGraph: {
    title: 'Ebny — Construction Accounting ERP | ZATCA & IFRS Compliant',
    description:
      'Purpose-built for the Saudi construction industry. Project accounting, percentage of completion, ZATCA e-invoicing, IFRS compliance, HR/payroll, and field operations.',
    images: ['/Ebny-Logo.webp'],
    url: 'https://nineapps.dev/ebny',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ebny — Construction Accounting ERP',
    description:
      'Construction accounting ERP for Saudi Arabia with ZATCA compliance, IFRS, project cost control, and HR/payroll.',
    images: ['/Ebny-Logo.webp'],
  },
  alternates: {
    canonical: 'https://nineapps.dev/ebny',
    languages: {
      'ar': 'https://nineapps.dev/ebny',
      'en': 'https://nineapps.dev/ebny',
      'x-default': 'https://nineapps.dev/ebny',
    },
  },
}

export default function EbnyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
