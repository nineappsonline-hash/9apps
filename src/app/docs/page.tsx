'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useI18n } from '@/lib/i18n'
import { BookOpen, Rocket, Settings, Database, Shield, Code } from 'lucide-react'

function DocSection({ icon: Icon, title, children, index }: { icon: React.ElementType; title: string; children: React.ReactNode; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.05 }} className="glass-card rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-indigo-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      </div>
      <div className="space-y-3 text-sm text-gray-400 leading-relaxed">{children}</div>
    </motion.div>
  )
}

export default function DocsPage() {
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">{isAr ? 'التوثيق' : 'Documentation'}</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {isAr ? 'كل اللي محتاجه عشان تبدأ مع NineApps. أدلة وشروحات ومراجع لجميع منتجاتنا.' : 'Everything you need to get started with NineApps. Guides, tutorials, and reference materials for all our products.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            <DocSection icon={Rocket} title={isAr ? 'البدء السريع' : 'Getting Started'} index={0}>
              <ul className="space-y-1.5 list-disc list-inside">
                {isAr ? <li>دليل البدء السريع</li> : <li>Quick Start Guide</li>}
                {isAr ? <li>إنشاء حسابك الأول</li> : <li>Creating Your First Account</li>}
                {isAr ? <li>فهم لوحة التحكم</li> : <li>Understanding the Dashboard</li>}
                {isAr ? <li>دعوة أعضاء الفريق</li> : <li>Inviting Team Members</li>}
                {isAr ? <li>إعداد مساحة العمل الخاصة بك</li> : <li>Configuring Your Workspace</li>}
              </ul>
            </DocSection>

            <DocSection icon={Database} title={isAr ? 'مجموعة CRM' : 'CRM Suite'} index={1}>
              <ul className="space-y-1.5 list-disc list-inside">
                {isAr ? <li>إعداد مدير جهات الاتصال</li> : <li>Contact Manager Setup</li>}
                {isAr ? <li>دليل حملات البريد الإلكتروني</li> : <li>Email Campaigns Guide</li>}
                {isAr ? <li>إعداد تتبع المكالمات</li> : <li>Call Tracker Configuration</li>}
                {isAr ? <li>إدارة خط المبيعات</li> : <li>Sales Pipeline Management</li>}
                {isAr ? <li>التعاون في غرفة الصفقات</li> : <li>Deal Room Collaboration</li>}
              </ul>
            </DocSection>

            <DocSection icon={Settings} title={isAr ? 'منصة ERP' : 'ERP Platform'} index={2}>
              <ul className="space-y-1.5 list-disc list-inside">
                {isAr ? <li>إعداد التحكم بالmockzoon</li> : <li>Inventory Control Setup</li>}
                {isAr ? <li>إعداد سلسلة التوريد</li> : <li>Supply Chain Configuration</li>}
                {isAr ? <li>دليل Suite المالي</li> : <li>Financial Suite Guide</li>}
                {isAr ? <li>تفعيل إدارة الموارد البشرية</li> : <li>HR Management Onboarding</li>}
                {isAr ? <li>إعداد فوترة المشاريع</li> : <li>Project Billing Setup</li>}
              </ul>
            </DocSection>

            <DocSection icon={Shield} title={isAr ? 'الأمان والامتثال' : 'Security & Compliance'} index={3}>
              <ul className="space-y-1.5 list-disc list-inside">
                {isAr ? <li>أفضل ممارسات الأمان</li> : <li>Security Best Practices</li>}
                {isAr ? <li>التحكم في الوصول المستند للأدوار</li> : <li>Role-Based Access Control</li>}
                {isAr ? <li>نظرة عامة على تشفير البيانات</li> : <li>Data Encryption Overview</li>}
                {isAr ? <li>دليل امتثال GDPR</li> : <li>GDPR Compliance Guide</li>}
                {isAr ? <li>سجلات التدقيق والمراقبة</li> : <li>Audit Logs & Monitoring</li>}
              </ul>
            </DocSection>

            <DocSection icon={Code} title={isAr ? 'التكاملات' : 'Integrations'} index={4}>
              <ul className="space-y-1.5 list-disc list-inside">
                {isAr ? <li>نظرة عامة على API</li> : <li>API Overview</li>}
                {isAr ? <li>إعداد Webhooks</li> : <li>Webhooks Configuration</li>}
                {isAr ? <li>التكاملات مع الأطراف الثالثة</li> : <li>Third-Party Integrations</li>}
                {isAr ? <li>استيراد وتصدير البيانات</li> : <li>Data Import & Export</li>}
                {isAr ? <li>سير العمل المخصص</li> : <li>Custom Workflows</li>}
              </ul>
            </DocSection>

            <DocSection icon={BookOpen} title={isAr ? 'الفواتير والحساب' : 'Billing & Account'} index={5}>
              <ul className="space-y-1.5 list-disc list-inside">
                {isAr ? <li>إدارة الاشتراكات</li> : <li>Subscription Management</li>}
                {isAr ? <li>طرق الدفع</li> : <li>Payment Methods</li>}
                {isAr ? <li>الفواتير والإيصالات</li> : <li>Invoice & Receipts</li>}
                {isAr ? <li>إعدادات الحساب</li> : <li>Account Settings</li>}
                {isAr ? <li>تصدير البيانات والحذف</li> : <li>Data Export & Deletion</li>}
              </ul>
            </DocSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
