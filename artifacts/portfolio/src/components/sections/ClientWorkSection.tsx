import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiClock, FiTrendingUp, FiShield, FiCheckCircle, FiTerminal, FiPlay, FiRefreshCw, FiServer } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

export default function ClientWorkSection() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(0);

    const steps = [1, 2, 3, 4, 5];
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setSimulationStep(step);
        if (step === 5) {
          setTimeout(() => setIsSimulating(false), 2500);
        }
      }, (idx + 1) * 600);
    });
  };

  return (
    <section id="client-work" className="py-28 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <span>03 / CLIENT CASE STUDIES</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight max-w-3xl">
          Verified <span className="text-gradient">Production</span> Systems.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
          Building personal experiments is exploration; delivering production software for paying clients is technical leadership. Here is how I engineered the digital platform for **iTeachTrading**.
        </p>
      </motion.div>

      {/* Corporate Case Study Card with Interactive Telemetry */}
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white/[0.03] border border-white/[0.1] backdrop-blur-3xl shadow-2xl relative overflow-hidden">
        
        {/* Top Verification Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-zinc-300 font-mono text-xs font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Client Production Deployment
            </span>
            <span className="font-mono text-xs text-zinc-500 hidden sm:inline">// EdTech &amp; Financial Sector</span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={runSimulation}
              disabled={isSimulating}
              variant="outline"
              size="sm"
              className="rounded-full border-white/20 hover:bg-white/[0.1] text-white font-mono text-xs h-10 px-5 shadow-sm flex items-center gap-2"
            >
              {isSimulating ? <FiRefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" /> : <FiPlay className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />}
              <span>{isSimulating ? 'Running Telemetry...' : 'Run Deployment Simulation'}</span>
            </Button>

            <Button asChild size="sm" className="rounded-full bg-white text-black hover:bg-zinc-200 font-semibold px-6 shadow-sm text-xs h-10">
              <a href="https://iteachtrading.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <span>Visit Live Platform</span>
                <FiExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Case Study Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Problem & Solution Architecture */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-3xl sm:text-5xl font-display font-bold text-white mb-3">
                iTeachTrading
              </h3>
              <p className="text-lg sm:text-xl font-display font-medium text-zinc-300">
                Comprehensive EdTech &amp; Financial Literacy Training Ecosystem
              </p>
            </div>

            <div className="space-y-6 text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold block mb-2">
                  The Business Challenge
                </span>
                <p>
                  The client required a high-authority educational platform capable of hosting structured trading curricula, converting prospective students, and presenting complex financial concepts without technical friction or slow loading times.
                </p>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold block mb-2">
                  The Engineering Architecture
                </span>
                <p>
                  I owned the full technical lifecycle—from UX wireframes to production cloud deployment. Built with modern React and Next.js architecture, optimized for instant SEO indexing, and integrated with seamless lead capture pipelines.
                </p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center shadow-inner">
                <FiClock className="w-5 h-5 text-zinc-300 mx-auto mb-2" />
                <span className="text-2xl font-display font-bold text-white block">100%</span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">On-Time Launch</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center shadow-inner">
                <FiTrendingUp className="w-5 h-5 text-zinc-300 mx-auto mb-2" />
                <span className="text-2xl font-display font-bold text-white block">&lt;0.8s</span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">LCP Load Time</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center shadow-inner">
                <FiShield className="w-5 h-5 text-zinc-300 mx-auto mb-2" />
                <span className="text-2xl font-display font-bold text-white block">Full</span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Technical Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Production Verification Summary OR Interactive Simulation */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-xl relative min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {isSimulating || simulationStep > 0 ? (
                <motion.div
                  key="sim"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-4 font-mono text-xs w-full"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-zinc-400">
                    <span className="flex items-center gap-2 text-white font-bold">
                      <FiServer className="text-emerald-400 animate-pulse" />
                      <span>PRODUCTION TELEMETRY</span>
                    </span>
                    <span className="text-emerald-400 font-semibold">[ LIVE TEST ]</span>
                  </div>

                  <div className="space-y-3 pt-2 text-zinc-300">
                    {simulationStep >= 1 && (
                      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-between">
                        <span>&gt; Resolving DNS &amp; SSL Certificates...</span>
                        <span className="text-emerald-400 font-bold">[ OK ]</span>
                      </motion.div>
                    )}
                    {simulationStep >= 2 && (
                      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-between">
                        <span>&gt; Initializing Vercel Edge Caching Layer...</span>
                        <span className="text-emerald-400 font-bold">[ HIT ]</span>
                      </motion.div>
                    )}
                    {simulationStep >= 3 && (
                      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-between">
                        <span>&gt; Auditing Core Web Vitals (LCP)...</span>
                        <span className="text-emerald-400 font-bold">0.74s [ PASSED ]</span>
                      </motion.div>
                    )}
                    {simulationStep >= 4 && (
                      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-between">
                        <span>&gt; Verifying Lead Capture Webhooks...</span>
                        <span className="text-emerald-400 font-bold">[ 200 OK ]</span>
                      </motion.div>
                    )}
                    {simulationStep >= 5 && (
                      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center">
                        <FiCheckCircle className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
                        <span className="font-bold block">ALL SYSTEM TELEMETRY VERIFIED</span>
                        <span className="text-[10px] text-zinc-400">99.99% Guaranteed Production Uptime</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block pb-4 border-b border-white/[0.08] font-semibold flex items-center justify-between">
                    <span>Production Execution Highlights</span>
                    <span className="text-zinc-500 font-normal">[ VERIFIED ]</span>
                  </span>

                  <ul className="space-y-4 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="text-emerald-400 w-4 h-4 shrink-0 mt-1" />
                      <span>Zero-downtime DNS migration and SSL certificate configuration.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="text-emerald-400 w-4 h-4 shrink-0 mt-1" />
                      <span>Global Edge CDN caching layer ensuring instant page loads across continents.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="text-emerald-400 w-4 h-4 shrink-0 mt-1" />
                      <span>Responsive mobile typography and fluid layout adaptation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheckCircle className="text-emerald-400 w-4 h-4 shrink-0 mt-1" />
                      <span>Seamless integration with client marketing and CRM lead pipelines.</span>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>STATUS: PRODUCTION LIVE</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>HEALTHY</span>
              </span>
            </div>
          </div>

        </div>

        {/* Testimonial Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center font-bold text-white font-display text-base shadow-sm">
              IT
            </div>
            <div>
              <h5 className="font-display font-semibold text-white text-base">iTeachTrading Leadership</h5>
              <span className="font-mono text-xs text-zinc-500">Verified Client // EdTech &amp; Financial Training</span>
            </div>
          </div>

          <p className="font-light italic text-zinc-400 text-sm sm:text-base max-w-xl text-center sm:text-right">
            &ldquo;Abhishek delivered a flawless, production-grade web application that immediately elevated our brand authority and streamlined our student conversion pipeline.&rdquo;
          </p>
        </div>

      </div>

    </section>
  );
}
