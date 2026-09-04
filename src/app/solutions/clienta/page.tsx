'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useI18n } from '@/lib/i18n'
import SolutionSchema from '@/components/SolutionSchema'
import {
  ArrowUpRight,
  MessageSquare,
  Users,
  BarChart3,
  Shield,
  CheckCircle,
  Layers,
  Headphones,
  Zap,
} from 'lucide-react'

function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  )
}

function FeatureItem({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/20 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-cyan-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white mb-1">{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function ClientaLandingPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  const features = [
    { icon: MessageSquare, title: 'Ticketing with SLA Engine', desc: 'Full support ticketing with priority, categories, SLA tracking, auto-escalation, and CSAT/NPS surveys.' },
    { icon: Headphones, title: 'Omnichannel Inbox', desc: 'Email, WhatsApp, VoIP, Facebook, Instagram, SMS, Telegram, Web Chat, API — all in one unified inbox.' },
    { icon: Users, title: '360° Customer View', desc: 'Health scores, usage metrics, billing, contacts, renewal tracking, and churn risk scores per account.' },
    { icon: Layers, title: 'Multi-Tenant Platform', desc: 'Each tenant gets isolated data, custom branding, feature flags, and 50+ granular permissions.' },
    { icon: BarChart3, title: 'Reports & Analytics', desc: '8+ KPIs, breakdown charts by status/priority/channel/department, monthly trends, CSV export.' },
    { icon: Shield, title: 'Enterprise Security', desc: 'Row-level security, audit logs, role-based access, and modern stack (Next.js, Supabase, TypeScript).' },
  ]

  return (
    <>
      <SolutionSchema
        name="Clienta"
        description="Multi-tenant CRM platform for B2B SaaS companies. Support tickets with SLA engine, omnichannel inbox, live chat widget, incident management, and customer health scoring."
        url="https://nineapps.dev/solutions/clienta"
        price="1750"
        applicationSubCategory="CRM & Ticketing Platform"
        featureList="CRM, Support tickets, SLA engine, Omnichannel inbox, Live chat widget, Incident management, Knowledge base, Multi-tenant, Reports & analytics"
        logo="/Clienta-Logo.png"
        faqs={[
          { question: 'What channels does Clienta support?', answer: 'Clienta supports Email, VoIP, WhatsApp, Facebook, Instagram, SMS, Telegram, Web Chat, and API — all unified in a single inbox.' },
          { question: 'Is Clienta multi-tenant?', answer: 'Yes. Each tenant gets an isolated workspace with independent data, users, and settings. White-label ready with custom branding and feature flags.' },
          { question: 'How does the SLA engine work?', answer: 'Clienta tracks response time, resolution time, and auto-escalation per ticket. SLA policies are configurable with compliance monitoring and alerts.' },
          { question: 'Can I embed the live chat widget?', answer: 'Yes. Clienta provides an embeddable widget with 30+ configuration options that deploys with a single script tag. It includes pre-chat forms, proactive messages, and bot auto-reply.' },
          { question: 'How much does Clienta cost?', answer: 'Clienta starts at 1,750 EGP per month. Annual plans save up to 17%. A 14-day free trial is available with no credit card required.' },
        ]}
      />
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
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
                <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-4 block">CRM & Customer Success Platform</span>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="text-white">Your support team deserves </span>
                  <span className="gradient-text">one dashboard</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Clienta unifies tickets, live chat, account health, incidents, and billing in a single multi-tenant platform. Built for B2B SaaS companies that want to scale support without scaling headcount.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://clienta.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Start Free Trial
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/clienta"
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
                      <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Ticket #1247 — Priority: High</p>
                        <p className="text-xs text-gray-500">Acme Corp — SLA: 2h remaining</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Live Chat — 3 active conversations</p>
                        <p className="text-xs text-gray-500">Widget deployed on 2 tenant sites</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">SLA Compliance — 94.2%</p>
                        <p className="text-xs text-gray-500">MRR: 127,500 EGP — Health: Good</p>
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
                <StatCard icon={Layers} value="15+" label="Modules" />
                <StatCard icon={Users} value="50+" label="Permissions" />
                <StatCard icon={MessageSquare} value="9" label="Channels" />
                <StatCard icon={Shield} value="EN + AR" label="Bilingual" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">Built for teams that </span>
                <span className="gradient-text">live in their inbox</span>
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Launch your customer platform today</h2>
                <p className="text-gray-400 text-lg mb-6 max-w-lg mx-auto">
                  From 1,750 EGP/month. 14-day free trial. No credit card required.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://clienta.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
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
