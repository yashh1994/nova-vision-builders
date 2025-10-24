import heroImage from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { AnimatedBorderCard } from "@/components/ui/animated-border-card";
import { ArrowRight, Sparkles, Smartphone, Code, Bot } from "lucide-react";
import { useState, useEffect } from "react";

const TechLogo = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 mr-2 text-blue-400"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = [
    "We Build Next-Gen Digital Solutions",
    "We Create Innovative Web Apps", 
    "We Develop Smart AI Systems",
    "We Design Modern Mobile Apps"
  ];

  useEffect(() => {
    // Improved typewriter: smoother timing and clearer pauses
    const currentWord = words[currentWordIndex];

    // typing speed (ms per char)
    const typeSpeed = 60;
    const deleteSpeed = 35;
    const pauseAfterTyping = 1400; // ms to wait after finishing typing

    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentCharIndex <= currentWord.length) {
      // Typing
      if (currentCharIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        }, typeSpeed);
      } else {
        // finished typing, pause then start deleting
        timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
      }
    } else if (isDeleting) {
      // Deleting
      if (currentCharIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(prev => prev - 1);
        }, deleteSpeed);
      } else {
        // finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentWordIndex, words]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Darker Background with Animations */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // darker background while keeping some texture visible
          filter: 'blur(2px) brightness(0.6)'
        }}
      >
        {/* darker overlay but still animated */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-slate-900/97 to-black/98"></div>
      </div>

      {/* Modern Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[size:80px_80px] z-10"></div>

      {/* Subtle Modern Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-full blur-3xl animate-spin-slow"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-black/30 backdrop-blur-xl text-white border-0 px-8 py-4 text-base font-medium hover:bg-black/50 transition-all duration-300 flex items-center gap-3"
            >
              <TechLogo />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-lg">
                100XTechs
              </span>
              <span className="text-white/70 font-light">-</span>
              <span className="text-white font-medium whitespace-nowrap">
                Transforming Ideas into Digital Reality
              </span>
            </HoverBorderGradient>
          </motion.div>

          <motion.div 
            className="relative mx-4 my-4 flex flex-col items-center justify-center text-center sm:mx-0 sm:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl mb-4 min-h-[1.2em] flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-extrabold tracking-tight">
                {displayText}
              </span>
              <motion.span 
                className="text-blue-400 ml-1 font-thin"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the power of cutting-edge technology that brings your ideas to life. We craft innovative digital solutions for businesses worldwide.
          </motion.p>

          {/* Service Cards */}
          <div className="flex items-center justify-center gap-6 mt-12 mb-8 flex-wrap">
            {/* Mobile Apps Card - Blue Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative w-[180px] h-[200px] cursor-pointer"
            >
              {/* Animated Border */}
              <div 
                className="absolute -inset-0.5 rounded-2xl"
                style={{
                  background: `conic-gradient(from 0deg, transparent, #3b82f6, #06b6d4, #3b82f6, transparent)`,
                  animation: 'spin 3s linear infinite'
                }}
              ></div>
              <div className="absolute inset-[2px] bg-gray-950 rounded-2xl"></div>
              
              {/* Card content */}
              <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6 bg-gray-950/95 backdrop-blur-sm rounded-2xl">
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <Smartphone className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-1">Mobile Apps</h3>
                  <p className="text-xs text-blue-300/70">iOS & Android Development</p>
                </div>
              </div>
            </motion.div>

            {/* Web Apps Card - Purple Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative w-[180px] h-[200px] cursor-pointer"
            >
              {/* Animated Border */}
              <div 
                className="absolute -inset-0.5 rounded-2xl"
                style={{
                  background: `conic-gradient(from 0deg, transparent, #a855f7, #ec4899, #a855f7, transparent)`,
                  animation: 'spin 3s linear infinite'
                }}
              ></div>
              <div className="absolute inset-[2px] bg-gray-950 rounded-2xl"></div>
              
              {/* Card content */}
              <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6 bg-gray-950/95 backdrop-blur-sm rounded-2xl">
                <div className="p-3 bg-purple-500/10 rounded-full">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-1">Web Apps</h3>
                  <p className="text-xs text-purple-300/70">Modern Web Solutions</p>
                </div>
              </div>
            </motion.div>

            {/* AI Solutions Card - Green Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative w-[180px] h-[200px] cursor-pointer"
            >
              {/* Animated Border */}
              <div 
                className="absolute -inset-0.5 rounded-2xl"
                style={{
                  background: `conic-gradient(from 0deg, transparent, #10b981, #14b8a6, #10b981, transparent)`,
                  animation: 'spin 3s linear infinite'
                }}
              ></div>
              <div className="absolute inset-[2px] bg-gray-950 rounded-2xl"></div>
              
              {/* Card content */}
              <div className="relative h-full flex flex-col items-center justify-center gap-4 p-6 bg-gray-950/95 backdrop-blur-sm rounded-2xl">
                <div className="p-3 bg-emerald-500/10 rounded-full">
                  <Bot className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-1">AI Solutions</h3>
                  <p className="text-xs text-emerald-300/70">Smart AI Integration</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button 
              variant="default" 
              size="lg" 
              className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold border-2 border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5 backdrop-blur-sm transition-all duration-300 text-white"
            >
              Explore Our Work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
