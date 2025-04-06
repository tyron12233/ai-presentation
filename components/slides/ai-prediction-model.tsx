"use client"

import { motion } from "framer-motion"
import { Brain, Database, ArrowRight } from "lucide-react" // Icons for model/data

export default function AiPredictionModel() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="flex justify-center mb-4">
           <Brain className="w-16 h-16 text-purple-400" />
        </div>
         <h2 className="text-3xl md:text-5xl font-bold mb-6">
          How Does It Predict?
        </h2>

         <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 mb-10"
         >
          Those suggestions aren't magic. They come from a <strong className="text-purple-300">predictive model</strong> trained on massive amounts of text data. It learns patterns to guess what's likely to come next.
        </motion.p>

        {/* Simple Diagram */}
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 bg-white/5 p-6 rounded-xl backdrop-blur-sm shadow-lg border border-white/10 mb-10"
         >
            <div className="flex flex-col items-center text-center p-3 bg-gray-700/50 rounded-lg">
                <Database className="w-10 h-10 text-cyan-400 mb-2"/>
                <span className="font-semibold text-gray-200">Vast Text Data</span>
                <span className="text-xs text-gray-400">(Learns Patterns)</span>
            </div>
            <ArrowRight className="w-8 h-8 text-gray-500 hidden md:block transform md:rotate-0 rotate-90" /> {/* Arrow direction changes for mobile */}
             <div className="flex flex-col items-center text-center p-3 bg-gray-700/50 rounded-lg">
                <Brain className="w-10 h-10 text-purple-400 mb-2"/>
                <span className="font-semibold text-gray-200">Predictive Model</span>
                 <span className="text-xs text-gray-400">(Internal Logic)</span>
            </div>
             <ArrowRight className="w-8 h-8 text-gray-500 hidden md:block transform md:rotate-0 rotate-90" />
             <div className="flex flex-col items-center text-center p-3 bg-blue-800/50 rounded-lg">
                 {/* Placeholder for prediction output */}
                 <div className="flex space-x-1 mb-2">
                     <span className="w-5 h-5 bg-blue-500 rounded-sm"></span>
                     <span className="w-5 h-5 bg-blue-500/70 rounded-sm"></span>
                     <span className="w-5 h-5 bg-blue-500/40 rounded-sm"></span>
                 </div>
                <span className="font-semibold text-gray-200">Next Word(s)</span>
                 <span className="text-xs text-gray-400">(Prediction)</span>
            </div>
         </motion.div>

        <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-400 italic"
         >
           Think of keyboard suggestions as a <strong className="text-gray-200">"dumbed down"</strong> version of the predictive power used in more complex AI, like the one we use for moderation.
        </motion.p>

      </motion.div>
    </div>
  )
}