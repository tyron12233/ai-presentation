"use client"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"

export default function Slide8() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-6">
          <Lightbulb className="w-16 h-16 text-yellow-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Key Takeaways: Demystifying AI</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Statistical Model</h3>
            <p className="text-lg text-gray-300">
              AI is fundamentally a statistical model that processes inputs to generate outputs based on patterns it has
              learned.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Pattern Recognition</h3>
            <p className="text-lg text-gray-300">
              AI excels at identifying patterns within vast datasets, making it valuable for data automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-pink-400">Has Limitations</h3>
            <p className="text-lg text-gray-300">
              AI is limited by its training data and lacks true understanding and common sense reasoning.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Augments Humans</h3>
            <p className="text-lg text-gray-300">
              AI should be used to augment human capabilities, not replace human judgment and oversight.
            </p>
          </motion.div>
        </div>

        <p className="text-xl text-gray-300">
          Understanding what AI truly is helps us leverage its strengths while being mindful of its limitations.
        </p>
      </motion.div>
    </div>
  )
}

