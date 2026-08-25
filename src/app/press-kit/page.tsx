'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Download, Image, FileText, Mail } from 'lucide-react'

function AssetCard({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.05 }} className="glass-card rounded-2xl p-6">
      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-indigo-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function PressKitPage() {
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">Press Kit</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                Everything you need to write about NineApps. Logos, brand guidelines, and key facts — all in one place.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 mb-6">
              <h2 className="text-xl font-bold gradient-text mb-4">About NineApps</h2>
              <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
                <p><strong className="text-gray-300">Founded:</strong> 2025</p>
                <p><strong className="text-gray-300">Headquarters:</strong> Cairo, Egypt</p>
                <p><strong className="text-gray-300">Industry:</strong> Business Software (SaaS)</p>
                <p><strong className="text-gray-300">Products:</strong> CRM Suite, ERP Platform — 10 modular products covering contact management, email campaigns, call tracking, sales pipeline, deal room, inventory control, supply chain, financial suite, HR management, and project billing.</p>
                <p><strong className="text-gray-300">Website:</strong> nineapps.com</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold gradient-text mb-6">Brand Assets</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <AssetCard icon={Image} title="Logo Files" description="NineApps logo in SVG, PNG, and PDF formats. Available in light and dark variants." index={0} />
              <AssetCard icon={FileText} title="Brand Guidelines" description="Color palette, typography, spacing rules, and usage guidelines for consistent brand representation." index={1} />
              <AssetCard icon={FileText} title="Fact Sheet" description="Key company facts, product overview, market positioning, and competitive differentiators." index={2} />
              <AssetCard icon={Download} title="Screenshots" description="High-resolution product screenshots of all CRM and ERP modules for editorial use." index={3} />
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-4">
                Need custom assets or have media inquiries?
              </p>
              <a href="mailto:nineappsonline@gmail.com?subject=Press Inquiry" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium hover:bg-indigo-500/20 transition-colors">
                <Mail className="w-4 h-4" />
                Contact Press Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
