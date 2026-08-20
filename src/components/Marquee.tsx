'use client'

import { useI18n } from '@/lib/i18n'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  className?: string
  rtl?: boolean
}

export default function Marquee({ children, speed = 30, className = '', rtl = false }: MarqueeProps) {
  return (
    <div className={`marquee-container ${className}`}>
      <div
        className={`marquee-track ${rtl ? 'marquee-track-rtl' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex items-center gap-8 px-4">{children}</div>
        <div className="flex items-center gap-8 px-4">{children}</div>
      </div>
    </div>
  )
}
