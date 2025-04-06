"use client"

import { useState, useEffect, useCallback, useRef } from "react" // Added useRef
import { motion, AnimatePresence } from "framer-motion"
import { Maximize, Minimize, Smartphone, RotateCw } from "lucide-react"

// --- Import all your slide components ---
import Slide1 from "@/components/slides/slide-1"
import Introduction from "@/components/slides/introduction"
import Slide4 from "@/components/slides/slide-4"
import AiAsTextPrediction from "@/components/slides/ai-as-text-prediction"
import StatisticalModelsAndPatternRecognition from "@/components/slides/statistical-models-and-pattern-recognition"
import LimitationsOfAi from "@/components/slides/limitations-of-ai"
import Slide8 from "@/components/slides/slide-8"
import Slide9 from "@/components/slides/slide-9"
import AiInAction from "@/components/slides/ai-in-action"
import SmarterDataCollection from "@/components/slides/smarter-data-collection"
import IntelligentDataCleaning from "@/components/slides/intelligent-data-cleaning"
import AutomatedCustomerSegmentation from "@/components/slides/automated-customer-segmentation"
import RealtimePersonalization from "@/components/slides/realtime-personalization"
import Slide15 from "@/components/slides/slide-15"
import PredictiveAnalytics from "@/components/slides/predictive-analytics"
import KeyTakewaays from "@/components/slides/key-takeaways"
import Slide18 from "@/components/slides/slide-18"
import Slide19 from "@/components/slides/slide-19"
import Slide20 from "@/components/slides/slide-20"
import useCurrentSlide from "@/lib/use-current-slide"
import PromptBreakdown from "@/components/slides/prompts-breakdown"
import AnimoChatModerationIntro from "@/components/slides/animo-chat-moderation-intro"
import InputFormatting from "@/components/slides/input-formatting"
import OutputSample from "@/components/slides/output-sample"
import SpeakerIntroduction from "@/components/slides/speaker-introduction"
import AiTextPredictionAnalogy from "@/components/slides/ai-text-prediction-analogy"
import AiPredictionModel from "@/components/slides/ai-prediction-model"
import Slide3Enhanced from "@/components/slides/slide-3"
import AboutPresentationWebsite from "@/components/slides/about-presentation-website"
import HookDrowningInData from "@/components/slides/hook-drowning-in-data"
import ChallengeManualStruggle from "@/components/slides/challenge-manual-struggle"
import IntroducingSolutionAI from "@/components/slides/introducing-solution-ai"
import GoalAndRoadmap from "@/components/slides/goal-and-roadmap"
import PredictiveAnalyticsExample from "@/components/slides/predictive-analytics-example"
import PredictiveAnalyticsExample2 from "@/components/slides/predictive-analytics-example-2"
// ---------------------------------------

// --- Define Reference Width for Scaling ---
const REFERENCE_WIDTH = 1920; // Design base width in px (adjust if needed)
// ---------------------------------------

