import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Server, Cloud, Database, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C/C++", "Java", "Python", "JavaScript", "TypeScript"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React.js", "Next.js", "Tailwind CSS"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Backend & Full-Stack",
      icon: Server,
      skills: ["Express.js", "Flask", "Django"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["MS Azure"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "CS Fundamentals",
      icon: Database,
      skills: ["Data Structures", "Algorithms", "OOP"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "Github"],
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-primary">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card hover:bg-card/80 transition-smooth group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-smooth">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-muted/50 hover:bg-primary/20 hover:text-primary transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;