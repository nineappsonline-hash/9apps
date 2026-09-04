import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clienta — CRM & Customer Support Platform | Ticketing, Live Chat, SLA',
  description:
    'Clienta is a multi-tenant CRM platform for B2B SaaS companies. Unify customer service, support tickets with SLA engine, omnichannel inbox, live chat widget, incident management, knowledge base, and customer health scoring — all from a single dashboard.',
  keywords: [
    'CRM software',
    'CRM platform B2B',
    'customer relationship management',
    'ticketing system software',
    'support ticket management',
    'help desk software',
    'omnichannel CRM',
    'live chat widget software',
    'customer support platform',
    'multi-tenant CRM',
    'SaaS CRM platform',
    'B2B customer success software',
    'incident management software',
    'customer health scoring',
    'SLA management software',
    'customer service software',
    'support ticketing system',
    'knowledge base software',
    'customer portal software',
    'نظام إدارة علاقات العملاء',
    'نظام التذاكر',
    'خدمة عملاء CRM',
    'فيجت دردشة مباشرة',
    'إدارة الحوادث',
    'دعم فني مؤسسات',
    'CRM عربي',
    'نظام دعم فني',
    'إدارة طلبات الدعم',
    '软件CRM',
    'WhatsApp CRM integration',
    'VoIP CRM',
    'customer portal',
    'account health scoring',
    'churn prevention software',
    'white-label CRM',
  ],
  openGraph: {
    title: 'Clienta — CRM & Customer Support Platform',
    description:
      'Multi-tenant CRM with support tickets, SLA engine, omnichannel inbox, live chat widget, incident management, and knowledge base.',
    images: ['/Clienta-Logo.png'],
    url: 'https://nineapps.dev/clienta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clienta — CRM & Customer Support Platform',
    description:
      'Multi-tenant CRM platform for B2B SaaS with ticketing, live chat, SLA management, and customer health scoring.',
    images: ['/Clienta-Logo.png'],
  },
  alternates: {
    canonical: 'https://nineapps.dev/clienta',
    languages: {
      'ar': 'https://nineapps.dev/clienta',
      'en': 'https://nineapps.dev/clienta',
      'x-default': 'https://nineapps.dev/clienta',
    },
  },
}

export default function ClientaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
