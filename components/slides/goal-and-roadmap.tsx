"use client"

import { motion } from "framer-motion"
import { Database, Cpu, Wand, Target, UserCheck, Forward } from "lucide-react" // Wand for demystify, CPU as alternative

const roadmapItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 + 0.5, duration: 0.5, ease: "easeOut" },
  }),
};

const arrowVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 0.6,
      transition: { delay: i * 0.3 + 0.65, duration: 0.4 },
    }),
}

export default function GoalAndRoadmap() {
  const roadmapItems = [
    { icon: Database, label: "The Data Problem", color: "text-red-400" },
    { icon: Wand, label: "Demystifying AI", color: "text-purple-400", highlight: true }, // Highlight this one
    { icon: Cpu, label: "AI in Marketing", color: "text-cyan-400" },
    { icon: Target, label: "The Benefits", color: "text-green-400" },
    { icon: UserCheck, label: "Realities & Your Role", color: "text-yellow-400" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto w-full text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Goal Today</h2>
         <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          To cut through the noise and understand how AI practically helps automate marketing data tasks. No excessive jargon, promise!
         </p>

        {/* Roadmap Flow */}
        <div className="flex flex-col md:flex-row items-stretch justify-center space-y-4 md:space-y-0 md:space-x-0">
          {roadmapItems.map((item, i) => (
            <>
              <motion.div
                key={item.label}
                custom={i}
                variants={roadmapItemVariants}
                initial="hidden"
                animate="visible"
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md w-full md:w-40 h-auto md:h-40 relative transition-all duration-300
                            ${item.highlight
                              ? 'bg-purple-600/30 border-2 border-purple-400 scale-105'
                              : 'bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50'}`}
              >
                <item.icon className={`w-10 h-10 mb-2 ${item.highlight ? 'text-purple-300' : item.color}`} />
                <span className={`font-semibold text-center ${item.highlight ? 'text-white' : 'text-gray-200'}`}>
                  {item.label}
                </span>
                {item.highlight && (
                    <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-purple-500 text-white text-xs font-bold rounded-full animate-pulse">
                        FOCUS
                    </div>
                )}
              </motion.div>
              {i < roadmapItems.length - 1 && (
                 <motion.div
                   custom={i}
                   variants={arrowVariants}
                   initial="hidden"
                   animate="visible"
                   className="flex items-center justify-center" // Center arrow vertically/horizontally
                 >
                  <Forward className="w-6 h-6 md:w-8 md:h-8 text-gray-500 mx-2 my-2 md:my-0 transform md:rotate-0 rotate-90" />
                </motion.div>
              )}
            </>
          ))}
        </div>
      </motion.div>
    </div>
  )
}