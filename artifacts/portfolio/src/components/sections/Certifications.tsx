import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const certs = [
  {
    title: "AI & Machine Learning Workshop",
    issuer: "IIT Hyderabad",
    date: "2023"
  },
  {
    title: "Python Programming",
    issuer: "IBM",
    date: "2023"
  },
  {
    title: "Dart Programming",
    issuer: "IBM",
    date: "2023"
  },
  {
    title: "Prompt Engineering Fundamentals",
    issuer: "Various",
    date: "2024"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 w-full container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 flex items-center">
          <span className="text-gradient">05.</span> <span className="ml-4 text-white">Certifications</span>
          <div className="h-px bg-white/10 flex-grow ml-8 hidden md:block"></div>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="   p-6 group hover:border-cyan-500/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <FiAward className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h3>
              <p className="text-muted-foreground text-sm font-mono">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
