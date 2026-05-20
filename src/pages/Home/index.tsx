import { motion } from "motion/react";
import { homeData } from "./data";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center w-full max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-maroon-900 via-maroon-700 to-maroon-600 dark:from-white dark:via-red-100 dark:to-red-200 bg-clip-text text-transparent mb-6 transition-all duration-300 drop-shadow-sm">
        {homeData.title}
      </h1>
      <p className="text-xl max-w-2xl leading-relaxed text-maroon-800/80 dark:text-red-50 transition-colors duration-300 mx-auto">
        {homeData.description}
      </p>
    </div>
  );
}
