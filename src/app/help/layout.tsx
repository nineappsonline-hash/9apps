import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center — FAQs, Support & Contact | NineApps',
  description:
    'Find answers to common questions about NineApps products: free trials, subscriptions, refunds, data security, team invitations, and payment methods. Contact our support team for personalized help.',
  keywords: [
    'NineApps help',
    'NineApps FAQ',
    'NineApps support',
    'NineApps contact',
    'NineApps free trial',
    'NineApps pricing',
    'NineApps refund policy',
    'NineApps data security',
    'CRM software help',
    'ERP software support',
    'construction accounting help',
    'sports academy software help',
    'security software help',
    'مركز مساعدة NineApps',
    'أسئلة شائعة NineApps',
    'تواصل مع الدعم',
    'help CRM software',
    'support ticketing help',
  ],
  openGraph: {
    title: 'Help Center — FAQs, Support & Contact | NineApps',
    description:
      'Find answers to common questions about NineApps: free trials, subscriptions, data security, and more.',
    url: 'https://nineapps.dev/help',
  },
  alternates: {
    canonical: 'https://nineapps.dev/help',
    languages: {
      'ar': 'https://nineapps.dev/help',
      'en': 'https://nineapps.dev/help',
      'x-default': 'https://nineapps.dev/help',
    },
  },
}

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
