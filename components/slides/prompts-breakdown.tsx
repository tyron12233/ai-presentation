"use client"

import { motion } from "framer-motion"
import { Terminal } from "lucide-react" // Using Terminal icon as relevant to prompt/code

export default function PromptBreakdown() {
  const promptText = `As a content moderator on our social platform, your role is to assess the veracity of reported conversations. You must analyze whether the reported content is accurate and determine the likelihood of its truthfulness as a percentage. Additionally, you need to evaluate if the report is valid and substantiate whether there are sufficient grounds to recommend banning the reporting user. Based on your analysis, generate two distinct messages: one directed to the reported user in cases where a violation has occurred, and another for the reporting user if the report is unfounded or lacks adequate evidence. Your tone should remain firm and authoritative throughout.

The entire report, including your analysis, must be output in strict JSON format with the following structure: { "report_accuracy": int, "report_validity": bool, "user_ban_recommended": bool, "analysis": string, "message_for_reported_user": string, "message_for_reporting_user": string }. Do not include the full text of the messages again in your output.`

  // Split the prompt for highlighting (adjust indices as needed if prompt changes)
  const rolePart = promptText.substring(0, 107) // "As a content moderator..."
  const actionPart = promptText.substring(107, 528) // "You must analyze..."
  const outputPart = promptText.substring(528) // "The entire report..."

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto w-full" // Increased max-width for better text display
      >
        <div className="flex justify-center mb-6">
          <Terminal className="w-16 h-16 text-cyan-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          Deconstructing the AI Prompt
        </h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white/5 p-6 rounded-xl backdrop-blur-sm shadow-lg"
        >
          <p className="text-lg text-gray-300 mb-4">
            The prompt guides the AI's moderation task. It's structured in three key parts:
          </p>
          <pre className="bg-gray-900/70 p-4 rounded-lg text-gray-200 text-sm md:text-base overflow-x-auto whitespace-pre-wrap break-words">
            <code>
              <span className="block p-2 mb-2 bg-blue-900/30 rounded border border-blue-700">
                <strong className="text-blue-400">[AI ROLE]</strong> {rolePart}
              </span>
              <span className="block p-2 mb-2 bg-green-900/30 rounded border border-green-700">
                <strong className="text-green-400">[ACTION REQUIRED]</strong>{actionPart}
              </span>
              <span className="block p-2 bg-purple-900/30 rounded border border-purple-700">
                <strong className="text-purple-400">[OUTPUT FORMAT]</strong>{outputPart}
              </span>
            </code>
          </pre>
        </motion.div>
      </motion.div>
    </div>
  )
}