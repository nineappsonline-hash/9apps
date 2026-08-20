'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import { useI18n, currencyConfig } from '@/lib/i18n'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function Hero() {
  const { t, locale } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-dots">
      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb w-[400px] h-[400px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

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
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/[0.08] border border-indigo-500/15 text-indigo-300 text-xs font-medium tracking-wide whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{t.badge}</span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.08] mb-7 text-balance"
          >
            <span className="text-white">{t.headline1}</span>
            <br />
            <span className="gradient-text">{t.headline2}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-[580px] mx-auto text-[17px] sm:text-lg text-gray-400 mb-10 leading-relaxed text-balance"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <Link
              href="/signup"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white font-semibold rounded-2xl overflow-hidden animate-glow whitespace-nowrap"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                {t.startFreeTrial}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <button className="group inline-flex items-center gap-3 px-8 py-4 text-gray-300 hover:text-white rounded-2xl border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-300 whitespace-nowrap">
              <div className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors flex-shrink-0">
                <Play className="w-3.5 h-3.5 ml-0.5" />
              </div>
              <span className="font-medium text-sm">{t.watchDemo}</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-3xl mx-auto w-full"
          >
            {[
              { value: '10K+', label: t.activeUsers },
              { value: '99.9%', label: t.uptime },
              { value: '50+', label: t.integrations },
              { value: '4.9/5', label: t.userRating },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1.5">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#06080f] to-transparent" />
    </section>
  )
}
