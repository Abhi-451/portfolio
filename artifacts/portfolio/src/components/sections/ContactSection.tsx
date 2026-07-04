import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload, FiSend, FiCheckCircle, FiMessageSquare } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'Full Stack Web Application', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Received!",
        description: "Thank you for reaching out, " + formData.name + ". I will respond within 24 hours.",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20 text-center flex flex-col items-center"
      >
        <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <span>06 / START A CONVERSATION</span>
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight max-w-4xl">
          Let&apos;s Build Something <span className="text-gradient">Remarkable</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
          Whether you are founding a startup that needs an end-to-end full stack architect, an established enterprise integrating AI workflows, or simply want to connect—my inbox is open.
        </p>
      </motion.div>

      {/* Contact Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Connect & Resume */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Open for Strategic Collaboration
            </h3>
            <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed mb-8">
              I partner with founders and product teams who value engineering rigor, clean aesthetic design, and high-velocity execution.
            </p>

            {/* Core Specialties Badges */}
            <div className="space-y-3">
              {[
                "Full Stack SaaS Development & Architecture",
                "Autonomous AI Agent & n8n Workflow Automation",
                "Technical Co-Founding / Production MVP Launch",
                "High-Performance E-Commerce & Web Platforms"
              ].map((spec, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 font-mono text-xs sm:text-sm text-zinc-300 bg-white/[0.03] border border-white/[0.08] p-3.5 rounded-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Social Links & Resume Download */}
          <div className="pt-8 border-t border-white/[0.08] space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-4">// DIRECT COMMUNICATION CHANNELS</span>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="h-11 px-5 rounded-full border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white font-mono text-xs transition-all">
                  <a href="mailto:abhishekrayampalli@gmail.com" className="flex items-center gap-2">
                    <FiMail className="w-3.5 h-3.5" />
                    <span>abhishekrayampalli@gmail.com</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-11 px-5 rounded-full border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white font-mono text-xs transition-all">
                  <a href="https://github.com/Abhi-451" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <FiGithub className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-11 px-5 rounded-full border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white font-mono text-xs transition-all">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <FiLinkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <Button size="lg" className="w-full sm:w-auto h-13 px-8 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-sm flex items-center justify-center gap-3 shadow-md transition-all">
                <FiDownload className="w-4 h-4" />
                <span>Download Verified Resume (.PDF)</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Minimalist Message Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08] font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2 text-white font-semibold">
                <FiMessageSquare className="w-4 h-4" />
                <span>DIRECT INQUIRY FORM</span>
              </div>
              <span className="text-zinc-400 font-normal">// 24-HOUR RESPONSE GUARANTEE</span>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-white/[0.08] border border-white/20 rounded-full flex items-center justify-center mx-auto text-white shadow-sm">
                  <FiCheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-display font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-zinc-400 max-w-md mx-auto font-light leading-relaxed">
                  Thank you for reaching out. Your inquiry has been delivered directly to my inbox. I will review your message and respond shortly.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', projectType: 'Full Stack Web Application', message: '' }); }}
                  className="mt-6 rounded-full border-white/15 hover:bg-white/[0.08] text-xs"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-all font-sans text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-all font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">Project Scope</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-white/40 transition-all font-sans text-sm"
                  >
                    <option value="Full Stack Web Application" className="bg-black text-white">Full Stack SaaS / Web Application</option>
                    <option value="AI Agent & Workflow Automation" className="bg-black text-white">AI Agent &amp; Workflow Automation (n8n)</option>
                    <option value="Client Project / MVP Launch" className="bg-black text-white">Client Project / Production MVP Launch</option>
                    <option value="Technical Co-Founder Opportunity" className="bg-black text-white">Technical Co-Founder / Strategic Role</option>
                    <option value="General Conversation" className="bg-black text-white">General Inquiry / Strategic Connection</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">Message Details</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share a brief overview of what you are building, timeline, and goals..."
                    className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-all font-sans text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-13 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Clean Footer */}
      <div className="mt-24 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
        <span>&copy; {new Date().getFullYear()} Rayampalli Abhishek. All rights reserved.</span>
        <span>Architected with React, Tailwind CSS &amp; Framer Motion.</span>
      </div>

    </section>
  );
}
