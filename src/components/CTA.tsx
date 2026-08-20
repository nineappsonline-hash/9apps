'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import AnimatedBusinessScene from './AnimatedBusinessScene'

function ParticleBurst({ isActive, x, y }: { isActive: boolean; x: number; y: number }) {
  if (!isActive) return null
  const particles = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30) * (Math.PI / 180)
    const distance = 40 + Math.random() * 30
    return {
      id: i,
      endX: Math.cos(angle) * distance,
      endY: Math.sin(angle) * distance,
      color: ['#818cf8', '#a78bfa', '#22d3ee', '#f0abfc'][i % 4],
      size: 2 + Math.random() * 3,
    }
  })

  return (
    <div className="absolute pointer-events-none" style={{ left: x, top: y, zIndex: 50 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          animate={{ x: p.endX, y: p.endY, scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute rounded-full"
          style={{ width: p.size, height: p.size, background: p.color, left: -p.size / 2, top: -p.size / 2 }}
        />
      ))}
    </div>
  )
}

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useI18n()
  const [burst, setBurst] = useState({ active: false, x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setBurst({
      active: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setBurst((prev) => ({ ...prev, active: false }))
  }, [])

  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden group"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 aurora-bg" />
          <div className="absolute inset-0 bg-[#0a0e1a]/70 backdrop-blur-xl" />
          <div className="absolute inset-0 rounded-3xl border-gradient" />
          <ParticleBurst isActive={burst.active} x={burst.x} y={burst.y} />

          <div className="relative z-10 text-center py-16 px-6 sm:px-10">
            {/* Animated business scene illustration */}
            <div className="mb-8">
              <AnimatedBusinessScene className="w-full max-w-md mx-auto h-auto" />
            </div>

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0.4 }}
              whileHover={{ rotate: 12, scale: 1.15 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/25"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-7 h-7 text-white" />
              </motion.div>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              {t.ctaTitle}
            </h2>
            <p className="text-gray-400 text-[17px] mb-8 max-w-lg mx-auto text-balance leading-relaxed">
              {t.ctaSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 whitespace-nowrap hover-lift"
              >
                {t.ctaPrimary}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
              <Link
                href="/signin"
                className="inline-flex items-center justify-center px-8 py-4 text-gray-300 hover:text-white border border-white/[0.08] hover:border-white/[0.15] rounded-2xl font-medium transition-all duration-300 whitespace-nowrap text-sm hover-lift"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
