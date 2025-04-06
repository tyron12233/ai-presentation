"use client"

import { motion } from "framer-motion"
// Using relevant icons. Lucide doesn't have Facebook, using Link as placeholder.
import { Brain, MessageCircleQuestion, Github, Linkedin, Instagram, Link as LinkIcon } from "lucide-react"

// Animation Variants
const titleVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.8 } }
};

const subtitleVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 1.2 } }
};

const socialContainerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 1.5 } }
}

const socialItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};


// Social Links Data
const socials = [
  { name: "Instagram", icon: Instagram, handle: "@tyronscott_", url: "https://www.instagram.com/tyronscott_", color: "text-pink-400 hover:text-pink-300" },
  { name: "Facebook", icon: LinkIcon, handle: "Tyron Scott Lucena", url: "https://www.facebook.com/tyronscott0/", color: "text-blue-500 hover:text-blue-400" }, // Using LinkIcon for FB
  { name: "GitHub", icon: Github, handle: "@tyron12233", url: "https://github.com/tyron12233", color: "text-gray-300 hover:text-white" },
  { name: "LinkedIn", icon: Linkedin, handle: "Tyron Scott", url: "https://www.linkedin.com/in/tyronscott/", color: "text-blue-400 hover:text-blue-300" },
];


export default function Slide20Enhanced() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full px-8 md:px-16 overflow-hidden">
       {/* Animated Background Layers (Subtle version) */}
       <div className="absolute inset-0 z-0">
         <motion.div
           className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-cyan-900/40 via-transparent to-transparent rounded-full"
           animate={{ scale: [1, 1.05, 1], x: [-20, 0, -20] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear", repeatType:"mirror" }}
           style={{ filter: 'blur(60px)'}}
         />
         <motion.div
           className="absolute bottom-0 right-0 w-2/5 h-2/5 bg-gradient-to-tl from-purple-900/40 via-transparent to-transparent rounded-full"
           animate={{ scale: [1, 0.95, 1], y: [10, -10, 10] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear", repeatType:"mirror" }}
           style={{ filter: 'blur(50px)'}}
         />
      </div>

       {/* Main Content */}
       <div className="relative z-10 flex flex-col items-center justify-between h-full w-full max-w-5xl py-16"> {/* Use flex-col justify-between */}

            {/* Top Section: Thank You & Questions */}
            <div className="text-center">
                 <motion.div
                     initial={{ scale: 0.8, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
                     className="flex justify-center mb-5"
                 >
                    {/* You can use Brain or maybe a simpler 'Check' or 'Sparkle' icon */}
                    <Brain className="w-16 h-16 md:w-20 md:h-20 text-cyan-400 drop-shadow-md" />
                 </motion.div>

                 <motion.h2
                    variants={titleVariant} initial="hidden" animate="visible"
                    className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                 >
                    Thank You
                 </motion.h2>

                 <motion.p
                     variants={subtitleVariant} initial="hidden" animate="visible"
                     className="text-3xl md:text-4xl text-gray-300 flex items-center justify-center space-x-3"
                 >
                    <span>Questions?</span>
                     <MessageCircleQuestion className="w-8 h-8 md:w-10 md:h-10 text-purple-400 inline-block animate-pulse" />
                 </motion.p>
            </div>

            {/* Bottom Section: Socials */}
             <motion.div
                 className="w-full mt-16" // Add margin top
                 variants={socialContainerVariant}
                 initial="hidden"
                 animate="visible"
             >
                 <p className="text-center text-lg text-gray-400 mb-5">Let's Connect!</p>
                 <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-10">
                     {socials.map((social) => (
                         <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={socialItemVariant}
                            whileHover={{ y: -3, scale: 1.05 }}
                            className={`flex items-center space-x-2 ${social.color} transition-colors duration-200 group`}
                         >
                             <social.icon className="w-6 h-6 md:w-7 md:h-7"/>
                             <span className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-200">{social.handle}</span>
                         </motion.a>
                     ))}
                 </div>
            </motion.div>

       </div>
    </div>
  )
}