'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function CrmVsHelpdeskBlogPost() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
        </div>

        <article className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium">CRM</span>
                <span className="flex items-center gap-1 text-xs text-gray-500"><Calendar className="w-3 h-3" />Aug 5, 2026</span>
                <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="w-3 h-3" />7 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                CRM vs Help Desk: What&apos;s the Difference and Which Do You Need?
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Understanding the difference between CRM software and help desk tools — and why modern B2B SaaS companies need both in one platform.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-8 text-gray-400 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The Confusion</h2>
                <p>
                  Many businesses use &quot;CRM&quot; and &quot;help desk&quot; interchangeably, but they serve different purposes. Understanding the distinction is crucial for choosing the right tool for your team.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">What is a Help Desk?</h2>
                <p>
                  A help desk (or ticketing system) is focused on <strong className="text-gray-300">resolving customer issues</strong>. It handles:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Support ticket creation and tracking</li>
                  <li>SLA management and escalation</li>
                  <li>Agent assignment and workload distribution</li>
                  <li>Knowledge base and self-service portals</li>
                  <li>Customer satisfaction surveys (CSAT/NPS)</li>
                </ul>
                <p className="mt-3">
                  Think of a help desk as your <em>reactive</em> tool — it responds when customers reach out with problems.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">What is a CRM?</h2>
                <p>
                  A CRM (Customer Relationship Management) system is focused on <strong className="text-gray-300">managing the entire customer lifecycle</strong>. It handles:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Contact and account management</li>
                  <li>Sales pipeline and deal tracking</li>
                  <li>Customer health scoring</li>
                  <li>Churn prevention and renewal tracking</li>
                  <li>Billing visibility and MRR tracking</li>
                  <li>Multi-channel communication (email, chat, social)</li>
                </ul>
                <p className="mt-3">
                  A CRM is your <em>proactive</em> tool — it helps you identify at-risk accounts, track usage patterns, and prevent churn before it happens.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The Modern Reality: You Need Both</h2>
                <p>
                  For B2B SaaS companies, the line between CRM and help desk has blurred. Your support team needs to see account health, billing status, and deal history. Your sales team needs to see support tickets and customer sentiment.
                </p>
                <p className="mt-3">
                  Using separate tools creates data silos, context switching, and missed opportunities. The most effective approach is a <strong className="text-gray-300">unified platform</strong> that combines both.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">What to Look For in a Unified Platform</h2>
                <div className="space-y-3">
                  {[
                    { title: 'Unified Inbox', desc: 'All conversations from email, chat, WhatsApp, VoIP, and social media in one place.' },
                    { title: 'Ticketing + Account View', desc: 'Every ticket should show the full account context — health score, MRR, contacts, and recent activity.' },
                    { title: 'SLA + Health Scoring', desc: 'Combine SLA compliance with customer health scores to prioritize the right tickets.' },
                    { title: 'Multi-Tenant Architecture', desc: 'If you serve multiple customers or brands, each should get an isolated workspace.' },
                    { title: 'Reports Across Both', desc: 'Analytics should span support metrics (tickets, SLA) and business metrics (MRR, churn) in one dashboard.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <div>
                        <p className="text-white font-medium">{item.title}</p>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How Clienta Solves This</h2>
                <p>
                  <Link href="/solutions/clienta" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">Clienta</Link> is a multi-tenant CRM platform that combines support ticketing, omnichannel inbox, live chat, incident management, and customer health scoring in one unified platform.
                </p>
                <p className="mt-3">
                  Instead of juggling Zendesk for tickets, Salesforce for CRM, and Intercom for chat, Clienta gives your team one dashboard with everything they need.
                </p>
                <div className="mt-6">
                  <Link
                    href="/solutions/clienta"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Learn more about Clienta
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
