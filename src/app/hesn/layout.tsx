import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hesn — Security Services Management Software | Guard Patrol & Operations',
  description:
    'Hesn is a comprehensive security operations management platform. Manage security sites, guard shifts, patrol tracking, personnel HR, invoicing, client portal, licensing compliance, and real-time reporting — all from a single dashboard.',
  keywords: [
    'security services management software',
    'security guard management system',
    'security company CRM',
    'guard patrol management',
    'site security management',
    'security operations management',
    'security shift scheduling',
    'guard attendance tracking',
    'security invoicing software',
    'security company billing',
    'guard licensing tracking',
    'security personnel management',
    'security contract management',
    'security client portal',
    'guard company software',
    'security operations platform',
    'نظام إدارة خدمات الحراسة',
    'إدارة الحراسات الأمنية',
    'إدارة المواقع الأمنية',
    'جدولة مناوبات الحراسة',
    'تتبع حضور الحراس',
    'فوترة شركات الأمن',
    'نظام شركات حراسة',
    'إدارة أمن المنشآت',
    'security guard scheduling software',
    'guard management Egypt',
    'security operations Egypt',
    'security company operations',
    'patrol tracking software',
    'security reporting software',
    'guard shift management',
    'security HR management',
    'private security software',
    'manned guarding software',
  ],
  openGraph: {
    title: 'Hesn — Security Services Management Software',
    description:
      'Comprehensive security operations platform: guard management, site operations, shift scheduling, patrol tracking, billing, and client portal.',
    images: ['/Hesn-Logo.webp'],
    url: 'https://nineapps.dev/hesn',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hesn — Security Services Management Software',
    description:
      'Security operations management: guard scheduling, patrol tracking, site management, invoicing, and compliance.',
    images: ['/Hesn-Logo.webp'],
  },
  alternates: {
    canonical: 'https://nineapps.dev/hesn',
    languages: {
      'ar': 'https://nineapps.dev/hesn',
      'en': 'https://nineapps.dev/hesn',
      'x-default': 'https://nineapps.dev/hesn',
    },
  },
}

export default function HesnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
