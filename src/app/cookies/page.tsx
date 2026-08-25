'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Cookie, Settings, Shield, BarChart3, Mail } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

function Section({ icon: Icon, title, children, index }: { icon: React.ElementType; title: string; children: React.ReactNode; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.05 }} className="glass-card rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-indigo-400" />
        </div>
        <h2 className="text-xl font-bold gradient-text">{title}</h2>
      </div>
      <div className="space-y-4 text-gray-400 leading-relaxed text-sm">{children}</div>
    </motion.div>
  )
}

export default function CookiesPage() {
  const { locale } = useI18n()
  const isAr = locale === 'ar'

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        </div>

        <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-gray-400 mb-6">
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                {isAr ? 'آخر تحديث: أغسطس 2026' : 'Last updated: August 2026'}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">{isAr ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy'}</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {isAr ? "توضح سياسة ملفات تعريف الارتباط هذه كيف تستخدم NineApps ملفات تعريف الارتباط ('الكوكيز') والتقنيات المماثلة عندما تستخدم منصتنا." : 'This Cookie Policy explains how NineApps uses cookies and similar technologies to recognize you when you visit our website.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <Section icon={Cookie} title={isAr ? 'إيه هي ملفات تعريف الارتباط؟' : 'What Are Cookies?'} index={0}>
              <p>{isAr ? "ملفات تعريف الارتباط هي ملفات نصية صغيرة بتتوضع على جهازك لما تزور موقع إلكتروني. بتتستخدم بشكل واسع عشان تخلّي المواقع تشتغل بكفاءة وتوفر معلومات لأصحاب المواقع. ممكن تكون 'دائمة' (تفضل على جهازك لحد ما تتفضل) أو 'مبنية على الجلسة' (بتتفضل لما تقفل المتصفح)." : "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners. Cookies can be 'persistent' (remaining on your device until deleted) or 'session-based' (deleted when you close your browser)."}</p>
            </Section>

            <Section icon={Settings} title={isAr ? 'إزاي بنستخدم ملفات تعريف الارتباط' : 'How We Use Cookies'} index={1}>
              <p>{isAr ? 'بنستخدم الكوكيز للأغراض التالية:' : 'We use cookies for the following purposes:'}</p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>
                  <strong className="text-gray-300">{isAr ? 'كوكيز أساسية' : 'Essential Cookies'}</strong> — {isAr ? 'مطلوبة عشان الخدمة تشتغل بشكل صحيح (المصادقة والأمان وإدارة الجلسات).' : 'Required for the Service to function properly. These include authentication cookies that keep you logged in, security cookies that protect against fraud, and session cookies that maintain your state across pages.'}
                </li>
                <li>
                  <strong className="text-gray-300">{isAr ? 'كوكيز وظيفية' : 'Functionality Cookies'}</strong> — {isAr ? 'بتتذكر تفضيلاتك وإعداداتك عشان تحسّن تجربتك.' : 'Remember your preferences and settings, such as language selection, dashboard layout, and display preferences. These improve your experience by avoiding repeated configuration.'}
                </li>
                <li>
                  <strong className="text-gray-300">{isAr ? 'كوكيز تحليلية' : 'Analytics Cookies'}</strong> — {isAr ? 'بتساعدنا نفهم إزاي المستخدمين بيتفاعلوا مع منصتنا عشان نحسّنها.' : 'Help us understand how visitors interact with our website by collecting anonymous usage data. This information helps us improve our platform and user experience.'}
                </li>
              </ul>
            </Section>

            <Section icon={BarChart3} title={isAr ? 'الكوكيز اللي بنستخدمها' : 'Specific Cookies We Use'} index={2}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 pr-4 text-gray-300 font-medium">{isAr ? 'الكوكيز' : 'Cookie'}</th>
                      <th className="text-left py-3 pr-4 text-gray-300 font-medium">{isAr ? 'الغرض' : 'Purpose'}</th>
                      <th className="text-left py-3 text-gray-300 font-medium">{isAr ? 'المدة' : 'Duration'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-white/[0.04]">
                      <td className="py-3 pr-4 font-mono text-xs">sb-auth-token</td>
                      <td className="py-3 pr-4">{isAr ? 'المصادقة وإدارة الجلسة' : 'Authentication session'}</td>
                      <td className="py-3">Session</td>
                    </tr>
                    <tr className="border-b border-white/[0.04]">
                      <td className="py-3 pr-4 font-mono text-xs">sb-refresh-token</td>
                      <td className="py-3 pr-4">{isAr ? 'تجديد الرمز' : 'Token refresh'}</td>
                      <td className="py-3">30 {isAr ? 'أيام' : 'days'}</td>
                    </tr>
                    <tr className="border-b border-white/[0.04]">
                      <td className="py-3 pr-4 font-mono text-xs">na-language</td>
                      <td className="py-3 pr-4">{isAr ? 'تفضيل اللغة' : 'Language preference'}</td>
                      <td className="py-3">1 {isAr ? 'سنة' : 'year'}</td>
                    </tr>
                    <tr className="border-b border-white/[0.04]">
                      <td className="py-3 pr-4 font-mono text-xs">na-theme</td>
                      <td className="py-3 pr-4">{isAr ? 'تفضيل المظهر (فاتح/غامق)' : 'UI theme preference'}</td>
                      <td className="py-3">1 {isAr ? 'سنة' : 'year'}</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">_ga / _gid</td>
                      <td className="py-3 pr-4">{isAr ? 'تحليلات Google Analytics' : 'Google Analytics'}</td>
                      <td className="py-3">{isAr ? 'سنتين / 24 ساعة' : '2 years / 24 hours'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section icon={Settings} title={isAr ? 'إدارة الكوكيز' : 'Managing Cookies'} index={3}>
              <p>{isAr ? 'تقدر تتحكم وتدير الكوكيز من خلال إعدادات المتصفح. أغلب المتصفحات بتسمح لك بـ:' : 'You can control and manage cookies through your browser settings. Most browsers allow you to:'}</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>{isAr ? 'حظر جميع الكوكيز' : 'Block all cookies'}</li>
                <li>{isAr ? 'حذف الكوكيز لما تقفل المتصفح' : 'Delete cookies when you close your browser'}</li>
                <li>{isAr ? 'استلام إشعار لما الكوكيز بتتضاف' : 'Receive a notification when a cookie is set'}</li>
              </ul>
              <p>{isAr ? 'ملاحظة: تعطيل الكوكيز ممكن يأثر على وظائف الخدمة.' : 'Please note that disabling cookies may affect the functionality of the Service.'}</p>
            </Section>

            <Section icon={Shield} title={isAr ? 'كوكيز الأطراف الثالثة' : 'Third-Party Cookies'} index={4}>
              <p>{isAr ? 'بعض الكوكيز على منصتنا بتتوضع من خدمات أطراف ثالثة بنستخدمها، زي Google Analytics لتحليلات الموقع. الأطراف الثالثة دي عندها سياسات خصوصية خاصة بيها تتحكم في استخدامها للكوكيز.' : 'Some cookies on our platform are placed by third-party services we use, such as Google Analytics for website analytics. These third parties have their own privacy policies governing their use of cookies.'}</p>
            </Section>

            <Section icon={Mail} title={isAr ? 'تواصل معنا' : 'Contact Us'} index={5}>
              <p>{isAr ? 'إذا كانت لديك أي أسئلة حول استخدامنا للكوكيز، يرجى التواصل معنا:' : 'If you have any questions about our use of cookies, please contact us:'}</p>
              <a href="mailto:nineappsonline@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">nineappsonline@gmail.com</a>
              <p className="text-gray-500">33, Al Andalus, 5th Settlement, Cairo, Egypt</p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
