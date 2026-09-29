"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COURSES } from "@/lib/data";
import {
  Play,
  Pause,
  CheckCircle2,
  Circle,
  FileText,
  Download,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Volume2,
  Maximize2,
  Sparkles,
  HelpCircle,
  ArrowLeft,
  Share2,
} from "lucide-react";

interface LessonItem {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
  notes?: string;
}

interface ModuleItem {
  id: number;
  title: string;
  lessons: LessonItem[];
}

const LESSON_MODULES: ModuleItem[] = [
  {
    id: 1,
    title: "Module 1: Introduction to Digital Assets",
    lessons: [
      {
        id: "1-1",
        title: "1.1 Welcome & Course Orientation",
        duration: "08:15",
        completed: true,
        notes: "Overview of what we will build throughout the course, course assets repository, and community links.",
      },
      {
        id: "1-2",
        title: "1.2 Understanding Digital Elements & Architecture",
        duration: "14:20",
        completed: true,
        notes: "Fundamental principles of digital asset structure, semantic hierarchies, and resolution scaling.",
      },
      {
        id: "1-3",
        title: "1.3 Navigating Modern Design Software Tools",
        duration: "18:45",
        completed: false,
        notes: "Setting up Figma, plugins, hotkeys, and vector workflow optimizations for speed.",
      },
    ],
  },
  {
    id: 2,
    title: "Module 2: Design Principles for High Impact",
    lessons: [
      {
        id: "2-1",
        title: "2.1 Color Theory & Dynamic Palettes in UI",
        duration: "22:10",
        completed: false,
        notes: "Contrast ratios (WCAG 2.1), color harmony algorithms, and token naming systems.",
      },
      {
        id: "2-2",
        title: "2.2 Typography Essentials & Spatial Hierarchy",
        duration: "19:30",
        completed: false,
        notes: "Scale ratios (1.25, 1.333), line lengths, leading/tracking adjustments for desktop and mobile.",
      },
      {
        id: "2-3",
        title: "2.3 Grid Systems & Auto-Layout Mastery",
        duration: "27:50",
        completed: false,
        notes: "12-column responsive layout, padding rules, and nested auto-layout constraints.",
      },
    ],
  },
  {
    id: 3,
    title: "Module 3: Advanced Prototyping & Micro-Interactions",
    lessons: [
      {
        id: "3-1",
        title: "3.1 Component Variants & Interactive States",
        duration: "25:40",
        completed: false,
        notes: "Hover, focus, disabled, active state management across cross-functional teams.",
      },
      {
        id: "3-2",
        title: "3.2 Smart Animate & Physics-Based Transitions",
        duration: "31:15",
        completed: false,
        notes: "Building fluid page transitions and mobile gestures.",
      },
    ],
  },
];

