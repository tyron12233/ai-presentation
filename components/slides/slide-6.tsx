"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function Slide6() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-6">
          <Sparkles className="w-16 h-16 text-cyan-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Statistical Models and Pattern Recognition</h2>

        <div className="relative h-64 mb-8 bg-white/5 rounded-xl overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300">
            {/* Background grid */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 0.5 }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`vl-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" stroke="white" strokeWidth="1" />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={`hl-${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} stroke="white" strokeWidth="1" />
              ))}
            </motion.g>

            {/* Data points - Group 1 */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
              {[
                [100, 80],
                [120, 100],
                [140, 90],
                [160, 110],
                [180, 95],
                [130, 120],
                [150, 130],
                [170, 115],
                [190, 125],
                [110, 105],
              ].map(([cx, cy], i) => (
                <circle key={`g1-${i}`} cx={cx} cy={cy} r="6" fill="#06b6d4" />
              ))}
            </motion.g>

            {/* Data points - Group 2 */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
              {[
                [400, 200],
                [420, 220],
                [440, 210],
                [460, 230],
                [480, 215],
                [430, 240],
                [450, 250],
                [470, 235],
                [490, 245],
                [410, 225],
              ].map(([cx, cy], i) => (
                <circle key={`g2-${i}`} cx={cx} cy={cy} r="6" fill="#a855f7" />
              ))}
            </motion.g>

            {/* Data points - Group 3 */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
              {[
                [600, 100],
                [620, 120],
                [640, 110],
                [660, 130],
                [680, 115],
                [630, 140],
                [650, 150],
                [670, 135],
                [690, 145],
                [610, 125],
              ].map(([cx, cy], i) => (
                <circle key={`g3-${i}`} cx={cx} cy={cy} r="6" fill="#ec4899" />
              ))}
            </motion.g>

            {/* Pattern circles */}
            <motion.circle
              initial={{ r: 0, opacity: 0 }}
              animate={{ r: 60, opacity: 0.2 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              cx="150"
              cy="110"
              fill="#06b6d4"
              stroke="#06b6d4"
              strokeWidth="2"
            />

            <motion.circle
              initial={{ r: 0, opacity: 0 }}
              animate={{ r: 60, opacity: 0.2 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              cx="450"
              cy="230"
              fill="#a855f7"
              stroke="#a855f7"
              strokeWidth="2"
            />

            <motion.circle
              initial={{ r: 0, opacity: 0 }}
              animate={{ r: 60, opacity: 0.2 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              cx="650"
              cy="125"
              fill="#ec4899"
              stroke="#ec4899"
              strokeWidth="2"
            />
          </svg>
        </div>

        <p className="text-xl text-gray-300">
          AI's strength lies in identifying patterns within vast datasets, making it invaluable for data automation in
          applications like fraud detection and predictive maintenance.
        </p>
      </motion.div>
    </div>
  )
}

