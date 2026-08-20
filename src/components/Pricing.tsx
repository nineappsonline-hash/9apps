'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import TiltCard from './TiltCard'
import {
  Users,
  BarChart3,
  Mail,
  Phone,
  ShoppingCart,
  Warehouse,
  Truck,
  DollarSign,
  FileText,
  Calculator,
} from 'lucide-react'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, currency } = useI18n()

  const products = [
    {
      icon: Users,
      name: t.contactManager,
      description: t.contactManagerDesc,
      price: currency.products.contactManager,
      gradient: 'from-indigo-500 to-purple-500',
      glow: 'shadow-indigo-500/20',
      featured: false,
    },
    {
      icon: Mail,
      name: t.emailCampaigns,
      description: t.emailCampaignsDesc,
      price: currency.products.emailCampaigns,
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/20',
      featured: true,
    },
    {
      icon: Phone,
      name: t.callTracker,
      description: t.callTrackerDesc,
      price: currency.products.callTracker,
      gradient: 'from-violet-500 to-pink-500',
      glow: 'shadow-violet-500/20',
      featured: false,
    },
    {
      icon: BarChart3,
      name: t.salesPipeline,
      description: t.salesPipelineDesc,
      price: currency.products.salesPipeline,
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'shadow-emerald-500/20',
      featured: false,
    },
    {
      icon: ShoppingCart,
      name: t.dealRoom,
      description: t.dealRoomDesc,
      price: currency.products.dealRoom,
      gradient: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/20',
      featured: false,
    },
    {
      icon: Warehouse,
      name: t.inventoryControl,
      description: t.inventoryControlDesc,
      price: currency.products.inventoryControl,
      gradient: 'from-yellow-500 to-orange-500',
      glow: 'shadow-yellow-500/20',
      featured: false,
    },
    {
      icon: Truck,
      name: t.supplyChain,
      description: t.supplyChainDesc,
      price: currency.products.supplyChain,
      gradient: 'from-blue-500 to-indigo-500',
      glow: 'shadow-blue-500/20',
      featured: false,
    },
    {
      icon: DollarSign,
      name: t.financialSuite,
      description: t.financialSuiteDesc,
      price: currency.products.financialSuite,
      gradient: 'from-pink-500 to-rose-500',
      glow: 'shadow-pink-500/20',
      featured: false,
    },
    {
      icon: FileText,
      name: t.hrManagement,
      description: t.hrManagementDesc,
      price: currency.products.hrManagement,
      gradient: 'from-teal-500 to-cyan-500',
      glow: 'shadow-teal-500/20',
      featured: false,
    },
    {
      icon: Calculator,
      name: t.projectBilling,
      description: t.projectBillingDesc,
      price: currency.products.projectBilling,
      gradient: 'from-indigo-500 to-blue-500',
      glow: 'shadow-indigo-500/20',
      featured: false,
    },
  ]

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full" glareColor={product.featured ? 'rgba(167, 139, 250, 0.12)' : 'rgba(129, 140, 248, 0.08)'}>
                <div className={`glass-card rounded-2xl p-6 h-full flex flex-col group hover-lift relative overflow-hidden ${product.featured ? 'border-purple-500/20' : ''}`}>
                  {/* Featured glow */}
                  {product.featured && (
                    <div className="absolute -top-1 -right-1">
                      <div className="relative">
                        <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                      </div>
                    </div>
                  )}

                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg ${product.glow}`}>
                    <product.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-[15px] font-semibold text-white mb-1.5 group-hover:text-indigo-200 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-5 group-hover:text-gray-400 transition-colors">
                    {product.description}
                  </p>

                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-xs text-gray-400">{currency.symbol}</span>
                    <span className="text-3xl font-bold text-white">{product.price}</span>
                    <span className="text-xs text-gray-500 mb-1">{t.perMonth}</span>
                  </div>

                  <Link
                    href="/signup"
                    className="group/btn flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm bg-white/[0.04] text-white border border-white/[0.08] hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 hover:border-indigo-500/20 transition-all duration-300"
                  >
                    {t.subscribe}
                    <motion.span
                      className="inline-flex"
                      whileHover={{ x: 3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
