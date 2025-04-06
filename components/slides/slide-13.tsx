"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

export default function Slide13() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Automated Customer Segmentation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">Basic Segmentation</h3>
            <div className="flex justify-center mb-4">
              <svg width="80" height="80" viewBox="0 0 100 100">
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                  {/* Basic segmentation visualization */}
                  <circle cx="30" cy="30" r="20" fill="#fbbf24" fillOpacity="0.5" />
                  <circle cx="70" cy="30" r="20" fill="#fbbf24" fillOpacity="0.5" />
                  <circle cx="30" cy="70" r="20" fill="#fbbf24" fillOpacity="0.5" />
                  <circle cx="70" cy="70" r="20" fill="#fbbf24" fillOpacity="0.5" />
                </motion.g>
              </svg>
            </div>
            <p className="text-lg text-gray-300">
              Traditional segmentation often relies on broad demographic categories, missing subtle nuances in customer
              behavior and intent.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">AI Finds Deeper Segments</h3>
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-cyan-400" />
            </div>
            <p className="text-lg text-gray-300">
              AI analyzes vast amounts of behavioral data to uncover much deeper, dynamic segments, identifying groups
              with similar predicted behaviors or needs.
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
            Allows for more relevant messaging and targeted campaigns, improving conversion rates.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

