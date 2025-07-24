import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send, 
  MapPin,
  Terminal,
  Globe
} from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sofyanrajpoot567@gmail.com",
      href: "mailto:sofyanrajpoot567@gmail.com",
      bgColor: "bg-neon-cyan/20",
      borderColor: "border-neon-cyan/30",
      textColor: "text-neon-cyan"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0336-5052500",
      href: "tel:0336-5052500",
      bgColor: "bg-neon-pink/20",
      borderColor: "border-neon-pink/30",
      textColor: "text-neon-pink"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Mohammad-Sofyan-Abdullah",
      href: "https://github.com/Mohammad-Sofyan-Abdullah",
      bgColor: "bg-neon-purple/20",
      borderColor: "border-neon-purple/30",
      textColor: "text-neon-purple"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohd-sofyan-abdullah",
      href: "https://www.linkedin.com/in/mohd-sofyan-abdullah",
      bgColor: "bg-neon-blue/20",
      borderColor: "border-neon-blue/30",
      textColor: "text-neon-blue"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 matrix-bg opacity-40" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 cyber-card p-3 mb-6">
            <Terminal className="w-6 h-6 text-neon-green animate-cyber-pulse" />
            <span className="terminal-text text-neon-green">initialize_connection.exe</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Establish Connection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on revolutionary projects? Let's sync our neural networks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="cyber-card p-6">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Contact Channels
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-cyber group cursor-pointer relative z-10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-lg ${contact.bgColor} border ${contact.borderColor}`}>
                      <contact.icon className={`w-5 h-5 ${contact.textColor} group-hover:animate-cyber-pulse`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className={`font-medium ${contact.textColor} group-hover:${contact.textColor} transition-cyber`}>
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Availability */}
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold mb-4 text-gradient">
                Current Status
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-neon-cyan" />
                  <span className="text-muted-foreground">Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-neon-pink" />
                  <span className="text-muted-foreground">Available for Remote Work</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-cyber-pulse" />
                  <span className="text-neon-green font-medium">Currently Available</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold mb-4 text-gradient">
                Response Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-cyan">&lt; 24h</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple">100%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="cyber-card relative z-10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Send Transmission
              </h3>
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  
                  const mailtoLink = `mailto:sofyanrajpoot567@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                  window.open(mailtoLink, '_blank');
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <Input 
                      name="name"
                      placeholder="Enter your name"
                      className="bg-background/50 border-border/50 focus:border-neon-cyan/50 transition-cyber relative z-10"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      name="email"
                      type="email"
                      placeholder="your.email@domain.com"
                      className="bg-background/50 border-border/50 focus:border-neon-cyan/50 transition-cyber relative z-10"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    name="subject"
                    placeholder="Project collaboration opportunity"
                    className="bg-background/50 border-border/50 focus:border-neon-cyan/50 transition-cyber relative z-10"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Describe your project requirements and how we can collaborate..."
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-neon-cyan/50 transition-cyber resize-none relative z-10"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-gradient-cyber hover:shadow-neon-cyan transition-glow text-lg py-6 relative z-10 cursor-pointer"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Transmit Message
                </Button>
              </form>

              {/* Terminal Output Simulation */}
              <div className="mt-8 p-4 bg-background/30 rounded-lg border border-neon-green/30">
                <div className="terminal-text text-neon-green text-sm">
                  <div className="mb-1">$ connection_status --check</div>
                  <div className="text-muted-foreground">
                    ✓ Neural network: ONLINE<br/>
                    ✓ Collaboration protocols: ACTIVE<br/>
                    ✓ Innovation engine: READY
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-animation">
        <div className="w-6 h-6 border-2 border-neon-cyan/50 rounded-full animate-hologram-flicker" />
      </div>
      <div className="absolute bottom-20 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-8 border border-neon-pink/50 rounded-lg rotate-45 animate-hologram-flicker" />
      </div>
    </section>
  );
};