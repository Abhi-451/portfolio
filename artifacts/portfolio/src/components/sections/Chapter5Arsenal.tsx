import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiDatabase, FiLayout, FiServer, FiTool, FiCheckCircle, FiActivity, FiZap, FiArrowRight } from 'react-icons/fi';

const ecosystemNodes = [
  { id: 'frontend', title: 'Frontend Edge UI', icon: <FiLayout className="w-5 h-5 text-pink-400" />, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], color: 'from-pink-500/20 border-pink-500/40 text-pink-300', x: '10%', y: '20%' },
  { id: 'backend', title: 'Serverless & APIs', icon: <FiServer className="w-5 h-5 text-purple-400" />, skills: ['Node.js', 'Express', 'REST APIs', 'Webhooks', 'Auth Pipelines'], color: 'from-purple-500/20 border-purple-500/40 text-purple-300', x: '55%', y: '15%' },
  { id: 'database', title: 'Relational Data', icon: <FiDatabase className="w-5 h-5 text-cyan-400" />, skills: ['PostgreSQL', 'Supabase', 'Prisma ORM', 'SQL Modeling', 'Redis Cache'], color: 'from-cyan-500/20 border-cyan-500/40 text-cyan-300', x: '15%', y: '70%' },
  { id: 'ai', title: 'AI & Automation Hub', icon: <FiCpu className="w-5 h-5 text-amber-400" />, skills: ['n8n Workflows', 'LLM Agents', 'OpenAI API', 'Python Scrapers', 'Telegram Bots'], color: 'from-amber-500/20 border-amber-500/40 text-amber-300', x: '60%', y: '65%' },
];

const arsenalCategories = [
  {
    id: "frontend",
    title: "Frontend Architecture & UI Systems",
    icon: <FiLayout className="w-5 h-5 text-pink-400" />,
    description: "Creating ultra-responsive, accessible, and buttery-smooth user interfaces that feel alive.",
    skills: [
      { name: "React & Next.js Ecosystem", level: 95, details: "Server components, routing, dynamic rendering" },
      { name: "TypeScript / JavaScript (ES6+)", level: 90, details: "Strict type safety, generic interfaces, clean syntax" },
      { name: "Tailwind CSS & Modern Styling", level: 95, details: "Utility-first design systems, responsive layouts" },
      { name: "Framer Motion & Micro-Interactions", level: 90, details: "Physics-based animation, gesture animations" }
    ]
  },
  {
    id: "backend",
    title: "Backend Engineering & API Design",
    icon: <FiServer className="w-5 h-5 text-purple-400" />,
    description: "Architecting reliable, high-throughput server logic and secure API communication layers.",
    skills: [
      { name: "Node.js & Runtime Environments", level: 88, details: "Asynchronous event loops, RESTful microservices" },
      { name: "API Architecture & Webhooks", level: 92, details: "Payload validation, real-time event triggers" },
      { name: "Authentication & Security", level: 85, details: "JWT, OAuth2, session management, CORS" },
      { name: "Serverless & Edge Compute", level: 85, details: "Vercel edge functions, lightweight execution" }
    ]
  },
  {
    id: "database",
    title: "Database Modeling & Data Persistence",
    icon: <FiDatabase className="w-5 h-5 text-cyan-400" />,
    description: "Designing relational schemas that scale without querying bottlenecks or data corruption.",
    skills: [
      { name: "PostgreSQL & Relational SQL", level: 88, details: "Complex joins, indexing, ACID compliance" },
      { name: "Supabase & Backend-as-a-Service", level: 90, details: "Row-level security, real-time subscriptions" },
      { name: "Prisma & Modern ORMs", level: 85, details: "Type-safe database queries and migrations" },
      { name: "Data Structure & Caching Strategy", level: 82, details: "Redis caching principles, memory efficiency" }
    ]
  },
  {
    id: "ai-automation",
    title: "AI Agents & Workflow Automation",
    icon: <FiCpu className="w-5 h-5 text-amber-400" />,
    description: "The modern multiplier: orchestrating autonomous digital workers and self-executing pipelines.",
    skills: [
      { name: "n8n Workflow Automation", level: 95, details: "Complex multi-node webhook and API pipelines" },
      { name: "Autonomous AI Agents & LLM APIs", level: 90, details: "OpenAI, Claude, custom system prompt design" },
      { name: "Python Scrapers & Data Extraction", level: 85, details: "BeautifulSoup, automated web interaction" },
      { name: "Automated Push Notification Systems", level: 92, details: "Telegram bots, automated CRM lead routing" }
    ]
  },
  {
    id: "devops",
    title: "DevOps, Cloud & Tooling Ecosystem",
    icon: <FiTool className="w-5 h-5 text-emerald-400" />,
    description: "Ensuring code transitions seamlessly from local IDEs to fault-tolerant production servers.",
    skills: [
      { name: "Vercel & CI/CD Pipelines", level: 92, details: "Automated preview deployments and DNS routing" },
      { name: "Git & Collaborative Version Control", level: 90, details: "Branching strategies, clean pull request workflows" },
      { name: "Linux CLI & Server Management", level: 80, details: "Bash scripting, environment variable security" },
      { name: "Lighthouse & Performance Tuning", level: 88, details: "Core Web Vitals optimization, bundle reduction" }
    ]
  }
];

