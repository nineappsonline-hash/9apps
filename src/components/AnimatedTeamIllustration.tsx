'use client'

import { motion } from 'framer-motion'

export default function AnimatedTeamIllustration({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 280"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="tGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="tGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="tGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <filter id="glow1">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Desk surface */}
      <motion.rect
        x="50" y="195" width="300" height="6" rx="3"
        fill="url(#tGrad1)" opacity="0.25"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <rect x="70" y="201" width="6" height="45" rx="3" fill="#818cf8" opacity="0.15" />
      <rect x="324" y="201" width="6" height="45" rx="3" fill="#818cf8" opacity="0.15" />

      {/* Monitor */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Monitor body */}
        <rect x="125" y="105" width="150" height="90" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <rect x="130" y="110" width="140" height="75" rx="4" fill="url(#screenGrad)" />
        {/* Screen reflection */}
        <rect x="130" y="110" width="140" height="75" rx="4" fill="url(#tGrad1)" opacity="0.03" />

        {/* Dashboard UI on screen */}
        <rect x="135" y="115" width="45" height="12" rx="3" fill="#818cf8" opacity="0.15" />
        <rect x="138" y="118" width="20" height="2" rx="1" fill="#818cf8" opacity="0.4" />
        <rect x="138" y="122" width="30" height="2" rx="1" fill="#818cf8" opacity="0.2" />

        {/* Chart bars */}
        <motion.rect x="142" y="165" width="8" rx="2" fill="#818cf8" filter="url(#glow1)"
          animate={{ height: [0, 14] }} transition={{ duration: 0.4, delay: 1.0 }} />
        <motion.rect x="154" y="158" width="8" rx="2" fill="#22d3ee" filter="url(#glow1)"
          animate={{ height: [0, 21] }} transition={{ duration: 0.4, delay: 1.1 }} />
        <motion.rect x="166" y="152" width="8" rx="2" fill="#a78bfa" filter="url(#glow1)"
          animate={{ height: [0, 27] }} transition={{ duration: 0.4, delay: 1.2 }} />
        <motion.rect x="178" y="160" width="8" rx="2" fill="#818cf8" filter="url(#glow1)"
          animate={{ height: [0, 19] }} transition={{ duration: 0.4, delay: 1.3 }} />
        <motion.rect x="190" y="148" width="8" rx="2" fill="#22d3ee" filter="url(#glow1)"
          animate={{ height: [0, 31] }} transition={{ duration: 0.4, delay: 1.4 }} />
        <motion.rect x="202" y="155" width="8" rx="2" fill="#a78bfa" filter="url(#glow1)"
          animate={{ height: [0, 24] }} transition={{ duration: 0.4, delay: 1.5 }} />
        <motion.rect x="214" y="162" width="8" rx="2" fill="#818cf8" filter="url(#glow1)"
          animate={{ height: [0, 17] }} transition={{ duration: 0.4, delay: 1.6 }} />
        <motion.rect x="226" y="150" width="8" rx="2" fill="#22d3ee" filter="url(#glow1)"
          animate={{ height: [0, 29] }} transition={{ duration: 0.4, delay: 1.7 }} />
        <motion.rect x="238" y="157" width="8" rx="2" fill="#a78bfa" filter="url(#glow1)"
          animate={{ height: [0, 22] }} transition={{ duration: 0.4, delay: 1.8 }} />

        {/* Side panel on screen */}
        <rect x="252" y="115" width="12" height="55" rx="2" fill="#818cf8" opacity="0.08" />
        <rect x="254" y="118" width="8" height="3" rx="1" fill="#818cf8" opacity="0.3" />
        <rect x="254" y="124" width="8" height="3" rx="1" fill="#22d3ee" opacity="0.25" />
        <rect x="254" y="130" width="8" height="3" rx="1" fill="#a78bfa" opacity="0.2" />

        {/* Monitor stand */}
        <rect x="192" y="195" width="16" height="8" rx="2" fill="#334155" />
        <rect x="182" y="200" width="36" height="3" rx="1.5" fill="#475569" />
      </motion.g>

      {/* Person 1 - sitting, typing */}
      <motion.g
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Hair */}
        <ellipse cx="95" cy="132" rx="16" ry="14" fill="#1e293b" />
        {/* Head */}
        <circle cx="95" cy="138" r="15" fill="url(#tGrad2)" />
        {/* Face features */}
        <ellipse cx="89" cy="136" rx="2" ry="2.5" fill="#fff" opacity="0.9" />
        <circle cx="89" cy="136.5" r="1" fill="#0f172a" />
        <ellipse cx="101" cy="136" rx="2" ry="2.5" fill="#fff" opacity="0.9" />
        <circle cx="101" cy="136.5" r="1" fill="#0f172a" />
        {/* Smile */}
        <path d="M90 144 Q95 149 100 144" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.7" />
        {/* Neck */}
        <rect x="91" y="153" width="8" height="6" rx="2" fill="url(#tGrad2)" opacity="0.7" />
        {/* Shirt */}
        <path d="M76 160 Q95 155 114 160 L112 200 Q95 205 78 200 Z" fill="url(#tGrad2)" opacity="0.6" />
        {/* Collar */}
        <path d="M88 160 L95 168 L102 160" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.3" />
        {/* Arms typing */}
        <motion.path
          d="M112 172 Q125 168 140 175"
          stroke="url(#tGrad2)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5"
          animate={{ d: ["M112 172 Q125 168 140 175", "M112 172 Q125 165 140 172", "M112 172 Q125 168 140 175"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M78 175 Q85 170 95 172"
          stroke="url(#tGrad2)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5"
          animate={{ d: ["M78 175 Q85 170 95 172", "M78 175 Q85 168 95 170", "M78 175 Q85 170 95 172"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        {/* Chair */}
        <ellipse cx="95" cy="205" rx="22" ry="5" fill="#1e293b" opacity="0.4" />
      </motion.g>

      {/* Person 2 - standing, holding tablet */}
      <motion.g
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Hair */}
        <ellipse cx="310" cy="120" rx="14" ry="12" fill="#7c3aed" opacity="0.7" />
        {/* Head */}
        <circle cx="310" cy="126" r="13" fill="url(#tGrad3)" />
        {/* Face */}
        <ellipse cx="305" cy="124" rx="1.8" ry="2.2" fill="#fff" opacity="0.9" />
        <circle cx="305" cy="124.5" r="0.9" fill="#0f172a" />
        <ellipse cx="315" cy="124" rx="1.8" ry="2.2" fill="#fff" opacity="0.9" />
        <circle cx="315" cy="124.5" r="0.9" fill="#0f172a" />
        <path d="M306 130 Q310 134 314 130" stroke="#fff" strokeWidth="1.2" fill="none" opacity="0.7" />
        {/* Neck */}
        <rect x="307" y="139" width="6" height="5" rx="2" fill="url(#tGrad3)" opacity="0.7" />
        {/* Body */}
        <path d="M298 145 Q310 141 322 145 L320 195 Q310 200 300 195 Z" fill="url(#tGrad3)" opacity="0.6" />
        {/* Arm holding tablet */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M322 155 L340 160 L340 175 L322 170" fill="url(#tGrad3)" opacity="0.4" />
          {/* Tablet */}
          <rect x="332" y="152" width="28" height="20" rx="3" fill="#1e293b" stroke="#a78bfa" strokeWidth="1" />
          <rect x="335" y="155" width="22" height="14" rx="1" fill="#0f172a" />
          {/* Mini chart on tablet */}
          <motion.rect x="337" y="164" width="3" rx="1" fill="#a78bfa"
            animate={{ height: [0, 4] }} transition={{ duration: 0.3, delay: 2, repeat: Infinity, repeatDelay: 1.5 }} />
          <motion.rect x="342" y="161" width="3" rx="1" fill="#22d3ee"
            animate={{ height: [0, 7] }} transition={{ duration: 0.3, delay: 2.2, repeat: Infinity, repeatDelay: 1.5 }} />
          <motion.rect x="347" y="163" width="3" rx="1" fill="#818cf8"
            animate={{ height: [0, 5] }} transition={{ duration: 0.3, delay: 2.4, repeat: Infinity, repeatDelay: 1.5 }} />
        </motion.g>
        {/* Legs */}
        <rect x="303" y="195" width="6" height="20" rx="2" fill="url(#tGrad3)" opacity="0.4" />
        <rect x="311" y="195" width="6" height="20" rx="2" fill="url(#tGrad3)" opacity="0.4" />
      </motion.g>

      {/* Floating notification */}
      <motion.g
        animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="255" y="88" width="52" height="22" rx="11" fill="url(#tGrad1)" opacity="0.8" />
        <text x="281" y="103" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">+24.5%</text>
      </motion.g>

      {/* Floating email */}
      <motion.g
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <rect x="30" y="120" width="26" height="18" rx="4" fill="#1e293b" stroke="#22d3ee" strokeWidth="1" opacity="0.7" />
        <path d="M32 123 L43 131 L54 123" stroke="#22d3ee" strokeWidth="1" fill="none" opacity="0.6" />
      </motion.g>

      {/* Floating checkmark */}
      <motion.g
        animate={{ y: [0, -5, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <circle cx="360" cy="95" r="10" fill="#1e293b" stroke="#22d3ee" strokeWidth="1" opacity="0.6" />
        <path d="M355 95 L359 99 L366 91" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* Pulsing ring */}
      <motion.circle
        cx="95" cy="160" r="35"
        stroke="#22d3ee" strokeWidth="0.5" fill="none"
        animate={{ r: [35, 50, 35], opacity: [0.15, 0, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.svg>
  )
}
