import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Search,
  Rocket,
  ArrowUpRight,
  BrainCircuit,
  Monitor
} from 'lucide-react';

// --- Sub-components for Mission Control UI ---

const SystemStatus = () => (
  <div className="flex items-center space-x-4">
    <div className="flex items-center space-x-2">
      <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
      <div className="label-mono opacity-80 text-white">System Nominal</div>
    </div>
    <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>
    <div className="label-mono opacity-50 hidden sm:block">
      LAT: 12ms // C-04
    </div>
  </div>
);

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/5 py-4 px-8 flex justify-between items-center border-b border-white/5">
      <div className="flex flex-col select-none">
        <div className="text-2xl font-black tracking-tighter uppercase leading-none text-white">
          VEGA<span className="text-blue-500 italic">.</span>
        </div>
        <div className="text-[8px] uppercase tracking-[0.4em] font-bold text-blue-400 leading-none mt-1.5">
          Educational Associates
        </div>
      </div>

      <div className="hidden lg:flex space-x-8 text-[10px] uppercase tracking-[0.25em] font-semibold">
        {/* Navigation links will go here */}
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden md:block">
          <SystemStatus />
        </div>
        <div className="font-mono text-[10px] tracking-widest text-slate-400 tabular-nums">
          {currentTime}
        </div>
      </div>
    </nav>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070a] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white flex flex-col relative">
      <div className="scanline" />
      
      {/* Background Grid Accent */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <Navbar />

      <main className="flex-1 p-4 md:p-8 pt-24 max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bento-card bg-gradient-to-r from-blue-500/10 via-transparent to-transparent p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between overflow-hidden group"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 w-full">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
            >
              <Rocket size={48} fill="currentColor" fillOpacity={0.2} />
            </motion.div>
            
            <div className="text-center md:text-left">
              <div className="label-mono text-blue-400 mb-2">System Directive</div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight italic">
                Accelerating Excellence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-white">One Prompt At a Time</span>
              </h2>
            </div>
          </div>

          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-colors duration-1000"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI Ascension Module */}
          <motion.a 
            href="https://vega-e-a.github.io/Vega-Ed/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-card group flex items-center justify-between p-6 hover:bg-blue-500/10 transition-all border-blue-500/20"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Globe size={24} />
              </div>
              <div>
                <div className="label-mono text-blue-500 mb-1">Module: EX-01</div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                  Ai Ascension <span className="block text-sm font-light opacity-50 tracking-normal mt-1">// The Search for Intelligent Life</span>
                </h3>
              </div>
            </div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="text-blue-500 opacity-40 group-hover:opacity-100 transition-opacity ml-2 shrink-0"
            >
              <ArrowUpRight size={24} />
            </motion.div>
          </motion.a>

          {/* Ground Truth Hub Module */}
          <motion.a 
            href="https://vega-educational-associates.github.io/Mission_Control/ground-truth.html"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bento-card group flex items-center justify-between p-6 hover:bg-blue-500/10 transition-all border-blue-500/20"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <BrainCircuit size={24} />
              </div>
              <div>
                <div className="label-mono text-blue-500 mb-1">Module: GT-04</div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                  Ground Truth Hub <span className="block text-sm font-light opacity-50 tracking-normal mt-1">// Teaching the Machine Brain</span>
                </h3>
              </div>
            </div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="text-blue-500 opacity-40 group-hover:opacity-100 transition-opacity ml-2 shrink-0"
            >
              <ArrowUpRight size={24} />
            </motion.div>
          </motion.a>

          {/* Website Evolution Module */}
          <motion.a 
            href="https://vega-e-a.github.io/Breslow-Demo-Site/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bento-card group flex items-center justify-between p-6 hover:bg-blue-500/10 transition-all border-blue-500/20"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Monitor size={24} />
              </div>
              <div>
                <div className="label-mono text-blue-500 mb-1">Module: DS-09</div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                  Website Evolution <span className="block text-sm font-light opacity-50 tracking-normal mt-1">// Demo Project Site</span>
                </h3>
              </div>
            </div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="text-blue-500 opacity-40 group-hover:opacity-100 transition-opacity ml-2 shrink-0"
            >
              <ArrowUpRight size={24} />
            </motion.div>
          </motion.a>
        </div>
      </main>

      <footer className="p-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500 mt-20">
        <div className="flex flex-col">
          <div className="text-xl font-black text-white italic tracking-tighter">VEGA.</div>
          <div className="label-mono mt-1">&copy; 2026 Educational Associates</div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          <a href="#" className="label-mono hover:text-blue-400 transition-colors">Directives</a>
          <a href="#" className="label-mono hover:text-blue-400 transition-colors">Contact</a>
        </div>
        <div className="label-mono text-slate-600">
          SECURE CONNECTION // TLS 1.4-V
        </div>
      </footer>
    </div>
  );
}
