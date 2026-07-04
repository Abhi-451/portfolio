import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Chapter1Curiosity from '@/components/sections/Chapter1Curiosity';
import Chapter2Evolution from '@/components/sections/Chapter2Evolution';
import Chapter3Products from '@/components/sections/Chapter3Products';
import Chapter4ClientWork from '@/components/sections/Chapter4ClientWork';
import Chapter5Arsenal from '@/components/sections/Chapter5Arsenal';
import Chapter6Philosophy from '@/components/sections/Chapter6Philosophy';
import Chapter7Future from '@/components/sections/Chapter7Future';
import Chapter8Contact from '@/components/sections/Chapter8Contact';
import Footer from '@/components/sections/Footer';
import Background3D from '@/components/Background3D';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading for splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-6 shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
          <h1 className="text-3xl font-display font-extrabold text-white tracking-tight">
            Rayampalli <span className="text-gradient">Abhishek</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mt-3 font-mono text-cyan-400 text-xs tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>INITIALIZING STORYTELLING PROTOCOL...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-foreground selection:bg-cyan-500/30 overflow-x-hidden">
      <Background3D />
      
      {/* Cinematic Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 origin-left z-50 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Interactive Cursor Ambient Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 transition-transform duration-300 ease-out hidden md:block"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.04), transparent 40%)`
        }}
      />

      <Navbar />
      
      {/* Storytelling Journey Chapters Assembly */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full">
        <Hero />
        <Chapter1Curiosity />
        <Chapter2Evolution />
        <Chapter3Products />
        <Chapter4ClientWork />
        <Chapter5Arsenal />
        <Chapter6Philosophy />
        <Chapter7Future />
        <Chapter8Contact />
      </main>

      <Footer />
    </div>
  );
}
