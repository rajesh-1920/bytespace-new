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
import { CourseCard } from "@/components/modules/CourseCard";
import { TwitterIcon, GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/Icons";
import { COURSES } from "@/lib/data";
import {
  Star,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  Mail,
  Globe,
  Plus,
  Share2,
  Sparkles,
} from "lucide-react";

export default function CreatorProfilePage() {
  const params = useParams();
  const creatorId = params?.id as string;

  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const creator = {
    name: "PurePearl Studio",
    tagline: "Lead UI/UX Designer & Design Systems Educator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&auto=format&fit=crop&q=80",
    bio: "Hi! I'm a principal design architect with over 10 years of experience creating digital design systems, web platforms, and mobile products. At ByteSpace, I create actionable, project-based courses designed to turn aspiring learners into world-class product creators.",
    location: "San Francisco, CA",
    website: "https://purepearl.studio",
    studentsCount: 14200,
    coursesCount: 6,
    rating: 4.92,
    reviewsCount: 889,
    verified: true,
  };

  const creatorCourses = COURSES;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Cover Banner */}
        <div className="relative h-48 sm:h-64 md:h-80 w-full bg-neutral-900 overflow-hidden">
          <Image
            src={creator.banner}
            alt="Creator Banner"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
        </div>

        {/* Creator Info Bar */}
        <div className="bg-white border-b border-neutral-200 relative -mt-16 sm:-mt-20">
          <Container>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8">
              {/* Avatar + Main Title */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-neutral-100 shrink-0">
                  <Image
                    src={creator.avatar}
                    alt={creator.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-extrabold font-poppins text-neutral-950">
                      {creator.name}
                    </h1>
                    {creator.verified && (
                      <CheckCircle className="w-5 h-5 text-primary-800 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-neutral-600">
                    {creator.tagline}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {creator.location} •{" "}
                    <a
                      href={creator.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-800 hover:underline"
                    >
                      purepearl.studio
                    </a>
                  </p>
                </div>
              </div>

              {/* Action buttons & Socials */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2 mr-2">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>

                <Button
                  variant="outlined"
                  colorScheme="neutral"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert("Creator profile link copied!");
                  }}
                  leftIcon={<Share2 className="w-3.5 h-3.5" />}
                >
                  Share
                </Button>

                <Button
                  variant={isFollowing ? "outlined" : "filled"}
                  colorScheme="primary"
                  size="sm"
                  onClick={() => setIsFollowing(!isFollowing)}
                  leftIcon={!isFollowing ? <Plus className="w-3.5 h-3.5" /> : undefined}
                >
                  {isFollowing ? "Following" : "Follow Mentor"}
                </Button>
              </div>
            </div>

            {/* Metrics Counters Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-neutral-100 text-center sm:text-left">
              <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-100">
                <p className="text-2xl sm:text-3xl font-extrabold font-poppins text-neutral-950">
                  {creator.studentsCount.toLocaleString()}+
                </p>
                <p className="text-xs text-neutral-500 font-medium">Total Students</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-100">
                <p className="text-2xl sm:text-3xl font-extrabold font-poppins text-neutral-950">
                  {creator.coursesCount}
                </p>
                <p className="text-xs text-neutral-500 font-medium">Courses Published</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-100">
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="text-2xl sm:text-3xl font-extrabold font-poppins text-neutral-950">
                    {creator.rating}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 font-medium">Instructor Rating</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-100">
                <p className="text-2xl sm:text-3xl font-extrabold font-poppins text-neutral-950">
                  {creator.reviewsCount}
                </p>
                <p className="text-xs text-neutral-500 font-medium">Student Reviews</p>
              </div>
            </div>
          </Container>
        </div>

        {/* Creator Bio & Published Courses */}
        <section className="pt-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: About Instructor (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
                  <h3 className="text-base font-bold font-poppins text-neutral-950">
                    About the Instructor
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-satoshi">
                    {creator.bio}
                  </p>

                  <div className="pt-4 border-t border-neutral-100 space-y-2.5 text-xs text-neutral-700">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-800" />
                      <span>Certified Design Systems Principal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary-800" />
                      <span>ByteSpace Top Creator Award 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary-800" />
                      <span>Courses in English & Spanish</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Published Courses (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-poppins text-neutral-950">
                      Courses by {creator.name}
                    </h2>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Explore all masterclasses and learning pathways created by this mentor.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-primary-800 bg-primary-50 px-3 py-1.5 rounded-xl">
                    {creatorCourses.length} Courses
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {creatorCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
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
