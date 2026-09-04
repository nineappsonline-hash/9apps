import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Manage a Sports Academy: Complete Guide 2026 | NineApps Blog',
  description:
    'Complete guide to managing a sports academy in 2026. Player registration, training scheduling, attendance tracking, payments, and profitability analytics for volleyball, football, basketball, swimming, and padel academies.',
  keywords: [
    'sports academy management',
    'how to manage a sports academy',
    'academy scheduling software',
    'volleyball academy management',
    'football academy guide',
    'sports club management Egypt',
    'academy billing software',
    'نظام إدارة الأكاديميات الرياضية',
    'إدارة أكاديمية كرة قدم',
  ],
  openGraph: {
    title: 'How to Manage a Sports Academy: Complete Guide 2026',
    description: 'From player registration to profitability analysis — everything about running a modern sports academy.',
    url: 'https://nineapps.dev/blog/sports-academy-management-guide',
  },
  alternates: {
    canonical: 'https://nineapps.dev/blog/sports-academy-management-guide',
    languages: {
      'ar': 'https://nineapps.dev/blog/sports-academy-management-guide',
      'en': 'https://nineapps.dev/blog/sports-academy-management-guide',
      'x-default': 'https://nineapps.dev/blog/sports-academy-management-guide',
    },
  },
}

export default function SportsAcademyBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
