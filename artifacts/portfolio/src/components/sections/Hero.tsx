import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDown, FiTerminal, FiCpu, FiGitCommit, FiLayers, FiCode } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const titles = [
  "Full Stack Developer",
  "AI Automation Builder",
  "Product Developer",
  "Problem Solver"
];

const floatingCodeSnippets = [
  { text: "const agent = new AIWorkflow({ model: 'gpt-4o', mode: 'autonomous' });", top: "15%", left: "5%", delay: 0 },
  { text: "deployPipeline({ target: 'production', edge: true, latency: '<10ms' });", top: "25%", right: "8%", delay: 1.5 },
  { text: "await n8n.triggerWebhook({ client: 'iTeachTrading', status: 'LIVE' });", bottom: "20%", left: "8%", delay: 3 },
  { text: "SELECT * FROM scalable_products WHERE impact = 'MAXIMUM';", bottom: "30%", right: "5%", delay: 2 },
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(intervalId);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Ambient Cinematic Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/10 to-pink-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Floating Background Elements (Code Snippets & AI Nodes) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 hidden lg:block">
        {floatingCodeSnippets.map((snippet, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2], 
              y: [0, -15, 0],
              x: idx % 2 === 0 ? [0, 10, 0] : [0, -10, 0]
            }}
            transition={{ 
              duration: 8 + idx * 2, 
              repeat: Infinity, 
              delay: snippet.delay,
              ease: "easeInOut" 
            }}
            style={{ 
              top: snippet.top, 
              left: snippet.left, 
              right: snippet.right, 
              bottom: snippet.bottom 
            }}
            className="absolute max-w-xs bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-lg font-mono text-xs text-cyan-300/80 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex items-center gap-2.5"
          >
            <FiCode className="text-cyan-400 shrink-0" />
            <span className="truncate">{snippet.text}</span>
          </motion.div>
        ))}

        {/* Floating AI & Pipeline Nodes */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-[12%] w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 backdrop-blur-md flex items-center justify-center shadow-lg"
        >
          <FiCpu className="w-8 h-8 text-purple-400" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360, y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-[12%] w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/30 backdrop-blur-md flex items-center justify-center shadow-lg"
        >
          <FiGitCommit className="w-6 h-6 text-cyan-400" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[20%] w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 backdrop-blur-md flex items-center justify-center shadow-lg"
        >
          <FiLayers className="w-6 h-6 text-pink-400" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs md:text-sm mb-8 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>CHAPTER 0 // THE ARCHITECT</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight text-white mb-6 leading-none"
        >
          Rayampalli <span className="text-gradient">Abhishek</span>
        </motion.h1>

        {/* Animated Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 md:h-14 mb-8 flex items-center justify-center w-full"
        >
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground flex items-center justify-center gap-2 md:gap-3">
            <span>I am a</span>
            <span className="text-gradient font-display font-bold relative inline-flex justify-center min-w-[260px] md:min-w-[340px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-center drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="invisible">{titles[0]}</span>
            </span>
          </div>
        </motion.div>

        {/* Narrative Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-3xl font-light text-white/90 max-w-3xl mb-12 leading-relaxed font-display"
        >
          &ldquo;I don&apos;t just build applications.{' '}
          <span className="font-medium text-gradient">I build products, automate systems, and turn ideas into businesses.</span>&rdquo;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-5 items-center mb-20"
        >
          <Button 
            size="lg" 
            onClick={() => scrollToSection('chapter-1')}
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:opacity-95 transition-opacity h-14 px-8 text-base font-semibold shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-white/20"
          >
            Explore My Journey
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection('chapter-3')}
            className="h-14 px-8 text-base font-medium border-white/20 hover:bg-white/10 hover:border-white/40 text-white backdrop-blur-sm transition-all"
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            onClick={() => scrollToSection('chapter-contact')}
            className="h-14 px-8 text-base font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
          >
            Let&apos;s Build Something
          </Button>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={() => scrollToSection('chapter-1')}
          className="cursor-pointer flex flex-col items-center gap-2 group text-muted-foreground hover:text-cyan-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-mono">Begin The Story</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2 p-1"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-current" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
