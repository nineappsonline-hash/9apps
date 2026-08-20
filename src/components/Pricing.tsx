'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      'CRM Suite (basic)',
      '1,000 contacts',
      'Email integration',
      'Basic analytics',
      'Standard support',
    ],
    gradient: 'from-gray-700 to-gray-600',
    popular: false,
  },
  {
    name: 'Professional',
    price: '79',
    description: 'For growing businesses that need more',
    features: [
      'Up to 25 team members',
      'CRM + ERP Suites',
      'Unlimited contacts',
      'All integrations',
      'Advanced analytics & AI',
      'Workflow automation',
      'Priority support',
      'Custom branding',
    ],
    gradient: 'from-indigo-500 to-purple-500',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited team members',
      'Full Platform Access',
      'Unlimited everything',
      'All integrations + API',
      'AI-powered insights',
      'Advanced automation',
      'Dedicated account manager',
      'Custom deployments',
      'SLA guarantee',
    ],
    gradient: 'from-cyan-500 to-teal-500',
    popular: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Simple, transparent </span>
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
            All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`glass-card rounded-3xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? 'border-indigo-500/30 bg-indigo-500/[0.03]'
                    : ''
                }`}
              >
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="text-sm text-gray-400">$</span>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-sm text-gray-500 mb-2">/month</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-indigo-400' : 'text-gray-500'
                      }`} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/signup"
                  className={`group flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/25'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  Start Free Trial
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
