"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Code, Smartphone, Bot } from "lucide-react";
import { motion } from "framer-motion";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Web Applications",
      className: "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg",
    },
    {
      text: "Mobile Apps",
      className: "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg",
    },
    {
      text: "AI Chatbots",
      className: "bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg",
    },
    {
      text: "Digital Solutions",
      className: "bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg",
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Hero Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Badge variant="secondary" className="px-6 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
          Transforming Ideas into Digital Reality
        </Badge>
      </motion.div>

      {/* Main Heading with Typewriter */}
      <div className="text-center max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4"
        >
          We Build Next-Gen
        </motion.h1>
        <div className="flex items-center justify-center">
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center mt-8 leading-relaxed"
      >
        Empowering businesses with cutting-edge web applications, intuitive mobile apps, 
        and intelligent AI chatbots that drive growth and innovation in the digital age.
      </motion.p>

      {/* Service Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex items-center justify-center gap-8 mt-12 mb-12"
      >
        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20">
          <Code className="w-8 h-8 text-blue-500" />
          <span className="text-sm font-medium text-muted-foreground">Web Apps</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20">
          <Smartphone className="w-8 h-8 text-purple-500" />
          <span className="text-sm font-medium text-muted-foreground">Mobile Apps</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20">
          <Bot className="w-8 h-8 text-cyan-500" />
          <span className="text-sm font-medium text-muted-foreground">AI Chatbots</span>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
      >
        <Button 
          variant="hero" 
          size="lg" 
          className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Your Project
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="px-8 py-6 text-lg font-semibold border-2 border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5 backdrop-blur-sm transition-all duration-300"
        >
          Explore Our Work
        </Button>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="mt-16 text-center"
      >
        <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
        <div className="flex items-center justify-center gap-12 opacity-60">
          {["50+ Projects", "30+ Clients", "98% Success Rate"].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-foreground">{stat.split(' ')[0]}</div>
              <div className="text-xs text-muted-foreground">{stat.split(' ').slice(1).join(' ')}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}