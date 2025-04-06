"use client"

import { motion } from "framer-motion"
import { DatabaseBackup, TestTubeDiagonal, Combine, BarChartHorizontalBig, Play, ArrowRight, Clock, AlertTriangle, BarChart4 } from "lucide-react"

const flowStepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 + 0.5, duration: 0.5, ease: "easeOut" },
  }),
};

const problemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 2.0, duration: 0.4, type: "spring", stiffness: 100 },
  },
};

export default function ChallengeManualStruggle() {
  const steps = [
    { icon: DatabaseBackup, label: "Collect" },
    { icon: TestTubeDiagonal, label: "Clean" },
    { icon: Combine, label: "Integrate" },
    { icon: BarChartHorizontalBig, label: "Analyze" },
    { icon: Play, label: "Act?" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto w-full text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12">The Manual Marketing Data Struggle</h2>

        {/* Flow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
          {steps.map((step, i) => (
            <>
              <motion.div
                key={step.label}
                custom={i}
                variants={flowStepVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center p-4 bg-gray-800/50 border border-gray-700 rounded-lg shadow-md w-32 h-32 justify-center"
              >
                <step.icon className="w-10 h-10 text-cyan-400 mb-2" />
                <span className="font-semibold text-gray-200">{step.label}</span>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div
                  custom={i}
                  variants={flowStepVariants}
                   initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.3 + 0.65 }} // Delay arrow slightly after box
                  className="hidden md:block" // Hide arrow on mobile stack
                 >
                  <ArrowRight className="w-8 h-8 text-gray-500 mx-2" />
                 </motion.div>
              )}
            </>
          ))}
        </div>

         {/* Problem Keywords */}
        <motion.div
            variants={problemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
            <div className="flex items-center space-x-2 bg-red-900/30 border border-red-700 text-red-300 px-4 py-2 rounded-full text-lg shadow">
                <Clock size={20} />
                <span>Time Consuming</span>
            </div>
            <div className="flex items-center space-x-2 bg-yellow-900/30 border border-yellow-600 text-yellow-300 px-4 py-2 rounded-full text-lg shadow">
                <AlertTriangle size={20} />
                <span>Error-Prone</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-900/30 border border-purple-700 text-purple-300 px-4 py-2 rounded-full text-lg shadow">
                <BarChart4 size={20} /> {/* Using different chart icon */}
                <span>Insights Delayed</span>
            </div>
        </motion.div>

      </motion.div>
    </div>
  )
}