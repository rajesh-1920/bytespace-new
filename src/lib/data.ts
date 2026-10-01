import { Course, Category, Testimonial } from "@/types";

/**
 * Top-level catalog categories.
 *
 * `slug` must stay a lowercase substring of the `Course.category` values below,
 * because the catalog page filters with a case-insensitive `includes()` match.
 * Keeping the two aligned means every category filter returns results.
 */
export const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "UI/UX Design",
    slug: "ui-ux-design",
    iconName: "Palette",
    coursesCount: 28,
  },
  {
    id: "2",
    name: "Web Development",
    slug: "web-development",
    iconName: "Code2",
    coursesCount: 34,
  },
  {
    id: "3",
    name: "AI & Machine Learning",
    slug: "ai-machine-learning",
    iconName: "BrainCircuit",
    coursesCount: 19,
  },
  {
    id: "4",
    name: "Data Science",
    slug: "data-science",
    iconName: "BarChart3",
    coursesCount: 16,
  },
  {
    id: "5",
    name: "Animation",
    slug: "animation",
    iconName: "Clapperboard",
    coursesCount: 12,
  },
  {
    id: "6",
    name: "Marketing",
    slug: "marketing",
    iconName: "TrendingUp",
    coursesCount: 22,
  },
];

export const COURSES: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic to Advanced Masterclass",
    creator: {
      name: "purepearl studio",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      role: "Lead UI Designer",
    },
    category: "UI/UX Design",
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    rating: 4.9,
    reviewsCount: 59,
    enrolledStudents: 1420,
    price: 25,
    originalPrice: 45,
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Modern React & Next.js 15: Full Stack Architecture",
    creator: {
      name: "Alex DevLabs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      role: "Senior Software Architect",
    },
    category: "Web Development",
    level: "Intermediate",
    lessonsCount: 24,
    duration: "6 hours 40 mins",
    rating: 4.95,
    reviewsCount: 112,
    enrolledStudents: 2840,
    price: 35,
    originalPrice: 60,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "3",
    title: "AI Prompt Engineering & LLM Application Building",
    creator: {
      name: "Sophia Vance",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      role: "AI Research Lead",
    },
    category: "AI & Machine Learning",
    level: "All Levels",
    lessonsCount: 19,
    duration: "4 hours 10 mins",
    rating: 4.88,
    reviewsCount: 84,
    enrolledStudents: 1980,
    price: 29,
    originalPrice: 50,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "4",
    title: "Complete Digital Marketing & Growth Strategy 2026",
    creator: {
      name: "Marcus Sterling",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      role: "Growth Director",
    },
    category: "Marketing",
    level: "Beginner",
    lessonsCount: 21,
    duration: "3 hours 45 mins",
    rating: 4.75,
    reviewsCount: 42,
    enrolledStudents: 930,
    price: 22,
    originalPrice: 40,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    id: "5",
    title: "3D Animation & Motion Graphics with Blender",
    creator: {
      name: "Voxel Studio",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
      role: "3D Motion Artist",
    },
    category: "Animation",
    level: "Intermediate",
    lessonsCount: 30,
    duration: "8 hours 15 mins",
    rating: 4.92,
    reviewsCount: 76,
    enrolledStudents: 1650,
    price: 39,
    originalPrice: 70,
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    id: "6",
    title: "Data Science & Machine Learning with Python",
    creator: {
      name: "Dr. Elena Ramos",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      role: "Data Scientist",
    },
    category: "Data Science",
    level: "Advanced",
    lessonsCount: 28,
    duration: "7 hours 30 mins",
    rating: 4.96,
    reviewsCount: 140,
    enrolledStudents: 3100,
    price: 45,
    originalPrice: 85,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    rating: 5,
  },
  {
    id: "2",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    rating: 5,
  },
  {
    id: "3",
    name: "Elena R.",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    content:
      "The hands-on, project-based curriculum allowed me to build a high-impact portfolio that landed me my dream design job within 3 months. Outstanding mentor support!",
    rating: 5,
  },
];

