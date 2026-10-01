import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Shared eyebrow + heading + lede block so every landing section shares the
 * same vertical rhythm and type scale.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered && "mx-auto max-w-2xl text-center",
        centered && description && "mb-12",
        className
      )}
    >
      <p
        className={cn(
          "text-xs font-bold uppercase tracking-wider font-poppins mb-2",
          tone === "dark" ? "text-accent-400" : "text-primary-800"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold font-poppins leading-tight text-balance",
          tone === "dark" ? "text-white" : "text-neutral-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm md:text-base leading-relaxed",
            tone === "dark" ? "text-neutral-300" : "text-neutral-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
