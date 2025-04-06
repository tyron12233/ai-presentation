"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"

export default function RealtimePersonalization() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Real-time Personalization</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-red-400">One Size Fits Few</h3>
            <div className="flex justify-center mb-4">
              <svg width="80" height="80" viewBox="0 0 100 100">
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                  {/* Generic content visualization */}
                  <rect x="20" y="20" width="60" height="60" fill="#ef4444" fillOpacity="0.3" rx="4" />
                  <rect x="30" y="30" width="40" height="10" fill="#ef4444" fillOpacity="0.6" rx="2" />
                  <rect x="30" y="45" width="40" height="5" fill="#ef4444" fillOpacity="0.6" rx="2" />
                  <rect x="30" y="55" width="40" height="5" fill="#ef4444" fillOpacity="0.6" rx="2" />
                  <rect x="30" y="65" width="40" height="5" fill="#ef4444" fillOpacity="0.6" rx="2" />
                </motion.g>
              </svg>
            </div>
            <p className="text-lg text-gray-300">
              Sending the same generic message to everyone is ineffective. True personalization requires understanding
              individual context.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">AI Delivers 1:1 Experiences</h3>
            <div className="flex justify-center mb-4">
              <Target className="w-12 h-12 text-purple-400" />
            </div>
            <p className="text-lg text-gray-300">
              AI engines analyze real-time behavior and instantly trigger personalized content, product suggestions, or
              tailored offers across different channels.
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
            Dramatically improves customer experience, engagement, and loyalty.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

