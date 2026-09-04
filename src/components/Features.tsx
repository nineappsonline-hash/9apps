'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  BarChart3,
  Users,
  Workflow,
  Shield,
  Zap,
  Globe,
  Brain,
  Bell,
  Layers,
} from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import TiltCard from './TiltCard'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useI18n()

  const features = [
    { icon: Brain, title: t.feature1Title, description: t.feature1Desc, gradient: 'from-indigo-500 to-purple-500', glow: 'shadow-indigo-500/20' },
    { icon: Users, title: t.feature2Title, description: t.feature2Desc, gradient: 'from-cyan-500 to-blue-500', glow: 'shadow-cyan-500/20' },
    { icon: Workflow, title: t.feature3Title, description: t.feature3Desc, gradient: 'from-violet-500 to-pink-500', glow: 'shadow-violet-500/20' },
    { icon: BarChart3, title: t.feature4Title, description: t.feature4Desc, gradient: 'from-emerald-500 to-teal-500', glow: 'shadow-emerald-500/20' },
    { icon: Shield, title: t.feature5Title, description: t.feature5Desc, gradient: 'from-orange-500 to-red-500', glow: 'shadow-orange-500/20' },
    { icon: Zap, title: t.feature6Title, description: t.feature6Desc, gradient: 'from-yellow-500 to-orange-500', glow: 'shadow-yellow-500/20' },
    { icon: Globe, title: t.feature7Title, description: t.feature7Desc, gradient: 'from-blue-500 to-indigo-500', glow: 'shadow-blue-500/20' },
    { icon: Bell, title: t.feature8Title, description: t.feature8Desc, gradient: 'from-pink-500 to-rose-500', glow: 'shadow-pink-500/20' },
    { icon: Layers, title: t.feature9Title, description: t.feature9Desc, gradient: 'from-teal-500 to-cyan-500', glow: 'shadow-teal-500/20' },
  ]

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[120px]" />
      <div className="animated-mesh" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="text-white">{t.featuresTitle1}</span>
            <span className="text-shimmer">{t.featuresTitle2}</span>
          </h2>
          <p className="max-w-[560px] mx-auto text-gray-400 text-[17px] text-balance leading-relaxed">
            {t.featuresSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full">
                <div className="glass-card shimmer-hover rounded-2xl p-7 h-full group hover-lift">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg ${feature.glow}`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
