'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Cookie, Settings, Shield, BarChart3, Mail } from 'lucide-react'

function Section({ icon: Icon, title, children, index }: { icon: React.ElementType; title: string; children: React.ReactNode; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.05 }} className="glass-card rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-indigo-400" />
        </div>
        <h2 className="text-xl font-bold gradient-text">{title}</h2>
      </div>
      <div className="space-y-4 text-gray-400 leading-relaxed text-sm">{children}</div>
    </motion.div>
  )
}

export default function CookiesPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-gray-400 mb-6">
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                Last updated: August 2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">Cookie Policy</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                This Cookie Policy explains how NineApps uses cookies and similar technologies to recognize you when you visit our website.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <Section icon={Cookie} title="What Are Cookies?" index={0}>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently, provide a better user experience, and supply information to the site owners.</p>
              <p>Cookies can be &quot;persistent&quot; (remaining on your device until deleted) or &quot;session-based&quot; (deleted when you close your browser).</p>
            </Section>

            <Section icon={Settings} title="How We Use Cookies" index={1}>
              <p>NineApps uses cookies for the following purposes:</p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>
                  <strong className="text-gray-300">Essential Cookies</strong> — Required for the Service to function properly. These include authentication cookies that keep you logged in, security cookies that protect against fraud, and session cookies that maintain your state across pages.
                </li>
                <li>
                  <strong className="text-gray-300">Functionality Cookies</strong> — Remember your preferences and settings, such as language selection, dashboard layout, and display preferences. These improve your experience by avoiding repeated configuration.
                </li>
                <li>
                  <strong className="text-gray-300">Analytics Cookies</strong> — Help us understand how visitors interact with our website by collecting anonymous usage data. This information helps us improve our platform and user experience.
                </li>
              </ul>
            </Section>

            <Section icon={BarChart3} title="Specific Cookies We Use" index={2}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 pr-4 text-gray-300 font-medium">Cookie</th>
                      <th className="text-left py-3 pr-4 text-gray-300 font-medium">Purpose</th>
                      <th className="text-left py-3 text-gray-300 font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-white/[0.04]">
                      <td className="py-3 pr-4 font-mono text-xs">sb-auth-token</td>
                      <td className="py-3 pr-4">Authentication session</td>
                      <td className="py-3">Session</td>
                    </tr>
                    <tr className="border-b border-white/[0.04]">
                      <td className="py-3 pr-4 font-mono text-xs">sb-refresh-token</td>
                      <td className="py-3 pr-4">Token refresh</td>
                      <td className="py-3">30 days</td>
                    </tr>
                    <tr className="border-b border-white/[0.04]">
                      <td className="py-3 pr-4 font-mono text-xs">na-language</td>
                      <td className="py-3 pr-4">Language preference</td>
                      <td className="py-3">1 year</td>
                    </tr>
                    <tr className="border-b border-white/[0.04]">
                      <td className="py-3 pr-4 font-mono text-xs">na-theme</td>
                      <td className="py-3 pr-4">UI theme preference</td>
                      <td className="py-3">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">_ga / _gid</td>
                      <td className="py-3 pr-4">Google Analytics</td>
                      <td className="py-3">2 years / 24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section icon={Settings} title="Managing Cookies" index={3}>
              <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>View what cookies are stored and delete them individually.</li>
                <li>Block third-party cookies.</li>
                <li>Block cookies from specific sites.</li>
                <li>Block all cookies.</li>
                <li>Delete all cookies when you close your browser.</li>
              </ul>
              <p>Note: Disabling essential cookies may prevent the Service from functioning properly. Features such as login, session persistence, and security protections may be affected.</p>
            </Section>

            <Section icon={Shield} title="Third-Party Cookies" index={4}>
              <p>In addition to our own cookies, we may use cookies from third-party services:</p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li><strong className="text-gray-300">Google Analytics</strong> — For website usage analytics. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">Google Privacy Policy</a></li>
                <li><strong className="text-gray-300">Supabase</strong> — For authentication and session management.</li>
              </ul>
              <p>These third parties have their own privacy policies governing how they use information.</p>
            </Section>

            <Section icon={Mail} title="Contact Us" index={5}>
              <p>If you have any questions about our use of cookies, please contact us:</p>
              <a href="mailto:nineappsonline@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">nineappsonline@gmail.com</a>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
