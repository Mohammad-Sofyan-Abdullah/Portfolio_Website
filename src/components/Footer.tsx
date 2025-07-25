import { Terminal, Heart, Code } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-primary/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-neon-cyan">
            <Terminal className="w-8 h-8 animate-cyber-pulse" />
            <span className="text-2xl font-bold terminal-text">CYBER_VAULT</span>
          </div>

          {/* Terminal-style message */}
          <div className="cyber-card p-4 max-w-2xl">
            <div className="terminal-text text-neon-green text-sm text-center">
              <div className="mb-2">$ system.status()</div>
              <div className="text-muted-foreground">
                "Portfolio successfully deployed. All neural networks operational.<br/>
                Ready for next mission parameters."
              </div>
            </div>
          </div>

          {/* Credit
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-neon-pink animate-cyber-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-neon-cyan animate-cyber-pulse" />
            <span>by Mohammad Sofyan Abdullah</span>
          </div> */}

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Mohammad Sofyan Abdullah. All rights reserved.</p>
            <p className="mt-1 terminal-text text-neon-purple">
              {">"} Powered by React • TypeScript • Tailwind CSS
            </p>
          </div>

          {/* Neural Network Animation */}
          <div className="flex gap-4 mt-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-neon-cyan rounded-full animate-cyber-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-6 left-10 floating-animation">
        <div className="w-4 h-4 border border-neon-purple/30 rounded-full animate-hologram-flicker" />
      </div>
      <div className="absolute top-6 right-10 floating-animation" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-neon-pink/50 rounded-full animate-cyber-pulse" />
      </div>
    </footer>
  );
};