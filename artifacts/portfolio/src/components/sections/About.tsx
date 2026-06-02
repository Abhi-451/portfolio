import React from 'react';
import { motion } from 'framer-motion';

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
          <span className="text-gradient">01.</span> <span className="ml-4 text-white">About System</span>
          <div className="h-px bg-white/10 flex-grow ml-8 hidden md:block"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
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

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-none border border-white/10 bg-glass p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="font-mono text-sm text-cyan-300 mb-4 border-b border-white/10 pb-2">
                system_specs.json
              </div>
              
              <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
                <code className="text-green-400">"status"</code>: <code className="text-yellow-300">"Operational"</code>,<br/>
                <code className="text-green-400">"focus"</code>: <code className="text-yellow-300">"AI Integration"</code>,<br/>
                <code className="text-green-400">"core_competencies"</code>: [<br/>
                &nbsp;&nbsp;<code className="text-yellow-300">"AI Engineering"</code>,<br/>
                &nbsp;&nbsp;<code className="text-yellow-300">"Prompt Engineering"</code>,<br/>
                &nbsp;&nbsp;<code className="text-yellow-300">"RAG Pipelines"</code>,<br/>
                &nbsp;&nbsp;<code className="text-yellow-300">"Full Stack Dev"</code>,<br/>
                &nbsp;&nbsp;<code className="text-yellow-300">"Workflow Automation"</code><br/>
                ],<br/>
                <code className="text-green-400">"current_mission"</code>: <code className="text-yellow-300">"Building intelligent systems"</code>
              </pre>
              
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-cyan-500/50 m-4"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-cyan-500/50 m-4"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
