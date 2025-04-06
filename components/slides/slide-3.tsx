"use client";

import { motion } from "framer-motion";
// Import icons for list items
import {
  BrainCircuit,
  X,
  UserX,
  Target,
  Wand2, // Icons for 'IS NOT'
  Wrench,
  BarChart2,
  ScanLine, // Icons for 'IS'
} from "lucide-react";

// Animation variants for list items
const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Reusable List Item Component
const InfoListItem = (
  {
    icon: Icon,
    text,
    iconColor = "text-gray-400",
  }: {
    icon: React.ElementType;
    text: string;
    iconColor?: string;
  } = {
    icon: UserX,
    text: "Default Text",
    iconColor: "text-gray-400",
  }
) => (
  <motion.li variants={listItemVariants} className="flex items-start space-x-3">
    <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-1`} />
    <span className="text-lg text-gray-300">{text}</span>
  </motion.li>
);

export default function Slide3Enhanced() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto w-full" // Slightly wider max-width
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          AI: Myth vs. Reality
          {/* Changed title slightly */}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* --- AI is NOT Card --- */}
          <motion.div
            initial={{ x: -30, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            className="bg-gradient-to-br from-gray-800/60 via-red-900/10 to-gray-800/60 p-6 rounded-xl backdrop-blur-sm border border-red-500/20 shadow-lg"
            // Added gradient, red border, hover effect, shadow
          >
            <div className="flex items-center mb-5">
              <X className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-semibold text-red-300">
                AI is NOT...
              </h3>
            </div>
            <motion.ul
              className="space-y-4"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.15, delayChildren: 0.6 }} // Stagger list items
            >
              <InfoListItem
                icon={UserX}
                text="Conscious or 'thinking' like humans"
                iconColor="text-red-400/80"
              />
              <InfoListItem
                icon={Target}
                text="Truly understanding or having intentions"
                iconColor="text-red-400/80"
              />
              <InfoListItem
                icon={Wand2}
                text="A magical black box with unlimited power"
                iconColor="text-red-400/80"
              />
            </motion.ul>
          </motion.div>

          {/* --- AI IS Card --- */}
          <motion.div
            initial={{ x: 30, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            className="bg-gradient-to-br from-gray-800/60 via-cyan-900/20 to-gray-800/60 p-6 rounded-xl backdrop-blur-sm border border-cyan-500/30 shadow-lg"
            // Added gradient, cyan border, hover effect, shadow
          >
            <div className="flex items-center mb-5">
              <BrainCircuit className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-semibold text-cyan-300">AI IS...</h3>
            </div>
            <motion.ul
              className="space-y-4"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.15, delayChildren: 0.8 }} // Stagger list items
            >
              <InfoListItem
                icon={Wrench}
                text="A sophisticated tool for specific tasks"
                iconColor="text-cyan-400/80"
              />
              <InfoListItem
                icon={BarChart2}
                text="Fundamentally based on statistics & math"
                iconColor="text-cyan-400/80"
              />
              <InfoListItem
                icon={ScanLine}
                text="A high-powered pattern recognition engine"
                iconColor="text-cyan-400/80"
              />
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
