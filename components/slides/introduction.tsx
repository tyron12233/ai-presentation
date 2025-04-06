"use client"

import { motion } from "framer-motion"
// Using Lightbulb as the icon revealed behind the curtains, symbolizing understanding
import { Lightbulb } from "lucide-react"

export default function Introduction() {
  // Curtain Animation Variants
  const curtainVariants = {
    closed: { width: "50%" },
    open: {
      width: "0%",
      transition: { duration: 1.5, ease: [0.87, 0, 0.13, 1], delay: 0.5 }, // Added delay
    },
  };

  // Content Animation Variants (revealed behind curtains)
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 1.2 }, // Delay until curtains are mostly open
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full overflow-hidden"> {/* Added relative and overflow-hidden */}

      {/* Revealed Content (Behind Curtains) */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="z-10 flex flex-col items-center text-center px-8" // Ensure content is above default background but below curtains initially
      >
        <div className="flex justify-center mb-6">
           {/* Icon revealed after curtains open */}
           <Lightbulb className="w-16 h-16 md:w-20 md:h-20 text-yellow-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
          AI: Beyond the Hype
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Often feels like magic, right? Let's uncover how it actually works and how we can leverage it effectively.
          {/* Shortened & combined the original text */}
        </p>
      </motion.div>

      {/* Curtains */}
      {/* Left Curtain */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-800 via-purple-900 to-black z-20 shadow-2xl" // Dark purple gradient
        variants={curtainVariants}
        initial="closed"
        animate="open"
        // Style can be adjusted for different curtain looks (e.g., add texture bg image)
      />
      {/* Right Curtain */}
      <motion.div
        className="absolute top-0 right-0 h-full bg-gradient-to-l from-purple-800 via-purple-900 to-black z-20 shadow-2xl" // Mirrored gradient
        variants={curtainVariants}
        initial="closed"
        animate="open"
      />

    </div>
  )
}