"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COURSES } from "@/lib/data";
import {
  Star,
  BookOpen,
  Clock,
  Users,
  Share2,
  Bookmark,
  CheckCircle,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  Award,
  Globe,
  FileText,
  Lock,
  ArrowRight,
} from "lucide-react";

const MODULES = [
  {
    id: 1,
    title: "Foundational Concepts of Digital Asset Creation",
    duration: "1 hour 45 mins",
    lessons: [
      { title: "Introduction to Digital Assets & Architecture", duration: "12 mins", free: true },
      { title: "Design Principles for High-Impact Creations", duration: "21 mins", free: true },
      { title: "Color Theory & Strategic Palette Building", duration: "18 mins", free: false },
      { title: "Typography Systems & Hierarchy in UI", duration: "24 mins", free: false },
    ],
  },
  {
    id: 2,
    title: "Design Principles & Vector Mastery",
    duration: "3 hours 10 mins",
    lessons: [
      { title: "Component Systems and Auto-Layout in Figma", duration: "32 mins", free: false },
      { title: "Creating Reusable Vector Assets & Iconography", duration: "28 mins", free: false },
      { title: "Responsive Constraints & Fluid Grids", duration: "35 mins", free: false },
      { title: "Designing Dark and Light Themes", duration: "25 mins", free: false },
    ],
  },
  {
    id: 3,
    title: "Advanced Creation Techniques & Prototyping",
    duration: "4 hours 20 mins",
    lessons: [
      { title: "Interactive Micro-Interactions & Smart Animate", duration: "40 mins", free: false },
      { title: "Tokenized Design Systems Architecture", duration: "45 mins", free: false },
      { title: "Asset Management & Developer Handoff", duration: "30 mins", free: false },
    ],
  },
  {
    id: 4,
    title: "Monetization & Portfolio Capstone Project",
    duration: "2 hours 50 mins",
    lessons: [
      { title: "Publishing & Selling UI Kits & Design Tokens", duration: "35 mins", free: false },
      { title: "Building a World-Class Design Portfolio", duration: "45 mins", free: false },
      { title: "Final Capstone Review & Certification", duration: "20 mins", free: false },
    ],
  },
];

const KEY_POINTS = [
  "Foundational Concepts & Digital Architecture",
  "Design Principles & UI/UX Mastery",
  "Advanced Prototyping & Micro-Interactions",
  "Optimizing Assets for Web & Mobile Platforms",
  "Digital Asset Management & Version Control",
  "Monetization Strategies & Client Handoff",
  "Capstone Portfolio Project with Mentor Review",
];

