'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 200 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const trailRef = useRef<{ x: number; y: number }[]>([])
  const [, setTrailUpdate] = useState(0)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12)
      cursorY.set(e.clientY - 12)
      trailRef.current.push({ x: e.clientX, y: e.clientY })
      if (trailRef.current.length > 8) trailRef.current.shift()
      setTrailUpdate((v) => v + 1)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [cursorX, cursorY])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] hidden lg:block">
      {/* Trail dots */}
      {trailRef.current.map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-indigo-400/20"
          style={{
            left: pos.x - 2,
            top: pos.y - 2,
            width: 4,
            height: 4,
            opacity: (i + 1) / trailRef.current.length * 0.3,
            transform: `scale(${(i + 1) / trailRef.current.length})`,
          }}
        />
      ))}

      {/* Main cursor dot */}
      <motion.div
        className="absolute"
        style={{ left: cursorXSpring, top: cursorYSpring }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 2.5 : 1,
            backgroundColor: isHovering ? 'rgba(129, 140, 248, 0.3)' : 'rgba(129, 140, 248, 0.8)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-6 h-6 rounded-full border border-indigo-400/50"
        />
      </motion.div>
    </div>
  )
}
