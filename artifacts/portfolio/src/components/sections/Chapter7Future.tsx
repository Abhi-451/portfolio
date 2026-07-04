import React from 'react';
import { motion } from 'framer-motion';
import { FiCloud, FiCpu, FiUsers, FiTrendingUp, FiArrowUpRight, FiRadio } from 'react-icons/fi';

const futureAmbitions = [
  {
    goal: "01",
    title: "Build & Scale Micro-SaaS Ecosystems",
    description: "Architect and launch self-sustaining, profitable software-as-a-service products that solve hyper-specific B2B workflow inefficiencies, generating reliable recurring revenue and customer value.",
    icon: <FiCloud className="w-8 h-8 text-cyan-400" />,
    gradient: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/30"
  },
  {
    goal: "02",
    title: "Pioneer Autonomous AI Solutions",
    description: "Push the boundaries of multi-agent orchestration and frontier LLMs. Create intelligent digital workers capable of managing end-to-end customer support, automated marketing pipelines, and data analysis without human intervention.",
    icon: <FiCpu className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-500/20 to-transparent",
    border: "border-purple-500/30"
  },
  {
    goal: "03",
    title: "Impact Thousands of Daily Active Users",
    description: "Transition from local platforms to high-concurrency global applications. Experience the thrill and engineering responsibility of building fault-tolerant architectures used by tens of thousands of users worldwide.",
    icon: <FiUsers className="w-8 h-8 text-pink-400" />,
    gradient: "from-pink-500/20 to-transparent",
    border: "border-pink-500/30"
  },
  {
    goal: "04",
    title: "Build Automation-Powered Businesses",
    description: "Prove that a lean team equipped with custom AI leverage and n8n workflows can out-execute traditional 50-person corporations. Create businesses where technology handles operations while humans focus on creative innovation.",
    icon: <FiTrendingUp className="w-8 h-8 text-amber-400" />,
    gradient: "from-amber-500/20 to-transparent",
    border: "border-amber-500/30"
  }
];

export default function Chapter7Future() {
  return (
    <section id="chapter-7" className="min-h-screen w-full py-28 px-6 md:px-12 relative z-10 flex flex-col justify-center overflow-hidden">
      
      {/* Expanding Ecosystem Animated Background Waves */}
      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-gradient-to-t from-cyan-500/25 via-purple-500/20 to-transparent rounded-full blur-[170px] pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto w-full">
        
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 mb-4 font-mono text-cyan-400 text-sm tracking-widest uppercase px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <FiRadio className="text-cyan-400 animate-spin" />
            <span>CHAPTER 7 // EXPANDING HORIZON</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold text-white tracking-tight leading-none max-w-5xl">
            Ambitions Instead of <span className="text-gradient">Achievements</span>.
          </h2>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            The past is just proof of capability; the future is where true impact lives. While I am proud of the products shipped and client systems deployed, my eyes are fixed firmly on what comes next.
          </p>
        </motion.div>

        {/* Future Ambitions Expanding Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futureAmbitions.map((item, idx) => (
            <motion.div
              key={item.goal}
              initial={{ opacity: 0, y: 45, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -6 }}
              className={`group p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${item.gradient} bg-white/[0.05] border ${item.border} hover:border-white/60 transition-all duration-500 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden shadow-xl`}
            >
              {/* Corner Goal Monogram */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>
                <span className="font-mono text-4xl font-black text-white/15 group-hover:text-white/30 transition-colors">
                  GOAL // {item.goal}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 flex items-center justify-between group-hover:text-cyan-300 transition-colors">
                  <span>{item.title}</span>
                  <FiArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Roadmap Tracker Indicator */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-muted-foreground/80">
                <span>STATUS // IN ACTIVE DEVELOPMENT</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>[ NEXT GENERATION ]</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visionary Horizon Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 text-center p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl"
        >
          <p className="text-xl md:text-3xl font-mono font-light text-cyan-300/90 tracking-wide leading-relaxed">
            &ldquo;We are entering the golden age of the solo and lean product builder. With AI as our lever, there are no limits to the scale of problems we can solve.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
