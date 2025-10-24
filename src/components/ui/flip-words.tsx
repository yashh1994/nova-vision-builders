"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: FlipWordsProps) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = () => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating, duration]);

  return (
    <AnimatedWord
      word={currentWord}
      className={className}
      onAnimationComplete={() => {
        setIsAnimating(false);
      }}
    />
  );
};

const AnimatedWord = ({
  word,
  className,
  onAnimationComplete,
}: {
  word: string;
  className?: string;
  onAnimationComplete?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative inline-block text-left text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold",
        className
      )}
    >
      <motion.div
        onAnimationComplete={onAnimationComplete}
        initial={false}
        animate={{
          width: "fit-content",
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 30,
        }}
        className="overflow-hidden relative"
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
              mass: 0.8,
            }}
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {word.split("").map((letter, index) => (
              <motion.span
                key={word + index}
                initial={{ y: "100%", rotateX: 90 }}
                animate={isInView ? { y: 0, rotateX: 0 } : { y: "100%", rotateX: 90 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  delay: index * 0.05,
                }}
                className="inline-block"
                style={{ transformOrigin: "bottom center" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};