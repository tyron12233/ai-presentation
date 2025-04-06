"use client"

import { motion } from "framer-motion"
// Import icons for data sources, process, and benefits
import { Users, Globe, Share2, Megaphone, Mail, BrainCircuit, Database, ArrowRightLeft, Loader, Zap, Clock, Eye, UserCog } from "lucide-react"

// Animation variants
const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 + 0.2, duration: 0.5, ease: "easeOut" }
    })
};

const iconScatterVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
        opacity: 0.7,
        scale: 1,
        x: (Math.random() - 0.5) * 80, // Scatter range
        y: (Math.random() - 0.5) * 40,
        rotate: (Math.random() - 0.5) * 30,
        transition: { delay: i * 0.1 + 0.5, duration: 0.4, type: "spring", stiffness: 100 }
    })
};

const iconFlowVariant = {
     hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
        opacity: 0.8,
        x: 0,
        transition: { delay: i * 0.15 + 0.8, duration: 0.5, ease: "easeOut" }
    }),
    exit: { opacity: 0, x: 10, transition: { duration: 0.2 } }
}

const aiHubVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { delay: 1.5, type: "spring" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
}

const finalDbVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.5 } },
}

const benefitVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } }
};


export default function SmarterDataCollectionEnhanced() {

    const dataSources = [
        { icon: Users, label: "CRM" }, { icon: Globe, label: "Web Analytics" },
        { icon: Share2, label: "Social Media" }, { icon: Megaphone, label: "Ad Platforms" },
        { icon: Mail, label: "Email Marketing" }
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
                    AI for Smarter Data Collection & Integration
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8 items-stretch">

                    {/* --- The Manual Mess Card --- */}
                    <motion.div
                        custom={0} variants={cardVariant} initial="hidden" animate="visible"
                        className="bg-gradient-to-br from-gray-800/60 via-red-900/10 to-gray-800/60 p-6 rounded-xl backdrop-blur-sm border border-red-500/20 shadow-lg flex flex-col"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-red-300 text-center">The Manual Mess</h3>
                        {/* Visualization: Scattered data source icons */}
                        <div className="relative flex-grow flex items-center justify-center min-h-[150px] mb-4 overflow-hidden p-4">
                            {dataSources.map((source, i) => (
                                <motion.div
                                    key={`manual-${source.label}`}
                                    custom={i}
                                    variants={iconScatterVariant}
                                    className="absolute flex flex-col items-center"
                                >
                                    <source.icon className="w-8 h-8 text-red-400/70" />
                                    <span className="text-xs text-red-500/80 mt-1">{source.label}</span>
                                </motion.div>
                            ))}
                             {/* Optional: Slow loader icon */}
                             <motion.div initial={{opacity:0}} animate={{opacity: 0.5}} transition={{delay: 1.5}}>
                                <Loader className="w-10 h-10 text-red-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{animationDuration: '3s'}}/>
                             </motion.div>
                        </div>
                        <ul className="space-y-2 text-lg text-gray-300 list-disc list-inside">
                            <li>Data trapped in silos (CRM, Web, Social...).</li>
                            <li>Manual export/import is slow & error-prone.</li>
                            <li>Difficult to get a unified customer view.</li>
                        </ul>
                    </motion.div>

                    {/* --- AI Solution Card --- */}
                    <motion.div
                        custom={1} variants={cardVariant} initial="hidden" animate="visible"
                        className="bg-gradient-to-br from-gray-800/60 via-cyan-900/20 to-gray-800/60 p-6 rounded-xl backdrop-blur-sm border border-cyan-500/30 shadow-lg flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-300 text-center">The AI Solution</h3>
                        {/* Visualization: Data flows to AI hub -> Unified DB */}
                        <div className="relative flex-grow flex items-center justify-around w-full min-h-[150px] mb-4 p-4">
                             {/* Data Sources Flowing In */}
                             <div className="flex flex-col space-y-2 items-start">
                                {dataSources.slice(0, 3).map((source, i) => ( // Example slice
                                    <motion.div key={`ai-${source.label}`} custom={i} variants={iconFlowVariant} initial="hidden" animate="visible" exit="exit" className="flex items-center space-x-1">
                                       <source.icon className="w-5 h-5 text-cyan-400/80"/>
                                       <span className="text-xs text-cyan-500/90">{source.label}</span>
                                    </motion.div>
                                ))}
                             </div>

                             {/* AI Hub */}
                            <motion.div variants={aiHubVariant} initial="hidden" animate="visible" exit="exit" className="mx-4">
                                 <BrainCircuit className="w-16 h-16 text-cyan-300 drop-shadow-lg"/>
                             </motion.div>

                            {/* Unified Database Result */}
                            <motion.div variants={finalDbVariant} initial="hidden" animate="visible" className="flex flex-col items-center">
                                <Database className="w-12 h-12 text-green-400"/>
                                <span className="text-sm font-semibold text-green-300 mt-1">Unified View</span>
                            </motion.div>
                        </div>
                        <ul className="space-y-2 text-lg text-gray-300 list-disc list-inside text-left w-full">
                            <li>Intelligently connects to APIs & understands data.</li>
                            <li>Automates collection & integration in near real-time.</li>
                            <li>Creates a reliable, holistic customer profile.</li>
                        </ul>
                    </motion.div>
                </div>

                {/* --- Benefit Section --- */}
                <motion.div
                    variants={benefitVariant} initial="hidden" animate="visible"
                    className="bg-gradient-to-r from-green-600/10 via-cyan-600/10 to-purple-600/10 p-6 rounded-xl backdrop-blur-sm flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-6 border border-green-500/20"
                >
                    <Zap className="w-10 h-10 text-yellow-400 flex-shrink-0"/>
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-1 text-green-300">Key Benefit</h3>
                        <p className="text-lg md:text-xl text-gray-200">
                           Frees up valuable marketer time & provides a complete, actionable view of the customer journey.
                        </p>
                    </div>
                     <div className="flex space-x-3 text-gray-400">
                         <Clock className="w-8 h-8" />
                         <Eye className="w-8 h-8" />
                         <UserCog className="w-8 h-8" />
                     </div>
                </motion.div>
            </motion.div>
        </div>
    )
}