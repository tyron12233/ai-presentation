"use client"

import { motion } from "framer-motion"
import { Database } from "lucide-react"

export default function Slide11() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Smarter Data Collection & Integration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-red-400">The Manual Mess</h3>
            <div className="flex justify-center mb-4">
              <Database className="w-12 h-12 text-red-400" />
            </div>
            <p className="text-lg text-gray-300">
              Marketers struggle with data from countless sources – CRM, website analytics, social media, ad platforms,
              email... Manually pulling this together is time-consuming and error-prone.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-400">AI Solution</h3>
            <div className="flex justify-center mb-4">
              <Database className="w-12 h-12 text-green-400" />
            </div>
            <p className="text-lg text-gray-300">
              AI-powered tools intelligently connect to various APIs, understand data structures, and pull relevant
              information into a unified view, often in real-time.
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
            Frees up marketers' time and provides a more holistic view of the customer journey.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

