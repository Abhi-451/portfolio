import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle, FiCpu, FiShoppingBag, FiScissors, FiTrendingUp, FiArrowUpRight, FiLayers } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

// 3D Mouse Tilt Card Physics Wrapper
function TiltCard({ children, onClick, isSelected }: { children: React.ReactNode; onClick: () => void; isSelected: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12; // Max 12 deg tilt
    const rotateY = ((x - centerX) / centerX) * 12;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        rotateX: rotate.x, 
        rotateY: rotate.y,
        scale: isSelected ? 1.02 : 1
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      style={{ perspective: 1000 }}
      className={`cursor-pointer p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-48 relative overflow-hidden ${
        isSelected
          ? 'bg-white/[0.09] border-white/45 shadow-[0_10px_35px_rgba(255,255,255,0.12)]'
          : 'bg-white/[0.02] border-white/[0.06] hover:border-white/25 opacity-80 hover:opacity-100 shadow-lg'
      }`}
    >
      {/* 3D Depth Shimmer Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08), transparent 70%)`
        }}
      />
      {children}
    </motion.div>
  );
}

const products = [
  {
    id: "01",
    name: "Scuts",
    tagline: "Next-Generation Salon & Stylist Scheduling Ecosystem",
    category: "SaaS & Marketplace Platform",
    icon: <FiScissors className="w-6 h-6 text-zinc-300" />,
    description: "A comprehensive SaaS booking platform engineered to modernize salon management and scheduling. Built from the ground up to handle high-frequency concurrent appointments with real-time stylist availability and automated conflict resolution.",
    features: [
      "Real-Time Stylist Discovery & Portfolio Showcase",
      "Automated Multi-Slot Appointment Booking Engine",
      "Verified Customer Ratings & Review Moderation",
      "Dynamic Service & Menu Management Dashboard"
    ],
    role: "End-to-End Full Stack Architecture & Product Ownership",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    status: "Production Ready",
    liveUrl: "https://scuts.app",
    githubUrl: "https://github.com/Abhi-451/scuts"
  },
  {
    id: "02",
    name: "LocalFluence",
    tagline: "Hyper-Local Influencer & Business Collaboration Engine",
    category: "Marketing Automation Platform",
    icon: <FiTrendingUp className="w-6 h-6 text-zinc-300" />,
    description: "Bridging the gap between brick-and-mortar local businesses and high-engagement neighborhood creators. Designed to replace messy DM negotiations with structured, verifiable partnership workflows and ROI tracking.",
    features: [
      "Algorithmic Influencer Discovery by Geo-Location & Niche",
      "End-to-End Campaign Collaboration & Proposal Workflows",
      "Automated Deliverable Tracking & Verification",
      "Local Business ROI & Marketing Analytics Dashboard"
    ],
    role: "Core Product Architecture & Database Schema Design",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Vercel"],
    status: "Active Platform",
    liveUrl: "https://localfluence.io",
    githubUrl: "https://github.com/Abhi-451/localfluence"
  },
  {
    id: "03",
    name: "Luxtry",
    tagline: "High-Performance Modern Luxury E-Commerce Architecture",
    category: "E-Commerce Infrastructure",
    icon: <FiShoppingBag className="w-6 h-6 text-zinc-300" />,
    description: "An ultra-responsive e-commerce platform built for speed, visual immersion, and frictionless checkout. Architected to support heavy image assets without sacrificing core web vitals or sub-second loading speeds.",
    features: [
      "Sub-Second Dynamic Product Discovery & Instant Filtering",
      "Immersive High-Definition Shopping & Lookbook Experience",
      "Scalable Microservices-Ready Backend Architecture",
      "Optimized Cart & One-Click Checkout Flow"
    ],
    role: "Frontend Architecture & Performance Optimization",
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    status: "Scalable Architecture",
    liveUrl: "https://luxtry.store",
    githubUrl: "https://github.com/Abhi-451/luxtry"
  },
  {
    id: "04",
    name: "AI Job Hunter Agent",
    tagline: "Autonomous 24/7 Career Opportunity & Application Pipeline",
    category: "AI & Workflow Automation",
    icon: <FiCpu className="w-6 h-6 text-zinc-300" />,
    description: "A showcase of practical AI automation leverage. An autonomous multi-agent workflow that continuously scrapes, evaluates, and acts on targeted career and client opportunities while humans sleep.",
    features: [
      "24/7 Autonomous Job Scraper Across Major Tech Job Boards",
      "LLM-Powered Opportunity Filtering Based on Custom Criteria",
      "Dynamic Tailored Cover Letter & Application Generation",
      "Instant Telegram & Email Push Notifications for Hot Matches"
    ],
    role: "Autonomous Workflow Engineering & Prompt Architecture",
    techStack: ["AI Agents", "n8n", "LLM APIs", "Python", "Workflow Automation"],
    status: "Autonomous System",
    liveUrl: "#",
    githubUrl: "https://github.com/Abhi-451/ai-job-hunter"
  }
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(0);

  return (
    <section id="products" className="py-28 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <span>02 / FEATURED PRODUCTS</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight max-w-3xl">
          Building Real <span className="text-gradient">Products</span>.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
          Every application is an autonomous ecosystem engineered to solve undeniable market friction. Here is a curated selection of platforms and AI workflows I have designed, built, and launched.
        </p>
      </motion.div>

      {/* Luxury Bento Grid Selector with 3D Tilt Physics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {products.map((item, idx) => {
          const isSelected = selectedProduct === idx;
          return (
            <TiltCard
              key={item.id}
              onClick={() => setSelectedProduct(idx)}
              isSelected={isSelected}
            >
              <div className="flex items-center justify-between w-full relative z-10">
                <span className="font-mono text-xs text-zinc-400 font-semibold flex items-center gap-1.5">
                  <FiLayers className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.id}</span>
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isSelected ? 'bg-white text-black font-bold shadow-md scale-110' : 'bg-white/[0.05] text-zinc-400'
                }`}>
                  {item.icon}
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="text-xl font-display font-bold text-white truncate mb-1">
                  {item.name}
                </h4>
                <span className="text-xs font-mono text-zinc-500 truncate block">
                  {item.category}
                </span>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400 relative z-10">
                <span className={isSelected ? 'text-emerald-400 font-semibold' : ''}>
                  {isSelected ? 'ACTIVE BLUEPRINT' : 'Select to View'}
                </span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </TiltCard>
          );
        })}
      </div>

      {/* Editorial Product Spotlight Showcase with Dramatic Expansion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProduct}
          initial={{ opacity: 0, y: 25, scale: 0.96, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, scale: 0.96, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white/[0.03] border border-white/[0.1] backdrop-blur-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Ambient Spotlight */}
          <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-bl from-white/[0.05] to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Top Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08] relative z-10">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 font-mono text-xs text-emerald-400 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{products[selectedProduct].status}</span>
              </span>
              <span className="font-mono text-xs text-zinc-500 hidden sm:inline">// {products[selectedProduct].category}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {products[selectedProduct].githubUrl && products[selectedProduct].githubUrl !== '#' && (
                <Button variant="outline" size="sm" asChild className="rounded-full border-white/20 hover:bg-white/[0.1] text-white text-xs font-medium h-10 px-5 shadow-sm">
                  <a href={products[selectedProduct].githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <FiGithub className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </Button>
              )}
              {products[selectedProduct].liveUrl && products[selectedProduct].liveUrl !== '#' && (
                <Button size="sm" asChild className="rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold px-6 h-10 shadow-md">
                  <a href={products[selectedProduct].liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <span>Visit Platform</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Product Spotlight Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* Left Column: Description & Role */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
              <div>
                <h3 className="text-4xl sm:text-5xl font-display font-bold text-white mb-3 tracking-tight">
                  {products[selectedProduct].name}
                </h3>
                <p className="text-lg font-display font-medium text-zinc-300 mb-6">
                  {products[selectedProduct].tagline}
                </p>
                <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
                  {products[selectedProduct].description}
                </p>
              </div>

              {/* Ownership Box with Physical Depth */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-inner">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5">
                  Architectural Role &amp; Ownership
                </span>
                <span className="font-sans font-medium text-sm sm:text-base text-white">
                  {products[selectedProduct].role}
                </span>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-3.5">
                  Core Engineering Stack
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {products[selectedProduct].techStack.map((tech, tIdx) => (
                    <motion.span 
                      key={tIdx} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tIdx * 0.06 }}
                      className="px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300 text-xs font-medium shadow-sm hover:border-white/30 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Features Checklist */}
            <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-6 pb-4 border-b border-white/[0.08] font-semibold flex items-center justify-between">
                <span>Key Platform Capabilities</span>
                <span className="text-emerald-400 font-mono">[ VERIFIED ]</span>
              </span>

              <div className="space-y-4">
                {products[selectedProduct].features.map((feat, fIdx) => (
                  <motion.div 
                    key={fIdx} 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: fIdx * 0.1 }}
                    className="flex items-start gap-3.5 text-sm sm:text-base text-zinc-300 font-light leading-relaxed"
                  >
                    <FiCheckCircle className="text-emerald-400 w-4 h-4 shrink-0 mt-1" />
                    <span>{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
}
