import { Card } from "@/components/ui/card";
import { Smartphone, Globe, Bot } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, secure, and optimized for performance.",
    features: ["Responsive Design", "Cloud Integration", "Real-time Features", "API Development"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android. Beautiful interfaces with seamless user experiences.",
    features: ["Cross-Platform", "Native Performance", "Offline Support", "Push Notifications"]
  },
  {
    icon: Bot,
    title: "AI/ML Chatbot Solutions",
    description: "Intelligent chatbots powered by advanced AI and machine learning. Automate customer support and enhance user engagement.",
    features: ["Natural Language Processing", "Multi-language Support", "24/7 Availability", "Custom Training"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
