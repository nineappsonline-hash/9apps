'use client'

import { motion } from 'framer-motion'

export default function AnimatedDataFlow({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 180"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="dfGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Central hub */}
      <motion.circle
        cx="200" cy="90" r="22"
        fill="#0f172a" stroke="url(#dfGrad1)" strokeWidth="2"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.circle
        cx="200" cy="90" r="7"
        fill="url(#dfGrad1)"
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      {/* Hub label */}
      <text x="200" y="93" textAnchor="middle" fill="#818cf8" fontSize="6" fontWeight="bold" opacity="0.6">9APPS</text>

      {/* Left nodes */}
      {[
        { x: 55, y: 35, label: 'CRM', color: '#818cf8', icon: 'M0-4 L4 0 L0 4 L-4 0Z' },
        { x: 55, y: 90, label: 'ERP', color: '#22d3ee', icon: 'M-3-3 L3-3 L3 3 L-3 3Z' },
        { x: 55, y: 145, label: 'HR', color: '#a78bfa', icon: 'M0-4 L4 0 L0 4 L-4 0Z' },
      ].map((node, i) => (
        <motion.g
          key={node.label}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
        >
          {/* Glow */}
          <circle cx={node.x} cy={node.y} r="20" fill={node.color} opacity="0.05" />
          {/* Node circle */}
          <circle cx={node.x} cy={node.y} r="16" fill="#0f172a" stroke={node.color} strokeWidth="1.5" />
          {/* Icon inside */}
          <g transform={`translate(${node.x}, ${node.y - 2})`} opacity="0.6">
            <path d={node.icon} fill={node.color} />
          </g>
          {/* Label */}
          <text x={node.x} y={node.y + 10} textAnchor="middle" fill={node.color} fontSize="6" fontWeight="bold" opacity="0.8">
            {node.label}
          </text>
          {/* Connection line */}
          <motion.line
            x1={node.x + 16} y1={node.y} x2="178" y2="90"
            stroke={node.color} strokeWidth="0.8" strokeDasharray="3 3"
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
          {/* Data packet */}
          <motion.circle
            r="2.5" fill={node.color} filter="url(#nodeGlow)"
            animate={{
              cx: [node.x + 16, 178],
              cy: [node.y, 90],
              opacity: [0, 0.9, 0],
            }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
          />
        </motion.g>
      ))}

      {/* Right nodes */}
      {[
        { x: 345, y: 35, label: 'Sales', color: '#818cf8', icon: 'M-2 3 L0-4 L2 3Z' },
        { x: 345, y: 90, label: 'Data', color: '#22d3ee', icon: 'M-3 0 A3 3 0 1 1 3 0 A3 3 0 1 1 -3 0' },
        { x: 345, y: 145, label: 'Finance', color: '#a78bfa', icon: 'M-3-2 L3-2 L3 2 L-3 2Z' },
      ].map((node, i) => (
        <motion.g
          key={node.label}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
        >
          <circle cx={node.x} cy={node.y} r="20" fill={node.color} opacity="0.05" />
          <circle cx={node.x} cy={node.y} r="16" fill="#0f172a" stroke={node.color} strokeWidth="1.5" />
          <g transform={`translate(${node.x}, ${node.y - 2})`} opacity="0.6">
            <path d={node.icon} fill={node.color} />
          </g>
          <text x={node.x} y={node.y + 10} textAnchor="middle" fill={node.color} fontSize="5.5" fontWeight="bold" opacity="0.8">
            {node.label}
          </text>
          <motion.line
            x1="222" y1="90" x2={node.x - 16} y2={node.y}
            stroke={node.color} strokeWidth="0.8" strokeDasharray="3 3"
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 1 }}
          />
          <motion.circle
            r="2.5" fill={node.color} filter="url(#nodeGlow)"
            animate={{
              cx: [222, node.x - 16],
              cy: [90, node.y],
              opacity: [0, 0.9, 0],
            }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 + 0.6, ease: "easeInOut" }}
          />
        </motion.g>
      ))}

      {/* Orbiting rings */}
      <motion.circle
        cx="200" cy="90" r="50"
        stroke="url(#dfGrad1)" strokeWidth="0.4" fill="none" opacity="0.2"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '200px 90px' }}
      />
    </motion.svg>
  )
}
