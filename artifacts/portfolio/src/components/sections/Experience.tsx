import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 w-full container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 flex items-center">
          <span className="text-gradient">03.</span> <span className="ml-4 text-white">Experience</span>
          <div className="h-px bg-white/10 flex-grow ml-8 hidden md:block"></div>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

          {/* Timeline Item */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col md:flex-row items-center justify-between"
          >
            <div className="hidden md:flex w-1/2 justify-end pr-12">
              <div className="text-right">
                <h4 className="text-xl font-display font-bold text-white">SCUTS</h4>
                <p className="text-cyan-400 font-mono mt-1">Full Stack Developer Intern</p>
              </div>
            </div>
            
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-background -translate-x-1/2 md:translate-x-[-50%] z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>

            <div className="w-full md:w-1/2 pl-8 md:pl-12">
              <div className="md:hidden mb-4">
                <h4 className="text-xl font-display font-bold text-white">SCUTS</h4>
                <p className="text-cyan-400 font-mono mt-1">Full Stack Developer Intern</p>
              </div>
              
              <div className="bg-glass border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <ul className="space-y-3 text-muted-foreground relative z-10">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">▹</span>
                    <span>Built and optimized production-ready features for a salon booking platform.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">▹</span>
                    <span>Developed AI automation workflows using n8n and LLM-based agents.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">▹</span>
                    <span>Built scalable REST APIs using Node.js to support platform growth.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">▹</span>
                    <span>Implemented prompt engineering workflows for efficient AI content pipelines.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">▹</span>
                    <span>Improved SEO visibility through keyword optimization and metadata refinement.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
