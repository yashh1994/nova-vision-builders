"use client";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LayoutTextFlipProps {
  text: string;
  words: string[];
  className?: string;
  duration?: number;
}

export function LayoutTextFlip({
  text,
  words,
  className,
  duration = 2000,
}: LayoutTextFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 200);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2 sm:gap-4", className)}>
      <span className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-lg">
        {text}
      </span>
      <div className="relative inline-block">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ 
              rotateX: 90,
              opacity: 0,
              y: 40,
              scale: 0.8,
            }}
            animate={{ 
              rotateX: 0,
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{ 
              rotateX: -90,
              opacity: 0,
              y: -40,
              scale: 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              mass: 0.5,
              duration: 0.6,
            }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {words[currentIndex]}
          </motion.div>
        </AnimatePresence>
        
        {/* Background blur effect for smoothness */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-lg blur-sm"
          animate={{
            opacity: isAnimating ? 0.3 : 0,
            scale: isAnimating ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}