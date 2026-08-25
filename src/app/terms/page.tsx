'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FileText, Shield, CreditCard, Users, AlertTriangle, Scale } from 'lucide-react'
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

export default function TermsPage() {
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">{isAr ? 'شروط الخدمة' : 'Terms of Service'}</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {isAr ? 'يرجى قراءة هذه الشروط بعناية قبل استخدام NineApps. باستخدامك لمنصتنا، فإنك توافق على الالتزام بهذه الشروط.' : 'Please read these terms carefully before using NineApps. By accessing or using our platform, you agree to be bound by these terms.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <Section icon={FileText} title={isAr ? '1. قبول الشروط' : '1. Acceptance of Terms'} index={0}>
              <p>{isAr ? "بالوصول إلى NineApps ('الخدمة') أو استخدامها، أنت توافق على الالتزام بشروط الخدمة هذه ('الشروط'). إذا لم توافق على هذه الشروط، يُحظر عليك الوصول إلى الخدمة أو استخدامها. تُشكّل هذه الشروط اتفاقاً ملزماً قانونياً بينك وبين NineApps." : "By accessing or using NineApps (the \"Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, you may not access or use the Service. These Terms constitute a legally binding agreement between you and NineApps."}</p>
            </Section>

            <Section icon={Users} title={isAr ? '2. تسجيل الحساب' : '2. Account Registration'} index={1}>
              <p>{isAr ? 'يجب عليك إنشاء حساب لاستخدام NineApps. أنت توافق على تقديم معلومات دقيقة وحديثة و كاملة أثناء التسجيل وتحديث معلومات حسابك. أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وجميع الأنشطة التي تحدث تحت حسابك.' : 'To use NineApps, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information up to date. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'}</p>
            </Section>

            <Section icon={CreditCard} title={isAr ? '3. الاشتراكات والفواتير' : '3. Subscriptions & Billing'} index={2}>
              <p>{isAr ? 'يعمل NineApps على أساس الاشتراك. تجربة مجانية لمدة 14 يوماً متاحة بدون بطاقة ائتمان. بعد فترة التجربة، يتطلب اشتراك مدفوع لمواصلة استخدام الخدمة. تتجدد الاشتراكات تلقائياً في نهاية كل دورة فوترة ما لم يتم الإلغاء.' : 'NineApps operates on a subscription basis. Free trials are available for 14 days without requiring a credit card. After the trial period, a paid subscription is required to continue using the service. Subscriptions automatically renew at the end of each billing cycle unless cancelled.'}</p>
              <p>{isAr ? 'يمكنك إلغاء اشتراكك في أي وقت. يسري الإلغاء في نهاية فترة الفوترة الحالية. نحتفظ بالحق في تغيير الأسعار مع إشعار مسبق لمدة 30 يوماً.' : 'You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. We reserve the right to change pricing with 30 days\' advance notice.'}</p>
            </Section>

            <Section icon={AlertTriangle} title={isAr ? '4. استخدام الخدمة' : '4. Use of the Service'} index={3}>
              <p>{isAr ? 'يُسمح لك باستخدام NineApps فقط لأغراض مشروعة ووفقاً لهذه الشروط. أنت توافق على عدم استخدام الخدمة لإيصال أي قانون أو تنظيم ساري المفعول أو نقل محتوى ضار أو غير قانوني أو التدخل في الخدمة أو تعطيلها أو محاولة الوصول غير المصرح به إلى الخدمة أو أنظمتها Related أو استخدام الخدمة للمنافسة مع NineApps أو بناء منتج مشابه.' : 'You may use NineApps only for lawful purposes and in accordance with these Terms. You agree not to use the Service to violate any applicable law or regulation, transmit harmful or unlawful content, interfere with or disrupt the Service, attempt to gain unauthorized access to the Service or its related systems, or use the Service to compete with NineApps or build a similar product.'}</p>
            </Section>

            <Section icon={Shield} title={isAr ? '5. الملكية الفكرية' : '5. Intellectual Property'} index={4}>
              <p>{isAr ? 'جميع المحتوى والميزات ووظائف NineApps، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات والأيقونات والصور والبرنامج والتصميم، هي ملك حصري لـ NineApps ومحمية بقوانين حقوق الملكية الفكرية.' : 'All content, features, and functionality of NineApps, including but not limited to text, graphics, logos, icons, images, software, and design, are the exclusive property of NineApps and are protected by copyright, trademark, and other intellectual property laws.'}</p>
            </Section>

            <Section icon={FileText} title={isAr ? '6. البيانات والخصوصية' : '6. Data & Privacy'} index={5}>
              <p>{isAr ? 'يُحكم استخدامك لـ NineApps أيضاً بسياسة الخصوصية الخاصة بنا، والتي تم دمجها في هذه الشروط بالإشارة. يرجى مراجعة سياسة الخصوصية لفهم ممارساتنا بشأن جمع واستخدام والكشف عن معلوماتك الشخصية.' : 'Your use of NineApps is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.'}</p>
            </Section>

            <Section icon={AlertTriangle} title={isAr ? '7. تحديد المسؤولية' : '7. Limitation of Liability'} index={6}>
              <p>{isAr ? 'بأقصى حد يسمح به القانون المعمول به، لن يكون NineApps مسؤولاً عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو تonal، أو أي خسارة في الأرباح أو الإيرادات، سواء تكبدت بشكل مباشر أو غير مباشر، ناتجة عن استخدامك للخدمة أو عدم قدرتك على استخدامها.' : 'To the maximum extent permitted by applicable law, NineApps shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of or inability to use the Service.'}</p>
            </Section>

            <Section icon={Scale} title={isAr ? '8. الإنهاء' : '8. Termination'} index={7}>
              <p>{isAr ? 'يمكننا إنهاء أو تعليق حسابك والوصول إلى الخدمة فوراً، بدون إشعار مسبق أو مسؤولية، لأي سبب، بما في ذلك انتهاك هذه الشروط. عند الإنهاء، يتوقف حقك في استخدام الخدمة فوراً.' : 'We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service ceases immediately.'}</p>
            </Section>

            <Section icon={FileText} title={isAr ? '9. إخلاء المسؤولية' : '9. Disclaimers'} index={8}>
              <p>{isAr ? "تُقدّم الخدمة 'كما هي' و'كما هي متاحة' بدون ضمانات من أي نوع، سواء صريحة أو ضمنية. لا تضمن NineApps أن الخدمة ستكون دون انقطاع أو في الوقت المناسب أو آمنة أو خالية من الأخطاء." : "The Service is provided 'as is' and 'as available' without warranties of any kind, either express or implied. NineApps does not warrant that the Service will be uninterrupted, timely, secure, or error-free."}</p>
            </Section>

            <Section icon={Scale} title={isAr ? '10. القانون الحاكم' : '10. Governing Law'} index={9}>
              <p>{isAr ? 'تُخضّع هذه الشروط لقوانين جمهورية مصر العربية وتُفسّر وفقاً لها. أي نزاعات ناشئة عن هذه الشروط أو تتعلق بها تخضع للاختصاص الحصري لمحاكم القاهرة، مصر.' : 'These Terms shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Cairo, Egypt.'}</p>
            </Section>

            <Section icon={FileText} title={isAr ? '11. تغييرات على الشروط' : '11. Changes to Terms'} index={10}>
              <p>{isAr ? 'نحتفظ بحق تعديل هذه الشروط في أي وقت. سنُخطّر المستخدمين بأي تغييرات جوهرية من خلال نشر الشروط المحدّثة على هذه الصفحة. استمرارك في استخدام الخدمة بعد مثل هذه التغييرات يُشكّل قبولاً للشروط المعدلة.' : 'We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page. Your continued use of the Service after such changes constitutes acceptance of the modified Terms.'}</p>
              <div className="space-y-2 mt-3">
                <p className="text-gray-500">{isAr ? 'إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى التواصل معنا على' : 'If you have any questions about these Terms, please contact us at'}</p>
                <a href="mailto:nineappsonline@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">nineappsonline@gmail.com</a>
                <p className="text-gray-500">33, Al Andalus, 5th Settlement, Cairo, Egypt</p>
              </div>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
