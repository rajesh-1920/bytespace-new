import React from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { FAQS } from "@/lib/data";

/**
 * Native <details>/<summary> disclosure: keyboard operable and announced
 * correctly by screen readers with no JavaScript, which is also what makes
 * the FAQPage structured data on the page valid.
 */
export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions people ask before enrolling"
          description="Still unsure? Email support and a human will answer within one business day."
        />

        <div className="max-w-3xl mx-auto divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-1">
              <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg [&::-webkit-details-marker]:hidden">
                <h3 className="text-sm sm:text-base font-bold font-poppins text-neutral-900 group-open:text-primary-800 transition-colors">
                  {faq.question}
                </h3>
                <Plus
                  className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-45 group-open:text-primary-800"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 pr-8 text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
