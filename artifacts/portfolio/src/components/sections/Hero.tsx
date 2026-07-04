import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiCpu, FiGitCommit, FiLayers, FiTerminal, FiZap } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const titles = [
  "Full Stack Developer",
  "AI Automation Builder",
  "Product Developer",
  "Problem Solver"
];

const floatingCodeSnippets = [
  { text: "const agent = new AIWorkflow({ model: 'gpt-4o', mode: 'autonomous' });", top: "16%", left: "4%", depth: 20 },
  { text: "deployPipeline({ target: 'production', edge: true, latency: '<10ms' });", top: "28%", right: "6%", depth: -25 },
  { text: "await n8n.triggerWebhook({ client: 'iTeachTrading', status: 'LIVE' });", bottom: "22%", left: "6%", depth: 15 },
  { text: "SELECT * FROM scalable_products WHERE impact = 'MAXIMUM';", bottom: "32%", right: "5%", depth: -18 },
];

// Custom Magnetic Button Component for Awwwards-level physics
function MagneticButton({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Button onClick={onClick} className={className} size="lg">
        {children}
      </Button>
    </motion.div>
  );
}

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Ambient Parallax Cinematic Glows */}
      <motion.div
        animate={{ x: mousePos.x * -60, y: mousePos.y * -60 }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/10 to-pink-500/15 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      {/* Floating Background Elements with 3D Mouse Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 hidden lg:block">
        {floatingCodeSnippets.map((snippet, idx) => (
          <motion.div
            key={idx}
            animate={{ 
              x: mousePos.x * snippet.depth * 3,
              y: mousePos.y * snippet.depth * 3,
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              x: { type: "spring", damping: 25, stiffness: 60 },
              y: { type: "spring", damping: 25, stiffness: 60 },
              opacity: { duration: 6 + idx * 2, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ 
              top: snippet.top, 
              left: snippet.left, 
              right: snippet.right, 
              bottom: snippet.bottom 
            }}
            className="absolute max-w-xs bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl font-mono text-xs text-cyan-300/80 shadow-[0_0_25px_rgba(6,182,212,0.15)] flex items-center gap-2.5"
          >
            <FiCode className="text-cyan-400 shrink-0" />
            <span className="truncate">{snippet.text}</span>
          </motion.div>
        ))}

        {/* Parallax AI Nodes */}
        <motion.div
          animate={{ x: mousePos.x * 50, y: mousePos.y * 50, rotate: 360 }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, x: { type: "spring" }, y: { type: "spring" } }}
          className="absolute top-1/3 left-[12%] w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 backdrop-blur-md flex items-center justify-center shadow-lg"
        >
          <FiCpu className="w-8 h-8 text-purple-400" />
        </motion.div>

        <motion.div
          animate={{ x: mousePos.x * -40, y: mousePos.y * -40, rotate: -360 }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, x: { type: "spring" }, y: { type: "spring" } }}
          className="absolute top-1/2 right-[12%] w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/30 backdrop-blur-md flex items-center justify-center shadow-lg"
        >
          <FiGitCommit className="w-6 h-6 text-cyan-400" />
        </motion.div>

        <motion.div
          animate={{ x: mousePos.x * 30, y: mousePos.y * 30 }}
          transition={{ type: "spring", damping: 20 }}
          className="absolute bottom-1/4 left-[20%] w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 backdrop-blur-md flex items-center justify-center shadow-lg"
        >
          <FiLayers className="w-6 h-6 text-pink-400" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs md:text-sm mb-8 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>CHAPTER 0 // THE ARCHITECT</span>
        </motion.div>

        {/* Staggered Blur-to-Focus Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1 }}
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
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
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

        {/* Narrative Headline with Staggered Word Easing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-3xl font-light text-white/90 max-w-3xl mb-12 leading-relaxed font-display"
        >
          &ldquo;I don&apos;t just build applications.{' '}
          <span className="font-medium text-gradient">I build products, automate systems, and turn ideas into businesses.</span>&rdquo;
        </motion.p>

        {/* Magnetic CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-5 items-center mb-20"
        >
          <MagneticButton 
            onClick={() => scrollToSection('chapter-1')}
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:opacity-95 transition-all h-14 px-8 text-base font-semibold shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_45px_rgba(236,72,153,0.5)] border border-white/20 rounded-2xl"
          >
            Explore My Journey
          </MagneticButton>

          <MagneticButton 
            onClick={() => scrollToSection('chapter-3')}
            className="h-14 px-8 text-base font-medium border-white/20 hover:bg-white/10 hover:border-white/40 text-white backdrop-blur-md transition-all rounded-2xl bg-white/[0.04]"
          >
            View Projects
          </MagneticButton>

          <MagneticButton 
            onClick={() => scrollToSection('chapter-contact')}
            className="h-14 px-8 text-base font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all rounded-2xl bg-transparent border border-transparent hover:border-cyan-500/30"
          >
            Let&apos;s Build Something
          </MagneticButton>
        </motion.div>

        {/* Animated Scroll Indicator with Parallax Easing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={() => scrollToSection('chapter-1')}
          className="cursor-pointer flex flex-col items-center gap-2.5 group text-muted-foreground hover:text-cyan-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-mono group-hover:tracking-[0.3em] transition-all">Begin The Story</span>
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
