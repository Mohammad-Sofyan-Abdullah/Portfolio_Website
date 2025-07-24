import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Search, 
  Book, 
  TrendingUp, 
  Activity,
  Eye,
  Database,
  Zap
} from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      icon: Search,
      title: "Medical ChatBot Assistant",
      description: "End-to-end medical AI assistant using MedGemma 27B model with complete pipeline featuring real-time audio-to-text via Whisper v3 Large and text-to-speech capabilities for seamless medical consultations.",
      tech: ["MedGemma 27B", "Whisper v3", "TTS", "FastAPI", "WebRTC", "PyTorch"],
      category: "AI/ML",
      color: "neon-cyan",
      featured: true
    },
    {
      icon: Book,
      title: "RAG Based BookSage",
      description: "Intelligent book retrieval system that fetches books using ISBN input and processes them using RAG with Google Gemini for contextual understanding.",
      tech: ["Generative AI", "RAG", "FastAPI", "Gemini"],
      category: "AI/ML",
      color: "neon-purple"
    },
    {
      icon: Activity,
      title: "IMDb Sentiment Analysis",
      description: "Fine-tuned BERT model on IMDb dataset achieving 80% accuracy in sentiment classification with comprehensive preprocessing and PyTorch optimization.",
      tech: ["Hugging Face", "Python", "Transformers", "PyTorch"],
      category: "NLP",
      color: "neon-pink"
    },
    {
      icon: Brain,
      title: "Alzheimer Disease Detection",
      description: "CNN and ResNet models for brain MRI tumor classification with 85%+ accuracy after hyperparameter tuning, deployed on AWS with Flask backend.",
      tech: ["Kaggle", "Scikit Learn", "Keras", "Flask", "AWS"],
      category: "Computer Vision",
      color: "neon-blue"
    },
    {
      icon: Eye,
      title: "Diabetic Retinopathy Detection",
      description: "Neural networks for diabetes intensity classification using retinopathy images, achieving 80% accuracy with user-friendly interface.",
      tech: ["Kaggle", "Scikit Learn", "Keras", "Flask", "AWS", "JavaScript"],
      category: "Computer Vision",
      color: "neon-green"
    },
    {
      icon: TrendingUp,
      title: "Bangalore House Price Prediction",
      description: "Machine learning models including linear regression and decision trees for real estate price prediction with comprehensive data preprocessing.",
      tech: ["Kaggle", "Scikit Learn", "Flask", "AWS", "JavaScript"],
      category: "Data Science",
      color: "neon-orange"
    }
  ];

  const categories = ["All", "AI/ML", "Computer Vision", "NLP", "Data Science"];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 cyber-card p-3 mb-6">
            <Database className="w-6 h-6 text-neon-pink animate-cyber-pulse" />
            <span className="terminal-text text-neon-pink">project_portfolio.exe</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Neural Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge AI and machine learning technologies
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 transition-cyber"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`cyber-card group h-full ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${project.color}/20 border border-${project.color}/30`}>
                    <project.icon className={`w-6 h-6 text-${project.color}`} />
                  </div>
                  <Badge 
                    variant="outline"
                    className={`border-${project.color}/30 text-${project.color}`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-gradient transition-cyber">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-primary/20 transition-cyber"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button 
                    size="sm" 
                    className={`bg-${project.color}/20 border border-${project.color}/30 text-${project.color} hover:bg-${project.color}/30 transition-cyber flex-1`}
                    variant="outline"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className={`bg-${project.color}/20 border border-${project.color}/30 text-${project.color} hover:bg-${project.color}/30 transition-cyber flex-1`}
                    variant="outline"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-${project.color}/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
            </Card>
          ))}
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {[
              {
                title: "Data Scientist",
                company: "Data Forge",
                period: "May 2025 – Present",
                description: "Developed DSaaS platform enabling AI engineers to automate data lifecycle with agentic workflows and RAG-based models.",
                color: "neon-cyan"
              },
              {
                title: "AI Development Intern",
                company: "National Center of Artificial Intelligence",
                period: "Jan 2024 – Apr 2024",
                description: "Developing end-to-end medical applications using advanced AI models and machine learning techniques for healthcare solutions.",
                color: "neon-green"
              },
              {
                title: "Data Analyst",
                company: "British Airways (Virtual Internship)",
                period: "Apr 2024 – May 2024",
                description: "Scraped and analyzed customer reviews using Python, built predictive models for customer booking behavior.",
                color: "neon-purple"
              },
              {
                title: "Backend Web Dev Intern",
                company: "Startup",
                period: "June 2023 – Aug 2023",
                description: "Developed RESTful APIs using Node.js and MongoDB for workflow automation and database management.",
                color: "neon-pink"
              }
            ].map((exp, index) => (
              <div 
                key={exp.title}
                className="cyber-card p-6 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-3 h-3 bg-${exp.color} rounded-full mt-2 animate-cyber-pulse`} />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold group-hover:text-gradient transition-cyber">
                        {exp.title}
                      </h4>
                      <span className={`text-${exp.color} font-medium terminal-text`}>
                        {exp.period}
                      </span>
                    </div>
                    <div className={`text-${exp.color} font-medium mb-3`}>
                      {exp.company}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 floating-animation">
        <Zap className="w-8 h-8 text-neon-purple/50 animate-hologram-flicker" />
      </div>
    </section>
  );
};