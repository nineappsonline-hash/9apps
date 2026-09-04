import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM vs Help Desk: What\'s the Difference? | NineApps Blog',
  description:
    'Understand the difference between CRM software and help desk tools — and why modern B2B SaaS companies need both in one unified platform.',
  keywords: [
    'CRM vs help desk',
    'CRM vs ticketing system',
    'help desk vs CRM software',
    'what is CRM software',
    'customer support platform',
    'B2B SaaS CRM',
    'unified CRM platform',
    'نظام CRM',
    'نظام إدارة علاقات العملاء',
    'نظام التذاكر',
  ],
  openGraph: {
    title: 'CRM vs Help Desk: What\'s the Difference?',
    description: 'Understanding the difference between CRM and help desk — and why you need both.',
    url: 'https://nineapps.dev/blog/crm-vs-helpdesk-guide',
  },
  alternates: {
    canonical: 'https://nineapps.dev/blog/crm-vs-helpdesk-guide',
    languages: {
      'ar': 'https://nineapps.dev/blog/crm-vs-helpdesk-guide',
      'en': 'https://nineapps.dev/blog/crm-vs-helpdesk-guide',
      'x-default': 'https://nineapps.dev/blog/crm-vs-helpdesk-guide',
    },
  },
}

export default function CrmHelpdeskBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
