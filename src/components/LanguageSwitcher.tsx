'use client'

import { useI18n } from '@/lib/i18n'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-300 border border-white/[0.06] hover:border-white/[0.12]"
    >
      <Globe className="w-3.5 h-3.5" />
      {locale === 'en' ? 'عربي' : 'EN'}
    </button>
  )
}
