'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useI18n } from '@/lib/i18n'
import SolutionSchema from '@/components/SolutionSchema'
import {
  ArrowUpRight,
  Landmark,
  Building,
  Shield,
  CheckCircle,
  BarChart3,
  Receipt,
  FileText,
  Globe,
} from 'lucide-react'

function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-rose-400" />
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  )
}

function FeatureItem({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-rose-500/20 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500/20 to-red-500/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-rose-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white mb-1">{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function EbnyLandingPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  const features = [
    { icon: Landmark, title: 'Core Accounting & GL', desc: 'Double-entry GL, centralized chart of accounts, period management, journal reversal with full audit trail.' },
    { icon: Building, title: 'Project Cost Control', desc: 'Real-time budget vs actual, Earned Value Management (CPI, SPI, EAC), change order management, cost codes.' },
    { icon: Receipt, title: 'Progress Billing & AR', desc: 'Invoices from GRNs, progress billing by POC percentage, retention management, IFRS 15 contract calculations.' },
    { icon: Shield, title: 'ZATCA Compliance', desc: 'Phase 2 e-invoicing: UBL XML, QR codes, ECDSA digital signatures. VAT 15%, Zakat, Saudization tracking built in.' },
    { icon: FileText, title: 'Procurement & AP', desc: 'PO workflows, three-way matching (PO ↔ GRN ↔ vendor invoice), subcontractor contract management.' },
    { icon: BarChart3, title: 'Financial Reporting', desc: 'Executive dashboards, AR/AP aging, cash flow, S-curves, financial statements from GL, daily bank reconciliation.' },
  ]

  return (
    <>
      <SolutionSchema
        name="Ebny"
        description="Construction accounting ERP for Saudi Arabia. Project cost control, percentage of completion billing, ZATCA Phase 2 e-invoicing, IFRS compliance, HR/payroll, and procurement."
        url="https://nineapps.dev/solutions/ebny"
        price="5000"
        applicationSubCategory="Construction Accounting ERP"
        featureList="Project accounting, Percentage of completion, ZATCA e-invoicing, IFRS compliance, HR & payroll, Bank reconciliation, Procurement, Cost control"
        logo="/Ebny-Logo.webp"
        faqs={[
          { question: 'Does Ebny support ZATCA Phase 2?', answer: 'Yes. Ebny generates UBL XML invoices with QR codes and ECDSA digital signatures, fully compliant with ZATCA Phase 2 e-invoicing requirements.' },
          { question: 'What is percentage of completion (POC) billing?', answer: 'POC billing generates invoices based on the actual progress of construction work. Ebny calculates POC automatically from project cost data and generates progress billing accordingly.' },
          { question: 'Is Ebny IFRS compliant?', answer: 'Yes. Ebny includes IFRS 15 revenue recognition for construction contracts, credit loss provisions, and end-of-service benefits per IAS 19.' },
          { question: 'Does Ebny handle Saudi-specific requirements?', answer: 'Yes. Ebny includes VAT 15% calculation, Zakat tracking, Saudization percentage monitoring, and compliance with Egyptian labor law for end-of-service benefits.' },
          { question: 'How much does Ebny cost?', answer: 'Ebny starts at 5,000 EGP per month. Annual plans save up to 25%. A 14-day free trial is available with no credit card required.' },
        ]}
      />
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
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
                <span className="text-xs font-semibold text-rose-400 tracking-wider uppercase mb-4 block">Construction Accounting ERP — Saudi Arabia</span>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="text-white">One system for </span>
                  <span className="gradient-text">construction finance</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Purpose-built for the Saudi construction industry. Ebny covers project accounting, percentage of completion, ZATCA e-invoicing, IFRS compliance, HR/payroll, and procurement — all in one bilingual platform.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://ebny.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Start Free Trial
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/ebny"
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
                        <p className="text-sm font-medium text-white">ZATCA E-Invoice Generated</p>
                        <p className="text-xs text-gray-500">UBL XML — QR code — ECDSA signed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
                        <Building className="w-5 h-5 text-rose-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Project POC: 67% — CPI: 1.04</p>
                        <p className="text-xs text-gray-500">Villa Compound — Phase 2</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Monthly Revenue — 2.4M SAR</p>
                        <p className="text-xs text-gray-500">+12% MoM — 3 active projects</p>
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
                <StatCard icon={Building} value="100%" label="Project Accounting" />
                <StatCard icon={Shield} value="ZATCA" label="Saudi Compliance" />
                <StatCard icon={Landmark} value="IFRS" label="Built-In Standards" />
                <StatCard icon={Globe} value="EN + AR" label="Bilingual Platform" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">Everything you need for </span>
                <span className="gradient-text">construction finance</span>
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-500/10 to-red-500/10 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to modernize your construction finance?</h2>
                <p className="text-gray-400 text-lg mb-6 max-w-lg mx-auto">
                  From 5,000 EGP/month. 14-day free trial. No credit card required.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://ebny.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 hover:-translate-y-0.5"
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
