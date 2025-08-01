import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Code, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "iishita.579@gmail.com",
      href: "mailto:iishita.579@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 80191790628",
      href: "tel:+918019179062",
      color: "text-green-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "#",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "#",
      color: "text-gray-400"
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "Check my solutions",
      href: "#",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-primary">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card hover:bg-card/80 transition-smooth group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-smooth">
                      <Icon className={`w-5 h-5 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{method.label}</h3>
                      <a 
                        href={method.href}
                        className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                      >
                        {method.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 inline-block">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Based in Patiala, Punjab, India</span>
              </div>
              <p className="text-foreground/80 mb-6 max-w-md">
                Currently pursuing B.E. in Computer Science at Chitkara University. 
                Always eager to learn and contribute to innovative projects.
              </p>
              <Button className="bg-primary hover:bg-primary/90" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Let's Connect
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;