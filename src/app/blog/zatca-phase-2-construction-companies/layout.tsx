import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZATCA Phase 2 Compliance Guide for Construction Companies | NineApps Blog',
  description:
    'Complete guide to ZATCA Phase 2 e-invoicing for Saudi construction companies. UBL XML, QR codes, ECDSA signatures, VAT 15%, and progress billing compliance.',
  keywords: [
    'ZATCA Phase 2',
    'ZATCA e-invoicing',
    'ZATCA compliance construction',
    'construction accounting Saudi Arabia',
    'UBL XML invoicing',
    'VAT 15% construction',
    'progress billing ZATCA',
    'نظام فوترة ZATCA',
    'المرحلة الثانية زاتكا',
    'الفوترة الإلكترونية مقاولات',
  ],
  openGraph: {
    title: 'ZATCA Phase 2 Compliance Guide for Construction Companies',
    description: 'Everything construction companies need to know about ZATCA Phase 2 e-invoicing requirements.',
    url: 'https://nineapps.dev/blog/zatca-phase-2-construction-companies',
  },
  alternates: {
    canonical: 'https://nineapps.dev/blog/zatca-phase-2-construction-companies',
    languages: {
      'ar': 'https://nineapps.dev/blog/zatca-phase-2-construction-companies',
      'en': 'https://nineapps.dev/blog/zatca-phase-2-construction-companies',
      'x-default': 'https://nineapps.dev/blog/zatca-phase-2-construction-companies',
    },
  },
}

export default function ZatcaBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
