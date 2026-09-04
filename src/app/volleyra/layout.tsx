import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volleyra — Sports Academy Management Software | Booking, Training & Scheduling',
  description:
    'Volleyra is a complete sports academy management platform. Player registration, training session scheduling, attendance tracking, membership billing, coach management, match tracking, and performance analytics for volleyball, football, basketball, swimming, padel, and more.',
  keywords: [
    'sports academy management software',
    'sports academy booking system',
    'volleyball academy software',
    'football academy management',
    'basketball academy scheduling',
    'swimming academy booking system',
    'padel court booking software',
    'sports session scheduling',
    'trainer management software',
    'coach scheduling platform',
    'competition management sports',
    'sports club management Egypt',
    'athlete registration software',
    'sports attendance tracking',
    'sports membership management',
    'academy billing software',
    'نظام إدارة الأكاديميات الرياضية',
    'حجز ملاعب كرة القدم',
    'إدارة المدربين الرياضيين',
    'أكاديمية طائرة إدارة',
    'حجز جلسات تدريب',
    'إدارة منافسات رياضية',
    'management software volleyball',
    'football training management',
    'sports academy Egypt',
    'sports academy Saudi Arabia',
    'academy management platform',
    'player registration software',
    'sports scheduling software',
    'coach management app',
    'match tracking sports',
    'sports performance analytics',
    'academy membership software',
    'sports club billing',
    'padel academy management',
    'tennis academy software',
    'martial arts academy management',
  ],
  openGraph: {
    title: 'Volleyra — Sports Academy Management Software',
    description:
      'Complete sports academy platform: player registration, training schedules, session booking, attendance, billing, and performance analytics.',
    images: ['/Volleyra.jpeg'],
    url: 'https://nineapps.dev/volleyra',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volleyra — Sports Academy Management Software',
    description:
      'Sports academy management: booking, training scheduling, attendance, billing, and performance analytics.',
    images: ['/Volleyra.jpeg'],
  },
  alternates: {
    canonical: 'https://nineapps.dev/volleyra',
    languages: {
      'ar': 'https://nineapps.dev/volleyra',
      'en': 'https://nineapps.dev/volleyra',
      'x-default': 'https://nineapps.dev/volleyra',
    },
  },
}

export default function VolleyraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
