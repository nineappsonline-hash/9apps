'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Shield, Database, Settings, Users, Globe, Lock, Mail } from 'lucide-react'
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

export default function GdprPage() {
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">{isAr ? 'الامتثال لـ GDPR' : 'GDPR Compliance'}</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {isAr ? 'ملتزم NineApps بالامتثال للائحة العامة لحماية البيانات (GDPR). بيّض وثيقة هذه كيف نعالج بياناتك ونحميها وفقاً لمتطلبات GDPR.' : 'NineApps is committed to compliance with the General Data Protection Regulation (GDPR). This page outlines how we protect the data rights of users in the European Union and European Economic Area.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <Section icon={Shield} title={isAr ? 'التزامنا' : 'Our Commitment'} index={0}>
              <p>{isAr ? 'ملتزم NineApps بحماية الخصوصية وحقوق البيانات لجميع المستخدمين داخل الاتحاد الأوروبي والمنطقة الاقتصادية الأوروبية. نُ implement تدابير تنظيمية وتقنية مناسبة لضمان مستوى عالٍ من حماية البيانات.' : 'NineApps is committed to protecting the privacy and data rights of all users within the European Union and European Economic Area. We implement appropriate technical and organizational measures to ensure a high level of data protection.'}</p>
            </Section>

            <Section icon={Database} title={isAr ? 'البيانات اللي بنعالجها' : 'Data We Process'} index={1}>
              <p>{isAr ? 'بنعالج فئات البيانات الشخصية التالية:' : 'We process the following categories of personal data:'}</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>{isAr ? 'بيانات الحساب: اسمك وعنوان بريدك الإلكتروني واسم شركتك وكلمة المرور.' : 'Account Data: name, email address, company name, and password.'}</li>
                <li>{isAr ? 'بيانات الدفع: معلومات الفوترة وتفاصيل طريقة الدفع المعالجة بشكل آمن من خلال معالجي الدفع من أطراف ثالثة.' : 'Payment Data: billing information and payment method details processed securely through third-party payment processors.'}</li>
                <li>{isAr ? 'بيانات الاستخدام: معلومات حول كيفية تفاعلك مع منصتنا، بما في ذلك الميزات المستخدمة والصفحات التي تزورها والإجراءات المتخذة.' : 'Usage Data: information about how you interact with our platform, including features used, pages visited, and actions taken.'}</li>
                <li>{isAr ? 'بيانات الاتصال: الرسائل المرسلة لفريق الدعم أو من خلال نماذج الملاحظات داخل التطبيق.' : 'Communication Data: messages sent to our support team or through in-app feedback forms.'}</li>
              </ul>
            </Section>

            <Section icon={Users} title={isAr ? 'حقوقك بموجب GDPR' : 'Your GDPR Rights'} index={2}>
              <p>{isAr ? 'بموجب GDPR، لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:' : 'Under GDPR, you have the following rights regarding your personal data:'}</p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li><strong className="text-gray-300">{isAr ? 'الحق في الوصول' : 'Right of Access'}</strong> — {isAr ? 'تطلب نسخة من البيانات الشخصية اللي بنحتفظ بيها عنك.' : 'You may request a copy of the personal data we hold about you.'}</li>
                <li><strong className="text-gray-300">{isAr ? 'الحق في التصحيح' : 'Right to Rectification'}</strong> — {isAr ? 'تطلب تصحيح بيانات غير دقيقة أو غير مكتملة.' : 'You may request correction of inaccurate or incomplete data.'}</li>
                <li><strong className="text-gray-300">{isAr ? 'الحق في المحو' : 'Right to Erasure'}</strong> — {isAr ? 'تطلب حذف بياناتك الشخصية، مع مراعاة الالتزامات القانونية.' : 'You may request deletion of your personal data, subject to legal obligations.'}</li>
                <li><strong className="text-gray-300">{isAr ? 'الحق في تقييد المعالجة' : 'Right to Restrict Processing'}</strong> — {isAr ? 'تطلب منا تقييد معالجة بياناتك.' : 'You may request that we limit the processing of your data.'}</li>
                <li><strong className="text-gray-300">{isAr ? 'الحق في نقل البيانات' : 'Right to Data Portability'}</strong> — {isAr ? 'تطلب نقل بياناتك إلى خدمة أخرى بتنسيق منظم وقابل للقراءة آلياً.' : 'You may request transfer of your data to another service in a structured, machine-readable format.'}</li>
                <li><strong className="text-gray-300">{isAr ? 'الحق في الاعتراض' : 'Right to Object'}</strong> — {isAr ? 'تعارض معالجة بياناتك لأغراض معينة.' : 'You may object to the processing of your data for certain purposes.'}</li>
              </ul>
            </Section>

            <Section icon={Lock} title={isAr ? 'أمن البيانات' : 'Data Security'} index={3}>
              <p>{isAr ? 'نطبّق تدابير أمان متوافقة مع معايير الصناعة لحماية بياناتك، بما في ذلك تشفير AES-256 عند السكون وتشفير TLS 1.3 أثناء النقل والتحكم في الوصول المستند إلى الأدوار والتدقيق الأمني الدوري.' : 'We implement industry-standard security measures to protect your data, including AES-256 encryption at rest, TLS 1.3 encryption in transit, role-based access controls, and regular security audits.'}</p>
            </Section>

            <Section icon={Globe} title={isAr ? 'النقل الدولي للبيانات' : 'International Data Transfers'} index={4}>
              <p>{isAr ? 'قد يعالج NineApps بيانات في دول خارج المنطقة الاقتصادية الأوروبية (EEA). عندما ننقل البيانات دولياً، نضمن وجود ضمانات مناسبة، بما في ذلك البنود التعاقدية المعيارية (SCCs) المعتمدة من الم Commission الأوروبية.' : 'NineApps may process data in countries outside the European Economic Area (EEA). When we transfer data internationally, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the European Commission.'}</p>
            </Section>

            <Section icon={Settings} title={isAr ? 'الاحتفاظ بالبيانات' : 'Data Retention'} index={5}>
              <p>{isAr ? 'نحتفظ ببياناتك الشخصية فقط طالما ذلك ضروري لتحقيق الأغراض التي تم جمعها من أجلها. تُحتفظ ببيانات الحساب لمدة 30 يوماً بعد الإلغاء للسماح بإعادة التفعيل أو تصدير البيانات، وبعد ذلك تُحذف نهائياً.' : 'We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected. Account data is retained for 30 days after cancellation to allow for reactivation or data export, after which it is permanently deleted.'}</p>
            </Section>

            <Section icon={Mail} title={isAr ? 'ممارسة حقوقك' : 'Exercising Your Rights'} index={6}>
              <p>{isAr ? 'لممارسة أي من حقوقك بموجب GDPR، يرجى التواصل معنا عبر البريد الإلكتروني أدناه. سنرد على طلبك خلال 30 يوماً.' : 'To exercise any of your GDPR rights, please contact us at the email below. We will respond to your request within 30 days.'}</p>
              <div className="space-y-2 mt-3">
                <a href="mailto:nineappsonline@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">nineappsonline@gmail.com</a>
                <p className="text-gray-500">33, Al Andalus, 5th Settlement, Cairo, Egypt</p>
              </div>
              <p className="mt-4">{isAr ? 'إذا لم تكن راضياً عن ردنا، لديك الحق في تقديم شكوى لدى سلطة حماية البيانات المحلية (DPA).' : 'If you are not satisfied with our response, you have the right to lodge a complaint with your local Data Protection Authority (DPA).'}</p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
