import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiZap, FiLayout, FiRefreshCw, FiSend } from 'react-icons/fi';

const coreBeliefs = [
  {
    number: "01",
    title: "Technology Should Solve Business Problems",
    description: "Code is not an art piece meant to be admired in isolation; it is a tool for economic leverage. If an application doesn't reduce costs, save time, or generate revenue, it is just expensive syntax.",
    icon: <FiTrendingUp className="w-6 h-6 text-cyan-400" />
  },
  {
    number: "02",
    title: "Automation Creates Asymmetrical Leverage",
    description: "Why spend 10 hours a week on repetitive tasks when an AI workflow or webhook pipeline can execute it in 400 milliseconds? True scalability comes from automating the mundane so humans can focus on strategy.",
    icon: <FiZap className="w-6 h-6 text-amber-400" />
  },
  {
    number: "03",
    title: "Products Must Be Beautiful & Useful",
    description: "Functionality attracts users; aesthetics build brand trust. A product that works well but feels clumsy will lose to a product that combines robust backend performance with an Awwwards-level interface.",
    icon: <FiLayout className="w-6 h-6 text-purple-400" />
  },
  {
    number: "04",
    title: "Learning Never Stops in the AI Era",
    description: "The half-life of technical skills has never been shorter. Standing still is going backward. I dedicate time daily to mastering emerging frontier LLMs, agentic architectures, and modern edge frameworks.",
    icon: <FiRefreshCw className="w-6 h-6 text-pink-400" />
  },
  {
    number: "05",
    title: "Shipping Matters More Than Certificates",
    description: "The market doesn't care how many online courses you've completed. It cares what you have deployed to production, what problems you have solved, and how reliably your systems perform under real user traffic.",
    icon: <FiSend className="w-6 h-6 text-emerald-400" />
  }
];

export default function Chapter6Philosophy() {
  return (
    <section id="chapter-6" className="min-h-screen w-full py-28 px-6 md:px-12 relative z-10 flex flex-col justify-center bg-black/40">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-4 font-mono text-cyan-400 text-sm tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span>CHAPTER 6</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight max-w-4xl">
            Beyond Development: <span className="text-gradient">The Builder Mindset</span>.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            What separates a standard junior developer from a true product creator isn&apos;t just code syntax—it is philosophy. Here are the unshakeable core beliefs that govern every system I architect and every product I ship.
          </p>
        </motion.div>

        {/* Cinematic Beliefs Stack */}
        <div className="space-y-6 md:space-y-8">
          {coreBeliefs.map((belief, idx) => (
            <motion.div
              key={belief.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-r from-white/[0.07] via-white/[0.03] to-transparent border border-white/10 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
            >
              {/* Left Number & Title */}
              <div className="flex items-start sm:items-center gap-6 md:gap-8 max-w-2xl">
                <span className="font-mono text-4xl sm:text-5xl font-extrabold text-white/15 group-hover:text-cyan-400/40 transition-colors shrink-0">
                  {belief.number}
                </span>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      {belief.icon}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">// CORE PRINCIPLE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {belief.title}
                  </h3>
                </div>
              </div>

              {/* Right Description */}
              <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed max-w-xl md:text-right">
                {belief.description}
              </p>

              {/* Subtle Bottom Accent on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Large Typography Statement Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center py-12 px-6 rounded-3xl bg-gradient-to-b from-transparent to-white/[0.04] border border-white/10"
        >
          <p className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-snug">
            &ldquo;Don&apos;t Tell Me What You Learned.{' '}
            <span className="text-gradient underline decoration-cyan-500/50 underline-offset-8">Show Me What You Shipped.</span>&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
