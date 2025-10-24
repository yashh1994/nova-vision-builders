"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
}

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Component = "div",
  duration = 1,
  ...props
}: HoverBorderGradientProps) {
  return (
    <Component
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-full border border-slate-800 bg-black/20 backdrop-blur-xl p-[1px] transition duration-300 hover:bg-black/40",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-xl px-4 py-2 text-sm text-white transition duration-300 hover:bg-black/60",
          className
        )}
      >
        {children}
      </div>

      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)`,
          animation: `spin ${duration}s linear infinite`,
        }}
      />
      
      {/* Inner circle to create border effect */}
      <div className="absolute inset-[1px] rounded-full bg-black/20 backdrop-blur-xl" />
    </Component>
  );
}