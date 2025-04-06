"use client"

import { motion } from "framer-motion"
// Import icons for demographics, data types, and benefits
import { User, Users, MapPin, Cake, Database, MousePointerClick, ShoppingCart, Target, TrendingUp, Sparkles } from "lucide-react"
import { useMemo } from "react" // For generating random dot positions

// Variants for list items or descriptive points
const pointVariant = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

// Variants for data icons flowing in
const dataFlowVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
        opacity: 0.6,
        x: 0,
        transition: { delay: i * 0.2 + 0.8, duration: 0.6, ease: "easeOut" }
    })
};

// Function to generate random positions for dots (AI viz)
const generateDots = (numDots: number, viewBoxSize: number) => {
  return Array.from({ length: numDots }).map((_, i) => ({
    id: i,
    // Random initial position spread across the box
    ix: Math.random() * viewBoxSize * 0.8 + viewBoxSize * 0.1,
    iy: Math.random() * viewBoxSize * 0.8 + viewBoxSize * 0.1,
    // Target positions forming clusters (example: 3 clusters)
    tx: viewBoxSize * (0.25 + (i % 3) * 0.25 + (Math.random() - 0.5) * 0.15),
    ty: viewBoxSize * (0.50 + (Math.random() - 0.5) * 0.4),
    // Assign color based on cluster
    color: ["#34d399", "#60a5fa", "#f87171"][(i % 3)], // emerald, blue, red
  }));
};


export default function AutomatedCustomerSegmentationEnhanced() {

  const viewBoxSize = 150; // Viewbox size for the AI animation SVG
  // useMemo to prevent recalculating random positions on every render
  const dots = useMemo(() => generateDots(60, viewBoxSize), [viewBoxSize]);

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto w-full" // Wider max-width
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
           From Broad Groups to Precise Clusters <span className="text-cyan-400">with AI</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8 items-stretch"> {/* Ensure columns stretch */}

          {/* --- Basic Segmentation Card --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/50 to-amber-900/10 p-6 rounded-xl backdrop-blur-sm border border-amber-500/20 flex flex-col" // Use flex-col for alignment
          >
            <h3 className="text-2xl font-semibold mb-4 text-amber-400 text-center">Traditional Segments</h3>
            {/* Visualization: Simple demographic icons */}
            <div className="flex-grow flex items-center justify-center mb-4 space-x-6 opacity-70 h-32">
               <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{delay: 0.4}} className="flex flex-col items-center">
                   <User size={36} className="text-amber-300"/>
                   <span className="text-xs text-amber-400 mt-1">Gender</span>
               </motion.div>
                <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{delay: 0.5}} className="flex flex-col items-center">
                   <Cake size={36} className="text-amber-300"/>
                   <span className="text-xs text-amber-400 mt-1">Age Group</span>
                </motion.div>
                <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{delay: 0.6}} className="flex flex-col items-center">
                   <MapPin size={36} className="text-amber-300"/>
                   <span className="text-xs text-amber-400 mt-1">Location</span>
                </motion.div>
            </div>
            <motion.ul
                 className="space-y-3 mt-auto" // Push text to bottom if needed
                 initial="hidden"
                 animate="visible"
                 transition={{ staggerChildren: 0.15, delayChildren: 0.7 }}
             >
               <motion.li variants={pointVariant} className="flex items-start space-x-2">
                    <span className="text-amber-400 font-bold mt-1">•</span>
                    <span className="text-lg text-gray-300">Relies on broad, static categories (demographics).</span>
               </motion.li>
                <motion.li variants={pointVariant} className="flex items-start space-x-2">
                    <span className="text-amber-400 font-bold mt-1">•</span>
                    <span className="text-lg text-gray-300">Often misses subtle behavioral nuances and purchase intent.</span>
               </motion.li>
            </motion.ul>
          </motion.div>

          {/* --- AI Segmentation Card --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/50 to-cyan-900/20 p-6 rounded-xl backdrop-blur-sm border border-cyan-500/30 flex flex-col relative overflow-hidden" // Added relative, overflow-hidden
          >
            {/* Data Icons flowing in */}
             <div className="absolute top-4 left-4 flex flex-col space-y-2 z-0 opacity-50">
                {[Database, MousePointerClick, ShoppingCart].map((Icon, i) => (
                    <motion.div key={i} custom={i} variants={dataFlowVariant} initial="hidden" animate="visible">
                        <Icon size={20} className="text-cyan-600"/>
                    </motion.div>
                ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-cyan-300 text-center relative z-10">AI-Powered Segments</h3>
             {/* Visualization: Animated dots forming clusters */}
            <div className="flex-grow flex items-center justify-center mb-4 h-32 relative z-10">
                <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{delay: 0.8}}>
                     {dots.map(dot => (
                       <motion.circle
                         key={dot.id}
                         cx={dot.ix} // Start position x
                         cy={dot.iy} // Start position y
                         r="2.5" // Dot size
                         fill={dot.color}
                         fillOpacity={0.8}
                         animate={{ cx: dot.tx, cy: dot.ty }} // Animate to target position
                         transition={{
                           delay: 1.0 + Math.random() * 0.5, // Stagger animation start
                           duration: 1.5 + Math.random() * 1, // Vary duration
                           ease: "easeInOut",
                         }}
                       />
                     ))}
                   </motion.g>
                 </svg>
            </div>

            <motion.ul
                className="space-y-3 mt-auto relative z-10"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.15, delayChildren: 1.5 }} // Delay after animation
            >
              <motion.li variants={pointVariant} className="flex items-start space-x-2">
                  <Sparkles size={16} className="text-cyan-400 flex-shrink-0 mt-1.5"/>
                  <span className="text-lg text-gray-300">Analyzes behavior, transactions, engagement & more.</span>
               </motion.li>
               <motion.li variants={pointVariant} className="flex items-start space-x-2">
                   <Sparkles size={16} className="text-cyan-400 flex-shrink-0 mt-1.5"/>
                  <span className="text-lg text-gray-300">Uncovers <strong className="text-cyan-300">dynamic, nuanced</strong> groups (e.g., "High LTV," "Churn Risk").</span>
               </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        {/* --- Benefit Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 p-6 rounded-xl backdrop-blur-sm flex items-center justify-center space-x-6"
        >
           <TrendingUp className="w-10 h-10 text-green-400 flex-shrink-0"/>
           <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1 text-center md:text-left">The AI Advantage</h3>
              <p className="text-lg md:text-xl text-center md:text-left text-gray-200">
                More relevant messaging, targeted campaigns, and improved conversion rates.
              </p>
           </div>
             <Target className="w-10 h-10 text-pink-400 flex-shrink-0 hidden md:block"/> {/* Added another icon */}
        </motion.div>
      </motion.div>
    </div>
  )
}