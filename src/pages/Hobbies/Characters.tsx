import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { FaUserAstronaut } from "react-icons/fa6";
import { characters } from "./CharactersData";
import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Characters() {
  useDocumentTitle("Characters");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCharacters = characters.filter((char) =>
    char?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Smart sorting: characters with images first (alphabetical), then without images (alphabetical)
  const sortedCharacters = [...filteredCharacters].sort((a, b) => {
    const aHasImages = a.images && a.images.length > 0;
    const bHasImages = b.images && b.images.length > 0;

    // Rule A: Group priority — characters with images come first
    if (aHasImages && !bHasImages) return -1;
    if (!aHasImages && bHasImages) return 1;

    // Rule B: Within the same group, sort alphabetically by name
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="w-full space-y-12 animate-fade-in">
      {/* Back Button & Header */}
      <section className="space-y-4">
        <Link 
          to="/hobbies"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maroon-50 dark:bg-white/10 hover:bg-maroon-100 dark:hover:bg-white/20 text-maroon-800 dark:text-white transition-colors border border-maroon-200 dark:border-white/10 w-fit font-medium text-sm shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Hobbies
        </Link>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
            My Characters
          </h1>
          <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
          <p className="text-lg text-maroon-700/80 dark:text-white/70 font-medium max-w-2xl transition-colors duration-300 mt-4">
            A collection of original characters from my drawing hobby.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section>
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-maroon-500 dark:text-white/50" />
          </div>
          <input
            type="text"
            placeholder="Search character..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white/90 dark:bg-white/5 border border-maroon-900/10 dark:border-white/10 rounded-2xl text-maroon-900 dark:text-white placeholder-maroon-900/40 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-maroon-500/50 dark:focus:ring-white/20 transition-all duration-300 shadow-sm"
          />
        </div>
      </section>

      {/* Characters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCharacters.map((char) => {
          const hasImages = char.images && char.images.length > 0;

          return (
            <Link
              key={char.id}
              to={`/hobbies/characters/${char.id}`}
              className="group relative h-28 sm:h-32 flex items-center bg-white/90 dark:bg-[#A81717]/20 border border-maroon-900/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* 1:1 Aspect Ratio Image / Fallback Icon on the left */}
              <div className="h-full aspect-square relative shrink-0 [-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)] [mask-image:linear-gradient(to_right,black_60%,transparent_100%)] z-0">
                {hasImages ? (
                  <img
                    src={char.images[0]}
                    alt={char.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-maroon-100 dark:bg-white/10">
                    <FaUserAstronaut className="w-12 h-12 text-maroon-400 dark:text-white/40" />
                  </div>
                )}
              </div>

              {/* Right side content */}
              <div className="flex-1 min-w-0 py-4 px-4 relative z-10 pl-4">
                <h3 className="text-xl sm:text-[1.35rem] font-bold text-maroon-900 dark:text-white truncate transition-colors duration-300 leading-tight">
                  {char.name}
                </h3>
                <p className="text-[0.9rem] text-maroon-600 dark:text-white/70 line-clamp-2 mt-1.5 transition-colors duration-300 leading-snug font-medium">
                  {char?.details?.find((d) => d.label === "ShortDescription")?.value}
                </p>
              </div>
            </Link>
          );
        })}

        {sortedCharacters.length === 0 && (
          <div className="col-span-full py-12 text-center text-maroon-600 dark:text-white/60">
            No characters found matching "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
}
