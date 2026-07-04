import React, { useEffect, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
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
import { FiTerminal, FiCheck, FiCpu, FiShield } from 'react-icons/fi';

const bootSequenceLines = [
  { text: "Initializing developer profile...", delay: 400 },
  { text: "Loading products...", delay: 900 },
  { text: "Connecting AI agents...", delay: 1500 },
  { text: "Deploying experience...", delay: 2100 },
  { text: "Welcome.", delay: 2700 }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [bootStep, setBootStep] = useState(0);
  const [isBootComplete, setIsBootComplete] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Run Futuristic OS Boot Sequence
    const timers: NodeJS.Timeout[] = [];
    bootSequenceLines.forEach((_, idx) => {
      const timer = setTimeout(() => {
        setBootStep(idx + 1);
      }, bootSequenceLines[idx].delay);
      timers.push(timer);
    });

    const finishTimer = setTimeout(() => {
      setIsBootComplete(true);
    }, 3400);
    timers.push(finishTimer);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      timers.forEach(t => clearTimeout(t));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-foreground selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Futuristic OS Boot Screen */}
      <AnimatePresence mode="wait">
        {!isBootComplete && (
          <motion.div
            key="boot-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6 font-mono select-none"
          >
            {/* Ambient Sci-Fi Glow */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-md w-full rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 p-6 md:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden">
              {/* Top Terminal Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FiTerminal className="text-cyan-400 w-4 h-4 animate-pulse" />
                  <span className="text-white font-bold tracking-wider">RA_OS // KERNEL v4.5</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-300/80">
                  <FiShield className="w-3.5 h-3.5" />
                  <span>SECURE BOOT</span>
                </div>
              </div>

              {/* Terminal Lines Output */}
              <div className="space-y-3.5 min-h-[160px] text-sm md:text-base">
                {bootSequenceLines.slice(0, bootStep).map((line, idx) => {
                  const isLast = idx === bootStep - 1 && idx !== bootSequenceLines.length - 1;
                  const isWelcome = line.text === "Welcome.";
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex items-center gap-3 ${isWelcome ? 'text-cyan-300 font-extrabold text-lg pt-2 border-t border-white/10 mt-4' : 'text-white/90'}`}
                    >
                      {isWelcome ? (
                        <FiCpu className="text-cyan-400 w-5 h-5 animate-spin" />
                      ) : (
                        <span className="text-cyan-400 font-bold">&gt;</span>
                      )}
                      <span>{line.text}</span>
                      {isLast && (
                        <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse ml-1" />
                      )}
                      {!isLast && !isWelcome && (
                        <FiCheck className="text-emerald-400 w-4 h-4 ml-auto shrink-0" />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Bar Footer */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-2">
                  <span>BOOT PROGRESS</span>
                  <span className="text-cyan-400 font-semibold">{Math.min(100, Math.round((bootStep / bootSequenceLines.length) * 100))}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${(bootStep / bootSequenceLines.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs font-mono text-muted-foreground/60 tracking-widest uppercase animate-pulse">
              [ INITIALIZING INTERACTIVE STORYTELLING EXPERIENCE ]
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Content */}
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
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.05), transparent 45%)`
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
