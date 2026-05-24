import { ReactNode } from "react";
import { Calendar, MapPin, ExternalLink, Video, FileText, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { useMediaModal } from "../contexts/MediaModalContext";

export interface MediaItem {
  type?: "image" | "video" | "pdf";
  url: string;
  title?: string;
}

export interface UnifiedCardProps {
  key?: string | number;
  title: string;
  subtitle?: string;
  logoUrl?: string;
  logoFallbackIcon?: ReactNode;
  startDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
  skills?: string[];
  media?: MediaItem[];
  actionBtn?: {
    label: string;
    url: string;
    icon?: ReactNode;
  };
}

export default function UnifiedCard({
  title,
  subtitle,
  logoUrl,
  logoFallbackIcon = <Building2 className="w-6 h-6" />,
  startDate,
  endDate,
  location,
  description,
  skills,
  media,
  actionBtn
}: UnifiedCardProps) {
  const { openModal } = useMediaModal();
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className="bg-white/90 dark:bg-[#A81717] backdrop-blur-md rounded-2xl p-6 md:p-8 border border-maroon-900/10 dark:border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group flex flex-col"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-4">
          <div 
            className={`hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl border border-maroon-100 dark:border-white/10 bg-white dark:bg-white/5 text-maroon-600 dark:text-white shrink-0 shadow-sm overflow-hidden ${logoUrl ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
            onClick={() => logoUrl && openModal(logoUrl)}
          >
            {logoUrl ? (
              <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" />
            ) : (
              logoFallbackIcon
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-maroon-900 dark:text-white transition-colors">
              {title}
            </h3>
            {subtitle && (
              <span className="text-lg font-semibold text-maroon-700 dark:text-white/90 transition-colors mt-1 block">
                {subtitle}
              </span>
            )}
            {actionBtn && (
              <a href={actionBtn.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-3 text-sm font-semibold bg-maroon-50 hover:bg-maroon-100 dark:bg-white/10 dark:hover:bg-white/20 text-maroon-800 dark:text-white px-4 py-2 rounded-full transition-colors border border-maroon-200 dark:border-white/20 shadow-sm">
                {actionBtn.icon || <ExternalLink className="w-4 h-4" />}
                {actionBtn.label}
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1.5 md:items-end text-sm text-maroon-800/80 dark:text-white/80 font-medium shrink-0">
          {(startDate || endDate) && (
            <div className="flex items-center justify-start md:justify-end gap-1.5 bg-maroon-50 dark:bg-white/10 px-3 py-1.5 rounded-full border border-maroon-100 dark:border-white/20 shadow-sm">
              <Calendar className="w-4 h-4 text-maroon-600 dark:text-white/90" />
              <span>
                {startDate} {startDate && endDate ? " - " : ""} {endDate}
              </span>
            </div>
          )}
          {location && (
            <div className="flex items-center justify-start md:justify-end gap-1.5 mt-1 md:mt-2">
              <MapPin className="w-4 h-4 text-maroon-600 dark:text-white/90" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
      
      {description && (
        <p className="text-maroon-900/80 dark:text-white text-base leading-relaxed mb-6 font-light transition-colors mt-2 text-justify">
          {description}
        </p>
      )}

      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill, idx) => (
            <span 
              key={idx}
              className="px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-maroon-100 dark:bg-white/10 text-maroon-900 dark:text-white border border-maroon-200 dark:border-white/20 transition-colors shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {media && media.length > 0 && (
        <div className="flex overflow-x-auto gap-4 mt-auto pt-6 pb-4 border-t border-maroon-900/10 dark:border-white/10 custom-scrollbar">
          {media.map((item, idx) => {
            const type = item.type || "image";
            if (type === 'image') {
              return (
                <div 
                  key={idx} 
                  className="relative shrink-0 w-72 sm:w-80 group/media overflow-hidden rounded-xl border border-maroon-100 dark:border-white/20 transition-colors shadow-md bg-maroon-50 dark:bg-white/5 aspect-video cursor-pointer"
                  onClick={() => openModal(item.url)}
                >
                  <img src={item.url} alt={`Media ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              );
            }
            if (type === 'video') {
              return (
                <div 
                  key={idx} 
                  className="relative shrink-0 w-72 sm:w-80 rounded-xl border border-maroon-100 dark:border-white/20 overflow-hidden bg-maroon-900/5 dark:bg-white/5 flex flex-col items-center justify-center p-4 transition-colors shadow-md aspect-video group/video hover:bg-maroon-900/10 dark:hover:bg-white/10 cursor-pointer"
                  onClick={() => openModal(item.url)}
                >
                   <Video className="w-8 h-8 text-maroon-400 dark:text-white/80 opacity-80 mb-2 group-hover/video:scale-110 transition-transform" />
                   <span className="text-sm font-medium text-maroon-800 dark:text-white text-center px-2">{item.title || "Video Attachment"}</span>
                </div>
              );
            }
            if (type === 'pdf') {
              return (
                <div 
                  key={idx} 
                  onClick={() => openModal(item.url)}
                  className="flex shrink-0 w-64 sm:w-72 items-center justify-between p-4 rounded-xl border border-maroon-200 dark:border-white/20 bg-maroon-50 dark:bg-white/5 hover:bg-maroon-100 dark:hover:bg-white/10 transition-colors shadow-md group/pdf min-h-[5rem] cursor-pointer"
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-2 bg-white dark:bg-white/10 rounded-lg text-maroon-700 dark:text-white shadow-sm group-hover/pdf:scale-110 transition-transform shrink-0">
                        <FileText className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-sm text-maroon-900 dark:text-white line-clamp-2">{item.title || "Document Attachment"}</span>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </motion.div>
  );
}
