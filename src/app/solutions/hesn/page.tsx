'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useI18n } from '@/lib/i18n'
import SolutionSchema from '@/components/SolutionSchema'
import {
  ArrowUpRight,
  Shield,
  Users,
  Clock,
  CheckCircle,
  BarChart3,
  Camera,
  Building2,
  BadgeCheck,
  FileText,
} from 'lucide-react'

function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-amber-400" />
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  )
}

function FeatureItem({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-500/20 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-amber-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white mb-1">{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function HesnLandingPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  const features = [
    { icon: Building2, title: 'Site & Contract Management', desc: 'Register clients, track deals through pipeline stages, weighted deal value, and 12-month revenue forecasts.' },
    { icon: Users, title: 'Personnel Management', desc: 'Full HR module — salaries, bonuses, penalties, leave requests, advances, performance evaluations, certifications.' },
    { icon: Clock, title: 'Shift & Patrol Tracking', desc: 'Guard post configuration, shift scheduling, attendance with tardiness logging, patrol routes and completion verification.' },
    { icon: FileText, title: 'Reports & Incidents', desc: 'Incident reporting with timestamps, event logging, periodic security reports for clients, violation tracking.' },
    { icon: BarChart3, title: 'Financial Management', desc: 'Invoicing, dual-entry accounting, profitability analysis per client and contract, pricing engine for quotes.' },
    { icon: Shield, title: 'Compliance & Licensing', desc: 'Guard license tracking, employment contracts, end-of-service benefits, regulatory compliance monitoring.' },
  ]

  return (
    <>
      <SolutionSchema
        name="Hesn"
        description="Security operations management platform for guard companies. Guard management, shift scheduling, patrol tracking, site contracts, invoicing, and compliance monitoring."
        url="https://nineapps.dev/solutions/hesn"
        price="3000"
        applicationSubCategory="Security Operations Management"
        featureList="Guard management, Site & contract management, Shift scheduling, Patrol tracking, Personnel management, Invoicing, Client portal, Compliance tracking"
        logo="/Hesn-Logo.webp"
        faqs={[
          { question: 'How many security officers can Hesn manage?', answer: 'Hesn scales from small teams to nationwide operations. The platform is currently used to manage 500+ officers across 27 coverage sites.' },
          { question: 'Can Hesn track patrol completion?', answer: 'Yes. Hesn supports configurable patrol routes with GPS tracking, completion verification, and incident logging during patrols.' },
          { question: 'Does Hesn handle guard licensing?', answer: 'Yes. Hesn tracks guard licenses, employment contracts, and sends renewal alerts. It also monitors compliance with government-mandated training and certification requirements.' },
          { question: 'Is there a client portal?', answer: 'Yes. Hesn includes a dedicated client portal where customers can track services, view invoices, follow up on communications, and see real-time reports.' },
          { question: 'How much does Hesn cost?', answer: 'Hesn starts at 3,000 EGP per month. Annual plans save up to 19%. A 14-day free trial is available with no credit card required.' },
        ]}
      />
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
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
                <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-4 block">Security Operations Platform</span>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="text-white">Your security, </span>
                  <span className="gradient-text">in safe hands</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  A complete platform to manage security operations — from site assignments and shift scheduling to attendance, invoicing, and profitability analysis. Built for guard companies of every size.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://masdar-security.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Start Free Trial
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/hesn"
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
                        <p className="text-sm font-medium text-white">Shift Completed — Night Patrol</p>
                        <p className="text-xs text-gray-500">Site: Downtown Mall — 4 officers — 100% patrol completion</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <BadgeCheck className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">License Renewal Due — Officer #087</p>
                        <p className="text-xs text-gray-500">Expires in 14 days — auto-alert triggered</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Monthly Invoiced — 890,000 EGP</p>
                        <p className="text-xs text-gray-500">12 active contracts — 27 coverage sites</p>
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
                <StatCard icon={Users} value="500+" label="Security Officers" />
                <StatCard icon={Clock} value="24/7" label="Support Available" />
                <StatCard icon={Shield} value="27" label="Coverage Sites" />
                <StatCard icon={BadgeCheck} value="50+" label="Trusted Clients" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">Everything you need to </span>
                <span className="gradient-text">run security operations</span>
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Manage your security operations today</h2>
                <p className="text-gray-400 text-lg mb-6 max-w-lg mx-auto">
                  From 3,000 EGP/month. 14-day free trial. No credit card required.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://masdar-security.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5"
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
