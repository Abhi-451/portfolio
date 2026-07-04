import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ClientWorkSection from '@/components/sections/ClientWorkSection';
import StackSection from '@/components/sections/StackSection';
import ContactSection from '@/components/sections/ContactSection';
import Background3D from '@/components/Background3D';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-foreground selection:bg-white/20 selection:text-white overflow-x-hidden">
      
      {/* Background Layer */}
      <Background3D />
      
      {/* Sleek Monochrome Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white via-zinc-400 to-zinc-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Subtle Ethereal Ambient Light Tracking Cursor */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 transition-transform duration-500 ease-out hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.035), transparent 50%)`
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
