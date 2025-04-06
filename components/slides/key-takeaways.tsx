"use client"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"

export default function KeyTakewaays() {
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
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Key Takeaways: AI in Marketing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Data Collection</h3>
            <p className="text-lg text-gray-300">
              AI connects disparate data sources to provide a unified view of the customer journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Data Cleaning</h3>
            <p className="text-lg text-gray-300">
              AI automatically identifies and corrects inconsistencies in marketing data.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-pink-400">Segmentation</h3>
            <p className="text-lg text-gray-300">
              AI uncovers deeper customer segments based on behavior and predicted needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Personalization</h3>
            <p className="text-lg text-gray-300">
              AI delivers real-time personalized experiences at scale across channels.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-green-400">Reporting</h3>
            <p className="text-lg text-gray-300">
              AI automates report generation and surfaces insights that humans might miss.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Prediction</h3>
            <p className="text-lg text-gray-300">
              AI forecasts campaign performance and customer behavior to optimize marketing efforts.
            </p>
          </motion.div>
        </div>

        <p className="text-xl text-gray-300">AI transforms marketing data from a burden into a strategic advantage.</p>
      </motion.div>
    </div>
  )
}

