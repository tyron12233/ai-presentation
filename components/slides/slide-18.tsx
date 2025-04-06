"use client"

import { motion } from "framer-motion"
import { Brain, Users } from "lucide-react"

export default function Slide18() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">AI + Human = Optimal Results</h2>

        <div className="relative h-64 mb-8">
          <svg className="w-full h-full" viewBox="0 0 800 300">
            {/* AI circle */}
            <motion.g
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <circle cx="250" cy="150" r="80" fill="url(#aiGradient)" />
              <text x="250" y="160" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
                AI
              </text>
            </motion.g>

            {/* Human circle */}
            <motion.g
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <circle cx="550" cy="150" r="80" fill="url(#humanGradient)" />
              <text x="550" y="160" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
                Human
              </text>
            </motion.g>

            {/* Connecting line */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              x1="330"
              y1="150"
              x2="470"
              y2="150"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="10,10"
            />

            {/* Plus sign */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <circle cx="400" cy="150" r="25" fill="white" />
              <text x="400" y="158" textAnchor="middle" fill="#1e293b" fontSize="24" fontWeight="bold">
                +
              </text>
            </motion.g>
          </svg>

          <defs>
            <radialGradient id="aiGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </radialGradient>
            <radialGradient id="humanGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#eab308" />
            </radialGradient>
          </defs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="flex justify-center mb-4">
              <Brain className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Strengths</h3>
            <ul className="text-left text-lg text-gray-300 space-y-2">
              <li>• Processing vast amounts of data</li>
              <li>• Identifying patterns and correlations</li>
              <li>• Automating repetitive tasks</li>
              <li>• Making predictions based on historical data</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Human Strengths</h3>
            <ul className="text-left text-lg text-gray-300 space-y-2">
              <li>• Creative thinking and innovation</li>
              <li>• Emotional intelligence and empathy</li>
              <li>• Ethical judgment and decision-making</li>
              <li>• Adapting to novel situations</li>
            </ul>
          </motion.div>
        </div>

        <p className="text-xl text-gray-300">
          The key is to use AI to augment human capabilities, not replace them. Together, they create a powerful
          partnership.
        </p>
      </motion.div>
    </div>
  )
}

