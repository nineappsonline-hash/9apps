import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers — Join the NineApps Team | Engineering, Design, Marketing Jobs',
  description:
    'Join NineApps and help build the next generation of CRM, ERP, and industry-specific SaaS platforms. We\'re hiring engineers, designers, and customer success professionals in Cairo and remotely.',
  keywords: [
    'NineApps careers',
    'NineApps jobs',
    'software engineer jobs Cairo',
    'full stack developer Egypt',
    'AI ML engineer jobs Egypt',
    'product designer remote',
    'SaaS startup jobs',
    'startup jobs Cairo',
    'remote engineering jobs Egypt',
    'customer success manager',
    'growth marketing specialist',
    'tech jobs Egypt',
    'وظائف NineApps',
    'وظائف هندسة برمجيات مصر',
    'وظائف عن بُعد مصر',
    'وظائف شركات ناشئة القاهرة',
  ],
  openGraph: {
    title: 'Careers at NineApps — Join Our Team',
    description:
      'We\'re hiring engineers, designers, and customer success professionals. Join a team redefining business software.',
    url: 'https://nineapps.dev/careers',
  },
  alternates: {
    canonical: 'https://nineapps.dev/careers',
    languages: {
      'ar': 'https://nineapps.dev/careers',
      'en': 'https://nineapps.dev/careers',
      'x-default': 'https://nineapps.dev/careers',
    },
  },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
