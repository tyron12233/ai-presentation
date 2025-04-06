"use client"

import { motion } from "framer-motion"
// Import specific icons for each limitation
import { AlertTriangle, Puzzle, EyeOff, UserCheck } from "lucide-react"

// Animation variants for the cards
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15 + 0.3, // Stagger delay + initial delay
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Reusable Limitation Card Component
const LimitationCard = ({ icon: Icon, title, description, index }
  : {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    index: number;
  } // Added index prop for staggered animation
) => (
   <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(234, 179, 8, 0.15)" }} // Subtle lift and glow on hover
      className="bg-gradient-to-br from-gray-800/60 via-amber-900/10 to-gray-800/60 p-6 rounded-xl backdrop-blur-sm border border-amber-500/20 shadow-lg flex flex-col text-center h-full" // Added h-full for equal height
    >
       <div className="flex justify-center mb-4">
        {/* Icon specific to the limitation */}
         <Icon className="w-10 h-10 text-amber-400" />
       </div>
      <h3 className="text-xl font-semibold mb-3 text-amber-300">{title}</h3>
      <p className="text-md text-gray-300 leading-relaxed flex-grow">{description}</p> {/* flex-grow pushes text down if needed */}
  </motion.div>
);


export default function LimitationsOfAiEnhanced() {

  const limitations = [
    {
      icon: AlertTriangle, // Representing caution
      title: "Data Dependency",
      description: "AI is only as good as its training data. Biased or incomplete data leads to flawed, unfair, or inaccurate outputs ('Garbage In, Garbage Out')."
    },
    {
      icon: Puzzle, // Representing missing pieces / common sense
      title: "No Common Sense",
      description: "AI lacks true understanding and real-world reasoning. It excels at patterns but can't generalize creatively or grasp context like humans."
    },
    {
      icon: EyeOff, // Representing blindness to context
      title: "Context Blindness",
      description: "Struggles with nuance, sarcasm, and implicit meanings that humans navigate easily, often leading to misinterpretations."
    },
    {
      icon: UserCheck, // Representing need for human validation
      title: "Needs Human Oversight",
      description: "It's a powerful tool, not a replacement for human judgment. Critical decisions require validation, especially in complex or novel situations."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="flex flex-col items-center mb-10 text-center">
           <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 text-amber-400 mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold text-amber-300">AI Reality Check: Limitations</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl">While powerful, AI isn't magic. Understanding its limits is key.</p>
        </div>

        {/* Grid for Limitation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
           {limitations.map((limitation, index) => (
             <LimitationCard
               key={limitation.title}
               icon={limitation.icon}
               title={limitation.title}
               description={limitation.description}
               index={index} // Pass index for stagger animation delay
             />
           ))}
        </div>
      </motion.div>
    </div>
  )
}