import { experiences } from "./data";
import UnifiedCard, { MediaItem } from "../../components/UnifiedCard";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <div className="w-full space-y-12">
      {/* Header Section */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
          Experience
        </h1>
        <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
      </section>

      {/* Experience Cards */}
      {experiences && experiences.length > 0 && (
        <section className="space-y-8">
          {experiences.map((exp) => (
            <UnifiedCard
              key={exp.id}
              title={exp.title}
              subtitle={exp.company}
              startDate={exp.startDate}
              endDate={exp.endDate}
              location={exp.location}
              description={exp.description}
              skills={exp.skills}
              media={exp.media as MediaItem[]}
            />
          ))}
        </section>
      )}
    </div>
  );
}
