import { X } from "lucide-react";
import { useMediaModal } from "../contexts/MediaModalContext";
import { useEffect } from "react";

export default function MediaModal() {
  const { isOpen, mediaUrl, closeModal } = useMediaModal();

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
      {/* Dim Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={closeModal} 
      />
      
      {/* Content positioning wrapper matching Layout.tsx exactly */}
      <div className="absolute inset-0 rtl:flex-row-reverse flex flex-col md:flex-row p-0 md:p-4 lg:p-6 gap-4 md:gap-6 lg:gap-8 pointer-events-none">
        
        {/* Sidebar Placeholder */}
        <div className="hidden md:block w-72 md:w-[min(18rem,35vh,25vw)] shrink-0" />
        
        {/* Main Content Placeholder */}
        <div className="flex-1 flex flex-col min-w-0 w-full px-4 md:px-0 pt-4 md:pt-0 pb-8 h-full">
           {/* Space for Navbar */}
           <div className="h-[72px] md:h-[80px] shrink-0 w-full" />
           
           {/* Red Window */}
           <div className="flex-1 mt-6 md:mt-8 bg-[#991b1b] dark:bg-[#7f1d1d] rounded-3xl md:rounded-[2rem] shadow-2xl relative overflow-hidden flex items-center justify-center p-2 md:p-6 border border-white/10 pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
             <button 
               onClick={closeModal} 
               className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20"
             >
               <X className="w-5 h-5" />
             </button>
             
             {mediaUrl?.match(/\.(mp4|webm)$/i) ? (
               <video src={mediaUrl} controls autoPlay className="object-contain w-full h-full rounded-2xl drop-shadow-2xl" />
             ) : mediaUrl?.match(/\.pdf$/i) ? (
               <iframe src={mediaUrl} className="w-full h-full rounded-2xl drop-shadow-2xl bg-white" title="Document" />
             ) : (
               <img src={mediaUrl || ""} className="object-contain w-full h-full rounded-2xl drop-shadow-2xl" alt="Modal Media" />
             )}
           </div>
        </div>
      </div>
    </div>
  );
}
