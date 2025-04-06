"use client"

import { motion } from "framer-motion"
import { Brain } from "lucide-react"

export default function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <Brain className="w-24 h-24 text-cyan-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Demystifying AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Pulling back the curtain on artificial intelligence and its role in data automation
        </p>
      </motion.div>
    </div>
  )
}

