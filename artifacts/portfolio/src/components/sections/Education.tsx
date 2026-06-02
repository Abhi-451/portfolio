import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 w-full container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 flex items-center justify-end">
          <div className="h-px bg-white/10 flex-grow mr-8 hidden md:block"></div>
          <span className="text-white mr-4">Education</span> <span className="text-gradient">.06</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-glass border border-white/5 hover:border-cyan-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl"></div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">B.Tech in Computer Science</h3>
                <p className="text-xl text-cyan-400">BEST Innovation University</p>
              </div>
              <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full font-mono text-sm text-muted-foreground inline-block w-fit">
                2022 – 2026
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Focusing on modern software engineering practices, artificial intelligence, and building scalable systems. Engaging in hands-on projects and continuous learning to stay at the cutting edge of tech.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
