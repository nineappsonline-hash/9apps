'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Play, BarChart3, Users, TrendingUp, CheckCircle2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import ParticleField from './ParticleField'
import TextScramble from './TextScramble'
import MagneticButton from './MagneticButton'
import GlitchText from './GlitchText'
import InteractiveGrid from './InteractiveGrid'
import AnimatedTeamIllustration from './AnimatedTeamIllustration'
import { useRef } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(12px)', scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
  },
}

function FloatingMockup() {
  return (
    <motion.div
      variants={floatingVariants}
      animate="animate"
      className="mt-16 w-full max-w-2xl mx-auto"
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0a0e1a]/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/10">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="flex-1 ml-4">
            <div className="w-48 h-5 rounded-md bg-white/[0.04] mx-auto" />
          </div>
        </div>
        {/* Dashboard content */}
        <div className="p-6 grid grid-cols-3 gap-4">
          <div className="col-span-1 space-y-3">
            <div className="h-3 w-20 rounded bg-white/[0.06]" />
            <div className="h-8 w-full rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/10 flex items-center px-3">
              <span className="text-[10px] text-indigo-300 font-medium">Revenue</span>
              <span className="ml-auto text-[10px] text-white font-bold">$48.2K</span>
            </div>
            <div className="h-8 w-full rounded-lg bg-gradient-to-r from-cyan-500/15 to-teal-500/15 border border-cyan-500/10 flex items-center px-3">
              <span className="text-[10px] text-cyan-300 font-medium">Contacts</span>
              <span className="ml-auto text-[10px] text-white font-bold">2,847</span>
            </div>
            <div className="h-8 w-full rounded-lg bg-gradient-to-r from-emerald-500/15 to-green-500/15 border border-emerald-500/10 flex items-center px-3">
              <span className="text-[10px] text-emerald-300 font-medium">Deals</span>
              <span className="ml-auto text-[10px] text-white font-bold">156</span>
            </div>
          </div>
          <div className="col-span-2 rounded-xl bg-white/[0.02] border border-white/[0.04] p-4">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-3 h-3 text-indigo-400" />
              <span className="text-[10px] text-gray-400 font-medium">Sales Pipeline</span>
            </div>
            <div className="flex items-end gap-1.5 h-20">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: 2 + i * 0.05 }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-indigo-500/30 to-indigo-400/60"
                />
              ))}
            </div>
          </div>
          <div className="col-span-3 flex gap-3">
            {[
              { icon: Users, label: 'Active Users', value: '10,248', color: 'text-indigo-400' },
              { icon: TrendingUp, label: 'Growth', value: '+24.5%', color: 'text-emerald-400' },
              { icon: CheckCircle2, label: 'Tasks Done', value: '89%', color: 'text-cyan-400' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.5 + i * 0.1 }}
                className="flex-1 rounded-lg bg-white/[0.02] border border-white/[0.04] px-3 py-2"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <item.icon className={`w-3 h-3 ${item.color}`} />
                  <span className="text-[9px] text-gray-500">{item.label}</span>
                </div>
                <span className="text-[11px] text-white font-bold">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const { t, locale } = useI18n()
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true })

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive grid */}
      <InteractiveGrid />

      {/* Animated mesh background */}
      <div className="animated-mesh" />

      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="orb w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob"
      />

      {/* Particles */}
      <ParticleField count={50} color="rgba(129, 140, 248, 0.3)" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >
          {/* Badge with text scramble */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/[0.08] border border-indigo-500/15 text-indigo-300 text-xs font-medium tracking-wide whitespace-nowrap">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              </motion.div>
              <TextScramble text={t.badge} delay={500} speed={20} />
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </div>
          </motion.div>

          {/* Headline with glitch */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.08] mb-7 text-balance"
          >
            <GlitchText text={t.headline1} className="text-white" interval={5000} />
            <br />
            <span className="text-shimmer">{t.headline2}</span>
          </motion.h1>

          {/* Subtitle with character reveal */}
          <motion.p
            variants={itemVariants}
            className="max-w-[580px] mx-auto text-[17px] sm:text-lg text-gray-400 mb-10 leading-relaxed text-balance"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <MagneticButton strength={0.2}>
              <Link
                href="/signup"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white font-semibold rounded-2xl overflow-hidden glow-btn whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-2">
                  {t.startFreeTrial}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <button className="group inline-flex items-center gap-3 px-8 py-4 text-gray-300 hover:text-white rounded-2xl border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300 whitespace-nowrap">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors flex-shrink-0"
                >
                  <Play className="w-3.5 h-3.5 ml-0.5" />
                </motion.div>
                <span className="font-medium text-sm">{t.watchDemo}</span>
              </button>
            </MagneticButton>
          </motion.div>

          {/* Animated team illustration */}
          <motion.div variants={itemVariants} className="w-full mb-8">
            <AnimatedTeamIllustration className="w-full max-w-xl mx-auto h-auto" />
          </motion.div>

          {/* Floating mockup */}
          <motion.div variants={itemVariants} className="w-full">
            <FloatingMockup />
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-3xl mx-auto w-full"
          >
            {[
              { value: '10K+', label: t.activeUsers },
              { value: '99.9%', label: t.uptime },
              { value: '50+', label: t.integrations },
              { value: '4.9/5', label: t.userRating },
            ].map((stat, i) => (
              <MagneticButton key={stat.label} strength={0.1}>
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1.5">
                    <TextScramble text={stat.value} delay={2500 + i * 200} />
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#06080f] to-transparent" />
    </section>
  )
}
