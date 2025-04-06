"use client"

import { motion } from "framer-motion"
// Import icons for uncertainty, data, AI, prediction, and benefits
import {
    HelpCircle, Shuffle, BarChart2, BrainCircuit, TrendingUp, Target, Lightbulb, // Comparison Icons
    ClipboardCheck, Gauge, DollarSign, // Benefit Icons
    Rainbow
} from "lucide-react"

// Animation variants
const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 + 0.2, duration: 0.5, ease: "easeOut" }
    })
};

const pointVariant = { // For text points
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const svgPathVariant = { // For drawing lines
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut", delay: 1.0 }
    }
};

const dataPointVariant = { // For historical data points
    hidden: { opacity: 0, scale: 0},
    visible: (i: number) => ({
        opacity: 0.7,
        scale: 1,
        transition: { delay: i * 0.1 + 0.5, duration: 0.3 }
    })
}

const benefitVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } }
};


export default function PredictiveAnalyticsEnhanced() {

    const historicalDataPoints = [ // Example coordinates for SVG
        { cx: 20, cy: 75 }, { cx: 35, cy: 65 }, { cx: 50, cy: 70 },
        { cx: 65, cy: 60 }, { cx: 80, cy: 50 }
    ];

    return (
        <div className="flex flex-col items-center justify-center h-full px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto w-full" // Wider max-width
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
                   Moving from Guesswork to <span className="text-cyan-400">Predictive Insight</span> with AI
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8 items-stretch">

                    {/* --- Guessing What Works Card --- */}
                    <motion.div
                        custom={0} variants={cardVariant} initial="hidden" animate="visible"
                        className="bg-gradient-to-br from-gray-800/60 via-amber-900/10 to-gray-800/60 p-6 rounded-xl backdrop-blur-sm border border-amber-500/20 shadow-lg flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-amber-300 text-center">Navigating Uncertainty</h3>
                        {/* Visualization: Question marks / diverging paths */}
                         <div className="relative flex-grow flex items-center justify-center w-full min-h-[150px] mb-4 p-4">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                <HelpCircle className="w-20 h-20 text-amber-400/60 opacity-50" strokeWidth={1.5}/>
                            </motion.div>
                             <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}>
                                <Shuffle className="absolute top-1/3 left-1/4 w-10 h-10 text-amber-500/50 rotate-[-15deg]"/>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
                                 <HelpCircle className="absolute bottom-1/4 right-1/4 w-10 h-10 text-amber-500/50 rotate-[20deg]"/>
                            </motion.div>
                        </div>
                        <p className="text-lg text-gray-300 text-center leading-relaxed">
                            Traditional marketing often involves guesswork: Which leads convert? Where to allocate budget? What's the likely ROI?
                        </p>
                    </motion.div>

                    {/* --- AI Predicts Card --- */}
                     <motion.div
                        custom={1} variants={cardVariant} initial="hidden" animate="visible"
                        className="bg-gradient-to-br from-gray-800/60 via-cyan-900/20 to-gray-800/60 p-6 rounded-xl backdrop-blur-sm border border-cyan-500/30 shadow-lg flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-300 text-center">AI Predicts Success</h3>
                         {/* Visualization: Data -> AI -> Projected Trend -> Target */}
                         <div className="relative flex-grow flex flex-col items-center justify-center w-full min-h-[150px] mb-4 p-4">
                             <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{delay: 1.6}} className="absolute top-4 right-4">
                                 <Rainbow className="w-8 h-8 text-purple-400 opacity-70"/>
                             </motion.div>
                             <svg className="w-full h-full overflow-visible" viewBox="0 0 150 100">
                                 {/* Historical Data Points */}
                                 <g>
                                     {historicalDataPoints.map((point, i) => (
                                         <motion.circle
                                             key={`data-${i}`}
                                             custom={i}
                                             variants={dataPointVariant}
                                             initial="hidden"
                                             animate="visible"
                                             cx={point.cx}
                                             cy={point.cy}
                                             r="3"
                                             fill="#06b6d4" // cyan-500
                                             opacity="0.7"
                                         />
                                     ))}
                                 </g>
                                 {/* AI Processing Icon (Optional visual link) */}
                                  <motion.g initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 0.8}}>
                                      {/* <BrainCircuit x="85" y="30" width="20" height="20" className="text-purple-400 opacity-80"/> */}
                                  </motion.g>
                                 {/* Predictive Line */}
                                 <motion.path
                                     d="M 80 50 Q 100 40, 125 30" // Path from last data point towards target
                                     fill="none"
                                     stroke="url(#lineGradient)" // Use gradient for stroke
                                     strokeWidth="3"
                                     strokeLinecap="round"
                                     variants={svgPathVariant}
                                     initial="hidden"
                                     animate="visible"
                                 />
                                 {/* Target Icon */}
                                 <motion.g initial={{opacity: 0, scale: 0}} animate={{opacity:1, scale: 1}} transition={{delay: 2.0}}>
                                     <Target x="120" y="20" width="20" height="20" className="text-green-400"/>
                                 </motion.g>

                                 {/* Define Gradient for the line */}
                                 <defs>
                                     <linearGradient id="lineGradient" gradientTransform="rotate(90)">
                                         <stop offset="0%" stopColor="#22d3ee" /> {/* cyan-400 */}
                                         <stop offset="100%" stopColor="#34d399" /> {/* emerald-400 */}
                                     </linearGradient>
                                 </defs>
                             </svg>
                        </div>
                         <motion.ul
                             className="space-y-2 text-lg text-gray-300 list-none text-left w-full"
                             initial="hidden"
                             animate="visible"
                             transition={{ staggerChildren: 0.15, delayChildren: 0.6 }}
                        >
                           <motion.li variants={pointVariant} className="flex items-start space-x-2">
                               <Lightbulb size={18} className="text-cyan-400 mt-1 flex-shrink-0"/>
                               <span>Analyzes past data to forecast future outcomes.</span>
                           </motion.li>
                           <motion.li variants={pointVariant} className="flex items-start space-x-2">
                               <Lightbulb size={18} className="text-cyan-400 mt-1 flex-shrink-0"/>
                               <span>Scores leads, predicts churn, optimizes budgets & ROI.</span>
                           </motion.li>
                        </motion.ul>
                    </motion.div>
                </div>

                {/* --- Benefit Section --- */}
                <motion.div
                    variants={benefitVariant} initial="hidden" animate="visible"
                    className="bg-gradient-to-r from-cyan-600/10 via-green-600/10 to-blue-600/10 p-6 rounded-xl backdrop-blur-sm flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-6 border border-cyan-500/20"
                >
                     <div className="flex space-x-4 text-blue-400 flex-shrink-0">
                         <ClipboardCheck className="w-10 h-10" />
                         <Gauge className="w-10 h-10" />
                         <DollarSign className="w-10 h-10" />
                     </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-1 text-blue-300">The Predictive Advantage</h3>
                        <p className="text-lg md:text-xl text-gray-200">
                           Shift from reactive marketing to <strong className="text-white">proactive strategies</strong>, improving <strong className="text-white">efficiency</strong> and maximizing <strong className="text-white">ROI</strong>.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}