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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20" />
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />

          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl border-gradient" />

          {/* Content */}
          <div className="relative z-10 text-center py-16 px-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Start your 14-day free trial today. No credit card required.
              Full access to all features.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Get Started for Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/signin"
                className="px-8 py-4 text-gray-300 hover:text-white border border-white/10 hover:border-white/20 rounded-2xl font-medium transition-all duration-300"
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
