"use client";

import { Course } from "@/types";
import CourseTile from "./CourseTile";
import { motion, Variants } from "framer-motion";

interface CourseGridProps {
  courses: Course[];
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="col-span-1 sm:col-span-2 flex flex-col items-center justify-center p-8 bento-tile min-h-[300px]">
        <p className="text-text-muted font-sans text-center mb-2">Unable to load courses.</p>
        <p className="text-xs text-text-muted/50 font-sans text-center max-w-xs">Make sure your Supabase connection is configured correctly in .env.local.</p>
      </div>
    );
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
    >
      {courses.map((course, index) => (
        <CourseTile key={course.id} course={course} index={index} />
      ))}
    </motion.section>
  );
}
