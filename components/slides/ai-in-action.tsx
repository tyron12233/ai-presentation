"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

export default function AiInAction() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-6">
          <Zap className="w-16 h-16 text-yellow-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">AI in Action</h2>

        <div className="relative h-64 mb-8">
          <svg className="w-full h-full" viewBox="0 0 800 300">
            {/* Central AI node */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <circle cx="400" cy="150" r="60" fill="url(#aiGradient)" />
              <text x="400" y="155" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                AI
              </text>
            </motion.g>

            {/* Marketing channels */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
              {/* CRM */}
              <circle cx="200" cy="80" r="40" fill="#06b6d4" fillOpacity="0.7" />
              <text x="200" y="85" textAnchor="middle" fill="white" fontSize="14">
                CRM
              </text>
              <line x1="250" y1="100" x2="350" y2="130" stroke="white" strokeWidth="2" strokeDasharray="5,5" />

              {/* Social */}
              <circle cx="600" cy="80" r="40" fill="#a855f7" fillOpacity="0.7" />
              <text x="600" y="85" textAnchor="middle" fill="white" fontSize="14">
                Social
              </text>
              <line x1="550" y1="100" x2="450" y2="130" stroke="white" strokeWidth="2" strokeDasharray="5,5" />

              {/* Email */}
              <circle cx="200" cy="220" r="40" fill="#ec4899" fillOpacity="0.7" />
              <text x="200" y="225" textAnchor="middle" fill="white" fontSize="14">
                Email
              </text>
              <line x1="250" y1="200" x2="350" y2="170" stroke="white" strokeWidth="2" strokeDasharray="5,5" />

              {/* Analytics */}
              <circle cx="600" cy="220" r="40" fill="#eab308" fillOpacity="0.7" />
              <text x="600" y="225" textAnchor="middle" fill="white" fontSize="14">
                Analytics
              </text>
              <line x1="550" y1="200" x2="450" y2="170" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
            </motion.g>
          </svg>

          <defs>
            <radialGradient id="aiGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </radialGradient>
          </defs>
        </div>

        <p className="text-xl text-gray-300">
          AI is transforming how marketers handle data, moving from manual drudgery to intelligent automation across key
          marketing tasks.
        </p>
      </motion.div>
    </div>
  )
}

