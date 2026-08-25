'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Database,
  Settings,
  Share2,
  Lock,
  Clock,
  UserCheck,
  Cookie,
  Baby,
  FileText,
  Mail,
  Shield,
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

export default function PrivacyPage() {
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
                {t.privacyLastUpdated}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="gradient-text">{t.privacyTitle}</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {t.privacyIntro}
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
            {/* Information We Collect */}
            <Section icon={Database} title={t.ppInfoWeCollectTitle} index={0}>
              <p>{t.ppInfoWeCollectP1}</p>
              <p>{t.ppInfoWeCollectP2}</p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>{t.ppInfoWeCollectList1}</li>
                <li>{t.ppInfoWeCollectList2}</li>
                <li>{t.ppInfoWeCollectList3}</li>
                <li>{t.ppInfoWeCollectList4}</li>
              </ul>
            </Section>

            {/* How We Use Your Information */}
            <Section icon={Settings} title={t.ppHowWeUseTitle} index={1}>
              <p>{t.ppHowWeUseP1}</p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>{t.ppHowWeUseList1}</li>
                <li>{t.ppHowWeUseList2}</li>
                <li>{t.ppHowWeUseList3}</li>
                <li>{t.ppHowWeUseList4}</li>
                <li>{t.ppHowWeUseList5}</li>
              </ul>
            </Section>

            {/* Data Sharing */}
            <Section icon={Share2} title={t.ppSharingTitle} index={2}>
              <p>{t.ppSharingP1}</p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>{t.ppSharingList1}</li>
                <li>{t.ppSharingList2}</li>
                <li>{t.ppSharingList3}</li>
              </ul>
            </Section>

            {/* Data Security */}
            <Section icon={Lock} title={t.ppSecurityTitle} index={3}>
              <p>{t.ppSecurityP1}</p>
              <p>{t.ppSecurityP2}</p>
            </Section>

            {/* Data Retention */}
            <Section icon={Clock} title={t.ppRetentionTitle} index={4}>
              <p>{t.ppRetentionP1}</p>
              <p>{t.ppRetentionP2}</p>
            </Section>

            {/* Your Rights */}
            <Section icon={UserCheck} title={t.ppYourRightsTitle} index={5}>
              <p>{t.ppYourRightsP1}</p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>{t.ppYourRightsList1}</li>
                <li>{t.ppYourRightsList2}</li>
                <li>{t.ppYourRightsList3}</li>
                <li>{t.ppYourRightsList4}</li>
              </ul>
            </Section>

            {/* Cookies */}
            <Section icon={Cookie} title={t.ppCookiesTitle} index={6}>
              <p>{t.ppCookiesP1}</p>
              <p>{t.ppCookiesP2}</p>
            </Section>

            {/* Children's Privacy */}
            <Section icon={Baby} title={t.ppChildrenTitle} index={7}>
              <p>{t.ppChildrenP1}</p>
            </Section>

            {/* Changes */}
            <Section icon={FileText} title={t.ppChangesTitle} index={8}>
              <p>{t.ppChangesP1}</p>
            </Section>

            {/* Contact */}
            <Section icon={Mail} title={t.ppContactTitle} index={9}>
              <p>{t.ppContactP1}</p>
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
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  +20 120 677 7292
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <svg className="w-4 h-4 shrink-0 mt-0.5 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
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
