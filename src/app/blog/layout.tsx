import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Insights, Updates & Industry Trends | NineApps',
  description:
    'Read the latest insights from the NineApps team: product updates, CRM best practices, ERP strategies, construction accounting tips, AI in customer service, and software engineering deep dives.',
  keywords: [
    'NineApps blog',
    'CRM blog',
    'ERP blog',
    'construction accounting blog',
    'software engineering blog',
    'SaaS best practices',
    'AI customer relationship management',
    'ERP best practices',
    'business software trends',
    'customer success tips',
    'construction accounting tips',
    'SOC 2 compliance',
    'modular SaaS architecture',
    'مدونة NineApps',
    'مدونة CRM',
    'مدونة ERP',
    'أفضل ممارسات البرمجيات',
    'اتجاهات الصناعة',
  ],
  openGraph: {
    title: 'Blog — Insights, Updates & Industry Trends | NineApps',
    description:
      'Product updates, CRM best practices, ERP strategies, construction accounting tips, and software engineering deep dives from the NineApps team.',
    url: 'https://nineapps.dev/blog',
  },
  alternates: {
    canonical: 'https://nineapps.dev/blog',
    languages: {
      'ar': 'https://nineapps.dev/blog',
      'en': 'https://nineapps.dev/blog',
      'x-default': 'https://nineapps.dev/blog',
    },
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
