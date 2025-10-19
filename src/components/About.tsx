import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "5+ years of industry experience",
  "Expert team of developers & designers",
  "Agile development methodology",
  "24/7 customer support",
  "Competitive pricing & timely delivery",
  "Post-launch maintenance & updates"
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="bg-gradient-accent bg-clip-text text-transparent">Our Company</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              We are a passionate team of developers, designers, and innovators dedicated to building exceptional digital experiences. Our mission is to help businesses thrive in the digital age through cutting-edge technology solutions.
            </p>

            <p className="text-lg text-muted-foreground">
              From startups to enterprise clients, we've partnered with companies across various industries to deliver web applications, mobile apps, and AI-powered solutions that drive real business results.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="mt-6">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-8 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-all">
              <div className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                30+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-8 rounded-lg border border-accent/20 hover:border-accent/40 transition-all">
              <div className="text-5xl font-bold text-accent mb-2">
                5+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
              <div className="text-5xl font-bold text-primary mb-2">
                98%
              </div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
