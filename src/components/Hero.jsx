import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronRight, Download, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-6">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[var(--accent)] text-xs font-mono mb-8 inline-block uppercase tracking-[0.3em]">
            Available for Internships 2026
          </span>
          <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter">
            Digital<br />
            <span className="text-[var(--accent)]">Execution.</span><br />
            <span className="text-[var(--text-dim)] font-light">Human Intent.</span>
          </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl text-lg md:text-xl text-[var(--text-dim)] mb-12 font-light leading-relaxed"
        >
            Ilyas Ait Oulhiane — A Creative Developer based in Morocco, 
            bridging the gap between rigid logic and expressive digital experiences.
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6 }}
           className="flex flex-wrap gap-8 items-center"
        >
            <button className="neon-btn-blue group">
                Selected Work
            </button>
            <button className="text-sm uppercase tracking-widest font-bold text-[var(--text-dim)] hover:text-[var(--text-main)] transition-colors flex items-center group">
                Contact Me
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#444]"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Scroll to Explore</span>
        <div className="w-1 h-3 bg-[#333] rounded-full"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 10, 0]
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="hidden lg:block absolute right-20 top-1/2 w-64 h-64 glass rounded-2xl p-6 border-white/5 -z-10 bg-gradient-to-br from-[#00f2ff]/5 to-[#7000ff]/5"
      >
        <div className="w-full h-full border border-dashed border-white/10 rounded-xl flex items-center justify-center">
            <MousePointer2 className="w-12 h-12 text-[#00f2ff]/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
