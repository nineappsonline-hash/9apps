'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const testimonialsData = [
  {
    nameEn: 'Sarah Chen', nameAr: 'سارة تشين',
    roleEn: 'CTO at TechFlow', roleAr: 'مديرة التقنية في TechFlow',
    avatar: 'SC', rating: 5,
    quoteEn: 'NineApps completely transformed how we manage our sales pipeline. The AI insights alone saved us 20+ hours per week on manual analysis.',
    quoteAr: ' NineApps غيّرت تماماً طريقة إدارة خط أنابيب المبيعات لدينا. رؤى الذكاء الاصطناعي وحدها وفرت لنا أكثر من 20 ساعة أسبوعياً من التحليل اليدوي.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    nameEn: 'Marcus Rivera', nameAr: 'ماركوس ريفيرا',
    roleEn: 'Operations Director at ScaleUp', roleAr: 'مدير العمليات في ScaleUp',
    avatar: 'MR', rating: 5,
    quoteEn: 'The ERP suite is phenomenal. We went from juggling 5 different tools to one unified platform. Our efficiency has increased by 40%.',
    quoteAr: 'حزمة ERP مذهلة. انتقلنا من استخدام 5 أدوات مختلفة إلى منصة موحدة واحدة. زادت كفاءتنا بنسبة 40%.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    nameEn: 'Emily Nakamura', nameAr: 'إيميلي ناكامورا',
    roleEn: 'VP Sales at GrowthCo', roleAr: 'نائبة رئيس المبيعات في GrowthCo',
    avatar: 'EN', rating: 5,
    quoteEn: 'Best CRM I have ever used. The 360° customer view feature gives our team everything they need to close deals with confidence.',
    quoteAr: 'أفضل نظام CRM استخدمته. ميزة النظرة الشاملة 360° على العملاء تعطي فريقنا كل ما يحتاجونه لإتمام الصفقات بثقة.',
    gradient: 'from-violet-500 to-pink-500',
  },
  {
    nameEn: 'David Okafor', nameAr: 'ديفيد أوكافور',
    roleEn: 'Founder at NovaTech', roleAr: 'مؤسس NovaTech',
    avatar: 'DO', rating: 5,
    quoteEn: 'From startup to 200+ employees, NineApps scaled with us perfectly. The modular approach meant we only paid for what we needed.',
    quoteAr: 'من شركة ناشئة إلى أكثر من 200 موظف، توسع NineApps معنا بشكل مثالي. النهج المعياري يعني أننا دفعنا فقط لما نحتاجه.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    nameEn: 'Lisa Andersson', nameAr: 'ليزا أندرسون',
    roleEn: 'Head of IT at Nordic Retail', roleAr: 'رئيسة قسم تكنولوجيا المعلومات في Nordic Retail',
    avatar: 'LA', rating: 5,
    quoteEn: 'The workflow automation is a game changer. We automated 60% of our repetitive processes within the first month of implementation.',
    quoteAr: 'أتمتة سير العمل هي نقطة تحول. أتمتنا 60% من عملياتنا المتكررة خلال الشهر الأول من التطبيق.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    nameEn: 'James Mitchell', nameAr: 'جيمس ميتشل',
    roleEn: 'COO at GlobalEdge', roleAr: 'العميل التنفيذي في GlobalEdge',
    avatar: 'JM', rating: 5,
    quoteEn: 'Outstanding support team and a product that just works. The real-time analytics dashboard gives me exactly what I need at a glance.',
    quoteAr: 'فريق دعم متميز ومنتج يعمل بشكل ممتاز. لوحة التحليلات في الوقت الحقيقي تعطيني بالضبط ما أحتاجه من لمحة.',
    gradient: 'from-yellow-500 to-orange-500',
  },
]

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
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-emerald-400 tracking-[0.2em] uppercase mb-4 block">
            {t.testimonialsLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">{t.testimonialsTitle1}</span>
            <span className="gradient-text">{t.testimonialsTitle2}</span>
          </h2>
          <p className="max-w-[500px] mx-auto text-gray-400 text-[17px] leading-relaxed">
            {t.testimonialsSubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonialsData.map((testimonial, i) => (
            <motion.div
              key={testimonial.nameEn}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col group">
                <Quote className="w-7 h-7 text-indigo-500/25 mb-4" />

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed flex-1 mb-6">
                  &ldquo;{locale === 'ar' ? testimonial.quoteAr : testimonial.quoteEn}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-[11px] font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {locale === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                    </div>
                    <div className="text-xs text-gray-500">
                      {locale === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
