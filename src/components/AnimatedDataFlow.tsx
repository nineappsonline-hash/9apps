'use client'

import { motion } from 'framer-motion'

export default function AnimatedDataFlow({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 200"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      {/* Central hub */}
      <motion.circle
        cx="200" cy="100" r="25"
        fill="#0f172a" stroke="url(#flowGrad1)" strokeWidth="2"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="200" cy="100" r="8"
        fill="url(#flowGrad1)"
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Left nodes */}
      {[
        { x: 50, y: 40, label: 'CRM', color: '#818cf8' },
        { x: 50, y: 100, label: 'ERP', color: '#22d3ee' },
        { x: 50, y: 160, label: 'HR', color: '#a78bfa' },
      ].map((node, i) => (
        <motion.g
          key={node.label}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
        >
          <circle cx={node.x} cy={node.y} r="18" fill="#0f172a" stroke={node.color} strokeWidth="1.5" opacity="0.8" />
          <text x={node.x} y={node.y + 4} textAnchor="middle" fill={node.color} fontSize="8" fontWeight="bold">
            {node.label}
          </text>
          {/* Connection line to center */}
          <motion.line
            x1={node.x + 18} y1={node.y} x2="175" y2="100"
            stroke={node.color} strokeWidth="0.8" opacity="0.3"
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
          {/* Data packet traveling */}
          <motion.circle
            r="3" fill={node.color}
            animate={{
              cx: [node.x + 18, 175],
              cy: [node.y, 100],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          />
        </motion.g>
      ))}

      {/* Right nodes */}
      {[
        { x: 350, y: 40, label: 'Sales', color: '#818cf8' },
        { x: 350, y: 100, label: 'Data', color: '#22d3ee' },
        { x: 350, y: 160, label: 'Finance', color: '#a78bfa' },
      ].map((node, i) => (
        <motion.g
          key={node.label}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
        >
          <circle cx={node.x} cy={node.y} r="18" fill="#0f172a" stroke={node.color} strokeWidth="1.5" opacity="0.8" />
          <text x={node.x} y={node.y + 4} textAnchor="middle" fill={node.color} fontSize="7" fontWeight="bold">
            {node.label}
          </text>
          <motion.line
            x1="225" y1="100" x2={node.x - 18} y2={node.y}
            stroke={node.color} strokeWidth="0.8" opacity="0.3"
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 1 }}
          />
          <motion.circle
            r="3" fill={node.color}
            animate={{
              cx: [225, node.x - 18],
              cy: [100, node.y],
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 + 0.7, ease: "easeInOut" }}
          />
        </motion.g>
      ))}

      {/* Orbiting ring */}
      <motion.circle
        cx="200" cy="100" r="55"
        stroke="url(#flowGrad1)" strokeWidth="0.5" fill="none" opacity="0.3"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '200px 100px' }}
      />
      <motion.circle
        cx="200" cy="100" r="70"
        stroke="url(#flowGrad2)" strokeWidth="0.3" fill="none" opacity="0.2"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '200px 100px' }}
      />
    </motion.svg>
  )
}
