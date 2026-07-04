import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiChevronDown, FiCode, FiCpu, FiTerminal } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

// Custom Magnetic Button Component for luxury physics
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
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Button onClick={onClick} className={className} size="lg">
        {children}
      </Button>
    </motion.div>
  );
}

// Floating Code & AI Parallax Snippets
const floatingNodes = [
  { text: "AIWorkflow.execute({ agent: 'autonomous_v4' })", x: -35, y: -25, depth: 35, delay: 0.2, icon: <FiCpu className="text-emerald-400" /> },
  { text: "deployPipeline.push({ target: 'vercel-edge' })", x: 38, y: -18, depth: -25, delay: 0.5, icon: <FiTerminal className="text-zinc-300" /> },
  { text: "n8n.triggerWebhook({ payload: clientData })", x: -30, y: 28, depth: -35, delay: 0.8, icon: <FiCode className="text-indigo-300" /> },
  { text: "query.optimize({ latency: '< 0.8s' })", x: 35, y: 25, depth: 40, delay: 1.1, icon: <FiCpu className="text-emerald-400" /> },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
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
    <section id="hero" className="min-h-screen w-full flex items-center justify-center pt-28 pb-20 px-6 md:px-12 relative overflow-hidden">
      
      {/* Subtle Ethereal Monochrome Glows responding to 3D mouse parallax */}
      <motion.div
        animate={{ x: mousePos.x * -50, y: mousePos.y * -50 }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-white/[0.07] via-zinc-500/[0.05] to-transparent rounded-full blur-[170px] pointer-events-none -z-10"
      />

      {/* Floating 3D Parallax Code Snippets & AI Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block -z-10">
        {floatingNodes.map((node, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.35, 0.65, 0.35],
              x: mousePos.x * node.depth * 2,
              y: mousePos.y * node.depth * 2,
            }}
            transition={{
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: node.delay },
              x: { type: "spring", damping: 25, stiffness: 40 },
              y: { type: "spring", damping: 25, stiffness: 40 }
            }}
            style={{
              top: `${50 + node.y}%`,
              left: `${50 + node.x}%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl font-mono text-xs text-zinc-400 shadow-xl flex items-center gap-2"
          >
            {node.icon}
            <span>{node.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Main Minimalist Center-Stage Content */}
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Sleek Monochrome Super-Title Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-300 font-mono text-xs uppercase tracking-widest mb-10 shadow-sm backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Full Stack Developer &amp; AI Automation Builder</span>
        </motion.div>

        {/* Massive Pristine Typography with Staggered Blur-to-Focus Reveal */}
        <div className="mb-8 leading-[0.95]">
          <motion.h1
            initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl font-display font-bold tracking-tight text-white block"
          >
            Rayampalli
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl font-display font-bold tracking-tight text-gradient block mt-1"
          >
            Abhishek.
          </motion.h1>
        </div>

        {/* Confident Product Engineering Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl font-light text-zinc-400 max-w-3xl mb-14 leading-relaxed font-sans"
        >
          Engineering high-performance web applications, autonomous AI workflows, and scalable digital products with obsessive attention to detail and business ROI.
        </motion.p>

        {/* Minimalist Monochrome Actions with Magnetic Physics & Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 items-center mb-20"
        >
          <MagneticButton 
            onClick={() => scrollToSection('products')}
            className="bg-white text-black hover:bg-zinc-200 transition-all h-14 px-9 text-sm font-semibold rounded-full shadow-[0_0_35px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] flex items-center gap-2.5"
          >
            <span>Explore Work</span>
            <FiArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton 
            onClick={() => scrollToSection('contact')}
            className="h-14 px-9 text-sm font-medium border-white/15 hover:bg-white/[0.1] hover:border-white/35 text-white backdrop-blur-xl transition-all rounded-full bg-white/[0.04] shadow-lg"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Refined Social Communication Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="flex items-center gap-6 text-zinc-500 pt-8 border-t border-white/[0.06] w-full max-w-xs justify-center"
        >
          <a href="https://github.com/Abhi-451" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-2">
            <FiGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-2">
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:abhishekrayampalli@gmail.com" className="hover:text-white transition-colors p-2">
            <FiMail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Animated Bouncing Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 bg-white/[0.02]">
            <motion.div 
              animate={{ y: [0, 12, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-white" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
