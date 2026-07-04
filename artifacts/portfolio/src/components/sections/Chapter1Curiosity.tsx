import React from 'react';
import { motion } from 'framer-motion';
import { FiCompass, FiLayout, FiCode, FiTrendingUp } from 'react-icons/fi';

const milestones = [
  {
    icon: <FiCompass className="w-6 h-6 text-cyan-400" />,
    step: "01",
    title: "Started With Curiosity",
    description: "It didn't begin with a textbook or a lecture. It started with a persistent fascination: looking at complex digital platforms and wondering, 'How does this actually work underneath the screen?' Every click, animation, and instant response felt like magic waiting to be decoded."
  },
  {
    icon: <FiLayout className="w-6 h-6 text-purple-400" />,
    step: "02",
    title: "Explored Design & Aesthetics",
    description: "Before writing lines of backend logic, I immersed myself in visual communication and user experience. I realized that code without empathy is just text. Beautiful interfaces, seamless glassmorphic layouts, and intuitive workflows became my obsession."
  },
  {
    icon: <FiCode className="w-6 h-6 text-pink-400" />,
    step: "03",
    title: "Mastered Full Stack Development",
    description: "Curiosity demanded mastery. I transitioned from static designs to dynamic architectures—connecting frontend responsiveness with robust database schemas, secure authentication, and cloud deployments."
  },
  {
    icon: <FiTrendingUp className="w-6 h-6 text-amber-400" />,
    step: "04",
    title: "Solving Real Business Problems",
    description: "The pivotal evolution: realizing that technology is a means to an end. Today, I don't write code just for syntax; I architect systems that eliminate friction, automate repetitive workflows, and generate real revenue for businesses."
  }
];

export default function Chapter1Curiosity() {
  return (
    <section id="chapter-1" className="min-h-screen w-full py-28 px-6 md:px-12 relative z-10 flex flex-col justify-center">
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
            <span>CHAPTER 1</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight max-w-4xl">
            The <span className="text-gradient">Curiosity</span> That Started It All.
          </h2>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            Every builder has an origin story. Mine wasn&apos;t forged in corporate boardroom meetings—it was born from late-night experiments, relentless questioning, and a deep desire to understand the mechanics of the modern web.
          </p>
        </motion.div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 p-8 md:p-10 hover:border-cyan-500/40 transition-all duration-500 backdrop-blur-md flex flex-col justify-between"
            >
              {/* Top Accent Glow on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-muted-foreground/60 group-hover:text-cyan-400/80 transition-colors">
                <span>// EVOLUTION STAGE {item.step}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative Quote Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/15 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <p className="text-xl md:text-3xl font-display italic text-white/90 text-center leading-relaxed">
            &ldquo;When you stop viewing software as code and start viewing it as a bridge between human need and automated efficiency, everything changes.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
