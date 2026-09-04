import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security Guard Management Software | Hesn — Patrol, Shift & Operations Platform',
  description:
    'Hesn is a security operations management platform for guard companies. Site management, shift scheduling, patrol tracking, personnel HR, invoicing, compliance, and client portal — all from one dashboard. Start free trial.',
  keywords: [
    'security guard management software',
    'security operations platform',
    'guard patrol management',
    'security shift scheduling',
    'guard attendance tracking',
    'security company CRM',
    'security invoicing software',
    'guard licensing tracking',
    'نظام إدارة خدمات الحراسة',
    'إدارة الحراسات الأمنية',
    'جدولة مناوبات الحراسة',
    'تتبع حضور الحراس',
  ],
  openGraph: {
    title: 'Hesn — Security Guard Management Software',
    description: 'Guard management, shift scheduling, patrol tracking, invoicing, and compliance for security companies.',
    images: ['/Hesn-Logo.webp'],
    url: 'https://nineapps.dev/solutions/hesn',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hesn — Security Operations Management',
    description: 'Security operations: guard scheduling, patrol tracking, site management, and invoicing.',
    images: ['/Hesn-Logo.webp'],
  },
  alternates: {
    canonical: 'https://nineapps.dev/solutions/hesn',
    languages: {
      'ar': 'https://nineapps.dev/solutions/hesn',
      'en': 'https://nineapps.dev/solutions/hesn',
      'x-default': 'https://nineapps.dev/solutions/hesn',
    },
  },
}

export default function HesnSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
