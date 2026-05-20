import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { mediaKitData } from "./data";
import { ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

export default function MediaKit() {
  const [activePlatform, setActivePlatform] = useState(0);

  const containerVariants = {
    hidden: { opacity: 1 },
    show: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 1 },
    show: { opacity: 1 }
  };

  return (
    <div className="w-full space-y-16 pb-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        {/* Section 1: Hero */}
        <motion.section variants={itemVariants} className="flex flex-col items-center text-center space-y-6 pt-4">
          <div className="flex flex-wrap justify-center gap-3">
            {mediaKitData.labels.map((label, idx) => (
              <span key={idx} className="px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase bg-maroon-600 dark:bg-red-700 text-white border border-maroon-500 dark:border-red-600 shadow-sm">
                {label}
              </span>
            ))}
          </div>

          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-br from-maroon-500 to-maroon-900 dark:from-red-600 dark:to-red-950 shadow-2xl mt-4">
            <img 
              src={mediaKitData.avatarUrl} 
              alt={mediaKitData.name} 
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-[#202121]"
            />
          </div>

          <div className="space-y-2 mt-4">
            <h1 className="text-4xl md:text-6xl font-black text-maroon-900 dark:text-white tracking-tight">
              {mediaKitData.name}
            </h1>
            <p className="text-lg md:text-xl font-medium text-maroon-600 dark:text-red-200">
              {mediaKitData.subtitle}
            </p>
          </div>
        </motion.section>

        {/* Section 2: Total Followers */}
        <motion.section variants={itemVariants} className="w-full max-w-4xl mx-auto">
          <div className="bg-maroon-900/80 dark:bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-14 text-center shadow-2xl border border-maroon-800/30 dark:border-white/10 overflow-hidden relative group">
            <div className="absolute inset-0 bg-white/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="text-6xl md:text-8xl font-black text-white drop-shadow-lg mb-2">
              {mediaKitData.totalFollowers}
            </h2>
            <p className="text-xl font-bold text-white uppercase tracking-widest">
              Total Followers
            </p>
          </div>
        </motion.section>

        {/* Section 3: Social Media Reach */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {mediaKitData.reach.map((item, idx) => (
            <a 
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/90 dark:bg-red-950/60 backdrop-blur-md rounded-2xl p-8 border border-maroon-900/10 dark:border-red-800/50 shadow-lg text-center flex flex-col items-center justify-center gap-5 transition-all w-full h-full"
              >
                <div className="w-16 h-16 rounded-full bg-maroon-50 dark:bg-red-900/80 flex items-center justify-center text-maroon-700 dark:text-red-200 group-hover:bg-maroon-600 group-hover:text-white dark:group-hover:bg-red-700 transition-colors duration-300">
                  {item.icon === 'instagram' ? <FaInstagram className="w-8 h-8" /> : 
                   item.icon === 'tiktok' ? <SiTiktok className="w-7 h-7" /> : null}
                </div>
                <div>
                  <h3 className="text-4xl font-black text-maroon-900 dark:text-white group-hover:text-maroon-700 dark:group-hover:text-red-300 transition-colors">
                    {item.value}
                  </h3>
                  <p className="text-sm font-bold text-maroon-600 dark:text-red-200 uppercase tracking-wider mt-2">
                    {item.platform} {item.label}
                  </p>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.section>

        {/* Section 4: About Me */}
        <motion.section variants={itemVariants} className="bg-white/90 dark:bg-[#990000]/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-maroon-900/10 dark:border-red-700/50 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 dark:bg-red-800/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-maroon-900 dark:text-white">
                About Me
              </h2>
              <p className="text-lg text-maroon-800/90 dark:text-red-50 leading-relaxed font-light">
                {mediaKitData.aboutMeText}
              </p>
            </div>
            
            <div className="space-y-4">
              {mediaKitData.aboutPoints.map((point, idx) => (
                <div key={idx} className="bg-maroon-50/50 dark:bg-black/20 p-6 rounded-2xl border border-maroon-100 dark:border-white/5">
                  <h3 className="text-xl font-bold text-maroon-900 dark:text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-maroon-700/80 dark:text-red-100/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: My Latest Posts */}
        <motion.section variants={itemVariants} className="space-y-8 max-w-5xl mx-auto w-full">
          <h2 className="text-3xl font-black text-maroon-900 dark:text-white text-center">
            My Latest Posts
          </h2>
          
          <div className="flex justify-center gap-4">
            {mediaKitData.socialCarousel.map((social, idx) => (
              <button
                key={idx}
                onClick={() => setActivePlatform(idx)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                  activePlatform === idx 
                  ? "bg-maroon-900 text-white dark:bg-red-800 shadow-md transform scale-105" 
                  : "bg-maroon-50 text-maroon-800 hover:bg-maroon-100 dark:bg-red-950/50 dark:text-red-100 dark:hover:bg-red-900/60"
                }`}
              >
                {social.platform === "Instagram" ? <FaInstagram className="w-5 h-5"/> : <SiTiktok className="w-5 h-5"/>}
                {social.platform}
              </button>
            ))}
          </div>

          <div className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden relative shadow-2xl bg-maroon-100 dark:bg-black/40 border border-maroon-200 dark:border-red-900/30 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activePlatform}
                src={mediaKitData.socialCarousel[activePlatform].url}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={`${mediaKitData.socialCarousel[activePlatform].platform} Latest Post`}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
               <a 
                  href="#"
                  className="flex items-center gap-2 text-white font-bold bg-white/20 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  View on {mediaKitData.socialCarousel[activePlatform].platform}
                  <ArrowRight className="w-5 h-5" />
               </a>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}
