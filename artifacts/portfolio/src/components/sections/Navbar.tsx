import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', id: 'about', href: '#about' },
  { name: 'Experience', id: 'experience', href: '#experience' },
  { name: 'Products', id: 'products', href: '#products' },
  { name: 'Client Work', id: 'client-work', href: '#client-work' },
  { name: 'Stack', id: 'stack', href: '#stack' },
  { name: 'Contact', id: 'contact', href: '#contact' },
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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 border backdrop-blur-2xl ${
        scrolled 
          ? 'bg-black/70 border-white/[0.12] shadow-[0_10px_30px_rgba(0,0,0,0.8)] scale-95' 
          : 'bg-black/40 border-white/[0.08] shadow-lg'
      }`}>
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="font-display font-semibold text-white px-3 py-1.5 text-sm tracking-tight mr-2 hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>RA</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                active === item.id 
                  ? 'bg-white text-black font-semibold shadow-sm' 
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="ml-2 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-white text-xs font-medium transition-all duration-200 hover:border-white/30"
        >
          Get in Touch
        </button>
      </nav>
    </motion.header>
  );
}