export default function Chapter5Arsenal() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeNode, setActiveNode] = useState('all');

  return (
    <section id="chapter-5" className="min-h-screen w-full py-28 px-6 md:px-12 relative z-10 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4 font-mono text-cyan-400 text-sm tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span>CHAPTER 5</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight max-w-4xl">
            The Technology <span className="text-gradient">Ecosystem</span>.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            I do not treat technologies as isolated static logos. I build connected ecosystems where frontend interfaces, backend APIs, relational databases, and autonomous AI agents continuously communicate in unison.
          </p>
        </motion.div>

        {/* Floating Connected Technology Ecosystem Visualizer */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-black/80 to-white/[0.02] border border-white/15 relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <FiActivity className="animate-pulse" />
              <span>INTERACTIVE CONNECTED ECOSYSTEM MAP</span>
            </div>
            <span>CLICK NODES TO HIGHLIGHT DATA STREAMS</span>
          </div>

          {/* Connected Ecosystem Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {ecosystemNodes.map((node, nIdx) => {
              const isSelected = activeNode === node.id || activeNode === 'all';
              return (
                <motion.div
                  key={node.id}
                  onClick={() => setActiveNode(activeNode === node.id ? 'all' : node.id)}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className={`cursor-pointer p-6 rounded-2xl bg-gradient-to-br ${node.color} bg-black/60 border backdrop-blur-md transition-all relative overflow-hidden shadow-lg ${
                    isSelected ? 'opacity-100 shadow-[0_0_25px_rgba(6,182,212,0.2)]' : 'opacity-40 grayscale hover:grayscale-0'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      {node.icon}
                    </div>
                    <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      NODE 0{nIdx + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-bold text-white mb-3 flex items-center justify-between">
                    <span>{node.title}</span>
                    <FiZap className="text-amber-400 w-4 h-4 animate-pulse" />
                  </h4>

                  <div className="flex flex-wrap gap-1.5">
                    {node.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/90 border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Animated Connecting Data Stream Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2 text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>DATA FLOW // FRONTEND &lt;---&gt; API &lt;---&gt; POSTGRES &lt;---&gt; n8n AGENTS</span>
            </div>
            <button 
              onClick={() => setActiveNode('all')}
              className="text-cyan-400 hover:text-white transition-colors underline underline-offset-4"
            >
              Reset Ecosystem View
            </button>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-white/10 overflow-x-auto">
          {arsenalCategories.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-2xl font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-3.5 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400 text-cyan-300 font-bold shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                    : 'bg-white/[0.03] border border-white/5 text-muted-foreground hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat.icon}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Mastery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {arsenalCategories[activeTab].skills.map((skill, sIdx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: sIdx * 0.08 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all backdrop-blur-xl group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <FiCheckCircle className="text-cyan-400 w-4 h-4 shrink-0" />
                    <h4 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-sm font-light text-muted-foreground mb-4 font-sans">
                  {skill.details}
                </p>

                {/* Animated Proficiency Power Bar */}
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
