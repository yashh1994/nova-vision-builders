import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "The web application they built for us exceeded all expectations. The team's professionalism and technical expertise are unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    company: "TechStart Inc."
  },
  {
    name: "Michael Chen",
    role: "Product Manager, HealthCare+",
    content: "Our mobile app has received outstanding user feedback. The development process was smooth, and they delivered ahead of schedule.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    company: "HealthCare+"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, RetailPro",
    content: "The AI chatbot transformed our customer service. We've seen a 60% reduction in response time and happier customers.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    company: "RetailPro"
  },
  {
    name: "David Wilson",
    role: "CTO, StartupHub",
    content: "Incredible attention to detail and innovative solutions. They turned our complex requirements into a beautiful, functional platform.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    company: "StartupHub"
  },
  {
    name: "Lisa Thompson",
    role: "Founder, EcoSolutions",
    content: "Working with 100XTechs was a game-changer for our business. Their expertise in AI integration is phenomenal.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    company: "EcoSolutions"
  },
  {
    name: "James Parker",
    role: "Operations Director, LogiFlow",
    content: "Fast delivery, excellent communication, and a product that perfectly matches our vision. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    company: "LogiFlow"
  }
];

const TestimonialCard = ({ testimonial, className = "" }: { testimonial: any; className?: string }) => (
  <motion.div
    className={`p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-300 ${className}`}
    whileHover={{ 
      scale: 1.02, 
      borderColor: "rgba(255, 255, 255, 0.4)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="space-y-4 h-full flex flex-col">
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-blue-400 opacity-60 flex-shrink-0" />
      
      {/* Rating */}
      <div className="flex gap-1 flex-shrink-0">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content - takes remaining space */}
      <p className="text-white/90 text-sm leading-relaxed italic flex-grow">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10 flex-shrink-0">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/20 flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-white text-sm truncate">{testimonial.name}</div>
          <div className="text-xs text-white/60 truncate">{testimonial.role}</div>
          <div className="text-xs text-blue-400 truncate">{testimonial.company}</div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  // Split testimonials into two rows with different sizes
  const row1 = [testimonials[0], testimonials[1], testimonials[2]];
  const row2 = [testimonials[3], testimonials[4], testimonials[5]];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Client <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-white/70">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        {/* Moving Testimonials with Proper Containment and Hover Pause */}
        <div className="space-y-8 overflow-hidden">
          {/* First Row - Moving Right */}
          <div className="relative overflow-hidden mask-gradient-x group">
            <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: [0, -320 * row1.length], // 320px = card width + gap
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {/* Triple the cards for seamless infinite loop */}
              {[...row1, ...row1, ...row1].map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${index}`}
                  testimonial={testimonial}
                  className={`flex-shrink-0 w-80 ${
                    index % 3 === 1 ? 'min-h-[18rem]' : 'min-h-[16rem]'
                  }`}
                />
              ))}
            </motion.div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="relative overflow-hidden mask-gradient-x group">
            <motion.div
              className="flex gap-6 w-max"
              animate={{
                x: [-320 * row2.length, 0], // Start from left, move right
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {/* Triple the cards for seamless infinite loop */}
              {[...row2, ...row2, ...row2].map((testimonial, index) => (
                <TestimonialCard
                  key={`row2-${index}`}
                  testimonial={testimonial}
                  className={`flex-shrink-0 w-80 ${
                    index % 3 === 0 ? 'min-h-[18rem]' : index % 3 === 2 ? 'min-h-[15rem]' : 'min-h-[16rem]'
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Join 100+ Happy Clients</span>
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
