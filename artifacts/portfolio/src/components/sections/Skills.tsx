import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "AI & Generative AI",
    items: ["Prompt Engineering", "LLM Orchestration", "AI Agents", "RAG Pipelines", "n8n Automation"]
  },
  {
    category: "Frontend",
    items: ["Flutter", "React", "Tailwind CSS", "Responsive UI/UX", "Figma"]
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "PostgreSQL", "SQL"]
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript", "Dart", "TypeScript"]
  },
  {
    category: "SEO & Optimization",
    items: ["Metadata Optimization", "On-page SEO", "Keyword Research"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 w-full container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 flex items-center justify-end">
          <div className="h-px bg-white/10 flex-grow mr-8 hidden md:block"></div>
          <span className="text-white mr-4">Capabilities</span> <span className="text-gradient">.02</span>
        </h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="   p-8 hover:border-cyan-500/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-white/5  rounded-md text-sm text-muted-foreground group-hover:text-cyan-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
