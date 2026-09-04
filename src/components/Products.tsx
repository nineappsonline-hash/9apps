'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, ShoppingCart, Check } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { useCart } from '@/lib/cart'
import Link from 'next/link'
import Image from 'next/image'

function ProductCard({
  id,
  logo,
  logoAlt,
  name,
  cardTitle,
  tagline,
  desc,
  pricing,
  startTrialLabel,
  moreInfoLabel,
  trialHref,
  infoHref,
  gradient,
  index,
}: {
  id: string
  logo: string
  logoAlt: string
  name: string
  cardTitle?: string
  tagline: string
  desc: string
  pricing: { price: string; period: string; highlight?: boolean; save?: string }[]
  startTrialLabel: string
  moreInfoLabel: string
  trialHref: string
  infoHref: string
  gradient: string
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { addItem, isInCart } = useCart()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="max-w-4xl mx-auto"
    >
      <div className="glass-card rounded-3xl p-8 lg:p-12 hover-lift relative overflow-hidden group">
        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-[100px] group-hover:opacity-15 transition-opacity duration-700`} />
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
                src={logo}
                alt={logoAlt}
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
              {cardTitle && (
                <p className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2">{cardTitle}</p>
              )}
              <div className="flex items-center gap-2.5 mb-1 justify-center lg:justify-start">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">{name}</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-xl lg:text-2xl font-bold text-indigo-400 mb-4">{tagline}</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xl"
            >
              {desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="mb-8"
            >
              <p className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-3">Pricing</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {pricing.map(({ price, period, highlight, save }, i) => {
                  const tierId = `${id}-${period.replace(/\s/g, '-').toLowerCase()}`
                  const inCart = isInCart(tierId)
                  return (
                    <div
                      key={i}
                      className={`relative rounded-xl p-4 text-center transition-all duration-300 hover:scale-[1.03] ${highlight ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 shadow-lg shadow-indigo-500/10' : 'bg-white/[0.04] border border-white/[0.06] hover:border-indigo-500/20'}`}
                    >
                      {save && (
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-[9px] font-bold text-white whitespace-nowrap">
                          {save}
                        </span>
                      )}
                      <div className="text-2xl font-extrabold text-white mb-1 mt-1">{price}</div>
                      <div className="text-xs text-gray-400 font-medium mb-3">{period}</div>
                      <button
                        onClick={() => !inCart && addItem({
                          productId: tierId,
                          productName: name,
                          productLogo: logo,
                          price,
                          period,
                          gradient,
                        })}
                        disabled={inCart}
                        className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                          inCart
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default'
                            : 'bg-white/[0.06] text-gray-300 border border-white/[0.1] hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/30'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            Added
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Add to Cart
                          </>
                        )}
                      </button>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a
                href={trialHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {startTrialLabel}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href={infoHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 text-sm font-semibold hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                {moreInfoLabel}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">{t.productsTitle1}</span>
            <span className="text-shimmer">{t.productsTitle2}</span>
          </h2>
          <p className="max-w-[560px] mx-auto text-gray-400 text-[17px] leading-relaxed">
            {t.productsSubtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          <ProductCard
            id="volleyra"
            logo="/Volleyra.jpeg"
            logoAlt="Volleyra Logo"
            name={t.volleyraName}
            cardTitle={t.volleyraCardTitle}
            tagline={t.volleyraTagline}
            desc={t.volleyraDesc}
            pricing={[
              { price: '1,750 EGP', period: 'Per Month' },
              { price: '10,000 EGP', period: '6 Months', save: 'Save 5%' },
              { price: '17,500 EGP', period: '1 Year', highlight: true, save: 'Best Value · Save 17%' },
              { price: '30,000 EGP', period: '2 Years', save: 'Save 29%' },
            ]}
            startTrialLabel={t.volleyraStartTrial}
            moreInfoLabel={t.volleyraMoreInfo}
            trialHref="https://volley-academy.vercel.app/login"
            infoHref="/volleyra"
            gradient="from-indigo-500 to-purple-500"
            index={0}
          />

          <ProductCard
            id="clienta"
            logo="/Clienta-Logo.png"
            logoAlt="Clienta Logo"
            name={t.clientaName}
            cardTitle={t.clientaCardTitle}
            tagline={t.clientaTagline}
            desc={t.clientaDesc}
            pricing={[
              { price: '1,750 EGP', period: 'Per Month' },
              { price: '10,000 EGP', period: '6 Months', save: 'Save 5%' },
              { price: '17,500 EGP', period: '1 Year', highlight: true, save: 'Best Value · Save 17%' },
              { price: '30,000 EGP', period: '2 Years', save: 'Save 29%' },
            ]}
            startTrialLabel={t.clientaStartTrial}
            moreInfoLabel={t.clientaMoreInfo}
            trialHref="https://clienta.vercel.app/login"
            infoHref="/clienta"
            gradient="from-cyan-500 to-blue-500"
            index={1}
          />

          <ProductCard
            id="hesn"
            logo="/Hesn-Logo.webp"
            logoAlt="Hesn Logo"
            name={t.hesnName}
            cardTitle={t.hesnCardTitle}
            tagline={t.hesnTagline}
            desc={t.hesnDesc}
            pricing={[
              { price: '3,000 EGP', period: 'Per Month' },
              { price: '16,500 EGP', period: '6 Months', save: 'Save 8%' },
              { price: '29,000 EGP', period: '1 Year', highlight: true, save: 'Best Value · Save 19%' },
              { price: '53,000 EGP', period: '2 Years', save: 'Save 27%' },
            ]}
            startTrialLabel={t.hesnStartTrial}
            moreInfoLabel={t.hesnMoreInfo}
            trialHref="https://masdar-security.com"
            infoHref="/hesn"
            gradient="from-amber-500 to-orange-500"
            index={2}
          />

          <ProductCard
            id="ebny"
            logo="/Ebny-Logo.webp"
            logoAlt="Ebny Logo"
            name={t.ebnyName}
            cardTitle={t.ebnyCardTitle}
            tagline={t.ebnyTagline}
            desc={t.ebnyDesc}
            pricing={[
              { price: '5,000 EGP', period: 'Per Month' },
              { price: '25,000 EGP', period: '6 Months', save: 'Save 17%' },
              { price: '45,000 EGP', period: '1 Year', highlight: true, save: 'Best Value · Save 25%' },
              { price: '80,000 EGP', period: '2 Years', save: 'Save 33%' },
            ]}
            startTrialLabel={t.ebnyStartTrial}
            moreInfoLabel={t.ebnyMoreInfo}
            trialHref="https://ebny.app"
            infoHref="/ebny"
            gradient="from-rose-500 to-red-500"
            index={3}
          />
        </div>
      </div>
    </section>
  )
}
