import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "AI Automation Agent for Tech News & Code Review",
    description: "AI-powered news summarization, Telegram delivery system, and automated code review workflow. Built with n8n and LLMs.",
    tags: ["n8n", "LLMs", "Telegram API", "Automation"]
  },
  {
    title: "AI Document Query System — RAG Pipeline",
    description: "Semantic search and vector indexing system providing conversational AI with context-aware responses from internal documents.",
    tags: ["RAG", "Vector DB", "Semantic Search", "OpenAI"]
  },
  {
    title: "Luxury Shopping Application (Luxtry)",
    description: "Complete e-commerce platform featuring JWT authentication, cart management, secure checkout, and a highly responsive premium UI.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT"]
  },
  {
    title: "AI-Driven SEO Optimization — SCUTS",
    description: "Data-driven approach to keyword analysis, metadata optimization, resulting in significant organic traffic improvements.",
    tags: ["SEO", "Data Analysis", "Python", "Automation"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 w-full container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 flex items-center justify-end">
          <div className="h-px bg-white/10 flex-grow mr-8 hidden md:block"></div>
          <span className="text-white mr-4">Featured Work</span> <span className="text-gradient">.04</span>
        </h2>

        {/* HERO PROJECT: LocalFlunce */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative  mb-24 group"
        >
          {/* Animated Border Glow */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400  opacity-50 blur-sm group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          
          <div className="relative bg-background  p-1 overflow-hidden h-full">
            <div className="  h-full flex flex-col lg:flex-row  relative z-10">
              
              {/* Project Image/Visual placeholder */}
              <div className="lg:w-1/2 min-h-[300px] bg-black/40 relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/40 via-background to-background"></div>
                <div className="text-center z-10 p-8">
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-400 mb-4">
                    LocalFlunce
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-mono rounded-full border border-cyan-500/30">Production Ready</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-mono rounded-full border border-purple-500/30">Deployed on Vercel</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-mono rounded-full border border-cyan-500/30">Real World Project</span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-white mb-4">Influencer Discovery Platform</h4>
                
                <div className="bg-white/5  rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    LocalFlunce is a real-world influencer discovery platform that connects startup founders with local influencers. The platform acts as a bridge between businesses and creators, helping founders find suitable influencers for promotions and collaborations.
                  </p>
                </div>

                <div className="mb-8">
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Key Features</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-cyan-200/80">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Influencer Search</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Founder Dashboard</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Collaboration System</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Secure Authentication</li>
                  </ul>
                </div>

                <div className="flex gap-4 mt-auto">
                  <a href="https://local-lance-api-server-uojw.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors">
                    View Live <FiExternalLink />
                  </a>
                  <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors ">
                    Source <FiGithub />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="   p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:bg-cyan-500/20 transition-colors">
                  <FiGithub className="w-6 h-6" />
                </div>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <FiExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-cyan-400/80">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
