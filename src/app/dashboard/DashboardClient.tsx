'use client'

import { motion } from 'framer-motion'
import { signOut } from '@/app/auth/actions'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  BarChart3,
  Warehouse,
  Settings,
  LogOut,
  ArrowRight,
  TrendingUp,
  Clock,
  Bell,
} from 'lucide-react'
import type { User } from '@supabase/supabase-js'

const apps = [
  {
    name: 'CRM Suite',
    description: 'Manage contacts, deals, and sales pipelines',
    icon: Users,
    gradient: 'from-indigo-500 to-purple-500',
    stats: '248 contacts',
  },
  {
    name: 'ERP Platform',
    description: 'Inventory, finance, and supply chain management',
    icon: Warehouse,
    gradient: 'from-cyan-500 to-teal-500',
    stats: '12 products',
  },
  {
    name: 'Analytics',
    description: 'Real-time dashboards and business intelligence',
    icon: BarChart3,
    gradient: 'from-emerald-500 to-green-500',
    stats: '6 reports',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

interface DashboardClientProps {
  user: User
}

export default function DashboardClient({ user }: DashboardClientProps) {
  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'
  const initials = displayName.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Logo.jpeg" alt="NineApps" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-bold gradient-text">NineApps</span>
          </Link>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                {initials}
              </div>
              <span className="text-sm text-gray-300 hidden sm:block">{displayName}</span>
            </div>
            <form action={signOut}>
              <button
                type="submit"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Sign out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Welcome */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Welcome back, {displayName.split(' ')[0]} 👋
            </h1>
            <p className="text-gray-400">
              Here&apos;s what&apos;s happening with your business today.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Contacts', value: '248', change: '+12%', icon: Users, color: 'text-indigo-400' },
              { label: 'Active Deals', value: '34', change: '+8%', icon: TrendingUp, color: 'text-emerald-400' },
              { label: 'Hours Saved', value: '127', change: '+23%', icon: Clock, color: 'text-cyan-400' },
              { label: 'Revenue', value: '$48.2K', change: '+15%', icon: BarChart3, color: 'text-purple-400' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-xs text-emerald-400 font-medium">{stat.change}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Apps */}
          <motion.div variants={itemVariants}>
            <h2 className="text-lg font-semibold text-white mb-4">Your Apps</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {apps.map((app, i) => (
                <motion.div
                  key={app.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{app.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{app.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{app.stats}</span>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Settings */}
          <motion.div variants={itemVariants} className="mt-8">
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <Settings className="w-4 h-4" />
              Account Settings
            </button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
