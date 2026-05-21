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

      <div className="grid grid-cols-1 gap-6">
        {/* Prominent Wide Promo Card */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-maroon-50 dark:bg-[#A81717]/20 border border-maroon-900/10 dark:border-white/10 shadow-xl flex flex-col md:flex-row group transition-all duration-300 hover:shadow-2xl">
          {/* Left Side: Blended Image */}
          <div className="relative w-full md:w-[35%] lg:w-[30%] h-64 md:h-auto overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)] md:[mask-image:linear-gradient(to_right,black_60%,transparent_100%)] shrink-0">
            <img 
              src="/assets/hobbies/My Characters.jpg" 
              alt="Art sketch"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-10 md:-ml-8 bg-maroon-50 dark:bg-transparent dark:md:bg-transparent">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-maroon-900 dark:text-white mb-4 transition-colors">
              My Characters
            </h2>
            <p className="text-maroon-800/80 dark:text-white/80 text-lg mb-8 leading-relaxed max-w-md transition-colors text-justify">
              Explore the characters from my simple drawing hobby.
            </p>
            <div>
              <Link 
                to="/hobbies/characters"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-maroon-100/50 hover:bg-maroon-200 dark:bg-white/10 dark:hover:bg-white/20 text-maroon-900 dark:text-white font-semibold transition-all duration-300 border border-maroon-200 dark:border-white/20"
              >
                Explore
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Space for future cards... */}
      </div>
    </div>
  );
}
