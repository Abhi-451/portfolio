import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiTrendingUp, FiLayers } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 w-full container mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 flex items-center">
          <span className="text-gradient">01.</span> <span className="ml-4 text-white">About Me</span>
          <div className="h-px bg-white/10 flex-grow ml-8 hidden md:block"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am an AI Generalist and Full Stack Developer dedicated to transforming business ideas into intelligent, production-ready systems. I don't just write code; I architect solutions that leverage the latest in AI and scalable technologies.
            </p>
            <p>
              My expertise spans the entire stack—from crafting responsive user interfaces with <span className="text-cyan-400">React and Flutter</span>, to building robust backends with <span className="text-cyan-400">Node.js and PostgreSQL</span>. 
            </p>
            <p>
              Where I truly excel is at the intersection of traditional software and AI. I build <span className="text-cyan-400">RAG Pipelines</span>, design custom <span className="text-cyan-400">AI Agents</span>, and implement sophisticated automation workflows using <span className="text-cyan-400">n8n</span> and advanced <span className="text-cyan-400">Prompt Engineering</span>.
            </p>
            <p>
              I also ensure digital products are seen, applying deep <span className="text-cyan-400">SEO Optimization</span> to drive organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-4 group">
              <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                <FiCpu className="w-6 h-6" />
              </div>
              <h3 className="text-white font-display font-medium text-xl">AI Integration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Building intelligent agents, RAG pipelines, and prompt systems.</p>
            </div>
            
            <div className="space-y-4 group">
              <div className="w-14 h-14 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition-all duration-300">
                <FiCode className="w-6 h-6" />
              </div>
              <h3 className="text-white font-display font-medium text-xl">Full Stack</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">React, Flutter, Node.js, and scalable web architectures.</p>
            </div>

            <div className="space-y-4 group">
              <div className="w-14 h-14 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all duration-300">
                <FiTrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-white font-display font-medium text-xl">SEO Optimization</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Driving organic growth and maximizing search visibility.</p>
            </div>

            <div className="space-y-4 group">
              <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                <FiLayers className="w-6 h-6" />
              </div>
              <h3 className="text-white font-display font-medium text-xl">Automation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Streamlining operations with n8n and custom business logic.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
