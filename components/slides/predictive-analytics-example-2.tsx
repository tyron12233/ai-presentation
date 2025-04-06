import { motion } from "framer-motion";
import { DollarSign, Filter, Lightbulb, Target, UserCheck } from "lucide-react";

const listItemVariant = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 + 0.3, duration: 0.5, ease: "easeOut" },
  }),
};

export default function PredictiveAnalyticsExample2() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 md:px-16">
      <motion.div
        custom={2}
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-center space-x-2 mb-5">
          <Lightbulb className="w-7 h-7 text-yellow-400" />
          <h3 className="text-2xl font-semibold text-gray-200 text-center">
            Real-World Application
          </h3>
        </div>
        <motion.ul
          className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15, delayChildren: 0.9 }} // Stagger list items
        >
          <motion.li
            variants={listItemVariant}
            className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg border border-white/10"
          >
            <Filter size={24} className="text-cyan-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-cyan-300">
                Prioritize Sales Efforts
              </h4>
              <p className="text-gray-300 text-sm">
                Focus high-touch sales activities on leads with the highest
                conversion probability.
              </p>
            </div>
          </motion.li>
          <motion.li
            variants={listItemVariant}
            className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg border border-white/10"
          >
            <Target size={24} className="text-pink-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-pink-300">
                Tailor Marketing Nurturing
              </h4>
              <p className="text-gray-300 text-sm">
                Send different content or offers based on lead score (e.g., demo
                vs. educational content).
              </p>
            </div>
          </motion.li>
          <motion.li
            variants={listItemVariant}
            className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg border border-white/10"
          >
            <DollarSign size={24} className="text-green-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-green-300">
                Optimize Ad Spend
              </h4>
              <p className="text-gray-300 text-sm">
                Allocate budget towards channels and campaigns generating
                high-scoring leads.
              </p>
            </div>
          </motion.li>
          <motion.li
            variants={listItemVariant}
            className="flex items-center space-x-3 bg-white/5 p-4 rounded-lg border border-white/10"
          >
            <UserCheck size={24} className="text-yellow-400 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-300">
                Inform Product Strategy
              </h4>
              <p className="text-gray-300 text-sm">
                Identify attributes of successful customers to guide feature
                development.
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
