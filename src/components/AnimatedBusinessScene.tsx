'use client'

import { motion } from 'framer-motion'

export default function AnimatedBusinessScene({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 500 250"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="bizGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="bizGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="bizGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>

      {/* Building background */}
      <motion.rect
        x="180" y="40" width="140" height="170" rx="8"
        fill="#0f172a" stroke="#818cf8" strokeWidth="0.5" opacity="0.3"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 0.3 }}
        transition={{ duration: 0.8 }}
      />
      {/* Windows */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <motion.rect
            key={`${row}-${col}`}
            x={200 + col * 35} y={55 + row * 35} width="20" height="15" rx="2"
            fill="#818cf8" opacity="0.1"
            animate={{ opacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 3, repeat: Infinity, delay: (row + col) * 0.3 }}
          />
        ))
      )}

      {/* Person 1 - presenting */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <circle cx="80" cy="120" r="20" fill="url(#bizGrad1)" opacity="0.8" />
        <circle cx="73" cy="117" r="2.5" fill="#fff" opacity="0.8" />
        <circle cx="87" cy="117" r="2.5" fill="#fff" opacity="0.8" />
        <path d="M73 125 Q80 132 87 125" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.6" />
        <rect x="66" y="142" width="28" height="35" rx="10" fill="url(#bizGrad1)" opacity="0.6" />
        {/* Arm pointing */}
        <motion.path
          d="M94 155 L120 140"
          stroke="url(#bizGrad1)" strokeWidth="3" strokeLinecap="round" opacity="0.5"
          animate={{ d: ["M94 155 L120 140", "M94 155 L125 135", "M94 155 L120 140"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Presentation board */}
      <motion.g
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <rect x="130" y="70" width="80" height="60" rx="4" fill="#0f172a" stroke="#818cf8" strokeWidth="1" opacity="0.7" />
        {/* Pie chart */}
        <motion.circle
          cx="170" cy="95" r="15"
          stroke="#818cf8" strokeWidth="3" fill="none"
          strokeDasharray="20 75"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '170px 95px' }}
        />
        <motion.circle
          cx="170" cy="95" r="15"
          stroke="#22d3ee" strokeWidth="3" fill="none"
          strokeDasharray="30 65"
          strokeDashoffset="-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '170px 95px' }}
        />
        <motion.circle
          cx="170" cy="95" r="15"
          stroke="#a78bfa" strokeWidth="3" fill="none"
          strokeDasharray="25 70"
          strokeDashoffset="-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '170px 95px' }}
        />
        {/* Lines on board */}
        <rect x="145" y="115" width="50" height="2" rx="1" fill="#818cf8" opacity="0.3" />
        <rect x="155" y="120" width="30" height="2" rx="1" fill="#22d3ee" opacity="0.2" />
      </motion.g>

      {/* Person 2 - taking notes */}
      <motion.g
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <circle cx="380" cy="130" r="18" fill="url(#bizGrad2)" opacity="0.8" />
        <circle cx="374" cy="127" r="2" fill="#fff" opacity="0.8" />
        <circle cx="386" cy="127" r="2" fill="#fff" opacity="0.8" />
        <path d="M374 133 Q380 138 386 133" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.6" />
        <rect x="370" y="150" width="20" height="30" rx="7" fill="url(#bizGrad2)" opacity="0.6" />
        {/* Arm with clipboard */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x="350" y="155" width="18" height="22" rx="2" fill="#0f172a" stroke="#22d3ee" strokeWidth="0.8" opacity="0.6" />
          <rect x="353" y="158" width="12" height="2" rx="1" fill="#22d3ee" opacity="0.3" />
          <rect x="353" y="163" width="8" height="2" rx="1" fill="#22d3ee" opacity="0.2" />
          <rect x="353" y="168" width="10" height="2" rx="1" fill="#22d3ee" opacity="0.25" />
        </motion.g>
      </motion.g>

      {/* Person 3 - with laptop */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <circle cx="440" cy="100" r="15" fill="url(#bizGrad3)" opacity="0.8" />
        <circle cx="435" cy="97" r="2" fill="#fff" opacity="0.8" />
        <circle cx="445" cy="97" r="2" fill="#fff" opacity="0.8" />
        <path d="M435 103 Q440 107 445 103" stroke="#fff" strokeWidth="1.2" fill="none" opacity="0.6" />
        <rect x="432" y="117" width="16" height="28" rx="6" fill="url(#bizGrad3)" opacity="0.6" />
        {/* Laptop */}
        <motion.g
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <rect x="420" y="125" width="40" height="25" rx="3" fill="#0f172a" stroke="#f59e0b" strokeWidth="0.8" opacity="0.6" />
          <rect x="423" y="128" width="34" height="18" rx="1" fill="#06080f" />
          {/* Screen content */}
          <motion.rect
            x="426" y="140" width="4" height="0" rx="1" fill="#f59e0b"
            animate={{ height: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.rect
            x="432" y="137" width="4" height="0" rx="1" fill="#818cf8"
            animate={{ height: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
          />
          <motion.rect
            x="438" y="139" width="4" height="0" rx="1" fill="#22d3ee"
            animate={{ height: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1.1 }}
          />
          <motion.rect
            x="444" y="136" width="4" height="0" rx="1" fill="#a78bfa"
            animate={{ height: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1.4 }}
          />
        </motion.g>
      </motion.g>

      {/* Floating metrics */}
      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="20" y="50" width="60" height="24" rx="12" fill="#0f172a" stroke="#818cf8" strokeWidth="1" opacity="0.6" />
        <text x="50" y="65" textAnchor="middle" fill="#818cf8" fontSize="9" fontWeight="bold">Revenue</text>
      </motion.g>

      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <rect x="420" y="40" width="55" height="24" rx="12" fill="#0f172a" stroke="#22d3ee" strokeWidth="1" opacity="0.6" />
        <text x="447" y="55" textAnchor="middle" fill="#22d3ee" fontSize="9" fontWeight="bold">Growth</text>
      </motion.g>

      {/* Floating particles */}
      {[
        { cx: 30, cy: 180, r: 2, color: '#818cf8', delay: 0 },
        { cx: 470, cy: 200, r: 2.5, color: '#22d3ee', delay: 0.5 },
        { cx: 150, cy: 30, r: 1.5, color: '#a78bfa', delay: 1 },
        { cx: 350, cy: 20, r: 2, color: '#f59e0b', delay: 1.5 },
      ].map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx} cy={p.cy} r={p.r}
          fill={p.color}
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </motion.svg>
  )
}
