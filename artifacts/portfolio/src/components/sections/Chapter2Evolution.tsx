import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFeather, FiMonitor, FiServer, FiCloud, FiZap, FiBox, FiCheckCircle } from 'react-icons/fi';

const timelineSteps = [
  {
    id: "01",
    stage: "UI/UX Design",
    title: "Designing for Impact & Empathy",
    icon: <FiFeather className="w-6 h-6 text-pink-400" />,
    color: "from-pink-500 to-rose-500",
    description: "My journey started with Figma and wireframes. I obsessed over color psychology, typography hierarchy, and user flows. This foundation ensures that every application I build today doesn't just function flawlessly—it feels intuitive and premium.",
    skills: ["Figma", "Wireframing", "User Research", "Design Systems", "Interactive Prototyping"],
    highlight: "Started as a UI/UX designer focusing on human empathy."
  },
  {
    id: "02",
    stage: "Frontend Development",
    title: "Bringing Interfaces to Life",
    icon: <FiMonitor className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500 to-indigo-500",
    description: "Static mockups weren't enough. I learned modern HTML, CSS, JavaScript, and React to turn my designs into living, breathing web applications with 60fps animations and responsive layouts across all screen sizes.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Layouts"],
    highlight: "Transitioned into interactive frontend architecture."
  },
  {
    id: "03",
    stage: "Backend Development",
    title: "Architecting the Core Engine",
    icon: <FiServer className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500 to-blue-500",
    description: "To build true software, I dove deep into server-side programming. I mastered Node.js, REST APIs, and PostgreSQL database modeling—enabling secure authentication, high-performance data queries, and scalable business logic.",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Authentication", "Data Modeling"],
    highlight: "Learned to build complete products from frontend to backend."
  },
  {
    id: "04",
    stage: "Deployment & DevOps",
    title: "Shipping to Production",
    icon: <FiCloud className="w-6 h-6 text-teal-400" />,
    color: "from-teal-500 to-emerald-500",
    description: "A great app on localhost is useless. I learned Git workflows, automated CI/CD pipelines, and serverless deployments on platforms like Vercel, ensuring zero-downtime releases and global CDN distribution.",
    skills: ["Git & GitHub", "Vercel CI/CD", "Environment Configs", "Production Monitoring", "Domain DNS"],
    highlight: "Mastered end-to-end production deployment pipelines."
  },
  {
    id: "05",
    stage: "AI & Automation",
    title: "Creating Intelligent Leverage",
    icon: <FiZap className="w-6 h-6 text-amber-400" />,
    color: "from-amber-500 to-orange-500",
    description: "The modern frontier: integrating Large Language Models (LLMs), AI autonomous agents, and workflow engines like n8n. I automate complex business operations, turning multi-hour manual workflows into instant AI-executed processes.",
    skills: ["AI Agents", "LLM Integrations", "n8n Workflows", "Automated Pipelines", "Prompt Engineering"],
    highlight: "Focused on solving real-world business problems with AI leverage."
  },
  {
    id: "06",
    stage: "Product Building",
    title: "The Holistic Builder Mindset",
    icon: <FiBox className="w-6 h-6 text-red-400" />,
    color: "from-red-500 to-pink-500",
    description: "Today, all these skills converge into one title: Product Builder. I don't just write code; I look at market needs, architect scalable solutions, launch live platforms, and iterate based on real user feedback.",
    skills: ["Product Strategy", "End-to-End Execution", "Client Collaboration", "SaaS Architecture", "Revenue Focus"],
    highlight: "Evolved into a full-stack product developer who ships and delivers."
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
            From Designer to <span className="text-gradient">Full Stack Developer</span>.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            Growth isn&apos;t linear—it is cumulative. Every layer of technology I learned built upon the last, transforming a visual designer into a complete product architect capable of executing from wireframe to AI automation.
          </p>
        </motion.div>

        {/* Interactive Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Timeline Navigation List */}
          <div className="lg:col-span-5 flex flex-col gap-3 relative">
            {/* Vertical Glowing Connecting Line */}
            <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-white/10 -z-10 hidden sm:block" />

            {timelineSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ x: 6 }}
                  className={`cursor-pointer p-4 md:p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 relative backdrop-blur-md ${
                    isActive 
                      ? 'bg-gradient-to-r from-white/15 to-white/5 border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.15)]' 
                      : 'bg-white/[0.03] border-white/5 hover:border-white/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Active Indicator Dot */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-cyan-500 text-black font-bold shadow-lg' : 'bg-white/10 text-white'
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

          {/* Right Column: Active Stage Spotlight Display */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-transparent border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className={`absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br ${timelineSteps[activeStep].color} rounded-full blur-[100px] opacity-20 pointer-events-none`} />

                <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground mb-6 uppercase tracking-widest">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white">
                    STAGE {timelineSteps[activeStep].id} // 06
                  </span>
                  <span>{timelineSteps[activeStep].stage}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
                  {timelineSteps[activeStep].title}
                </h3>

                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  {timelineSteps[activeStep].description}
                </p>

                {/* Highlight Badge */}
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-sm mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 animate-ping" />
                  <span><strong>Key Milestone:</strong> {timelineSteps[activeStep].highlight}</span>
                </div>

                {/* Skills Stack */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                    // Technologies & Capabilities Acquired
                  </h5>
                  <div className="flex flex-wrap gap-2.5">
                    {timelineSteps[activeStep].skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/90 text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Step Progress Indicator */}
                <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>CLICK ANY STAGE ON THE LEFT TO EXPLORE</span>
                  <span>{activeStep + 1} of {timelineSteps.length}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
