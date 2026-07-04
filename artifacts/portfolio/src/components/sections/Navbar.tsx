import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: '01 // Origin', id: 'chapter-1', href: '#chapter-1' },
  { name: '02 // Evolution', id: 'chapter-2', href: '#chapter-2' },
  { name: '03 // Products', id: 'chapter-3', href: '#chapter-3' },
  { name: '04 // Client Work', id: 'chapter-4', href: '#chapter-4' },
  { name: '05 // Arsenal', id: 'chapter-5', href: '#chapter-5' },
  { name: '06 // Mindset', id: 'chapter-6', href: '#chapter-6' },
  { name: '07 // Horizon', id: 'chapter-7', href: '#chapter-7' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 250;
      
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActive(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/50' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-xl font-display font-black text-white relative group flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>R.A // BUILDER</span>
        </a>
        
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`font-mono text-xs tracking-wider uppercase transition-colors hover:text-cyan-400 ${
                active === item.id ? 'text-cyan-400 font-bold' : 'text-muted-foreground'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('chapter-contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 text-xs font-mono tracking-wider uppercase text-cyan-300 hover:bg-cyan-500 hover:text-black font-semibold transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        >
          Let&apos;s Build
        </button>
      </div>
    </motion.header>
  );
}
