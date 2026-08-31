'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useI18n()

  return (
    <section id="products" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[140px]" />
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
            className="text-xs font-semibold text-cyan-400 tracking-[0.2em] uppercase mb-4 block"
          >
            {t.productsLabel}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">{t.productsTitle1}</span>
            <span className="text-shimmer">{t.productsTitle2}</span>
          </h2>
          <p className="max-w-[560px] mx-auto text-gray-400 text-[17px] leading-relaxed">
            {t.productsSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 hover-lift relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/15 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/8 rounded-full blur-[80px]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="shrink-0"
              >
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10 group-hover:shadow-indigo-500/20 transition-shadow duration-500">
                  <Image
                    src="/Volleyra.jpeg"
                    alt="Volleyra Logo"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <div className="flex items-center gap-2.5 mb-1 justify-center lg:justify-start">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">{t.volleyraName}</h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-xl lg:text-2xl font-bold text-indigo-400 mb-4">{t.volleyraTagline}</p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xl"
                >
                  {t.volleyraDesc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.42 }}
                  className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
                >
                  {[
                    { price: '$35', period: '/mo' },
                    { price: '$200', period: '/6 mo' },
                    { price: '$350', period: '/yr' },
                    { price: '$600', period: '/2 yr' },
                  ].map((tier, i) => (
                    <div
                      key={i}
                      className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-indigo-500/30 transition-colors"
                    >
                      <span className="text-white font-bold text-sm">{tier.price}</span>
                      <span className="text-gray-500 text-xs">{tier.period}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="flex flex-wrap gap-3 justify-center lg:justify-start"
                >
                  <a
                    href="https://volley-academy.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {t.volleyraStartTrial}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/volleyra"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 text-sm font-semibold hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {t.volleyraMoreInfo}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
