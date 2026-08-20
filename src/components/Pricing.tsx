'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, currency } = useI18n()

  const plans = [
    {
      name: t.starter,
      price: currency.prices.starter,
      description: t.starterDesc,
      features: [t.starterF1, t.starterF2, t.starterF3, t.starterF4, t.starterF5, t.starterF6],
      popular: false,
    },
    {
      name: t.professional,
      price: currency.prices.pro,
      description: t.professionalDesc,
      features: [t.proF1, t.proF2, t.proF3, t.proF4, t.proF5, t.proF6, t.proF7, t.proF8],
      popular: true,
    },
    {
      name: t.enterprise,
      price: currency.prices.enterprise,
      description: t.enterpriseDesc,
      features: [t.entF1, t.entF2, t.entF3, t.entF4, t.entF5, t.entF6, t.entF7, t.entF8, t.entF9],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-purple-400 tracking-[0.2em] uppercase mb-4 block">
            {t.pricingLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">{t.pricingTitle1}</span>
            <span className="gradient-text">{t.pricingTitle2}</span>
          </h2>
          <p className="max-w-[560px] mx-auto text-gray-400 text-[17px] leading-relaxed">
            {t.pricingSubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[11px] font-semibold tracking-wide shadow-lg shadow-indigo-500/25">
                    <Zap className="w-3 h-3" />
                    {t.mostPopular}
                  </div>
                </div>
              )}

              <div
                className={`glass-card rounded-3xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? 'border-indigo-500/20 bg-indigo-500/[0.03] shadow-xl shadow-indigo-500/5'
                    : ''
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-1.5">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="text-sm text-gray-400">{currency.symbol}</span>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-sm text-gray-500 mb-2">{t.perMonth}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-indigo-400' : 'text-gray-600'
                      }`} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup"
                  className={`group flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/25'
                      : 'bg-white/[0.04] text-white border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12]'
                  }`}
                >
                  {t.startFreeTrial}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
