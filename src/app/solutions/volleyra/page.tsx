'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import SolutionSchema from '@/components/SolutionSchema'
import {
  ArrowUpRight,
  Calendar,
  CreditCard,
  Users,
  BarChart3,
  CheckCircle,
  Clock,
  Smartphone,
  Star,
} from 'lucide-react'

function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  )
}

function FeatureItem({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/20 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-indigo-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white mb-1">{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function VolleyraLandingPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const { t } = useI18n()

  const features = [
    { icon: Users, title: 'Player Registration & Memberships', desc: 'Flexible membership plans, auto-counted sessions, waitlists, and member profiles with attendance history.' },
    { icon: Calendar, title: 'Smart Scheduling', desc: 'Monthly calendar, recurring session generator, coach availability conflict detection, and .ics calendar feeds.' },
    { icon: CreditCard, title: 'Payments & Invoicing', desc: 'Cash, card, e-wallet, bank transfer. Auto-generated receipts. Membership status updates on payment. CSV export.' },
    { icon: BarChart3, title: 'Profitability Analytics', desc: 'Revenue vs cost per session, coach profitability, member retention rates, and attendance trends.' },
    { icon: Clock, title: 'Attendance Tracking', desc: 'One-tap check-in, remaining sessions counter, late/absent alerts, and PDF attendance reports per member.' },
    { icon: Smartphone, title: 'Member Self-Service', desc: 'Members view upcoming sessions, remaining credits, payment history, and attendance — all from their phone.' },
  ]

  return (
    <>
      <SolutionSchema
        name="Volleyra"
        description="Complete sports academy management platform. Player registration, training schedules, attendance tracking, payments, and profitability analytics for volleyball, football, basketball, swimming, and padel academies."
        url="https://nineapps.dev/solutions/volleyra"
        price="1750"
        applicationSubCategory="Sports Academy Management"
        featureList="Player registration, Training schedules, Session booking, Attendance tracking, Billing, Coach management, Match tracking, Performance analytics"
        logo="/Volleyra.jpeg"
        faqs={[
          { question: 'What sports does Volleyra support?', answer: 'Volleyra supports volleyball, football, basketball, swimming, padel, tennis, martial arts, and any sport that uses training sessions or court/lane bookings.' },
          { question: 'Can I manage multiple academy locations?', answer: 'Yes. Volleyra supports multi-location academies with separate schedules, coaches, and financial tracking per location.' },
          { question: 'How does the scheduling system work?', answer: 'Volleyra has a monthly calendar view, recurring session generator (e.g., every Tuesday and Thursday at 6PM), coach availability conflict detection, and .ics calendar feed export for members.' },
          { question: 'Is there a mobile app for members?', answer: 'Members can access their dashboard from any phone browser. They can view upcoming sessions, remaining credits, payment history, and attendance records.' },
          { question: 'How much does Volleyra cost?', answer: 'Volleyra starts at 1,750 EGP per month. Annual plans save up to 17%. A 14-day free trial is available with no credit card required.' },
        ]}
      />
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
        </div>

        {/* Hero */}
        <section ref={heroRef} className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-4 block">Sports Academy Management</span>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="text-white">Stop managing your academy </span>
                  <span className="gradient-text">on spreadsheets</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Volleyra replaces spreadsheets, WhatsApp groups, and paper notebooks with one platform that handles enrollment, scheduling, billing, attendance — so you can focus on coaching.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://volley-academy.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Start Free Trial
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/volleyra"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/[0.04] transition-all duration-300"
                  >
                    See All Features
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="glass-card rounded-2xl p-6 border border-white/[0.06]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Session Scheduled</p>
                        <p className="text-xs text-gray-500">Volleyball — Tue & Thu 6PM — Coach Ahmed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Payment Received — 10,000 EGP</p>
                        <p className="text-xs text-gray-500">Annual plan — Sara Mohamed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Monthly Revenue — 47,500 EGP</p>
                        <p className="text-xs text-gray-500">+23% from last month — 32 active members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard icon={Users} value="500+" label="Active Members" />
                <StatCard icon={Calendar} value="1,200+" label="Sessions / Month" />
                <StatCard icon={CreditCard} value="4.9 ★" label="Member Rating" />
                <StatCard icon={Clock} value="10 min" label="Daily Admin Time" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">Everything your academy needs — </span>
                <span className="gradient-text">nothing it doesn&apos;t</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <FeatureItem key={i} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Start managing your academy today</h2>
                <p className="text-gray-400 text-lg mb-6 max-w-lg mx-auto">
                  From 1,750 EGP/month. 14-day free trial. No credit card required.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://volley-academy.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Start Free Trial
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
