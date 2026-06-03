import { createClient } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import CourseGrid from "@/components/CourseGrid";
import ActivityTile from "@/components/ActivityTile";
import { Suspense } from "react";
import SkeletonTile from "@/components/SkeletonTile";
import { Course } from "@/types";

export const revalidate = 0;

async function CoursesList() {
  const supabase = await createClient();
  let courses: Course[] = [];
  
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (data && !error) {
      courses = data;
    }
  } catch (err) {
    // Silently fail since we gracefully handle empty state in the UI
  }

  return <CourseGrid courses={courses} />;
}

function CourseSkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <SkeletonTile className="h-48" />
      <SkeletonTile className="h-48" />
      <SkeletonTile className="h-48" />
      <SkeletonTile className="h-48" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background-base">
      <Sidebar />
      
      <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
        <div className="max-w-6xl mx-auto">
          
          <header className="flex justify-between items-center mb-8 md:hidden">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shrink-0">
                <span className="font-syne font-bold text-white">L</span>
              </div>
              <span className="font-syne font-bold text-xl text-white">LearnDash</span>
            </div>
          </header>
        
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
            <div className="lg:col-span-3">
              <HeroTile />
            </div>

           
            <div className="lg:col-span-2">
               <Suspense fallback={<CourseSkeletonGrid />}>
                 <CoursesList />
               </Suspense>
            </div>

            <div className="lg:col-span-1">
              <ActivityTile />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
