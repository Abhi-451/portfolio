import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle, FiLayers, FiCpu, FiShoppingBag, FiScissors, FiTrendingUp } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const productMilestones = [
  {
    id: "MILESTONE-01",
    name: "Scuts",
    tagline: "Next-Generation Salon & Stylist Booking Ecosystem",
    category: "Full Stack Marketplace",
    icon: <FiScissors className="w-8 h-8 text-pink-400" />,
    gradient: "from-pink-500 via-rose-500 to-purple-600",
    description: "A comprehensive SaaS booking platform engineered to revolutionize salon management and customer scheduling. Built from the ground up to handle high-frequency concurrent appointments with real-time stylist availability.",
    features: [
      "Real-Time Stylist Discovery & Portfolio Showcase",
      "Automated Multi-Slot Appointment Booking Engine",
      "Verified Customer Ratings & Review Moderation",
      "Dynamic Service & Menu Management Dashboard",
      "Intelligent Staff Scheduling & Conflict Resolution"
    ],
    role: [
      "End-to-End Full Stack Development",
      "Product & Feature Iteration Based on User Feedback",
      "User Experience & Conversion Rate Optimization"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    status: "PRODUCTION READY",
    liveUrl: "https://scuts.app",
    githubUrl: "https://github.com/Abhi-451/scuts"
  },
  {
    id: "MILESTONE-02",
    name: "LocalFluence",
    tagline: "Hyper-Local Influencer & Business Collaboration Engine",
    category: "Marketing Automation Platform",
    icon: <FiTrendingUp className="w-8 h-8 text-cyan-400" />,
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    description: "Bridging the gap between brick-and-mortar local businesses and high-engagement neighborhood creators. Designed to replace messy DM negotiations with structured, verifiable partnership workflows.",
    features: [
      "Algorithmic Influencer Discovery by Geo-Location & Niche",
      "End-to-End Campaign Collaboration & Proposal Workflows",
      "Automated Deliverable Tracking & Verification",
      "Local Business ROI & Marketing Analytics Dashboard",
      "Secure Escrow & Milestone Payment Integration"
    ],
    role: [
      "Core Product Architecture & Database Schema Design",
      "Full Stack Platform Development & API Integration",
      "Cloud Deployment & Infrastructure Scaling"
    ],
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Vercel"],
    status: "ACTIVE PLATFORM",
    liveUrl: "https://localfluence.io",
    githubUrl: "https://github.com/Abhi-451/localfluence"
  },
  {
    id: "MILESTONE-03",
    name: "Luxtry",
    tagline: "High-Performance Modern Luxury E-Commerce Architecture",
    category: "E-Commerce Infrastructure",
    icon: <FiShoppingBag className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-500 via-indigo-500 to-pink-500",
    description: "An ultra-responsive e-commerce platform built for speed, visual immersion, and frictionless checkout. Architected to support heavy image assets without sacrificing core web vitals.",
    features: [
      "Sub-Second Dynamic Product Discovery & Instant Filtering",
      "Immersive High-Definition Shopping & Lookbook Experience",
      "Scalable Microservices-Ready Backend Architecture",
      "Optimized Cart & One-Click Checkout Flow",
      "Automated Inventory & Order Processing System"
    ],
    role: [
      "Frontend Architecture & Performance Optimization",
      "Backend Database Design & Cart Management",
      "UI/UX Design Systems Implementation"
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    status: "SCALABLE ARCHITECTURE",
    liveUrl: "https://luxtry.store",
    githubUrl: "https://github.com/Abhi-451/luxtry"
  },
  {
    id: "MILESTONE-04",
    name: "AI Job Hunter Agent",
    tagline: "Autonomous 24/7 Career Opportunity & Application Pipeline",
    category: "AI & Workflow Automation",
    icon: <FiCpu className="w-8 h-8 text-amber-400" />,
    gradient: "from-amber-500 via-orange-500 to-red-600",
    description: "A showcase of practical AI automation leverage. An autonomous multi-agent workflow that continuously scrapes, evaluates, and acts on career opportunities while humans sleep.",
    features: [
      "24/7 Autonomous Job Scraper Across Major Tech Job Boards",
      "LLM-Powered Opportunity Filtering Based on Custom Persona Criteria",
      "Dynamic Tailored Cover Letter & Application Generation",
      "Instant Telegram/Email Push Notifications for Hot Matches",
      "Automated Spreadsheets & CRM Application Pipeline Tracking"
    ],
    role: [
      "Autonomous Workflow Engineering & Prompt Architecture",
      "n8n & LLM API Pipeline Orchestration",
      "Webhook & Real-Time Alert System Setup"
    ],
    techStack: ["AI Agents", "n8n", "LLM APIs", "Python", "Workflow Automation"],
    status: "AUTONOMOUS SYSTEM",
    liveUrl: "#",
    githubUrl: "https://github.com/Abhi-451/ai-job-hunter"
  }
];

export default function Chapter3Products() {
  const [activeTab, setActiveTab] = useState(0);
  const currentProduct = productMilestones[activeTab];

  return (
    <section id="chapter-3" className="min-h-screen w-full py-28 px-6 md:px-12 relative z-10 flex flex-col justify-center">
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
            <span>CHAPTER 3</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight max-w-4xl">
            Building Real <span className="text-gradient">Products</span>.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            I don&apos;t build toy projects or tutorial clones. I build comprehensive SaaS platforms, multi-sided marketplaces, and autonomous AI pipelines designed to solve genuine friction in the market. Here are my major product milestones.
          </p>
        </motion.div>

        {/* Milestone Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-12">
          {productMilestones.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 md:p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden backdrop-blur-md flex flex-col justify-between h-28 md:h-36 ${
                  isActive
                    ? 'bg-gradient-to-br from-white/15 to-white/5 border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.2)]'
                    : 'bg-white/[0.03] border-white/5 hover:border-white/20 opacity-75 hover:opacity-100'
                }`}
              >
                {/* Active Top Border Glow */}
                {isActive && (
                  <motion.div 
                    layoutId="activeTabBorder" 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" 
                  />
                )}

                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-xs text-muted-foreground">{item.id}</span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-white/10 text-white' : 'text-white/60'}`}>
                    {item.icon}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-display font-bold text-white truncate">
                    {item.name}
                  </h4>
                  <span className="text-xs font-mono text-cyan-400 truncate block mt-1">
                    {item.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Product Cinematic Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent border border-white/15 p-8 md:p-14 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className={`absolute -right-32 -top-32 w-96 h-96 bg-gradient-to-br ${currentProduct.gradient} rounded-full blur-[140px] opacity-25 pointer-events-none`} />

            {/* Top Bar Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {currentProduct.status}
                </span>
                <span className="font-mono text-xs text-muted-foreground">// {currentProduct.id}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {currentProduct.githubUrl && currentProduct.githubUrl !== '#' && (
                  <Button variant="outline" size="sm" asChild className="rounded-xl border-white/15 hover:bg-white/10">
                    <a href={currentProduct.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <FiGithub className="w-4 h-4" />
                      <span>Repository</span>
                    </a>
                  </Button>
                )}
                {currentProduct.liveUrl && currentProduct.liveUrl !== '#' && (
                  <Button size="sm" asChild className="rounded-xl bg-white text-black hover:bg-white/90 font-medium">
                    <a href={currentProduct.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <span>Live Platform</span>
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Main Product Presentation Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Description & Roles */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4 leading-tight">
                    {currentProduct.name}
                  </h3>
                  <p className="text-lg md:text-xl font-medium text-gradient mb-6">
                    {currentProduct.tagline}
                  </p>
                  <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-8">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Role Highlights */}
                <div className="bg-black/30 border border-white/10 rounded-2xl p-6 mb-8">
                  <h5 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
                    <FiLayers className="w-4 h-4" />
                    <span>My Role & Ownership</span>
                  </h5>
                  <ul className="space-y-2">
                    {currentProduct.role.map((rItem, rIdx) => (
                      <li key={rIdx} className="text-sm md:text-base text-white/90 flex items-center gap-2.5 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{rItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    // Architecture Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white font-mono text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Features Breakdown */}
              <div className="lg:col-span-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 md:p-8">
                <h5 className="text-sm font-mono uppercase tracking-widest text-white mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
                  <FiCheckCircle className="text-cyan-400 w-4 h-4" />
                  <span>Key Platform Capabilities & Features</span>
                </h5>

                <div className="space-y-4">
                  {currentProduct.features.map((feat, fIdx) => (
                    <motion.div
                      key={fIdx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: fIdx * 0.1 }}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors flex items-start gap-3"
                    >
                      <span className="font-mono text-cyan-400 font-bold text-sm shrink-0 mt-0.5">
                        [0{fIdx + 1}]
                      </span>
                      <span className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                        {feat}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
