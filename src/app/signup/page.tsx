'use client'

import { Suspense, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react'
import { signUp, signInWithGitHub, signInWithGoogle } from '@/app/auth/actions'
import GoogleIcon from '@/components/GoogleIcon'
import { useI18n } from '@/lib/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const { t, locale } = useI18n()

  const handleSubmit = () => {
    setIsLoading(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="gradient-bg absolute inset-0" />
      <div className="orb w-[400px] h-[400px] bg-indigo-500/20 top-0 right-0" />
      <div className="orb w-[300px] h-[300px] bg-cyan-500/20 bottom-0 left-0" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="glass-card rounded-3xl p-8">
          {/* Language switcher */}
          <div className="flex justify-end mb-4">
            <LanguageSwitcher />
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/Logo.jpeg"
                alt="NineApps"
                width={44}
                height={44}
                className="rounded-xl"
              />
              <span className="text-xl font-bold gradient-text">NineApps</span>
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">{t.createAccount}</h1>
            <p className="text-sm text-gray-400">
              {t.signUpSubtitle}
            </p>
          </div>

          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social logins */}
          <div className="space-y-3 mb-6">
            <form action={signInWithGitHub}>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t.continueWithGitHub}
              </button>
            </form>
            <form action={signInWithGoogle}>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <GoogleIcon />
                {t.continueWithGoogle}
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-gray-500">{t.orContinueWithEmail}</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Form */}
          <form action={signUp} onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <User className={`absolute ${locale === 'ar' ? 'right-3.5' : 'left-3.5'} top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500`} />
                <input
                  type="text"
                  name="fullName"
                  placeholder={t.fullNamePlaceholder}
                  required
                  className={`w-full ${locale === 'ar' ? 'pr-11 pl-4' : 'pl-11 pr-4'} py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all`}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className={`absolute ${locale === 'ar' ? 'right-3.5' : 'left-3.5'} top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500`} />
                <input
                  type="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  required
                  className={`w-full ${locale === 'ar' ? 'pr-11 pl-4' : 'pl-11 pr-4'} py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all`}
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className={`absolute ${locale === 'ar' ? 'right-3.5' : 'left-3.5'} top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder={locale === 'ar' ? 'كلمة المرور (6 أحرف على الأقل)' : 'Password (min 6 characters)'}
                  required
                  minLength={6}
                  className={`w-full ${locale === 'ar' ? 'pr-11 pl-12' : 'pl-11 pr-12'} py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute ${locale === 'ar' ? 'left-3.5' : 'right-3.5'} top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors`}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin mx-auto" />
              ) : (
                <span className="flex items-center justify-center gap-2">
                  {t.signUpButton}
                  <ArrowRight className={`w-4 h-4 ${locale === 'ar' ? 'rotate-180' : ''}`} />
                </span>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-400 mt-6">
            {t.hasAccount}{' '}
            <Link href="/signin" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              {t.signInLink}
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function SignUpPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SignUpForm />
    </Suspense>
  )
}
