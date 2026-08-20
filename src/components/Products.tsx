'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
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
  ArrowUpRight,
  Zap,
} from 'lucide-react'
import { useI18n } from '@/lib/i18n'

function ProductCard({
  product,
  index,
  isInView,
}: {
  product: { icon: React.ElementType; name: string; description: string; gradient: string }
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="group flex items-start gap-4 p-3.5 rounded-xl hover:bg-white/[0.04] transition-all duration-300 cursor-pointer hover-lift">
        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${product.gradient} border border-white/[0.05] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
          <product.icon className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <h4 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
              {product.name}
            </h4>
            <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-indigo-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{product.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t, locale } = useI18n()

  const crmProducts = [
    { icon: Users, name: t.contactManager, description: t.contactManagerDesc, gradient: 'from-indigo-500/20 to-purple-500/20' },
    { icon: Mail, name: t.emailCampaigns, description: t.emailCampaignsDesc, gradient: 'from-cyan-500/20 to-blue-500/20' },
    { icon: Phone, name: t.callTracker, description: t.callTrackerDesc, gradient: 'from-violet-500/20 to-pink-500/20' },
    { icon: BarChart3, name: t.salesPipeline, description: t.salesPipelineDesc, gradient: 'from-emerald-500/20 to-teal-500/20' },
    { icon: ShoppingCart, name: t.dealRoom, description: t.dealRoomDesc, gradient: 'from-orange-500/20 to-red-500/20' },
  ]

  const erpProducts = [
    { icon: Warehouse, name: t.inventoryControl, description: t.inventoryControlDesc, gradient: 'from-yellow-500/20 to-orange-500/20' },
    { icon: Truck, name: t.supplyChain, description: t.supplyChainDesc, gradient: 'from-blue-500/20 to-indigo-500/20' },
    { icon: DollarSign, name: t.financialSuite, description: t.financialSuiteDesc, gradient: 'from-pink-500/20 to-rose-500/20' },
    { icon: FileText, name: t.hrManagement, description: t.hrManagementDesc, gradient: 'from-teal-500/20 to-cyan-500/20' },
    { icon: Calculator, name: t.projectBilling, description: t.projectBillingDesc, gradient: 'from-indigo-500/20 to-blue-500/20' },
  ]

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

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 lg:p-10 hover-lift relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/15 transition-colors duration-700" />
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20"
              >
                <Users className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-white">{t.crmSuite}</h3>
                <p className="text-xs text-indigo-400">{t.crmSubtitle}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 mt-4 leading-relaxed relative z-10">
              {t.crmDesc}
            </p>
            <div className="space-y-0.5 relative z-10">
              {crmProducts.map((product, i) => (
                <ProductCard key={product.name} product={product} index={i} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-3xl p-8 lg:p-10 hover-lift relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/15 transition-colors duration-700" />
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <motion.div
                whileHover={{ rotate: -12, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/20"
              >
                <Warehouse className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-white">{t.erpPlatform}</h3>
                <p className="text-xs text-cyan-400">{t.erpSubtitle}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 mt-4 leading-relaxed relative z-10">
              {t.erpDesc}
            </p>
            <div className="space-y-0.5 relative z-10">
              {erpProducts.map((product, i) => (
                <ProductCard key={product.name} product={product} index={i} isInView={isInView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
