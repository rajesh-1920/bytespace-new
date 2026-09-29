export interface Course {
  id: string;
  title: string;
  creator: {
    name: string;
    avatar: string;
    role?: string;
  };
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  lessonsCount: number;
  duration: string;
  rating: number;
  reviewsCount: number;
  enrolledStudents: number;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  coursesCount: number;
  color?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}
