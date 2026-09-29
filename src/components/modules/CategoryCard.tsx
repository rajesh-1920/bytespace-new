import React from "react";
import Link from "next/link";
import { Category } from "@/types";
import { Palette, Code2, Terminal, Briefcase, TrendingUp, Camera, ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

const ICONS_MAP: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-6 h-6 text-primary-800" />,
  Code2: <Code2 className="w-6 h-6 text-primary-800" />,
  Terminal: <Terminal className="w-6 h-6 text-primary-800" />,
  Briefcase: <Briefcase className="w-6 h-6 text-primary-800" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-primary-800" />,
  Camera: <Camera className="w-6 h-6 text-primary-800" />,
};

export function CategoryCard({ category }: CategoryCardProps) {
  const icon = ICONS_MAP[category.iconName] || <Palette className="w-6 h-6 text-primary-800" />;

  return (
    <Link
      href={`/courses?category=${category.slug}`}
      className="group relative p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200/80 hover:border-primary-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-primary-50 group-hover:border-primary-200 transition-colors">
          {icon}
        </div>
        <div className="w-8 h-8 rounded-full bg-transparent group-hover:bg-primary-800 group-hover:text-white flex items-center justify-center text-neutral-400 transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-neutral-900 font-poppins group-hover:text-primary-800 transition-colors mb-1">
          {category.name}
        </h3>
        <p className="text-xs text-neutral-500 font-medium">
          {category.coursesCount} Courses Available
        </p>
      </div>
    </Link>
  );
}
