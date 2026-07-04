import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload, FiSend, FiCheckCircle, FiTerminal, FiRadio } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function Chapter8Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'Full Stack Web App', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate interactive transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Transmission Received!",
        description: "Thank you for reaching out, " + formData.name + ". Let's build something remarkable.",
      });
    }, 1200);
  };

  return (
    <section id="chapter-contact" className="min-h-screen w-full py-28 px-6 md:px-12 relative z-10 flex flex-col justify-center bg-black/70 overflow-hidden">
      
      {/* Background Converging Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(16)].map((_, i) => {
          const angle = (i / 16) * 360;
          const radius = 350 + (i % 3) * 120;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          return (
            <motion.div
              key={i}
              initial={{ x, y, opacity: 0.1, scale: 0.5 }}
              animate={{ 
                x: [x, 0, x], 
                y: [y, 0, y],
                opacity: [0.1, 0.7, 0.1],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: 8 + (i % 4) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            />
          );
        })}
        
        {/* Center Convergence Energy Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-purple-500/15 to-pink-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 mb-4 font-mono text-cyan-400 text-sm tracking-widest uppercase px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <FiRadio className="text-cyan-400 animate-pulse" />
            <span>FINAL CHAPTER // TRANSMISSION PORTAL</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold text-white tracking-tight leading-none max-w-5xl">
            Let&apos;s Build Something <span className="text-gradient">Together</span>.
          </h2>
        </motion.div>

        {/* Storytelling Closing Statement Banner with Elegant Typography Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 border border-white/20 backdrop-blur-2xl mb-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
          <div className="max-w-3xl mx-auto space-y-4 text-xl sm:text-2xl md:text-3xl font-display font-light text-white leading-relaxed">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/80">&ldquo;Every product begins as an idea.&rdquo;</motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-white/90">&ldquo;Every business starts with a problem.&rdquo;</motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-cyan-300 font-medium">&ldquo;Every solution starts with a conversation.&rdquo;</motion.p>
            <motion.p initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="pt-4 text-2xl sm:text-4xl font-bold text-gradient">Let&apos;s build something worth remembering.</motion.p>
          </div>
        </motion.div>

        {/* Contact & Collaboration Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Connect & Opportunities */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Open for Strategic Opportunities
              </h3>
              <p className="text-muted-foreground font-light text-base sm:text-lg leading-relaxed mb-6">
                Whether you are founding a startup that needs an end-to-end full stack product builder, an established enterprise looking to integrate autonomous AI workflows, or simply want to connect—my inbox is always open.
              </p>

              {/* Opportunity Badges with Hover Glow */}
              <div className="space-y-3">
                {[
                  "Full Stack SaaS Product Development",
                  "AI Agent & n8n Workflow Automation",
                  "Technical Co-Founding / MVP Architecture",
                  "High-Performance Web & Mobile Apps"
                ].map((opp, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="flex items-center gap-3 font-mono text-xs sm:text-sm text-cyan-300 bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 p-3.5 rounded-xl transition-all shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 animate-pulse" />
                    <span>{opp}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Direct Social Links & Resume Download */}
            <div className="pt-8 border-t border-white/10 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-4">// DIRECT COMMUNICATION CHANNELS</span>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="h-12 px-5 rounded-xl border-white/20 bg-white/5 hover:bg-white/15 hover:border-cyan-400/50 text-white font-mono text-sm transition-all shadow-md">
                    <a href="mailto:abhishekrayampalli@gmail.com" className="flex items-center gap-2">
                      <FiMail className="text-cyan-400 w-4 h-4" />
                      <span>Email Directly</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-5 rounded-xl border-white/20 bg-white/5 hover:bg-white/15 hover:border-purple-400/50 text-white font-mono text-sm transition-all shadow-md">
                    <a href="https://github.com/Abhi-451" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <FiGithub className="text-purple-400 w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-12 px-5 rounded-xl border-white/20 bg-white/5 hover:bg-white/15 hover:border-pink-400/50 text-white font-mono text-sm transition-all shadow-md">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <FiLinkedin className="text-pink-400 w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-semibold flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_45px_rgba(236,72,153,0.6)] transition-all border border-white/20">
                    <FiDownload className="w-5 h-5" />
                    <span>Download Verified Resume (.PDF)</span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Collaboration Terminal */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/20 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <FiTerminal className="w-4 h-4 animate-pulse" />
                  <span>TRANSMISSION PORTAL // INITIALIZE</span>
                </div>
                <span className="text-emerald-400 font-semibold">[ SECURE ENCRYPTED CHANNEL ]</span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <FiCheckCircle className="w-8 h-8 animate-bounce" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">Transmission Received!</h4>
                  <p className="text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
                    Your message has been logged into my active communication pipeline. I will review your inquiry and respond within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', projectType: 'Full Stack Web App', message: '' }); }}
                    className="mt-6 rounded-xl border-white/20 hover:bg-white/10"
                  >
                    Send Another Transmission
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elon Musk"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder:text-muted-foreground/40 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-sans text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elon@x.ai"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder:text-muted-foreground/40 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-sans text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Collaboration Scope</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-sans text-sm"
                    >
                      <option value="Full Stack Web App" className="bg-black text-white">Full Stack SaaS / Web Application</option>
                      <option value="AI Agent / Workflow Automation" className="bg-black text-white">AI Agent & Workflow Automation (n8n)</option>
                      <option value="Client Work / MVP Launch" className="bg-black text-white">Client Project / Production MVP Launch</option>
                      <option value="Technical Co-Founder Opportunity" className="bg-black text-white">Technical Co-Founder / Core Role</option>
                      <option value="General Conversation" className="bg-black text-white">General Inquiry / Strategic Connection</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Project Details & Objectives</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the problem you are solving, target timeline, and key technical goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder:text-muted-foreground/40 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-sans text-sm resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-xl bg-white text-black hover:bg-white/90 font-bold text-base flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <FiSend className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
