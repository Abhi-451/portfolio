import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle, FiLayers, FiCpu, FiShoppingBag, FiScissors, FiTrendingUp, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const productMilestones = [
  {
    id: "MILESTONE-01",
    name: "Scuts",
    tagline: "Next-Generation Salon & Stylist Booking Ecosystem",
    category: "Full Stack Marketplace",
    icon: <FiScissors className="w-8 h-8 text-pink-400" />,
    gradient: "from-pink-500 via-rose-500 to-purple-600",
    bgAccent: "bg-pink-500/10 border-pink-500/30 text-pink-300",
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
    bgAccent: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
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
    bgAccent: "bg-purple-500/10 border-purple-500/30 text-purple-300",
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
    bgAccent: "bg-amber-500/10 border-amber-500/30 text-amber-300",
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

// Custom 3D Tilt Card Component
function TiltCard({ children, onClick, isActive, className }: { children: React.ReactNode; onClick: () => void; isActive: boolean; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    setRotate({
      x: (mouseY / height) * -18,
      y: (mouseX / width) * 18,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ 
        rotateX: rotate.x, 
        rotateY: rotate.y,
        scale: isActive ? 1.03 : 1
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      style={{ perspective: 1000 }}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Chapter3Products() {
  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
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
            Every product is an autonomous world engineered to solve undeniable market friction. Hover over each milestone to experience interactive 3D physics, or select one to enter its architectural universe.
          </p>
        </motion.div>

        {/* 3D Interactive Milestone Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {productMilestones.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <TiltCard
                key={item.id}
                onClick={() => { setActiveTab(idx); setIsExpanded(true); }}
                isActive={isActive}
                className="h-full"
              >
                <div className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden backdrop-blur-xl flex flex-col justify-between h-44 shadow-xl ${
                  isActive
                    ? 'bg-gradient-to-br from-white/20 to-white/5 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.3)]'
                    : 'bg-white/[0.04] border-white/10 hover:border-white/30 opacity-80 hover:opacity-100'
                }`}>
                  {/* Top Accent Glow Bar */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeProductTopBar" 
                      className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" 
                    />
                  )}

                  <div className="flex items-center justify-between w-full">
                    <span className="font-mono text-xs text-cyan-300 font-bold">{item.id}</span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 ${isActive ? 'bg-cyan-400 text-black scale-110 shadow-lg' : 'bg-white/10 text-white'}`}>
                      {item.icon}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-display font-bold text-white truncate mb-1">
                      {item.name}
                    </h4>
                    <span className="text-xs font-mono text-muted-foreground truncate block">
                      {item.category}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                    <span>{isActive ? 'SELECT TO EXPLORE' : 'HOVER TO TILT'}</span>
                    <FiMaximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Cinematic Expanded Product Spotlight */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30, scale: 0.97, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, scale: 0.97, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-3xl bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent border border-white/20 p-8 sm:p-12 md:p-16 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Nebula Background Glow */}
            <div className={`absolute -right-36 -top-36 w-[450px] h-[450px] bg-gradient-to-br ${currentProduct.gradient} rounded-full blur-[150px] opacity-30 pointer-events-none`} />

            {/* Top Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/15">
              <div className="flex items-center gap-3">
                <span className={`px-3.5 py-1 rounded-full border font-mono text-xs font-semibold flex items-center gap-2 ${currentProduct.bgAccent}`}>
                  <span className="w-2 h-2 rounded-full bg-current animate-ping" />
                  {currentProduct.status}
                </span>
                <span className="font-mono text-xs text-muted-foreground">// ARCHITECTURAL BLUEPRINT</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {currentProduct.githubUrl && currentProduct.githubUrl !== '#' && (
                  <Button variant="outline" size="sm" asChild className="rounded-xl border-white/20 hover:bg-white/10 text-white font-mono text-xs">
                    <a href={currentProduct.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <FiGithub className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </Button>
                )}
                {currentProduct.liveUrl && currentProduct.liveUrl !== '#' && (
                  <Button size="sm" asChild className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-95 font-semibold text-xs shadow-[0_0_20px_rgba(6,182,212,0.4)] px-5">
                    <a href={currentProduct.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <span>Enter Live Universe</span>
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Main Product Universe Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Vision & Ownership */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-4xl sm:text-6xl font-display font-extrabold text-white mb-4 leading-none">
                    {currentProduct.name}
                  </h3>
                  <p className="text-xl font-display font-medium text-gradient mb-6">
                    {currentProduct.tagline}
                  </p>
                  <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed mb-8">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Ownership Role Box */}
                <div className="bg-black/40 border border-white/15 rounded-2xl p-6 mb-8 shadow-inner">
                  <h5 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2 font-bold">
                    <FiLayers className="w-4 h-4" />
                    <span>Architectural Ownership & Role</span>
                  </h5>
                  <ul className="space-y-2.5">
                    {currentProduct.role.map((rItem, rIdx) => (
                      <li key={rIdx} className="text-sm sm:text-base text-white/90 flex items-center gap-3 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{rItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    // Core Engineering Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs hover:border-cyan-400/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Capabilities Showcase */}
              <div className="lg:col-span-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-6 sm:p-8">
                <h5 className="text-sm font-mono uppercase tracking-widest text-white mb-6 pb-4 border-b border-white/10 flex items-center gap-2 font-bold">
                  <FiCheckCircle className="text-cyan-400 w-4 h-4" />
                  <span>Platform Universe Capabilities</span>
                </h5>

                <div className="space-y-4">
                  {currentProduct.features.map((feat, fIdx) => (
                    <motion.div
                      key={fIdx}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: fIdx * 0.12 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all flex items-start gap-3.5"
                    >
                      <span className="font-mono text-cyan-400 font-extrabold text-sm shrink-0 mt-0.5">
                        [0{fIdx + 1}]
                      </span>
                      <span className="text-white/90 text-sm sm:text-base font-light leading-relaxed">
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
