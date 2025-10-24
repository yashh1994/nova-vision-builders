"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerScrollProps {
  children: ReactNode;
  className?: string;
}

export const ContainerScroll = ({ children, className }: ContainerScrollProps) => {
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-cyan-900/10 pointer-events-none" />
      {children}
    </motion.div>
  );
};