import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { profileImages } from "../config/navigationData";
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
  const [imageIndex, setImageIndex] = useState(0);
  const [flipDegree, setFlipDegree] = useState(0);
  const [isMirrored, setIsMirrored] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleProfileClick = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDegree((prev) => prev + 180);
    // Change image at exactly half the animation duration (300ms) when the flip is edge-on sideways to hide the transition
    setTimeout(() => {
      setImageIndex((prev) => (prev + 1) % profileImages.length);
      setIsMirrored((prev) => !prev);
    }, 300);
  };

  const checkIsActive = (path: string, isActiveDefault: boolean) => {
    if (path === "/") {
      return isActiveDefault;
    }
    return location.pathname.startsWith(path);
  };

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
          className="relative w-[min(7rem,16vh)] h-[min(7rem,16vh)] rounded-full mb-[min(0.75rem,1.5vh)] p-[min(0.25rem,0.5vh)] bg-gradient-to-br from-maroon-400 to-maroon-800 dark:from-white/20 dark:to-white/5 transition-colors duration-300 shadow-xl shrink-0 [perspective:1000px]"
        >
           <motion.button 
             onClick={handleProfileClick}
             animate={{ rotateY: flipDegree }}
             transition={{ duration: 0.6, ease: "easeInOut" }}
             onAnimationComplete={() => setIsFlipping(false)}
             className="relative w-full h-full rounded-full bg-stone-100 dark:bg-[#A81717] flex items-center justify-center overflow-hidden transition-colors duration-300 border border-transparent dark:border-white/10 [transform-style:preserve-3d] cursor-pointer outline-none focus:ring-2 focus:ring-maroon-500 focus:ring-offset-2 dark:focus:ring-offset-[#211116]"
           >
            {/* Image */}
            <img 
              src={profileImages[imageIndex]} 
              alt="Profile" 
              className={`w-full h-full object-cover rounded-full ${isMirrored ? '[transform:scaleX(-1)]' : ''}`}
            />
          </motion.button>
        </motion.div>
        <h2 className="text-[min(1.5rem,3vh)] font-bold text-maroon-900 dark:text-white tracking-tight transition-colors duration-300 leading-tight">John Doe</h2>
        <p className="text-[min(0.875rem,1.6vh)] text-maroon-600 dark:text-white/80 font-medium mt-[min(0.25rem,0.5vh)] uppercase tracking-wider transition-colors duration-300 leading-tight">
          Creative Director / Developer
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
