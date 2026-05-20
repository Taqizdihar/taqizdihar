import { projects } from "./data";
import UnifiedCard, { MediaItem } from "../../components/UnifiedCard";
import { FolderGit2 } from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <div className="w-full space-y-12">
      {/* Header Section */}
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
          Projects
        </h1>
        <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
      </section>

      {/* Projects Feed */}
      {projects && projects.length > 0 && (
        <section className="space-y-8">
          {projects.map((project) => (
            <UnifiedCard
              key={project.id}
              title={project.projectName}
              subtitle={project.associatedWith}
              logoFallbackIcon={<FolderGit2 className="w-6 h-6" />}
              startDate={project.startDate}
              endDate={project.endDate}
              description={project.description}
              skills={project.skills}
              media={(project.media as MediaItem[]) || []}
            />
          ))}
        </section>
      )}
    </div>
  );
}
