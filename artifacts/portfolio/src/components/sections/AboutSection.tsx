import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiZap, FiLayout, FiSend, FiAward, FiGlobe, FiCloud, FiUsers, FiRadio } from 'react-icons/fi';

const principles = [
  {
    number: "01",
    title: "Technology Must Solve Business Problems",
    description: "Code is not an art piece meant to be admired in isolation; it is a tool for economic leverage. If a platform doesn't reduce operational costs, save human time, or generate sustainable revenue, it is just expensive syntax.",
    icon: <FiTrendingUp className="w-5 h-5 text-zinc-300" />
  },
  {
    number: "02",
    title: "Automation Creates Asymmetrical Leverage",
    description: "Why spend 10 hours a week on repetitive data entry or lead outreach when an AI workflow or webhook pipeline can execute it in 400 milliseconds? True scalability comes from automating the mundane so humans can focus on strategy.",
    icon: <FiZap className="w-5 h-5 text-zinc-300" />
  },
  {
    number: "03",
    title: "Products Must Be Beautiful & Useful",
    description: "Functionality attracts initial users; aesthetic precision builds lasting brand trust. A product that works reliably but feels clumsy will always lose to a platform that combines robust backend performance with an immaculate interface.",
    icon: <FiLayout className="w-5 h-5 text-zinc-300" />
  },
  {
    number: "04",
    title: "Shipping Matters More Than Certificates",
    description: "The market doesn't care how many tutorials or online courses you've completed. It cares what you have deployed to live production, what real user friction you have solved, and how reliably your systems perform under traffic.",
    icon: <FiSend className="w-5 h-5 text-zinc-300" />
  }
];

const futureAmbitions = [
  {
    title: "Architect Autonomous AI Workforce Systems",
    desc: "Deploying multi-agent orchestration engines that continuously handle end-to-end customer support, data enrichment, and sales pipelines.",
    icon: <FiCloud className="text-emerald-400 w-5 h-5" />
  },
  {
    title: "Scale Self-Sustaining B2B Micro-SaaS Platforms",
    desc: "Building specialized software ecosystems that solve hyper-specific workflow bottlenecks, generating predictable recurring value.",
    icon: <FiGlobe className="text-indigo-300 w-5 h-5" />
  },
  {
    title: "Impact Tens of Thousands of Daily Active Users",
    desc: "Expanding infrastructure from local server deployments to high-concurrency global Edge CDN architectures.",
    icon: <FiUsers className="text-zinc-300 w-5 h-5" />
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10 overflow-hidden">
      
      {/* Expanding Ecosystem Animated Background Waves */}
      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.08, 0.22, 0.08] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-white/[0.06] via-zinc-500/[0.08] to-transparent rounded-full blur-[160px] pointer-events-none -z-10"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <span>05 / PHILOSOPHY &amp; ETHOS</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight max-w-3xl">
          The Builder <span className="text-gradient">Mindset</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
          What separates a standard developer from a true product creator isn&apos;t just syntax—it is philosophy. Here are the core beliefs that govern every system I architect and every application I ship.
        </p>
      </motion.div>

      {/* Principles Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {principles.map((p, idx) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: idx * 0.12, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-white/25 transition-all duration-300 backdrop-blur-2xl flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <span className="font-mono text-2xl font-bold text-zinc-600 group-hover:text-zinc-400 transition-colors">{p.number}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4">
                {p.title}
              </h3>

              <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Large Typography Statement Banner with Scroll-Scaling Physics */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="p-10 sm:p-14 md:p-16 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.12] text-center relative overflow-hidden shadow-2xl mb-24"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          <FiAward className="w-8 h-8 text-white mx-auto mb-4 opacity-80" />
          <p className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-snug">
            &ldquo;Don&apos;t Tell Me What You Learned.{' '}
            <span className="text-gradient underline decoration-white/30 underline-offset-8">Show Me What You Shipped.</span>&rdquo;
          </p>
          <p className="text-sm sm:text-base font-mono text-zinc-500 pt-4 uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>// Relentless Focus on Production Execution</span>
          </p>
        </div>
      </motion.div>

      {/* Future Vision & Ambitious Horizon Section */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="pt-12 border-t border-white/[0.08]"
      >
        <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
          <FiRadio className="animate-spin" />
          <span>06 / FORWARD HORIZON &amp; EXPANDING SCALE</span>
        </div>
        <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-6">
          Ambitions Instead of <span className="text-gradient">Achievements</span>.
        </h3>
        <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed mb-10">
          The past is proof of capability; the future is where true scale lives. While I am proud of the applications shipped and systems deployed, my eyes are fixed firmly on expanding digital leverage.
        </p>

        {/* Expanding Horizon Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futureAmbitions.map((amb, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6">
                {amb.icon}
              </div>
              <div>
                <h4 className="text-lg font-display font-bold text-white mb-2">{amb.title}</h4>
                <p className="text-sm font-light text-zinc-400 leading-relaxed">{amb.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
