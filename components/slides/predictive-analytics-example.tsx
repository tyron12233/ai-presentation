"use client"

import { motion } from "framer-motion"
// Import relevant icons
import { Terminal, Lightbulb, Filter, Target, DollarSign, UserCheck, ArrowDown } from "lucide-react"

// Animation variants
const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3 + 0.3, duration: 0.5, ease: "easeOut" }
    })
};

const listItemVariant = {
     hidden: { opacity: 0, x: -15 },
     visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const promptExample = `You are a predictive lead scoring model for our B2B SaaS platform.
---
ROLE: Analyze new leads based on historical data patterns.
---
INPUT CONTEXT: You will receive lead attributes like:
- Lead Source (e.g., 'Organic', 'Paid Social', 'Referral')
- Company Size (e.g., '1-50', '51-200', '201+')
- Job Title Category (e.g., 'Executive', 'Manager', 'Contributor')
- Website Engagement Score (0-100)
- Free Trial Started (true/false)
---
TASK: Predict the conversion likelihood (0-100%) for the given lead within 90 days. Identify key positive/negative factors.
---
OUTPUT FORMAT: Return strict JSON:
{
  "lead_id": "<ID>",
  "conversion_probability": int,
  "key_factors": ["+ High Engagement", "- Small Company Size"]
}`

// Split prompt for highlighting (adjust indices as needed if prompt changes)
const rolePart = promptExample.substring(promptExample.indexOf("ROLE:"), promptExample.indexOf("---", promptExample.indexOf("ROLE:")));
const inputPart = promptExample.substring(promptExample.indexOf("INPUT CONTEXT:"), promptExample.indexOf("---", promptExample.indexOf("INPUT CONTEXT:")));
const taskPart = promptExample.substring(promptExample.indexOf("TASK:"), promptExample.indexOf("---", promptExample.indexOf("TASK:")));
const outputPart = promptExample.substring(promptExample.indexOf("OUTPUT FORMAT:"));
const introPart = promptExample.substring(0, promptExample.indexOf("---"));


export default function PredictiveAnalyticsExample() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto w-full"
      >
        <motion.h2
            custom={0} variants={sectionVariant} initial="hidden" animate="visible"
            className="text-3xl md:text-5xl font-bold mb-8 text-center"
        >
           Example: <span className="text-cyan-400">AI for Lead Scoring</span>
        </motion.h2>

        {/* Prompt Section */}
        <motion.div
             custom={1} variants={sectionVariant} initial="hidden" animate="visible"
             className="mb-10"
        >
            <div className="flex items-center justify-center space-x-2 mb-4">
                <Terminal className="w-7 h-7 text-green-400"/>
                <h3 className="text-2xl font-semibold text-gray-200 text-center">Example Prompt to AI</h3>
            </div>
             <div className="bg-gray-900/70 p-4 rounded-lg text-gray-200 text-sm md:text-base border border-gray-700 shadow-lg">
                <pre className="whitespace-pre-wrap break-words font-mono">
                    <code>
                      <span className="block text-gray-400 italic">{introPart.trim()}</span>
                      <span className="block mt-2 p-1.5 mb-1.5 bg-blue-900/30 rounded border border-blue-700/50 text-blue-300">{rolePart.trim()}</span>
                      <span className="block p-1.5 mb-1.5 bg-purple-900/30 rounded border border-purple-700/50 text-purple-300">{inputPart.trim()}</span>
                      <span className="block p-1.5 mb-1.5 bg-green-900/30 rounded border border-green-700/50 text-green-300">{taskPart.trim()}</span>
                      <span className="block p-1.5 bg-orange-900/30 rounded border border-orange-700/50 text-orange-300">{outputPart.trim()}</span>
                    </code>
                </pre>
             </div>
        </motion.div>

        <ArrowDown className="w-8 h-8 text-gray-500 mx-auto mb-4 animate-bounce"/>
      </motion.div>
    </div>
  )
}