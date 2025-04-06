"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Type } from "lucide-react"

type Scenario = {
  currentText: string;
  suggestions: string[];
  chosenWord: string;
}

// Define the sequence of text and suggestions
const scenarios: Scenario[] = [
  { currentText: "The quick brown fox", suggestions: ["jumps", "ran", "is"], chosenWord: "jumps" },
  { currentText: "jumps over the", suggestions: ["lazy", "fence", "dog"], chosenWord: "lazy" },
  { currentText: "lazy dog near", suggestions: ["the", "a", "his"], chosenWord: "the" },
  { currentText: "the river", suggestions: ["bank", "side", "flow"], chosenWord: "bank" },
  { currentText: "bank and", suggestions: ["looks", "sees", "waits"], chosenWord: "looks" },
  { currentText: "looks for", suggestions: ["fish", "food", "frogs"], chosenWord: "fish" },
];

// --- Animation Variants ---
const suggestionContainerVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const suggestionVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 15 },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.9,
    transition: { duration: 0.15 },
  },
  highlighted: { // Style for the chosen word before 'selection'
    scale: 1.1,
    backgroundColor: "rgb(37 99 235 / 0.9)", // Slightly brighter blue e.g. blue-600
    transition: { duration: 0.2 },
  },
};

const textSpanVariants = {
   initial: { opacity: 0 },
   animate: { opacity: 1 },
   exit: { opacity: 0 },
}

export default function AiTextPredictionAnalogyLoop() {
  const [stepIndex, setStepIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(scenarios[0].currentText);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false); // Prevent overlap

  useEffect(() => {
    // Ensure cleanup happens if component unmounts mid-animation
    let suggestionTimer: NodeJS.Timeout;
    let highlightTimer: NodeJS.Timeout;
    let appendTimer: NodeJS.Timeout;
    let nextStepTimer: NodeJS.Timeout;

    const sequence = () => {
      if (isAnimating) return; // Don't start new sequence if one is running
      setIsAnimating(true);

      const currentScenario = scenarios[stepIndex];
      const nextStepIndex = (stepIndex + 1) % scenarios.length;
      const nextScenario = scenarios[nextStepIndex];

      // 1. Show suggestions for the current text
      suggestionTimer = setTimeout(() => {
        setCurrentSuggestions(currentScenario.suggestions);
      }, 500); // Delay before showing suggestions

      // 2. Highlight the chosen word
      highlightTimer = setTimeout(() => {
         setHighlightedWord(currentScenario.chosenWord);
      }, 1500); // Delay after suggestions appear

      // 3. Append the chosen word and hide suggestions
      appendTimer = setTimeout(() => {
        setDisplayedText(prev => prev + " " + currentScenario.chosenWord);
        setCurrentSuggestions([]); // Trigger exit animation
        setHighlightedWord(null);
      }, 2200); // Delay after highlight

       // 4. Prepare for and move to the next step
      nextStepTimer = setTimeout(() => {
         // Set text for the *next* step immediately after hiding suggestions
         // Note: We display the *start* of the next step's text
         setDisplayedText(nextScenario.currentText);
         setStepIndex(nextStepIndex);
         setIsAnimating(false); // Allow next cycle to start
      }, 2700); // Delay after hiding suggestions
    };

    sequence(); // Start the sequence

    // Cleanup function
    return () => {
      clearTimeout(suggestionTimer);
      clearTimeout(highlightTimer);
      clearTimeout(appendTimer);
      clearTimeout(nextStepTimer);
      setIsAnimating(false); // Reset lock on unmount
    };
  }, [stepIndex]); // Rerun effect when stepIndex changes

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto w-full"
      >
         {/* ... (Title and Intro Paragraph remain the same) ... */}
         <div className="flex justify-center mb-4">
          <Type className="w-16 h-16 text-blue-400" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          What is AI? Think Text Prediction
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          At its core, much of modern AI is like a sophisticated prediction machine. You see a simple version every day:
        </p>

        {/* Keyboard Analogy Animation Area */}
        <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg max-w-lg mx-auto border border-white/10 min-h-[180px]"> {/* Added min-height */}
          {/* Suggestion Boxes Area - Use AnimatePresence */}
          <motion.div
            variants={suggestionContainerVariants}
            initial="enter"
            animate="enter"
            exit="exit"
            className="flex justify-center space-x-2 mb-4 h-10" // Fixed height for suggestions
          >
            <AnimatePresence>
              {currentSuggestions.map((word) => (
                <motion.div
                  key={word + stepIndex} // Need a key that changes when suggestions refresh
                  layout // Helps animate position changes smoothly if needed
                  variants={suggestionVariants}
                  initial="hidden"
                  animate={highlightedWord === word ? "highlighted" : "visible"} // Apply highlight variant
                  exit="exit"
                  className="bg-blue-500/80 text-white px-4 py-2 rounded-md text-sm md:text-base shadow-md cursor-default"
                >
                  {word}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Typed Text Area */}
          <div className="bg-gray-700/60 p-3 rounded text-left text-gray-200 text-lg relative min-h-[48px]"> {/* Added min-height */}
            {/* AnimatePresence helps manage text changes - wrap text in motion span */}
             <AnimatePresence mode="wait">
                <motion.span
                    key={displayedText} // Change key triggers animation
                    variants={textSpanVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="inline-block" // Important for AnimatePresence
                >
                   {displayedText}
                 </motion.span>
             </AnimatePresence>

            {/* Blinking cursor imitation */}
            <motion.span
              className="inline-block w-0.5 h-5 bg-blue-400 ml-1 relative top-0.5"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear", repeatDelay: 0 }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-3 italic h-4"> {/* Fixed height */}
             {currentSuggestions.length > 0 ? "Suggesting the next word..." : "Selecting..."}
          </p>
        </div>
      </motion.div>
    </div>
  )
}