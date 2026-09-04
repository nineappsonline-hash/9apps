'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'

function BlogPost({ title, excerpt, date, readTime, tag, href, index, isAr }: { title: string; excerpt: string; date: string; readTime: string; tag: string; href?: string; index: number; isAr: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.article ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.05 }} className="glass-card rounded-2xl p-6 group relative">
      {href && <Link href={href} className="absolute inset-0 z-10" aria-label={title} />}
      <div className="flex items-center gap-3 mb-4">
        <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium">{tag}</span>
        <span className="flex items-center gap-1 text-xs text-gray-500"><Calendar className="w-3 h-3" />{date}</span>
        <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="w-3 h-3" />{readTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{excerpt}</p>
      <span className="inline-flex items-center gap-1 text-sm text-indigo-400 font-medium">
        {isAr ? 'اقرأ أكتر' : 'Read more'} <ArrowRight className="w-4 h-4" />
      </span>
    </motion.article>
  )
}

export default function BlogPage() {
  const { locale } = useI18n()
  const isAr = locale === 'ar'

  const posts = isAr
    ? [
        { title: 'دليل ZATCA المرحلة الثانية لشركات المقاولات', excerpt: 'كل ما تحتاج معرفته عن متطلبات ZATCA للفوترة الإلكترونية لشركات المقاولات في السعودية.', date: 'Aug 20, 2026', readTime: '8 min', tag: 'مقاولات', href: '/blog/zatca-phase-2-construction-companies' },
        { title: 'إزاي تدير أكاديمية رياضية: الدليل الكامل 2026', excerpt: 'من تسجيل اللاعبين لتحليل الربحية — كل حاجة عن إدارة أكاديمية رياضية حديثة.', date: 'Aug 12, 2026', readTime: '6 min', tag: 'رياضة', href: '/blog/sports-academy-management-guide' },
        { title: 'CRM مقابل نظام التذاكر: إيه الفرق؟', excerpt: 'افهم الفرق بين CRM ونظام التذاكر — وإ ليه الشركات تحتاجẍن الاثنين في منصة واحدة.', date: 'Aug 5, 2026', readTime: '7 min', tag: 'CRM', href: '/blog/crm-vs-helpdesk-guide' },
        { title: 'تعريف NineApps CRM Suite 2.0', excerpt: 'متحمسين لإطلاق CRM Suite المعيد تصميمه مع رؤى مدعومة بالذكاء الاصطناعي وخط مبيعات جديد وتكاملات أعمق.', date: 'Aug 15, 2026', readTime: '5 min', tag: 'منتج' },
        { title: 'إزاي الذكاء الاصطناعي بيحول إدارة علاقات العملاء', excerpt: 'استكشف إزاي الذكاء الاصطناعي بيغيّر طريقة الشركات في إدارة تفاعلات العملاء.', date: 'Aug 8, 2026', readTime: '8 min', tag: 'ذكاء اصطناعي وتقنية' },
      ]
    : [
        { title: 'ZATCA Phase 2 Compliance Guide for Construction Companies', excerpt: 'Everything construction companies need to know about ZATCA Phase 2 e-invoicing — UBL XML, QR codes, ECDSA, and VAT compliance.', date: 'Aug 20, 2026', readTime: '8 min', tag: 'Construction', href: '/blog/zatca-phase-2-construction-companies' },
        { title: 'How to Manage a Sports Academy: The Complete Guide', excerpt: 'From player registration to profitability analysis — everything about running a modern sports academy.', date: 'Aug 12, 2026', readTime: '6 min', tag: 'Sports', href: '/blog/sports-academy-management-guide' },
        { title: 'CRM vs Help Desk: What\'s the Difference?', excerpt: 'Understanding the difference between CRM and help desk tools — and why modern B2B SaaS companies need both.', date: 'Aug 5, 2026', readTime: '7 min', tag: 'CRM', href: '/blog/crm-vs-helpdesk-guide' },
        { title: 'Introducing NineApps CRM Suite 2.0', excerpt: 'We\'re excited to announce the launch of our redesigned CRM Suite with AI-powered insights, a new sales pipeline, and deeper integrations.', date: 'Aug 15, 2026', readTime: '5 min', tag: 'Product' },
        { title: 'How AI is Transforming Customer Relationship Management', excerpt: 'Explore how artificial intelligence is reshaping the way businesses manage customer interactions.', date: 'Aug 8, 2026', readTime: '8 min', tag: 'AI & Tech' },
      ]

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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">{isAr ? 'المدونة' : 'Blog'}</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {isAr ? 'رؤى وتحديثات وتحليلات من فريق NineApps. افضل على اطلاع بإطلاقات المنتجات وأتجاهات الصناعة وأفضل الممارسات.' : 'Insights, updates, and deep dives from the NineApps team. Stay informed about product launches, industry trends, and best practices.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto grid gap-6">
            {posts.map((post, i) => (
              <BlogPost key={post.title} {...post} index={i} isAr={isAr} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
