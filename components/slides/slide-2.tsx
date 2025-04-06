"use client"

import { motion } from "framer-motion"
import { DoorOpenIcon as Curtains } from "lucide-react"

export default function Slide2() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-8">
          <Curtains className="w-20 h-20 text-purple-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Introduction</h2>
        <p className="text-xl text-gray-300 mb-4">
          "We hear a lot about AI these days, especially in the context of data automation. It's often portrayed as this
          magical, all-powerful force."
        </p>
        <p className="text-xl text-gray-300">
          "Let's pull back the curtain and explore what AI really is, and how we can best leverage it."
        </p>
      </motion.div>
    </div>
  )
}

