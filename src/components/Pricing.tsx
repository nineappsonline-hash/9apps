'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import Image from 'next/image'
import Link from 'next/link'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useI18n()

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[140px]" />
      <div className="animated-mesh" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-semibold text-purple-400 tracking-[0.2em] uppercase mb-4 block"
          >
            {t.pricingLabel}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">{t.pricingTitle1}</span>
            <span className="text-shimmer">{t.pricingTitle2}</span>
          </h2>
          <p className="max-w-[560px] mx-auto text-gray-400 text-[17px] leading-relaxed">
            {t.pricingSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 lg:p-10 hover-lift relative overflow-hidden group border border-white/[0.06]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/15 transition-colors duration-700" />

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-indigo-500/10 mx-auto mb-6">
                <Image
                  src="/Volleyra.jpeg"
                  alt="Volleyra Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{t.volleyraName}</h3>
              <p className="text-sm text-indigo-400 mb-4">{t.volleyraTagline}</p>
              <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-xs mx-auto">
                {t.volleyraDesc}
              </p>

              <a
                href="https://volley-academy.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t.volleyraStartTrial}
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/volleyra"
                className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                {t.volleyraMoreInfo}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
