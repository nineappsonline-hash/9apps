'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Shield, Database, Settings, Users, Globe, Lock, Mail } from 'lucide-react'

function Section({ icon: Icon, title, children, index }: { icon: React.ElementType; title: string; children: React.ReactNode; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.05 }} className="glass-card rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-indigo-400" />
        </div>
        <h2 className="text-xl font-bold gradient-text">{title}</h2>
      </div>
      <div className="space-y-4 text-gray-400 leading-relaxed text-sm">{children}</div>
    </motion.div>
  )
}

export default function GdprPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        </div>

        <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-gray-400 mb-6">
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                Last updated: August 2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">GDPR Compliance</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                NineApps is committed to compliance with the General Data Protection Regulation (GDPR). This page outlines how we protect the data rights of users in the European Union and European Economic Area.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <Section icon={Shield} title="Our Commitment" index={0}>
              <p>NineApps takes data protection seriously. We have implemented comprehensive technical and organizational measures to ensure the protection of personal data processed through our platform. Our practices are designed to comply with the GDPR and other applicable data protection laws.</p>
              <p>We act as a Data Processor on behalf of our customers (Data Controllers) when processing personal data through the Service. We also act as a Data Controller for data we collect directly from users (e.g., account registration, billing information).</p>
            </Section>

            <Section icon={Database} title="Data We Process" index={1}>
              <p>As a Data Processor, we process personal data on behalf of our customers, which may include:</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>Customer contact information (names, emails, phone numbers) entered by our users.</li>
                <li>Deal and transaction data entered through the CRM and ERP modules.</li>
                <li>Employee records processed through the HR Management module.</li>
                <li>Financial data processed through the Financial Suite.</li>
              </ul>
              <p>As a Data Controller, we collect: account holder information (name, email), billing details, usage analytics, and support communications.</p>
            </Section>

            <Section icon={Users} title="Your GDPR Rights" index={2}>
              <p>If you are located in the EU/EEA, you have the following rights under the GDPR:</p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li><strong className="text-gray-300">Right of Access (Article 15)</strong> — You have the right to request a copy of the personal data we hold about you.</li>
                <li><strong className="text-gray-300">Right to Rectification (Article 16)</strong> — You have the right to request correction of inaccurate or incomplete personal data.</li>
                <li><strong className="text-gray-300">Right to Erasure (Article 17)</strong> — You have the right to request deletion of your personal data, subject to certain legal exceptions.</li>
                <li><strong className="text-gray-300">Right to Restrict Processing (Article 18)</strong> — You have the right to request restriction of processing of your personal data in certain circumstances.</li>
                <li><strong className="text-gray-300">Right to Data Portability (Article 20)</strong> — You have the right to receive your personal data in a structured, commonly used, machine-readable format.</li>
                <li><strong className="text-gray-300">Right to Object (Article 21)</strong> — You have the right to object to processing of your personal data in certain circumstances.</li>
                <li><strong className="text-gray-300">Right to Withdraw Consent</strong> — Where processing is based on consent, you have the right to withdraw consent at any time.</li>
              </ul>
            </Section>

            <Section icon={Lock} title="Data Security" index={3}>
              <p>We implement the following technical and organizational measures to protect personal data:</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>AES-256 encryption for data at rest.</li>
                <li>TLS 1.3 encryption for data in transit.</li>
                <li>Role-based access controls with principle of least privilege.</li>
                <li>Regular security audits and penetration testing.</li>
                <li>Employee training on data protection and security practices.</li>
                <li>Incident response procedures and breach notification protocols.</li>
              </ul>
            </Section>

            <Section icon={Globe} title="International Data Transfers" index={4}>
              <p>NineApps may process data in regions outside the EU/EEA. When we transfer personal data internationally, we ensure appropriate safeguards are in place, including:</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
                <li>Adequacy decisions where applicable.</li>
                <li>Contractual requirements for data protection standards equivalent to GDPR.</li>
              </ul>
            </Section>

            <Section icon={Settings} title="Data Retention" index={5}>
              <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected:</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li><strong className="text-gray-300">Account data:</strong> Retained while the account is active, plus 30 days after cancellation for data export.</li>
                <li><strong className="text-gray-300">Customer data (processed on behalf of customers):</strong> Deleted upon customer request or within 30 days of account closure.</li>
                <li><strong className="text-gray-300">Billing records:</strong> Retained for 7 years as required by financial regulations.</li>
                <li><strong className="text-gray-300">Analytics data:</strong> Anonymized after 26 months.</li>
              </ul>
            </Section>

            <Section icon={Mail} title="Exercising Your Rights" index={6}>
              <p>To exercise any of your GDPR rights, or if you have questions about our data processing practices, please contact our Data Protection team:</p>
              <div className="space-y-2 mt-3">
                <a href="mailto:nineappsonline@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">nineappsonline@gmail.com</a>
                <p className="text-gray-500">Subject line: GDPR Request</p>
                <p className="text-gray-500">We will respond to all requests within 30 days.</p>
                <p className="text-gray-500 mt-3">33, Al Andalus, 5th Settlement, Cairo, Egypt</p>
              </div>
              <p className="mt-4">You also have the right to lodge a complaint with a supervisory authority in your EU/EEA member state if you believe your data protection rights have been infringed.</p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
