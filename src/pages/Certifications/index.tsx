import { certifications } from "./CertificationsData";
import UnifiedCard, { MediaItem } from "../../components/UnifiedCard";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Certifications() {
  useDocumentTitle("Certifications");
  return (
    <div className="w-full space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
          Certifications
        </h1>
        <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
      </section>

      {certifications && certifications.length > 0 && (
        <section className="space-y-8">
          {certifications.map((cert) => (
            <UnifiedCard
              key={cert.id}
              title={cert.certName}
              subtitle={cert.issuingOrg}
              logoUrl={cert.orgLogo}
              logoFallbackIcon={<Award className="w-6 h-6" />}
              startDate={cert.issueDate}
              endDate={cert.endDate}
              description={
                cert.credentialId
                  ? `Credential ID: ${cert.credentialId}`
                  : undefined
              }
              skills={cert.skills}
              media={(cert.media as MediaItem[]) || []}
              actionBtn={
                cert.credentialUrl
                  ? {
                      label: "Show Credential",
                      url: cert.credentialUrl,
                      icon: <ExternalLink className="w-4 h-4" />,
                    }
                  : undefined
              }
            />
          ))}
        </section>
      )}
    </div>
  );
}
