"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function Slide19() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Summary</h2>

        <div className="space-y-6 mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-start bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <CheckCircle className="w-8 h-8 text-green-400 mr-4 flex-shrink-0 mt-1" />
            <p className="text-xl text-left text-gray-300">
              AI is a powerful statistical model that excels at pattern recognition and prediction, not a thinking
              machine.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-start bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <CheckCircle className="w-8 h-8 text-green-400 mr-4 flex-shrink-0 mt-1" />
            <p className="text-xl text-left text-gray-300">
              In marketing, AI automates key data tasks from collection and cleaning to segmentation, personalization,
              reporting, and prediction.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-start bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <CheckCircle className="w-8 h-8 text-green-400 mr-4 flex-shrink-0 mt-1" />
            <p className="text-xl text-left text-gray-300">
              AI has limitations and should be used to augment human capabilities, not replace human judgment and
              oversight.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-start bg-white/5 p-6 rounded-xl backdrop-blur-sm"
          >
            <CheckCircle className="w-8 h-8 text-green-400 mr-4 flex-shrink-0 mt-1" />
            <p className="text-xl text-left text-gray-300">
              By understanding AI's true nature, we can harness it effectively to unlock new levels of efficiency and
              insight in marketing.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

