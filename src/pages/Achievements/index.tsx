import { achievements } from "./AchievementsData";
import UnifiedCard, { MediaItem } from "../../components/UnifiedCard";
import { FaTrophy } from "react-icons/fa6";
import { motion } from "motion/react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Achievements() {
  useDocumentTitle("Achievements");
  return (
    <div className="w-full space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
          Achievements
        </h1>
        <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
      </section>

      {achievements && achievements.length > 0 && (
        <section className="space-y-8">
          {achievements.map((item) => (
            <UnifiedCard
              key={item.id}
              title={item.title}
              subtitle={item.issuer}
              logoUrl={item.issuerLogo}
              logoDescription={item.logoDescription}
              logoFallbackIcon={<FaTrophy className="w-6 h-6" />}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              media={(item.media as MediaItem[]) || []}
            />
          ))}
        </section>
      )}
    </div>
  );
}