export default function CourseDetailsPage() {
  const params = useParams();
  const courseId = params?.id as string;
  const course = COURSES.find((c) => c.id === courseId) || COURSES[0];

  const [openModule, setOpenModule] = useState<number | null>(1);
  const [bookmarked, setBookmarked] = useState(false);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Course Header Banner */}
        <section className="bg-neutral-950 text-white pt-12 pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-primary-800/20 blur-[120px] rounded-full pointer-events-none" />

          <Container>
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
              <span>/</span>
              <span className="text-accent-400 font-medium">{course.category}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Main Info */}
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <Badge variant="accent" size="sm" className="font-bold text-neutral-950">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" size="sm" className="border-white/20 text-neutral-300 bg-white/5">
                    {course.level}
                  </Badge>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-white leading-tight mb-4">
                  {course.title}
                </h1>

                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 font-satoshi max-w-2xl">
                  Unlock the power of modern digital creation with expert guidance. Master end-to-end workflows and build a standout portfolio.
                </p>

                {/* Creator and Metrics */}
                <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-300 pt-2 border-t border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-700">
                      <Image
                        src={course.creator.avatar}
                        alt={course.creator.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>
                      Created by <strong className="text-white">{course.creator.name}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
                    <span className="font-bold text-white">{course.rating}</span>
                    <span className="text-neutral-400">({course.reviewsCount} reviews)</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-neutral-400" />
                    <span>{course.enrolledStudents.toLocaleString()} Enrolled</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-neutral-400" />
                    <span>English (Subtitles available)</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Course Subnav Bar */}
        <div className="sticky top-20 z-40 bg-white border-b border-neutral-200 shadow-sm">
          <Container>
            <div className="flex items-center gap-8 py-4 text-sm font-semibold">
              <a href="#about" className="text-primary-800 border-b-2 border-primary-800 pb-4 -mb-4">
                About Course
              </a>
              <a href="#curriculum" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                Curriculum ({MODULES.length} Modules)
              </a>
              <Link href={`/courses/${course.id}/learn`} className="text-neutral-600 hover:text-primary-800 transition-colors">
                Lessons Workspace
              </Link>
              <Link href={`/courses/${course.id}/reviews`} className="text-neutral-600 hover:text-primary-800 transition-colors">
                Student Reviews ({course.reviewsCount})
              </Link>
            </div>
          </Container>
        </div>

        {/* Content Section & Sticky Card */}
        <section className="pt-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Description, Key Points, Curriculum */}
              <div className="lg:col-span-8 space-y-12">
                {/* About / Description */}
                <div id="about" className="scroll-mt-36">
                  <h2 className="text-2xl font-bold font-poppins text-neutral-950 mb-4">
                    Description
                  </h2>
                  <div className="prose text-neutral-700 text-sm leading-relaxed space-y-4">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course. This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating modern tech.
                    </p>
                    <p>
                      In the initial modules, you will establish a solid foundation by immersing yourself in core architectural and design concepts. You will understand the fundamental elements that constitute compelling digital experiences and gain proficiency in leveraging these elements effectively.
                    </p>
                    <p>
                      As you progress, you will ascend to higher levels of expertise, delving into real-world projects, component systems, asset management, and monetization strategies to prepare you for industry work.
                    </p>
                  </div>
                </div>

                {/* Key Points */}
                <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <h3 className="text-lg font-bold font-poppins text-neutral-950 mb-6">
                    What You Will Learn (Key Takeaways)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {KEY_POINTS.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-800 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-neutral-800 font-medium">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Curriculum Accordion */}
                <div id="curriculum" className="scroll-mt-36">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold font-poppins text-neutral-950">
                        Course Curriculum
                      </h2>
                      <p className="text-xs text-neutral-500 mt-1">
                        4 Modules • 14 Lessons • 12 hours total duration
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {MODULES.map((mod) => {
                      const isOpen = openModule === mod.id;
                      return (
                        <div
                          key={mod.id}
                          className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm"
                        >
                          <button
                            onClick={() => toggleModule(mod.id)}
                            className="w-full p-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-7 h-7 rounded-lg bg-primary-50 text-primary-800 text-xs font-bold flex items-center justify-center">
                                0{mod.id}
                              </span>
                              <div>
                                <h4 className="text-sm sm:text-base font-bold text-neutral-900 font-poppins">
                                  {mod.title}
                                </h4>
                                <span className="text-xs text-neutral-500">
                                  {mod.lessons.length} lessons • {mod.duration}
                                </span>
                              </div>
                            </div>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-neutral-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-neutral-400" />
                            )}
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 border-t border-neutral-100 divide-y divide-neutral-100">
                              {mod.lessons.map((lesson, idx) => (
                                <div
                                  key={idx}
                                  className="py-3.5 flex items-center justify-between text-xs sm:text-sm"
                                >
                                  <div className="flex items-center gap-3">
                                    <PlayCircle className="w-4 h-4 text-primary-800 shrink-0" />
                                    <span className="text-neutral-800 font-medium">
                                      {lesson.title}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    {lesson.free ? (
                                      <Link
                                        href={`/courses/${course.id}/learn`}
                                        className="text-xs text-primary-800 font-bold hover:underline"
                                      >
                                        Free Preview
                                      </Link>
                                    ) : (
                                      <Lock className="w-3.5 h-3.5 text-neutral-400" />
                                    )}
                                    <span className="text-xs text-neutral-500">
                                      {lesson.duration}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Instructor Card */}
                <div className="p-8 rounded-2xl border border-neutral-200 bg-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-neutral-200">
                    <Image
                      src={course.creator.avatar}
                      alt={course.creator.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-800 font-poppins">
                      Instructor
                    </span>
                    <h4 className="text-lg font-bold font-poppins text-neutral-950">
                      {course.creator.name}
                    </h4>
                    <p className="text-xs text-neutral-500 mb-3">{course.creator.role || "Lead Instructor & Creator"}</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Passionate digital educator with over 8 years of experience building high-scale design systems and training thousands of students worldwide.
                    </p>
                  </div>
                  <Button
                    variant="outlined"
                    colorScheme="neutral"
                    size="sm"
                    href="/creator/1"
                  >
                    View Profile
                  </Button>
                </div>
              </div>

              {/* Right Column: Sticky Purchase & Enrollment Card */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
                <div className="rounded-3xl bg-white border border-neutral-200/90 p-6 shadow-xl shadow-neutral-900/5">
                  {/* Thumbnail Preview */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-neutral-900 group">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <Link
                      href={`/courses/${course.id}/learn`}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors"
                    >
                      <div className="w-14 h-14 rounded-full bg-white/90 text-primary-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-8 h-8 fill-primary-800 text-white" />
                      </div>
                    </Link>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-3xl font-extrabold font-poppins text-neutral-950">
                      ${course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-base text-neutral-400 line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                    <Badge variant="accent" size="sm" className="font-bold text-neutral-950">
                      45% OFF
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 mb-6">
                    <Button
                      variant="filled"
                      colorScheme="primary"
                      size="lg"
                      href={`/courses/${course.id}/learn`}
                      className="w-full justify-center text-sm font-bold shadow-md shadow-primary-800/20"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Enroll in Course
                    </Button>
                    <Button
                      variant="outlined"
                      colorScheme="neutral"
                      size="md"
                      href={`/courses/${course.id}/learn`}
                      className="w-full justify-center text-xs font-semibold"
                    >
                      Start Free Preview Lessons
                    </Button>
                  </div>

                  {/* Features included */}
                  <div className="pt-6 border-t border-neutral-100 space-y-3 text-xs text-neutral-700">
                    <p className="font-bold text-neutral-900 uppercase tracking-wider text-[11px] font-poppins">
                      This Course Includes:
                    </p>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-primary-800" />
                      <span>{course.duration} on-demand video</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-primary-800" />
                      <span>18 Downloadable resources & project files</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-primary-800" />
                      <span>Full lifetime access across devices</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-primary-800" />
                      <span>Certificate of Completion</span>
                    </div>
                  </div>

                  {/* Share & Bookmark Actions */}
                  <div className="pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                    <button
                      onClick={() => setBookmarked(!bookmarked)}
                      className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-primary-800 text-primary-800" : ""}`} />
                      <span>{bookmarked ? "Saved" : "Save Course"}</span>
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(window.location.href);
                        alert("Course link copied to clipboard!");
                      }}
                      className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
