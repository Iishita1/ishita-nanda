import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-glow/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-hero">
            ISHITA NANDA
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Computer Science & Engineering Student
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about building innovative web applications with modern technologies. 
            Currently pursuing B.E. in CSE at Chitkara University with a CGPA of 9.34.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="outline" size="lg" className="bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-smooth">
              <Mail className="w-5 h-5 mr-2" />
              iishita.579@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-smooth">
              <Phone className="w-5 h-5 mr-2" />
              +91 80191790628
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-6 justify-center">
            <a href="#" className="p-4 rounded-full bg-card/20 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-smooth">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 rounded-full bg-card/20 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-smooth">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 rounded-full bg-card/20 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-smooth">
              <Code className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;