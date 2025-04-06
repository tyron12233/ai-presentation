"use client"

import { motion } from "framer-motion"
import { BarChart3 } from "lucide-react"

export default function Slide15() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Automated Reporting & Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">Reporting Takes Hours</h3>
            <div className="flex justify-center mb-4">
              <svg width="80" height="80" viewBox="0 0 100 100">
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                  {/* Manual reporting visualization */}
                  <rect x="15" y="15" width="70" height="70" fill="#fbbf24" fillOpacity="0.2" rx="4" />
                  <rect x="20" y="20" width="60" height="10" fill="#fbbf24" fillOpacity="0.4" rx="2" />
                  <rect x="20" y="35" width="30" height="30" fill="#fbbf24" fillOpacity="0.4" rx="2" />
                  <rect x="55" y="35" width="25" height="30" fill="#fbbf24" fillOpacity="0.4" rx="2" />
                  <rect x="20" y="70" width="60" height="10" fill="#fbbf24" fillOpacity="0.4" rx="2" />
                </motion.g>
              </svg>
            </div>
            <p className="text-lg text-gray-300">
              Manually compiling marketing reports from various platforms and analyzing the data can consume hours or
              even days.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-400">AI Generates Reports & Finds Insights</h3>
            <div className="flex justify-center mb-4">
              <BarChart3 className="w-12 h-12 text-green-400" />
            </div>
            <p className="text-lg text-gray-300">
              AI automates report generation and analyzes data to automatically highlight significant trends, anomalies,
              or insights that a human might miss.
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
            Frees up analytical time, enables faster decision-making, and surfaces hidden opportunities.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

