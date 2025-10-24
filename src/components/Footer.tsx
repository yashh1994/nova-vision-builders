import { Github, Linkedin, Twitter, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number}>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t border-slate-800">
      {/* Animated Star Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/90" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/logo.png" alt="100XTechs logo" className="h-32 w-auto filter brightness-0 invert" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                100XTechs
              </h3>
            </motion.div>
            <motion.p 
              className="text-slate-300 text-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building next-generation digital solutions for businesses worldwide. 
              Transforming ideas into reality with cutting-edge technology.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="#" className="group w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="group w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="group w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
              </a>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-6 text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#services" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Web Development
              </a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Mobile Apps
              </a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                AI Chatbots
              </a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Consulting
              </a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-6 text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                About Us
              </a></li>
              <li><a href="#portfolio" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Portfolio
              </a></li>
              <li><a href="#testimonials" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Testimonials
              </a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Contact
              </a></li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="font-semibold mb-6 text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Privacy Policy
              </a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Terms of Service
              </a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group">
                <Star className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                Cookie Policy
              </a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-slate-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
            &copy; {currentYear} 100XTechs. All rights reserved. Built with 
            <span className="text-red-400">♥</span> 
            for innovation.
          </p>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
