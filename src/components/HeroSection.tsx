import { useState, useEffect } from "react";
import { ArrowDown, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCyberBg from "@/assets/hero-cyber-bg.jpg";
import "./HeroSection.css"

export const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Mohammad Sofyan Abdullah";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{ backgroundImage: `url(${heroCyberBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10" />

      {/* Floating Lights */}
      <div className="absolute top-20 left-10 floating-animation">
        <div className="w-4 h-4 bg-neon-cyan rounded-full pulse-glow" />
      </div>
      <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-neon-pink rounded-full pulse-glow" />
      </div>
      <div className="absolute bottom-40 left-20 floating-animation" style={{ animationDelay: '4s' }}>
        <div className="w-5 h-5 bg-neon-purple rounded-full pulse-glow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-32 md:pt-0 herosection-content-main">
        <div className="cyber-card p-6 mb-8 animate-neural-glow">
          <div className="flex items-center gap-2 mb-4 terminal-text text-neon-cyan">
            <Terminal className="w-5 h-5" />
            <span className="text-sm">~/portfolio/cyber_vault</span>
          </div>
          <div className="border-l-2 border-neon-cyan pl-4 terminal-text">
            <div className="text-neon-green mb-2">$ whoami</div>
            <div className="text-2xl md:text-4xl font-bold text-gradient">
              {typedText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
          Data Scientist
          <br />
          <span className="text-3xl md:text-5xl text-neon-pink">& AI Enthusiast</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Architecting the future with <span className="text-neon-cyan">POWER OF DATA</span>,<br />
          and <span className="text-neon-purple">Artificial Intelligence</span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="cyber-card p-4 text-center">
            <Code className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
            <div className="text-2xl font-bold text-neon-cyan">15+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="cyber-card p-4 text-center">
            <Terminal className="w-8 h-8 text-neon-pink mx-auto mb-2" />
            <div className="text-2xl font-bold text-neon-pink">5+</div>
            <div className="text-sm text-muted-foreground">Tech Stack</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-cyber hover:shadow-neon-pink transition-glow px-8 py-3 text-lg font-semibold"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Projects
          </Button>

          <a
            href="/Mohammad_Sofyan_CV.pdf"
            download
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-cyber px-8 py-3 text-lg rounded-md border inline-block"
          >
            Download CV
          </a>
        </div>

        {/* Scroll Icon */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-neon-cyan mx-auto animate-cyber-pulse" />
        </div>
      </div>

      {/* Matrix Rain */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-neon-green/30 text-xs terminal-text animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>
    </section>
  );
};
