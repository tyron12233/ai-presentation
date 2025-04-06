"use client"

import { motion } from "framer-motion"
import { BrainCircuit, X } from "lucide-react"

export default function Slide3() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">AI: Not What It Seems</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <X className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-semibold">AI is NOT</h3>
            </div>
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Conscious or "thinking" like humans</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Capable of understanding or having intentions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>A magical black box with unlimited capabilities</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <div className="flex items-center mb-4">
              <BrainCircuit className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-semibold">AI IS</h3>
            </div>
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>A sophisticated tool built for specific purposes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fundamentally a statistical model</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>A high-powered pattern recognition engine</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

