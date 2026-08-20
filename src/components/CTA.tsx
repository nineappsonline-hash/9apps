'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-purple-500/08 to-cyan-500/15" />
          <div className="absolute inset-0 bg-[#0a0e1a]/70 backdrop-blur-xl" />

          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl border-gradient" />

          {/* Content */}
          <div className="relative z-10 text-center py-16 px-6 sm:px-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', bounce: 0.4 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/25"
            >
              <Sparkles className="w-7 h-7 text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              Ready to transform your business?
            </h2>
            <p className="text-gray-400 text-[17px] mb-8 max-w-lg mx-auto text-balance leading-relaxed">
              Start your 14-day free trial today. No credit card required.
              Full access to all features.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 whitespace-nowrap"
              >
                Get Started for Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/signin"
                className="inline-flex items-center justify-center px-8 py-4 text-gray-300 hover:text-white border border-white/[0.08] hover:border-white/[0.15] rounded-2xl font-medium transition-all duration-300 whitespace-nowrap text-sm"
              >
                Sign In to Dashboard
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
