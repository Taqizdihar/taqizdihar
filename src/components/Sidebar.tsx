import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { profileImages, name, position } from "../config/navigationData";
import { 
  Home, 
  User, 
  ShoppingCart, 
  Briefcase, 
  FolderGit2, 
  Award, 
  Trophy, 
  Users, 
  Heart,
  X
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Me", path: "/about", icon: User },
  { name: "Products", path: "/products", icon: ShoppingCart },
  { name: "Experience", path: "/experience", icon: Briefcase },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Certifications", path: "/certifications", icon: Award },
  { name: "Achievements", path: "/achievements", icon: Trophy },
  { name: "Organizations", path: "/organizations", icon: Users },
  { name: "Hobbies", path: "/hobbies", icon: Heart },
];

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

export default function Sidebar({ isOpen, closeSidebar }: SidebarProps) {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [isSecretTransitioning, setIsSecretTransitioning] = useState<"entering" | "leaving" | null>(null);

  const nextIndex = (currentIndex + 1) % profileImages.length;

  useEffect(() => {
    [...profileImages, "/assets/sidebar/Secret.png"].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const playFlipSound = () => {
    try {
      const audio = new Audio("https://www.myinstants.com/media/sounds/sonic-coin-1-87135.mp3");
      audio.play().catch((err) => console.log("Audio play prevented/failed:", err));
    } catch (e) {
      console.log("Audio not supported:", e);
    }
  };

  // Route-based Easter Egg Logic
  useEffect(() => {
    const isSecretPage = location.pathname.startsWith("/hobbies/characters") || location.pathname.startsWith("/hobbies/comics");
    if (isSecretPage && !isLocked && !isSecretTransitioning && !isFlipping) {
      playFlipSound();
      setIsSecretTransitioning("entering");
      setIsFlipping(true);
    } else if (!isSecretPage && isLocked && !isSecretTransitioning && !isFlipping) {
      playFlipSound();
      setIsSecretTransitioning("leaving");
      setIsFlipping(true);
    }
  }, [location.pathname, isLocked, isSecretTransitioning, isFlipping]);

  const handleProfileClick = () => {
    if (isFlipping || isLocked) return;
    playFlipSound();
    setIsFlipping(true);
  };

  const checkIsActive = (path: string, isActiveDefault: boolean) => {
    if (path === "/") {
      return isActiveDefault;
    }
    return location.pathname.startsWith(path);
  };

  // Dynamically compute Front and Back images for 3D flip card
  let frontImage = profileImages[currentIndex];
  let backImage = profileImages[nextIndex];

  if (isSecretTransitioning === "entering") {
    frontImage = profileImages[currentIndex];
    backImage = "/assets/sidebar/Secret.png";
  } else if (isSecretTransitioning === "leaving") {
    frontImage = "/assets/sidebar/Secret.png";
    backImage = profileImages[currentIndex];
  } else if (isLocked) {
    frontImage = "/assets/sidebar/Secret.png";
    backImage = "/assets/sidebar/Secret.png";
  }

  return (
    <aside className={`fixed md:sticky top-4 left-4 md:left-0 h-[calc(100vh-2rem)] w-72 md:w-[min(18rem,35vh,25vw)] shrink-0 bg-white/90 dark:bg-[#A81717] backdrop-blur-2xl border border-maroon-900/10 dark:border-white/10 flex flex-col p-[min(1.5rem,3vh)] z-40 transition-all duration-300 ease-in-out rounded-[min(1.5rem,3vh)] shadow-2xl overflow-hidden ${isOpen ? 'translate-x-0 overflow-y-auto' : '-translate-x-[120%] md:translate-x-0 md:overflow-hidden'} `}>
      
      {/* Mobile Close Button */}
      <button 
        onClick={closeSidebar}
        className="md:hidden absolute top-4 right-4 p-2 rounded-full bg-maroon-50 dark:bg-white/10 text-maroon-800 dark:text-white hover:bg-maroon-100 dark:hover:bg-white/20"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-[min(0.5rem,1vh)] mb-[min(1.5rem,3vh)] text-center shrink">
        <motion.div 
          animate={{ scale: [1, 1.03, 1] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative w-[min(7rem,16vh)] h-[min(7rem,16vh)] rounded-full mb-[min(0.75rem,1.5vh)] shadow-xl shrink-0 [perspective:1000px]"
        >
           <motion.button 
             onClick={handleProfileClick}
             animate={isFlipping ? { rotateY: 180 } : { rotateY: 0 }}
             transition={{ duration: isFlipping ? 0.6 : 0, ease: "easeInOut" }}
             onAnimationComplete={() => {
               if (isFlipping) {
                 if (isSecretTransitioning === "entering") {
                   setIsLocked(true);
                   setIsSecretTransitioning(null);
                 } else if (isSecretTransitioning === "leaving") {
                   setIsLocked(false);
                   setIsSecretTransitioning(null);
                 } else {
                   setCurrentIndex(nextIndex);
                 }
                 setIsFlipping(false);
               }
             }}
             className="relative w-full h-full rounded-full bg-stone-100 dark:bg-[#A81717] flex items-center justify-center transition-colors duration-300 [transform-style:preserve-3d] cursor-pointer"
           >
            {/* Front Face */}
            <img 
              src={frontImage} 
              alt="Profile Front" 
              className="absolute inset-0 w-full h-full object-cover rounded-full [backface-visibility:hidden]"
            />
            {/* Back Face */}
            <img 
              src={backImage} 
              alt="Profile Back" 
              className="absolute inset-0 w-full h-full object-cover rounded-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
            />
          </motion.button>
        </motion.div>
        <h2 className="text-[min(1.5rem,3vh)] font-bold text-maroon-900 dark:text-white tracking-tight transition-colors duration-300 leading-tight">{name}</h2>
        <p className="text-[min(0.875rem,1.6vh)] text-maroon-600 dark:text-white/80 font-medium mt-[min(0.25rem,0.5vh)] uppercase tracking-wider transition-colors duration-300 leading-tight">
          {position}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto md:overflow-hidden w-full min-h-0 flex flex-col justify-center">
        <ul className="space-y-[min(0.25rem,0.6vh)] w-full">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => {
                  if (window.innerWidth < 768) closeSidebar();
                }}
                className={({ isActive }) =>
                  `flex items-center gap-[min(0.75rem,1.5vh)] px-[min(1rem,2vh)] py-[min(0.65rem,1.4vh)] rounded-[min(0.75rem,1.5vh)] transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 group ${
                    checkIsActive(link.path, isActive)
                    ? "bg-maroon-100 dark:bg-white/10 text-maroon-900 dark:text-white font-bold border border-maroon-300 dark:border-white/20 shadow-[0_0_15px_rgba(189,0,0,0.05)] dark:shadow-none" 
                    : "text-maroon-700/80 dark:text-white/70 hover:text-maroon-900 dark:hover:text-white hover:bg-maroon-50 dark:hover:bg-white/5 border border-transparent"
                  }`
                }
              >
                <link.icon className="w-[min(1.25rem,2.4vh)] h-[min(1.25rem,2.4vh)] shrink-0" />
                <span className="text-[min(1rem,1.8vh)] leading-none">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
