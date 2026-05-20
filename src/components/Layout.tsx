import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen rtl:flex-row-reverse text-maroon-900 dark:text-white selection:bg-maroon-500/30 transition-colors duration-500 relative flex flex-col md:flex-row p-0 md:p-4 lg:p-6 gap-4 md:gap-6 lg:gap-8">
      {/* Decorative background glows (Animated with Framer Motion) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          className="absolute top-[-10%] right-[10%] w-96 h-96 bg-maroon-800/20 dark:bg-[#7f1d1d]/40 rounded-full blur-[100px]"
          animate={{ x: [0, 100, -50, 0], y: [0, -50, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-red-900/15 dark:bg-[#651414]/40 rounded-full blur-[100px]"
          animate={{ x: [0, -100, 50, 0], y: [0, 100, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-maroon-900/10 dark:bg-red-950/50 rounded-full blur-[100px]"
          animate={{ x: [0, 150, -50, 0], y: [0, 100, -100, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 w-full relative z-10 px-4 md:px-0 pt-4 md:pt-0 pb-8">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="w-full flex-1 mt-6 md:mt-8 relative z-0">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/60 z-30 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
