"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, LinkIcon, QrCode, Wifi } from "lucide-react"
import { QRCodeCanvas } from 'qrcode.react'; // Import the QR code component

export default function AboutPresentationWebsite() {
  const websiteUrl = "https://krazycon-ppt.vercel.app/"; // Your presentation URL

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          Why is this Presentation a Website?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Column: Explanation */}
          <motion.div
             initial={{ x: -30, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
             className="space-y-6 text-center md:text-left"
          >
            <div className="flex flex-col items-center md:items-start">
               <Code className="w-12 h-12 text-cyan-400 mb-3" />
               <h3 className="text-xl font-semibold mb-1 text-cyan-300">Coded, Not Designed</h3>
               <p className="text-lg text-gray-300">
                  Honestly? I enjoy coding more than using PowerPoint or Canva! This format felt more natural for me.
               </p>
            </div>
             <div className="flex flex-col items-center md:items-start">
               <Smartphone className="w-12 h-12 text-purple-400 mb-3" />
               <h3 className="text-xl font-semibold mb-1 text-purple-300">Control & Access</h3>
               <p className="text-lg text-gray-300">
                  Building it as a website lets me control the slides from my phone and easily publish it online for everyone.
               </p>
            </div>
          </motion.div>

          {/* Right Column: QR Code & Interaction */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-gray-700/50 via-gray-800/70 to-gray-700/50 p-6 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg flex flex-col items-center text-center"
          >
             <QrCode className="w-10 h-10 text-green-400 mb-4" />
             <h3 className="text-2xl font-semibold mb-4 text-gray-100">Follow Along Live!</h3>

             {/* QR Code Component */}
             <div className="bg-white p-3 rounded-lg inline-block mb-4 shadow-md">
                <QRCodeCanvas
                   value={websiteUrl}
                   size={160} // Adjust size as needed for scannability
                   bgColor={"#ffffff"}
                   fgColor={"#000000"}
                   level={"L"} // Error correction level (L, M, Q, H)
                   includeMargin={false}
                />
             </div>

             <div className="flex items-center justify-center space-x-2 text-green-300 mb-3">
                 <LinkIcon className="w-4 h-4"/>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline break-all">
                  {websiteUrl}
                </a>
             </div>
             <div className="flex items-center justify-center space-x-2 text-gray-300">
                <Wifi className="w-5 h-5 text-blue-400"/>
                <p className="text-md">The site stays in sync with my slides!</p>
             </div>
              <p className="text-xs text-gray-500 mt-3">(Scan the code if the text on screen is hard to read)</p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  )
}