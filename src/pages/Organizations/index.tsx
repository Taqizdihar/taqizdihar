import { organizations } from "./OrganizationsData";
import UnifiedCard, { MediaItem } from "../../components/UnifiedCard";
import { Users } from "lucide-react";
import { motion } from "motion/react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Organizations() {
  useDocumentTitle("Organizations");
  return (
    <div className="w-full space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
          Organizations
        </h1>
        <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
      </section>

      {organizations && organizations.length > 0 && (
        <section className="space-y-8">
          {organizations.map((org) => (
            <UnifiedCard
              key={org.id}
              title={org.orgName}
              subtitle={org.position}
              logoUrl={org.orgLogo}
              logoFallbackIcon={<Users className="w-6 h-6" />}
              startDate={org.startDate}
              endDate={org.endDate}
              description={org.description}
              media={(org.media as MediaItem[]) || []}
            />
          ))}
        </section>
      )}
    </div>
  );
}
