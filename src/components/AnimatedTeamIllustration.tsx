'use client'

import { motion } from 'framer-motion'

export default function AnimatedTeamIllustration({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 300"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      {/* Desk */}
      <motion.rect
        x="60" y="200" width="280" height="8" rx="4"
        fill="url(#grad1)" opacity="0.3"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <rect x="80" y="208" width="8" height="50" rx="2" fill="#818cf8" opacity="0.2" />
      <rect x="312" y="208" width="8" height="50" rx="2" fill="#818cf8" opacity="0.2" />

      {/* Monitor */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <rect x="130" y="120" width="140" height="80" rx="6" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" opacity="0.8" />
        <rect x="136" y="126" width="128" height="62" rx="3" fill="#06080f" />

        {/* Screen content - chart bars */}
        <motion.rect
          x="148" y="165" width="10" height="0" rx="2" fill="#818cf8"
          animate={{ height: 15 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.rect
          x="164" y="155" width="10" height="0" rx="2" fill="#22d3ee"
          animate={{ height: 25 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />
        <motion.rect
          x="180" y="148" width="10" height="0" rx="2" fill="#a78bfa"
          animate={{ height: 32 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.rect
          x="196" y="158" width="10" height="0" rx="2" fill="#818cf8"
          animate={{ height: 22 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />
        <motion.rect
          x="212" y="142" width="10" height="0" rx="2" fill="#22d3ee"
          animate={{ height: 38 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.rect
          x="228" y="150" width="10" height="0" rx="2" fill="#a78bfa"
          animate={{ height: 30 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.rect
          x="244" y="160" width="10" height="0" rx="2" fill="#818cf8"
          animate={{ height: 20 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        />

        {/* Monitor stand */}
        <rect x="190" y="200" width="20" height="10" rx="2" fill="#818cf8" opacity="0.3" />
      </motion.g>

      {/* Person 1 - sitting at desk */}
      <motion.g
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Head */}
        <circle cx="100" cy="150" r="18" fill="url(#grad2)" opacity="0.8" />
        <circle cx="94" cy="147" r="2" fill="#fff" opacity="0.8" />
        <circle cx="106" cy="147" r="2" fill="#fff" opacity="0.8" />
        {/* Smile */}
        <path d="M94 155 Q100 161 106 155" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.6" />
        {/* Body */}
        <rect x="88" y="170" width="24" height="30" rx="8" fill="url(#grad2)" opacity="0.6" />
        {/* Arms reaching to keyboard */}
        <motion.path
          d="M112 180 Q130 175 145 185"
          stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"
          animate={{ d: ["M112 180 Q130 175 145 185", "M112 180 Q130 172 145 182", "M112 180 Q130 175 145 185"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Person 2 - standing with chart */}
      <motion.g
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Head */}
        <circle cx="310" cy="140" r="16" fill="url(#grad3)" opacity="0.8" />
        <circle cx="305" cy="137" r="2" fill="#fff" opacity="0.8" />
        <circle cx="315" cy="137" r="2" fill="#fff" opacity="0.8" />
        <path d="M305 143 Q310 148 315 143" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.6" />
        {/* Body */}
        <rect x="300" y="158" width="20" height="42" rx="7" fill="url(#grad3)" opacity="0.6" />
        {/* Arm holding tablet */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="320" y="165" width="25" height="18" rx="3" fill="#0f172a" stroke="#a78bfa" strokeWidth="1" opacity="0.7" />
          <rect x="323" y="168" width="19" height="12" rx="1" fill="#06080f" />
          <motion.rect
            x="325" y="175" width="5" height="0" rx="1" fill="#a78bfa"
            animate={{ height: 3 }}
            transition={{ duration: 0.3, delay: 1.8, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.rect
            x="332" y="172" width="5" height="0" rx="1" fill="#22d3ee"
            animate={{ height: 6 }}
            transition={{ duration: 0.3, delay: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.g>
      </motion.g>

      {/* Floating data points */}
      <motion.circle
        cx="60" cy="100" r="4" fill="#818cf8"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="340" cy="80" r="3" fill="#22d3ee"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.circle
        cx="50" cy="180" r="3" fill="#a78bfa"
        animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.circle
        cx="350" cy="160" r="4" fill="#ec4899"
        animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Connection lines */}
      <motion.path
        d="M64 100 Q100 90 130 120"
        stroke="#818cf8" strokeWidth="0.5" fill="none" opacity="0.3"
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path
        d="M270 120 Q310 100 337 80"
        stroke="#22d3ee" strokeWidth="0.5" fill="none" opacity="0.3"
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      {/* Floating notification badge */}
      <motion.g
        animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="250" y="100" width="50" height="20" rx="10" fill="url(#grad1)" opacity="0.7" />
        <text x="275" y="113" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">+24%</text>
      </motion.g>

      {/* Floating email icon */}
      <motion.g
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      >
        <rect x="40" y="130" width="22" height="16" rx="3" fill="#0f172a" stroke="#22d3ee" strokeWidth="1" opacity="0.6" />
        <path d="M41 132 L51 140 L61 132" stroke="#22d3ee" strokeWidth="0.8" fill="none" opacity="0.5" />
      </motion.g>

      {/* Pulsing ring around person 1 */}
      <motion.circle
        cx="100" cy="165" r="30"
        stroke="#22d3ee" strokeWidth="0.5" fill="none"
        animate={{ r: [30, 45, 30], opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.svg>
  )
}