export default function Home() {
  // Assume useCurrentSlide now returns [currentSlide, setCurrentSlide]
  const {currentSlide, setCurrentSlide} = useCurrentSlide();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1); // State for scale factor
  const presentationContainerRef = useRef<HTMLDivElement>(null); // Ref for the 16:9 container

  const slides = [
    <Slide1 key="slide-1" />,
    <SpeakerIntroduction key="speaker-introduction"/>,
    <AboutPresentationWebsite key="about-presentation-website"/>,
    <HookDrowningInData key="hook-drowning-in-data" />,
    <ChallengeManualStruggle key="challenge-manual-struggle" />,
    <IntroducingSolutionAI key="introducing-solution-ai" />,
    <GoalAndRoadmap key="goal-and-roadmap" />,
    <Introduction key="ai-beyond-the-hype" />,
    <Slide3Enhanced key="slide-3" />,
    <Slide4 key="slide-4" />,
    <AiTextPredictionAnalogy key="ai-text-prediction-analogy"/>,
    <AiPredictionModel key="ai-prediction-model"/>,
    <StatisticalModelsAndPatternRecognition key="statistical-models-and-pattern-recognition" />,
    <AiAsTextPrediction key="ai-as-text-prediction" />,
    <LimitationsOfAi key="slide-7" />,
    <Slide8 key="slide-8" />,
    <Slide9 key="slide-9" />,
    <AiInAction key="slide-10" />,
    <SmarterDataCollection key="slide-11" />,
    <IntelligentDataCleaning key="slide-12" />,
    <AutomatedCustomerSegmentation key="slide-13" />,
    <RealtimePersonalization key="slide-14" />,
    <Slide15 key="slide-15" />,
    <PredictiveAnalytics key="predictive-analytics" />,
    <PredictiveAnalyticsExample key="predictive-analytics-example" />,
    <PredictiveAnalyticsExample2  key="predictive-analytics-example-2" />,
    <AnimoChatModerationIntro key="animo-chat-moderation-intro" />,
    <PromptBreakdown key="prompt-breakdown"/>,
    <InputFormatting key="input-formatting"/>,
    <OutputSample key="output-sample"/>,
    <KeyTakewaays key="slide-17" />,
    <Slide18 key="slide-18" />,
    <Slide19 key="slide-19" />,
    <Slide20 key="slide-20" />,
  ];

  // --- Fullscreen Handling (remains the same) ---
  const checkFullscreenStatus = useCallback(() => {
    const isCurrentlyFullscreen = !!(document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).mozFullScreenElement || (document as any).msFullscreenElement );
    setIsFullscreen(isCurrentlyFullscreen);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const element = document.documentElement;
    if (!isFullscreen) {
      try {
        if (element.requestFullscreen) await element.requestFullscreen();
        else if ((element as any).webkitRequestFullscreen) await (element as any).webkitRequestFullscreen();
        else if ((element as any).mozRequestFullScreen) await (element as any).mozRequestFullScreen();
        else if ((element as any).msRequestFullscreen) await (element as any).msRequestFullscreen();
        setShowFullscreenPrompt(false);
      } catch(err) { console.error("Fullscreen request failed:", err); setShowFullscreenPrompt(false); }
    } else {
       try {
        if (document.exitFullscreen) await document.exitFullscreen();
        else if ((document as any).webkitExitFullscreen) await (document as any).webkitExitFullscreen();
        else if ((document as any).mozCancelFullScreen) await (document as any).mozCancelFullScreen();
        else if ((document as any).msExitFullscreen) await (document as any).msExitFullscreen();
      } catch(err) { console.error("Exit fullscreen request failed:", err); }
    }
  }, [isFullscreen]);
  // -----------------------------

  // --- Effects ---
  useEffect(() => {
    // Mobile & Fullscreen Detection (remains mostly the same)
    const checkMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
    checkFullscreenStatus();
    document.addEventListener('fullscreenchange', checkFullscreenStatus);
    document.addEventListener('webkitfullscreenchange', checkFullscreenStatus);
    document.addEventListener('mozfullscreenchange', checkFullscreenStatus);
    document.addEventListener('MSFullscreenChange', checkFullscreenStatus);
    if (checkMobile && !document.fullscreenElement && !(document as any).webkitFullscreenElement) {
       setShowFullscreenPrompt(true);
    }

    // --- Scaling Logic ---
    const container = presentationContainerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        if (width > 0) {
           const calculatedScale = width / REFERENCE_WIDTH;
           setScaleFactor(calculatedScale);
        }
      }
    });

    resizeObserver.observe(container);
    // --------------------

    // --- Arrow Key Manual Override ---
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup listeners
    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreenStatus);
      document.removeEventListener('webkitfullscreenchange', checkFullscreenStatus);
      document.removeEventListener('mozfullscreenchange', checkFullscreenStatus);
      document.removeEventListener('MSFullscreenChange', checkFullscreenStatus);
      document.removeEventListener("keydown", handleKeyDown);
      resizeObserver.disconnect();
    };
  }, [checkFullscreenStatus, setCurrentSlide, slides.length]);
  // -----------------

  // --- Render ---
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center p-0 m-0">

      {/* 16:9 Aspect Ratio Container - Attach Ref Here */}
      <div
         ref={presentationContainerRef} // Attach the ref
         className="relative w-full aspect-video max-h-full max-w-full shadow-2xl overflow-hidden"
       >
        {/* Slide Rendering Area (Framer Motion for transitions) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide} // Animate based on slide index
            initial={{ opacity: 0 }} // Keep transition simple
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full" // Fills the 16:9 container
          >
            {/* Inner Wrapper for Scaling */}
            <div
              className="w-full h-full origin-center" // Ensure scaling happens from the center
              style={{
                transform: `scale(${scaleFactor})`,
                transformOrigin: 'center center', // Explicitly set origin
              }}
            >
              {slides[currentSlide]}
            </div>
            {/* End Inner Wrapper */}
          </motion.div>
        </AnimatePresence>

         {/* UI Elements (Slide Counter, Fullscreen Button) - Positioned relative to 16:9 container */}
         <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm rounded bg-black/30 backdrop-blur-sm z-30 pointer-events-auto">
          {currentSlide + 1} / {slides.length}
        </div>
        <button
            onClick={toggleFullscreen}
            className="absolute top-2 right-2 md:top-4 md:right-4 p-1 md:p-2 rounded bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all z-30 pointer-events-auto"
            aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>
      </div>

      {/* Portrait Mode Overlay (remains the same) */}
      <div className="landscape:hidden fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8 pointer-events-auto">
         <RotateCw className="w-16 h-16 text-blue-400 mb-6 animate-spin" style={{ animationDuration: '3s' }}/>
         <h2 className="text-2xl font-semibold mb-4">Please Rotate Your Device</h2>
         <p className="text-lg text-gray-300">This presentation is best viewed in landscape mode.</p>
      </div>

      {/* Fullscreen Prompt Modal (remains the same) */}
      <AnimatePresence>
        {showFullscreenPrompt && !isFullscreen && isMobile && (
          <motion.div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 pointer-events-auto">
             <div className="bg-slate-800 p-6 rounded-lg shadow-xl text-center max-w-sm border border-slate-700">
               <Smartphone className="w-12 h-12 text-purple-400 mx-auto mb-4"/>
               <h3 className="text-xl font-semibold mb-3">Enhance Your View</h3>
               <p className="text-gray-300 mb-6">For the best experience, please use fullscreen mode.</p>
               <div className="flex justify-center space-x-4">
                 <button
                   onClick={() => setShowFullscreenPrompt(false)}
                   className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 transition-colors"
                 >
                   Dismiss
                 </button>
                 <button
                   onClick={toggleFullscreen}
                   className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition-colors font-semibold flex items-center space-x-2"
                 >
                   <Maximize size={18} />
                   <span>Enter Fullscreen</span>
                 </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}
