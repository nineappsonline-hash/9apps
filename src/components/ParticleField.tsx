'use client'

import { useMemo } from 'react'

interface ParticleFieldProps {
  count?: number
  className?: string
  color?: string
}

export default function ParticleField({ count = 30, className = '', color = 'rgba(129, 140, 248, 0.4)' }: ParticleFieldProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 4,
      animType: Math.random() > 0.5 ? 'particleFloat' : 'particleFloat2',
    }))
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: color,
            animation: `${p.animType} ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
