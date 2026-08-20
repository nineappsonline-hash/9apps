'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
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
    },
    {
      icon: Mail,
      name: t.emailCampaigns,
      description: t.emailCampaignsDesc,
      price: currency.products.emailCampaigns,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Phone,
      name: t.callTracker,
      description: t.callTrackerDesc,
      price: currency.products.callTracker,
      gradient: 'from-violet-500 to-pink-500',
    },
    {
      icon: BarChart3,
      name: t.salesPipeline,
      description: t.salesPipelineDesc,
      price: currency.products.salesPipeline,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: ShoppingCart,
      name: t.dealRoom,
      description: t.dealRoomDesc,
      price: currency.products.dealRoom,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Warehouse,
      name: t.inventoryControl,
      description: t.inventoryControlDesc,
      price: currency.products.inventoryControl,
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Truck,
      name: t.supplyChain,
      description: t.supplyChainDesc,
      price: currency.products.supplyChain,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: DollarSign,
      name: t.financialSuite,
      description: t.financialSuiteDesc,
      price: currency.products.financialSuite,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: FileText,
      name: t.hrManagement,
      description: t.hrManagementDesc,
      price: currency.products.hrManagement,
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Calculator,
      name: t.projectBilling,
      description: t.projectBillingDesc,
      price: currency.products.projectBilling,
      gradient: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <section id="pricing" className="relative py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
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

        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col group">
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <product.icon className="w-5 h-5 text-white" />
                </div>

                {/* Name & Description */}
                <h3 className="text-[15px] font-semibold text-white mb-1.5">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-5">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-xs text-gray-400">{currency.symbol}</span>
                  <span className="text-3xl font-bold text-white">{product.price}</span>
                  <span className="text-xs text-gray-500 mb-1">{t.perMonth}</span>
                </div>

                {/* Subscribe button */}
                <Link
                  href="/signup"
                  className="group/btn flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm bg-white/[0.04] text-white border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                >
                  {t.subscribe}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
