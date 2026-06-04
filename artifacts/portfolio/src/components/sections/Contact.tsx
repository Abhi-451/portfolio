import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 w-full container mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono mb-4">07. What's Next?</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Let's Build Something <span className="text-gradient">Intelligent</span> Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12    p-8 md:p-12">
          
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-2xl font-display font-medium text-white mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <FiMail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:abhishekrayampalli@gmail.com" className="text-lg text-white hover:text-cyan-400 transition-colors break-all">
                  abhishekrayampalli@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <FiPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href="tel:8074622656" className="text-lg text-white hover:text-cyan-400 transition-colors">
                  8074622656
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center  text-cyan-400">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-mono text-white/50 mb-1">Location</p>
                <span className="font-medium">Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent  rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent  rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-transparent  rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-cyan-500 text-white h-12 rounded-lg mt-4 group"
              >
                Send Message
                <FiSend className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
