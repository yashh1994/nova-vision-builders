import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI-powered insights.",
    tags: ["React Native", "Firebase", "AI/ML"],
    color: "from-green-500/20 to-cyan-500/20"
  },
  {
    title: "Customer Support Bot",
    category: "AI Chatbot",
    description: "Intelligent chatbot handling 10,000+ customer queries monthly with 95% satisfaction rate.",
    tags: ["GPT-4", "Python", "NLP", "Analytics"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Real Estate Portal",
    category: "Web Application",
    description: "Property listing platform with virtual tours, advanced search, and real-time messaging.",
    tags: ["Next.js", "PostgreSQL", "Maps API"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Healthcare Management",
    category: "Mobile App",
    description: "HIPAA-compliant app for patient records, appointments, and telemedicine consultations.",
    tags: ["Flutter", "AWS", "Security"],
    color: "from-teal-500/20 to-blue-500/20"
  },
  {
    title: "Sales Assistant AI",
    category: "AI Chatbot",
    description: "AI-powered sales assistant that increased conversion rates by 40% through personalized recommendations.",
    tags: ["Machine Learning", "API Integration"],
    color: "from-yellow-500/20 to-orange-500/20"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing our successful digital transformations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="relative p-6 space-y-4">
                {/* Category Badge */}
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-primary/10 rounded-md border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Link */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