export default function CourseLessonsWorkspace() {
  const params = useParams();
  const courseId = params?.id as string;
  const course = COURSES.find((c) => c.id === courseId) || COURSES[0];

  const [modules, setModules] = useState<ModuleItem[]>(LESSON_MODULES);
  const [currentLessonId, setCurrentLessonId] = useState<string>("1-3");
  const [activeTab, setActiveTab] = useState<"notes" | "resources" | "discussion">("notes");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true });

  const currentLesson =
    modules.flatMap((m) => m.lessons).find((l) => l.id === currentLessonId) ||
    modules[0].lessons[0];

  const totalLessons = modules.flatMap((m) => m.lessons).length;
  const completedLessons = modules.flatMap((m) => m.lessons).filter((l) => l.completed).length;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  const toggleLessonCompleted = (lessonId: string) => {
    setModules((prev) =>
      prev.map((m) => ({
        ...m,
        lessons: m.lessons.map((l) =>
          l.id === lessonId ? { ...l, completed: !l.completed } : l
        ),
      }))
    );
  };

  const toggleModuleOpen = (modId: number) => {
    setOpenModules((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      {/* Top Workspace Header */}
      <header className="h-16 border-b border-neutral-800 bg-neutral-950 px-4 sm:px-8 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href={`/courses/${course.id}`}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Course Details</span>
          </Link>
          <div className="h-4 w-px bg-neutral-800" />
          <h1 className="text-sm font-bold font-poppins text-white truncate max-w-xs sm:max-w-md">
            {course.title}
          </h1>
        </div>

        {/* Progress Display */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs text-neutral-400 font-medium">Learning Progress:</span>
            <div className="w-28 h-2 rounded-full bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-accent-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-bold text-accent-400">{progressPercent}%</span>
          </div>

          <Button
            variant="outlined"
            colorScheme="white"
            size="sm"
            onClick={() => toggleLessonCompleted(currentLesson.id)}
            leftIcon={<CheckCircle2 className="w-4 h-4 text-accent-400" />}
          >
            {currentLesson.completed ? "Completed" : "Mark as Done"}
          </Button>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left / Center: Video Player & Content (8 cols) */}
        <div className="lg:col-span-8 flex flex-col overflow-y-auto border-r border-neutral-800">
          {/* Interactive Player Canvas */}
          <div className="relative aspect-video w-full bg-neutral-900 flex items-center justify-center group overflow-hidden select-none">
            {/* Background preview image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-30 transition-opacity"
              style={{ backgroundImage: `url(${course.thumbnail})` }}
            />

            {/* Center Play/Pause button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative z-10 w-20 h-20 rounded-full bg-primary-800/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-primary-700 transition-all cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              )}
            </button>

            {/* Video Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-xs text-neutral-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <span>{isPlaying ? "04:32" : "00:00"} / {currentLesson.duration}</span>
                <Volume2 className="w-4 h-4 text-neutral-400 hover:text-white cursor-pointer" />
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 font-mono">1080p HD</span>
                <Maximize2 className="w-4 h-4 text-neutral-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Lesson Details & Tabs */}
          <div className="p-6 sm:p-8 bg-neutral-950 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-400 mb-1 block font-poppins">
                  Current Lesson
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-poppins text-white">
                  {currentLesson.title}
                </h2>
              </div>

              {/* Navigation between lessons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outlined"
                  colorScheme="white"
                  size="sm"
                  leftIcon={<ChevronLeft className="w-4 h-4" />}
                >
                  Prev
                </Button>
                <Button
                  variant="filled"
                  colorScheme="primary"
                  size="sm"
                  rightIcon={<ChevronRight className="w-4 h-4" />}
                >
                  Next
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 pt-6 pb-4 border-b border-neutral-800 text-xs sm:text-sm font-semibold">
              <button
                onClick={() => setActiveTab("notes")}
                className={`pb-2 transition-colors cursor-pointer ${
                  activeTab === "notes"
                    ? "text-accent-400 border-b-2 border-accent-400 font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Lesson Notes & Summary
              </button>
              <button
                onClick={() => setActiveTab("resources")}
                className={`pb-2 transition-colors cursor-pointer ${
                  activeTab === "resources"
                    ? "text-accent-400 border-b-2 border-accent-400 font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Downloadable Resources (3)
              </button>
              <button
                onClick={() => setActiveTab("discussion")}
                className={`pb-2 transition-colors cursor-pointer ${
                  activeTab === "discussion"
                    ? "text-accent-400 border-b-2 border-accent-400 font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Q&A / Discussion (12)
              </button>
            </div>

            {/* Tab Content */}
            <div className="py-6 text-sm text-neutral-300 leading-relaxed">
              {activeTab === "notes" && (
                <div className="space-y-4">
                  <p>{currentLesson.notes}</p>
                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 space-y-2">
                    <p className="font-bold text-white font-poppins">Key Takeaways:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Understand modular architecture and naming conventions.</li>
                      <li>Use auto-layout padding and alignment shortcuts (Shift + A).</li>
                      <li>Ensure color tokens conform to accessible WCAG contrast standards.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "resources" && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-accent-400" />
                      <div>
                        <p className="text-xs font-bold text-white">Starter-Kit-Template.fig</p>
                        <p className="text-[11px] text-neutral-500">14.2 MB • Figma Asset File</p>
                      </div>
                    </div>
                    <Button variant="outlined" colorScheme="white" size="sm" leftIcon={<Download className="w-3.5 h-3.5" />}>
                      Download
                    </Button>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-accent-400" />
                      <div>
                        <p className="text-xs font-bold text-white">Color-Tokens-Palette.json</p>
                        <p className="text-[11px] text-neutral-500">320 KB • Design Token Schema</p>
                      </div>
                    </div>
                    <Button variant="outlined" colorScheme="white" size="sm" leftIcon={<Download className="w-3.5 h-3.5" />}>
                      Download
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "discussion" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Ask a question about this lesson..."
                      className="flex-1 py-2.5 px-4 text-xs rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500"
                    />
                    <Button variant="filled" colorScheme="primary" size="sm">
                      Post
                    </Button>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Marcus T.</span>
                      <span className="text-[11px] text-neutral-500">2 hours ago</span>
                    </div>
                    <p className="text-xs text-neutral-300">
                      How do we handle nested responsive padding when using auto-layout flex wrapping?
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Lesson Playlist Sidebar (4 cols) */}
        <aside className="lg:col-span-4 bg-neutral-900/90 overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <h3 className="text-sm font-bold font-poppins text-white">
              Course Playlist
            </h3>
            <span className="text-xs text-neutral-400 font-medium">
              {completedLessons}/{totalLessons} Done
            </span>
          </div>

          <div className="space-y-3">
            {modules.map((mod) => {
              const isOpen = openModules[mod.id] ?? true;
              return (
                <div
                  key={mod.id}
                  className="rounded-xl bg-neutral-950 border border-neutral-800/80 overflow-hidden"
                >
                  <button
                    onClick={() => toggleModuleOpen(mod.id)}
                    className="w-full p-3.5 flex items-center justify-between text-left hover:bg-neutral-900 transition-colors"
                  >
                    <span className="text-xs font-bold text-white font-poppins">
                      {mod.title}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-neutral-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="divide-y divide-neutral-900 border-t border-neutral-900">
                      {mod.lessons.map((lesson) => {
                        const isCurrent = lesson.id === currentLessonId;
                        return (
                          <div
                            key={lesson.id}
                            onClick={() => setCurrentLessonId(lesson.id)}
                            className={`p-3 flex items-center justify-between text-xs cursor-pointer transition-colors ${
                              isCurrent
                                ? "bg-primary-950/60 border-l-2 border-primary-500 text-white"
                                : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleLessonCompleted(lesson.id);
                                }}
                                className="shrink-0"
                              >
                                {lesson.completed ? (
                                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                                ) : (
                                  <Circle className="w-4 h-4 text-neutral-600 hover:text-neutral-400" />
                                )}
                              </button>
                              <span className="truncate font-medium">
                                {lesson.title}
                              </span>
                            </div>
                            <span className="text-[11px] text-neutral-500 font-mono shrink-0">
                              {lesson.duration}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}
