"use client"

import { motion } from "framer-motion"
import { Cog, Zap, BrainCircuit } from "lucide-react" // Zap for boost, Brain for AI

export default function IntroducingSolutionAI() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto w-full"
      >
        {/* Animated Graphic */}
        <div className="relative h-48 md:h-64 flex items-center justify-center mb-10">
            {/* Basic Automation Gears */}
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute flex"
             >
                <Cog className="w-16 h-16 md:w-24 md:h-24 text-gray-500 animate-spin" style={{ animationDuration: '5s' }}/>
                <Cog className="w-12 h-12 md:w-16 md:h-16 text-gray-500 animate-spin-reverse relative -left-4 top-4" style={{ animationDuration: '4s' }}/>
            </motion.div>

             {/* AI Supercharge Elements */}
            <motion.div
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                 className="absolute z-10"
            >
                <BrainCircuit className="w-20 h-20 md:w-28 md:h-28 text-cyan-400 drop-shadow-lg" />
             </motion.div>
              <motion.div
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                 transition={{ delay: 1.5, duration: 0.8, ease: "circOut" }}
                 className="absolute z-20"
            >
                <Zap className="w-16 h-16 md:w-20 md:h-20 text-yellow-400" />
             </motion.div>

        </div>

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Automation Helps... <span className="text-cyan-400">AI Supercharges It.</span>
        </motion.h2>

      </motion.div>
    </div>
  )
}