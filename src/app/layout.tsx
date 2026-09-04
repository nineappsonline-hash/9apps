import type { Metadata } from 'next'
import { Inter, Tajawal } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'
import { CartProvider } from '@/lib/cart'
import ClientEffects from '@/components/ClientEffects'
import StructuredData from '@/components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
  display: 'swap',
  variable: '--font-tajawal',
})

export const metadata: Metadata = {
  title: {
    default: 'NineApps — برمجيات CRM و ERP و محاسبة المقاولات | مصر والسعودية',
    template: '%s | NineApps',
  },
  description:
    'NineApps بتبني منصات SaaS مخصصة لكل قطاع: ابني (محاسبة مقاولات و ZATCA للسعودية)، كلاينتا (CRM وتذاكر لشركات SaaS B2B)، حصن (إدارة الحراسات والأمن)، و فوليرا (إدارة أكاديميات رياضية وحجز). ابدأ تجربتك المجانية النهارده.',
  keywords: [
    // Core brand
    'NineApps', ' NineApps software', ' NineApps CRM', ' NineApps ERP',
    // Ebny - Construction
    'construction accounting software', 'construction ERP Saudi Arabia', 'construction company accounting Egypt',
    'percentage of completion accounting', 'POC accounting construction', 'earned value management construction',
    'ZATCA compliance software', 'ZATCA e-invoicing Saudi Arabia', 'ZATCA Phase 2 UBL XML',
    'IFRS construction accounting', 'IFRS 15 construction revenue',
    'construction project management software', 'construction cost tracking', 'construction billing software',
    'Saudi Arabia construction software', 'Egypt construction accounting', 'مقاولات محاسبة',
    'نظام محاسبة مقاولات السعودية', 'نظام ابني', 'نسبة الإنجاز المحاسبية',
    'ZATCA الفوترة الإلكترونية', 'ضريبة القيمة المضافة مقاولات', 'زكاة شركات المقاولات',
    'construction HR payroll Saudi', 'construction procurement software',
    // Volleyra - Sports
    'sports academy management software', 'sports academy booking system',
    'volleyball academy software', 'football academy management', 'basketball academy scheduling',
    'swimming academy booking system', 'padel court booking software',
    'sports session scheduling', 'trainer management software', 'coach scheduling platform',
    'competition management sports', 'sports club management Egypt', 'athlete registration software',
    'نظام إدارة الأكاديميات الرياضية', 'حجز ملاعب كرة القدم', 'إدارة المدربين الرياضيين',
    'أكاديمية طائرة إدارة', 'حجز جلسات تدريب', 'إدارة منافسات رياضية',
    'sports attendance tracking', 'sports membership management', 'academy billing software',
    // Clienta - CRM
    'CRM software', 'CRM platform B2B', 'customer relationship management',
    'ticketing system software', 'support ticket management', 'help desk software',
    'omnichannel CRM', 'live chat widget', 'customer support platform',
    'multi-tenant CRM', 'SaaS CRM platform', 'B2B customer success software',
    'incident management software', 'customer health scoring', 'SLA management software',
    'نظام إدارة علاقات العملاء', 'نظام التذاكر', 'خدمة عملاء CRM',
    'فيجت دردشة مباشرة', 'إدارة الحوادث', 'دعم فني مؤسسات',
    // Hesn - Security
    'security services management software', 'security guard management system',
    'security company CRM', 'guard patrol management', 'site security management',
    'security operations management', 'security shift scheduling', 'guard attendance tracking',
    'security invoicing software', 'security company billing', 'guard licensing tracking',
    'نظام إدارة خدمات الحراسة', 'إدارة الحراسات الأمنية', 'إدارة المواقع الأمنية',
    'جدولة مناوبات الحراسة', 'تتبع حضور الحراس', 'فوترة شركات الأمن',
    'security personnel management', 'security contract management', 'security client portal',
    // Industry & Regional
    'SaaS Egypt', 'SaaS Saudi Arabia', 'business software Egypt', 'business software Saudi Arabia',
    'ERP software Middle East', 'CRM software Middle East',
    'accounting software Egypt', 'accounting software Saudi Arabia',
    'project management software Egypt', 'project management software Saudi Arabia',
    'business intelligence Egypt', 'enterprise software Egypt',
    'برمجيات أعمال مصر', 'برمجيات أعمال السعودية', 'أنظمة تخطيط موارد المؤسسات',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'NineApps — برمجيات CRM و ERP و محاسبة المقاولات',
    description: 'منصات SaaS مخصصة لكل قطاع: محاسبة مقاولات (ZATCA/IFRS)، CRM وتذاكر، إدارة الحراسات، وحجز أكاديميات رياضية. مصممة لمصر والسعودية.',
    type: 'website',
    images: ['/Logo.jpeg'],
    siteName: 'NineApps',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NineApps — برمجيات CRM و ERP و محاسبة المقاولات',
    description: 'منصات SaaS مخصصة لكل قطاع: محاسبة مقاولات، CRM وتذاكر، إدارة الحراسات، وأكاديميات رياضية.',
    images: ['/Logo.jpeg'],
  },
  alternates: {
    canonical: 'https://nineapps.dev',
    languages: {
      'ar': 'https://nineapps.dev',
      'en': 'https://nineapps.dev',
      'x-default': 'https://nineapps.dev',
    },
  },
  metadataBase: new URL('https://nineapps.dev'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'application-name': 'NineApps',
    'theme-color': '#0a0a1a',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${tajawal.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <StructuredData />
        <ClientEffects />
        <I18nProvider>
          <CartProvider>{children}</CartProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
