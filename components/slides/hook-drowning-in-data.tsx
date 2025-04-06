"use client"

import { motion } from "framer-motion"
import { BarChartBig, HandCoins, Heart, Users, Mail, ShoppingBag, MessageSquare } from "lucide-react" // More specific icons

// Icon variants for floating/overwhelming effect
const dataIconVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: [0, 0.6, 0.6, 0.4, 0], // Fade in and out
    scale: [0.5, 1, 1.1, 0.8, 0.5], // Pulse effect
    x: Math.random() * 300 - 150,
    y: Math.random() * 200 - 100,
    rotate: Math.random() * 60 - 30,
    transition: {
      delay: i * 0.2,
      duration: 3 + Math.random() * 3,
      repeat: Infinity,
      repeatType: "reverse" as "reverse",
      ease: "easeInOut",
    },
  }),
};

const dataSources = [
    { icon: BarChartBig, name: "Clicks", color: "text-blue-400" },
    { icon: Heart, name: "Likes", color: "text-pink-400" },
    { icon: HandCoins, name: "Leads", color: "text-yellow-400" },
    { icon: ShoppingBag, name: "Sales", color: "text-green-400" },
    { icon: MessageSquare, name: "Feedback", color: "text-purple-400" },
    { icon: Users, name: "CRM Data", color: "text-orange-400" },
    { icon: Mail, name: "Emails", color: "text-red-400" },
];

export default function HookDrowningInData() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full px-8 md:px-16 text-center overflow-hidden">
      {/* Overwhelming Data Icons Animation */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-80 blur-sm">
        {dataSources.map((source, i) => (
          <motion.div
            key={source.name}
            custom={i}
            variants={dataIconVariant}
            initial="hidden"
            animate="visible"
            className="absolute" // Positioning handled by animation variants
            style={{ top: '50%', left: '50%'}} // Start animation from center
          >
            <source.icon className={`w-16 h-16 ${source.color}`} />
          </motion.div>
        ))}
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-red-400 animate-pulse">
          Drowning in Data?
        </h2>
        <p className="text-xl md:text-2xl text-gray-200">
            Sound familiar?{" "}
            <span className="font-semibold text-cyan-300">Clicks</span>,{" "}
            <span className="font-semibold text-pink-300">Likes</span>,{" "}
            <span className="font-semibold text-yellow-300">Leads</span>,{" "}
            <span className="font-semibold text-green-300">Sales</span>,{" "}
            <span className="font-semibold text-purple-300">Feedback</span>...
        </p>
      </motion.div>
    </div>
  )
}