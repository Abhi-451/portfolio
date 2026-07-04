import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiZap, FiLayout, FiSend, FiAward } from 'react-icons/fi';

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

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
      
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
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-2xl flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <span className="font-mono text-2xl font-bold text-zinc-600">{p.number}</span>
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

      {/* Large Typography Statement Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="p-10 sm:p-14 md:p-16 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.12] text-center relative overflow-hidden shadow-2xl"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          <FiAward className="w-8 h-8 text-white mx-auto mb-4 opacity-80" />
          <p className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-snug">
            &ldquo;Don&apos;t Tell Me What You Learned.{' '}
            <span className="text-gradient underline decoration-white/30 underline-offset-8">Show Me What You Shipped.</span>&rdquo;
          </p>
          <p className="text-sm sm:text-base font-mono text-zinc-500 pt-4 uppercase tracking-widest">
            // Relentless Focus on Production Execution
          </p>
        </div>
      </motion.div>

    </section>
  );
}
