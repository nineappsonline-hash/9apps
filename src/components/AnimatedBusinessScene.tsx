'use client'

import { motion } from 'framer-motion'

export default function AnimatedBusinessScene({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 420 200"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="bGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="bGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="bGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <filter id="bizGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Building background */}
      <motion.rect
        x="165" y="25" width="90" height="145" rx="6"
        fill="#0f172a" stroke="#334155" strokeWidth="0.5" opacity="0.25"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.25 }}
        transition={{ duration: 0.8 }}
      />
      {/* Windows */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1].map((col) => (
          <motion.rect
            key={`w${row}${col}`}
            x={178 + col * 30} y={35 + row * 26} width="14" height="10" rx="2"
            fill="#818cf8" opacity="0.08"
            animate={{ opacity: [0.04, 0.15, 0.04] }}
            transition={{ duration: 4, repeat: Infinity, delay: (row + col) * 0.4 }}
          />
        ))
      )}

      {/* Person 1 - presenting (left) */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Hair */}
        <ellipse cx="75" cy="100" rx="14" ry="12" fill="#1e293b" />
        {/* Head */}
        <circle cx="75" cy="106" r="13" fill="url(#bGrad1)" />
        {/* Eyes */}
        <ellipse cx="70" cy="104" rx="1.8" ry="2.2" fill="#fff" opacity="0.9" />
        <circle cx="70" cy="104.5" r="0.9" fill="#0f172a" />
        <ellipse cx="80" cy="104" rx="1.8" ry="2.2" fill="#fff" opacity="0.9" />
        <circle cx="80" cy="104.5" r="0.9" fill="#0f172a" />
        <path d="M71 110 Q75 114 79 110" stroke="#fff" strokeWidth="1.2" fill="none" opacity="0.7" />
        {/* Body */}
        <path d="M62 120 Q75 116 88 120 L86 165 Q75 170 64 165 Z" fill="url(#bGrad1)" opacity="0.55" />
        <path d="M70 120 L75 128 L80 120" stroke="#fff" strokeWidth="0.6" fill="none" opacity="0.25" />
        {/* Arm pointing to board */}
        <motion.path
          d="M88 130 L115 118"
          stroke="url(#bGrad1)" strokeWidth="3.5" strokeLinecap="round" opacity="0.5"
          animate={{ d: ["M88 130 L115 118", "M88 130 L120 112", "M88 130 L115 118"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Presentation board */}
      <motion.g
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <rect x="125" y="55" width="70" height="55" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="0.8" opacity="0.8" />
        {/* Pie chart */}
        <motion.circle
          cx="160" cy="78" r="12"
          stroke="#818cf8" strokeWidth="2.5" fill="none"
          strokeDasharray="16 60"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '160px 78px' }}
        />
        <motion.circle
          cx="160" cy="78" r="12"
          stroke="#22d3ee" strokeWidth="2.5" fill="none"
          strokeDasharray="24 52"
          strokeDashoffset="-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '160px 78px' }}
        />
        <motion.circle
          cx="160" cy="78" r="12"
          stroke="#a78bfa" strokeWidth="2.5" fill="none"
          strokeDasharray="20 56"
          strokeDashoffset="-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '160px 78px' }}
        />
        {/* Board lines */}
        <rect x="135" y="95" width="50" height="2" rx="1" fill="#818cf8" opacity="0.25" />
        <rect x="140" y="100" width="35" height="2" rx="1" fill="#22d3ee" opacity="0.15" />
        <rect x="145" y="105" width="25" height="2" rx="1" fill="#a78bfa" opacity="0.12" />
      </motion.g>

      {/* Person 2 - with clipboard (right) */}
      <motion.g
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <ellipse cx="330" cy="105" rx="12" ry="10" fill="#7c3aed" opacity="0.6" />
        <circle cx="330" cy="110" r="11" fill="url(#bGrad2)" />
        <ellipse cx="326" cy="108" rx="1.5" ry="2" fill="#fff" opacity="0.9" />
        <circle cx="326" cy="108.5" r="0.8" fill="#0f172a" />
        <ellipse cx="334" cy="108" rx="1.5" ry="2" fill="#fff" opacity="0.9" />
        <circle cx="334" cy="108.5" r="0.8" fill="#0f172a" />
        <path d="M327 113 Q330 116 333 113" stroke="#fff" strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M320 122 Q330 118 340 122 L338 165 Q330 170 322 165 Z" fill="url(#bGrad2)" opacity="0.5" />
        {/* Clipboard */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <rect x="342" y="128" width="20" height="24" rx="3" fill="#0f172a" stroke="#22d3ee" strokeWidth="0.8" opacity="0.7" />
          <rect x="345" y="132" width="14" height="2" rx="1" fill="#22d3ee" opacity="0.35" />
          <rect x="345" y="137" width="10" height="2" rx="1" fill="#22d3ee" opacity="0.2" />
          <rect x="345" y="142" width="12" height="2" rx="1" fill="#22d3ee" opacity="0.25" />
          <rect x="345" y="147" width="8" height="2" rx="1" fill="#22d3ee" opacity="0.15" />
        </motion.g>
      </motion.g>

      {/* Person 3 - with laptop (far right) */}
      <motion.g
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <circle cx="390" cy="85" r="10" fill="url(#bGrad3)" opacity="0.8" />
        <ellipse cx="387" cy="83" rx="1.3" ry="1.8" fill="#fff" opacity="0.9" />
        <circle cx="387" cy="83.5" r="0.7" fill="#0f172a" />
        <ellipse cx="393" cy="83" rx="1.3" ry="1.8" fill="#fff" opacity="0.9" />
        <circle cx="393" cy="83.5" r="0.7" fill="#0f172a" />
        <path d="M388 88 Q390 90 392 88" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.7" />
        <rect x="383" y="96" width="14" height="22" rx="5" fill="url(#bGrad3)" opacity="0.55" />
        {/* Laptop */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <rect x="372" y="105" width="36" height="22" rx="3" fill="#0f172a" stroke="#f59e0b" strokeWidth="0.8" opacity="0.65" />
          <rect x="375" y="108" width="30" height="15" rx="1.5" fill="#020617" />
          {/* Screen bars */}
          <motion.rect x="378" y="118" width="3.5" rx="1" fill="#f59e0b"
            animate={{ height: [0, 5] }} transition={{ duration: 0.3, delay: 1.5, repeat: Infinity, repeatDelay: 2 }} />
          <motion.rect x="383" y="115" width="3.5" rx="1" fill="#818cf8"
            animate={{ height: [0, 8] }} transition={{ duration: 0.3, delay: 1.8, repeat: Infinity, repeatDelay: 2 }} />
          <motion.rect x="388" y="117" width="3.5" rx="1" fill="#22d3ee"
            animate={{ height: [0, 6] }} transition={{ duration: 0.3, delay: 2.1, repeat: Infinity, repeatDelay: 2 }} />
          <motion.rect x="393" y="114" width="3.5" rx="1" fill="#a78bfa"
            animate={{ height: [0, 9] }} transition={{ duration: 0.3, delay: 2.4, repeat: Infinity, repeatDelay: 2 }} />
        </motion.g>
      </motion.g>

      {/* Floating metrics */}
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="15" y="40" width="55" height="20" rx="10" fill="#0f172a" stroke="#818cf8" strokeWidth="0.8" opacity="0.65" />
        <text x="42" y="53" textAnchor="middle" fill="#818cf8" fontSize="7.5" fontWeight="bold" opacity="0.8">Revenue</text>
      </motion.g>

      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <rect x="15" y="70" width="48" height="20" rx="10" fill="#0f172a" stroke="#22d3ee" strokeWidth="0.8" opacity="0.65" />
        <text x="39" y="83" textAnchor="middle" fill="#22d3ee" fontSize="7.5" fontWeight="bold" opacity="0.8">Growth</text>
      </motion.g>

      {/* Small floating dots */}
      {[
        { cx: 25, cy: 160, r: 2, color: '#818cf8', delay: 0 },
        { cx: 400, cy: 170, r: 2.5, color: '#22d3ee', delay: 0.5 },
        { cx: 130, cy: 15, r: 1.5, color: '#a78bfa', delay: 1 },
        { cx: 300, cy: 12, r: 2, color: '#f59e0b', delay: 1.5 },
      ].map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx} cy={p.cy} r={p.r}
          fill={p.color}
          animate={{ y: [0, -8, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </motion.svg>
  )
}
