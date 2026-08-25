'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Briefcase, Code, Palette, Headphones, TrendingUp, MapPin } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

function JobCard({ title, department, location, type, index, isAr }: { title: string; department: string; location: string; type: string; index: number; isAr: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.05 }} className="glass-card rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-200 mb-1">{title}</h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{department}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{location}</span>
          <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">{type}</span>
        </div>
      </div>
      <a href="mailto:nineappsonline@gmail.com?subject=Job Application: {title}" className="shrink-0 px-5 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium hover:bg-indigo-500/20 transition-colors">{isAr ? 'قدّم' : 'Apply'}</a>
    </motion.div>
  )
}

export default function CareersPage() {
  const { locale } = useI18n()
  const isAr = locale === 'ar'

  const jobs = isAr
    ? [
        { title: 'مهندس Full-Stack أول', department: 'هندسة', location: 'عن بُعد / القاهرة', type: 'دوام كامل' },
        { title: 'مهندس AI/ML', department: 'هندسة', location: 'عن بُعد / القاهرة', type: 'دوام كامل' },
        { title: 'مصمم منتجات (UI/UX)', department: 'تصميم', location: 'عن بُعد', type: 'دوام كامل' },
        { title: 'مدير نجاح العملاء', department: 'نجاح العملاء', location: 'القاهرة', type: 'دوام كامل' },
        { title: 'مهندس Backend (Node.js)', department: 'هندسة', location: 'عن بُعد / القاهرة', type: 'دوام كامل' },
        { title: 'متخصص تسويق نمو', department: 'تسويق', location: 'عن بُعد', type: 'دوام كامل' },
      ]
    : [
        { title: 'Senior Full-Stack Engineer', department: 'Engineering', location: 'Remote / Cairo', type: 'Full-time' },
        { title: 'AI/ML Engineer', department: 'Engineering', location: 'Remote / Cairo', type: 'Full-time' },
        { title: 'Product Designer (UI/UX)', department: 'Design', location: 'Remote', type: 'Full-time' },
        { title: 'Customer Success Manager', department: 'Customer Success', location: 'Cairo', type: 'Full-time' },
        { title: 'Backend Engineer (Node.js)', department: 'Engineering', location: 'Remote / Cairo', type: 'Full-time' },
        { title: 'Growth Marketing Specialist', department: 'Marketing', location: 'Remote', type: 'Full-time' },
      ]

  const perks = isAr
    ? [
        { icon: Code, label: 'تقنيات حديثة', desc: 'اشتغل مع React و Next.js و TypeScript و Supabase وأدوات الذكاء الاصطناعي.' },
        { icon: TrendingUp, label: 'نمو', desc: 'شركة ناشئة سريعة النمو مع فرص حقيقية للتقدم في المهنة.' },
        { icon: MapPin, label: 'عمل عن بُعد', desc: 'اشتغل من القاهرة أو عن بُعد — بنثق في فريقنا إنه يوصّل.' },
        { icon: Headphones, label: 'ثقافة رائعة', desc: 'بيئة عمل تعاونية وشفافة وداعمة.' },
      ]
    : [
        { icon: Code, label: 'Modern Stack', desc: 'Work with React, Next.js, TypeScript, Supabase, and AI/ML tools.' },
        { icon: TrendingUp, label: 'Growth', desc: 'Fast-growing startup with real opportunities for career advancement.' },
        { icon: MapPin, label: 'Remote-Friendly', desc: 'Work from Cairo or remotely — we trust our team to deliver.' },
        { icon: Headphones, label: 'Great Culture', desc: 'Collaborative, transparent, and supportive work environment.' },
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">{isAr ? 'وظائف في NineApps' : 'Careers at NineApps'}</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {isAr ? 'انضم لفريق بيعرّف برمجيات الأعمال من جديد. دايماً بندور على ناس موهوبة وشغفانية عشان تعمل تأثير حقيقي.' : 'Join a team that\'s redefining business software. We\'re always looking for talented, passionate people who want to make a real impact.'}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center"><HeartIcon className="w-5 h-5 text-indigo-400" /></div>
                <h2 className="text-xl font-bold gradient-text">{isAr ? 'ليه تشتغل في NineApps؟' : 'Why Work at NineApps?'}</h2>
              </div>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  {perks.map((perk) => (
                    <div key={perk.label} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <perk.icon className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-gray-300 text-sm">{perk.label}</p>
                        <p className="text-xs text-gray-500 mt-1">{perk.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold gradient-text mb-6">{isAr ? 'الوظائف المتاحة' : 'Open Positions'}</h2>
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <JobCard key={job.title} {...job} index={i} isAr={isAr} />
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-8 text-center">
              {isAr ? 'مش لاقي منصب يناسبك؟ ابعت سيرتك الذاتية على' : 'Don\'t see a role that fits? Send your resume to'}{' '}
              <a href="mailto:nineappsonline@gmail.com" className="text-indigo-400 hover:text-indigo-300">nineappsonline@gmail.com</a>{' '}
              {isAr ? 'وهننبهلك لوظائف فاضية في المستقبل.' : 'and we\'ll keep you in mind for future openings.'}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  )
}
