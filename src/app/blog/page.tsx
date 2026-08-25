'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

function BlogPost({ title, excerpt, date, readTime, tag, index }: { title: string; excerpt: string; date: string; readTime: string; tag: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.article ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.05 }} className="glass-card rounded-2xl p-6 group cursor-pointer">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium">{tag}</span>
        <span className="flex items-center gap-1 text-xs text-gray-500"><Calendar className="w-3 h-3" />{date}</span>
        <span className="flex items-center gap-1 text-xs text-gray-500"><Clock className="w-3 h-3" />{readTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{excerpt}</p>
      <span className="inline-flex items-center gap-1 text-sm text-indigo-400 font-medium">
        Read more <ArrowRight className="w-4 h-4" />
      </span>
    </motion.article>
  )
}

export default function BlogPage() {
  const posts = [
    { title: 'Introducing NineApps CRM Suite 2.0', excerpt: 'We\'re excited to announce the launch of our redesigned CRM Suite with AI-powered insights, a全新的 sales pipeline, and deeper integrations.', date: 'Aug 15, 2026', readTime: '5 min', tag: 'Product' },
    { title: 'How AI is Transforming Customer Relationship Management', excerpt: 'Explore how artificial intelligence is reshaping the way businesses manage customer interactions, from predictive analytics to automated follow-ups.', date: 'Aug 8, 2026', readTime: '8 min', tag: 'AI & Tech' },
    { title: '5 ERP Best Practices for Growing Businesses', excerpt: 'Scaling your operations? Here are five essential ERP strategies that will help you manage growth without the growing pains.', date: 'Jul 30, 2026', readTime: '6 min', tag: 'Best Practices' },
    { title: 'NineApps Achieves SOC 2 Type II Compliance', excerpt: 'Security is at the core of everything we do. Learn about our journey to SOC 2 Type II certification and what it means for our customers.', date: 'Jul 22, 2026', readTime: '4 min', tag: 'Security' },
    { title: 'Building a Modular SaaS Platform: Our Architecture Decisions', excerpt: 'A deep dive into the technical decisions behind NineApps\' modular architecture — why we chose microservices, event-driven design, and more.', date: 'Jul 14, 2026', readTime: '10 min', tag: 'Engineering' },
    { title: 'The Future of ERP: Trends to Watch in 2026', excerpt: 'From AI-driven automation to real-time analytics, discover the key trends shaping the future of enterprise resource planning.', date: 'Jul 5, 2026', readTime: '7 min', tag: 'Industry' },
  ]

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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6"><span className="gradient-text">Blog</span></h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                Insights, updates, and deep dives from the NineApps team. Stay informed about product launches, industry trends, and best practices.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto grid gap-6">
            {posts.map((post, i) => (
              <BlogPost key={post.title} {...post} index={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
