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
  Building,
  Users,
  BarChart3,
  Receipt,
  Landmark,
  CheckCircle,
  Globe,
  FileText,
  Shield,
  BadgeCheck,
  Briefcase,
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
              <p className="text-xs font-semibold text-rose-400 tracking-wider uppercase mb-1">{subtitle}</p>
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

export default function EbnyPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])
  const { t } = useI18n()

  const features = [
    { icon: Landmark, gradient: 'from-rose-500 to-red-500', title: t.ebnyF1Title, subtitle: t.ebnyF1Sub, description: t.ebnyF1Desc, points: t.ebnyF1Points },
    { icon: Building, gradient: 'from-violet-500 to-purple-500', title: t.ebnyF2Title, subtitle: t.ebnyF2Sub, description: t.ebnyF2Desc, points: t.ebnyF2Points },
    { icon: Receipt, gradient: 'from-emerald-500 to-teal-500', title: t.ebnyF3Title, subtitle: t.ebnyF3Sub, description: t.ebnyF3Desc, points: t.ebnyF3Points },
    { icon: Briefcase, gradient: 'from-orange-500 to-red-500', title: t.ebnyF4Title, subtitle: t.ebnyF4Sub, description: t.ebnyF4Desc, points: t.ebnyF4Points },
    { icon: BarChart3, gradient: 'from-yellow-500 to-amber-500', title: t.ebnyF5Title, subtitle: t.ebnyF5Sub, description: t.ebnyF5Desc, points: t.ebnyF5Points },
    { icon: Users, gradient: 'from-pink-500 to-rose-500', title: t.ebnyF6Title, subtitle: t.ebnyF6Sub, description: t.ebnyF6Desc, points: t.ebnyF6Points },
    { icon: Shield, gradient: 'from-cyan-500 to-blue-500', title: t.ebnyF7Title, subtitle: t.ebnyF7Sub, description: t.ebnyF7Desc, points: t.ebnyF7Points },
    { icon: BarChart3, gradient: 'from-indigo-500 to-blue-500', title: t.ebnyF8Title, subtitle: t.ebnyF8Sub, description: t.ebnyF8Desc, points: t.ebnyF8Points },
  ]

  const whyItems = [
    { icon: Globe, label: t.ebnyWhy1Label, desc: t.ebnyWhy1Desc },
    { icon: Shield, label: t.ebnyWhy2Label, desc: t.ebnyWhy2Desc },
    { icon: BadgeCheck, label: t.ebnyWhy3Label, desc: t.ebnyWhy3Desc },
    { icon: Users, label: t.ebnyWhy4Label, desc: t.ebnyWhy4Desc },
  ]

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
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
                <div className="w-28 h-28 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-rose-500/15 mx-auto animate-glow">
                  <Image src="/Ebny-Logo.webp" alt="Ebny Logo" width={112} height={112} className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">{t.ebnyName}</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl sm:text-3xl font-bold text-rose-400 mb-6">
                {t.ebnyTagline}
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 }} className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                {t.ebnyHeroSub1}
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
                {t.ebnyHeroSub2}
              </motion.p>


            </motion.div>
          </div>
        </motion.section>

        {/* Stats */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border-gradient">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto mb-3">
                    <Building className="w-5 h-5 text-rose-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <p className="text-xs text-gray-500 font-medium">{t.ebnyStatProjects}</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-5 h-5 text-rose-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">ZATCA</div>
                  <p className="text-xs text-gray-500 font-medium">{t.ebnyStatCompliance}</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto mb-3">
                    <Landmark className="w-5 h-5 text-rose-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">IFRS</div>
                  <p className="text-xs text-gray-500 font-medium">{t.ebnyStatIFRS}</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-5 h-5 text-rose-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">EN + AR</div>
                  <p className="text-xs text-gray-500 font-medium">{t.ebnyStatBilingual}</p>
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
                <span className="text-white">{t.ebnyFeaturesHeading1}</span>
                <span className="text-shimmer">{t.ebnyFeaturesHeading2}</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                {t.ebnyFeaturesSubtitle}
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <FeatureSection key={i} icon={feature.icon} gradient={feature.gradient} title={feature.title} subtitle={feature.subtitle} description={feature.description} points={feature.points} reversed={i % 2 === 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Ebny */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
              <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden border-gradient">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-rose-500/10 to-red-500/10 rounded-full blur-[100px]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center shadow-lg">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{t.ebnyWhyTitle}</h3>
                      <p className="text-xs text-rose-400">{t.ebnyWhySubtitle}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {whyItems.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                        <item.icon className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
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

        {/* Tech Stack */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
              <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-rose-500/10 to-red-500/10 rounded-full blur-[80px]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center shadow-lg">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{t.ebnyTechTitle}</h3>
                      <p className="text-xs text-rose-400">{t.ebnyTechSubtitle}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {t.ebnyTechPoints.map((point, i) => (
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
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-rose-500/15 mx-auto mb-8 animate-glow">
                <Image src="/Ebny-Logo.webp" alt="Ebny Logo" width={80} height={80} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.ebnyHeroSub1}
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                {t.ebnyHeroSub2}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://ebny.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  {t.ebnyBtnTrial}
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
