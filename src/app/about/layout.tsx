import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About NineApps — Our Mission, Team & Story',
  description:
    'Learn about NineApps: the team building the next generation of CRM, ERP, and industry-specific SaaS platforms for construction, security, sports, and customer success teams across Egypt and the Middle East.',
  keywords: [
    'about NineApps',
    'NineApps company',
    'NineApps team',
    'software company Egypt',
    'SaaS company Cairo',
    'CRM ERP company Middle East',
    'construction accounting software company',
    'business software Egypt',
    'SaaS startup Egypt',
    'about software company',
    'فريق NineApps',
    'شركة NineApps',
    'شركة برمجيات مصر',
    'شركة SaaS مصر',
  ],
  openGraph: {
    title: 'About NineApps — Our Mission, Team & Story',
    description:
      'Building the next generation of CRM, ERP, and industry-specific SaaS platforms for businesses across Egypt and the Middle East.',
    url: 'https://nineapps.dev/about',
  },
  alternates: {
    canonical: 'https://nineapps.dev/about',
    languages: {
      'ar': 'https://nineapps.dev/about',
      'en': 'https://nineapps.dev/about',
      'x-default': 'https://nineapps.dev/about',
    },
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
