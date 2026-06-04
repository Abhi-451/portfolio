import React from 'react';
import { motion } from 'framer-motion';

export default function HudOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden mix-blend-screen opacity-70">
      
      {/* Corner Crosshairs */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50">
        <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400"></div>
      </div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-500/50">
        <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400"></div>
      </div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan-500/50">
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-400"></div>
      </div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-500/50">
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-cyan-400"></div>
      </div>

      {/* Rotating HUD Rings (Left & Right) */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -left-32 w-64 h-64 rounded-full border border-dashed border-amber-500/30"
      />
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -right-32 w-80 h-80 rounded-full border border-dotted border-cyan-500/30"
      />

      {/* Bottom Center Arc Reactor Graphic */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 rounded-full border-4 border-dashed border-cyan-400/80 shadow-[0_0_20px_#22d3ee]"
        />
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-14 h-14 rounded-full border-2 border-cyan-300 shadow-[0_0_10px_#67e8f9]"
        />
        <div className="absolute w-6 h-6 rounded-full bg-cyan-100 shadow-[0_0_30px_#cffafe]"></div>
      </div>

      {/* Random Data Streams */}
      <div className="absolute top-32 right-12 font-mono text-[10px] text-cyan-400/60 text-right leading-tight">
        <p>SYS.CORE // OPTIMAL</p>
        <p>MEM: 4096 TB</p>
        <p>TARGET: LOCKED</p>
        <p>ARC: 100%</p>
      </div>

      <div className="absolute bottom-32 left-12 font-mono text-[10px] text-amber-400/60 leading-tight">
        <p>UI.VERSION: 8.5.2</p>
        <p>RENDER: ACTIVE</p>
        <p>PROTOCOL: STARK</p>
      </div>

    </div>
  );
}
