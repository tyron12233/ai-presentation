"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function Slide12() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Intelligent Data Cleaning & Prep</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-red-400">Messy Data = Bad Marketing</h3>
            <div className="flex justify-center mb-4">
              <svg width="80" height="80" viewBox="0 0 100 100">
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                  {/* Messy data visualization */}
                  <rect x="10" y="20" width="20" height="10" fill="#ef4444" rx="2" />
                  <rect x="15" y="40" width="30" height="10" fill="#ef4444" rx="2" />
                  <rect x="50" y="30" width="25" height="10" fill="#ef4444" rx="2" />
                  <rect x="60" y="50" width="20" height="10" fill="#ef4444" rx="2" />
                  <rect x="30" y="60" width="35" height="10" fill="#ef4444" rx="2" />
                  <rect x="20" y="80" width="15" height="10" fill="#ef4444" rx="2" />
                  <rect x="70" y="70" width="20" height="10" fill="#ef4444" rx="2" />
                </motion.g>
              </svg>
            </div>
            <p className="text-lg text-gray-300">
              Raw data is often messy – duplicates, missing values, inconsistent formatting. Using dirty data leads to
              inaccurate targeting and wasted budget.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-400">AI Cleans & Standardizes</h3>
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-green-400" />
            </div>
            <p className="text-lg text-gray-300">
              AI excels at pattern recognition, making it great for data cleaning. It identifies inconsistencies,
              suggests corrections, and standardizes formats automatically.
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
            Ensures higher quality data, leading to more reliable insights and effective campaigns.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

