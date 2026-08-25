'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import AnimatedCounter from '@/components/AnimatedCounter'
import TiltCard from '@/components/TiltCard'
import {
  ArrowUpRight,
  ArrowLeft,
  LayoutDashboard,
  Users,
  CreditCard,
  CalendarCheck,
  QrCode,
  TrendingUp,
  BarChart3,
  Trophy,
  UserCog,
  Megaphone,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  DollarSign,
  Clock,
  Smartphone,
  Star,
} from 'lucide-react'

function AnimatedWorkflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useI18n()

  const steps = [
    { key: t.workflowEnroll },
    { key: t.workflowSchedule },
    { key: t.workflowAttend },
    { key: t.workflowBill },
    { key: t.workflowProfit },
  ]

  return (
    <div ref={ref} className="flex items-center justify-center gap-2 sm:gap-3 my-16 flex-wrap">
      {steps.map((step, i) => (
        <div key={step.key} className="flex items-center gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 py-2.5 rounded-xl glass-card text-sm font-semibold text-white border border-white/[0.06] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">{step.key}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.15 + 0.1 }}
              className="text-indigo-500/60 text-lg"
            >
              →
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

function FeatureSection({
  icon: Icon,
  gradient,
  title,
  subtitle,
  description,
  points,
  reversed,
}: {
  icon: React.ElementType
  gradient: string
  title: string
  subtitle: string
  description: string
  points: string[]
  reversed?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover-lift">
        <div className={`absolute top-0 ${reversed ? 'left-0' : 'right-0'} w-48 h-48 bg-gradient-to-br ${gradient} opacity-[0.07] rounded-full blur-[80px] group-hover:opacity-[0.12] transition-opacity duration-700`} />

        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-start relative z-10`}>
          <div className="shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
          </div>

          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: reversed ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <p className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-1">{subtitle}</p>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{title}</h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: reversed ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 leading-relaxed mb-5 text-sm"
            >
              {description}
            </motion.p>

            <div className="space-y-2.5">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: reversed ? -15 : 15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.05 }}
                  className="flex items-start gap-2.5 group/item"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StatCard({ value, suffix, label, icon: Icon }: { value: number; suffix?: string; label: string; icon: React.ElementType }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-5 h-5 text-indigo-400" />
      </div>
      <div className="text-3xl font-bold text-white mb-1">
        <AnimatedCounter target={value} suffix={suffix || ''} />
      </div>
      <p className="text-xs text-gray-500 font-medium">{label}</p>
    </motion.div>
  )
}

export default function VolleyraPage() {
  const { t } = useI18n()
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])

  const features = [
    {
      icon: LayoutDashboard,
      gradient: 'from-indigo-500 to-purple-500',
      title: t.f1Title,
      subtitle: t.f1Subtitle,
      description: t.f1Desc,
      points: [t.f1p1, t.f1p2, t.f1p3, t.f1p4],
    },
    {
      icon: Users,
      gradient: 'from-cyan-500 to-blue-500',
      title: t.f2Title,
      subtitle: t.f2Subtitle,
      description: t.f2Desc,
      points: [t.f2p1, t.f2p2, t.f2p3, t.f2p4, t.f2p5, t.f2p6],
    },
    {
      icon: CreditCard,
      gradient: 'from-violet-500 to-pink-500',
      title: t.f3Title,
      subtitle: t.f3Subtitle,
      description: t.f3Desc,
      points: [t.f3p1, t.f3p2, t.f3p3, t.f3p4],
    },
    {
      icon: CalendarCheck,
      gradient: 'from-emerald-500 to-teal-500',
      title: t.f4Title,
      subtitle: t.f4Subtitle,
      description: t.f4Desc,
      points: [t.f4p1, t.f4p2, t.f4p3, t.f4p4, t.f4p5],
    },
    {
      icon: QrCode,
      gradient: 'from-orange-500 to-red-500',
      title: t.f5Title,
      subtitle: t.f5Subtitle,
      description: t.f5Desc,
      points: [t.f5p1, t.f5p2, t.f5p3, t.f5p4, t.f5p5],
    },
    {
      icon: TrendingUp,
      gradient: 'from-yellow-500 to-amber-500',
      title: t.f6Title,
      subtitle: t.f6Subtitle,
      description: t.f6Desc,
      points: [t.f6p1, t.f6p2, t.f6p3, t.f6p4, t.f6p5],
    },
    {
      icon: BarChart3,
      gradient: 'from-pink-500 to-rose-500',
      title: t.f7Title,
      subtitle: t.f7Subtitle,
      description: t.f7Desc,
      points: [t.f7p1, t.f7p2, t.f7p3, t.f7p4, t.f7p5, t.f7p6],
    },
    {
      icon: UserCog,
      gradient: 'from-teal-500 to-cyan-500',
      title: t.f8Title,
      subtitle: t.f8Subtitle,
      description: t.f8Desc,
      points: [t.f8p1, t.f8p2, t.f8p3, t.f8p4],
    },
    {
      icon: Trophy,
      gradient: 'from-indigo-500 to-blue-500',
      title: t.f9Title,
      subtitle: t.f9Subtitle,
      description: t.f9Desc,
      points: [t.f9p1, t.f9p2, t.f9p3],
    },
    {
      icon: Star,
      gradient: 'from-purple-500 to-violet-500',
      title: t.f10Title,
      subtitle: t.f10Subtitle,
      description: t.f10Desc,
      points: [t.f10p1, t.f10p2, t.f10p3, t.f10p4, t.f10p5, t.f10p6],
    },
    {
      icon: Globe,
      gradient: 'from-cyan-500 to-emerald-500',
      title: t.f11Title,
      subtitle: t.f11Subtitle,
      description: t.f11Desc,
      points: [t.f11p1, t.f11p2, t.f11p3],
    },
    {
      icon: Megaphone,
      gradient: 'from-amber-500 to-orange-500',
      title: t.f12Title,
      subtitle: t.f12Subtitle,
      description: t.f12Desc,
      points: [t.f12p1, t.f12p2, t.f12p3, t.f12p4],
    },
  ]

  const regionItems = [
    { icon: Globe, label: t.region1Label, desc: t.region1Desc },
    { icon: DollarSign, label: t.region2Label, desc: t.region2Desc },
    { icon: Smartphone, label: t.region3Label, desc: t.region3Desc },
    { icon: Shield, label: t.region4Label, desc: t.region4Desc },
  ]

  const securityPoints = [t.security1, t.security2, t.security3, t.security4, t.security5, t.security6]

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
          <div className="particle-dots" />
        </div>

        {/* Hero */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center" ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 150 }}
                className="mb-8 inline-block"
              >
                <div className="w-28 h-28 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/15 mx-auto animate-glow">
                  <Image src="/Volleyra.jpeg" alt="Volleyra Logo" width={112} height={112} className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">{t.volleyraName}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-6">
                {t.volleyraTagline}
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 }} className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                {t.volleyraDesc}
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
                {t.volleyraHeroSub}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-wrap gap-3 justify-center">
                <a href="https://volley-academy.vercel.app/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  {t.volleyraStartTrial}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link href="/#products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
                  <ArrowLeft className="w-4 h-4" />
                  {t.ctaBack}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Workflow */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedWorkflow />
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }} className="text-center text-gray-500 text-sm -mt-8 mb-4">
              {t.workflowSubtitle}
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border-gradient">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCard value={12} label={t.statModules} icon={Zap} />
                <StatCard value={100} suffix="%" label={t.statSync} icon={Clock} />
                <StatCard value={2} label={t.statLanguages} icon={Globe} />
                <StatCard value={0} suffix="%" label={t.statSetup} icon={DollarSign} />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-white">{t.featuresHeading1}</span>
                <span className="text-shimmer">{t.featuresHeading2}</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                {t.volleyraFeaturesSubtitle}
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <FeatureSection key={i} icon={feature.icon} gradient={feature.gradient} title={feature.title} subtitle={feature.subtitle} description={feature.description} points={feature.points} reversed={i % 2 === 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Built for Your Region */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
              <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden border-gradient">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-full blur-[100px]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{t.regionTitle}</h3>
                      <p className="text-xs text-cyan-400">{t.regionSubtitle}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {regionItems.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                        <item.icon className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-white">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
              <TiltCard className="h-full">
                <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[80px]" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{t.securityTitle}</h3>
                        <p className="text-xs text-indigo-400">{t.securitySubtitle}</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {securityPoints.map((point, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-300">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/15 mx-auto mb-8 animate-glow">
                <Image src="/Volleyra.jpeg" alt="Volleyra Logo" width={80} height={80} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.ctaHeading}
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                {t.ctaText}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://volley-academy.vercel.app/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  {t.volleyraStartTrial}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
