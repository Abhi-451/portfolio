import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
const titles = [
  "Prompt Engineer",
  "AI Automation Developer",
  "Full Stack Developer",
  "RAG Pipeline Builder"
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="min-h-screen w-full flex items-center pt-20 px-6 md:px-12 container mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-cyan-400 font-mono text-sm md:text-base mb-4 tracking-wider uppercase">
            System Online. Welcome to my workspace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-2">
            Rayampalli Abhishek
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-12 md:h-16 mb-6 flex items-center"
        >
          <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground flex items-center gap-3">
            I am a {' '}
            <span className="text-gradient font-display relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap"
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="invisible">{titles[0]}</span> {/* For width reservation */}
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
        >
          Building AI-powered automation systems, intelligent web applications, and scalable digital experiences. Bridging the gap between the frontier of AI and production-ready applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none h-12 px-8 font-medium">
            View Projects
          </Button>
          <Button size="lg" variant="outline" className="rounded-none h-12 px-8 border-white/20 hover:bg-white/5">
            Download Resume
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            className="rounded-none h-12 px-8 text-cyan-400 hover:text-cyan-300 hover:bg-transparent"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 flex gap-6"
        >
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10">
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:abhishekrayampalli@gmail.com" className="text-muted-foreground hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10">
            <FiMail className="w-5 h-5" />
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
