import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Globe, 
  Cpu, 
  Cloud, 
  Code2,
  Zap,
  Layers
} from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "neon-cyan",
      skills: ["Python", "Java", "C++", "JavaScript", "SQL"]
    },
    {
      icon: Globe,
      title: "Web Development",
      color: "neon-pink",
      skills: ["HTML", "CSS", "Flask", "FastAPI", "Node.js"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "neon-purple",
      skills: ["Firebase", "MongoDB"]
    },
    {
      icon: Brain,
      title: "Data Science & Analytics",
      color: "neon-blue",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "Power BI"]
    },
    {
      icon: Cpu,
      title: "Machine Learning & AI",
      color: "neon-green",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras"]
    },
    {
      icon: Zap,
      title: "NLP & LLM Tools",
      color: "neon-orange",
      skills: ["Hugging Face", "Transformers", "LangChain", "LlamaIndex"]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      color: "neon-cyan",
      skills: ["AWS", "Azure"]
    },
    {
      icon: Layers,
      title: "Frameworks & Tools",
      color: "neon-pink",
      skills: ["React", "FastAPI", "Flask", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 matrix-bg opacity-30" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 cyber-card p-3 mb-6">
            <Cpu className="w-6 h-6 text-neon-cyan animate-cyber-pulse" />
            <span className="terminal-text text-neon-cyan">neural_networks.exe</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Technical Arsenal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mastering the tools that power tomorrow's digital landscape
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="cyber-card group h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-${category.color}/20 border border-${category.color}/30`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="font-bold text-lg leading-tight">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex-1 flex flex-col gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 group/skill"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-${category.color} animate-cyber-pulse`} />
                      <Badge 
                        variant="outline" 
                        className={`border-${category.color}/30 text-${category.color} hover:bg-${category.color}/10 transition-cyber flex-1 justify-start`}
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Proficiency Indicator */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className={`text-sm font-bold text-${category.color}`}>
                      {85 + Math.floor(Math.random() * 15)}%
                    </span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-${category.color}/60 rounded-full transition-all duration-1000 ease-out group-hover:bg-${category.color}`}
                      style={{ 
                        width: `${85 + Math.floor(Math.random() * 15)}%`,
                        boxShadow: `0 0 10px hsl(var(--${category.color}) / 0.5)`
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "CISCO Netacad | Introduction to Networking",
              "Coursera & Stanford University | Machine Learning",
              "AWS | Cloud Essentials",
              "Coursera | GenAI For Everyone"
            ].map((cert, index) => (
              <div 
                key={cert} 
                className="cyber-card p-4 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-3 h-3 bg-neon-green rounded-full mx-auto mb-3 animate-cyber-pulse" />
                <p className="text-sm text-muted-foreground group-hover:text-neon-green transition-cyber">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 floating-animation">
        <div className="w-8 h-8 border border-neon-purple/50 rounded-lg rotate-45 animate-hologram-flicker" />
      </div>
      <div className="absolute bottom-20 left-10 floating-animation" style={{ animationDelay: '3s' }}>
        <div className="w-6 h-6 border border-neon-pink/50 rounded-full animate-hologram-flicker" />
      </div>
    </section>
  );
};