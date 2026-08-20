'use client'

import { useEffect, useRef, useState } from 'react'

interface TextScrambleProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export default function TextScramble({ text, className = '', delay = 0, speed = 30 }: TextScrambleProps) {
  const [display, setDisplay] = useState('')
  const [started, setStarted] = useState(false)
  const frameRef = useRef(0)
  const queueRef = useRef<{ from: string; to: string; start: number; end: number }[]>([])
  const frameCountRef = useRef(0)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    const queue: { from: string; to: string; start: number; end: number }[] = []
    for (let i = 0; i < text.length; i++) {
      const from = CHARS[Math.floor(Math.random() * CHARS.length)]
      const to = text[i]
      const start = Math.floor(Math.random() * 20)
      const end = start + Math.floor(Math.random() * 20)
      queue.push({ from, to, start, end })
    }
    queueRef.current = queue
    frameCountRef.current = 0

    const update = () => {
      let output = ''
      let complete = 0
      for (let i = 0; i < queueRef.current.length; i++) {
        const { from, to, start, end } = queueRef.current[i]
        if (frameCountRef.current >= end) {
          complete++
          output += to
        } else if (frameCountRef.current >= start) {
          if (!from || Math.random() < 0.28) {
            const newChar = CHARS[Math.floor(Math.random() * CHARS.length)]
            queueRef.current[i] = { ...queueRef.current[i], from: newChar }
            output += newChar
          } else {
            output += from
          }
        } else {
          output += ''
        }
      }
      setDisplay(output)
      frameCountRef.current++
      if (complete < queueRef.current.length) {
        frameRef.current = requestAnimationFrame(update)
      }
    }

    frameRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, text])

  return <span className={className}>{display}</span>
}
