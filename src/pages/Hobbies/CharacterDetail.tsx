import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { characters } from "./CharactersData";
import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function CharacterDetail() {
  const { id } = useParams();
  const character = characters.find((c) => c.id === id);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useDocumentTitle(character?.name || "Character Detail");

  if (!character) {
    return (
      <div className="w-full space-y-12 animate-fade-in text-center py-20">
        <h2 className="text-2xl font-bold dark:text-white">Character not found</h2>
        <Link to="/hobbies/characters" className="text-maroon-600 dark:text-maroon-400 hover:underline mt-4 inline-block">
          Back to Characters
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full space-y-12 animate-fade-in">
      {/* Header Section */}
      <section className="space-y-4 mb-4">
        <Link 
          to="/hobbies/characters" 
          className="inline-flex items-center gap-2 text-maroon-700/80 hover:text-maroon-900 dark:text-white/70 dark:hover:text-white font-medium transition-colors mb-2 w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Characters
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
          {character?.name}
        </h1>
        <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (Infobox / Gallery) */}
        <div className="lg:col-span-4 lg:col-start-1 flex flex-col gap-6">
          {/* Interactive Image Gallery */}
          {character?.images && character.images.length > 0 && (
            <div className="flex gap-3 sm:gap-4 h-64 sm:h-80 lg:h-96">
              <div className="flex flex-col gap-3 shrink-0 overflow-y-auto no-scrollbar pb-2">
                {character.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      activeImageIdx === idx 
                        ? "border-maroon-600 dark:border-white shadow-md scale-[1.02]" 
                        : "border-transparent opacity-70 hover:opacity-100 hover:scale-[1.02]"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden border border-maroon-900/10 dark:border-white/10 shadow-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                <img 
                  src={character.images[activeImageIdx]} 
                  alt={`${character.name} preview`} 
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
            </div>
          )}

          {/* Character Details Box */}
          {character?.details && Object.keys(character.details).length > 0 && (
            <div className="bg-white/80 dark:bg-[#A81717]/20 border border-maroon-900/10 dark:border-white/10 rounded-2xl p-6 shadow-md backdrop-blur-sm transition-colors duration-300">
              <h3 className="text-xl font-bold text-maroon-900 dark:text-white mb-4 pb-2 border-b border-maroon-900/10 dark:border-white/10">
                Biographical Information
              </h3>
              <div className="w-full space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-maroon-900/5 dark:border-white/5 last:border-0 last:pb-0">
                  <span className="font-semibold text-maroon-800 dark:text-white/80">Name</span>
                  <span className="text-maroon-600 dark:text-white/60 text-right">{character.name}</span>
                </div>
                {Object.entries(character.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-maroon-900/5 dark:border-white/5 last:border-0 last:pb-0">
                    <span className="font-semibold text-maroon-800 dark:text-white/80">{key}</span>
                    <span className="text-maroon-600 dark:text-white/60 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column (Content) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="bg-white/80 dark:bg-[#A81717]/10 border border-maroon-900/10 dark:border-white/5 rounded-3xl p-8 md:p-10 shadow-md backdrop-blur-sm transition-colors duration-300">
            {character?.sections && character.sections.map((section, idx) => (
              <div key={idx} className={idx > 0 ? "mt-12" : ""}>
                <h2 className="text-3xl font-bold text-maroon-900 dark:text-white mb-6 border-b border-maroon-900/10 dark:border-white/10 pb-4">
                  {section.title}
                </h2>
                <div className="space-y-6 text-maroon-900/80 dark:text-white/90 text-[1.05rem] leading-relaxed">
                  <p className="text-justify">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
