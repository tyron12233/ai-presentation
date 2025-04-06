"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export default function Slide16() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Predictive Analytics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">Guessing What Works?</h3>
            <div className="flex justify-center mb-4">
              <svg width="80" height="80" viewBox="0 0 100 100">
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                  {/* Question marks visualization */}
                  <text x="30" y="40" fontSize="30" fill="#fbbf24" fontWeight="bold">
                    ?
                  </text>
                  <text x="50" y="60" fontSize="30" fill="#fbbf24" fontWeight="bold">
                    ?
                  </text>
                  <text x="70" y="40" fontSize="30" fill="#fbbf24" fontWeight="bold">
                    ?
                  </text>
                </motion.g>
              </svg>
            </div>
            <p className="text-lg text-gray-300">
              Marketing often involves uncertainty. Which leads will convert? Which campaigns will yield the best ROI?
              How much budget to allocate?
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">AI Predicts Performance & Conversions</h3>
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-cyan-400" />
            </div>
            <p className="text-lg text-gray-300">
              By analyzing historical data patterns, AI can build predictive models to forecast campaign performance,
              score leads, predict customer churn, and optimize budget allocation.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-6 rounded-xl backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold mb-2 text-center">Benefit</h3>
          <p className="text-xl text-center text-gray-300">
            Moves marketing from reactive to proactive, improving efficiency and maximizing ROI.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

