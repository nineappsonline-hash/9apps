'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import {
  ArrowUpRight,
  ArrowLeft,
  MessageSquare,
  Users,
  BarChart3,
  Shield,
  Zap,
  CheckCircle,
  Globe,
  Headphones,
  FileText,
  Activity,
  Layers,
  LayoutDashboard,
} from 'lucide-react'

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
              <p className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">{subtitle}</p>
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

export default function ClientaPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])
  const { t } = useI18n()

  const features = [
    {
      icon: LayoutDashboard,
      gradient: 'from-cyan-500 to-blue-500',
      title: t.clientaDashTitle,
      subtitle: t.clientaDashSub,
      description: t.clientaDashDesc,
      points: t.clientaDashPoints,
    },
    {
      icon: Users,
      gradient: 'from-violet-500 to-purple-500',
      title: t.clientaAccTitle,
      subtitle: t.clientaAccSub,
      description: t.clientaAccDesc,
      points: t.clientaAccPoints,
    },
    {
      icon: MessageSquare,
      gradient: 'from-emerald-500 to-teal-500',
      title: t.clientaTicketTitle,
      subtitle: t.clientaTicketSub,
      description: t.clientaTicketDesc,
      points: t.clientaTicketPoints,
    },
    {
      icon: Headphones,
      gradient: 'from-orange-500 to-red-500',
      title: t.clientaInboxTitle,
      subtitle: t.clientaInboxSub,
      description: t.clientaInboxDesc,
      points: t.clientaInboxPoints,
    },
    {
      icon: Activity,
      gradient: 'from-yellow-500 to-amber-500',
      title: t.clientaIncidentTitle,
      subtitle: t.clientaIncidentSub,
      description: t.clientaIncidentDesc,
      points: t.clientaIncidentPoints,
    },
    {
      icon: BarChart3,
      gradient: 'from-pink-500 to-rose-500',
      title: t.clientaReportTitle,
      subtitle: t.clientaReportSub,
      description: t.clientaReportDesc,
      points: t.clientaReportPoints,
    },
    {
      icon: Layers,
      gradient: 'from-indigo-500 to-blue-500',
      title: t.clientaMultiTitle,
      subtitle: t.clientaMultiSub,
      description: t.clientaMultiDesc,
      points: t.clientaMultiPoints,
    },
    {
      icon: FileText,
      gradient: 'from-teal-500 to-cyan-500',
      title: t.clientaKbTitle,
      subtitle: t.clientaKbSub,
      description: t.clientaKbDesc,
      points: t.clientaKbPoints,
    },
  ]

  const securityPoints = t.clientaSecurityPoints

  const regionItems = [
    { icon: Globe, label: t.clientaWhy1Label, desc: t.clientaWhy1Desc },
    { icon: Zap, label: t.clientaWhy2Label, desc: t.clientaWhy2Desc },
    { icon: Shield, label: t.clientaWhy3Label, desc: t.clientaWhy3Desc },
    { icon: Layers, label: t.clientaWhy4Label, desc: t.clientaWhy4Desc },
  ]

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
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
                <div className="w-28 h-28 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/15 mx-auto animate-glow">
                  <Image src="/Clienta-Logo.png" alt="Clienta Logo" width={112} height={112} className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">Clienta</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6">
                {t.clientaTagline}
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 }} className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                {t.clientaHeroSub1}
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
                {t.clientaHeroSub2}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.35 }} className="flex flex-wrap gap-3 justify-center">
                <a href="https://clienta.vercel.app/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  {t.clientaBtnTrial}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link href="/#products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
                  <ArrowLeft className="w-4 h-4" />
                  {t.clientaBtnBack}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border-gradient">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                    <Layers className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <p className="text-xs text-gray-500 font-medium">{t.clientaStatModules}</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <p className="text-xs text-gray-500 font-medium">{t.clientaStatPerms}</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">9</div>
                  <p className="text-xs text-gray-500 font-medium">{t.clientaStatChannels}</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">2</div>
                  <p className="text-xs text-gray-500 font-medium">{t.clientaStatLanguages}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-white">{t.clientaFeaturesHeading1}</span>
                <span className="text-shimmer">{t.clientaFeaturesHeading2}</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                {t.clientaFeaturesSubtitle}
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <FeatureSection key={i} icon={feature.icon} gradient={feature.gradient} title={feature.title} subtitle={feature.subtitle} description={feature.description} points={feature.points} reversed={i % 2 === 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
              <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden border-gradient">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-[100px]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{t.clientaWhyTitle}</h3>
                      <p className="text-xs text-cyan-400">{t.clientaWhySubtitle}</p>
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

        {/* Presentations */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
              <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-[80px]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{t.clientaPresentTitle}</h3>
                      <p className="text-xs text-cyan-400">{t.clientaPresentSubtitle}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <a href="/Clienta-Presentation.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-cyan-500/30 transition-all hover:bg-white/[0.04] group">
                      <FileText className="w-8 h-8 text-cyan-400 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">{t.clientaPresent1Title}</p>
                        <p className="text-xs text-gray-500">{t.clientaPresent1Desc}</p>
                      </div>
                    </a>
                    <a href="/Clienta-Tenant-Presentation.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-cyan-500/30 transition-all hover:bg-white/[0.04] group">
                      <FileText className="w-8 h-8 text-cyan-400 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">{t.clientaPresent2Title}</p>
                        <p className="text-xs text-gray-500">{t.clientaPresent2Desc}</p>
                      </div>
                    </a>
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
              <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-[80px]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{t.clientaSecurityTitle}</h3>
                      <p className="text-xs text-cyan-400">{t.clientaSecuritySubtitle}</p>
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
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/15 mx-auto mb-8 animate-glow">
                <Image src="/Clienta-Logo.png" alt="Clienta Logo" width={80} height={80} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.clientaCtaHeading}
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                {t.clientaCtaText}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://clienta.vercel.app/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  {t.clientaBtnTrial}
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
