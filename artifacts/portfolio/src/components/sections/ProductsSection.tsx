import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle, FiLayers, FiCpu, FiShoppingBag, FiScissors, FiTrendingUp, FiArrowUpRight } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

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

      {/* Luxury Bento Grid Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {products.map((item, idx) => {
          const isSelected = selectedProduct === idx;
          return (
            <motion.div
              key={item.id}
              onClick={() => setSelectedProduct(idx)}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`cursor-pointer p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-44 ${
                isSelected
                  ? 'bg-white/[0.08] border-white/40 shadow-xl'
                  : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-xs text-zinc-400 font-semibold">{item.id}</span>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  isSelected ? 'bg-white text-black font-bold' : 'bg-white/[0.05] text-zinc-400'
                }`}>
                  {item.icon}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-display font-bold text-white truncate mb-1">
                  {item.name}
                </h4>
                <span className="text-xs font-mono text-zinc-500 truncate block">
                  {item.category}
                </span>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>{isSelected ? 'Currently Selected' : 'Select to View'}</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Editorial Product Spotlight Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProduct}
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Top Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 font-mono text-xs text-zinc-300 font-medium">
                {products[selectedProduct].status}
              </span>
              <span className="font-mono text-xs text-zinc-500 hidden sm:inline">// {products[selectedProduct].category}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {products[selectedProduct].githubUrl && products[selectedProduct].githubUrl !== '#' && (
                <Button variant="outline" size="sm" asChild className="rounded-full border-white/15 hover:bg-white/[0.08] text-white text-xs font-medium">
                  <a href={products[selectedProduct].githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <FiGithub className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </Button>
              )}
              {products[selectedProduct].liveUrl && products[selectedProduct].liveUrl !== '#' && (
                <Button size="sm" asChild className="rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold px-5 shadow-sm">
                  <a href={products[selectedProduct].liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <span>Visit Platform</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Product Spotlight Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
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

              {/* Ownership Box */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                  Architectural Role &amp; Ownership
                </span>
                <span className="font-sans font-light text-sm sm:text-base text-zinc-300">
                  {products[selectedProduct].role}
                </span>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-3">
                  Core Engineering Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {products[selectedProduct].techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Features Checklist */}
            <div className="lg:col-span-5 bg-white/[0.02] border border-white/[0.06] rounded-3xl p-6 sm:p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-6 pb-4 border-b border-white/[0.06] font-semibold">
                Key Platform Capabilities
              </span>

              <div className="space-y-4">
                {products[selectedProduct].features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                    <FiCheckCircle className="text-white w-4 h-4 shrink-0 mt-1" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
}
