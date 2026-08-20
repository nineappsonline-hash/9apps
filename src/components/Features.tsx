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

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning to uncover hidden patterns in your business data and make smarter decisions.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Users,
    title: '360° Customer View',
    description: 'Get a complete picture of every customer interaction across all touchpoints in one unified dashboard.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and design custom workflows that adapt to your business processes.',
    gradient: 'from-violet-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor KPIs, track performance metrics, and generate actionable reports with beautiful visualizations.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, role-based access control, and compliance with GDPR, SOC 2, and HIPAA.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second load times and instant data synchronization across devices.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy across multiple regions with automatic failover and 99.99% uptime guarantee.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Context-aware alerts and reminders that keep your team aligned without overwhelming them.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Layers,
    title: 'Modular Architecture',
    description: 'Pick and choose the modules you need. Scale from startup to enterprise without changing platforms.',
    gradient: 'from-teal-500 to-cyan-500',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold text-indigo-400 tracking-[0.2em] uppercase mb-4 block">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-white">Everything you need to </span>
            <span className="gradient-text">scale your business</span>
          </h2>
          <p className="max-w-[560px] mx-auto text-gray-400 text-[17px] text-balance leading-relaxed">
            A comprehensive suite of tools designed to cover every aspect of
            your business operations, from sales to supply chain.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="glass-card shimmer-hover rounded-2xl p-7 h-full group">
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-[15px] font-semibold text-white mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
