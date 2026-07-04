import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiClock, FiTrendingUp, FiShield, FiCheckCircle } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

export default function ClientWorkSection() {
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

      {/* Corporate Case Study Card */}
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl shadow-2xl relative overflow-hidden">
        
        {/* Top Verification Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300 font-mono text-xs font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Verified Client Production Deployment
            </span>
            <span className="font-mono text-xs text-zinc-500 hidden sm:inline">// EdTech &amp; Financial Sector</span>
          </div>

          <Button asChild size="sm" className="rounded-full bg-white text-black hover:bg-zinc-200 font-semibold px-6 shadow-sm text-xs">
            <a href="https://iteachtrading.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span>Visit Live Platform</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </Button>
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
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                <FiClock className="w-5 h-5 text-zinc-300 mx-auto mb-2" />
                <span className="text-2xl font-display font-bold text-white block">100%</span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">On-Time Launch</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                <FiTrendingUp className="w-5 h-5 text-zinc-300 mx-auto mb-2" />
                <span className="text-2xl font-display font-bold text-white block">&lt;0.8s</span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">LCP Load Time</span>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                <FiShield className="w-5 h-5 text-zinc-300 mx-auto mb-2" />
                <span className="text-2xl font-display font-bold text-white block">Full</span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Technical Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Production Verification Summary */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 sm:p-8">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-6 pb-4 border-b border-white/[0.06] font-semibold">
              Production Execution Highlights
            </span>

            <ul className="space-y-4 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-white w-4 h-4 shrink-0 mt-1" />
                <span>Zero-downtime DNS migration and SSL certificate configuration.</span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-white w-4 h-4 shrink-0 mt-1" />
                <span>Global Edge CDN caching layer ensuring instant page loads across continents.</span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-white w-4 h-4 shrink-0 mt-1" />
                <span>Responsive mobile typography and fluid layout adaptation.</span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-white w-4 h-4 shrink-0 mt-1" />
                <span>Seamless integration with client marketing and CRM lead pipelines.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Testimonial Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center font-bold text-white font-display text-base">
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
