import {
  Moon,
  Sun,
  FileText,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import IconResolver from "./IconResolver";
import { socials, logo } from "../config/navigationData";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-4 w-full py-4 rounded-2xl bg-white/90 dark:bg-[#A81717] backdrop-blur-xl border border-maroon-900/10 dark:border-white/10 z-50 px-4 md:px-6 flex flex-wrap items-center justify-between gap-3 transition-colors duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] lg:flex-nowrap">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg bg-maroon-50 dark:bg-white/10 text-maroon-900 dark:text-white hover:bg-maroon-100 dark:hover:bg-white/20 transition-colors drop-shadow-md"
        >
          <Menu className="w-6 h-6 drop-shadow-md" />
        </button>

        {/* Logo */}
        <Link to="/" className="hidden md:block">
          <img 
            src={theme === "dark" ? "/assets/sidebar/Navbar Logo - Dark Theme.png" : "/assets/sidebar/Navbar Logo - Light Theme.png"} 
            alt="Logo" 
            className={`h-8 md:h-9 w-auto object-contain ${theme === "light" ? "drop-shadow-md" : ""}`} 
          />
        </Link>
      </div>

      <div className="flex flex-wrap flex-1 justify-end items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
        {/* Social Links */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 border-r border-maroon-900/20 dark:border-white/20 pr-4 xl:pr-6 transition-colors">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-maroon-800 dark:text-white hover:text-maroon-950 dark:hover:text-white p-1.5 xl:p-2 hover:bg-maroon-50 dark:hover:bg-white/10 rounded-full group hover:scale-110 hover:-translate-y-1 transition-all duration-200"
              title={social.name}
              target="_blank"
              rel="noreferrer"
            >
              <IconResolver name={social.name} className="w-5 h-5 xl:w-6 xl:h-6 drop-shadow-md group-hover:drop-shadow-lg" />
            </a>
          ))}
        </div>

        {/* Media Kit Button */}
        <Link to="/media-kit" className="flex shrink-0 relative items-center gap-1 sm:gap-2 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-900 px-2.5 sm:px-4 xl:px-5 py-1.5 sm:py-2 xl:py-2.5 rounded-full font-bold text-[10px] sm:text-xs xl:text-sm transition-all shadow-md hover:shadow-lg border border-gray-400/50 overflow-hidden group">
          <div className="absolute top-0 left-0 h-full w-[150%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer"></div>
          <FileText className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" />
          <span className="relative z-10 whitespace-nowrap">Media Kit</span>
        </Link>

        {/* Toggle Controls Container */}
        <div className="flex shrink-0 items-stretch h-8 sm:h-9 xl:h-10 rounded-xl overflow-hidden border border-maroon-900/10 dark:border-white/10 divide-x divide-maroon-900/10 dark:divide-white/10 bg-maroon-50 dark:bg-[#851111] shadow-sm">
          {/* Language Switcher */}
          <button className="w-full h-full flex items-center justify-center px-2 sm:px-3 xl:px-4 py-1.5 sm:py-2 hover:bg-maroon-100 dark:hover:bg-[#951515] text-maroon-900 dark:text-white hover:text-maroon-950 dark:hover:text-white transition-colors text-[10px] sm:text-xs xl:text-sm font-semibold">
            EN
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-full h-full flex items-center justify-center px-2 sm:px-3 xl:px-4 py-1.5 sm:py-2 hover:bg-maroon-100 dark:hover:bg-[#951515] text-maroon-900 dark:text-white hover:text-maroon-950 dark:hover:text-white transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5 xl:w-4 xl:h-4 drop-shadow-md" />
            ) : (
              <Moon className="w-3.5 h-3.5 xl:w-4 xl:h-4 drop-shadow-md" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
