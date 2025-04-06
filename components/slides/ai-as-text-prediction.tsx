"use client"

import { motion } from "framer-motion"
import { MessageSquareText } from "lucide-react"

export default function AiAsTextPrediction() {
  const sentence = "The cat sat on the"
  const predictions = [
    { word: "mat", probability: 0.45 },
    { word: "sofa", probability: 0.3 },
    { word: "rug", probability: 0.15 },
    { word: "chair", probability: 0.1 },
  ]

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-6">
          <MessageSquareText className="w-16 h-16 text-purple-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">AI as Text Prediction</h2>

        <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm mb-8">
          <div className="flex flex-wrap justify-center text-2xl md:text-3xl font-medium mb-6">
            {sentence.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                className="mx-1 my-1"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mx-1 my-1 text-cyan-400"
            >
              _____
            </motion.span>
          </div>

          <div className="flex flex-col items-center space-y-3">
            {predictions.map((pred, index) => (
              <motion.div
                key={index}
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: `${Math.min(pred.probability * 100, 80)}%`,
                  opacity: 1,
                }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                className="flex items-center w-full max-w-md"
              >
                <div className="w-20 text-right mr-4 text-lg">{pred.word}</div>
                <div className="flex-1 bg-gray-700 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                    style={{ width: `${pred.probability * 100}%` }}
                  ></div>
                </div>
                <div className="w-16 text-left ml-3 text-gray-300">{(pred.probability * 100).toFixed(0)}%</div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-xl text-gray-300">
          Modern AI, especially large language models, predicts the most likely next word based on patterns in its
          training data.
        </p>
      </motion.div>
    </div>
  )
}

