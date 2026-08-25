'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FileText, Shield, CreditCard, Users, AlertTriangle, Scale } from 'lucide-react'

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

export default function TermsPage() {
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">Terms of Service</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                Please read these terms carefully before using NineApps. By accessing or using our platform, you agree to be bound by these terms.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <Section icon={FileText} title="1. Acceptance of Terms" index={0}>
              <p>By creating an account, accessing, or using NineApps (the &quot;Service&quot;), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you must not use the Service.</p>
              <p>These terms apply to all users of the Service, including browsers, customers, merchants, and contributors of content.</p>
            </Section>

            <Section icon={Users} title="2. Account Registration" index={1}>
              <p>To use certain features of the Service, you must create an account. You agree to:</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>Provide accurate, current, and complete information during registration.</li>
                <li>Maintain the security of your password and account credentials.</li>
                <li>Promptly update your account information if it changes.</li>
                <li>Accept responsibility for all activities that occur under your account.</li>
                <li>Notify us immediately of any unauthorized use of your account.</li>
              </ul>
              <p>You must be at least 18 years of age to create an account. You may not share your account credentials with third parties.</p>
            </Section>

            <Section icon={CreditCard} title="3. Subscriptions &amp; Billing" index={2}>
              <p>NineApps operates on a subscription-based model. By subscribing to a product, you agree to the following:</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>Subscriptions are billed monthly in advance on the date of purchase.</li>
                <li>Subscriptions automatically renew unless cancelled before the renewal date.</li>
                <li>You may cancel your subscription at any time through your account dashboard.</li>
                <li>A 14-day free trial is available for new subscribers. No credit card is required for the trial.</li>
                <li>Refund requests within the first 7 days of a paid subscription will be processed in full.</li>
                <li>Prices are subject to change with 30 days&apos; advance notice.</li>
              </ul>
            </Section>

            <Section icon={AlertTriangle} title="4. Acceptable Use" index={3}>
              <p>You agree not to use the Service to:</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>Violate any applicable laws or regulations.</li>
                <li>Infringe upon the rights of others, including privacy and intellectual property rights.</li>
                <li>Transmit spam, malware, or other harmful content.</li>
                <li>Attempt to gain unauthorized access to the Service or its related systems.</li>
                <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                <li>Use the Service to develop a competing product or service.</li>
                <li>Resell, sublicense, or redistribute the Service without our written consent.</li>
              </ul>
            </Section>

            <Section icon={Shield} title="5. Intellectual Property" index={4}>
              <p>The Service and its original content, features, and functionality are owned by NineApps and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
              <p>You retain ownership of any data you input into the Service. By using the Service, you grant us a limited license to process your data solely for the purpose of providing the Service to you.</p>
            </Section>

            <Section icon={FileText} title="6. Data &amp; Privacy" index={5}>
              <p>Your use of the Service is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. By using the Service, you consent to the data practices described in the Privacy Policy.</p>
              <p>You are responsible for the legality and accuracy of the data you store in the Service. We do not assume responsibility for the content of data processed through your account.</p>
            </Section>

            <Section icon={AlertTriangle} title="7. Limitation of Liability" index={6}>
              <p>To the maximum extent permitted by law, NineApps shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or business opportunities.</p>
              <p>Our total liability for any claims arising from or related to the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.</p>
            </Section>

            <Section icon={Scale} title="8. Termination" index={7}>
              <p>We may suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. Grounds for termination include but are not limited to:</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>Violation of these Terms of Service.</li>
                <li>Non-payment of subscription fees.</li>
                <li>Abuse of the Service or other users.</li>
                <li>Requests by law enforcement.</li>
              </ul>
              <p>Upon termination, your right to use the Service ceases immediately. You may request export of your data within 30 days of termination.</p>
            </Section>

            <Section icon={FileText} title="9. Modifications to Terms" index={8}>
              <p>We reserve the right to modify these Terms of Service at any time. Material changes will be communicated via email or a prominent notice on the Service at least 30 days before they take effect. Continued use of the Service after changes take effect constitutes acceptance of the revised terms.</p>
            </Section>

            <Section icon={Scale} title="10. Governing Law" index={9}>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Cairo, Egypt.</p>
            </Section>

            <Section icon={FileText} title="11. Contact" index={10}>
              <p>If you have questions about these Terms of Service, please contact us:</p>
              <div className="space-y-2 mt-3">
                <a href="mailto:nineappsonline@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">nineappsonline@gmail.com</a>
                <p className="text-gray-500">33, Al Andalus, 5th Settlement, Cairo, Egypt</p>
              </div>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
