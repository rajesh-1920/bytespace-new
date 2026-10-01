import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { COURSES, MENTORS } from "@/lib/data";

export function MentorSpotlight() {
  return (
    <section id="mentors" className="py-20 md:py-24 bg-neutral-50">
      <Container>
        <SectionHeading
          eyebrow="Your instructors"
          title="Learn from people still doing the work"
          description="Every mentor is identity-checked, actively building, and reviewed by the students they teach."
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENTORS.map((mentor) => {
            const authored = COURSES.filter((course) => mentor.courseIds.includes(course.id));
            const avgRating =
              authored.reduce((sum, course) => sum + course.rating, 0) / authored.length;
            const students = authored.reduce((sum, course) => sum + course.enrolledStudents, 0);

            return (
              <li key={mentor.name}>
                <Link
                  href={`/creator/${authored[0]?.id ?? "1"}`}
                  className="group flex h-full flex-col p-7 rounded-2xl bg-white border border-neutral-200/90 hover:border-primary-300 hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-neutral-200">
                      <Image
                        src={mentor.avatar}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold font-poppins text-neutral-900 group-hover:text-primary-800 transition-colors flex items-center gap-1.5">
                        <span className="truncate">{mentor.name}</span>
                        <BadgeCheck
                          className="w-4 h-4 text-primary-800 shrink-0"
                          aria-label="Verified mentor"
                        />
                      </h3>
                      <p className="text-xs text-neutral-600 truncate">{mentor.role}</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 mb-5">
                    {authored.slice(0, 2).map((course) => (
                      <li
                        key={course.id}
                        className="text-xs text-neutral-700 leading-snug flex gap-2"
                      >
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full bg-accent-500 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="line-clamp-2">{course.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
                    <span className="flex items-center gap-1">
                      <Star
                        className="w-3.5 h-3.5 fill-rating-400 text-rating-400"
                        aria-hidden="true"
                      />
                      <span className="font-bold text-neutral-900">{avgRating.toFixed(2)}</span>
                      <span>avg</span>
                    </span>
                    <span>
                      {authored.length} {authored.length === 1 ? "course" : "courses"} ·{" "}
                      {students.toLocaleString("en-US")} students
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
