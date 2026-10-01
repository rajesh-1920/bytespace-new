import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Student stories"
          title="What learners say after shipping"
          description="Unedited reviews from students who completed a ByteSpace track and put the work in front of an employer."
        />

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <li key={testimonial.id} className="flex">
              <figure className="flex flex-1 flex-col justify-between p-7 rounded-2xl bg-white border border-neutral-200/90 hover:border-primary-300 hover:shadow-md transition-all duration-300">
                <div>
                  <Quote className="w-7 h-7 text-accent-400 mb-3" aria-hidden="true" />
                  <div
                    className="flex items-center gap-0.5 mb-4"
                    role="img"
                    aria-label={`Rated ${testimonial.rating} out of 5`}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="w-4 h-4 fill-rating-400 text-rating-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="text-sm text-neutral-700 leading-relaxed">
                    {testimonial.content}
                  </blockquote>
                </div>

                <figcaption className="flex items-center gap-3 pt-5 mt-6 border-t border-neutral-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-neutral-900 font-poppins">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-neutral-600">{testimonial.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
