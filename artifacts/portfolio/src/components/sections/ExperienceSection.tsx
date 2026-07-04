import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFeather, FiCode, FiBox, FiCpu, FiTrendingUp, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

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
        
        {/* Left Column: Stage Selectors */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {experienceStages.map((step, idx) => {
            const isActive = activeStage === idx;
            return (
              <motion.div
                key={step.id}
                onClick={() => setActiveStage(idx)}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  isActive 
                    ? 'bg-white/[0.08] border-white/30 shadow-lg' 
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/15 opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  isActive ? 'bg-white text-black font-bold shadow-md' : 'bg-white/[0.05] text-zinc-400'
                }`}>
                  {step.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                      {step.period}
                    </span>
                    {isActive && <FiCheckCircle className="text-white w-3.5 h-3.5" />}
                  </div>
                  <h4 className={`text-base sm:text-lg font-display font-semibold truncate ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {step.stage}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Editorial Stage Showcase */}
        <div className="lg:col-span-7 sticky top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-6 uppercase tracking-widest">
                <span>PHASE {experienceStages[activeStage].id} / 05</span>
                <span className="text-zinc-300 font-medium">{experienceStages[activeStage].period}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-5 leading-tight">
                {experienceStages[activeStage].title}
              </h3>

              <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
                {experienceStages[activeStage].description}
              </p>

              {/* Editorial Highlight Box */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-8">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold block mb-1">
                  Key Milestone Achievement
                </span>
                <p className="font-sans font-light text-sm sm:text-base text-zinc-300">
                  {experienceStages[activeStage].highlight}
                </p>
              </div>

              {/* Skills Stack */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-3">
                  Core Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {experienceStages[activeStage].skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300 text-xs font-medium hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Next Step Link */}
              <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-500">
                <button 
                  onClick={() => setActiveStage((prev) => (prev + 1) % experienceStages.length)}
                  className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-medium"
                >
                  <span>Explore Next Career Phase</span>
                  <FiArrowRight />
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
