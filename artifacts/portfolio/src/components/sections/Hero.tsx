import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
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
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
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
      {/* Subtle Ethereal Monochrome Glows */}
      <motion.div
        animate={{ x: mousePos.x * -40, y: mousePos.y * -40 }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-white/[0.06] via-zinc-500/[0.05] to-transparent rounded-full blur-[160px] pointer-events-none -z-10"
      />

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

        {/* Massive Pristine Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl sm:text-8xl md:text-9xl font-display font-bold tracking-tight text-white mb-8 leading-[0.95]"
        >
          Rayampalli <span className="text-gradient">Abhishek.</span>
        </motion.h1>

        {/* Confident Product Engineering Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl font-light text-zinc-400 max-w-3xl mb-14 leading-relaxed font-sans"
        >
          Engineering high-performance web applications, autonomous AI workflows, and scalable digital products with obsessive attention to detail and business ROI.
        </motion.p>

        {/* Minimalist Monochrome Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 items-center mb-20"
        >
          <MagneticButton 
            onClick={() => scrollToSection('products')}
            className="bg-white text-black hover:bg-zinc-200 transition-all h-13 px-8 text-sm font-semibold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-2"
          >
            <span>Explore Work</span>
            <FiArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton 
            onClick={() => scrollToSection('contact')}
            className="h-13 px-8 text-sm font-medium border-white/15 hover:bg-white/[0.08] hover:border-white/30 text-white backdrop-blur-md transition-all rounded-full bg-white/[0.03]"
          >
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Refined Social Communication Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
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
      </div>
    </section>
  );
}
