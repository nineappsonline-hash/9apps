'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import {
  Users,
  Calendar,
  Trophy,
  BarChart3,
  UserCog,
  CheckCircle,
  MessageSquare,
  CreditCard,
  ArrowUpRight,
  ArrowLeft,
} from 'lucide-react'

const features = [
  { icon: Users, gradient: 'from-indigo-500 to-purple-500' },
  { icon: Calendar, gradient: 'from-cyan-500 to-blue-500' },
  { icon: Trophy, gradient: 'from-emerald-500 to-teal-500' },
  { icon: BarChart3, gradient: 'from-violet-500 to-pink-500' },
  { icon: UserCog, gradient: 'from-orange-500 to-red-500' },
  { icon: CheckCircle, gradient: 'from-yellow-500 to-amber-500' },
  { icon: MessageSquare, gradient: 'from-blue-500 to-indigo-500' },
  { icon: CreditCard, gradient: 'from-pink-500 to-rose-500' },
]

function FeatureCard({
  icon: Icon,
  gradient,
  title,
  description,
  index,
}: {
  icon: React.ElementType
  gradient: string
  title: string
  description: string
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div className="glass-card rounded-2xl p-7 h-full hover-lift group relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-[40px] group-hover:opacity-20 transition-opacity duration-500`} />
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
      </div>
    </motion.div>
  )
}

export default function VolleyraPage() {
  const { t } = useI18n()
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  const featureTitles = [
    t.volleyraFeature1Title,
    t.volleyraFeature2Title,
    t.volleyraFeature3Title,
    t.volleyraFeature4Title,
    t.volleyraFeature5Title,
    t.volleyraFeature6Title,
    t.volleyraFeature7Title,
    t.volleyraFeature8Title,
  ]

  const featureDescs = [
    t.volleyraFeature1Desc,
    t.volleyraFeature2Desc,
    t.volleyraFeature3Desc,
    t.volleyraFeature4Desc,
    t.volleyraFeature5Desc,
    t.volleyraFeature6Desc,
    t.volleyraFeature7Desc,
    t.volleyraFeature8Desc,
  ]

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        </div>

        <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center" ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8 inline-block"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10 mx-auto">
                  <Image
                    src="/Volleyra.jpeg"
                    alt="Volleyra Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="gradient-text">{t.volleyraName}</span>
              </h1>
              <p className="text-indigo-400 font-medium text-lg mb-6">{t.volleyraTagline}</p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                {t.volleyraDesc}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://volley-academy.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {t.volleyraStartTrial}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 text-sm font-semibold hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-white">{t.volleyraFeaturesTitle}</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f, i) => (
                <FeatureCard
                  key={i}
                  icon={f.icon}
                  gradient={f.gradient}
                  title={featureTitles[i]}
                  description={featureDescs[i]}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
