'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n'
import { useCart } from '@/lib/cart'
import LanguageSwitcher from './LanguageSwitcher'
import CartPanel from './CartPanel'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { t, locale } = useI18n()
  const { items } = useCart()

  const navLinks = [
    { href: '#features', label: t.features },
    { href: '#products', label: t.products },
    { href: '#pricing', label: t.pricing },
    { href: '#testimonials', label: t.testimonials },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#06080f]/80 backdrop-blur-2xl border-b border-white/[0.04] shadow-2xl shadow-black/30'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.05 }}
              className="relative"
            >
              <Image
                src="/Logo.jpeg"
                alt="NineApps Logo"
                width={36}
                height={36}
                className="rounded-xl ring-1 ring-white/10"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.div>
            <span className="text-lg font-bold gradient-text hidden sm:block">
              NineApps
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop auth buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 flex items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold text-white min-w-[18px] h-[18px]">
                  {items.length}
                </span>
              )}
            </button>
            <LanguageSwitcher />
            <Link
              href="/signin"
              className="px-5 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              {t.signIn}
            </Link>
            <Link
              href="/signup"
              className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-white rounded-xl overflow-hidden whitespace-nowrap"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-1.5">
                {t.getStarted}
                <ChevronRight className={cn("w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform", locale === 'ar' && 'rotate-180 group-hover:-translate-x-0.5')} />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors shrink-0"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#06080f]/95 backdrop-blur-2xl border-t border-white/[0.04]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: locale === 'ar' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 border-t border-white/[0.04] space-y-2 mt-2">
                <div className="flex justify-center gap-3 pb-1">
                  <button
                    onClick={() => { setIsOpen(false); setCartOpen(true) }}
                    className="relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {items.length > 0 && (
                      <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold text-white min-w-[18px] h-[18px]">
                        {items.length}
                      </span>
                    )}
                  </button>
                  <LanguageSwitcher />
                </div>
                <Link
                  href="/signin"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-center text-gray-300 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all text-sm"
                >
                  {t.signIn}
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-center text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-medium text-sm"
                >
                  {t.getStarted}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
