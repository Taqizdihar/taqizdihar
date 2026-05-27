import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Hobbies() {
  useDocumentTitle("Hobbies");
  return (
    <div className="w-full space-y-12 animate-fade-in">
      {/* Header Section */}
      <section className="space-y-4 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
          Hobbies
        </h1>
        <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
        <p className="text-lg text-maroon-700/80 dark:text-white/70 font-medium max-w-2xl transition-colors duration-300 mt-4 text-justify">Some of the things I love doing in my free time.</p>


      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prominent Wide Promo Card */}
        <Link 
          to="/hobbies/characters"
          className="relative w-full rounded-3xl overflow-hidden bg-maroon-50 dark:bg-[#A81717]/20 border border-maroon-900/10 dark:border-white/10 shadow-xl flex flex-col xl:flex-row group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
        >
          {/* Left Side: Blended Image */}
          <div className="relative w-full xl:w-[40%] aspect-square overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] xl:[-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)] xl:[mask-image:linear-gradient(to_right,black_60%,transparent_100%)] shrink-0">
            <img 
              src="/assets/hobbies/characters/My Characters.jpg" 
              alt="Art sketch"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 p-6 md:p-8 xl:p-10 flex flex-col justify-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-maroon-900 dark:text-white mb-3 transition-colors">
              My Characters
            </h2>
            <p className="text-maroon-800/80 dark:text-white/80 text-base md:text-lg mb-6 leading-relaxed max-w-md transition-colors text-justify">
              Explore the characters from my simple drawing hobby.
            </p>
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-maroon-100/50 hover:bg-maroon-200 dark:bg-white/10 dark:hover:bg-white/20 text-maroon-900 dark:text-white font-semibold transition-all duration-300 border border-maroon-200 dark:border-white/20">
                Explore
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>

        {/* Comics Promo Card */}
        <Link 
          to="/hobbies/comics"
          className="relative w-full rounded-3xl overflow-hidden bg-maroon-50 dark:bg-[#A81717]/20 border border-maroon-900/10 dark:border-white/10 shadow-xl flex flex-col xl:flex-row group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
        >
          {/* Left Side: Blended Image */}
          <div className="relative w-full xl:w-[40%] aspect-square overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] xl:[-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)] xl:[mask-image:linear-gradient(to_right,black_60%,transparent_100%)] shrink-0">
            <img 
              src="/assets/hobbies/Comics.jpg" 
              alt="Comics cover"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 p-6 md:p-8 xl:p-10 flex flex-col justify-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-maroon-900 dark:text-white mb-3 transition-colors">
              Comics
            </h2>
            <p className="text-maroon-800/80 dark:text-white/80 text-base md:text-lg mb-6 leading-relaxed max-w-md transition-colors text-justify">
              Read the comics I've created in my free time.
            </p>
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-maroon-100/50 hover:bg-maroon-200 dark:bg-white/10 dark:hover:bg-white/20 text-maroon-900 dark:text-white font-semibold transition-all duration-300 border border-maroon-200 dark:border-white/20">
                Read
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
