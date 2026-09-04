'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Building, Shield, Users, Volleyball } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

const solutions = [
  {
    href: '/solutions/volleyra',
    icon: Volleyball,
    gradient: 'from-indigo-500 to-purple-500',
    titleEn: 'Sports Academy Management',
    titleAr: 'إدارة الأكاديميات الرياضية',
    descEn: 'Player registration, training schedules, attendance tracking, and profitability analytics for volleyball, football, basketball, swimming, and padel academies.',
    descAr: 'تسجيل اللاعبين، جدولة التدريب، تتبع الحضور، وتحليلات الربحية لأكاديميات الكرة الطائرة والكرة القدم والسلة والسباحة والبادل.',
  },
  {
    href: '/solutions/clienta',
    icon: Users,
    gradient: 'from-cyan-500 to-blue-500',
    titleEn: 'CRM & Ticketing Platform',
    titleAr: 'منصة CRM والتذاكر',
    descEn: 'Support ticketing with SLA engine, omnichannel inbox, live chat widget, incident management, and customer health scoring for B2B SaaS.',
    descAr: 'تذاكر الدعم مع معايير الخدمة، صندوق الوارد متعدد القنوات، ودجت الدردشة، إدارة الحوادث، ودرجات صحة العملاء.',
  },
  {
    href: '/solutions/ebny',
    icon: Building,
    gradient: 'from-rose-500 to-red-500',
    titleEn: 'Construction Accounting ERP',
    titleAr: 'نظام محاسبة المقاولات',
    descEn: 'Project cost control, percentage of completion billing, ZATCA e-invoicing, IFRS compliance, and HR/payroll for Saudi construction companies.',
    descAr: 'تحكم في تكاليف المشاريع، فوترة نسبة الإنجاز، ZATCA الفوترة الإلكترونية، IFRS، والموارد البشرية والرواتب.',
  },
  {
    href: '/solutions/hesn',
    icon: Shield,
    gradient: 'from-amber-500 to-orange-500',
    titleEn: 'Security Operations Management',
    titleAr: 'إدارة العمليات الأمنية',
    descEn: 'Guard management, shift scheduling, patrol tracking, site contracts, invoicing, and compliance monitoring for security companies.',
    descAr: 'إدارة الحراس، جدولة المناوبات، تتبع الدوريات، عقود المواقع، الفواتير، ومراقبة الامتثال.',
  },
]

export default function Solutions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { locale } = useI18n()
  const isAr = locale === 'ar'

  return (
    <section id="solutions" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">{isAr ? 'حلول مخصصة' : 'Industry Solutions'}</span>
          </h2>
          <p className="max-w-[560px] mx-auto text-gray-400 text-[17px] leading-relaxed">
            {isAr
              ? 'كل منصة مصممة خصيصاً لاحتياجات قطاع معين — من المحاسبة لإدارة الأكاديميات.'
              : 'Each platform is purpose-built for a specific industry — from construction accounting to sports academy management.'}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <Link
                href={solution.href}
                className="group glass-card rounded-2xl p-6 block hover-lift relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${solution.gradient} opacity-[0.07] rounded-full blur-[80px] group-hover:opacity-[0.12] transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {isAr ? solution.titleAr : solution.titleEn}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {isAr ? solution.descAr : solution.descEn}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
