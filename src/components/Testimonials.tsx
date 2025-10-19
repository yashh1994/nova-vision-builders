import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "The web application they built for us exceeded all expectations. The team's professionalism and technical expertise are unmatched.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager, HealthCare+",
    content: "Our mobile app has received outstanding user feedback. The development process was smooth, and they delivered ahead of schedule.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, RetailPro",
    content: "The AI chatbot transformed our customer service. We've seen a 60% reduction in response time and happier customers.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Client <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card space-y-6"
            >
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="pt-4 border-t border-primary/10">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