export const STATS = [
  { value: "12K+", label: "Active Students" },
  { value: "70+", label: "Curated Courses" },
  { value: "16+", label: "Verified Creators" },
  { value: "4.9/5", label: "Average Rating" },
];

/**
 * Landing-page tab rail, derived from the course data so the rail can never
 * offer a tab that resolves to zero results.
 */
export const COURSE_TABS: string[] = [
  ...Array.from(new Set(COURSES.map((course) => course.category))),
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Pick your path",
    description:
      "Choose a category or a specific track. Every course starts with a clear brief on what you will be able to ship by the end.",
    iconName: "Compass",
  },
  {
    step: "02",
    title: "Learn by building",
    description:
      "Short lessons, no filler. You work through a real project with mentor code reviews instead of watching passive screencasts.",
    iconName: "Hammer",
  },
  {
    step: "03",
    title: "Ship and get certified",
    description:
      "Publish your project, collect peer feedback, and earn a verifiable certificate you can put in front of hiring managers.",
    iconName: "BadgeCheck",
  },
] as const;

export const FEATURES = [
  {
    title: "Project-first curriculum",
    description:
      "Every module ends in something you can put in a portfolio. No theoretical filler, no abandoned half-finished exercises.",
    iconName: "Layers",
  },
  {
    title: "Lifetime access",
    description:
      "Buy a course once and keep it, including every future update we publish to it. No subscription lock-in on individual courses.",
    iconName: "Infinity",
  },
  {
    title: "Verified industry mentors",
    description:
      "Learn from practitioners who build products at top-tier companies. Every mentor is identity-checked and reviewed by students.",
    iconName: "BadgeCheck",
  },
  {
    title: "Certificates that verify",
    description:
      "Finish a track and get a shareable credential with a public verification link employers can check.",
    iconName: "Award",
  },
  {
    title: "Starter files included",
    description:
      "Source files, design tokens, and datasets ship with the lesson so you never get stuck scaffolding a project.",
    iconName: "FolderOpen",
  },
  {
    title: "Community and critiques",
    description:
      "Post work in progress, get structured feedback, and pair with other learners on the projects that matter.",
    iconName: "Users",
  },
] as const;

export const FAQS = [
  {
    question: "How long do I keep access to a course?",
    answer:
      "Forever, on any individual course you purchase. Course updates land in your library automatically. All-Access Pro is a subscription and includes every course plus future releases while it is active.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No. Each course declares its level up front, from Beginner through Advanced, and roughly a third of the catalog is marked All Levels. If you are unsure, start with a Beginner track in your category.",
  },
  {
    question: "How do mentor code reviews work?",
    answer:
      "Pro members can submit a project and get line-level feedback from the mentor who wrote the course, with a target turnaround of two business days. Peer critique is available to everyone for free.",
  },
  {
    question: "Is the certificate worth anything to employers?",
    answer:
      "It carries a public verification link that resolves to your completed project and the skills it demonstrates, so a hiring manager can confirm it is real rather than a self-issued PDF.",
  },
  {
    question: "Can I get a refund if a course is not for me?",
    answer:
      "Yes. Individual course purchases are refundable within 14 days as long as you have completed less than 25% of the lessons. Email support and we will process it.",
  },
  {
    question: "I want to teach. How do I become a mentor?",
    answer:
      "Apply through the creator program. We look for demonstrated work and a clear course outline. Accepted creators keep 80% of every sale and get production support for assets and video.",
  },
] as const;

/**
 * Mentor spotlight, derived from the course roster so a creator never appears
 * twice and always links to a profile that exists.
 */
export const MENTORS = Array.from(
  COURSES.reduce<Map<string, { name: string; avatar: string; role: string; courseIds: string[] }>>(
    (acc, course) => {
      const existing = acc.get(course.creator.name);
      if (existing) {
        existing.courseIds.push(course.id);
      } else {
        acc.set(course.creator.name, {
          name: course.creator.name,
          avatar: course.creator.avatar,
          role: course.creator.role ?? "Mentor",
          courseIds: [course.id],
        });
      }
      return acc;
    },
    new Map()
  ).values()
);
