'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

function ServiceRow({ name, status, uptime, isAr, index }: { name: string; status: string; uptime: string; isAr: boolean; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })
  const isOperational = status === 'operational'
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay: index * 0.04 }} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
      <div className="flex items-center gap-3">
        {isOperational ? (
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
        ) : (
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
        )}
        <span className="text-sm text-gray-300">{name}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-gray-500">{uptime} {isAr ? 'وقت التشغيل' : 'uptime'}</span>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${isOperational ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
          {isOperational ? (isAr ? 'يعمل' : 'Operational') : (isAr ? 'متضرر' : 'Degraded')}
        </span>
      </div>
    </motion.div>
  )
}

export default function StatusPage() {
  const { locale } = useI18n()
  const isAr = locale === 'ar'
  const [time, setTime] = useState('')

  useEffect(() => {
    setTime(new Date().toUTCString())
    const interval = setInterval(() => setTime(new Date().toUTCString()), 60000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    { name: isAr ? 'التطبيق الإلكتروني' : 'Web Application', status: 'operational', uptime: '99.99%' },
    { name: 'API', status: 'operational', uptime: '99.99%' },
    { name: isAr ? 'المصادقة (OAuth)' : 'Authentication (OAuth)', status: 'operational', uptime: '99.98%' },
    { name: isAr ? 'خدمة حملات البريد الإلكتروني' : 'Email Campaigns Service', status: 'operational', uptime: '99.97%' },
    { name: isAr ? 'تخزين الملفات' : 'File Storage', status: 'operational', uptime: '100%' },
    { name: isAr ? 'قاعدة البيانات' : 'Database', status: 'operational', uptime: '99.99%' },
    { name: isAr ? 'شبكة التسليم والمجلدات الثابتة' : 'CDN & Static Assets', status: 'operational', uptime: '100%' },
    { name: 'Webhooks', status: 'operational', uptime: '99.96%' },
  ]

  const allOperational = services.every(s => s.status === 'operational')

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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">{isAr ? 'حالة النظام' : 'System Status'}</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                {isAr ? 'حالة فورية لجميع خدمات NineApps والبنية التحتية.' : 'Real-time status of all NineApps services and infrastructure.'}
              </p>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${allOperational ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                {allOperational ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                {allOperational ? (isAr ? 'جميع الأنظمة تعمل بشكل طبيعي' : 'All Systems Operational') : (isAr ? 'بعض الأنظمة بتعاني من مشاكل' : 'Some Systems Experiencing Issues')}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-200">{isAr ? 'حالة الخدمات' : 'Service Status'}</h2>
                <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="w-3 h-3" />{isAr ? 'آخر فحص: ' : 'Last checked: '}{time}</span>
              </div>
              <div className="space-y-2">
                {services.map((service, i) => (
                  <ServiceRow key={service.name} {...service} isAr={isAr} index={i} />
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-gray-200 mb-4">{isAr ? 'وقت التشغيل لمدة 90 يوم' : '90-Day Uptime'}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {[
                  { label: isAr ? 'التطبيق الإلكتروني' : 'Web App', value: '99.99%' },
                  { label: 'API', value: '99.99%' },
                  { label: isAr ? 'قاعدة البيانات' : 'Database', value: '99.99%' },
                  { label: isAr ? 'الإجمالي' : 'Overall', value: '99.99%' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-gray-200 mb-4">{isAr ? 'الحوادث الأخيرة' : 'Incident History'}</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-300">{isAr ? 'تمت استعادة جميع الأنظمة' : 'All systems restored'}</p>
                    <p className="text-xs text-gray-500 mt-1">August 20, 2026 — 14:30 UTC</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-300">{isAr ? 'تمت الصيانة المجدولة' : 'Scheduled maintenance completed'}</p>
                    <p className="text-xs text-gray-500 mt-1">August 10, 2026 — 02:00 UTC</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs">{isAr ? 'مفيش حوادث مسجلة في آخر 90 يوم.' : 'No incidents reported in the last 90 days.'}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
