import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Laptop } from "lucide-react";

const Projects = () => {
  const project = {
    title: "IEEE-CIET Website",
    description: "Official website for IEEE CIET Student Chapter with responsive design and modern UI/UX.",
    timeline: "Jan 2025 - Current",
    contributions: [
      "Designed and developed the About Page with modern aesthetics",
      "Fixed critical responsiveness issues across all devices",
      "Implemented minor UI improvements and bug fixes",
      "Ensured cross-browser compatibility and performance optimization"
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
    status: "Live"
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-primary">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">Building solutions with modern technologies</p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card hover:bg-card/80 transition-smooth">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Laptop className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <p className="text-foreground/80 mb-3">{project.description}</p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{project.timeline}</span>
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                {project.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">Key Contributions:</h4>
                <ul className="space-y-2">
                  {project.contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10 border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;