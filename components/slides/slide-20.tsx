"use client"

import { motion } from "framer-motion"
import { Brain, MessageCircleQuestion } from "lucide-react"

export default function Slide20() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <Brain className="w-24 h-24 text-gradient-to-r from-cyan-400 to-purple-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Thank You
          </h2>
          <p className="text-2xl text-gray-300 mb-12">Questions?</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center"
        >
          <MessageCircleQuestion className="w-16 h-16 text-purple-400 animate-pulse" />
        </motion.div>
      </motion.div>
    </div>
  )
}

