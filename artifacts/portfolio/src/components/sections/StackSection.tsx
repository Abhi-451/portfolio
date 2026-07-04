import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiDatabase, FiCpu, FiCloud, FiCheckCircle, FiShare2, FiActivity } from 'react-icons/fi';

const stackCategories = [
  {
    id: "frontend",
    title: "Frontend Architecture & UI",
    icon: <FiLayout className="w-5 h-5 text-zinc-300" />,
    description: "Building ultra-responsive, highly accessible, and visually stunning web interfaces with modern React paradigms.",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Design Systems (Figma)", "Responsive UI/UX"],
    colSpan: "lg:col-span-6",
    connections: ["backend", "cloud"]
  },
  {
    id: "backend",
    title: "Backend & Serverless APIs",
    icon: <FiServer className="w-5 h-5 text-zinc-300" />,
    description: "Architecting high-concurrency server logic, clean RESTful APIs, and robust authentication pipelines.",
    skills: ["Node.js & Express", "TypeScript REST APIs", "Next.js Server Actions", "JWT Auth & Security", "Webhook Processing"],
    colSpan: "lg:col-span-6",
    connections: ["frontend", "database", "ai"]
  },
  {
    id: "ai",
    title: "AI Workflows & Automation",
    icon: <FiCpu className="w-5 h-5 text-zinc-300" />,
    description: "Orchestrating autonomous digital workers and integrating frontier LLMs to eliminate manual operational friction.",
    skills: ["n8n Workflow Engine", "OpenAI & Anthropic APIs", "Autonomous AI Agents", "Custom System Prompts", "Data Scraping & ETL"],
    colSpan: "lg:col-span-4",
    connections: ["backend", "database"]
  },
  {
    id: "database",
    title: "Database Modeling & Systems",
    icon: <FiDatabase className="w-5 h-5 text-zinc-300" />,
    description: "Designing reliable relational schemas, complex queries, and high-performance data persistence layers.",
    skills: ["PostgreSQL", "SQL Relational Modeling", "Prisma ORM / Drizzle", "Supabase", "Data Indexing"],
    colSpan: "lg:col-span-4",
    connections: ["backend", "ai"]
  },
  {
    id: "cloud",
    title: "Cloud DevOps & Edge Delivery",
    icon: <FiCloud className="w-5 h-5 text-zinc-300" />,
    description: "Deploying fault-tolerant web applications with global edge caching and automated CI/CD deployment pipelines.",
    skills: ["Vercel Infrastructure", "Git & GitHub CI/CD", "DNS & Domain Routing", "Edge Caching & CDN", "Performance Auditing"],
    colSpan: "lg:col-span-4",
    connections: ["frontend", "backend"]
  }
];

export default function StackSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="stack" className="py-28 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <span>04 / TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight max-w-3xl">
          Engineering <span className="text-gradient">Mastery</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
          A technology stack is only as valuable as the execution speed and reliability it provides. Hover over any engineering capability node to visualize live architectural data flow and system relationships.
        </p>
      </motion.div>

      {/* Interactive Ecosystem Hub Banner */}
      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-400">
        <div className="flex items-center gap-2 text-white">
          <FiShare2 className="text-emerald-400 animate-pulse" />
          <span>INTERACTIVE ECOSYSTEM MESH // CONNECTED ARCHITECTURE</span>
        </div>
        <span className="text-zinc-500">
          {activeNode ? `STREAMING TELEMETRY: [ ${activeNode.toUpperCase()} NODE ]` : 'HOVER ANY NODE TO VISUALIZE DATA STREAM'}
        </span>
      </div>

      {/* Interconnected Bento Nodes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        {stackCategories.map((cat, idx) => {
          const isHovered = activeNode === cat.id;
          const isConnected = activeNode && cat.connections.includes(activeNode);
          
          return (
            <motion.div
              key={cat.id}
              onMouseEnter={() => setActiveNode(cat.id)}
              onMouseLeave={() => setActiveNode(null)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`p-8 sm:p-10 rounded-3xl border transition-all duration-500 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden ${cat.colSpan} shadow-xl ${
                isHovered
                  ? 'bg-white/[0.08] border-white/45 shadow-[0_10px_40px_rgba(255,255,255,0.1)]'
                  : isConnected
                  ? 'bg-white/[0.05] border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.15)]'
                  : 'bg-white/[0.03] border-white/[0.08] hover:border-white/25 opacity-85 hover:opacity-100'
              }`}
            >
              {/* Connected Data Stream Shimmer */}
              {isConnected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent pointer-events-none"
                />
              )}

              <div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isHovered ? 'bg-white text-black font-bold scale-110 shadow-md' : isConnected ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-white/[0.06] border border-white/10 text-zinc-300'
                    }`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Node Status Tag */}
                  <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors ${
                    isHovered ? 'bg-white text-black font-bold' : isConnected ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-white/[0.05] text-zinc-500'
                  }`}>
                    {isHovered ? 'ACTIVE HUB' : isConnected ? 'LINKED STREAM' : 'STANDBY'}
                  </span>
                </div>

                <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed mb-8 relative z-10">
                  {cat.description}
                </p>
              </div>

              {/* Skills Pills */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap gap-2 relative z-10">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-medium transition-all ${
                      isHovered || isConnected
                        ? 'bg-white/[0.08] border-white/30 text-white shadow-sm'
                        : 'bg-white/[0.03] border-white/[0.06] text-zinc-300 hover:bg-white/[0.08]'
                    }`}
                  >
                    <FiCheckCircle className={`w-3 h-3 ${isHovered || isConnected ? 'text-emerald-400' : 'text-zinc-500'}`} />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
