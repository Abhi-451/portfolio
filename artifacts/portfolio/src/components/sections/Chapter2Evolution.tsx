import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFeather, FiCode, FiBox, FiCpu, FiTrendingUp, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const timelineSteps = [
  {
    id: "01",
    stage: "Designer",
    title: "Designing for Human Empathy & Impact",
    icon: <FiFeather className="w-6 h-6 text-pink-400" />,
    color: "from-pink-500 to-rose-500",
    description: "My roots began in visual communication and UI/UX architecture. Before writing syntax, I mastered wireframing, color psychology, and intuitive interface design. This ensures every product I build feels premium, effortless, and human-centric.",
    skills: ["Figma Systems", "Interactive Prototyping", "User Research", "Visual Hierarchy", "Design Systems"],
    achievement: "Architected 30+ high-conversion UI prototypes before writing a single line of backend logic."
  },
  {
    id: "02",
    stage: "Developer",
    title: "Mastering Full Stack Engineering",
    icon: <FiCode className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500 to-indigo-500",
    description: "Static designs needed breathing engines. I immersed myself in frontend responsiveness and server-side backend logic—mastering React, TypeScript, Node.js, and relational database modeling with PostgreSQL.",
    skills: ["React & Next.js", "TypeScript", "Node.js & REST APIs", "PostgreSQL", "Framer Motion"],
    achievement: "Transitioned from static mockups to full-stack architectures capable of handling complex relational data."
  },
  {
    id: "03",
    stage: "Builder",
    title: "Shipping Complete SaaS Ecosystems",
    icon: <FiBox className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500 to-blue-500",
    description: "A developer writes code; a builder ships products. I stepped out of IDE silos to manage end-to-end product lifecycles—from cloud deployments on Vercel to domain DNS configurations, CDN caching, and user onboarding pipelines.",
    skills: ["End-to-End Execution", "Vercel CI/CD", "Cloud Infrastructure", "System Architecture", "Performance Tuning"],
    achievement: "Shipped and launched multi-sided marketplace platforms (Scuts & LocalFluence) to live public production."
  },
  {
    id: "04",
    stage: "Automation Engineer",
    title: "Creating Asymmetrical AI Leverage",
    icon: <FiCpu className="w-6 h-6 text-amber-400" />,
    color: "from-amber-500 to-orange-500",
    description: "The modern paradigm shift: integrating autonomous AI agents, LLM pipelines, and n8n workflow engines. I transform multi-hour manual business processes into instantaneous, self-executing digital workflows.",
    skills: ["AI Autonomous Agents", "n8n Workflow Engine", "LLM API Integrations", "Custom Prompt Architecture", "Webhook Pipelines"],
    achievement: "Engineered autonomous 24/7 workflows that automatically scrape, evaluate, and act on career and client opportunities."
  },
  {
    id: "05",
    stage: "Product Creator",
    title: "Architecting Businesses & Revenue",
    icon: <FiTrendingUp className="w-6 h-6 text-emerald-400" />,
    color: "from-emerald-500 to-teal-500",
    description: "The apex of my journey: combining design empathy, engineering rigor, and AI automation to create real business value. Today, I turn raw concepts into revenue-generating platforms that solve undeniable market friction.",
    skills: ["Product Strategy", "B2B SaaS Scaling", "Client Leadership", "Revenue Architecture", "Continuous Innovation"],
    achievement: "Delivered production-grade systems for paying clients (iTeachTrading) with verified 99.9% uptime and immediate business ROI."
  }
];

export default function Chapter2Evolution() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="chapter-2" className="min-h-screen w-full py-28 px-6 md:px-12 relative z-10 flex flex-col justify-center bg-black/40">
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
            <span>CHAPTER 2</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight max-w-4xl">
            The <span className="text-gradient">Evolution</span> Timeline.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            Growth is an accelerating momentum. Each stage of my evolution expanded my capability horizon—transforming a curious designer into a full-stack product creator powered by AI automation.
          </p>
        </motion.div>

        {/* Interactive Momentum Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Animated Timeline Momentum Steps */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 relative">
            {/* Vertical Glowing Connecting Bar */}
            <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-white/10 -z-10 hidden sm:block" />

            {timelineSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`cursor-pointer p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 relative backdrop-blur-md ${
                    isActive 
                      ? 'bg-gradient-to-r from-white/20 to-white/5 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.25)]' 
                      : 'bg-white/[0.03] border-white/5 hover:border-white/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Active Indicator Pulse Dot */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? 'bg-cyan-400 text-black font-extrabold shadow-lg scale-110' : 'bg-white/10 text-white'
                  }`}>
                    {step.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                        STAGE // {step.id}
                      </span>
                      {isActive && <FiCheckCircle className="text-cyan-400 w-4 h-4 animate-pulse" />}
                    </div>
                    <h4 className={`text-lg font-display font-bold truncate transition-colors ${isActive ? 'text-white' : 'text-white/80'}`}>
                      {step.stage}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Active Stage Cinematic Expansion Spotlight */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 25, scale: 0.95, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -25, scale: 0.95, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className={`absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br ${timelineSteps[activeStep].color} rounded-full blur-[110px] opacity-25 pointer-events-none`} />

                <div className="flex items-center justify-between font-mono text-xs text-muted-foreground mb-6 uppercase tracking-widest">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    STAGE {timelineSteps[activeStep].id} // 05
                  </span>
                  <span className="text-cyan-300 font-bold">{timelineSteps[activeStep].stage}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
                  {timelineSteps[activeStep].title}
                </h3>

                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  {timelineSteps[activeStep].description}
                </p>

                {/* Highlight Achievement Box */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 font-mono text-sm mb-8 flex items-start gap-3.5 shadow-inner"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0 animate-pulse mt-1" />
                  <div>
                    <strong className="text-cyan-400 block mb-1 uppercase text-xs tracking-wider">// KEY MOMENTUM ACHIEVEMENT</strong>
                    <span className="font-sans font-light text-base text-white/90">{timelineSteps[activeStep].achievement}</span>
                  </div>
                </motion.div>

                {/* Skills Stack */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                    // Capabilities Acquired At This Stage
                  </h5>
                  <div className="flex flex-wrap gap-2.5">
                    {timelineSteps[activeStep].skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/90 text-sm font-medium hover:bg-white/15 hover:border-white/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Step Progress Footer */}
                <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <button 
                    onClick={() => setActiveStep((prev) => (prev + 1) % timelineSteps.length)}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
                  >
                    <span>NEXT STAGE MOMENTUM</span>
                    <FiArrowRight />
                  </button>
                  <span>STAGE {activeStep + 1} OF {timelineSteps.length}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
