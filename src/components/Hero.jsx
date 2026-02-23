import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronRight, Download, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-6">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1 rounded-full border border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/5 text-[var(--neon-blue)] text-xs font-mono mb-6 inline-block uppercase tracking-wider">
            Available for Internships
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            Developer & <br />
            <span className="neon-text-blue">Creative</span> <span className="neon-text-purple italic">Designer</span>
          </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-[var(--text-dim)] mb-12 h-8 font-light"
        >
            <Typewriter
                words={[
                    'Computer Science Student at IFIAG',
                    'Building modern digital experiences',
                    'UI/UX & Creative Identity',
                    'Solving problems through code'
                ]}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
            />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6 }}
           className="flex flex-wrap gap-6"
        >
            <button className="neon-btn-blue flex items-center group">
                View My Projects
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 rounded-lg glass border border-white/10 text-white font-semibold flex items-center hover:bg-white/5 transition-all">
                Download CV
                <Download className="ml-2 w-4 h-4" />
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
