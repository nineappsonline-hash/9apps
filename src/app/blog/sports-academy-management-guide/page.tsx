'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function SportsAcademyBlogPost() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
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
                <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium">Sports</span>
                <span className="flex items-center gap-1 text-xs text-gray-500"><Calendar className="w-3 h-3" />Aug 12, 2026</span>
                <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="w-3 h-3" />6 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How to Manage a Sports Academy: The Complete Guide for 2026
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                From player registration to profitability analysis — everything you need to know about running a modern sports academy in Egypt and the Middle East.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-8 text-gray-400 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The State of Sports Academies</h2>
                <p>
                  Sports academies across Egypt, Saudi Arabia, and the wider Middle East are growing rapidly. Volleyball, football, basketball, swimming, and padel academies are seeing increased demand as parents and athletes seek structured training environments.
                </p>
                <p className="mt-3">
                  But with growth comes complexity. Managing member registrations, scheduling training sessions, tracking attendance, handling payments, and analyzing profitability — all while focusing on coaching — is a challenge that spreadsheets and WhatsApp groups can&apos;t solve.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5 Core Challenges Every Academy Faces</h2>
                <div className="space-y-3">
                  {[
                    { title: 'Scheduling Chaos', desc: 'Manual scheduling leads to double-booked courts, coach conflicts, and frustrated members. A single scheduling error can cascade into dozens of affected sessions.' },
                    { title: 'Payment Tracking', desc: 'Tracking who has paid, who owes, and who needs to renew is time-consuming. Missing a payment follow-up means lost revenue.' },
                    { title: 'Attendance Management', desc: 'Without proper tracking, you can&apos;t tell which members are active, which sessions are popular, or which coaches are most effective.' },
                    { title: 'Financial Visibility', desc: 'Most academies don&apos;t know their true profitability per session, per coach, or per sport until it&apos;s too late to make changes.' },
                    { title: 'Member Retention', desc: 'Members who don&apos;t show up eventually leave. Without attendance alerts and engagement tools, churn goes unnoticed.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <div>
                        <p className="text-white font-medium">{item.title}</p>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The Solution: Purpose-Built Software</h2>
                <p>
                  The most successful academies are replacing manual processes with purpose-built management platforms. Here&apos;s what to look for:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li><strong className="text-gray-300">Flexible membership plans:</strong> Full, half, or custom session counts with automatic remaining-session tracking.</li>
                  <li><strong className="text-gray-300">Recurring session generator:</strong> Create a month of sessions in one click instead of entering each manually.</li>
                  <li><strong className="text-gray-300">One-tap attendance:</strong> Check members in with a single tap, automatically decrementing remaining sessions.</li>
                  <li><strong className="text-gray-300">Multi-payment support:</strong> Cash, card, e-wallet, bank transfer — with auto-generated receipts.</li>
                  <li><strong className="text-gray-300">Profitability analytics:</strong> Know exactly which sessions, coaches, and sports generate the most revenue.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Why Volleyra?</h2>
                <p>
                  <Link href="/solutions/volleyra" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">Volleyra</Link> is a sports academy management platform built specifically for this use case. It handles the full lifecycle — from the moment a member joins to knowing exactly which sessions make money.
                </p>
                <p className="mt-3">
                  Whether you run a volleyball academy in Cairo, a football training center in Riyadh, or a multi-sport facility, Volleyra gives you the tools to focus on coaching instead of paperwork.
                </p>
                <div className="mt-6">
                  <Link
                    href="/solutions/volleyra"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                  >
                    Learn more about Volleyra
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
