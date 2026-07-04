import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiExternalLink, FiShield, FiTrendingUp, FiServer, FiCode, FiUserCheck } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

export default function Chapter4ClientWork() {
  return (
    <section id="chapter-4" className="min-h-screen w-full py-28 px-6 md:px-12 relative z-10 flex flex-col justify-center bg-black/40">
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
            <span>CHAPTER 4</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight max-w-4xl">
            Client Work & <span className="text-gradient">Production Delivery</span>.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            Writing code for personal projects is one thing; deploying high-availability software for paying clients with real business stakes is another. This case study demonstrates my capacity to take full ownership from initial requirement gathering to production launch.
          </p>
        </motion.div>

        {/* Featured Premium Case Study: iTeachTrading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent border border-white/15 p-8 sm:p-12 md:p-16 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Ambient Trust Blue Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />

          {/* Top Bar Label */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                VERIFIED CLIENT SUCCESS
              </span>
              <span className="font-mono text-xs text-muted-foreground">// CASE STUDY 01</span>
            </div>

            <Button size="sm" asChild className="rounded-xl bg-white text-black hover:bg-white/90 font-semibold px-5">
              <a href="https://iteachtrading.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <span>Visit Live Website</span>
                <FiExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Client Overview & Story */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3">
                <FiShield className="w-4 h-4" />
                <span>Financial Education Platform</span>
              </div>
              
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
                iTeachTrading
              </h3>

              <p className="text-xl font-display font-medium text-gradient mb-6">
                Engineered, deployed, and launched a production-grade trading education platform from scratch.
              </p>

              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-8">
                iTeachTrading needed a reliable, high-converting digital platform to onboard students, deliver trading curriculum, and establish authority in the competitive financial education market. I was entrusted with full technical ownership to transform their educational curriculum into a seamless online experience.
              </p>

              {/* Responsibilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <FiCode className="text-cyan-400" />, title: "Full Stack Development", desc: "Custom responsive frontend & modular backend logic." },
                  { icon: <FiServer className="text-purple-400" />, title: "Production Deployment", desc: "Zero-downtime server setup, CDN, & SSL configuration." },
                  { icon: <FiTrendingUp className="text-pink-400" />, title: "Production Launch", desc: "Managed end-to-end launch protocols & traffic scaling." },
                  { icon: <FiUserCheck className="text-amber-400" />, title: "Business Requirements", desc: "Translated educational goals into high-converting UI." }
                ].map((resp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                      {resp.icon}
                    </div>
                    <div>
                      <h5 className="font-display font-semibold text-white text-sm">{resp.title}</h5>
                      <p className="text-muted-foreground text-xs font-light mt-1">{resp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge Footer */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 flex items-center gap-4">
                <FiCheckCircle className="text-cyan-400 w-6 h-6 shrink-0" />
                <p className="text-xs md:text-sm text-cyan-200/90 font-light">
                  <strong>Production Verified:</strong> This system currently operates live, serving real students and maintaining 99.9% uptime with optimized core web vitals.
                </p>
              </div>
            </div>

            {/* Right: Client Metrics & Architecture Spotlights */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
                <span className="font-mono text-xs text-muted-foreground uppercase">// RESULT 01</span>
                <h4 className="text-4xl md:text-5xl font-display font-extrabold text-white my-2">100%</h4>
                <p className="text-sm text-cyan-300 font-medium">On-Time Production Launch</p>
                <p className="text-xs text-muted-foreground mt-2 font-light">Delivered the complete educational platform within the client&apos;s strict go-to-market timeframe without scope creep.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
                <span className="font-mono text-xs text-muted-foreground uppercase">// RESULT 02</span>
                <h4 className="text-4xl md:text-5xl font-display font-extrabold text-white my-2">&lt;0.8s</h4>
                <p className="text-sm text-purple-300 font-medium">Page Load & First Contentful Paint</p>
                <p className="text-xs text-muted-foreground mt-2 font-light">Architected lightweight bundle delivery to ensure instant loading for students across mobile and desktop devices.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
                <span className="font-mono text-xs text-muted-foreground uppercase">// RESULT 03</span>
                <h4 className="text-4xl md:text-5xl font-display font-extrabold text-white my-2">Full</h4>
                <p className="text-sm text-pink-300 font-medium">End-to-End Ownership</p>
                <p className="text-xs text-muted-foreground mt-2 font-light">Direct communication with stakeholder leadership, removing the need for external project managers or agencies.</p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
