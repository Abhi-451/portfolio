import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  "SYS.CORE // INITIALIZING",
  "ESTABLISHING SECURE CONNECTION...",
  "LOADING AI MODULES...",
  "CALIBRATING HUD V-8.5...",
  "ENABLING ARC REACTOR...",
  "ALL SYSTEMS OPERATIONAL.",
  "WELCOME BACK, SIR."
];

export default function JarvisBootSequence({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 300); // Fast typing speed
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => {
        onComplete();
      }, 800); // Hold on last line
      return () => clearTimeout(endTimer);
    }
  }, [currentLine, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050014] text-cyan-400 font-mono"
    >
      <div className="w-full max-w-2xl px-8 flex flex-col items-start space-y-2">
        {bootLines.slice(0, currentLine).map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-sm md:text-xl font-bold ${i === bootLines.length - 1 ? 'text-amber-400 mt-8 text-2xl md:text-4xl' : ''}`}
          >
            {"> "} {line}
          </motion.div>
        ))}
        {currentLine < bootLines.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="w-4 h-6 bg-cyan-400 mt-2"
          />
        )}
      </div>
    </motion.div>
  );
}
