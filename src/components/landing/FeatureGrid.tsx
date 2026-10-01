import React from "react";
import {
  Layers,
  Infinity as InfinityIcon,
  BadgeCheck,
  Award,
  FolderOpen,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { FEATURES } from "@/lib/data";

const ICONS_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6 text-primary-800" aria-hidden="true" />,
  Infinity: <InfinityIcon className="w-6 h-6 text-primary-800" aria-hidden="true" />,
  BadgeCheck: <BadgeCheck className="w-6 h-6 text-primary-800" aria-hidden="true" />,
  Award: <Award className="w-6 h-6 text-primary-800" aria-hidden="true" />,
  FolderOpen: <FolderOpen className="w-6 h-6 text-primary-800" aria-hidden="true" />,
  Users: <Users className="w-6 h-6 text-primary-800" aria-hidden="true" />,
};

export function FeatureGrid() {
  return (
    <section id="features" className="py-20 md:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why ByteSpace"
          title="Built for people who want to ship"
          description="We optimised for the thing that actually changes your career: finished, demonstrable work."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-7 rounded-2xl bg-white border border-neutral-200/90 hover:border-primary-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                {ICONS_MAP[feature.iconName]}
              </div>
              <h3 className="text-base font-bold font-poppins text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
