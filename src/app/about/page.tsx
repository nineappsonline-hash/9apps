'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Target, Users, Globe, Zap, Heart, Shield } from 'lucide-react'
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

export default function AboutPage() {
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">{isAr ? 'عن NineApps' : 'About NineApps'}</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {isAr ? 'بنبني الجيل الجديد من برمجيات الأعمال — أدوات CRM و ERP قوية مصممة للفرق الحديثة. مهمتنا إننا نخلّي برمجيات على مستوى المؤسسات متاحة وسهلة الاستخدام وبسعر مناسب لأي حجم شركة.' : 'We\'re building the next generation of business software — powerful CRM and ERP tools designed for modern teams. Our mission is to make enterprise-grade software accessible, intuitive, and affordable for businesses of every size.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <Section icon={Target} title={isAr ? 'مهمتنا' : 'Our Mission'} index={0}>
              <p>{isAr ? 'NineApps اتأسست بمهمة واضحة: إنها تempower الشركات ببرمجيات ذكية ومرنة بتتلاءم مع احتياجاتها.unique. إحنا مؤمنين إن كل شركة — من الشركات الناشئة لحد الشركات الكبيرة — تستاهل توصل لأدوات CRM و ERP عالمية من غير التعقيد والتكلفة اللي عادةً مرتبطة بيها.' : 'NineApps was founded with a clear mission: to empower businesses with intelligent, modular software that adapts to their unique needs. We believe that every company — from startups to enterprises — deserves access to world-class CRM and ERP tools without the complexity and cost traditionally associated with them.'}</p>
              <p>{isAr ? 'منصتنا مبنية على مبدأ إن برمجيات الأعمال لازم تشتغل عشانك، مش العكس. عشان كده صممنا NineApps يكون مرن، وتقدر تختار بالظبط الأدوات اللي محتاجها وتكبر معاك.' : 'Our platform is built on the principle that business software should work for you, not the other way around. That\'s why we designed NineApps to be modular, allowing you to pick exactly the tools you need and scale as you grow.'}</p>
            </Section>

            <Section icon={Users} title={isAr ? 'فريقنا' : 'Our Team'} index={1}>
              <p>{isAr ? 'إحنا فريق متنوع وموزّع من المهندسين والمصممين ومحترفي الأعمال اللي شغفهم إنهم يحلوا مشاكل حقيقية لشركات حقيقية. فريقنا موجود في القاهرة، مصر وبرّاها، وبيجمع خبرات في هندسة البرمجيات والذكاء الاصطناعي وهندسة المؤسسات ونجاح العملاء.' : 'We are a diverse, distributed team of engineers, designers, and business professionals passionate about solving real problems for real businesses. Our team spans across Cairo, Egypt and beyond, bringing together expertise in software engineering, AI/ML, enterprise architecture, and customer success.'}</p>
              <p>{isAr ? 'بنشتغل بالشفافية والسرعة والالتزام العميق بنجاح عملاءنا. كل ميزة بنبنيها بتبدأ بمحادثة مع الناس اللي بتستخدمها.' : 'We operate with transparency, speed, and a deep commitment to our customers\' success. Every feature we build starts with a conversation with the people who use it.'}</p>
            </Section>

            <Section icon={Globe} title={isAr ? 'قصتنا' : 'Our Story'} index={2}>
              <p>{isAr ? 'NineApps اتولد من إحباط مع برمجيات الأعمال الحالية — أدوات إما غالية أوي أو معقدة أوي أو مرنة أوي. قررنا نبني منصة تجمع قوة برمجيات المؤسسات مع البساطة اللي الفرق الحديثة متوقعاه.' : 'NineApps was born out of frustration with existing business software — tools that were either too expensive, too complicated, or too rigid. We set out to create a platform that combines the power of enterprise software with the simplicity modern teams expect.'}</p>
              <p>{isAr ? 'ابتداءً بـ CRM Suite، سرنا نوسع لـ ERP Platform كامل، يغطي كل حاجة من إدارة جهات الاتصال وخطوط المبيعات لحد التحكم بالمخزون والتقارير المالية وإدارة الموارد البشرية. النهارده، NineApps بيخدم شركات في الشرق الأوسط وبرّاه.' : 'Starting with our CRM Suite, we quickly expanded to a full ERP Platform, covering everything from contact management and sales pipelines to inventory control, financial reporting, and HR management. Today, NineApps serves businesses across the Middle East and beyond.'}</p>
            </Section>

            <Section icon={Zap} title={isAr ? 'تقنيتنا' : 'Our Technology'} index={3}>
              <p>{isAr ? 'بنستفيد من تقنيات متطورة عشان نوصّل منصة سريعة وموثوقة وآمنة. الـ stack بتاعنا مبني على بنية تحتية سحابية حديثة مع رؤى مدعومة بالذكاء الاصطناعي مدمجة في كل وحدة. من التحليلات الفورية لأتمتة سير العمل الذكية، تقنيتنا مصممة عشان تديك ميزة تنافسية.' : 'We leverage cutting-edge technology to deliver a fast, reliable, and secure platform. Our stack is built on modern cloud infrastructure with AI-powered insights baked into every module. From real-time analytics to intelligent workflow automation, our technology is designed to give you a competitive edge.'}</p>
              <p>{isAr ? 'ملتزمين بأمان على مستوى المؤسسات مع تشفير AES-256 والتحكم في الوصول المستند للأدوار والامتثال لمعايير GDPR و SOC 2 و HIPAA.' : 'We are committed to enterprise-grade security with AES-256 encryption, role-based access controls, and compliance with GDPR, SOC 2, and HIPAA standards.'}</p>
            </Section>

            <Section icon={Heart} title={isAr ? 'قيمنا' : 'Our Values'} index={4}>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li><strong className="text-gray-300">{isAr ? 'العميل أولاً' : 'Customer First'}</strong> — {isAr ? 'كل قرار بنأخده بيبدأ بالسؤال: "إزاي ده بيساعد عملاءنا؟"' : 'Every decision we make starts with the question: "How does this help our customers?"'}</li>
                <li><strong className="text-gray-300">{isAr ? 'البساطة' : 'Simplicity'}</strong> — {isAr ? 'القوة مش لازم تعني التعقيد. بن执着 إننا نخلّي سير العمل المعقد يبقى سهل.' : 'Powerful doesn\'t have to mean complicated. We obsess over making complex workflows feel effortless.'}</li>
                <li><strong className="text-gray-300">{isAr ? 'الشفافية' : 'Transparency'}</strong> — {isAr ? 'مؤمنين بأسعار صادقة وتواصل واضح وعلاقات مفتوحة مع مستخدمينا.' : 'We believe in honest pricing, clear communication, and open relationships with our users.'}</li>
                <li><strong className="text-gray-300">{isAr ? 'الابتكار' : 'Innovation'}</strong> — {isAr ? 'بندفع الحدود دايماً، مستفيدين بالذكاء الاصطناعي والتقنيات الحديثة عشان نحل مشاكل الأمس بطرق جديدة.' : 'We constantly push boundaries, leveraging AI and modern technology to solve yesterday\'s problems in new ways.'}</li>
                <li><strong className="text-gray-300">{isAr ? 'الأمان' : 'Security'}</strong> — {isAr ? 'الثقة بتتبنى. بنحمي بياناتك بأعلى معايير في الصناعة.' : 'Trust is earned. We protect your data with the highest standards in the industry.'}</li>
              </ul>
            </Section>

            <Section icon={Shield} title={isAr ? 'تواصل معنا' : 'Contact'} index={5}>
              <p>{isAr ? 'عايز تعرف أكتر عن NineApps أو تتواصل مع فريقنا؟' : 'Want to learn more about NineApps or get in touch with our team?'}</p>
              <div className="space-y-3 mt-4">
                <a href="mailto:nineappsonline@gmail.com" className="flex items-center gap-3 text-indigo-400 hover:text-indigo-300 transition-colors font-medium">nineappsonline@gmail.com</a>
                <a href="tel:+201206777292" className="flex items-center gap-3 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"><span dir="ltr">+20 120 677 7292</span></a>
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
