import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM & Ticketing Platform for B2B SaaS | Clienta — Support, Live Chat & SLA',
  description:
    'Clienta unifies customer support tickets, SLA management, omnichannel inbox, live chat widget, incident management, and customer health scoring in one multi-tenant CRM platform. Start free trial.',
  keywords: [
    'CRM software B2B',
    'ticketing system software',
    'support ticket management',
    'omnichannel CRM platform',
    'live chat widget software',
    'help desk software',
    'SLA management software',
    'customer success platform',
    'multi-tenant CRM',
    'incident management software',
    'نظام إدارة علاقات العملاء',
    'نظام التذاكر',
    'خدمة عملاء CRM',
    'فيجت دردشة مباشرة',
  ],
  openGraph: {
    title: 'Clienta — CRM & Ticketing Platform for B2B SaaS',
    description: 'Support tickets, SLA engine, omnichannel inbox, live chat, incident management, and customer health scoring.',
    images: ['/Clienta-Logo.png'],
    url: 'https://nineapps.dev/solutions/clienta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clienta — CRM & Ticketing Platform',
    description: 'Multi-tenant CRM with ticketing, live chat, SLA management, and customer health scoring.',
    images: ['/Clienta-Logo.png'],
  },
  alternates: {
    canonical: 'https://nineapps.dev/solutions/clienta',
    languages: {
      'ar': 'https://nineapps.dev/solutions/clienta',
      'en': 'https://nineapps.dev/solutions/clienta',
      'x-default': 'https://nineapps.dev/solutions/clienta',
    },
  },
}

export default function ClientaSolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
