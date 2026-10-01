import React from "react";
import { Compass, Hammer, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/data";

const ICONS_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-primary-800" aria-hidden="true" />,
  Hammer: <Hammer className="w-6 h-6 text-primary-800" aria-hidden="true" />,
  BadgeCheck: <BadgeCheck className="w-6 h-6 text-primary-800" aria-hidden="true" />,
};

export function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From curious to hired in <span className="text-primary-800">three steps</span>
            </>
          }
          description="No passive lecture marathons. A short, repeatable loop that ends with something you can show a hiring manager."
        />

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((item) => (
            <li
              key={item.step}
              className="relative p-8 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-primary-300 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0">
                  {ICONS_MAP[item.iconName]}
                </div>
                <span className="text-2xl font-extrabold font-poppins text-neutral-200 leading-none">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-bold font-poppins text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
