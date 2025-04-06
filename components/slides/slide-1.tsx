"use client"

import { motion } from "framer-motion"
// Adding more icons to potentially animate around the brain
import { Brain, Code, Database, Lightbulb } from "lucide-react"

// Variants for the main title letters (more dynamic)
const letterVariant = {
  hidden: { opacity: 0, y: -50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.06 + 0.8, // Stagger + longer initial delay after background appears
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
}

// Variants for subtitle elements
const subtitleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 1.8 }, // Delay after title animation finishes
  },
}

// Variants for the central icon group elements
const iconGroupVariant = {
     hidden: { opacity: 0, scale: 0.5 },
     visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.3 } // Appears relatively early
     }
}

export default function Slide1Enhanced() {
  const title = "Demystifying AI";
  const subtitle = "Pulling back the curtain on artificial intelligence and its role in data automation";

  return (
    <div className="relative flex flex-col items-center justify-center h-full p-8 overflow-hidden"> {/* Added relative, overflow-hidden */}

      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1 - Large slow rotating blob */}
         <motion.div
           className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-tr from-cyan-900/50 via-transparent to-transparent rounded-full"
           animate={{ rotate: 360, scale: [1, 1.1, 1] }}
           transition={{ duration: 45, repeat: Infinity, ease: "linear", repeatType:"mirror" }}
           style={{ filter: 'blur(80px)'}} // Heavy blur
         />
         {/* Layer 2 - Smaller faster blob */}
         <motion.div
           className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-purple-900/50 via-transparent to-transparent rounded-full"
           animate={{ rotate: -360, scale: [1, 0.9, 1] }}
           transition={{ duration: 35, repeat: Infinity, ease: "linear", repeatType:"mirror" }}
           style={{ filter: 'blur(60px)'}}
         />
          {/* Layer 3 - Subtle gradient overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/10 to-purple-900/20"/>
      </div>


      {/* Main Content (Higher z-index) */}
      <motion.div
          className="relative z-10 text-center flex flex-col items-center"
          initial="hidden"
          animate="visible" // Trigger descendant animations
      >
        {/* Icon Group */}
        <motion.div
           variants={iconGroupVariant}
           className="relative flex justify-center items-center mb-6 w-32 h-32 md:w-40 md:h-40" // Container for positioning orbiting icons
        >
            {/* Central Brain Icon with Pulse */}
           <motion.div
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
           >
               <Brain className="w-20 h-20 md:w-24 md:h-24 text-cyan-300 drop-shadow-lg" strokeWidth={1.5}/>
           </motion.div>

            {/* Orbiting/Appearing Secondary Icons */}
            {[Code, Database, Lightbulb].map((Icon, i) => (
                <motion.div
                    key={i}
                    className="absolute text-purple-400/70"
                    initial={{ opacity: 0, scale: 0}}
                    animate={{
                        opacity: [0, 0.7, 0.7, 0],
                        scale: 1,
                        // Position icons around the center - adjust values as needed
                        x: Math.cos((i / 3) * 2 * Math.PI + Math.PI/6) * 60, // 60px radius
                        y: Math.sin((i / 3) * 2 * Math.PI + Math.PI/6) * 60,
                    }}
                    transition={{
                        delay: 0.8 + i * 1.5, // Stagger appearance/fade
                        duration: 4, // Duration of fade in/out loop segment
                        repeat: Infinity,
                        ease: "linear"
                     }}
                >
                    <Icon size={i === 1 ? 24 : 28} /> {/* Vary sizes slightly */}
                 </motion.div>
            ))}
        </motion.div>

        {/* Animated Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-md flex justify-center flex-wrap">
           {title.split("").map((letter, index) => (
             <motion.span
               key={index}
               custom={index}
               variants={letterVariant}
               className="inline-block" // Needed for transforms
               style={{ marginRight: letter === " " ? "0.25em" : "0" }}
             >
               {letter === " " ? "\u00A0" : letter}
             </motion.span>
           ))}
        </h1>

        {/* Subtitle */}
        <motion.p
            variants={subtitleVariant}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
            {subtitle}
        </motion.p>
      </motion.div>
    </div>
  )
}