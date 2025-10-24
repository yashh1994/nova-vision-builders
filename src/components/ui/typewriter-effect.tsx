"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: string[] | {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Handle both string arrays and word objects
  const wordsArray = words.map((word) => 
    typeof word === 'string' ? { text: word, className: "" } : word
  );
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = wordsArray[currentWordIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        if (currentText === word.text) {
          setIsDeleting(true);
        }
      }, 2500); // Pause for 2.5 seconds when word is complete
      
      return () => clearTimeout(pauseTimeout);
    }

    const shouldStartDeleting = currentText === word.text && !isDeleting && !isPaused;
    const shouldStartNextWord = currentText === "" && isDeleting;

    if (shouldStartDeleting) {
      setIsPaused(true);
      return;
    }

    if (shouldStartNextWord) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % wordsArray.length);
      setTypingSpeed(150); // Reset to normal typing speed
      return;
    }

    // Variable typing speed for more human-like effect
    let speed;
    if (isDeleting) {
      speed = 30 + Math.random() * 40; // 30-70ms for deleting (faster)
    } else {
      speed = 80 + Math.random() * 100; // 80-180ms for typing (more variable)
    }

    // Occasionally pause during typing for realism
    if (!isDeleting && Math.random() < 0.05) {
      speed += 200; // Random pause
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return word.text.substring(0, prev.length - 1);
        } else {
          return word.text.substring(0, prev.length + 1);
        }
      });
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, wordsArray, isPaused]);

  const currentWord = wordsArray[currentWordIndex];

  return (
    <div className={cn("flex items-center space-x-1 my-6", className)}>
      <div className="overflow-hidden">
        <motion.div 
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
          key={currentText} // Add key for smooth re-renders
        >
          <motion.span 
            className={cn(
              "text-white drop-shadow-lg transition-all duration-150 ease-out", 
              currentWord.className
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            {currentText}
          </motion.span>
        </motion.div>
      </div>
      
      {/* Enhanced Cursor */}
      <motion.span
        className={cn(
          "block rounded-sm w-[4px] h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-white to-blue-400 drop-shadow-lg",
          cursorClassName
        )}
        animate={{
          opacity: [1, 1, 0, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};