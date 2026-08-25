'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BookOpen, Rocket, Settings, Database, Shield, Code } from 'lucide-react'

function DocSection({ icon: Icon, title, children, index }: { icon: React.ElementType; title: string; children: React.ReactNode; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.05 }} className="glass-card rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-indigo-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      </div>
      <div className="space-y-3 text-sm text-gray-400 leading-relaxed">{children}</div>
    </motion.div>
  )
}

export default function DocsPage() {
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">Documentation</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                Everything you need to get started with NineApps. Guides, tutorials, and reference materials for all our products.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            <DocSection icon={Rocket} title="Getting Started" index={0}>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Quick Start Guide</li>
                <li>Creating Your First Account</li>
                <li>Understanding the Dashboard</li>
                <li>Inviting Team Members</li>
                <li>Configuring Your Workspace</li>
              </ul>
            </DocSection>

            <DocSection icon={Database} title="CRM Suite" index={1}>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Contact Manager Setup</li>
                <li>Email Campaigns Guide</li>
                <li>Call Tracker Configuration</li>
                <li>Sales Pipeline Management</li>
                <li>Deal Room Collaboration</li>
              </ul>
            </DocSection>

            <DocSection icon={Settings} title="ERP Platform" index={2}>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Inventory Control Setup</li>
                <li>Supply Chain Configuration</li>
                <li>Financial Suite Guide</li>
                <li>HR Management Onboarding</li>
                <li>Project Billing Setup</li>
              </ul>
            </DocSection>

            <DocSection icon={Shield} title="Security & Compliance" index={3}>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Security Best Practices</li>
                <li>Role-Based Access Control</li>
                <li>Data Encryption Overview</li>
                <li>GDPR Compliance Guide</li>
                <li>Audit Logs & Monitoring</li>
              </ul>
            </DocSection>

            <DocSection icon={Code} title="Integrations" index={4}>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>API Overview</li>
                <li>Webhooks Configuration</li>
                <li>Third-Party Integrations</li>
                <li>Data Import & Export</li>
                <li>Custom Workflows</li>
              </ul>
            </DocSection>

            <DocSection icon={BookOpen} title="Billing & Account" index={5}>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Subscription Management</li>
                <li>Payment Methods</li>
                <li>Invoice & Receipts</li>
                <li>Account Settings</li>
                <li>Data Export & Deletion</li>
              </ul>
            </DocSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
