"use client";

import { Course } from "@/types";
import ProgressBar from "./ProgressBar";
import { motion, Variants } from "framer-motion";
import { Layers, Network, FileCode, Database } from "lucide-react";


const IconMap: Record<string, React.ElementType> = {
  Layers,
  Network,
  FileCode,
  Database,
};

interface CourseTileProps {
  course: Course;
  index: number;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22 }
  }
};

export default function CourseTile({ course, index }: CourseTileProps) {
  const Icon = IconMap[course.icon_name] || Layers;
  
  const gradients = [
    "from-indigo-500/10 to-transparent",
    "from-violet-500/10 to-transparent",
    "from-blue-500/10 to-transparent",
    "from-purple-500/10 to-transparent"
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 0 1px rgba(99,102,241,0.6), 0 8px 32px rgba(99,102,241,0.2)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="bento-tile p-6 flex flex-col justify-between group cursor-pointer h-48 relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${gradient} z-0 pointer-events-none opacity-50`} />
      
      <div className="relative z-10 flex items-start justify-between">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
          <Icon className="w-6 h-6 text-text-primary" />
        </div>
        <span className="text-xs font-sans text-text-muted font-medium bg-black/40 px-2 py-1 rounded-md">
          In Progress
        </span>
      </div>
      
      <div className="relative z-10 mt-4">
        <h3 className="font-syne font-bold text-lg text-white mb-4 line-clamp-1">
          {course.title}
        </h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-sans">
            <span className="text-text-muted">Progress</span>
            <span className="text-white font-medium">{course.progress}%</span>
          </div>
          <ProgressBar value={course.progress} />
        </div>
      </div>
    </motion.article>
  );
}
