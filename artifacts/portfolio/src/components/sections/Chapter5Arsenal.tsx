import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMonitor, FiServer, FiDatabase, FiCpu, FiTool, FiTerminal, FiZap, FiCheckCircle } from 'react-icons/fi';

const arsenalCategories = [
  {
    id: "ALL",
    name: "Full Arsenal",
    icon: <FiZap className="w-4 h-4" />
  },
  {
    id: "FRONTEND",
    name: "Frontend & Mobile",
    icon: <FiMonitor className="w-4 h-4 text-pink-400" />
  },
  {
    id: "BACKEND",
    name: "Backend Engines",
    icon: <FiServer className="w-4 h-4 text-cyan-400" />
  },
  {
    id: "DATABASE",
    name: "Data & Storage",
    icon: <FiDatabase className="w-4 h-4 text-purple-400" />
  },
  {
    id: "AI_AUTOMATION",
    name: "AI & Automation",
    icon: <FiCpu className="w-4 h-4 text-amber-400" />
  },
  {
    id: "TOOLS",
    name: "DevOps & Tools",
    icon: <FiTool className="w-4 h-4 text-emerald-400" />
  }
];

const techModules = [
  // Frontend
  { name: "Flutter", category: "FRONTEND", type: "Cross-Platform Mobile Framework", level: "95%", iconText: "FL", border: "border-pink-500/30", glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]" },
  { name: "Dart", category: "FRONTEND", type: "Client-Optimized Language", level: "90%", iconText: "DR", border: "border-pink-500/30", glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]" },
  { name: "HTML5 & CSS3", category: "FRONTEND", type: "Semantic Web & Styling Architecture", level: "98%", iconText: "HC", border: "border-pink-500/30", glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]" },
  { name: "JavaScript (ES6+)", category: "FRONTEND", type: "Core Interactive Scripting Engine", level: "96%", iconText: "JS", border: "border-pink-500/30", glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]" },
  
  // Backend
  { name: "Node.js", category: "BACKEND", type: "Event-Driven Runtime Architecture", level: "92%", iconText: "ND", border: "border-cyan-500/30", glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]" },
  { name: "REST APIs", category: "BACKEND", type: "Microservices & Endpoints Design", level: "95%", iconText: "RA", border: "border-cyan-500/30", glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]" },

  // Database
  { name: "PostgreSQL", category: "DATABASE", type: "Relational Database Modeling & SQL", level: "88%", iconText: "PG", border: "border-purple-500/30", glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]" },

  // AI & Automation
  { name: "AI Agents", category: "AI_AUTOMATION", type: "Autonomous Multi-Agent Orchestration", level: "94%", iconText: "AI", border: "border-amber-500/30", glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]" },
  { name: "Workflow Automation", category: "AI_AUTOMATION", type: "End-to-End Process Pipeline Leverage", level: "96%", iconText: "WA", border: "border-amber-500/30", glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]" },
  { name: "LLM Integrations", category: "AI_AUTOMATION", type: "OpenAI, Claude & Custom Prompt Pipelines", level: "92%", iconText: "LL", border: "border-amber-500/30", glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]" },
  { name: "n8n", category: "AI_AUTOMATION", type: "Self-Hosted Workflow Automation Engine", level: "95%", iconText: "N8", border: "border-amber-500/30", glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]" },

  // Tools
  { name: "Git & GitHub", category: "TOOLS", type: "Version Control & CI/CD Pipelines", level: "94%", iconText: "GH", border: "border-emerald-500/30", glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]" },
  { name: "Figma", category: "TOOLS", type: "UI/UX Prototyping & Design Systems", level: "90%", iconText: "FG", border: "border-emerald-500/30", glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]" },
  { name: "Vercel", category: "TOOLS", type: "Edge Deployment & Infrastructure", level: "96%", iconText: "VC", border: "border-emerald-500/30", glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]" }
];

export default function Chapter5Arsenal() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredModules = selectedCategory === "ALL" 
    ? techModules 
    : techModules.filter(m => m.category === selectedCategory);

  return (
    <section id="chapter-5" className="min-h-screen w-full py-28 px-6 md:px-12 relative z-10 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-18"
        >
          <div className="flex items-center gap-3 mb-4 font-mono text-cyan-400 text-sm tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span>CHAPTER 5</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight max-w-4xl">
            Technology <span className="text-gradient">Arsenal</span>.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            I don&apos;t treat languages as buzzwords; I treat them as specialized weaponry in an engineering arsenal. Each tool here has been battle-tested in real production environments and client deployments.
          </p>
        </motion.div>

        {/* HUD Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12 pb-6 border-b border-white/10">
          {arsenalCategories.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs md:text-sm transition-all duration-300 flex items-center gap-2.5 border backdrop-blur-md ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)] font-semibold'
                    : 'bg-white/[0.03] border-white/10 text-muted-foreground hover:text-white hover:border-white/30'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive HUD Arsenal Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredModules.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                key={item.name}
                className={`group rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border ${item.border} p-6 transition-all duration-300 ${item.glow} backdrop-blur-xl flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Background Corner HUD Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-3xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Tech Monogram Badge */}
                    <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/15 flex items-center justify-center font-mono font-extrabold text-lg text-white group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-inner">
                      {item.iconText}
                    </div>

                    {/* Status Pill */}
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] tracking-widest text-muted-foreground group-hover:text-cyan-300 transition-colors">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-bold text-white mb-1 group-hover:text-gradient transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs font-light text-muted-foreground font-mono leading-relaxed mb-6">
                    {item.type}
                  </p>
                </div>

                {/* Animated Proficiency Power Bar */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <FiTerminal className="w-3 h-3 text-cyan-400" />
                      <span>PROFICIENCY</span>
                    </span>
                    <span className="text-cyan-400 font-semibold">{item.level}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Terminal Execution Footer Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 p-6 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs text-muted-foreground flex items-center justify-between flex-wrap gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white">SYSTEM STATUS: ALL ARCHITECTURAL MODULES OPERATIONAL & READY FOR DEPLOYMENT.</span>
          </div>
          <span>// CONTINUOUSLY EVOLVING</span>
        </motion.div>

      </div>
    </section>
  );
}
