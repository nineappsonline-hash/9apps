'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import AnimatedCounter from '@/components/AnimatedCounter'
import TiltCard from '@/components/TiltCard'
import {
  ArrowUpRight,
  ArrowLeft,
  LayoutDashboard,
  Users,
  CreditCard,
  CalendarCheck,
  QrCode,
  TrendingUp,
  BarChart3,
  Trophy,
  UserCog,
  Megaphone,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  DollarSign,
  Clock,
  Smartphone,
  Star,
} from 'lucide-react'

const workflowSteps = ['Enroll', 'Schedule', 'Attend', 'Bill', 'Profit']

function AnimatedWorkflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="flex items-center justify-center gap-2 sm:gap-3 my-16 flex-wrap">
      {workflowSteps.map((step, i) => (
        <div key={step} className="flex items-center gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 py-2.5 rounded-xl glass-card text-sm font-semibold text-white border border-white/[0.06] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">{step}</span>
          </motion.div>
          {i < workflowSteps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.15 + 0.1 }}
              className="text-indigo-500/60 text-lg"
            >
              →
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

function FeatureSection({
  icon: Icon,
  gradient,
  title,
  subtitle,
  description,
  points,
  reversed,
}: {
  icon: React.ElementType
  gradient: string
  title: string
  subtitle: string
  description: string
  points: string[]
  reversed?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className={`glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover-lift`}>
        <div className={`absolute top-0 ${reversed ? 'left-0' : 'right-0'} w-48 h-48 bg-gradient-to-br ${gradient} opacity-[0.07] rounded-full blur-[80px] group-hover:opacity-[0.12] transition-opacity duration-700`} />

        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-start relative z-10`}>
          <div className="shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
          </div>

          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: reversed ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <p className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-1">{subtitle}</p>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{title}</h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: reversed ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 leading-relaxed mb-5 text-sm"
            >
              {description}
            </motion.p>

            <div className="space-y-2.5">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: reversed ? -15 : 15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.05 }}
                  className="flex items-start gap-2.5 group/item"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-sm text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StatCard({ value, suffix, label, icon: Icon }: { value: number; suffix?: string; label: string; icon: React.ElementType }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-5 h-5 text-indigo-400" />
      </div>
      <div className="text-3xl font-bold text-white mb-1">
        <AnimatedCounter target={value} suffix={suffix || ''} />
      </div>
      <p className="text-xs text-gray-500 font-medium">{label}</p>
    </motion.div>
  )
}

export default function VolleyraPage() {
  const { t } = useI18n()
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])

  const features = [
    {
      icon: LayoutDashboard,
      gradient: 'from-indigo-500 to-purple-500',
      title: 'Command Center Dashboard',
      subtitle: 'Instant Overview',
      description: 'A role-aware home screen that answers "how is my academy doing?" at a glance. Owners see total members, monthly revenue, monthly costs and net profit — all updated in real time. Smart alerts flag members running out of sessions, unpaid members, and new sign-ups awaiting approval.',
      points: [
        'Total members, revenue, costs, and net profit cards — always current',
        'Smart alerts for expiring sessions, unpaid members, and pending approvals',
        'Upcoming sessions with per-session profit/loss indicators',
        'Members see their own view: remaining sessions, attendance rate, and payment status',
      ],
    },
    {
      icon: Users,
      gradient: 'from-cyan-500 to-blue-500',
      title: 'Members & Subscriptions',
      subtitle: 'Complete Roster Management',
      description: 'Your full member roster with search, filtering, sorting and pagination. Define flexible membership plans — Full (8 sessions), Half (4), or any custom plan you offer. The platform automatically tracks remaining sessions as attendance is taken, so you always know who is active, who needs renewal, and who has lapsed.',
      points: [
        'Flexible membership plans — define any plan structure your academy offers',
        'Automatic remaining-session tracking as attendance is recorded',
        'One-click visual statuses: Paid, Needs Renewal, Unpaid',
        'Pending-signup approval queue — members join via invite code, you approve them',
        'Rich member profiles with payment history, attendance, badges, and evaluations',
        'Statement PDF export for any member — perfect for printing or emailing',
      ],
    },
    {
      icon: CreditCard,
      gradient: 'from-violet-500 to-pink-500',
      title: 'Payments & Receipts',
      subtitle: 'Effortless Financial Recording',
      description: 'Record payments with amount, date, plan, method and notes. Support for cash, card, mobile wallet, bank transfer, and more. Every payment generates a printable/downloadable receipt, and membership status updates automatically. Export the full payment log to CSV for your accountant.',
      points: [
        'Multiple payment methods: cash, card, mobile wallet, bank transfer, other',
        'Printable and downloadable receipt page for every payment',
        'Membership status updates automatically when a payment is recorded',
        'Export the full payment log to CSV for accounting',
      ],
    },
    {
      icon: CalendarCheck,
      gradient: 'from-emerald-500 to-teal-500',
      title: 'Smart Scheduling',
      subtitle: 'Calendar & Recurring Sessions',
      description: 'Monthly calendar and list views of all training sessions. Create sessions with sport, venue, coach, age group and skill level. The recurring schedule builder generates a whole month of sessions in one click — "Every Mon & Wed at 6pm" creates them all automatically. Coach availability windows prevent double-booking.',
      points: [
        'Monthly calendar and list views of all training sessions',
        'Recurring schedule builder — generate a full month in one click',
        'Coach availability windows prevent double-booking',
        'Cancelled sessions are automatically excluded from financial calculations',
        'Read-only .ics calendar feed — members subscribe once and stay in sync',
      ],
    },
    {
      icon: QrCode,
      gradient: 'from-orange-500 to-red-500',
      title: 'Attendance & Check-in',
      subtitle: 'Lightning-Fast Tracking',
      description: 'Pick a session, toggle each member present/absent — changes save in real time. QR code check-in lets members scan at the door with no queues. Walk-in guests can pay per session, and their payments count toward session revenue automatically. Batch actions let you select many members and mark them present at once.',
      points: [
        'QR code check-in — every member gets a personal code, scan or type at the door',
        'Batch actions: select many members and mark present/absent/export at once',
        'Walk-in guests who pay per session — payments count toward revenue automatically',
        'Waitlists when a session is full, with promotion tracking',
        'Live revenue / cost / profit readout while taking attendance',
      ],
    },
    {
      icon: TrendingUp,
      gradient: 'from-yellow-500 to-amber-500',
      title: 'Financial Engine',
      subtitle: 'Automatic Profit Intelligence',
      description: 'This is the killer feature. Enter two numbers — coach salary and court rental — and everything else computes itself. The moment you mark a session\'s attendance, the platform calculates that session\'s revenue, cost and net profit — instantly and automatically. No end-of-month surprises. No mental math. Just clear numbers.',
      points: [
        'Cost per session auto-calculated from coach salary and court rental',
        'Session revenue = sum of attending members\' per-session values + guest payments',
        'Profit/loss shows green/red everywhere — the second attendance is marked',
        'Additional expense tracking by category for true bottom-line numbers',
        'Calculations run via database triggers — always current, always accurate',
      ],
    },
    {
      icon: BarChart3,
      gradient: 'from-pink-500 to-rose-500',
      title: 'Reports & Analytics',
      subtitle: 'Data-Driven Decisions',
      description: 'Two dedicated insight surfaces for making smart decisions. Revenue vs costs charts, retention analysis, coach performance comparison, revenue forecasts projecting the next 3 months, member health radar showing who is about to quit before they do. Export everything to PDF or CSV.',
      points: [
        'Revenue vs costs chart with monthly summary and average profit per session',
        'Retention & churn analysis — active, inactive 30–60 days, inactive 60+ days',
        'Member health radar: healthy / at-risk / churned segmentation',
        'Revenue forecast projecting the next 3 months from historical trends',
        'Coach performance comparison and session-time heatmap',
        'One-click PDF report and CSV payment export',
      ],
    },
    {
      icon: UserCog,
      gradient: 'from-teal-500 to-cyan-500',
      title: 'Teams, Coaches & Venues',
      subtitle: 'Organize Your Operations',
      description: 'Organize members into teams by sport, age group and skill level. Coach directory with specialties and salaries feeding directly into cost calculations. Venue catalog with capacity info for every court/hall. Custom sport catalog — volleyball today, basketball tomorrow.',
      points: [
        'Teams organized by sport, age group and skill level',
        'Coach directory with specialties and salaries for cost calculations',
        'Venue catalog with capacity info for every court and hall',
        'Custom sport catalog per academy — expand as you grow',
      ],
    },
    {
      icon: Trophy,
      gradient: 'from-indigo-500 to-blue-500',
      title: 'Tournaments',
      subtitle: 'Competitive Management',
      description: 'Create tournaments per sport with dates and status tracking. Manage the full match bracket: rounds, teams, scores, dates, venues. Match history stays linked to teams and seasons for long-term performance tracking.',
      points: [
        'Create tournaments per sport with dates and status tracking',
        'Full match bracket management: rounds, teams, scores, dates, venues',
        'Match history linked to teams and seasons',
      ],
    },
    {
      icon: Star,
      gradient: 'from-purple-500 to-violet-500',
      title: 'Member Engagement',
      subtitle: 'Keep Members Motivated',
      description: 'Keep members motivated and parents informed. Announcements board broadcast to all members. Photo galleries attached to sessions. Gamification badges awarded automatically at milestones — First Step, Regular, Dedicated, Champion, Legend. Player evaluations where coaches score technique, tactics, fitness and attitude.',
      points: [
        'Announcements board broadcast to all members',
        'Photo galleries attached to sessions and announcements',
        'Gamification badges: First Step, Regular (10), Dedicated (25), Champion (50), Legend (100)',
        'Player evaluations — coaches score technique, tactics, fitness and attitude',
        'Session ratings — members rate sessions 1–5 stars with comments',
        'Live activity feed — a timeline of joins, payments, badges, and check-ins',
      ],
    },
    {
      icon: Globe,
      gradient: 'from-cyan-500 to-emerald-500',
      title: 'Public Academy Page',
      subtitle: 'Built-In Marketing Funnel',
      description: 'Every academy gets an optional public page at /a/your-name. Showcase your academy description and sports. Visitors submit trial request forms that flow straight into your dashboard\'s trials pipeline — new, contacted, converted, declined. A free marketing funnel built into your management tool.',
      points: [
        'Public page at /a/your-name showcasing your academy',
        'Trial request forms flow into your dashboard pipeline',
        'Free marketing funnel built into your management tool',
      ],
    },
    {
      icon: Megaphone,
      gradient: 'from-amber-500 to-orange-500',
      title: 'Notifications & Integrations',
      subtitle: 'Professional Communication',
      description: 'Professional email notifications powered by Resend. Payment confirmation emails, renewal reminders when a member runs low on sessions, welcome emails for new members, new-session notifications. Plus a personal calendar feed per academy so members\' phone calendars stay in sync automatically.',
      points: [
        'Payment confirmation emails with amount and sessions',
        'Renewal reminders — one click from the dashboard with send-history tracking',
        'Welcome emails for new members and new-session notifications',
        'Personal .ics calendar feed per academy for automatic sync',
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
          <div className="particle-dots" />
        </div>

        {/* Hero */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center" ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 150 }}
                className="mb-8 inline-block"
              >
                <div className="w-28 h-28 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/15 mx-auto animate-glow">
                  <Image
                    src="/Volleyra.jpeg"
                    alt="Volleyra Logo"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="gradient-text">{t.volleyraName}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-6"
              >
                {t.volleyraTagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-4"
              >
                {t.volleyraDesc}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-10"
              >
                {t.volleyraHeroSub}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                <a
                  href="https://volley-academy.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {t.volleyraStartTrial}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Workflow */}
        <section className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedWorkflow />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center text-gray-500 text-sm -mt-8 mb-4"
            >
              The complete lifecycle — from enrollment to profitability
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 border-gradient">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCard value={12} label="Feature Modules" icon={Zap} />
                <StatCard value={100} suffix="%" label="Real-Time Sync" icon={Clock} />
                <StatCard value={2} label="Languages (EN + AR)" icon={Globe} />
                <StatCard value={0} suffix="%" label="Setup Fee" icon={DollarSign} />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-white">Everything You Need to </span>
                <span className="text-shimmer">Run Your Academy</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                {t.volleyraFeaturesSubtitle}
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <FeatureSection
                  key={i}
                  icon={feature.icon}
                  gradient={feature.gradient}
                  title={feature.title}
                  subtitle={feature.subtitle}
                  description={feature.description}
                  points={feature.points}
                  reversed={i % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Built for Your Region */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden border-gradient">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-full blur-[100px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Built for Your Region</h3>
                      <p className="text-xs text-cyan-400">Arabic-first, RTL-native</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: Globe, label: 'Fully bilingual English + Arabic', desc: 'Complete right-to-left (RTL) layout' },
                      { icon: DollarSign, label: 'Egyptian Pound (EGP) formatting', desc: 'Out of the box, no configuration needed' },
                      { icon: Smartphone, label: 'Fully responsive', desc: 'Works on phones at the court, not just office desktops' },
                      { icon: Shield, label: 'Dark mode across the entire app', desc: 'Modern, eye-friendly interface' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                      >
                        <item.icon className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-white">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <TiltCard className="h-full">
                <div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-[80px]" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Security & Reliability</h3>
                        <p className="text-xs text-indigo-400">Enterprise-grade protection</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        'Bank-grade data isolation — no academy can see another\'s data',
                        'Role-based access enforced at database and route level',
                        'Realtime sync powered by Supabase PostgreSQL',
                        'Hosted on Vercel + Supabase — zero-maintenance infrastructure',
                        'Automatic backups through managed Postgres',
                        'GDPR-ready architecture',
                      ].map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-300">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/15 mx-auto mb-8 animate-glow">
                <Image
                  src="/Volleyra.jpeg"
                  alt="Volleyra Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Run Your Academy Like a Business?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Start your free trial today. No credit card required. Full access to all features.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://volley-academy.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {t.volleyraStartTrial}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
