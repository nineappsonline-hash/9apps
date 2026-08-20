'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import Marquee from './Marquee'

const testimonialsData = [
  {
    nameEn: 'Ahmed Hassan', nameAr: 'أحمد حسن',
    roleEn: 'CEO at Cairo Digital', roleAr: 'الرئيس التنفيذي في كايرو ديجيتال',
    avatar: 'AH', rating: 5,
    quoteEn: 'NineApps transformed our sales process completely. We closed 35% more deals in just 3 months.',
    quoteAr: 'NineApps غيّرت عملية المبيعات لدينا بالكامل. أغلقنا صفقات بنسبة 35% أكثر في 3 أشهر فقط.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    nameEn: 'Fatma El-Sayed', nameAr: 'فاطمة السيد',
    roleEn: 'Ops Manager at Nile Tech', roleAr: 'مديرة العمليات في نايل تك',
    avatar: 'FS', rating: 5,
    quoteEn: 'The ERP suite saved us from using 4 different tools. Everything we need is in one place now.',
    quoteAr: 'حزمة ERP أنقذتنا من استخدام 4 أدوات مختلفة. كل ما نحتاجه في مكان واحد الآن.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    nameEn: 'Omar Khalil', nameAr: 'عمر خليل',
    roleEn: 'Founder at Delta Apps', roleAr: 'مؤسس دلتا أبس',
    avatar: 'OK', rating: 5,
    quoteEn: 'Best CRM I have used. The customer view feature helps our team close deals with confidence.',
    quoteAr: 'أفضل نظام CRM استخدمته. ميزة النظرة الشاملة على العملاء تساعد فريقنا على إتمام الصفقات بثقة.',
    gradient: 'from-violet-500 to-pink-500',
  },
  {
    nameEn: 'Nour Ibrahim', nameAr: 'نور إبراهيم',
    roleEn: 'Head of IT at Alex Corp', roleAr: 'رئيسة قسم تكنولوجيا المعلومات في الإسكندرية كورب',
    avatar: 'NI', rating: 5,
    quoteEn: 'We automated 60% of our repetitive tasks in the first month. The workflow automation is incredible.',
    quoteAr: 'أتمتنا 60% من المهام المتكررة في الشهر الأول. أتمتة سير العمل مذهلة.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    nameEn: 'Youssef Ali', nameAr: 'يوسف علي',
    roleEn: 'COO at Smart Solutions', roleAr: 'المدير التنفيذي في سمارت سولوشنز',
    avatar: 'YA', rating: 5,
    quoteEn: 'Outstanding support and a product that just works. The analytics dashboard gives me everything at a glance.',
    quoteAr: 'فريق دعم متميز ومنتج يعمل بشكل ممتاز. لوحة التحليلات تعطيني كل ما أحتاجه من لمحة.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    nameEn: 'Mona Farouk', nameAr: 'منى فاروق',
    roleEn: 'VP Sales at Delta ERP', roleAr: 'نائبة رئيس المبيعات في دلتا إرب',
    avatar: 'MF', rating: 5,
    quoteEn: 'From 10 employees to 200+, NineApps scaled with us perfectly. Only paid for what we needed.',
    quoteAr: 'من 10 موظفين إلى أكثر من 200، توسع NineApps معنا بشكل مثالي. دفعنا فقط لما نحتاجه.',
    gradient: 'from-yellow-500 to-orange-500',
  },
]

function TestimonialCard({ testimonial, locale }: { testimonial: typeof testimonialsData[0]; locale: string }) {
  return (
    <div className="glass-card rounded-2xl p-5 w-[340px] flex-shrink-0 mx-2.5 hover-lift group">
      <Quote className="w-6 h-6 text-indigo-500/25 mb-3 group-hover:text-indigo-500/40 transition-colors" />

      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="text-[13px] text-gray-300 leading-relaxed mb-5">
        &ldquo;{locale === 'ar' ? testimonial.quoteAr : testimonial.quoteEn}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-3 border-t border-white/[0.04]">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-[10px] font-bold group-hover:scale-110 transition-transform duration-300`}>
          {testimonial.avatar}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-medium text-white truncate">
            {locale === 'ar' ? testimonial.nameAr : testimonial.nameEn}
          </div>
          <div className="text-[11px] text-gray-500 truncate">
            {locale === 'ar' ? testimonial.roleAr : testimonial.roleEn}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, locale } = useI18n()

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-semibold text-emerald-400 tracking-[0.2em] uppercase mb-4 block"
          >
            {t.testimonialsLabel}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">{t.testimonialsTitle1}</span>
            <span className="text-shimmer">{t.testimonialsTitle2}</span>
          </h2>
          <p className="max-w-[500px] mx-auto text-gray-400 text-[17px] leading-relaxed">
            {t.testimonialsSubtitle}
          </p>
        </motion.div>
      </div>

      {/* Single marquee row */}
      <Marquee speed={30} rtl={locale === 'ar'}>
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.nameEn} testimonial={testimonial} locale={locale} />
        ))}
      </Marquee>
    </section>
  )
}
