'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Search, ChevronDown, Mail } from 'lucide-react'

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.03 }} className="glass-card rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="text-sm font-medium text-gray-200 pr-4">{question}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/[0.04] pt-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function HelpPage() {
  const [search, setSearch] = useState('')

  const faqs = [
    { q: 'How do I start my free trial?', a: 'Simply click "Get Started" on our homepage, create an account with your email and password, and you\'ll immediately have access to a 14-day free trial of all features. No credit card required.' },
    { q: 'Can I cancel my subscription at any time?', a: 'Yes. You can cancel your subscription at any time through your account dashboard (Dashboard → Account Settings → Subscriptions). Your access continues until the end of your current billing period.' },
    { q: 'How do refunds work?', a: 'We offer a full refund within the first 7 days of any paid subscription. After that, refunds are evaluated on a case-by-case basis. Contact our support team for assistance.' },
    { q: 'Can I switch between products?', a: 'Absolutely. NineApps is modular — you can subscribe to individual products and add or remove them at any time from your dashboard.' },
    { q: 'Is my data secure?', a: 'Yes. We use AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, and regular security audits. We are SOC 2 Type II compliant and adhere to GDPR standards.' },
    { q: 'Can I export my data?', a: 'Yes. You can export all your data at any time from your account settings. We support CSV, JSON, and Excel formats.' },
    { q: 'Do you offer annual billing?', a: 'Currently we offer monthly subscriptions. Annual billing options may be available in the future. Contact us for special arrangements.' },
    { q: 'How do I invite team members?', a: 'Go to Dashboard → Team Settings → Invite Members. Enter their email addresses and assign roles. They\'ll receive an invitation to join your workspace.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express) processed securely through our payment partner.' },
    { q: 'How can I contact support?', a: 'You can reach our support team at nineappsonline@gmail.com or call us at +20 120 677 7292. We respond within 24 hours on business days.' },
  ]

  const filtered = faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()))

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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">Help Center</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Find answers to common questions. Can&apos;t find what you&apos;re looking for? Contact our support team.
              </p>
              <div className="relative max-w-lg mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500/40 transition-colors"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-3">
            {filtered.map((faq, i) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} index={i} />
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-gray-500 text-sm py-12">No results found. Try a different search term.</p>
            )}
          </div>
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Still need help?</h3>
              <p className="text-sm text-gray-500 mb-4">Our support team is ready to assist you.</p>
              <a href="mailto:nineappsonline@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium hover:bg-indigo-500/20 transition-colors">
                <Mail className="w-4 h-4" />
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
