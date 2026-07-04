import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiTrendingUp, FiShield, FiClock, FiExternalLink, FiServer, FiActivity, FiTerminal, FiPlay } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

export default function Chapter4ClientWork() {
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(0);

  const triggerDeploymentSimulation = () => {
    setIsDeploying(true);
    setDeployStep(1);
    setTimeout(() => setDeployStep(2), 800);
    setTimeout(() => setDeployStep(3), 1600);
    setTimeout(() => setDeployStep(4), 2400);
    setTimeout(() => setIsDeploying(false), 3400);
  };

  return (
    <section id="chapter-4" className="min-h-screen w-full py-28 px-6 md:px-12 relative z-10 flex flex-col justify-center bg-black/50">
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
            <span>CHAPTER 4 // PRODUCTION TRUST</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight max-w-4xl">
            Client Work & <span className="text-gradient">Case Studies</span>.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            Building personal projects is exploration; delivering production systems for paying clients is leadership. Here is how I translated complex business requirements into a robust, high-availability platform for **iTeachTrading**.
          </p>
        </motion.div>

        {/* Client Case Study Container */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          {/* Ambient Corporate Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          {/* Top Verification Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                VERIFIED PRODUCTION DEPLOYMENT
              </span>
              <span className="font-mono text-xs text-muted-foreground">// CLIENT: ITEACHTRADING</span>
            </div>

            <Button asChild size="sm" className="rounded-xl bg-white text-black hover:bg-white/90 font-bold px-6 shadow-lg">
              <a href="https://iteachtrading.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <span>Visit Live Platform</span>
                <FiExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Left Column: Business Problem & Solution */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4">
                  iTeachTrading
                </h3>
                <p className="text-lg sm:text-xl font-display font-medium text-cyan-300">
                  Comprehensive EdTech & Financial Literacy Training Ecosystem
                </p>
              </div>

              <div className="space-y-6 text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-white/80 font-bold mb-2">// THE BUSINESS CHALLENGE</h4>
                  <p>
                    The client required a premium, trustworthy educational platform capable of hosting structured trading curricula, converting prospective students, and presenting financial concepts without technical friction or slow loading times.
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-white/80 font-bold mb-2">// THE ENGINEERING SOLUTION</h4>
                  <p>
                    I owned the full technical lifecycle—from UX wireframes to production deployment. Built with modern React and Next.js architecture, optimized for instant SEO indexing, and integrated with seamless lead capture pipelines.
                  </p>
                </div>
              </div>

              {/* Trust & Impact Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                  <FiClock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <span className="text-2xl font-display font-bold text-white block">100%</span>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">On-Time Delivery</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                  <FiTrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <span className="text-2xl font-display font-bold text-white block">&lt;0.8s</span>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">LCP Load Time</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                  <FiShield className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <span className="text-2xl font-display font-bold text-white block">Full</span>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Technical Ownership</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Deployment Launch Simulator */}
            <div className="lg:col-span-5 bg-black/60 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative shadow-inner">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-cyan-400">
                  <FiServer className="w-4 h-4 animate-pulse" />
                  <span className="font-bold">LIVE TELEMETRY & LAUNCH PROTOCOL</span>
                </div>
                <span className="text-emerald-400 font-semibold">[ 99.99% UPTIME ]</span>
              </div>

              {/* Terminal Simulator Display */}
              <div className="bg-black/80 rounded-2xl p-5 border border-white/10 font-mono text-xs space-y-3 mb-6 min-h-[180px] shadow-inner">
                <div className="text-white/40">// DEPLOYMENT PIPELINE SIMULATION</div>
                
                {deployStep >= 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-cyan-300 flex items-center gap-2">
                    <FiTerminal className="shrink-0" />
                    <span>&gt; Resolving DNS & SSL certificates for iteachtrading.com...</span>
                  </motion.div>
                )}
                {deployStep >= 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-purple-300 flex items-center gap-2">
                    <FiActivity className="shrink-0 animate-spin" />
                    <span>&gt; Optimizing global Edge CDN caching layers...</span>
                  </motion.div>
                )}
                {deployStep >= 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-amber-300 flex items-center gap-2">
                    <FiServer className="shrink-0" />
                    <span>&gt; Verifying LCP performance metrics: 0.74s [PASSED]...</span>
                  </motion.div>
                )}
                {deployStep >= 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 font-bold pt-2 border-t border-white/10 flex items-center gap-2">
                    <FiCheckCircle className="shrink-0" />
                    <span>&gt; SYSTEM LIVE IN PRODUCTION. ALL TESTS PASSED.</span>
                  </motion.div>
                )}
                {deployStep === 0 && !isDeploying && (
                  <div className="text-muted-foreground/60 py-8 text-center">
                    Click button below to test live deployment sequence...
                  </div>
                )}
              </div>

              <Button
                onClick={triggerDeploymentSimulation}
                disabled={isDeploying}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500 hover:text-black font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] flex items-center justify-center gap-2"
              >
                {isDeploying ? (
                  <>
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                    <span>SIMULATING LAUNCH SEQUENCE...</span>
                  </>
                ) : (
                  <>
                    <FiPlay className="w-4 h-4" />
                    <span>RUN DEPLOYMENT SIMULATION</span>
                  </>
                )}
              </Button>
            </div>

          </div>

          {/* Client Testimonial Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white font-display text-lg shadow-md">
                IT
              </div>
              <div>
                <h5 className="font-display font-bold text-white text-base">iTeachTrading Leadership</h5>
                <span className="font-mono text-xs text-muted-foreground">Verified Production Client // EdTech Sector</span>
              </div>
            </div>

            <p className="font-light italic text-white/80 text-sm sm:text-base max-w-xl text-center sm:text-right">
              &ldquo;Abhishek delivered a flawless, production-grade web application that immediately elevated our brand authority and streamlined our student conversion pipeline.&rdquo;
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
