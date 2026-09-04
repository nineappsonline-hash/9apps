'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function ZatcaBlogPost() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[120px]" />
        </div>

        <article className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-medium">Construction</span>
                <span className="flex items-center gap-1 text-xs text-gray-500"><Calendar className="w-3 h-3" />Aug 20, 2026</span>
                <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="w-3 h-3" />8 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                ZATCA Phase 2 Compliance Guide for Construction Companies in Saudi Arabia
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Everything construction companies need to know about ZATCA&apos;s Phase 2 e-invoicing requirements — from UBL XML generation to QR codes and ECDSA digital signatures.
              </p>
            </motion.div>

            {/* Content */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-8 text-gray-400 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">What is ZATCA Phase 2?</h2>
                <p>
                  The Zakat, Tax and Customs Authority (ZATCA) of Saudi Arabia has mandated that all businesses integrate with their FATOORA platform for electronic invoicing. Phase 2, also known as the &quot;Integration Phase,&quot; requires real-time reporting of all invoices to ZATCA&apos;s system.
                </p>
                <p className="mt-3">
                  For construction companies, this is particularly significant because of the high volume of invoices generated from progress billing, subcontractor payments, and material procurement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Key Requirements for Construction Companies</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-white font-medium">UBL XML Format</p>
                      <p className="text-sm">All invoices must be generated in UBL 2.1 XML format, containing structured data that ZATCA can process automatically.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-white font-medium">QR Code Generation</p>
                      <p className="text-sm">Each invoice must contain a QR code that encodes the invoice data in a format readable by ZATCA&apos;s systems.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-white font-medium">ECDSA Digital Signatures</p>
                      <p className="text-sm">Invoices must be digitally signed using ECDSA (Elliptic Curve Digital Signature Algorithm) to ensure authenticity and integrity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-white font-medium">Real-Time Reporting</p>
                      <p className="text-sm">Invoices must be reported to ZATCA in real-time or near-real-time, depending on your business category and revenue threshold.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Challenges Specific to Construction</h2>
                <p>
                  Construction companies face unique challenges with ZATCA compliance due to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li><strong className="text-gray-300">Progress billing:</strong> Invoices based on percentage of completion (POC) require accurate calculation of work done.</li>
                  <li><strong className="text-gray-300">Retention handling:</strong> Retention amounts must be properly reflected in e-invoices.</li>
                  <li><strong className="text-gray-300">Subcontractor invoices:</strong> High volume of subcontractor payments, each requiring separate e-invoicing.</li>
                  <li><strong className="text-gray-300">Material procurement:</strong> Three-way matching (PO ↔ GRN ↔ Invoice) must generate compliant e-invoices.</li>
                  <li><strong className="text-gray-300">VAT at 15%:</strong> Correct VAT calculation on construction services, including zero-rated and exempt categories.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How Ebny Handles ZATCA Compliance</h2>
                <p>
                  <Link href="/solutions/ebny" className="text-rose-400 hover:text-rose-300 underline underline-offset-4">Ebny</Link> is purpose-built for Saudi construction companies and includes full ZATCA Phase 2 compliance out of the box:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                  <li>Automatic UBL XML generation for all invoice types</li>
                  <li>QR code encoding per ZATCA specifications</li>
                  <li>ECDSA digital signature integration</li>
                  <li>Real-time reporting to ZATCA&apos;s FATOORA platform</li>
                  <li>VAT 15% calculation with proper categorization</li>
                  <li>Progress billing (POC) with compliant invoice generation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
                <p>
                  If your construction company hasn&apos;t yet integrated with ZATCA Phase 2, the time to act is now. Non-compliance can result in penalties and restrictions on your ability to operate.
                </p>
                <div className="mt-6">
                  <Link
                    href="/solutions/ebny"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300"
                  >
                    Learn more about Ebny
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
