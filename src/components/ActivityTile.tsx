"use client";

import { motion } from "framer-motion";


const activityData = [
  0, 1, 0, 2, 3, 1, 0,
  1, 2, 1, 3, 2, 0, 1,
  0, 0, 2, 1, 3, 2, 0,
  2, 3, 1, 0, 1, 2, 1,
  1, 0, 2, 3, 1, 0, 2
];

export default function ActivityTile() {
  const getColor = (level: number) => {
    switch (level) {
      case 1: return "bg-accent-primary/30";
      case 2: return "bg-accent-primary/60";
      case 3: return "bg-accent-primary";
      default: return "bg-white/5";
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      className="bento-tile p-6 flex flex-col justify-between h-full min-h-[220px]"
    >
      <div>
        <h3 className="font-syne font-bold text-lg text-white mb-1">
          Activity
        </h3>
        <p className="text-xs text-text-muted font-sans mb-6">Last 35 Days</p>
      </div>

      <div className="grid grid-cols-7 grid-rows-5 gap-1.5 flex-1">
        {activityData.map((level, i) => (
          <div
            key={i}
            className={`w-full aspect-square rounded-sm ${getColor(level)} transition-colors duration-300 hover:ring-1 hover:ring-white/50 cursor-pointer`}
          />
        ))}
      </div>
    </motion.article>
  );
}
