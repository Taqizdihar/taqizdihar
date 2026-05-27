import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Calendar, Globe2, BookOpen } from "lucide-react";
import { comics } from "./ComicsData";
import { useMediaModal } from "../../contexts/MediaModalContext";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Comics() {
  useDocumentTitle("Comics");
  const [searchTerm, setSearchTerm] = useState("");
  const { openModal } = useMediaModal();

  const filteredComics = comics.filter((comic) =>
    comic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full space-y-12 animate-fade-in pb-12">
      {/* Back Button & Header */}
      <section className="space-y-6">
        <Link
          to="/hobbies"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-50 dark:bg-white/10 hover:bg-maroon-100 dark:hover:bg-white/20 text-maroon-800 dark:text-white transition-colors border border-maroon-200 dark:border-white/10 w-fit font-medium text-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Hobbies
        </Link>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
            Comics
          </h1>
          <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
          <p className="text-lg text-maroon-700/80 dark:text-white/70 font-medium max-w-2xl transition-colors duration-300 mt-4">
            A collection of my comic projects, stories, and visual narratives.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section>
        <div className="relative max-w-2xl w-full">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-maroon-500 dark:text-white/50" />
          </div>
          <input
            type="text"
            placeholder="Search comic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white/90 dark:bg-white/5 border border-maroon-900/10 dark:border-white/10 rounded-2xl text-maroon-900 dark:text-white placeholder-maroon-900/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-maroon-500/50 dark:focus:ring-white/20 transition-all duration-300 shadow-sm"
          />
        </div>
      </section>

      {/* Comics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredComics.length > 0 ? (
          filteredComics.map((comic) => (
            <div 
              key={comic.id} 
              className="bg-white/90 dark:bg-[#A81717]/30 backdrop-blur-md rounded-2xl p-5 border border-maroon-900/10 dark:border-white/10 shadow-xl flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div 
                className="w-full aspect-[16/9] sm:aspect-video rounded-xl overflow-hidden bg-maroon-100 dark:bg-black/20 mb-5 relative cursor-pointer shadow-inner"
                onClick={() => comic.media[0] && openModal(comic.media[0], comic.shortDescription)}
              >
                {comic.media && comic.media.length > 0 ? (
                  <img 
                    src={comic.media[0]} 
                    alt={comic.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" stroke="%23991b1b" opacity="0.2"><rect width="100%" height="100%" fill="%23fee2e2" stroke="none"/><path d="M0 0L1000 1000M1000 0L0 1000" stroke-width="2"/></svg>';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-maroon-800/40 dark:text-white/30 font-medium">
                    No Cover Available
                  </div>
                )}
                
                {/* Status Badge Over Image */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                  {comic.status}
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-maroon-900 dark:text-white mb-2 transition-colors">
                  {comic.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-maroon-700 dark:text-white/80 bg-maroon-50 dark:bg-white/10 px-2.5 py-1 rounded-md border border-maroon-100 dark:border-white/10">
                    <Calendar className="w-3.5 h-3.5" />
                    {comic.year}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-maroon-700 dark:text-white/80 bg-maroon-50 dark:bg-white/10 px-2.5 py-1 rounded-md border border-maroon-100 dark:border-white/10">
                    <Globe2 className="w-3.5 h-3.5" />
                    {comic.language}
                  </div>
                </div>

                <p className="text-maroon-800/80 dark:text-white/80 text-sm leading-relaxed mb-6 flex-1 text-justify">
                  {comic.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {comic.media.slice(0, 3).map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => openModal(page, `${comic.title} - Page ${idx + 1}`)}
                      className="flex items-center gap-2 px-4 py-2 bg-maroon-100 dark:bg-[#7f1d1d] hover:bg-maroon-200 dark:hover:bg-[#991b1b] text-maroon-900 dark:text-white text-xs font-bold rounded-lg transition-colors border border-maroon-200 dark:border-white/10"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Read Page {idx + 1}
                    </button>
                  ))}
                  {comic.media.length > 3 && (
                     <span className="flex items-center text-xs font-bold text-maroon-700 dark:text-white/70 px-2">
                       +{comic.media.length - 3} more
                     </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 py-12 flex flex-col items-center justify-center text-center">
            <p className="text-xl font-semibold text-maroon-800 dark:text-white/80">
              No comics found.
            </p>
            <p className="text-maroon-600 dark:text-white/60 mt-2">
              Try adjusting your search term.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
