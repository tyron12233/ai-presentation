"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export default function Slide7() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-amber-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Limitations of AI</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">Data Dependency</h3>
            <p className="text-lg text-gray-300">
              AI can never be better than the data it has been trained on. Biased, incomplete, or inaccurate training
              data leads to flawed outputs.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">Lack of Common Sense</h3>
            <p className="text-lg text-gray-300">
              AI lacks true understanding and common sense reasoning. It cannot generalize beyond its training data in a
              truly creative or insightful way.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">Context Blindness</h3>
            <p className="text-lg text-gray-300">
              AI often struggles with understanding context and nuance in the way humans naturally do, leading to
              misinterpretations.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">Human Oversight Needed</h3>
            <p className="text-lg text-gray-300">
              AI can automate and augment, but it's not a replacement for human judgment, especially in complex or novel
              situations.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

