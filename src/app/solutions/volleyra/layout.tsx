import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sports Academy Management Software | Volleyra — Booking, Scheduling & Billing',
  description:
    'Manage your volleyball, football, basketball, swimming, or padel academy with Volleyra. Player registration, training session scheduling, attendance tracking, payments, and profitability analytics — all in one platform. Start free trial.',
  keywords: [
    'sports academy management software',
    'volleyball academy software',
    'football academy management',
    'basketball academy scheduling',
    'swimming academy booking',
    'padel court booking system',
    'sports session scheduling software',
    'trainer management platform',
    'academy billing software',
    'sports attendance tracking',
    'نظام إدارة الأكاديميات الرياضية',
    'حجز ملاعب كرة القدم',
    'إدارة أكاديمية طائرة',
    'نظام حجز جلسات التدريب',
  ],
  openGraph: {
    title: 'Volleyra — Sports Academy Management Software',
    description: 'Player registration, training scheduling, attendance, payments, and analytics for sports academies.',
    images: ['/Volleyra.jpeg'],
    url: 'https://nineapps.dev/solutions/volleyra',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volleyra — Sports Academy Management Software',
    description: 'Manage your sports academy: booking, scheduling, billing, and performance analytics.',
    images: ['/Volleyra.jpeg'],
  },
  alternates: {
    canonical: 'https://nineapps.dev/solutions/volleyra',
    languages: {
      'ar': 'https://nineapps.dev/solutions/volleyra',
      'en': 'https://nineapps.dev/solutions/volleyra',
      'x-default': 'https://nineapps.dev/solutions/volleyra',
    },
  },
}

export default function VolleyraSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
