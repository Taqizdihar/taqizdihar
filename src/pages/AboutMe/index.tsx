import { profile, aboutMe } from "./data";
import { 
  Download, 
  GraduationCap, 
  Building2, 
  FileText,
  Quote,
  Briefcase,
  Calendar,
  Heart,
  Brain,
  Globe,
  Flag
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const getIcon = (label: string) => {
  switch (label) {
    case "Motto": return <Quote className="w-5 h-5 shrink-0" />;
    case "Position": return <Briefcase className="w-5 h-5 shrink-0" />;
    case "Age": return <Calendar className="w-5 h-5 shrink-0" />;
    case "Marital Status": return <Heart className="w-5 h-5 shrink-0" />;
    case "MBTI Type": return <Brain className="w-5 h-5 shrink-0" />;
    case "Languages": return <Globe className="w-5 h-5 shrink-0" />;
    case "Nationality": return <Flag className="w-5 h-5 shrink-0" />;
    default: return null;
  }
};

export default function AboutMe() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full space-y-16">
      {/* Header Section */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
          About Me
        </h1>
        <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
      </section>

      {/* Bio Section Consolidated Card */}
      <section className="relative w-full rounded-3xl overflow-hidden bg-white/90 dark:bg-[#A81717] border border-maroon-900/10 dark:border-white/10 shadow-2xl flex flex-col md:flex-row group transition-colors duration-300">
        {/* Left Inner Side: Blended Photo */}
        {aboutMe?.bioPhoto && (
          <div className="relative w-full md:w-[35%] lg:w-[30%] h-64 md:h-auto overflow-hidden shrink-0 [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)] md:[mask-image:linear-gradient(to_right,black_60%,transparent_100%)] z-0">
            <div className="absolute inset-0 bg-maroon-100/20 dark:bg-white/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
            <img
              src={aboutMe.bioPhoto}
              alt="Profile Bio"
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 relative z-0"
            />
          </div>
        )}

        {/* Right Inner Side: Bio Text and Buttons */}
        <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative z-10 md:-ml-12 bg-white/5 dark:bg-transparent dark:md:bg-transparent">
          {aboutMe?.bio && (
            <p className="text-lg md:text-[1.15rem] text-maroon-900/80 dark:text-white/90 leading-relaxed font-light transition-colors duration-300 md:pl-8">
              {aboutMe.bio}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 mt-10 md:pl-8">
            {aboutMe?.cvLink && (
              <a
                href={aboutMe.cvLink}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-maroon-600 to-maroon-800 dark:from-[#7E1111] dark:to-[#6A0C0C] hover:from-maroon-500 hover:to-maroon-700 dark:hover:from-[#951515] dark:hover:to-[#7E1111] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-maroon-500/30 border border-maroon-500/30 dark:border-white/10 group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span>Download CV</span>
              </a>
            )}

            <Link to="/media-kit" className="inline-flex relative shrink-0 items-center justify-center gap-2 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 text-gray-900 px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg border border-gray-400/50 overflow-hidden group">
              <div className="absolute top-0 left-0 h-full w-[150%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer"></div>
              <FileText className="w-5 h-5 relative z-10" />
              <span className="relative z-10 whitespace-nowrap">Media Kit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Personal Details Section */}
      {profile?.details && profile.details.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-maroon-900 dark:text-white transition-colors duration-300">
            Personal Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {profile.details.map((detail, index) => (
              <div
                key={index}
                className={`bg-white/90 dark:bg-[#A81717] backdrop-blur-sm rounded-xl p-6 border border-maroon-900/10 dark:border-white/10 hover:border-maroon-300 dark:hover:border-white/20 transition-colors duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl flex flex-col ${detail.label === "Motto" ? "col-span-1 md:col-span-3" : "col-span-1"}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium tracking-wide uppercase text-maroon-700 dark:text-white/70 transition-colors duration-300">
                    {detail.label}
                  </p>
                  <div className="text-maroon-400 dark:text-white/50">
                    {getIcon(detail.label)}
                  </div>
                </div>
                <p className="text-lg font-semibold text-maroon-900 dark:text-white transition-colors duration-300">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {aboutMe?.education && aboutMe.education.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-maroon-900 dark:text-white transition-colors duration-300">
            <GraduationCap className="w-7 h-7 text-maroon-500 dark:text-white" />
            Education
          </h2>
          <div className="space-y-6">
            {aboutMe.education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-[#A81717] backdrop-blur-md rounded-3xl p-6 md:p-8 border border-maroon-900/10 dark:border-white/5 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row gap-5 md:gap-6 items-start group relative overflow-hidden"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center p-2 shrink-0 border border-maroon-200 dark:border-white/20 shadow-sm overflow-hidden z-10">
                  {edu.institutionLogo ? (
                    <img
                      src={edu.institutionLogo}
                      alt={`${edu.institution} Logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Building2 className="w-8 h-8 text-maroon-400" />
                  )}
                </div>

                <div className="w-full flex-1 flex flex-col z-10 sm:mt-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex-1 pr-0 sm:pr-8">
                      {edu.institution && (
                        <h3 className="text-xl sm:text-[1.35rem] font-bold text-maroon-900 dark:text-white transition-colors duration-300 leading-tight mb-1">
                          {edu.institution}
                        </h3>
                      )}
                      {edu.degree && (
                        <span className="font-semibold text-base sm:text-lg text-white italic transition-colors duration-300 block">
                          {edu.degree}
                        </span>
                      )}
                      {edu.grade && (
                        <div className="mt-3 sm:mt-4 inline-block">
                          <span className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold bg-maroon-50 text-maroon-800 border border-maroon-200 dark:bg-white/10 dark:text-white dark:border-white/20 transition-colors duration-300 shadow-sm tracking-wide">
                            GPA: {edu.grade}
                          </span>
                        </div>
                      )}
                    </div>
                    {edu.years && (
                      <div className="shrink-0 absolute top-6 right-6 sm:top-auto sm:right-auto sm:relative">
                        <span className="inline-flex items-center px-[0.875rem] py-1 rounded-full text-xs sm:text-sm font-bold border bg-maroon-50 text-maroon-800 border-maroon-200 dark:bg-white/10 dark:text-white dark:border-white/20 transition-colors duration-300 shadow-sm">
                          {edu.years}
                        </span>
                      </div>
                    )}
                  </div>
                  {edu.description && (
                    <p className="leading-relaxed text-maroon-900/80 dark:text-white/90 transition-colors duration-300 mt-2 text-[15px] sm:text-base">
                      {edu.description}
                    </p>
                  )}
                  {edu.media && edu.media.length > 0 && (
                    <div className="flex overflow-x-auto gap-4 mt-6 pb-2 no-scrollbar">
                      {edu.media.map((imgUrl, imgIndex) => (
                        <img 
                          key={imgIndex} 
                          src={imgUrl} 
                          alt={`${edu.institution} related`} 
                          className="w-48 h-32 object-cover rounded-xl shrink-0 border border-maroon-900/10 dark:border-white/10" 
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
