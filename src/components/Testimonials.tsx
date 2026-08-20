'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    avatar: 'SC',
    rating: 5,
    quote: 'NineApps completely transformed how we manage our sales pipeline. The AI insights alone saved us 20+ hours per week on manual analysis.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Marcus Rivera',
    role: 'Operations Director at ScaleUp',
    avatar: 'MR',
    rating: 5,
    quote: 'The ERP suite is phenomenal. We went from juggling 5 different tools to one unified platform. Our efficiency has increased by 40%.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Emily Nakamura',
    role: 'VP Sales at GrowthCo',
    avatar: 'EN',
    rating: 5,
    quote: 'Best CRM I have ever used. The 360° customer view feature gives our team everything they need to close deals with confidence.',
    gradient: 'from-violet-500 to-pink-500',
  },
  {
    name: 'David Okafor',
    role: 'Founder at NovaTech',
    avatar: 'DO',
    rating: 5,
    quote: 'From startup to 200+ employees, NineApps scaled with us perfectly. The modular approach meant we only paid for what we needed.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Lisa Andersson',
    role: 'Head of IT at Nordic Retail',
    avatar: 'LA',
    rating: 5,
    quote: 'The workflow automation is a game changer. We automated 60% of our repetitive processes within the first month of implementation.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'James Mitchell',
    role: 'COO at GlobalEdge',
    avatar: 'JM',
    rating: 5,
    quote: 'Outstanding support team and a product that just works. The real-time analytics dashboard gives me exactly what I need at a glance.',
    gradient: 'from-yellow-500 to-orange-500',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-emerald-400 tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Loved by teams </span>
            <span className="gradient-text">around the world</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Join thousands of businesses that trust NineApps to power their operations.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col group">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-indigo-500/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-300 leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
