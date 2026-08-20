'use client'

import { useEffect, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  interval?: number
}

export default function GlitchText({ text, className = '', interval = 4000 }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const trigger = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, interval)
    return () => clearInterval(trigger)
  }, [interval])

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 text-cyan-400 z-20"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              transform: 'translate(-2px, -1px)',
              opacity: 0.8,
            }}
            aria-hidden
          >
            {text}
          </span>
          <span
            className="absolute inset-0 text-pink-400 z-20"
            style={{
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
              transform: 'translate(2px, 1px)',
              opacity: 0.8,
            }}
            aria-hidden
          >
            {text}
          </span>
        </>
      )}
    </span>
  )
}
