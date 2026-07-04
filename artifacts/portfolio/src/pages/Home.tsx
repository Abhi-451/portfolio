import React, { useEffect, useState } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ClientWorkSection from '@/components/sections/ClientWorkSection';
import StackSection from '@/components/sections/StackSection';
import ContactSection from '@/components/sections/ContactSection';
import Background3D from '@/components/Background3D';
import { FiTerminal, FiCheck, FiCpu, FiShield, FiRadio } from 'react-icons/fi';

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

    // Run Futuristic OS Boot Sequence in clean Apple/Linear titanium aesthetic
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
    <div className="relative min-h-screen bg-[#050505] text-foreground selection:bg-white/20 selection:text-white overflow-x-hidden">
      
      {/* Futuristic OS Boot Screen */}
      <AnimatePresence mode="wait">
        {!isBootComplete && (
          <motion.div
            key="boot-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6 font-mono select-none"
          >
            {/* Ethereal Monochrome Glow */}
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-white/[0.05] via-zinc-500/[0.05] to-transparent rounded-full blur-[140px] pointer-events-none" />
            
            <div className="max-w-md w-full rounded-3xl bg-white/[0.03] border border-white/[0.1] p-6 md:p-8 backdrop-blur-3xl shadow-[0_0_60px_rgba(255,255,255,0.05)] relative overflow-hidden">
              {/* Top Terminal Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08] text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <FiTerminal className="text-white w-4 h-4 animate-pulse" />
                  <span className="text-white font-bold tracking-wider">RA_OS // STUDIO KERNEL</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <FiShield className="w-3.5 h-3.5" />
                  <span>VERIFIED BOOT</span>
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
                      className={`flex items-center gap-3 ${isWelcome ? 'text-white font-extrabold text-lg pt-3 border-t border-white/[0.08] mt-4' : 'text-zinc-300'}`}
                    >
                      {isWelcome ? (
                        <FiCpu className="text-emerald-400 w-5 h-5 animate-spin" />
                      ) : (
                        <span className="text-zinc-500 font-bold">&gt;</span>
                      )}
                      <span>{line.text}</span>
                      {isLast && (
                        <span className="w-2 h-4 bg-white inline-block animate-pulse ml-1" />
                      )}
                      {!isLast && !isWelcome && (
                        <FiCheck className="text-emerald-400 w-4 h-4 ml-auto shrink-0" />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Bar Footer */}
              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-2">
                  <span>BOOT PROTOCOL PROGRESS</span>
                  <span className="text-white font-semibold">{Math.min(100, Math.round((bootStep / bootSequenceLines.length) * 100))}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${(bootStep / bootSequenceLines.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-gradient-to-r from-zinc-500 via-zinc-200 to-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs font-mono text-zinc-600 tracking-widest uppercase animate-pulse flex items-center gap-2">
              <FiRadio className="w-3.5 h-3.5 text-emerald-400 animate-ping" />
              <span>[ INITIALIZING CINEMATIC STORYTELLING EXPERIENCE ]</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Layer */}
      <Background3D />
      
      {/* Sleek Monochrome Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white via-zinc-300 to-zinc-500 origin-left z-50 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Subtle Ethereal Ambient Light Tracking Cursor */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 transition-transform duration-500 ease-out hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.04), transparent 50%)`
        }}
      />

      {/* Floating Glass Pill Navigation */}
      <Navbar />
      
      {/* Pristine Apple / Linear Studio Sections Assembly */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProductsSection />
        <ClientWorkSection />
        <StackSection />
        <ContactSection />
      </main>
    </div>
  );
}
