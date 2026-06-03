"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number; // 0-100
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
      />
    </div>
  );
}
