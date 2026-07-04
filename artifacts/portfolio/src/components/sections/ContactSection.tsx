import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiDownload, FiClock, FiShield, FiArrowUpRight, FiRadio } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

// Converging Particles Background Simulation
const particles = Array.from({ length: 18 }).map((_, idx) => {
  const angle = (idx / 18) * Math.PI * 2;
  const distance = 280 + (idx % 3) * 60;
  return {
    id: idx,
    startX: Math.cos(angle) * distance,
    startY: Math.sin(angle) * distance,
    duration: 3 + (idx % 4) * 0.8,
    delay: (idx % 5) * 0.3
  };
});

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isHoveredForm, setIsHoveredForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 max-w-5xl mx-auto w-full relative z-10 overflow-hidden">
      
      {/* Converging Energy Particles Simulation */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: p.startX, y: p.startY, opacity: 0, scale: 0.5 }}
            whileInView={{
              x: [p.startX, p.startX * 0.2, p.startX],
              y: [p.startY, p.startY * 0.2, p.startY],
              opacity: [0.1, 0.45, 0.1],
              scale: [0.6, 1.2, 0.6]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          />
        ))}

        {/* Core Convergence Glow */}
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-white/[0.06] via-emerald-500/[0.04] to-transparent rounded-full blur-[140px]" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <FiRadio className="text-emerald-400 animate-pulse" />
          <span>07 / START A CONVERSATION</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight max-w-3xl leading-[1.05]">
          Let&apos;s Build Something <span className="text-gradient">Extraordinary</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light max-w-xl leading-relaxed">
          Whether you are looking to architect a scalable web application, deploy autonomous AI workflows, or bring a visionary digital product to market—I am ready to build.
        </p>
      </motion.div>

      {/* Contact Studio Form Card with Glowing Interactive Physics */}
      <motion.div
        onMouseEnter={() => setIsHoveredForm(true)}
        onMouseLeave={() => setIsHoveredForm(false)}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className={`p-8 sm:p-12 md:p-16 rounded-3xl border transition-all duration-500 backdrop-blur-3xl shadow-2xl relative overflow-hidden mb-16 ${
          isHoveredForm 
            ? 'bg-white/[0.05] border-white/35 shadow-[0_0_50px_rgba(255,255,255,0.08)]' 
            : 'bg-white/[0.03] border-white/[0.1]'
        }`}
      >
        {/* Top Assurance Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08] text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2 text-white">
            <FiClock className="text-emerald-400 w-4 h-4 animate-pulse" />
            <span>24-Hour Guaranteed Response Protocol</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <FiShield className="w-3.5 h-3.5" />
            <span>Encrypted Direct Communication</span>
          </div>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-white/[0.1] border border-white/20 text-white flex items-center justify-center mx-auto shadow-md">
              <FiCheck className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-3xl font-display font-bold text-white">Message Transmitted.</h3>
            <p className="text-zinc-400 max-w-md mx-auto font-light leading-relaxed">
              Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. I have received your inquiry and will review your project scope within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block font-medium">
                  Your Name // Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Abhishek Rayampalli / Linear"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/[0.1] focus:border-white/40 focus:bg-white/[0.06] text-white placeholder:text-zinc-600 outline-none transition-all text-sm font-sans shadow-inner"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block font-medium">
                  Direct Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-14 px-5 rounded-2xl bg-white/[0.03] border border-white/[0.1] focus:border-white/40 focus:bg-white/[0.06] text-white placeholder:text-zinc-600 outline-none transition-all text-sm font-sans shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block font-medium">
                Project Scope // Vision // Timeline
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about what you are building, the technical friction you want to eliminate, or the product you want to launch..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-5 rounded-2xl bg-white/[0.03] border border-white/[0.1] focus:border-white/40 focus:bg-white/[0.06] text-white placeholder:text-zinc-600 outline-none transition-all text-sm font-sans resize-none shadow-inner leading-relaxed"
              />
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="pt-2">
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 rounded-2xl bg-white text-black hover:bg-zinc-200 font-semibold text-base shadow-[0_0_35px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2.5"
              >
                <span>Transmit Message</span>
                <FiSend className="w-4 h-4" />
              </Button>
            </motion.div>
          </form>
        )}
      </motion.div>

      {/* Direct Communication Channels & Resume Download Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Email Direct */}
        <a 
          href="mailto:abhishekrayampalli@gmail.com"
          className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/25 transition-all flex items-center justify-between group shadow-sm"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-zinc-300 group-hover:bg-white group-hover:text-black transition-all">
              <FiMail className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="font-mono text-[10px] text-zinc-500 uppercase block">Direct Email</span>
              <span className="font-sans text-xs sm:text-sm text-white font-medium truncate max-w-[140px] sm:max-w-[180px] block">
                abhishekrayampalli@gmail.com
              </span>
            </div>
          </div>
          <FiArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors w-4 h-4 shrink-0" />
        </a>

        {/* GitHub Direct */}
        <a 
          href="https://github.com/Abhi-451" 
          target="_blank" 
          rel="noreferrer"
          className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/25 transition-all flex items-center justify-between group shadow-sm"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-zinc-300 group-hover:bg-white group-hover:text-black transition-all">
              <FiGithub className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="font-mono text-[10px] text-zinc-500 uppercase block">Code Repository</span>
              <span className="font-sans text-sm text-white font-medium block">
                github.com/Abhi-451
              </span>
            </div>
          </div>
          <FiArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors w-4 h-4 shrink-0" />
        </a>

        {/* LinkedIn Direct */}
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer"
          className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/25 transition-all flex items-center justify-between group shadow-sm"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-zinc-300 group-hover:bg-white group-hover:text-black transition-all">
              <FiLinkedin className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="font-mono text-[10px] text-zinc-500 uppercase block">Professional Network</span>
              <span className="font-sans text-sm text-white font-medium block">
                LinkedIn Profile
              </span>
            </div>
          </div>
          <FiArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors w-4 h-4 shrink-0" />
        </a>

      </div>

      {/* Verified Resume Download Button Banner */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold flex items-center justify-center sm:justify-start gap-2">
            <FiDownload className="text-emerald-400" />
            <span>Official Engineering Curriculum Vitae</span>
          </span>
          <p className="text-xs font-light text-zinc-400">
            Includes verified client production deployments, education history, and full technical architecture breakdown.
          </p>
        </div>

        <Button asChild variant="outline" className="rounded-full border-white/20 hover:bg-white/[0.1] text-white text-xs font-medium px-6 h-11 shrink-0 shadow-sm">
          <a href="/resume.pdf" download="Abhishek_Rayampalli_Resume.pdf" className="flex items-center gap-2">
            <span>Download Verified Resume (.PDF)</span>
            <FiDownload className="w-3.5 h-3.5" />
          </a>
        </Button>
      </div>

    </section>
  );
}
