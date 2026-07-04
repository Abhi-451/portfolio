import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiDatabase, FiCpu, FiCloud, FiCheckCircle } from 'react-icons/fi';

const stackCategories = [
  {
    title: "Frontend Architecture & UI",
    icon: <FiLayout className="w-5 h-5 text-zinc-300" />,
    description: "Building ultra-responsive, highly accessible, and visually stunning web interfaces with modern React paradigms.",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Design Systems (Figma)", "Responsive UI/UX"],
    colSpan: "lg:col-span-6"
  },
  {
    title: "Backend & Serverless APIs",
    icon: <FiServer className="w-5 h-5 text-zinc-300" />,
    description: "Architecting high-concurrency server logic, clean RESTful APIs, and robust authentication pipelines.",
    skills: ["Node.js & Express", "TypeScript REST APIs", "Next.js Server Actions", "JWT Auth & Security", "Webhook Processing"],
    colSpan: "lg:col-span-6"
  },
  {
    title: "AI Workflows & Automation",
    icon: <FiCpu className="w-5 h-5 text-zinc-300" />,
    description: "Orchestrating autonomous digital workers and integrating frontier LLMs to eliminate manual operational friction.",
    skills: ["n8n Workflow Engine", "OpenAI & Anthropic APIs", "Autonomous AI Agents", "Custom System Prompts", "Data Scraping & ETL"],
    colSpan: "lg:col-span-4"
  },
  {
    title: "Database Modeling & Systems",
    icon: <FiDatabase className="w-5 h-5 text-zinc-300" />,
    description: "Designing reliable relational schemas, complex queries, and high-performance data persistence layers.",
    skills: ["PostgreSQL", "SQL Relational Modeling", "Prisma ORM / Drizzle", "Supabase", "Data Indexing"],
    colSpan: "lg:col-span-4"
  },
  {
    title: "Cloud DevOps & Edge Delivery",
    icon: <FiCloud className="w-5 h-5 text-zinc-300" />,
    description: "Deploying fault-tolerant web applications with global edge caching and automated CI/CD deployment pipelines.",
    skills: ["Vercel Infrastructure", "Git & GitHub CI/CD", "DNS & Domain Routing", "Edge Caching & CDN", "Performance Auditing"],
    colSpan: "lg:col-span-4"
  }
];

export default function StackSection() {
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
          A technology stack is only as valuable as the execution speed and reliability it provides. Here are the core tools, frameworks, and architectural principles I use to build production-grade software.
        </p>
      </motion.div>

      {/* Minimalist Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {stackCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className={`p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-2xl flex flex-col justify-between ${cat.colSpan} shadow-xl`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {cat.title}
                </h3>
              </div>

              <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed mb-8">
                {cat.description}
              </p>
            </div>

            {/* Skills Pills */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-300 text-xs font-medium hover:bg-white/[0.08] transition-colors"
                >
                  <FiCheckCircle className="w-3 h-3 text-zinc-400" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
