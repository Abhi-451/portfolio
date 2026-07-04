import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFeather, FiCode, FiBox, FiCpu, FiTrendingUp, FiCheckCircle, FiArrowRight, FiActivity } from 'react-icons/fi';

const experienceStages = [
  {
    id: "01",
    stage: "Designer",
    title: "UI/UX & Interactive Prototyping",
    icon: <FiFeather className="w-5 h-5 text-zinc-300" />,
    period: "Foundation",
    description: "My journey started in visual communication and UI/UX design. Before writing backend logic, I mastered wireframing, interactive prototyping, and design systems in Figma. This ensures every platform I engineer combines robust performance with intuitive, human-centric aesthetics.",
    skills: ["Figma Design Systems", "Interactive Prototyping", "User Research", "Visual Hierarchy", "Accessibility"],
    highlight: "Designed 30+ high-conversion user interfaces before transitioning into full stack software development."
  },
  {
    id: "02",
    stage: "Developer",
    title: "Full Stack Engineering & Database Architecture",
    icon: <FiCode className="w-5 h-5 text-zinc-300" />,
    period: "Core Competency",
    description: "Static designs required powerful engines. I immersed myself in modern React frontend development and server-side backend logic—mastering TypeScript, Node.js REST APIs, and relational database modeling with PostgreSQL.",
    skills: ["React & Next.js", "TypeScript", "Node.js & Express", "PostgreSQL & SQL Modeling", "Tailwind CSS"],
    highlight: "Engineered scalable web applications capable of handling complex relational queries and real-time state."
  },
  {
    id: "03",
    stage: "Builder",
    title: "End-to-End SaaS & Product Deployment",
    icon: <FiBox className="w-5 h-5 text-zinc-300" />,
    period: "Execution",
    description: "A developer writes syntax; a builder ships complete products. I stepped out of IDE silos to own entire product lifecycles—from cloud deployment infrastructure and CI/CD pipelines to domain DNS routing and user onboarding.",
    skills: ["Vercel Infrastructure", "CI/CD Deployment Pipelines", "DNS & Edge Caching", "Product Ownership", "Performance Optimization"],
    highlight: "Shipped and launched multi-sided marketplace platforms (Scuts & LocalFluence) to live public production."
  },
  {
    id: "04",
    stage: "Automation Engineer",
    title: "AI Workflows & n8n System Orchestration",
    icon: <FiCpu className="w-5 h-5 text-zinc-300" />,
    period: "Multiplication",
    description: "Integrating frontier LLM APIs and autonomous n8n workflow engines to create asymmetrical operational leverage. I transform complex multi-hour manual tasks into instantaneous, self-executing digital pipelines.",
    skills: ["n8n Workflow Automation", "LLM API Orchestration", "Autonomous AI Agents", "Custom System Prompts", "Webhook Integration"],
    highlight: "Architected autonomous 24/7 pipelines that continuously scrape, evaluate, and act on targeted market data."
  },
  {
    id: "05",
    stage: "Product Creator",
    title: "B2B SaaS Strategy & Client Leadership",
    icon: <FiTrendingUp className="w-5 h-5 text-zinc-300" />,
    period: "Current Focus",
    description: "The synthesis of my journey: combining UI/UX empathy, engineering rigor, and AI automation to generate tangible business ROI. Today, I turn raw product concepts into high-converting, revenue-generating digital businesses.",
    skills: ["Product Strategy", "Client Technical Leadership", "B2B SaaS Scaling", "Revenue Architecture", "Continuous Innovation"],
    highlight: "Delivered production-grade systems for paying clients (iTeachTrading) with verified 99.9% uptime and immediate business impact."
  }
];

export default function ExperienceSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="experience" className="py-28 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <span>01 / EXPERIENCE &amp; GROWTH</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight max-w-3xl">
          The Career <span className="text-gradient">Evolution</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
          Growth is an accelerating momentum. Each phase of my journey expanded my capability horizon—transforming a UI designer into an end-to-end full stack product builder.
        </p>
      </motion.div>

      {/* Editorial Timeline Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Interactive Stage Selectors with Momentum Physics */}
        <div className="lg:col-span-5 flex flex-col gap-3.5">
          {experienceStages.map((step, idx) => {
            const isActive = activeStage === idx;
            return (
              <motion.div
                key={step.id}
                onClick={() => setActiveStage(idx)}
                whileHover={{ x: 8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className={`cursor-pointer p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 relative overflow-hidden ${
                  isActive 
                    ? 'bg-white/[0.08] border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.08)]' 
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20 opacity-70 hover:opacity-100'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div 
                    layoutId="activeExperienceIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
                  />
                )}

                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  isActive ? 'bg-white text-black font-bold shadow-md scale-105' : 'bg-white/[0.05] text-zinc-400'
                }`}>
                  {step.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                      {step.period}
                    </span>
                    {isActive ? (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>ACTIVE</span>
                      </span>
                    ) : (
                      <span className="font-mono text-xs text-zinc-600">0{idx + 1}</span>
                    )}
                  </div>
                  <h4 className={`text-lg font-display font-semibold truncate ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {step.stage}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Editorial Stage Showcase with Dramatic Expansion */}
        <div className="lg:col-span-7 sticky top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 25, scale: 0.97, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, scale: 0.97, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 md:p-14 rounded-3xl bg-white/[0.03] border border-white/[0.1] backdrop-blur-3xl shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Top Ambient Light */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-6 uppercase tracking-widest">
                <span className="flex items-center gap-2 text-white/90">
                  <FiActivity className="text-emerald-400 animate-pulse" />
                  <span>PHASE {experienceStages[activeStage].id} // MOMENTUM VECTOR</span>
                </span>
                <span className="text-zinc-300 font-medium px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">{experienceStages[activeStage].period}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-5 leading-tight">
                {experienceStages[activeStage].title}
              </h3>

              <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
                {experienceStages[activeStage].description}
              </p>

              {/* Editorial Highlight Box with Physical Depth */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.1] mb-8 shadow-inner"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold block mb-1.5 flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-400" />
                  <span>Key Milestone Achievement</span>
                </span>
                <p className="font-sans font-light text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {experienceStages[activeStage].highlight}
                </p>
              </motion.div>

              {/* Skills Stack */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-3.5">
                  Core Capabilities &amp; Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {experienceStages[activeStage].skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: sIdx * 0.05 }}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300 text-xs font-medium hover:border-white/30 hover:bg-white/[0.1] transition-all shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom Next Step Link */}
              <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-500">
                <button 
                  onClick={() => setActiveStage((prev) => (prev + 1) % experienceStages.length)}
                  className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-medium group"
                >
                  <span>Explore Next Career Phase</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <span>{activeStage + 1} of {experienceStages.length}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
