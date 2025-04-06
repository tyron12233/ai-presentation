"use client"

import { motion } from "framer-motion"
import { User, Star, Code, Store, MessageSquare, Award, Briefcase } from "lucide-react" // Added Briefcase icon

// Animation variants for list items / cards
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

// Project Card Component (Internal - remains the same)
const ProjectCard = ({ icon: Icon, title, description, stars, iconColor }

    : {
        icon: React.ElementType;
        title: string;
        description: string;
        stars?: string;
        iconColor?: string;
    } = {
        icon: MessageSquare,
        title: "AnimoChat",
        description: "The platform we're discussing today!",
        stars: "0",
        iconColor: "text-purple-400",
    }
) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    className={`bg-white/5 p-4 rounded-lg border border-white/10 transition-colors duration-200 flex items-start space-x-3`}
  >
    <Icon className={`w-6 h-6 ${iconColor} flex-shrink-0 mt-1`} />
    <div>
      <h4 className="font-semibold text-gray-100">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    {stars && (
      <span className="ml-auto flex items-center text-sm text-yellow-400 bg-yellow-900/30 px-2 py-0.5 rounded-full flex-shrink-0">
        <Star className="w-4 h-4 mr-1" /> {stars}+
      </span>
    )}
  </motion.div>
);


export default function SpeakerIntroduction() {
  return (
    <div className="flex items-center justify-center h-full p-8 md:p-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl w-full items-center">

        {/* Left Column: Intro Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
           {/* Optional: Replace User icon with an image */}
           {/* <img src="/path/to/your-photo.jpg" alt="Tyron Scott Lucena" className="w-24 h-24 rounded-full mb-4 shadow-lg" /> */}
           <User className="w-20 h-20 text-cyan-400 mb-4 md:mb-6" />

          <h2 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Hello! I'm Tyron Scott Lucena {/* <--- Name Updated */}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-md mx-auto md:mx-0">
            Excited to share how I'm using AI for moderating AnimoChat today.
          </p>

          {/* Organizational Roles Badges */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full shadow-md"
            >
              <Award className="w-6 h-6 flex-shrink-0" />
              <span className="text-md font-medium">Campus DEVCON Ambassador 2024</span>
            </motion.div>

            {/* --- Added JPCS Role --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }} // Slightly later delay
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full shadow-md"
            >
              <Briefcase className="w-6 h-6 flex-shrink-0" />
              <span className="text-md font-medium">Executive Auditor, JPCS - DLSL</span>
            </motion.div>
             {/* --- End Added JPCS Role --- */}
          </div>
        </motion.div>

        {/* Right Column: Projects (Remains the same) */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
          className="space-y-4"
        >
          <motion.h3
             variants={itemVariants}
             className="text-2xl font-semibold text-gray-200 mb-4 text-center md:text-left"
          >
             Developer behind:
          </motion.h3>

          <ProjectCard
            icon={MessageSquare}
            title="AnimoChat"
            description="The platform we're discussing today!"
            iconColor="text-purple-400"
          />
          <ProjectCard
            icon={Code}
            title="CodeAssist"
            description="Open Source Android IDE (Java/Kotlin)"
            stars="700"
            iconColor="text-blue-400"
          />
          <ProjectCard
            icon={Store}
            title="Sketchub"
            description="App Store for Open Source Projects"
            iconColor="text-green-400"
          />
           {/* Optional: Add CodeRush */}

        </motion.div>

      </div>
    </div>
  )
}