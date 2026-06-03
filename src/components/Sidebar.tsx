"use client";

import { useState } from "react";
import { LayoutDashboard, BookOpen, Activity, Settings, User } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Courses", icon: BookOpen },
  { name: "Activity", icon: Activity },
  { name: "Profile", icon: User },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background-base/90 backdrop-blur-md border-t border-border-subtle p-2 pb-safe">
        <ul className="flex justify-around items-center h-14">
          {navItems.map((item) => (
            <li key={item.name} className="relative flex-1 flex justify-center">
              <button
                onClick={() => setActive(item.name)}
                className="flex flex-col items-center justify-center w-full h-full p-2 relative"
                aria-label={item.name}
              >
                {active === item.name && (
                  <motion.div
                    layoutId="activeNavMobile"
                    className="absolute inset-1 bg-accent-primary/20 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <item.icon className={clsx("w-6 h-6", active === item.name ? "text-accent-primary" : "text-text-muted")} />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      
      <nav
        className={clsx(
          "hidden md:flex flex-col h-screen sticky top-0 bg-background-base/50 backdrop-blur-md border-r border-border-subtle p-4 transition-all duration-300 z-50",
          isExpanded ? "w-64" : "w-20"
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shrink-0">
              <span className="font-syne font-bold text-white">L</span>
            </div>
            {isExpanded && <span className="font-syne font-bold text-xl whitespace-nowrap text-white">LearnDash</span>}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-md hover:bg-white/5 text-text-muted hidden lg:block"
          >
            <div className="w-4 h-4 border-y-2 border-current" />
          </button>
        </div>

        <ul className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <button
                onClick={() => setActive(item.name)}
                className={clsx(
                  "flex items-center gap-3 w-full p-3 rounded-xl transition-colors text-left relative",
                  !isExpanded && "justify-center",
                  active === item.name ? "text-white" : "text-text-muted hover:text-white hover:bg-white/5"
                )}
                title={!isExpanded ? item.name : undefined}
              >
                {active === item.name && (
                  <motion.div
                    layoutId="activeNavDesktop"
                    className="absolute inset-0 bg-accent-primary/20 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <item.icon className={clsx("w-5 h-5 shrink-0", active === item.name ? "text-accent-primary" : "")} />
                {isExpanded && <span className="font-sans whitespace-nowrap">{item.name}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
