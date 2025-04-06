"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Choose a style you like. More options: https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Example style


export default function OutputSample() {
  // Keep the raw JSON string for parsing/display
  const jsonString = `{
  "report_accuracy": 10,
  "warn_recommended": false,
  "report_validity": false,
  "user_ban_recommended": false,
  "ban_duration": "0",
  "reported_user": "e004f854-af52-4d3c-92e0-d3ed2102971d",
  "reporting_user": "hmp",
  "analysis": "The provided conversation appears to be a harmless exchange between two users, discussing their ages, gender, and university programs. There is no evidence of hate speech, bullying, harassment, discrimination, or any violation of the platform's terms and conditions. The report seems to be without merit.",
  "message_for_reported_user": "N/A",
  "message_for_reporting_user": "Your report has been reviewed, and after careful consideration, we have found insufficient evidence to support your claim. Please ensure future reports are based on clear violations of our community guidelines."
}`;

  // Optional: Parse and re-stringify for guaranteed consistent formatting if needed,
  // but we can pass the raw string directly to the highlighter.
  // const formattedJson = JSON.stringify(JSON.parse(jsonString), null, 2);

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          AI Moderation Output (Sample)
        </h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white/5 p-6 rounded-xl backdrop-blur-sm shadow-lg"
        >
          <p className="text-lg text-gray-300 mb-4">
            The AI responds in the requested strict JSON format, providing its analysis, validity assessment, and prepared messages.
          </p>

          {/* Syntax Highlighter Component */}
          <div className="text-sm md:text-base"> {/* Control base font size */}
            <SyntaxHighlighter
              language="json"
              style={vscDarkPlus} // Apply the imported theme
              wrapLines={true} // Enable line wrapping calculation
              customStyle={{
                  borderRadius: '0.5rem', // Match rounded corners
                  padding: '1rem',       // Add padding
                  backgroundColor: 'rgba(17, 24, 39, 0.8)', // Example: Slightly transparent dark bg (Tailwind bg-gray-900/80)
              }}
              // Apply styles to each line to force wrapping
              lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
            >
              {jsonString}
            </SyntaxHighlighter>
          </div>

          <p className="text-md text-gray-400 mt-4">
            Key outputs include the <code className="text-orange-400 bg-gray-700 px-1 rounded">analysis</code> string and the relevant <code className="text-orange-400 bg-gray-700 px-1 rounded">message_for_reporting_user</code>.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}