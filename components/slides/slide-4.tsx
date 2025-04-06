"use client"

import { motion } from "framer-motion"
import { BarChart3 } from "lucide-react"

export default function Slide4() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-6">
          <BarChart3 className="w-16 h-16 text-cyan-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">AI: A Statistical Model</h2>

        <div className="relative h-64 mb-8 bg-white/5 rounded-xl overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
          />

          <div className="absolute inset-0 flex items-center justify-around px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-cyan-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-xl font-bold">Input</span>
              </div>
              <p className="text-sm text-gray-300">Data</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-purple-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-xl font-bold">Processing</span>
              </div>
              <p className="text-sm text-gray-300">Statistical Analysis</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-cyan-500/30 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-xl font-bold">Output</span>
              </div>
              <p className="text-sm text-gray-300">Predictions</p>
            </motion.div>
          </div>
        </div>

        <p className="text-xl text-gray-300">
          At its core, AI is a mathematical system that processes inputs through statistical models to generate outputs
          based on patterns it has learned.
        </p>
      </motion.div>
    </div>
  )
}

