import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background relative z-10 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-center md:text-left">
          <p className="text-sm font-mono text-muted-foreground">
            Designed & Built by <span className="text-indigo-400 font-display">Rayampalli Abhishek</span>
          </p>
          <p className="text-xs text-white/30 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-muted-foreground">
          <a href="#about" className="text-sm hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-sm hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" className="text-muted-foreground hover:text-indigo-400 transition-colors">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" className="text-muted-foreground hover:text-indigo-400 transition-colors">
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:abhishek@example.com" className="text-muted-foreground hover:text-indigo-400 transition-colors">
            <FiMail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
