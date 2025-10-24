import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BlurAutoWritingProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const BlurAutoWriting = ({ 
  text, 
  className, 
  delay = 1000, 
  speed = 50 
}: BlurAutoWritingProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, isTyping]);

  const remainingText = text.slice(displayedText.length);

  return (
    <span className={cn("relative", className)}>
      <span className="text-transparent select-none">{text}</span>
      <span className="absolute inset-0">
        <span>{displayedText}</span>
        <span className="text-muted-foreground/30 blur-sm select-none">
          {remainingText}
        </span>
        {isTyping && currentIndex < text.length && (
          <span className="animate-pulse ml-1 text-primary">|</span>
        )}
      </span>
    </span>
  );
};

export default BlurAutoWriting;