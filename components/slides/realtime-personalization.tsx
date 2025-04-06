"use client"

import { motion } from "framer-motion"
// Import icons for generic content, users, data inputs, AI, personalized outputs, and benefits
import {
    Newspaper, User, Users, // Generic Side
    MousePointerClick, ShoppingCart, Clock, BrainCircuit, Sparkles, Gift, Ticket, Percent, // AI Side
    Smile, Heart, Award // Benefit Side
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

const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const pulseVariant = { // For AI brain processing
    animate: {
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut"}
    }
}

const personalizedOutputVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.2 + 1.8, type: "spring", stiffness: 120 }
    }),
     exit: { opacity: 0, scale: 0 }
}

const benefitVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } }
};


export default function RealtimePersonalizationEnhanced() {

    const users = [{ id: 1 }, { id: 2 }, { id: 3 }]; // Example users
    const personalizedOutputs = [
        { icon: Gift, color: "text-pink-400" },
        { icon: Ticket, color: "text-green-400" },
        { icon: Percent, color: "text-blue-400" }
    ];
    const dataInputs = [MousePointerClick, ShoppingCart, Clock];

    return (
        <div className="flex flex-col items-center justify-center h-full px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto w-full" // Wider max-width
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
                    Engaging Customers: <span className="text-purple-400">AI-Powered Personalization</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8 items-stretch">

                    {/* --- "One Size Fits Few" Card --- */}
                    <motion.div
                        custom={0} variants={cardVariant} initial="hidden" animate="visible"
                        className="bg-gradient-to-br from-gray-800/60 via-red-900/10 to-gray-800/60 p-6 rounded-xl backdrop-blur-sm border border-red-500/20 shadow-lg flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-red-300 text-center">Broadcasting (One Size Fits Few)</h3>
                        {/* Visualization: Generic content to multiple users */}
                        <div className="relative flex-grow flex flex-col items-center justify-center w-full min-h-[180px] mb-4 p-4">
                            <motion.div variants={itemVariant} initial="hidden" animate="visible" transition={{delay: 0.5}}>
                               <Newspaper className="w-16 h-16 text-red-400/80 mb-4"/>
                            </motion.div>
                            {/* Lines connecting to users */}
                            <div className="absolute w-full h-full top-0 left-0 flex items-end justify-center">
                                {users.map((user, i) => (
                                    <motion.div
                                        key={`line-${user.id}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: '50%', opacity: 0.4 }}
                                        transition={{ delay: 0.8 + i*0.1, duration: 0.5 }}
                                        className="absolute bottom-[55%] border-l border-dashed border-red-600/50"
                                        style={{
                                            left: `${25 + i * 25}%`, // Position lines
                                            transform: 'translateX(-50%)'
                                        }}
                                    />
                                ))}
                            </div>
                             {/* User Icons */}
                            <div className="flex justify-around w-full mt-auto">
                                 {users.map((user, i) => (
                                     <motion.div key={`user-${user.id}`} variants={itemVariant} initial="hidden" animate="visible" transition={{delay: 0.7 + i*0.1}}>
                                         <User className="w-10 h-10 text-red-500/60"/>
                                     </motion.div>
                                 ))}
                            </div>
                        </div>
                        <p className="text-lg text-gray-300 text-center">Sending the same static message ignores individual needs and real-time context.</p>
                    </motion.div>

                    {/* --- "AI Delivers 1:1" Card --- */}
                     <motion.div
                        custom={1} variants={cardVariant} initial="hidden" animate="visible"
                        className="bg-gradient-to-br from-gray-800/60 via-purple-900/20 to-gray-800/60 p-6 rounded-xl backdrop-blur-sm border border-purple-500/30 shadow-lg flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-purple-300 text-center">Connecting (AI Delivers 1:1)</h3>
                         {/* Visualization: Data -> AI -> Personalized Output -> Users */}
                         <div className="relative flex-grow flex flex-col items-center justify-between w-full min-h-[180px] mb-4 p-4">
                            {/* Data Inputs Feeding AI */}
                            <div className="flex justify-center space-x-4 mb-2 opacity-70">
                                {dataInputs.map((Icon, i) => (
                                     <motion.div key={`input-${i}`} initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{delay: 0.8 + i*0.15}}>
                                        <Icon className="w-6 h-6 text-cyan-400"/>
                                     </motion.div>
                                ))}
                            </div>

                            {/* AI Brain Processing */}
                            <motion.div variants={pulseVariant} animate="animate" className="my-2">
                                <Sparkles className="w-16 h-16 text-purple-400 drop-shadow-lg"/>
                            </motion.div>

                             {/* Personalized Outputs & Users */}
                            <div className="flex justify-around w-full mt-2">
                                 {users.map((user, i) => (
                                     <div key={`p-user-${user.id}`} className="flex flex-col items-center relative">
                                        {/* Output Icon */}
                                        <motion.div custom={i} variants={personalizedOutputVariant} initial="hidden" animate="visible">
                                            {personalizedOutputs[i] ? (() => {
                                                 const Icon = personalizedOutputs[i].icon;
                                                 return <Icon className={`w-8 h-8 ${personalizedOutputs[i].color} mb-1`} />;
                                            })() : <Gift className="w-8 h-8 text-gray-500 mb-1"/>}
                                        </motion.div>
                                         {/* Line from AI to Output (simplified) */}
                                          <motion.div
                                              initial={{ height: 0, opacity: 0 }}
                                              animate={{ height: '15px', opacity: 0.6 }} // Adjust height as needed
                                              transition={{ delay: 1.6 + i*0.2, duration: 0.3 }}
                                              className="border-l border-dashed border-purple-400/60 mb-1"
                                          />
                                         {/* User Icon */}
                                         <motion.div variants={itemVariant} initial="hidden" animate="visible" transition={{delay: 1.0 + i*0.1}}>
                                             <User className="w-10 h-10 text-purple-300/80"/>
                                         </motion.div>
                                     </div>
                                 ))}
                            </div>
                        </div>
                         <p className="text-lg text-gray-300 text-center">AI analyzes real-time signals to deliver relevant content, offers, or experiences instantly.</p>
                    </motion.div>
                </div>

                {/* --- Benefit Section --- */}
                <motion.div
                    variants={benefitVariant} initial="hidden" animate="visible"
                    className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-600/10 p-6 rounded-xl backdrop-blur-sm flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-6 border border-purple-500/20"
                >
                    <div className="flex space-x-4 text-pink-400 flex-shrink-0">
                         <Smile className="w-10 h-10" />
                         <Heart className="w-10 h-10" />
                         <Award className="w-10 h-10" />
                     </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-1 text-pink-300">The Personalization Payoff</h3>
                        <p className="text-lg md:text-xl text-gray-200">
                           Dramatically improves customer <strong className="text-white">experience</strong>, boosts <strong className="text-white">engagement</strong>, and fosters long-term <strong className="text-white">loyalty</strong>.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}