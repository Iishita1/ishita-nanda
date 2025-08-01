import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-primary">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">Building a strong foundation in Computer Science</p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card hover:bg-card/80 transition-smooth">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Bachelor of Engineering</CardTitle>
                <p className="text-lg text-primary mb-2">Computer Science & Engineering</p>
                <p className="text-foreground/80 mb-2">Chitkara University of Engineering, Patiala</p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Aug 2024 - Current</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                CGPA: 9.34
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;