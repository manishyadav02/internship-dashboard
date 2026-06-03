"use client";

import { Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bento-tile p-6 md:p-8 relative overflow-hidden"
    >
     
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent-primary via-background-base to-background-base" />
      
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center h-full gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-syne font-bold text-white mb-2">
            Welcome back, Manish
          </h1>
          <p className="text-text-muted font-sans">
            You have 2 assignments due today. Keep up the good work!
          </p>
        </div>
        
        <div className="flex items-center gap-3 bg-white/5 rounded-2xl p-4 border border-border-subtle backdrop-blur-sm">
          <div className="p-3 bg-orange-500/20 text-orange-500 rounded-xl">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold font-syne text-white">12 Days</div>
            <div className="text-xs text-text-muted font-sans uppercase tracking-wider">Learning Streak</div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
