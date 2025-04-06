"use client"

import { motion } from "framer-motion"
import { DatabaseZap } from "lucide-react" // Icon suggesting data processing/input

export default function InputFormatting() {
  const formattedInput = `
Messages:
user1: 931621d6-5d1f-477a-87b1-035e865ba459  (user id)
user2: e004f854-af52-4d3c-92e0-d3ed2102971d  (user id)
user3: system

-- Conversation Start --
user1: Hello
user2: Hi
user1: I'm 21, F, studying CS. You?
user2: 22 M, Engineering here. Cool.
user3: END_SESSION
-- CONVERSATION END --
` // Example conversation added for context

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="flex justify-center mb-6">
          <DatabaseZap className="w-16 h-16 text-yellow-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          Formatting Input for AI
        </h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white/5 p-6 rounded-xl backdrop-blur-sm shadow-lg"
        >
          <p className="text-lg text-gray-300 mb-4">
            Raw chat logs are cleaned and structured before being sent to the AI. This includes identifying users and marking the conversation boundaries.
          </p>
          <pre className="bg-gray-900/70 p-4 rounded-lg text-gray-200 text-sm md:text-base overflow-x-auto">
            <code>{formattedInput.trim()}</code>
          </pre>
        </motion.div>
      </motion.div>
    </div>
  )
}