import React from "react";
import { motion } from "framer-motion";

interface AnimatedBorderCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

export const AnimatedBorderCard: React.FC<AnimatedBorderCardProps> = ({
  icon,
  title,
  description,
  gradient,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      {/* Animated border */}
      <div className="absolute -inset-0.5 rounded-xl opacity-75 group-hover:opacity-100 blur-sm transition duration-1000 group-hover:duration-200">
        <div className={`absolute inset-0 rounded-xl ${gradient} animate-spin-slow`}></div>
      </div>
      
      {/* Card content */}
      <div className="relative flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-950/90 backdrop-blur-sm border border-white/10 min-w-[140px] max-w-[140px]">
        <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm">
          {icon}
        </div>
        <span className="text-sm font-semibold text-white text-center">{title}</span>
        <span className="text-xs text-white/60 text-center leading-tight">{description}</span>
      </div>
    </motion.div>
  );
};