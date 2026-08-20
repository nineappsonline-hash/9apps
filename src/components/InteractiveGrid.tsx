'use client'

import { useEffect, useRef, useCallback } from 'react'

interface InteractiveGridProps {
  className?: string
  dotColor?: string
  lineColor?: string
}

export default function InteractiveGrid({
  className = '',
  dotColor = 'rgba(129, 140, 248, 0.15)',
  lineColor = 'rgba(129, 140, 248, 0.06)',
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animRef = useRef(0)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const spacing = 40
    const cols = Math.ceil(canvas.width / spacing) + 1
    const rows = Math.ceil(canvas.height / spacing) + 1
    const mouse = mouseRef.current

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing
        const y = j * spacing
        const dx = mouse.x - x
        const dy = mouse.y - y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 150
        const influence = Math.max(0, 1 - dist / maxDist)

        const dotSize = 1 + influence * 2
        const opacity = 0.15 + influence * 0.6

        ctx.beginPath()
        ctx.arc(x, y + influence * 8, dotSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(129, 140, 248, ${opacity})`
        ctx.fill()

        if (influence > 0.3 && i < cols - 1) {
          const nextX = (i + 1) * spacing
          const nextDx = mouse.x - nextX
          const nextDist = Math.sqrt(nextDx * nextDx + dy * dy)
          const nextInfluence = Math.max(0, 1 - nextDist / maxDist)
          if (nextInfluence > 0.3) {
            ctx.beginPath()
            ctx.moveTo(x, y + influence * 8)
            ctx.lineTo(nextX, y + nextInfluence * 8)
            ctx.strokeStyle = `rgba(129, 140, 248, ${Math.min(influence, nextInfluence) * 0.15})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    animRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    window.addEventListener('mousemove', handleMouseMove)
    animRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animRef.current)
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  )
}
