"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react" // Icon representing moderation/security

export default function AnimoChatModerationIntro() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="flex justify-center mb-6">
          <ShieldCheck className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          AI-Powered Moderation for AnimoChat
        </h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          To handle reported conversations efficiently and consistently on AnimoChat, we leverage Artificial Intelligence.
        </motion.p>

        <motion.p
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.5, duration: 0.5 }}
           className="text-lg md:text-xl text-gray-400"
        >
          The following slides break down the specific prompt used to instruct the AI, how we format the input data, and what the resulting output looks like.
        </motion.p>
      </motion.div>
    </div>
  )
}