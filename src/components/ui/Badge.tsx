import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "neutral" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "accent",
  size = "md",
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary-50 text-primary-800 border-primary-200",
    accent: "bg-accent-400/20 text-neutral-900 border-accent-400/40",
    neutral: "bg-neutral-100 text-neutral-700 border-neutral-200",
    outline: "border-neutral-300 text-neutral-600 bg-white",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs rounded-md font-medium",
    md: "px-3 py-1 text-xs rounded-lg font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border tracking-wide uppercase",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
