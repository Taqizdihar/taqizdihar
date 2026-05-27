import { X, ImageIcon } from "lucide-react";
import { useMediaModal } from "../contexts/MediaModalContext";
import { useEffect } from "react";

export default function MediaModal() {
  const { isOpen, mediaUrl, mediaDescription, closeModal } = useMediaModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-auto">
      {/* Transparent click-away overlay — no dimming, no blur */}
      <div 
        className="absolute inset-0" 
        onClick={closeModal} 
      />
      
      {/* Content positioning wrapper matching Layout.tsx exactly horizontally, but fixed vertically to match Sidebar */}
      <div className="absolute inset-0 rtl:flex-row-reverse flex flex-col md:flex-row px-0 md:px-4 lg:px-6 pt-0 md:pt-4 lg:pt-6 pb-4 gap-4 md:gap-6 lg:gap-8 pointer-events-none">
        
        {/* Sidebar Placeholder */}
        <div className="hidden md:block w-72 md:w-[min(18rem,35vh,25vw)] shrink-0" />
        
        {/* Main Content Placeholder */}
        <div className="flex-1 flex flex-col min-w-0 w-full px-4 md:px-0 pt-4 md:pt-0 pb-0 h-full">
           {/* Space for Navbar */}
           <div className="h-[72px] md:h-[80px] shrink-0 w-full" />
           
           {/* Red Window — Two-Column Layout */}
           <div className="flex-1 mt-6 md:mt-8 bg-[#991b1b] dark:bg-[#7f1d1d] rounded-3xl md:rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.7)] relative overflow-hidden flex flex-col md:flex-row p-2 md:p-0 border border-white/10 pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
             <button 
               onClick={closeModal} 
               className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20"
             >
               <X className="w-5 h-5" />
             </button>
             
             {/* Left Column — Media Preview (50%) */}
             <div className="w-full md:w-1/2 flex items-center justify-center p-3 md:p-6 shrink-0">
               {mediaUrl?.match(/\.(mp4|webm)$/i) ? (
                 <video src={mediaUrl} controls autoPlay className="object-contain max-w-full max-h-full rounded-2xl drop-shadow-2xl" />
               ) : mediaUrl?.match(/\.pdf$/i) ? (
                 <iframe src={mediaUrl} className="w-full h-full rounded-2xl drop-shadow-2xl bg-white" title="Document" />
               ) : (
                 <img src={mediaUrl || ""} className="object-contain max-w-full max-h-full rounded-2xl drop-shadow-2xl" alt="Modal Media" />
               )}
             </div>
             
             {/* Right Column — Description Area (50%) */}
             <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 overflow-y-auto">
               {mediaDescription ? (
                 <div className="space-y-4">
                   <div className="flex items-center gap-2 mb-2">
                     <ImageIcon className="w-5 h-5 text-white/60" />
                     <span className="text-xs uppercase tracking-widest font-semibold text-white/50">Media Description</span>
                   </div>
                   <p className="text-white text-base md:text-lg leading-relaxed font-light">
                     {mediaDescription}
                   </p>
                 </div>
               ) : (
                 <div className="flex flex-col items-center justify-center text-white/30 gap-3">
                   <ImageIcon className="w-10 h-10" />
                   <span className="text-sm font-medium">No description available</span>
                 </div>
               )}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
