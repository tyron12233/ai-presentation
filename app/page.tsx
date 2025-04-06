"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Slide1 from "@/components/slides/slide-1"
import Slide2 from "@/components/slides/slide-2"
import Slide3 from "@/components/slides/slide-3"
import Slide4 from "@/components/slides/slide-4"
import Slide5 from "@/components/slides/slide-5"
import Slide6 from "@/components/slides/slide-6"
import Slide7 from "@/components/slides/slide-7"
import Slide8 from "@/components/slides/slide-8"
import Slide9 from "@/components/slides/slide-9"
import Slide10 from "@/components/slides/slide-10"
import Slide11 from "@/components/slides/slide-11"
import Slide12 from "@/components/slides/slide-12"
import Slide13 from "@/components/slides/slide-13"
import Slide14 from "@/components/slides/slide-14"
import Slide15 from "@/components/slides/slide-15"
import Slide16 from "@/components/slides/slide-16"
import Slide17 from "@/components/slides/slide-17"
import Slide18 from "@/components/slides/slide-18"
import Slide19 from "@/components/slides/slide-19"
import Slide20 from "@/components/slides/slide-20"
import useCurrentSlide from "@/lib/use-current-slide"

export default function Home() {
  const [currentSlide] = useCurrentSlide();
  const [isFullscreen, setIsFullscreen] = useState(false)

  const slides = [
    <Slide1 key="slide-1" />,
    <Slide2 key="slide-2" />,
    <Slide3 key="slide-3" />,
    <Slide4 key="slide-4" />,
    <Slide5 key="slide-5" />,
    <Slide6 key="slide-6" />,
    <Slide7 key="slide-7" />,
    <Slide8 key="slide-8" />,
    <Slide9 key="slide-9" />,
    <Slide10 key="slide-10" />,
    <Slide11 key="slide-11" />,
    <Slide12 key="slide-12" />,
    <Slide13 key="slide-13" />,
    <Slide14 key="slide-14" />,
    <Slide15 key="slide-15" />,
    <Slide16 key="slide-16" />,
    <Slide17 key="slide-17" />,
    <Slide18 key="slide-18" />,
    <Slide19 key="slide-19" />,
    <Slide20 key="slide-20" />,
  ]


  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 px-3 py-1 text-sm rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
      >
        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </button>
    </main>
  )
}

