'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  RotateCcw,
  CreditCard,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Shield,
  Clock,
  CheckCircle,
} from 'lucide-react'

function Section({
  icon: Icon,
  title,
  children,
  index,
}: {
  icon: React.ElementType
  title: string
  children: React.ReactNode
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass-card rounded-2xl p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-indigo-400" />
        </div>
        <h2 className="text-xl font-bold gradient-text">{title}</h2>
      </div>
      <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
        {children}
      </div>
    </motion.div>
  )
}

export default function ReturnPolicyPage() {
  const { t } = useI18n()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        </div>

        {/* Hero */}
        <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-gray-400 mb-6">
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                {t.returnPolicyLastUpdated}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="gradient-text">{t.returnPolicyTitle}</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {t.returnPolicyIntro}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto space-y-6"
          >
            {/* Free Trial */}
            <Section icon={Clock} title={t.rpFreeTrialTitle} index={0}>
              <p>{t.rpFreeTrialP1}</p>
              <p>{t.rpFreeTrialP2}</p>
              <p>{t.rpFreeTrialP3}</p>
            </Section>

            {/* Subscription Terms */}
            <Section icon={CreditCard} title={t.rpSubscriptionTitle} index={1}>
              <p>{t.rpSubscriptionP1}</p>
              <p>{t.rpSubscriptionP2}</p>
              <p>{t.rpSubscriptionP3}</p>
            </Section>

            {/* Cancellation */}
            <Section icon={XCircle} title={t.rpCancellationTitle} index={2}>
              <p>{t.rpCancellationP1}</p>
              <p>{t.rpCancellationP2}</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-300 mb-3">
                  {t.rpCancellationStepsTitle}
                </p>
                <ol className="space-y-2 list-decimal list-inside text-sm">
                  <li>{t.rpCancellationStep1}</li>
                  <li>{t.rpCancellationStep2}</li>
                  <li>{t.rpCancellationStep3}</li>
                </ol>
              </div>
            </Section>

            {/* Refund Policy */}
            <Section icon={RotateCcw} title={t.rpRefundTitle} index={3}>
              <p>{t.rpRefundP1}</p>
              <p>{t.rpRefundP2}</p>
              <p>{t.rpRefundP3}</p>
              <p>{t.rpRefundP4}</p>
            </Section>

            {/* Exceptions */}
            <Section icon={CheckCircle} title={t.rpExceptionsTitle} index={4}>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>{t.rpException1}</li>
                <li>{t.rpException2}</li>
                <li>{t.rpException3}</li>
                <li>{t.rpException4}</li>
              </ul>
            </Section>

            {/* Data & Account */}
            <Section icon={Shield} title={t.rpDataTitle} index={5}>
              <p>{t.rpDataP1}</p>
              <p>{t.rpDataP2}</p>
            </Section>

            {/* Contact */}
            <Section icon={Mail} title={t.rpContactTitle} index={6}>
              <p>{t.rpContactP1}</p>
              <div className="space-y-3 mt-4">
                <a
                  href="mailto:nineappsonline@gmail.com"
                  className="flex items-center gap-3 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  nineappsonline@gmail.com
                </a>
                <a
                  href="tel:+201206777292"
                  className="flex items-center gap-3 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +20 120 677 7292
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-indigo-400" />
                  <span>33, Al Andalus, 5th Settlement, Cairo, Egypt</span>
                </div>
              </div>
            </Section>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
